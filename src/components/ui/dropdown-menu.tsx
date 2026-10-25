"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { type ReactNode, useEffect, useId, useRef, useState } from "react";

import { Iconify } from "@/components/iconify";
import { cn } from "@/utils/cn";

import { Button, type ButtonProps } from "./button";
import styles from "./dropdown-menu.module.css";

const dropdownVariants = cva(
  "z-50 overflow-hidden rounded-2xl border border-blue-100/80 bg-white p-2 pb-3 text-zinc-800 shadow-xl shadow-blue-950/10",
  {
    variants: {
      placement: {
        bottom: "absolute end-0 top-full mt-3",
        "bottom-center": "absolute left-1/2 top-full mt-3 -translate-x-1/2",
        top: "absolute bottom-full start-0 mb-3",
        inline: "relative mt-3 w-full",
      },
      size: {
        sm: "w-60 max-w-[calc(100vw-2rem)] text-xs",
        md: "w-72 max-w-[calc(100vw-2rem)] text-sm",
        responsive:
          "w-64 max-w-[calc(100vw-2rem)] text-xs sm:w-72 sm:text-sm md:w-64 md:text-xs lg:w-72 lg:text-sm",
        header:
          "w-64 max-w-[calc(100vw-2rem)] text-xs md:w-60 lg:w-64 xl:text-[13px] md:[&_a]:min-h-10 md:[&_a]:gap-2 md:[&_a]:px-2.5 md:[&_a]:py-2 md:[&_a_svg]:size-4",
      },
    },
    defaultVariants: { placement: "bottom", size: "responsive" },
  }
);

export type DropdownMenuItem = {
  label: string;
  href: string;
  icon?: ReactNode;
  external?: boolean;
};

export type DropdownMenuProps = VariantProps<typeof dropdownVariants> & {
  label: string;
  trigger: ReactNode;
  items: readonly DropdownMenuItem[];
  triggerProps?: Omit<ButtonProps, "children" | "onClick" | "onKeyDown" | "ref">;
  fullWidth?: boolean;
  onNavigate?: () => void;
};

export function DropdownMenu({
  label,
  trigger,
  items,
  triggerProps,
  placement,
  size,
  fullWidth,
  onNavigate,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pendingFocus = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;
    if (pendingFocus.current !== null) {
      itemRefs.current[pendingFocus.current]?.focus();
      pendingFocus.current = null;
    }
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !rootRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn("relative", fullWidth ? "w-full" : "inline-block")}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          event.stopPropagation();
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <Button
        {...triggerProps}
        ref={triggerRef}
        fullWidth={fullWidth}
        aria-label={label}
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
          event.preventDefault();
          const index = event.key === "ArrowDown" ? 0 : items.length - 1;
          if (open) itemRefs.current[index]?.focus();
          else {
            pendingFocus.current = index;
            setOpen(true);
          }
        }}
      >
        {trigger}
        <Iconify
          icon="solar:alt-arrow-down-linear"
          className={cn(
            "transition-transform motion-reduce:transition-none",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </Button>
      {open && (
        <nav
          id={id}
          aria-label={label}
          className={cn(
            dropdownVariants({ placement, size }),
            placement === "inline" && "w-full sm:w-full md:w-full lg:w-full",
            styles.enter
          )}
          onKeyDown={(event) => {
            const index = itemRefs.current.indexOf(
              document.activeElement as HTMLAnchorElement
            );
            let nextIndex: number;
            if (event.key === "ArrowDown") {
              nextIndex = (index + 1) % items.length;
            } else if (event.key === "ArrowUp") {
              nextIndex = (index - 1 + items.length) % items.length;
            } else if (event.key === "Home") {
              nextIndex = 0;
            } else if (event.key === "End") {
              nextIndex = items.length - 1;
            } else return;
            event.preventDefault();
            itemRefs.current[nextIndex]?.focus();
          }}
        >
          <ul className="relative z-10 space-y-1">
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex min-h-11 items-center gap-3 rounded-xl px-3 py-3 leading-relaxed font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:bg-blue-50 focus-visible:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-300 [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:text-blue-500"
                  onClick={() => {
                    setOpen(false);
                    triggerRef.current?.focus();
                    onNavigate?.();
                  }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[3%] bg-gradient-to-r from-blue-200/70 via-sky-100 to-indigo-200/70"
          />
        </nav>
      )}
    </div>
  );
}
