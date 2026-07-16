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
// hub em vez de um /sign-in local. SEM cookie válido ainda não sabemos de
// qual cliente/tenant é essa pessoa (múltiplos clientes, cada um em
// praxis-systems.com.br/<slug> — ver visão de produto), então cai na raiz
// genérica do domínio, não mais fixo num tenant específico.
const HUB_URL_GENERICO = "https://praxis-systems.com.br/";

// Cookies emitidos antes deste campo existir não têm tenantSlug ainda (só
// tenantId) — cai na raiz genérica em vez de gerar ".../undefined" até a
// pessoa logar de novo (o que já reemite o cookie completo).
function tenantHubUrl(suiteSession: { tenantSlug?: string }) {
  return suiteSession.tenantSlug ? `https://praxis-systems.com.br/${suiteSession.tenantSlug}` : HUB_URL_GENERICO;
}

// Precisa bater com `basePath` de next.config.js. `new URL(next, req.url)`
// SUBSTITUI o path inteiro (não concatena) quando `next` começa com "/" —
// isso apaga o prefixo /upkeep da URL final e manda pro domínio errado
// (404 no gateway, que não tem rota solta nesse caminho). Por isso o
// redirect de sucesso abaixo precisa prefixar manualmente.
const BASE_PATH = "/upkeep";

export async function GET(req: NextRequest) {
  const next = req.nextUrl.searchParams.get("next") || "/";

  const suiteSession = await getSuiteSession();
  if (!suiteSession) {
    return NextResponse.redirect(HUB_URL_GENERICO);
  }
  if (!suiteSession.modules.includes("MAINTENANCE")) {
    // Sessão válida, só sem esse módulo — manda pro hub DESSE tenant.
    return NextResponse.redirect(tenantHubUrl(suiteSession));
  }

  const account = await prisma.maintenanceAccount.findUnique({ where: { tenantId: suiteSession.tenantId } });
  if (!account) {
    return NextResponse.redirect(tenantHubUrl(suiteSession));
  }

  // Ponte de identidade: dados operacionais (Inspection, WhatsappRecipient
  // etc.) referenciam o id LOCAL de MaintenanceUser (cuid antigo), não o id
  // do suite_core.User (uuid novo, gerado do zero em scripts/migrate-users.mjs
  // via gen_random_uuid() — não preserva o id local). Usar suiteSession.userId
  // direto como `sub` quebra qualquer filtro por userId pra quem já existia
  // antes da migração (mesma causa raiz do bug "0 UHs" no housekeeping).
  // Resolve pelo email (case-insensitive: migrate-users.mjs grava sempre
  // lowercase em suite_core) e usa o id LOCAL no token.
  let localUser = await prisma.maintenanceUser.findFirst({
    where: { accountId: account.id, email: { equals: suiteSession.email, mode: "insensitive" } },
  });

  // Auto-heal: cobre quem ganhou acesso a MAINTENANCE pelo painel de outro
  // módulo (ver UsuariosTab do housekeeping) e nunca teve um MaintenanceUser
  // local — sem isso, a pessoa fica travada mesmo com o módulo liberado.
  // Mesmo padrão já usado no booking-reviews (auto-cria/atualiza o espelho
  // local no login silencioso).
  if (!localUser) {
    localUser = await prisma.maintenanceUser.create({
      data: {
        accountId: account.id,
        name: suiteSession.nome,
        email: suiteSession.email,
        passwordHash: null,
        role: suiteSession.role === "MASTER" ? "MASTER" : "PADRAO",
      },
    });
  }

  // Mesmo formato que o callback `jwt()` de src/lib/auth.ts produz.
  const token = await encode({
    token: {
      sub: localUser.id,
      name: suiteSession.nome,
      email: suiteSession.email,
      role: suiteSession.role,
      accountId: account.id,
      tenantId: suiteSession.tenantId,
      tenantSlug: suiteSession.tenantSlug,
      propertyName: account.propertyName,
    },
    secret: process.env.NEXTAUTH_SECRET!,
    maxAge: 30 * 24 * 60 * 60,
  });

  const useSecureCookies = process.env.NODE_ENV === "production";
  const cookieName = `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`;

  const res = NextResponse.redirect(new URL(`${BASE_PATH}${next}`, req.url));
  res.cookies.set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: useSecureCookies,
    maxAge: 30 * 24 * 60 * 60,
  });
  return res;
}
