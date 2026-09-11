import type { Metadata } from "next";

import { GalleryView } from "@/sections/gallery/view";

export const metadata: Metadata = {
  title: "گالری تصاویر | آموزشگاه زبان کیش کارن",
  description:
    "مشاهده تصاویر امکانات، کلاس‌های مدرن و فضای آموزشی آموزشگاه زبان کیش کارن",
};

export default function GalleryPage() {
  return <GalleryView />;
}
