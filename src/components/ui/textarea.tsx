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

export type TextareaProps = ComponentProps<"textarea"> &
  FieldFeedbackProps &
  FieldStyleProps;
export function Textarea({
  id,
  label,
  helperText,
  error,
  size,
  invalid,
  className,
  required,
  rows = 4,
  "aria-describedby": describedBy,
  "aria-invalid": ariaInvalid,
  ...props
}: TextareaProps) {
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
      <textarea
        {...props}
        id={inputId}
        rows={rows}
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
          "resize-y",
          className
        )}
      />
    </FieldFrame>
  );
}
