import { Metadata } from "next";

import LoginForm from "@/components/login/login-form";
import Title from "@/components/titles/title";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue na sua conta no site Dogs.",
};

export default async function LoginPage() {
  return (
    <section className="animeLeft">
      <Title>Login</Title>
      <LoginForm />
    </section>
  );
}
