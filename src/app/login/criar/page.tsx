import { Metadata } from "next";

import LoginCriarForm from "@/components/login/login-criar-form";
import AnimatedSection from "@/components/section/animated-section";
import Title from "@/components/titles/title";

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta no site Dogs.",
};

export default async function CriarPage() {
  return (
    <AnimatedSection>
      <Title>Cadastre-se</Title>
      <LoginCriarForm />
    </AnimatedSection>
  );
}
