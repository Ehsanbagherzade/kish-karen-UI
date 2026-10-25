"use client";

import { AnimateIn } from "@/components/animate";
import { Iconify } from "@/components/iconify";
import { ButtonLink, Card, Container, Typography } from "@/components/ui";
import { getContactRoute } from "@/utils/routes";

export function KarenSchoolView() {
  return (
    <Container as="div" size="sm" className="space-y-6 py-16 text-center">
      <AnimateIn yOffset={24} className="space-y-4">
        <Typography as="h1" variant="h1" tone="default">
          مدرسه زبان کارن
        </Typography>

        <Typography as="p" variant="body" tone="muted">
          بخش «مدرسه کارن» ویژه برنامه‌ریزی زبانی مدارس، طرح‌های دوزبانه
          دانش‌آموزی، کلاس‌های تقویتی و فوق‌برنامه مقاطع ابتدایی و متوسطه است.
        </Typography>
      </AnimateIn>

      <AnimateIn yOffset={24} delay={0.12} className="h-full">
        <Card variant="muted" className="h-full space-y-2 text-right">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            خدمات مدرسه کارن به دانش‌آموزان و مدارس:
          </div>
          <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <li>برگزاری دوره‌های زبان متناسب با سنین ۷ تا ۱۸ سال</li>
            <li>پشتیبانی از کتاب‌های درسی و زبان پیشرفته بین‌المللی</li>
            <li>همکاری رسمی با مدارس جهت تأمین اساتید و سرفصل‌های دوزبانه</li>
            <li>کارگاه‌های مکالمه شاد همراه با بازی و فعالیت‌های خلاقانه</li>
          </ul>
        </Card>
      </AnimateIn>

      <AnimateIn yOffset={20} delay={0.2} className="pt-4">
        <ButtonLink
          variant="primary"
          size="responsive"
          href={getContactRoute()}
        >
          <Iconify icon="solar:phone-bold-duotone" className="h-4 w-4" />
          <span>هماهنگی و کسب اطلاعات بیشتر</span>
        </ButtonLink>
      </AnimateIn>
    </Container>
  );
}
