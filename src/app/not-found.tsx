import ButtonLink from "@/components/buttons/button-link";
import Title from "@/components/titles/title";

export default function NotFound() {
  return (
    <section className="container">
      <Title>Página não encontrada</Title>
      <ButtonLink href="/" className="mb-4 inline-block">
        Volte para a Home.
      </ButtonLink>
    </section>
  );
}
