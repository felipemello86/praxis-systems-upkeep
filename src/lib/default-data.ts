// Não usado mais no fluxo de auth/seed automático (o sistema real não
// popula dados fake pro tenant). Guardado por enquanto: o catálogo de itens
// abaixo é mais completo que o catálogo atual em produção e pode valer a
// pena reaproveitar como checklist padrão sugerido ao criar um novo Unit
// (ver task de rewiring dos componentes de view) — por isso não foi
// reduzido a stub vazio.

export const CATEGORIAS = ["Elétrica", "Hidráulica", "Estrutural", "Acabamento"] as const;

export type Categoria = (typeof CATEGORIAS)[number];

export const ITENS_PADRAO_SUGESTAO: {
  nome: string;
  categoria: Categoria;
  periodicidade: number;
}[] = [
  { nome: "Disjuntores e quadro de força", categoria: "Elétrica", periodicidade: 180 },
  { nome: "Tomadas e interruptores", categoria: "Elétrica", periodicidade: 180 },
  { nome: "Iluminação ambientes", categoria: "Elétrica", periodicidade: 90 },
  { nome: "Chuveiro elétrico", categoria: "Elétrica", periodicidade: 90 },
  { nome: "Ar-condicionado", categoria: "Elétrica", periodicidade: 90 },
  { nome: "Torneiras e registros", categoria: "Hidráulica", periodicidade: 90 },
  { nome: "Vaso sanitário e caixa acoplada", categoria: "Hidráulica", periodicidade: 90 },
  { nome: "Vazamentos aparentes", categoria: "Hidráulica", periodicidade: 60 },
  { nome: "Paredes e fissuras", categoria: "Estrutural", periodicidade: 365 },
  { nome: "Portas e fechaduras", categoria: "Estrutural", periodicidade: 180 },
  { nome: "Infiltrações", categoria: "Estrutural", periodicidade: 90 },
  { nome: "Pintura paredes", categoria: "Acabamento", periodicidade: 365 },
  { nome: "Limpeza geral", categoria: "Acabamento", periodicidade: 30 },
];
