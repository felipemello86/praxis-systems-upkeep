import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getUnidades, getItens, getInspecoes } from "@/app/actions/data";
import { Dashboard } from "@/components/dashboard";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/sign-in");

  const [unidades, itens, inspecoes] = await Promise.all([
    getUnidades(),
    getItens(),
    getInspecoes(),
  ]);

  const user = session.user as any;

  return (
    <Dashboard
      user={{ name: user.name, email: user.email, role: user.role, propertyName: user.propertyName }}
      unidades={unidades}
      itens={itens}
      inspecoes={inspecoes}
    />
  );
}
