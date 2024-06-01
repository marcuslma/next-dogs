import { Metadata } from "next";

import LoginForm from "@/components/login/login-form";
import AnimatedSection from "@/components/section/animated-section";
import Title from "@/components/titles/title";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue na sua conta no site Dogs.",
};

export default async function LoginPage() {
  return (
    <AnimatedSection>
      <Title>Login</Title>
      <LoginForm />
    </AnimatedSection>
  );
}
