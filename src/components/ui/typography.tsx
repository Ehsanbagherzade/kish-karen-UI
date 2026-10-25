import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";

const responsiveTextVariants = cva("", {
  variants: {
    variant: {
      h1: "text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl",
      h2: "text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl",
      h3: "text-base sm:text-lg md:text-base lg:text-lg xl:text-xl",
      h4: "text-sm sm:text-base md:text-base lg:text-lg xl:text-lg",
      body: "text-sm sm:text-base md:text-sm lg:text-base xl:text-base",
      lead: "text-sm sm:text-base md:text-base lg:text-lg xl:text-lg",
      caption: "text-[11px] sm:text-xs md:text-xs lg:text-xs xl:text-sm",
      label: "text-xs sm:text-sm md:text-xs lg:text-sm xl:text-sm",
      nav: "text-xs md:text-[11px] lg:text-xs xl:text-sm",
      brand: "text-base md:text-xs lg:text-sm xl:text-lg",
    },
  },
  defaultVariants: { variant: "body" },
});

const typographyStyles = cva("", {
  variants: {
    variant: {
      h1: "leading-snug font-extrabold tracking-tight",
      h2: "leading-snug font-bold",
      h3: "leading-snug font-bold",
      h4: "leading-snug font-bold",
      body: "leading-relaxed",
      lead: "leading-relaxed",
      caption: "leading-relaxed",
      label: "leading-relaxed font-semibold",
      nav: "leading-normal font-medium",
      brand: "leading-snug font-bold tracking-tight",
    },
    size: {
      xs: "text-[11px]",
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
    },
    tone: {
      default: "text-zinc-900 dark:text-zinc-100",
      muted: "text-zinc-600 dark:text-zinc-300",
      subtle: "text-zinc-500 dark:text-zinc-400",
      primary: "text-primary dark:text-blue-400",
      inherit: "text-inherit",
    },
  },
  defaultVariants: { variant: "body", tone: "default" },
});

export type TypographyStyleProps = VariantProps<typeof typographyStyles>;
export function typographyVariants({
  variant = "body",
  size,
  tone,
}: TypographyStyleProps = {}) {
  return cn(
    typographyStyles({ variant, size, tone }),
    !size && responsiveTextVariants({ variant })
  );
}

type TypographyTag =
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
export type TypographyProps = ComponentProps<"p"> &
  TypographyStyleProps & { as?: TypographyTag };

export function Typography({
  as,
  variant = "body",
  size,
  tone,
  className,
  ...props
}: TypographyProps) {
  const Tag =
    as ??
    (variant === "h1" ||
    variant === "h2" ||
    variant === "h3" ||
    variant === "h4"
      ? variant
      : "p");
  return (
    <Tag
      {...props}
      className={cn(typographyVariants({ variant, size, tone }), className)}
    />
  );
}
