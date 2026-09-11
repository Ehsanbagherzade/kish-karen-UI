"use client";

import { AnimateIn } from "@/components/animate";
import { Iconify } from "@/components/iconify";

export function ContactView() {
  return (
    <div className="container mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
      <AnimateIn yOffset={24} className="space-y-3 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
          <Iconify icon="solar:phone-bold-duotone" className="h-4 w-4" />
          <span>ارتباط با کیش کارن</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          تماس با آموزشگاه زبان کیش کارن
        </h1>

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          مشاوران و کارشناسان ثبت‌نام در تمام روزهای کاری پاسخگوی شما عزیزان
          هستند.
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Contact phones */}
        <AnimateIn
          yOffset={24}
          delay={0.1}
          className="space-y-4 rounded-2xl border border-zinc-200/80 bg-white p-6 text-right shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
            <Iconify icon="solar:phone-bold-duotone" className="h-5 w-5" />
          </div>
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            شماره‌های تماس مستقیم
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2 dark:border-zinc-800">
              <span className="text-zinc-500">تلفن ثابت:</span>
              <a
                href="tel:05832237724"
                className="font-bold text-blue-600 hover:underline"
                dir="ltr"
              >
                ۰۵۸-۳۲۲۳۷۷۲۴
              </a>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2 dark:border-zinc-800">
              <span className="text-zinc-500">فکس / پشتیبانی:</span>
              <a
                href="tel:05832221441"
                className="font-bold text-blue-600 hover:underline"
                dir="ltr"
              >
                ۰۵۸-۳۲۲۲۱۴۴۱
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">پست الکترونیک:</span>
              <a
                href="mailto:support@karenkish.ir"
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                dir="ltr"
              >
                support@karenkish.ir
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Address */}
        <AnimateIn
          yOffset={24}
          delay={0.18}
          className="space-y-4 rounded-2xl border border-zinc-200/80 bg-white p-6 text-right shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
            <Iconify icon="solar:map-point-bold-duotone" className="h-5 w-5" />
          </div>
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            نشانی دفتر مرکزی
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            بجنورد - خیابان طالقانی شرقی - کوچه جاجرمی - نبش عمارت
          </p>
          <div className="border-t border-zinc-100 pt-2 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            مراکز زبان کیش و کارن بجنورد و مدارس غیردولتی کارن با مدیریت دکتر
            مجتبی غلامیان
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
