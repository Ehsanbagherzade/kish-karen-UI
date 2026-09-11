import type { ReactNode } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import { FormProvider } from "react-hook-form";

interface FormProps<T extends FieldValues = FieldValues> {
  children: ReactNode;
  methods: UseFormReturn<T>;
  onSubmit?: () => void | Promise<void>;
  className?: string;
  id?: string;
}

export function Form({
  children,
  methods,
  onSubmit,
  className,
  id,
}: FormProps) {
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
