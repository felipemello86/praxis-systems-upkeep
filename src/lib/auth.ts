import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import { suitePrisma } from "./suitePrisma";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/sign-in" },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Cadastro único (suite_core) — não é mais a tabela local
        // `MaintenanceUser`. Ver src/lib/suitePrisma.ts.
        const suiteUser = await suitePrisma.user.findFirst({
          where: { email: credentials.email, ativo: true },
        });
        if (!suiteUser || !suiteUser.passwordHash) return null;

        const valid = await bcrypt.compare(credentials.password, suiteUser.passwordHash);
        if (!valid) return null;

        const access = await suitePrisma.userModuleAccess.findUnique({
          where: { userId_module: { userId: suiteUser.id, module: "MAINTENANCE" } },
        });
        if (!access?.enabled) return null;

        // Bridge pra MaintenanceAccount local (já tinha tenantId).
        const account = await prisma.maintenanceAccount.findUnique({
          where: { tenantId: suiteUser.tenantId },
        });
        if (!account) return null;

        const tenant = await suitePrisma.tenant.findUnique({ where: { id: suiteUser.tenantId } });

        return {
          id: suiteUser.id,
          name: suiteUser.nome,
          email: suiteUser.email,
          role: suiteUser.role,
          accountId: account.id,
          tenantId: suiteUser.tenantId,
          tenantSlug: tenant?.slug ?? null,
          propertyName: account.propertyName,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.accountId = (user as any).accountId;
        token.tenantId = (user as any).tenantId;
        token.tenantSlug = (user as any).tenantSlug;
        token.propertyName = (user as any).propertyName;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
        (session.user as any).role = token.role;
        (session.user as any).accountId = token.accountId;
        (session.user as any).tenantId = token.tenantId;
        (session.user as any).tenantSlug = token.tenantSlug;
        (session.user as any).propertyName = token.propertyName;
      }
      return session;
    },
  },
};
