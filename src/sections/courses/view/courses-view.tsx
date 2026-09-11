"use client";

import Link from "next/link";

import { AnimateIn } from "@/components/animate";
import { Iconify } from "@/components/iconify";
import { getContactRoute } from "@/utils/routes";

export function CoursesView() {
  return (
    <div className="container mx-auto max-w-2xl space-y-6 px-4 py-16 text-center sm:px-6 lg:px-8">
      <AnimateIn yOffset={24} className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
          <Iconify
            icon="solar:book-bookmark-bold-duotone"
            className="h-4 w-4"
          />
          <span>دوره‌های آموزشی کیش کارن</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          دوره‌های آموزشی آموزشگاه کیش کارن
        </h1>

        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          این صفحه در حال تکمیل و بارگذاری لیست تفصیلی تقویم ترم جدید، سطوح زبان
          انگلیسی، آلمانی، فرانسوی و آزمون‌های بین‌المللی است.
        </p>
      </AnimateIn>

      <AnimateIn
        yOffset={24}
        delay={0.12}
        className="space-y-2 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-6 text-right dark:border-zinc-800 dark:bg-zinc-900/50"
      >
        <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          نمونه سطوح و دوره‌های آتی:
        </div>
        <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <li>دوره‌های مکالمه فشرده و نیمه‌فشرده بزرگسالان</li>
          <li>کلاس‌های ویژه کودکان و نوجوانان (فونیکس و تاپ‌ناچ)</li>
          <li>کارگاه‌های تخصصی آیلتس (IELTS Academic & General)</li>
          <li>دوره‌های زبان آلمانی از A1 تا B2</li>
        </ul>
      </AnimateIn>

      <AnimateIn yOffset={20} delay={0.2} className="pt-4">
        <Link
          href={getContactRoute()}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 active:scale-95"
        >
          <Iconify icon="solar:phone-bold-duotone" className="h-4 w-4" />
          <span>استعلام زمان‌بندی و ثبت‌نام در دوره‌ها</span>
        </Link>
      </AnimateIn>
    </div>
  );
}
