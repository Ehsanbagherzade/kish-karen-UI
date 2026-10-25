import type { Metadata } from "next";

import { EhsanView } from "@/sections/ehsan/view";

export const metadata: Metadata = {
  title: "Ehsan — دیزاین سیستم",
  description:
    "کامپوننت‌های مشترک، ورینت‌ها و قواعد واکنش‌گرایی پروژه کیش کارن",
  robots: { index: false, follow: false },
};

export default function EhsanPage() {
  return <EhsanView />;
}
