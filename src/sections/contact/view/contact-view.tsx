"use client";

import { AnimateIn } from "@/components/animate";
import { Iconify } from "@/components/iconify";
import { Card, Container, Typography } from "@/components/ui";

export function ContactView() {
  return (
    <Container as="div" size="md" className="space-y-8 py-16">
      <AnimateIn yOffset={24} className="space-y-3 text-center">
        <Typography as="h1" variant="h1" tone="default">
          تماس با آموزشگاه زبان کیش کارن
        </Typography>

        <Typography as="p" variant="body" tone="muted">
          مشاوران و کارشناسان ثبت‌نام در تمام روزهای کاری پاسخگوی شما عزیزان
          هستند.
        </Typography>
      </AnimateIn>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Contact phones */}
        <AnimateIn yOffset={24} delay={0.1} className="h-full">
          <Card variant="default" className="h-full space-y-4 text-right">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
              <Iconify icon="solar:phone-bold-duotone" className="h-5 w-5" />
            </div>
            <Typography as="h2" variant="h2" tone="default">
              شماره‌های تماس مستقیم
            </Typography>
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
          </Card>
        </AnimateIn>

        {/* Address */}
        <AnimateIn yOffset={24} delay={0.18} className="h-full">
          <Card variant="default" className="h-full space-y-4 text-right">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
              <Iconify
                icon="solar:map-point-bold-duotone"
                className="h-5 w-5"
              />
            </div>
            <Typography as="h2" variant="h2" tone="default">
              نشانی دفتر مرکزی
            </Typography>
            <Typography as="p" variant="body" tone="muted">
              بجنورد - خیابان طالقانی شرقی - کوچه جاجرمی - نبش عمارت
            </Typography>
            <div className="border-t border-zinc-100 pt-2 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
              مراکز زبان کیش و کارن بجنورد و مدارس غیردولتی کارن با مدیریت دکتر
              مجتبی غلامیان
            </div>
          </Card>
        </AnimateIn>
      </div>
    </Container>
  );
}
