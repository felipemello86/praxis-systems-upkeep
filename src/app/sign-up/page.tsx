import { redirect } from "next/navigation";

// Não há auto-cadastro neste sistema: usuários são criados por um MASTER em
// Configurações > Usuários. Esta rota não pôde ser removida neste ambiente
// (restrição do sandbox), então só redireciona.
export default function SignUpPage() {
  redirect("/sign-in");
}
