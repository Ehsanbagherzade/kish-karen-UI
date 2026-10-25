import type { Metadata } from "next";

import { PanelView } from "@/sections/panel/view";

export const metadata: Metadata = {
  title: "پنل یکپارچه کیش و کارن",
  description: "اطلاع‌رسانی وضعیت راه‌اندازی پنل یکپارچه کیش و کارن",
};

export default function PanelPage() {
  return <PanelView />;
}
