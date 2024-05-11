// produtos/[id]/page.tsx
type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
};

type PageParams = {
  params: {
    slug: string;
  };
};

export default async function ProdutoPage({ params }: PageParams) {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.slug}`,
  );
  const data = (await response.json()) as Produto;

  return (
    <main>
      <h1>Produto: {params.slug}</h1>
      <h2>R$ {data.preco}</h2>
      <p>{data.descricao}</p>
    </main>
  );
}
