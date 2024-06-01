import { Metadata } from "next";

import LoginResetarForm from "@/components/login/login-resetar-form";
import AnimatedSection from "@/components/section/animated-section";
import Title from "@/components/titles/title";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha",
};

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({
  searchParams,
}: ResetarSearchParams) {
  return (
    <AnimatedSection>
      <Title>Resete a Senha</Title>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </AnimatedSection>
  );
}
