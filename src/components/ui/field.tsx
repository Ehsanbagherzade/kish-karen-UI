import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

export const fieldVariants = cva(
  "w-full min-w-0 rounded-xl border bg-white text-zinc-900 transition-colors outline-none placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:opacity-60 dark:bg-zinc-900 dark:text-zinc-100 dark:disabled:bg-zinc-800",
  {
    variants: {
      size: {
        xs: "min-h-8 px-2.5 py-1 text-xs",
        sm: "min-h-9 px-3 py-1.5 text-sm",
        md: "min-h-10 px-4 py-2 text-sm",
        lg: "min-h-12 px-4 py-3 text-base",
        xl: "min-h-14 px-5 py-3.5 text-lg",
        responsive:
          "min-h-11 px-3 py-2 text-sm sm:px-4 md:min-h-10 lg:min-h-11 xl:min-h-12 xl:text-base",
      },
      invalid: {
        true: "border-danger focus-visible:border-danger focus-visible:ring-danger/20",
        false:
          "border-zinc-300 focus-visible:border-primary dark:border-zinc-700",
      },
    },
    defaultVariants: { size: "responsive", invalid: false },
  }
);

export type FieldStyleProps = VariantProps<typeof fieldVariants>;
export interface FieldFeedbackProps {
  label?: string;
  helperText?: string;
  error?: string;
}

export function FieldFrame({
  id,
  label,
  helperText,
  error,
  required,
  children,
}: FieldFeedbackProps & {
  id: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-medium text-zinc-900 sm:text-sm md:text-xs lg:text-sm dark:text-zinc-100"
        >
          {label}
          {required && (
            <span aria-hidden="true" className="text-danger ms-1">
              *
            </span>
          )}
        </label>
      )}
      {children}
      {(error || helperText) && (
        <span
          id={`${id}-feedback`}
          role={error ? "alert" : undefined}
          className={cn(
            "text-xs leading-relaxed text-zinc-500 dark:text-zinc-400",
            error && "text-danger dark:text-red-400"
          )}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
}

export function fieldDescription(
  id: string,
  feedback: FieldFeedbackProps,
  describedBy?: string
) {
  return (
    [describedBy, (feedback.error || feedback.helperText) && `${id}-feedback`]
      .filter(Boolean)
      .join(" ") || undefined
  );
}
