import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";
import Title from "@/components/titles/title";

export default async function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  const { data } = await photosGet({ user: params.user });

  if (!data) return null;

  return (
    <section className="container mainSection">
      <Title>{params.user}</Title>
      <Feed photos={data} user={params.user} />
    </section>
  );
}
