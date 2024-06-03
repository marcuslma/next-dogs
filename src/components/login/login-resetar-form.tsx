"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import passwordReset from "@/actions/password-reset";
import Button from "@/components/forms/button";

import InputText from "../forms/input-text";
import ErrorMessage from "../helper/error-message";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? "Resetando..." : "Resetar Senha"}
    </Button>
  );
}

export default function LoginResetarForm({
  keyToken,
  login,
}: {
  login: string;
  keyToken: string;
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action} className="mb-8">
      <InputText label="Nova Senha" name="password" type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
