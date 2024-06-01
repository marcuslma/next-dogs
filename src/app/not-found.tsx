import Link from "next/link";

import Title from "@/components/titles/title";

export default function NotFound() {
  return (
    <section className="container">
      <Title>Página não encontrada</Title>

      <Link
        className="button"
        style={{ marginBottom: "1rem", display: "inline-block" }}
        href={"/"}
      >
        Volte para a Home.
      </Link>
    </section>
  );
}
