"use client";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  // basePath explícito: o next-auth/react client não herda o basePath do
  // Next.js sozinho (NEXTAUTH_URL é uma env var só de servidor, não chega
  // no bundle do navegador) — sem isso, as chamadas internas do NextAuth
  // (signIn/signOut/getSession) saem sem o prefixo /upkeep.
  //
  // Importante: esse "basePath" do NextAuth é o caminho COMPLETO das rotas
  // dele (default "/api/auth"), não só o basePath do Next.js — por isso é
  // "/upkeep/api/auth", e não só "/upkeep".
  return (
    <SessionProvider basePath="/upkeep/api/auth">{children}</SessionProvider>
  );
}
