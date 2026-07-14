import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// O NextAuth v4 no App Router EXIGE que o segmento catch-all se chame
// literalmente [...nextauth] (ver assertConfig em next-auth/core) — a
// pasta original do protótipo V0 (Better Auth) se chamava [...all], o que
// causava MISSING_NEXTAUTH_API_ROUTE_ERROR em qualquer chamada.
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
