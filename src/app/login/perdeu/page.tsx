import { Metadata } from "next";

import LoginPerdeuForm from "@/components/login/login-perdeu-form";
import AnimatedSection from "@/components/section/animated-section";
import Title from "@/components/titles/title";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupere a sua senha",
};

export default async function PerdeuPage() {
  return (
    <AnimatedSection>
      <Title>Perdeu a senha?</Title>
      <LoginPerdeuForm />
    </AnimatedSection>
  );
}
