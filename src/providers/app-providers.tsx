"use client";

import { DirectionProvider } from "@radix-ui/react-direction";
import NextTopLoader from "nextjs-toploader";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <DirectionProvider dir="rtl">
      <NextTopLoader
        color="#2563eb"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2563eb,0 0 5px #2563eb"
      />
      {children}
      <Toaster dir="rtl" position="top-center" richColors />
    </DirectionProvider>
  );
}
