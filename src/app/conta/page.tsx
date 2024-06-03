import { Metadata } from "next";

import photosGet from "@/actions/photos-get";
import userGet from "@/actions/user-get";
import ButtonLink from "@/components/buttons/button-link";
import Feed from "@/components/feed/feed";

export const metadata: Metadata = {
  title: "Minha Conta",
};

export default async function ContaPage() {
  const { data: user } = await userGet();
  const { data } = await photosGet({ user: user?.username });

  return (
    <section>
      {data?.length ? (
        <Feed photos={data} user={user?.username} />
      ) : (
        <div>
          <p className="text-[#444] text-xl mb-4">Nenhuma foto encontrada.</p>
          <ButtonLink href="/conta/postar" className="inline-block">
            Postar Foto
          </ButtonLink>
        </div>
      )}
    </section>
  );
}
