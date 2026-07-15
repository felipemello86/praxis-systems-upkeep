import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { suitePrisma } from "@/lib/suitePrisma";
import { setSuiteSessionCookie } from "@/lib/suiteSession";

/**
 * Chamado pela tela de login logo após um `signIn()` bem-sucedido — emite,
 * junto com a sessão NextAuth, o cookie compartilhado entre os 3 módulos
 * (ver src/lib/suiteSession.ts).
 */
export async function POST() {
  const session = await getServerSession(authOptions);
  const user = session?.user as any;
  if (!user?.id || !user?.tenantId) {
    return NextResponse.json({ error: "Sem sessão" }, { status: 401 });
  }

  const access = await suitePrisma.userModuleAccess.findMany({
    where: { userId: user.id, enabled: true },
    select: { module: true },
  });

  await setSuiteSessionCookie({
    userId: user.id,
    tenantId: user.tenantId,
    nome: user.name,
    email: user.email,
    role: user.role,
    modules: access.map((a) => a.module),
  });

  return NextResponse.json({ ok: true });
}
