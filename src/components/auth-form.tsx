"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** Login only — não há auto-cadastro; usuários são criados pelo MASTER em Configurações. */
export function AuthForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await signIn("credentials", { email, password, redirect: false });

    setLoading(false);

    if (res?.error) {
      setError("E-mail ou senha inválidos.");
      return;
    }

    // Emite, junto, o cookie de sessão compartilhado entre os 3 módulos —
    // é o que permite entrar em Governança/Reviews sem digitar senha de novo.
    await fetch("/api/auth/suite-session/issue", { method: "POST" });

    router.push("/");
    router.refresh();
  };

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-4">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background shadow-lg">
            <span className="text-lg font-semibold tracking-tight">BF</span>
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
            BNB Flex
          </h1>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            Sistema de manutenção e inspeção preventiva.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="voce@exemplo.com"
                className="h-11 rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="h-11 rounded-xl"
              />
            </div>

            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-xl text-[15px] font-medium"
            >
              {loading ? "Aguarde..." : "Entrar"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
