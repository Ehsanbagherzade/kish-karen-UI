import type { Metadata } from "next";

import { CoursesView } from "@/sections/courses/view";

export const metadata: Metadata = {
  title: "دوره‌های آموزشی | آموزشگاه زبان کیش کارن",
  description:
    "آشنایی با مجموعه‌کتاب‌ها، سطح‌ها و برنامهٔ ترم‌های دوره‌های آموزشگاه کیش کارن",
};

export default function CoursesPage() {
  return <CoursesView />;
}
