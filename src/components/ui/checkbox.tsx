"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, useId } from "react";

import { cn } from "@/utils/cn";

import { fieldDescription, type FieldFeedbackProps } from "./field";

const checkboxVariants = cva(
  "mt-0.5 shrink-0 cursor-pointer rounded accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        xs: "size-3.5",
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
        xl: "size-7",
        responsive: "size-5 md:size-4 lg:size-5",
      },
    },
    defaultVariants: { size: "responsive" },
  }
);
export type CheckboxProps = Omit<ComponentProps<"input">, "size" | "type"> &
  FieldFeedbackProps &
  VariantProps<typeof checkboxVariants>;
export function Checkbox({
  id,
  label,
  helperText,
  error,
  size,
  className,
  "aria-describedby": describedBy,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={inputId}
        className="flex min-h-11 items-start gap-2 py-2 text-sm text-zinc-700 dark:text-zinc-200"
      >
        <input
          {...props}
          id={inputId}
          type="checkbox"
          aria-invalid={error ? true : props["aria-invalid"]}
          aria-describedby={fieldDescription(
            inputId,
            { error, helperText },
            describedBy
          )}
          className={cn(checkboxVariants({ size }), className)}
        />
        {label}
      </label>
      {(error || helperText) && (
        <p
          id={`${inputId}-feedback`}
          role={error ? "alert" : undefined}
          className={cn("text-xs text-zinc-500", error && "text-danger")}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
}
