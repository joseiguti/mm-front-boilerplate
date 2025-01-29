"use client";

import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import {
  FormContainer,
  FieldContainer,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
} from "@/styles/FormStyles";

import LanguageSwitcher from "../../../../components/LanguageSwitcher";

type FormData = {
  name: string;
  email: string;
};

export default function DemoFormPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [locale, setLocale] = useState<string>("");
  const t = useTranslations("DemoForm");

  useEffect(() => {
    params.then((resolvedParams) => {
      setLocale(resolvedParams.locale);
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

  if (!locale) {
    return <div></div>;
  }

  return (
    <div>
      <LanguageSwitcher currentLocale={locale} />

      <FormContainer>
        <h1>{t("title")}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldContainer>
            <Label htmlFor="name">{t("nameLabel")}:</Label>
            <Input
              id="name"
              {...register("name", { required: t("nameRequired") })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FieldContainer>
          <FieldContainer>
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
          </FieldContainer>

          <SubmitButton type="submit">{t("submitButton")}</SubmitButton>
        </form>
      </FormContainer>
    </div>
  );
}
