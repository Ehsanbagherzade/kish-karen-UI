import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";

export const cardVariants = cva(
  "rounded-2xl border border-zinc-200/80 dark:border-zinc-800",
  {
    variants: {
      variant: {
        default: "bg-white shadow-sm dark:bg-zinc-900",
        muted: "bg-zinc-50/70 dark:bg-zinc-900/50",
        elevated: "bg-white shadow-lg dark:bg-zinc-900",
      },
      padding: {
        none: "p-0",
        xs: "p-3",
        sm: "p-4",
        md: "p-5",
        lg: "p-6",
        xl: "p-8",
        responsive: "p-4 sm:p-5 md:p-5 lg:p-6 xl:p-8",
      },
    },
    defaultVariants: { variant: "default", padding: "responsive" },
  }
);

export type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardVariants>;
export function Card({ variant, padding, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(cardVariants({ variant, padding }), className)}
    />
  );
}
