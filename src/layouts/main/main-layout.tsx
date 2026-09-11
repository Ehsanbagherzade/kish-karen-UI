import type { ReactNode } from "react";

import { Footer } from "./components/footer";
import { Header } from "./components/header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-blue-600 selection:text-white dark:bg-zinc-950 dark:text-zinc-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
