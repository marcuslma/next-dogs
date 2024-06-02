"use client";

import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import login from "@/actions/login";
import Button from "@/components/forms/button";

import InputText from "../forms/input-text";
import ErrorMessage from "../helper/error-message";
import Subtitle from "../titles/subtitle";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form action={action} className="mb-8">
        <InputText label="Usuário" name="username" type="text" />
        <InputText label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <Link
        className="inline-block text-[#666] py-2 px-0 leading-none
          after:content-[''] after:h-0.5 after:w-full after:block after:bg-current"
        href="/login/perdeu"
      >
        Perdeu a senha?
      </Link>

      <div className="my-16">
        <Subtitle>Cadastre-se</Subtitle>
        <p className="my-8">Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
}
