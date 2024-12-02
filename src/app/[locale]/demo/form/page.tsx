"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../../../../components/LanguageSwitcher";
import {
  FormContainer,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
} from "@/styles/FormStyles";

type FormData = {
  name: string;
  email: string;
};

export default function DemoFormPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>(""); // Estado para el idioma
  const t = useTranslations("DemoForm");

  useEffect(() => {
    params.then((resolvedParams) => {
      setLocale(resolvedParams.locale); // Resuelve `params` y actualiza el estado
    });
  }, [params]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(`Form submitted: ${JSON.stringify(data)}`);
  };

  // Renderiza un estado de carga mientras se resuelve `params`
  if (!locale) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        {/* Selector de idioma */}
        <LanguageSwitcher currentLocale={locale} />

        {/* Formulario */}
        <FormContainer>
          <h1>{t("title")}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="name">{t("nameLabel")}:</Label>
              <Input
                  id="name"
                  {...register("name", { required: t("nameRequired") })}
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </div>
            <div>
              <Label htmlFor="email">{t("emailLabel")}:</Label>
              <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: t("emailRequired"),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t("emailInvalid"),
                    },
                  })}
              />
              {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </div>
            <SubmitButton type="submit">{t("submitButton")}</SubmitButton>
          </form>
        </FormContainer>
      </div>
  );
}
