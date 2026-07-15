/**
 * Sessão compartilhada entre os 3 módulos (Governança/Upkeep/Reviews) —
 * cadastro único: logar em qualquer um seta este cookie, e os outros o
 * reconhecem pra logar a pessoa automaticamente ali também (sem pedir senha
 * de novo), desde que ela tenha acesso àquele módulo.
 *
 * Não substitui a sessão própria de cada app (aqui, o NextAuth) — é um
 * cookie EXTRA, emitido junto no momento do login (ver
 * src/app/api/auth/suite-session/issue/route.ts), e consultado só na
 * "ponte" de login silencioso (ver src/app/api/auth/silent/route.ts).
 *
 * MESMO código (secret, nome do cookie, formato do payload) precisa existir
 * em apps/housekeeping e apps/booking-reviews — se mudar aqui, mudar lá
 * também. `SUITE_SESSION_SECRET` precisa ser IGUAL nos 3 apps na Vercel.
 */
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import type { SuiteModule } from "../../generated/suite-core";

const secret = new TextEncoder().encode(
  process.env.SUITE_SESSION_SECRET || "dev-secret-change-in-production"
);

export const SUITE_SESSION_COOKIE = "praxis_session";
const SUITE_SESSION_TTL = "30d";

export interface SuiteSessionPayload {
  userId: string;
  tenantId: string;
  nome: string;
  email: string;
  role: string;
  modules: SuiteModule[];
}

export async function signSuiteSession(payload: SuiteSessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(SUITE_SESSION_TTL)
    .sign(secret);
}

export async function verifySuiteSession(token: string): Promise<SuiteSessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as unknown as SuiteSessionPayload;
  } catch {
    return null;
  }
}

export async function getSuiteSession(): Promise<SuiteSessionPayload | null> {
  const token = (await cookies()).get(SUITE_SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySuiteSession(token);
}

export async function setSuiteSessionCookie(payload: SuiteSessionPayload) {
  const token = await signSuiteSession(payload);
  (await cookies()).set(SUITE_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearSuiteSessionCookie() {
  (await cookies()).delete({ path: "/", name: SUITE_SESSION_COOKIE });
}
