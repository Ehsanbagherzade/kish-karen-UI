"use client";

import { useState } from "react";

import { AnimateIn } from "@/components/animate";
import { ConsultationModal } from "@/components/consultation-modal";
import { Iconify } from "@/components/iconify";

import { GallerySlider } from "../components/gallery-slider";

export function GalleryView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto flex flex-col gap-10 px-4 pt-8 pb-20 sm:gap-14 sm:px-6 sm:pt-12 lg:px-8">
        {/* Page Header */}
        <AnimateIn
          yOffset={24}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
            <Iconify icon="solar:gallery-bold-duotone" className="h-4 w-4" />
            <span>گالری تصاویر و امکانات آموزشگاه</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            گالری تصاویر آموزشگاه زبان کیش کارن
          </h1>

          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
            نگاهی به فضای مدرن، امکانات چندرسانه‌ای و محیط علمی پرانرژی کیش
            کارن؛ جایی که یادگیری زبان به تجربه‌ای لذت‌بخش و مؤثر تبدیل می‌شود.
          </p>
        </AnimateIn>

        {/* Gallery Slider Section */}
        <AnimateIn
          yOffset={28}
          delay={0.1}
          className="mx-auto w-full max-w-5xl"
        >
          <GallerySlider />
        </AnimateIn>

        {/* Quick Highlights / Facilities Cards */}
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          <AnimateIn
            yOffset={20}
            delay={0.15}
            className="flex items-center gap-3.5 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm sm:p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
              <Iconify
                icon="solar:check-circle-bold-duotone"
                className="h-5 w-5"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                کلاس‌های هوشمند
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                ویدئوپروژکتور و سیستم‌های چندرسانه‌ای
              </p>
            </div>
          </AnimateIn>

          <AnimateIn
            yOffset={20}
            delay={0.2}
            className="flex items-center gap-3.5 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm sm:p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
              <Iconify icon="solar:star-bold-duotone" className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                فضای یادگیری ارگونومیک
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                محیطی آرام، پرنور و متناسب با تمرکز
              </p>
            </div>
          </AnimateIn>

          <AnimateIn
            yOffset={20}
            delay={0.25}
            className="flex items-center gap-3.5 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm sm:p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
              <Iconify
                icon="solar:book-bookmark-bold-duotone"
                className="h-5 w-5"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                کتابخانه و منابع خودخوان
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                دسترسی به آزمون‌ها، رمان‌ها و مجلات روز
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Visit CTA Box */}
        <AnimateIn
          yOffset={24}
          delay={0.2}
          className="mx-auto w-full max-w-5xl rounded-2xl border border-zinc-200/80 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70 p-6 text-center sm:rounded-3xl sm:p-8 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900/80 dark:to-zinc-900"
        >
          <div className="mx-auto max-w-xl space-y-3">
            <h3 className="text-lg font-bold text-zinc-900 sm:text-xl dark:text-zinc-50">
              مایلید محیط آموزشگاه را از نزدیک ببینید؟
            </h3>
            <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-400">
              کارشناسان کیش کارن با کمال میل آماده پذیرایی، مشاوره حضوری رایگان
              و ارائه برنامه آموزشی متناسب با هدف شما هستند.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 active:scale-95"
              >
                <Iconify icon="solar:phone-bold-duotone" className="h-4 w-4" />
                <span>هماهنگی بازدید و مشاوره حضوری</span>
              </button>
            </div>
          </div>
        </AnimateIn>
      </div>

      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
