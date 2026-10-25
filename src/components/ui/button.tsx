import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";

import styles from "./button-effects.module.css";

export const buttonVariants = cva(
  "inline-flex max-w-full shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-[0.98] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-sm shadow-blue-500/25 hover:bg-primary-hover",
        secondary:
          "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
        outline:
          "border border-zinc-300 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
        soft: "bg-primary-soft text-primary hover:bg-blue-100 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:bg-blue-900/50",
        ghost:
          "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800",
        danger: "bg-danger text-white hover:bg-red-700",
        inverse: "bg-white text-blue-700 shadow-sm hover:bg-zinc-100",
      },
      size: {
        xs: "h-8 gap-1 px-2.5 text-[11px] [&_svg]:size-3.5",
        sm: "h-9 gap-1.5 px-3 text-xs [&_svg]:size-4",
        md: "h-10 gap-2 px-4 text-sm [&_svg]:size-4",
        lg: "h-12 gap-2 px-5 text-base [&_svg]:size-5",
        xl: "h-14 gap-2.5 px-6 text-lg [&_svg]:size-6",
        responsive:
          "h-11 gap-1.5 px-3 text-xs sm:px-4 sm:text-sm md:h-10 md:text-xs lg:h-11 lg:text-sm xl:h-12 xl:px-5 [&_svg]:size-4 xl:[&_svg]:size-5",
        header:
          "h-11 gap-1.5 px-3 text-sm md:h-9 md:gap-1 md:px-2 md:text-[11px] lg:h-10 lg:gap-1.5 lg:px-3 lg:text-xs xl:h-11 xl:gap-2 xl:px-4 xl:text-sm [&_svg]:size-4",
      },
      iconOnly: { true: "aspect-square px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0" },
      fullWidth: { true: "w-full" },
      borderAnimation: { true: styles.borderTrace },
    },
    defaultVariants: { variant: "primary", size: "responsive" },
  }
);

export type ButtonStyleProps = VariantProps<typeof buttonVariants>;
export type ButtonProps = ComponentProps<"button"> &
  ButtonStyleProps & { loading?: boolean };

export function Button({
  className,
  variant,
  size,
  iconOnly,
  fullWidth,
  borderAnimation,
  loading = false,
  disabled,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        buttonVariants({ variant, size, iconOnly, fullWidth, borderAnimation }),
        className
      )}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="size-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none"
        />
      )}
      {children}
    </button>
  );
}
