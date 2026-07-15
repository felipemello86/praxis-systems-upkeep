import { NextResponse } from "next/server";
import { clearSuiteSessionCookie } from "@/lib/suiteSession";

/** Chamado ao fazer logout — encerra também a sessão compartilhada entre os 3 módulos. */
export async function POST() {
  await clearSuiteSessionCookie();
  return NextResponse.json({ ok: true });
}
