"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Checkbox, type CheckboxProps } from "@/components/ui/checkbox";

export type RHFCheckboxProps = CheckboxProps & { name: string };

export function RHFCheckbox({ name, ...props }: RHFCheckboxProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...field }, fieldState }) => (
        <Checkbox
          {...props}
          {...field}
          checked={Boolean(value)}
          error={fieldState.error?.message ?? props.error}
        />
      )}
    />
  );
}
