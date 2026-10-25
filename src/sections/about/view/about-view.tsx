"use client";

import Image from "next/image";

import { AnimateIn } from "@/components/animate";
import { Iconify } from "@/components/iconify";
import { ButtonLink, Card, Container, Typography } from "@/components/ui";
import { getContactRoute, getCoursesRoute } from "@/utils/routes";

export function AboutView() {
  return (
    <div className="flex flex-col gap-16 pt-8 pb-20 sm:pt-12">
      {/* Hero / Introduction */}
      <Container as="section" size="xl">
        <AnimateIn
          yOffset={24}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <Typography as="h1" variant="h1" tone="default">
            درباره آموزشگاه زبان کیش کارن
          </Typography>

          <Typography as="p" variant="body" tone="muted">
            مرکزی پیشرو و نوآور در آموزش زبان‌های خارجی با رویکرد ارتقای
            مهارت‌های ارتباطی و بین‌المللی
          </Typography>
        </AnimateIn>
      </Container>

      {/* Main Info Section */}
      <Container as="section" size="xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <AnimateIn
            yOffset={24}
            delay={0.1}
            className="space-y-5 text-right lg:col-span-6"
          >
            <Typography as="h2" variant="h2" tone="default">
              داستان کیش کارن؛ تعهد به کیفیت و تعالی آموزشی
            </Typography>
            <Typography as="p" variant="body" tone="muted">
              آموزشگاه زبان کیش کارن از بدو تأسیس با هدف ارائه بالاترین سطح
              آموزش زبان‌های زنده دنیا بر پایه استانداردهای چارچوب مرجع مشترک
              اروپا (CEFR) فعالیت خود را آغاز نموده است. ما بر این باوریم که
              یادگیری زبان، دریچه‌ای رو به تجربیات نو، ارتقای شغلی و موفقیت
              تحصیلی است.
            </Typography>
            <Typography as="p" variant="body" tone="muted">
              با استفاده از آخرین ابزارهای چندرسانه‌ای، کتب بین‌المللی روزآمد و
              روش‌های تدریس تعاملی (Communicative Approach)، محیطی فراهم
              آورده‌ایم تا فراگیران در تمامی مقاطع سنی بتوانند با آرامش و انگیزه
              بالا، مهارت مکالمه، شنیدار، خواندن و نوشتن را بیاموزند.
            </Typography>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <AnimateIn yOffset={18} delay={0.15} className="h-full">
                <Card variant="muted" className="h-full">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ۱۵+ سال
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    تجربه درخشان آموزشی
                  </div>
                </Card>
              </AnimateIn>
              <AnimateIn yOffset={18} delay={0.2} className="h-full">
                <Card variant="muted" className="h-full">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ۵۰+ استاد
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    کادر علمی و بین‌المللی
                  </div>
                </Card>
              </AnimateIn>
            </div>
          </AnimateIn>

          <AnimateIn
            yOffset={28}
            delay={0.15}
            className="flex justify-center lg:col-span-6"
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-3 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/info.webp"
                alt="آموزشگاه زبان کیش کارن"
                width={600}
                height={450}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </AnimateIn>
        </div>
      </Container>

      {/* Management / Leadership Section */}
      <Container as="section" size="xl">
        <AnimateIn
          yOffset={28}
          delay={0.1}
          className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-amber-50/40 p-6 shadow-sm sm:p-10 lg:p-12 dark:border-blue-950 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-950"
        >
          <div className="mx-auto max-w-3xl space-y-6 text-right">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/25">
                <Iconify icon="solar:user-bold-duotone" className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  سخن و خط‌مشی
                </span>
                <Typography as="h2" variant="h2" tone="default">
                  پیام مدیریت آموزشگاه زبان کیش کارن
                </Typography>
              </div>
            </div>

            <blockquote className="border-r-4 border-blue-600 pr-4 text-base leading-relaxed font-medium text-zinc-800 italic sm:text-lg dark:text-zinc-200">
              «آموزش صحیح و باکیفیت زبان، ساختن پلی محکم به سوی آینده است. در
              کیش کارن تلاش ما این بوده است که استانداردهای نوین آموزشی را با
              احترام، تعهد اخلاقی و ارزیابی فردبه‌فرد پیوند بزنیم.»
            </blockquote>

            <div className="space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
              <Typography as="p" variant="body" tone="muted">
                مدیریت آموزشگاه کیش کارن با سال‌ها سابقه تخصصی در مدیریت مراکز
                آموزشی و آموزش زبان‌های خارجی، هدایت مجموعه را با رویکرد{" "}
                <strong>دانش‌آموزمحور</strong> بر عهده دارد. هدف اساسی مدیریت،
                ایجاد ساختاری شفاف، ارزیابی مستمر کیفیت تدریس اساتید، و پشتیبانی
                همه جانبه از تک‌تک زبان‌آموزان از مرحله تعیین سطح تا دریافت مدرک
                پایان دوره است.
              </Typography>
              <Typography as="p" variant="body" tone="muted">
                از نگاه مدیریت، موفقیت هر زبان‌آموز دستاوردی بزرگ برای مجموعه
                کیش کارن به شمار می‌رود. به همین منظور، دوره‌ها به صورت تخصصی و
                تفکیک‌شده (کودکان، نوجوانان، بزرگسالان، و آمادگی آزمون‌های
                بین‌المللی) برنامه‌ریزی شده تا هر زبان‌آموز در کوتاه‌ترین زمان
                به بیشترین بازدهی دست یابد.
              </Typography>
            </div>

            {/* Management Pillars */}
            <div className="grid grid-cols-1 gap-4 border-t border-zinc-200/80 pt-4 sm:grid-cols-3 dark:border-zinc-800">
              <AnimateIn yOffset={16} delay={0.15} className="space-y-1">
                <div className="flex items-center gap-1.5 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  <Iconify
                    icon="solar:check-circle-bold-duotone"
                    className="h-4 w-4 text-emerald-500"
                  />
                  نظارت مستمر کیفی
                </div>
                <Typography as="p" variant="caption" tone="subtle">
                  ارزیابی هفتگی و ماهانه فرآیند تدریس و یادگیری
                </Typography>
              </AnimateIn>

              <AnimateIn yOffset={16} delay={0.2} className="space-y-1">
                <div className="flex items-center gap-1.5 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  <Iconify
                    icon="solar:check-circle-bold-duotone"
                    className="h-4 w-4 text-emerald-500"
                  />
                  پشتیبانی مستقیم
                </div>
                <Typography as="p" variant="caption" tone="subtle">
                  پاسخگویی سریع به دغدغه‌های زبان‌آموزان و اولیا
                </Typography>
              </AnimateIn>

              <AnimateIn yOffset={16} delay={0.25} className="space-y-1">
                <div className="flex items-center gap-1.5 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  <Iconify
                    icon="solar:check-circle-bold-duotone"
                    className="h-4 w-4 text-emerald-500"
                  />
                  به‌روزرسانی روش‌ها
                </div>
                <Typography as="p" variant="caption" tone="subtle">
                  همگام‌سازی دوره‌ها با معتبرترین آکادمی‌های بین‌المللی
                </Typography>
              </AnimateIn>
            </div>
          </div>
        </AnimateIn>
      </Container>

      {/* Action CTA */}
      <Container as="section" size="xl" className="text-center">
        <AnimateIn
          yOffset={20}
          delay={0.1}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <ButtonLink
            variant="primary"
            size="responsive"
            href={getCoursesRoute()}
          >
            <span>مشاهده دوره‌های آموزشی</span>
            <Iconify icon="solar:arrow-left-linear" className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            variant="outline"
            size="responsive"
            href={getContactRoute()}
          >
            <span>تماس با آموزشگاه</span>
            <Iconify icon="solar:phone-bold-duotone" className="h-4 w-4" />
          </ButtonLink>
        </AnimateIn>
      </Container>
    </div>
  );
}
