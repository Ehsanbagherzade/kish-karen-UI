"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode, useId } from "react";

import { Iconify } from "@/components/iconify";
import { cn } from "@/utils/cn";

import styles from "./accordion.module.css";

const accordionVariants = cva("w-full", {
  variants: {
    variant: {
      bordered: "divide-y divide-zinc-200 dark:divide-zinc-700",
      cards: "space-y-2",
      soft: "divide-y divide-blue-100 dark:divide-blue-900/60",
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      responsive: "text-xs sm:text-sm",
    },
  },
  defaultVariants: { variant: "bordered", size: "responsive" },
});

export type AccordionItem = {
  id: string;
  title: string;
  summary?: string;
  content: ReactNode;
};

export type AccordionProps = VariantProps<typeof accordionVariants> & {
  items: readonly AccordionItem[];
  value: string | null;
  onValueChange: (value: string | null) => void;
  className?: string;
};

export function Accordion({
  items,
  value,
  onValueChange,
  variant,
  size,
  className,
}: AccordionProps) {
  const id = useId();

  return (
    <div className={cn(accordionVariants({ variant, size }), className)}>
      {items.map((item) => {
        const isOpen = value === item.id;
        const triggerId = `${id}-${item.id}-trigger`;
        const panelId = `${id}-${item.id}-panel`;

        return (
          <section
            key={item.id}
            className={cn(
              variant === "cards" &&
                "overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
            )}
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => onValueChange(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 rounded-lg px-3 py-3 text-start font-semibold text-zinc-800 transition-colors hover:bg-blue-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary dark:text-zinc-100 dark:hover:bg-blue-950/40 sm:px-4"
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <span className="min-w-0">{item.title}</span>
                  {item.summary && (
                    <span className="shrink-0 text-xs font-normal text-zinc-500 dark:text-zinc-400">
                      {item.summary}
                    </span>
                  )}
                </span>
                <Iconify
                  icon="solar:alt-arrow-down-linear"
                  aria-hidden="true"
                  className={cn(
                    "size-4 shrink-0 text-primary transition-transform duration-200 motion-reduce:transition-none",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={cn(
                  "px-3 pb-4 sm:px-4",
                  styles.reveal,
                  variant === "cards" && "pt-1"
                )}
              >
                {item.content}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
