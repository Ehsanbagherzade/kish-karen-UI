"use client";

import type { ReactNode } from "react";
import type {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import { FormProvider } from "react-hook-form";

interface FormProps<T extends FieldValues = FieldValues> {
  children: ReactNode;
  methods: UseFormReturn<T>;
  onSubmit?: SubmitHandler<T>;
  className?: string;
  id?: string;
}

export function Form<T extends FieldValues>({
  children,
  methods,
  onSubmit,
  className,
  id,
}: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form
        id={id}
        onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}
        className={className}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
}
