import type {
  Unit,
  ChecklistItem,
  Inspection,
  InspectionItem,
  InspectionItemLogEntry,
  MaintenanceUser,
} from "@prisma/client";

export type { Unit, ChecklistItem };

/** Formato retornado por getInspecoes() em app/actions/data.ts. */
export type InspecaoComUnidade = Inspection & {
  unit: Unit;
  inspector: MaintenanceUser | null;
  items: (InspectionItem & { logHistory: InspectionItemLogEntry[] })[];
};

export type DashboardUser = {
  name: string;
  email: string;
  role?: string;
  propertyName?: string;
};

export type ViewId =
  | "gerencial"
  | "evolucao"
  | "informacoes"
  | "controle"
  | "rota"
  | "config";
