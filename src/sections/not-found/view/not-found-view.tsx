"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimateIn } from "@/components/animate";
import { Iconify } from "@/components/iconify";
import { getCoursesRoute, getHomeRoute } from "@/utils/routes";

export function NotFoundView() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <AnimateIn
        yOffset={30}
        duration={0.6}
        className="relative mb-8 h-64 w-64 max-w-full overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-3 shadow-xl sm:h-80 sm:w-80 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <Image
          src="/not-found.jpg"
          alt="صفحه ۴۰۴ یافت نشد - آموزشگاه کیش کارن"
          fill
          sizes="(max-width: 640px) 256px, 320px"
          priority
          className="rounded-2xl object-contain"
        />
      </AnimateIn>

      <AnimateIn yOffset={24} delay={0.15} className="max-w-md space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-950/50 dark:text-red-400">
          <Iconify icon="solar:close-circle-linear" className="h-4 w-4" />
          <span>خطای ۴۰۴</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          صفحه مورد نظر یافت نشد!
        </h1>

        <p className="text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
          متأسفانه صفحه‌ای که به دنبال آن بودید پیدا نشد، ممکن است آدرس تغییر
          کرده باشد یا حذف شده باشد.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            href={getHomeRoute()}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35 active:scale-95"
          >
            <Iconify icon="solar:home-2-bold-duotone" className="h-4 w-4" />
            <span>بازگشت به صفحه اصلی</span>
          </Link>

          <Link
            href={getCoursesRoute()}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition-all hover:bg-zinc-50 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <span>مشاهده دوره‌ها</span>
            <Iconify icon="solar:arrow-left-linear" className="h-4 w-4" />
          </Link>
        </div>
      </AnimateIn>
    </div>
  );
}
