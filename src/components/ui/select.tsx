"use client";

import { type ComponentProps, useId } from "react";

import { cn } from "@/utils/cn";

import {
  fieldDescription,
  type FieldFeedbackProps,
  FieldFrame,
  type FieldStyleProps,
  fieldVariants,
} from "./field";

export type SelectProps = Omit<ComponentProps<"select">, "size"> &
  FieldFeedbackProps &
  FieldStyleProps;
export function Select({
  id,
  label,
  helperText,
  error,
  size,
  invalid,
  className,
  required,
  "aria-describedby": describedBy,
  "aria-invalid": ariaInvalid,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <FieldFrame
      id={inputId}
      label={label}
      helperText={helperText}
      error={error}
      required={required}
    >
      <select
        {...props}
        id={inputId}
        required={required}
        aria-invalid={Boolean(error || invalid) || ariaInvalid}
        aria-describedby={fieldDescription(
          inputId,
          { error, helperText },
          describedBy
        )}
        className={cn(
          fieldVariants({
            size,
            invalid: Boolean(
              error || invalid || ariaInvalid === true || ariaInvalid === "true"
            ),
          }),
          className
        )}
      />
    </FieldFrame>
  );
}
