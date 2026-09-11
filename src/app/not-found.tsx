import type { Metadata } from "next";

import { NotFoundView } from "@/sections/not-found/view";

export const metadata: Metadata = {
  title: "صفحه مورد نظر یافت نشد (۴۰۴)",
};

export default function NotFound() {
  return <NotFoundView />;
}
