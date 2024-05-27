import { Metadata } from "next";

import Heading1 from "@/components/headings/heading-1";
import LoginForm from "@/components/login/login-form";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue na sua conta no site Dogs.",
};

export default async function LoginPage() {
  return (
    <section className="animeLeft">
      <Heading1>Login</Heading1>
      <LoginForm />
    </section>
  );
}
