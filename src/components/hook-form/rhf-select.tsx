"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Select, type SelectProps } from "@/components/ui/select";

export type RHFSelectProps = SelectProps & { name: string };

export function RHFSelect({ name, ...props }: RHFSelectProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Select
          {...props}
          {...field}
          value={field.value ?? ""}
          error={fieldState.error?.message ?? props.error}
        />
      )}
    />
  );
}
