import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";

import { type ButtonStyleProps, buttonVariants } from "./button";

export type ButtonLinkProps = ComponentProps<typeof Link> & ButtonStyleProps;

export function ButtonLink({
  className,
  variant,
  size,
  iconOnly,
  fullWidth,
  borderAnimation,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        buttonVariants({ variant, size, iconOnly, fullWidth, borderAnimation }),
        className
      )}
    />
  );
}
