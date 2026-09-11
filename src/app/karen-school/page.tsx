import type { Metadata } from "next";

import { KarenSchoolView } from "@/sections/karen-school/view";

export const metadata: Metadata = {
  title: "مدرسه کارن | آموزشگاه زبان کیش کارن",
  description: "خدمات دپارتمان مدارس و دوره‌های دانش‌آموزی آموزشگاه کیش کارن",
};

export default function KarenSchoolPage() {
  return <KarenSchoolView />;
}
