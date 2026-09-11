import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { MainLayout } from "@/layouts/main";
import { AppProviders } from "@/providers";
import { iranYekan } from "@/theme/font";

export const metadata: Metadata = {
  title: {
    default: "آموزشگاه زبان کیش کارن",
    template: "%s | آموزشگاه زبان کیش کارن",
  },
  description:
    "آموزشگاه زبان کیش کارن - مرکز تخصصی آموزش زبان‌های خارجی با بالاترین استانداردهای آموزشی و اساتید مجرب",
  icons: {
    icon: "/kish-karen-icon.png",
    shortcut: "/kish-karen-icon.png",
    apple: "/kish-karen-icon.png",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${iranYekan.variable} ${iranYekan.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${iranYekan.className} min-h-full font-sans antialiased`}
      >
        <AppProviders>
          <MainLayout>{children}</MainLayout>
        </AppProviders>
      </body>
    </html>
  );
}
