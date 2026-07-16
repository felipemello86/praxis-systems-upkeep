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

  // BUG (corrigido): `user.id` aqui é o id LOCAL deste app (a ponte de login
  // silencioso — src/app/api/auth/silent/route.ts — grava `sub: localUser.id`
  // no token NextAuth, não o id do suite_core). Esse endpoint roda a CADA
  // carregamento de tela (ver dashboard.tsx), não só no login, e usava esse
  // id local direto contra `suite_core.UserModuleAccess.userId` (que é o id
  // do suite_core) — que praticamente nunca bate. Resultado: `access` sempre
  // vinha vazio, e o cookie compartilhado `praxis_session` era regravado com
  // `modules: []` toda vez que qualquer tela do Maintenance era aberta,
  // derrubando o acesso aos outros módulos mesmo pra quem tinha módulo
  // liberado. Mesma causa raiz, mesmo fix aplicado em housekeeping. Resolve
  // o id do suite_core por email (mesmo padrão, na direção oposta, do que
  // silent/route.ts já faz).
  const suiteUser = await suitePrisma.user.findFirst({
    where: { tenantId: user.tenantId, email: { equals: user.email, mode: "insensitive" } },
    select: { id: true },
  });
  if (!suiteUser) {
    return NextResponse.json({ error: "Usuário não encontrado no cadastro único" }, { status: 401 });
  }

  const access = await suitePrisma.userModuleAccess.findMany({
    where: { userId: suiteUser.id, enabled: true },
    select: { module: true },
  });

  await setSuiteSessionCookie({
    userId: suiteUser.id,
    tenantId: user.tenantId,
    tenantSlug: user.tenantSlug,
    nome: user.name,
    email: user.email,
    role: user.role,
    modules: access.map((a) => a.module),
  });

  return NextResponse.json({ ok: true });
}
