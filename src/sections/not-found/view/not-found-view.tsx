"use client";

import Image from "next/image";

import { AnimateIn } from "@/components/animate";
import { Iconify } from "@/components/iconify";
import { ButtonLink, Typography } from "@/components/ui";
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
        <Typography as="h1" variant="h1" tone="default">
          صفحه مورد نظر یافت نشد!
        </Typography>

        <Typography as="p" variant="body" tone="muted">
          متأسفانه صفحه‌ای که به دنبال آن بودید پیدا نشد، ممکن است آدرس تغییر
          کرده باشد یا حذف شده باشد.
        </Typography>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <ButtonLink variant="primary" size="responsive" href={getHomeRoute()}>
            <Iconify icon="solar:home-2-bold-duotone" className="h-4 w-4" />
            <span>بازگشت به صفحه اصلی</span>
          </ButtonLink>

          <ButtonLink
            variant="outline"
            size="responsive"
            href={getCoursesRoute()}
          >
            <span>مشاهده دوره‌ها</span>
            <Iconify icon="solar:arrow-left-linear" className="h-4 w-4" />
          </ButtonLink>
        </div>
      </AnimateIn>
    </div>
  );
}
