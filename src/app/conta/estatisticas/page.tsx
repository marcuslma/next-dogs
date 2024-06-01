import { Metadata } from "next";
import dynamic from "next/dynamic";

import statsGet from "@/actions/stats-get";

const ContaEstatisticas = dynamic(
  () => import("@/components/conta/conta-estatisticas"),
  {
    loading: () => (
      <section>
        <p>Carregando...</p>
      </section>
    ),
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Estatísticas | Minha Conta",
};

export default async function EstatisticasPage() {
  const { data } = await statsGet();

  if (!data) return null;
  return <ContaEstatisticas data={data} />;
}
