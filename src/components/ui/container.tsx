import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";

const containerVariants = cva(
  "mx-auto w-full px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10",
  {
    variants: {
      size: {
        sm: "max-w-2xl",
        md: "max-w-3xl",
        lg: "max-w-5xl",
        xl: "max-w-7xl",
        full: "max-w-none",
      },
    },
    defaultVariants: { size: "xl" },
  }
);

export type ContainerProps = ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & { as?: "div" | "section" };
export function Container({
  as: Tag = "div",
  size,
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag {...props} className={cn(containerVariants({ size }), className)} />
  );
}
