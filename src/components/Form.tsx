"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
} from "../styles/FormStyles";

type FormData = {
  name: string;
  email: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(`Form submitted: ${JSON.stringify(data)}`);
  };

  return (
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="name">Name:</Label>
            <Input id="name" {...register("name", { required: "Name is required" })} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </div>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormContainer>
  );
};
