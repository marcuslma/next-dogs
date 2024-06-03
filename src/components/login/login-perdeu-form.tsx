"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import passwordLost from "@/actions/password-lost";
import Button from "@/components/forms/button";

import InputText from "../forms/input-text";
import ErrorMessage from "../helper/error-message";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? "Enviando..." : "Enviar Email"}
    </Button>
  );
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <form action={action} className="mb-8">
      <InputText label="Email / Usuário" name="login" />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? (
        <p className="text-[#4c1]">Email enviado.</p>
      ) : (
        <FormButton />
      )}
    </form>
  );
}
