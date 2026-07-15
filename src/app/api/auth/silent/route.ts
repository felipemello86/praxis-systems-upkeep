import { NextRequest, NextResponse } from "next/server";
import { encode } from "next-auth/jwt";
import { getSuiteSession } from "@/lib/suiteSession";
import { prisma } from "@/lib/prisma";

/**
 * "Ponte" de login silencioso: se a pessoa já logou em QUALQUER módulo (tem
 * o cookie compartilhado válido, ver suiteSession.ts) e tem acesso a este
 * módulo (MAINTENANCE), estabelece a sessão NextAuth deste app sem pedir
 * senha de novo. Se não, manda pro /sign-in normal.
 */
// URL do hub de módulos (gateway) — login agora só acontece lá (ver
// apps/gateway/src/app/[cliente]/page.tsx). Este app não tem mais tela de
// login própria usável: se não tem sessão compartilhada válida, manda pro
// hub em vez de um /sign-in local.
const HUB_URL = "https://praxis-systems.com.br/bnbflex";

export async function GET(req: NextRequest) {
  const next = req.nextUrl.searchParams.get("next") || "/";
  const signInUrl = HUB_URL;

  const suiteSession = await getSuiteSession();
  if (!suiteSession || !suiteSession.modules.includes("MAINTENANCE")) {
    return NextResponse.redirect(signInUrl);
  }

  const account = await prisma.maintenanceAccount.findUnique({ where: { tenantId: suiteSession.tenantId } });
  if (!account) {
    return NextResponse.redirect(signInUrl);
  }

  // Mesmo formato que o callback `jwt()` de src/lib/auth.ts produz.
  const token = await encode({
    token: {
      sub: suiteSession.userId,
      name: suiteSession.nome,
      email: suiteSession.email,
      role: suiteSession.role,
      accountId: account.id,
      tenantId: suiteSession.tenantId,
      propertyName: account.propertyName,
    },
    secret: process.env.NEXTAUTH_SECRET!,
    maxAge: 30 * 24 * 60 * 60,
  });

  const useSecureCookies = process.env.NODE_ENV === "production";
  const cookieName = `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`;

  const res = NextResponse.redirect(new URL(next, req.url));
  res.cookies.set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: useSecureCookies,
    maxAge: 30 * 24 * 60 * 60,
  });
  return res;
}
