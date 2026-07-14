import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AuthForm } from "@/components/auth-form";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/");
  return <AuthForm />;
}
