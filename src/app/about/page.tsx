import type { Metadata } from "next";

import { AboutView } from "@/sections/about/view";

export const metadata: Metadata = {
  title: "درباره ما | آموزشگاه زبان کیش کارن",
  description:
    "آشنایی با آموزشگاه زبان کیش کارن، تاریخچه، خط‌مشی و پیام مدیریت مجموعه",
};

export default function AboutPage() {
  return <AboutView />;
}
