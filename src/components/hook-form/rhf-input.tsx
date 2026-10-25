"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Input, type InputProps } from "@/components/ui/input";

export type RHFInputProps = InputProps & { name: string };

export function RHFInput({ name, helperText, ...props }: RHFInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Input
          {...props}
          {...field}
          value={field.value ?? ""}
          helperText={helperText}
          error={fieldState.error?.message ?? props.error}
        />
      )}
    />
  );
}
