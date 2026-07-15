import { redirect } from "next/navigation";

// Login centralizado: a única forma de entrar na suíte é pelo hub
// (gateway). Esta tela não existe mais como formulário — só redireciona
// pra lá. Mantida como rota (em vez de removida) pra qualquer link/bookmark
// antigo apontando pra /sign-in continuar funcionando, só que agora
// mandando pro lugar certo.
const HUB_URL = "https://praxis-systems.com.br/bnbflex";

export default function SignInPage() {
  redirect(HUB_URL);
}
