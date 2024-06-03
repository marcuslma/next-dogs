"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import userPost from "@/actions/user-post";
import Button from "@/components/forms/button";

import InputText from "../forms/input-text";
import ErrorMessage from "../helper/error-message";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? "Cadastrando..." : "Cadastrar"}
    </Button>
  );
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <form action={action} className="mb-8">
      <InputText label="Usuário" name="username" type="text" />
      <InputText label="Email" name="email" type="email" />
      <InputText label="Senha" name="password" type="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
