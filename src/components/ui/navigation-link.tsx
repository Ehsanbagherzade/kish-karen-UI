import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps, CSSProperties, ReactNode } from "react";

import { cn } from "@/utils/cn";

import styles from "./navigation-link.module.css";
import { typographyVariants } from "./typography";

const navigationLinkVariants = cva(
  "whitespace-nowrap focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        desktop: typographyVariants({ variant: "nav", tone: "muted" }),
        drawer: cn(
          styles.drawer,
          typographyVariants({ variant: "body", tone: "muted" }),
          "flex min-h-11 items-center gap-3 px-3 py-2 [&_svg]:size-5"
        ),
      },
    },
    defaultVariants: { variant: "desktop" },
  }
);

export type NavigationLinkProps = Omit<ComponentProps<typeof Link>, "children"> &
  VariantProps<typeof navigationLinkVariants> & {
    label: string;
    leadingIcon?: ReactNode;
  };

export function NavigationLink({
  label,
  leadingIcon,
  variant,
  className,
  ...props
}: NavigationLinkProps) {
  return (
    <Link
      {...props}
      className={cn(styles.link, navigationLinkVariants({ variant }), className)}
    >
      {leadingIcon && <span aria-hidden="true">{leadingIcon}</span>}
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className={styles.label}>
        {label.split(/\s+/).map((word, index) => (
          <span
            key={`${index}-${word}`}
            className={styles.word}
            style={
              {
                "--smoke-delay": `${index * 55}ms`,
                "--smoke-drift": `${index % 2 === 0 ? 3 : -3}px`,
              } as CSSProperties
            }
          >
            {word}
          </span>
        ))}
      </span>
    </Link>
  );
}
