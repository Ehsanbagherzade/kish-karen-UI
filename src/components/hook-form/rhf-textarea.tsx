"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Textarea, type TextareaProps } from "@/components/ui/textarea";

export type RHFTextareaProps = TextareaProps & { name: string };

export function RHFTextarea({ name, ...props }: RHFTextareaProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Textarea
          {...props}
          {...field}
          value={field.value ?? ""}
          error={fieldState.error?.message ?? props.error}
        />
      )}
    />
  );
}
