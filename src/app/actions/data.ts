"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function getAccountId() {
  const session = await getServerSession(authOptions);
  const accountId = (session?.user as any)?.accountId as string | undefined;
  if (!accountId) throw new Error("Unauthorized");
  return accountId;
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

export async function getUsuarios() {
  const accountId = await getAccountId();
  return prisma.maintenanceUser.findMany({
    where: { accountId },
    orderBy: { name: "asc" },
    select: { id: true, name: true, email: true, role: true, ativo: true, createdAt: true },
  });
}

export async function createUsuario(input: {
  name: string;
  email: string;
  password: string;
  role: "MASTER" | "PADRAO";
}) {
  const accountId = await getAccountId();
  const bcrypt = await import("bcryptjs");
  const passwordHash = await bcrypt.hash(input.password, 10);

  await prisma.maintenanceUser.create({
    data: {
      accountId,
      name: input.name,
      email: input.email,
      passwordHash,
      role: input.role,
    },
  });
  revalidatePath("/");
}

export async function updateUsuario(
  id: string,
  input: Partial<{ name: string; role: "MASTER" | "PADRAO"; ativo: boolean }>,
) {
  const accountId = await getAccountId();
  await prisma.maintenanceUser.updateMany({ where: { id, accountId }, data: input });
  revalidatePath("/");
}

export async function deleteUsuario(id: string) {
  const accountId = await getAccountId();
  await prisma.maintenanceUser.deleteMany({ where: { id, accountId } });
  revalidatePath("/");
}
