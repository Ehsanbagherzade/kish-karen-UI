"use client";

import type { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { cn } from "@/utils/cn";

export interface RHFInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  helperText?: string;
}

export function RHFInput({
  name,
  label,
  helperText,
  className,
  id,
  ...other
}: RHFInputProps) {
  const { control } = useFormContext();
  const inputId = id || `field-${name}`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex w-full flex-col gap-1.5">
          {label && (
            <label
              htmlFor={inputId}
              className="text-foreground text-sm font-medium"
            >
              {label}
            </label>
          )}

          <input
            {...field}
            {...other}
            id={inputId}
            value={field.value ?? ""}
            className={cn(
              "text-foreground w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm transition-all duration-200",
              "focus:ring-primary/20 focus:border-primary placeholder:text-zinc-400 focus:ring-2 focus:outline-none",
              "dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500",
              error &&
                "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              className
            )}
          />

          {(error?.message || helperText) && (
            <span
              className={cn(
                "text-xs text-zinc-500",
                error && "font-medium text-red-500"
              )}
            >
              {error?.message || helperText}
            </span>
          )}
        </div>
      )}
    />
  );
}
