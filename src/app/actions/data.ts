"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { suitePrisma } from "@/lib/suitePrisma";
import { revalidatePath } from "next/cache";

async function getAccountId() {
  const session = await getServerSession(authOptions);
  const accountId = (session?.user as any)?.accountId as string | undefined;
  if (!accountId) throw new Error("Unauthorized");
  return accountId;
}

async function getTenantId() {
  const session = await getServerSession(authOptions);
  const tenantId = (session?.user as any)?.tenantId as string | undefined;
  if (!tenantId) throw new Error("Unauthorized");
  return tenantId;
}

async function getCurrentUserId() {
  const session = await getServerSession(authOptions);
  return (session?.user as any)?.id as string | undefined;
}

/* ------------------------------- Unidades ------------------------------- */

export async function getUnidades() {
  const accountId = await getAccountId();
  return prisma.unit.findMany({ where: { accountId }, orderBy: { name: "asc" } });
}

export async function createUnidade(input: { name: string; itemIds?: number[] }) {
  const accountId = await getAccountId();
  await prisma.unit.create({
    data: { accountId, name: input.name, itemIds: input.itemIds ?? [] },
  });
  revalidatePath("/");
}

export async function updateUnidade(
  id: string,
  input: Partial<{ name: string; itemIds: number[] }>,
) {
  const accountId = await getAccountId();
  await prisma.unit.updateMany({ where: { id, accountId }, data: input });
  revalidatePath("/");
}

export async function deleteUnidade(id: string) {
  const accountId = await getAccountId();
  await prisma.unit.deleteMany({ where: { id, accountId } });
  revalidatePath("/");
}

/* ---------------------------- Itens de catálogo -------------------------- */

export async function getItens() {
  const accountId = await getAccountId();
  return prisma.checklistItem.findMany({
    where: { accountId },
    orderBy: [{ category: "asc" }, { name: "asc" }],
  });
}

export async function createItem(input: {
  name: string;
  category: string;
  subDescription?: string;
}) {
  const accountId = await getAccountId();
  const max = await prisma.checklistItem.aggregate({
    where: { accountId },
    _max: { legacyId: true },
  });
  const legacyId = (max._max.legacyId ?? 0) + 1;

  await prisma.checklistItem.create({
    data: {
      accountId,
      legacyId,
      name: input.name,
      category: input.category,
      subDescription: input.subDescription ?? null,
    },
  });
  revalidatePath("/");
}

export async function updateItem(
  id: string,
  input: Partial<{ name: string; category: string; subDescription: string }>,
) {
  const accountId = await getAccountId();
  await prisma.checklistItem.updateMany({ where: { id, accountId }, data: input });
  revalidatePath("/");
}

export async function deleteItem(id: string) {
  const accountId = await getAccountId();
  await prisma.checklistItem.deleteMany({ where: { id, accountId } });
  revalidatePath("/");
}

/* ------------------------------ Inspeções -------------------------------- */

export async function getInspecoes() {
  const accountId = await getAccountId();
  return prisma.inspection.findMany({
    where: { accountId },
    include: { unit: true, items: { include: { logHistory: true } }, inspector: true },
    orderBy: { date: "desc" },
  });
}

export async function getInspecaoItens(inspectionId: string) {
  const accountId = await getAccountId();
  return prisma.inspectionItem.findMany({
    where: { inspectionId, inspection: { accountId } },
    include: { logHistory: true },
  });
}

export async function createInspecao(input: {
  unitId: string;
  inspectorId?: string;
  date?: string; // yyyy-mm-dd, default hoje
  itens: { itemLegacyId: number; status: "CONFORME" | "NAO_CONFORME"; comment?: string }[];
}) {
  const accountId = await getAccountId();
  const date = input.date ? new Date(`${input.date}T00:00:00.000Z`) : new Date();
  const inspectorId = input.inspectorId ?? (await getCurrentUserId()) ?? null;

  const insp = await prisma.inspection.create({
    data: {
      accountId,
      unitId: input.unitId,
      inspectorId,
      date,
      items: {
        create: input.itens.map((it) => ({
          itemLegacyId: it.itemLegacyId,
          status: it.status,
          comment: it.comment ?? null,
        })),
      },
    },
  });

  revalidatePath("/");
  return insp.id;
}

export async function deleteInspecao(id: string) {
  const accountId = await getAccountId();
  await prisma.inspection.deleteMany({ where: { id, accountId } });
  revalidatePath("/");
}

/* ------------------------------- Usuários --------------------------------- */
// Cadastro único (suite_core.User) — não é mais a tabela local
// `MaintenanceUser`. Ver src/lib/suitePrisma.ts.

const GLOBAL_ROLES = ["MASTER", "GERENTE", "GOVERNANTA", "CAMAREIRA", "LAVANDERIA", "MANUTENCAO", "ATENDIMENTO"] as const;
export type GlobalRoleName = (typeof GLOBAL_ROLES)[number];

export async function getUsuarios() {
  const tenantId = await getTenantId();
  const users = await suitePrisma.user.findMany({
    where: { tenantId, ativo: true },
    orderBy: { nome: "asc" },
    include: { moduleAccess: { where: { enabled: true }, select: { module: true } } },
  });
  return users.map((u) => ({
    id: u.id,
    name: u.nome,
    email: u.email,
    role: u.role,
    ativo: u.ativo,
    createdAt: u.createdAt,
    modules: u.moduleAccess.map((m) => m.module),
  }));
}

export async function createUsuario(input: {
  name: string;
  email: string;
  password: string;
  role: GlobalRoleName;
  modules?: string[];
}) {
  const tenantId = await getTenantId();
  const bcrypt = await import("bcryptjs");
  const passwordHash = await bcrypt.hash(input.password, 10);
  const moduleList = input.modules && input.modules.length > 0 ? input.modules : ["MAINTENANCE"];

  await suitePrisma.user.create({
    data: {
      tenantId,
      nome: input.name,
      email: input.email,
      passwordHash,
      role: input.role as any,
      moduleAccess: { create: moduleList.map((module) => ({ module: module as any, enabled: true })) },
    },
  });
  revalidatePath("/");
}

export async function updateUsuario(
  id: string,
  input: Partial<{ name: string; role: GlobalRoleName; ativo: boolean; modules: string[] }>,
) {
  const { modules, ...rest } = input;
  await suitePrisma.user.update({
    where: { id },
    data: { ...(rest.name ? { nome: rest.name } : {}), ...(rest.role ? { role: rest.role as any } : {}), ...(rest.ativo !== undefined ? { ativo: rest.ativo } : {}) },
  });
  if (modules) {
    await suitePrisma.userModuleAccess.deleteMany({ where: { userId: id } });
    if (modules.length > 0) {
      await suitePrisma.userModuleAccess.createMany({
        data: modules.map((module) => ({ userId: id, module: module as any, enabled: true })),
      });
    }
  }
  revalidatePath("/");
}

export async function deleteUsuario(id: string) {
  await suitePrisma.user.update({ where: { id }, data: { ativo: false } });
  revalidatePath("/");
}
