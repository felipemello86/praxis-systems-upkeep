import { redirect } from "next/navigation";

// Login centralizado: a única forma de entrar na suíte é pelo hub
// (gateway). Esta tela não existe mais como formulário — só redireciona
// pra lá. Mantida como rota (em vez de removida) pra qualquer link/bookmark
// antigo apontando pra /sign-in continuar funcionando, só que agora
// mandando pro lugar certo. Sem sessão nenhuma aqui pra saber de qual
// tenant é a pessoa — manda pra raiz genérica do domínio.
const HUB_URL_GENERICO = "https://praxis-systems.com.br/";

export default function SignInPage() {
  redirect(HUB_URL_GENERICO);
}
