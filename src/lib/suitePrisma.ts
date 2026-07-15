// Client do suite_core (cadastro único de usuário) — schema copiado em
// prisma/suite-core/schema.prisma (ver comentário lá). Conexão separada do
// banco de negócio deste app (usa SUITE_CORE_DATABASE_URL, não DATABASE_URL).
import { PrismaClient } from "../../generated/suite-core";

const globalForPrisma = globalThis as unknown as {
  suitePrisma: PrismaClient | undefined;
};

export const suitePrisma = globalForPrisma.suitePrisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.suitePrisma = suitePrisma;
}
