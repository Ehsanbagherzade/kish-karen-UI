"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode, useRef } from "react";

import { Iconify } from "@/components/iconify";
import { cn } from "@/utils/cn";

import { Button } from "./button";

const dialogVariants = cva(
  "fixed top-1/2 left-1/2 z-50 max-h-[85dvh] w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-zinc-200 bg-white p-5 shadow-2xl sm:p-6 md:p-5 lg:p-6 xl:p-8 dark:border-zinc-800 dark:bg-zinc-950",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
      },
    },
    defaultVariants: { size: "md" },
  }
);
export interface DialogProps extends VariantProps<typeof dialogVariants> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  icon?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}
export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  icon,
  children,
  footer,
  size,
  className,
}: DialogProps) {
  const returnFocus = useRef<HTMLElement | null>(null);
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <RadixDialog.Content
          dir="rtl"
          onOpenAutoFocus={() => {
            returnFocus.current = document.activeElement as HTMLElement | null;
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            if (returnFocus.current?.isConnected) returnFocus.current.focus();
          }}
          {...(description ? {} : { "aria-describedby": undefined })}
          className={cn(dialogVariants({ size }), className)}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              {icon}
              <div>
                <RadixDialog.Title className="text-base leading-relaxed font-bold text-zinc-900 sm:text-lg md:text-base lg:text-lg xl:text-xl dark:text-zinc-100">
                  {title}
                </RadixDialog.Title>
                {description && (
                  <RadixDialog.Description className="mt-1 text-xs text-zinc-500 sm:text-sm md:text-xs lg:text-sm">
                    {description}
                  </RadixDialog.Description>
                )}
              </div>
            </div>
            <RadixDialog.Close asChild>
              <Button
                iconOnly
                size="sm"
                variant="ghost"
                aria-label="بستن پنجره"
              >
                <Iconify icon="solar:close-linear" />
              </Button>
            </RadixDialog.Close>
          </div>
          <div className="mt-5">{children}</div>
          {footer && <div className="mt-6">{footer}</div>}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
export const DialogClose = RadixDialog.Close;

export function Drawer({
  open,
  onOpenChange,
  title,
  children,
}: Pick<DialogProps, "open" | "onOpenChange" | "title" | "children">) {
  const returnFocus = useRef<HTMLElement | null>(null);
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <RadixDialog.Content
          dir="rtl"
          onOpenAutoFocus={() => {
            returnFocus.current = document.activeElement as HTMLElement | null;
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            if (returnFocus.current?.isConnected) returnFocus.current.focus();
          }}
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col overflow-y-auto border-l border-zinc-200 bg-white p-5 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="mb-5 flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
            <RadixDialog.Title className="font-bold">{title}</RadixDialog.Title>
            <RadixDialog.Close asChild>
              <Button variant="ghost" size="md" iconOnly aria-label="بستن منو">
                <Iconify icon="solar:close-linear" />
              </Button>
            </RadixDialog.Close>
          </div>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
