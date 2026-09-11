import type { Metadata } from "next";

import { ContactView } from "@/sections/contact/view";

export const metadata: Metadata = {
  title: "تماس با ما | آموزشگاه زبان کیش کارن",
  description: "راه‌های ارتباطی، تلفن‌ها و آدرس آموزشگاه زبان کیش کارن",
};

export default function ContactPage() {
  return <ContactView />;
}
