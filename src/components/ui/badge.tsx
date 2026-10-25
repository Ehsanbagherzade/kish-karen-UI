import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";

export const badgeVariants = cva(
  "inline-flex max-w-full items-center gap-1.5 rounded-full font-semibold [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid: "bg-primary text-white",
        inverse: "bg-zinc-950/60 text-white backdrop-blur-md",
        primary:
          "bg-primary-soft text-blue-700 dark:bg-blue-950/60 dark:text-blue-300",
        neutral:
          "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200",
        success:
          "bg-emerald-50 text-success dark:bg-emerald-950/50 dark:text-emerald-300",
        warning:
          "bg-amber-50 text-warning dark:bg-amber-950/50 dark:text-amber-300",
        danger: "bg-red-50 text-danger dark:bg-red-950/50 dark:text-red-300",
      },
      size: {
        xs: "px-2 py-0.5 text-[10px]",
        sm: "px-2.5 py-1 text-[11px]",
        md: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
        xl: "px-5 py-2 text-base",
        responsive:
          "px-2.5 py-1 text-[11px] sm:px-3 sm:text-xs md:text-[11px] lg:text-xs xl:px-4",
      },
    },
    defaultVariants: { variant: "primary", size: "responsive" },
  }
);

export type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>;
export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={cn(badgeVariants({ variant, size }), className)}
    />
  );
}
