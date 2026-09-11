"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimateIn } from "@/components/animate";
import { Iconify } from "@/components/iconify";
import { getContactRoute, getCoursesRoute } from "@/utils/routes";

export function AboutView() {
  return (
    <div className="flex flex-col gap-16 pt-8 pb-20 sm:pt-12">
      {/* Hero / Introduction */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn
          yOffset={24}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-950/60 dark:text-blue-300">
            <Iconify icon="solar:award-bold-duotone" className="h-4 w-4" />
            <span>آشنایی با آموزشگاه زبان کیش کارن</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            درباره آموزشگاه زبان کیش کارن
          </h1>

          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
            مرکزی پیشرو و نوآور در آموزش زبان‌های خارجی با رویکرد ارتقای
            مهارت‌های ارتباطی و بین‌المللی
          </p>
        </AnimateIn>
      </section>

      {/* Main Info Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <AnimateIn
            yOffset={24}
            delay={0.1}
            className="space-y-5 text-right lg:col-span-6"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              داستان کیش کارن؛ تعهد به کیفیت و تعالی آموزشی
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
              آموزشگاه زبان کیش کارن از بدو تأسیس با هدف ارائه بالاترین سطح
              آموزش زبان‌های زنده دنیا بر پایه استانداردهای چارچوب مرجع مشترک
              اروپا (CEFR) فعالیت خود را آغاز نموده است. ما بر این باوریم که
              یادگیری زبان، دریچه‌ای رو به تجربیات نو، ارتقای شغلی و موفقیت
              تحصیلی است.
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
              با استفاده از آخرین ابزارهای چندرسانه‌ای، کتب بین‌المللی روزآمد و
              روش‌های تدریس تعاملی (Communicative Approach)، محیطی فراهم
              آورده‌ایم تا فراگیران در تمامی مقاطع سنی بتوانند با آرامش و انگیزه
              بالا، مهارت مکالمه، شنیدار، خواندن و نوشتن را بیاموزند.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <AnimateIn
                yOffset={18}
                delay={0.15}
                className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ۱۵+ سال
                </div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  تجربه درخشان آموزشی
                </div>
              </AnimateIn>
              <AnimateIn
                yOffset={18}
                delay={0.2}
                className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ۵۰+ استاد
                </div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  کادر علمی و بین‌المللی
                </div>
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
      </section>

      {/* Management / Leadership Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-zinc-50">
                  پیام مدیریت آموزشگاه زبان کیش کارن
                </h2>
              </div>
            </div>

            <blockquote className="border-r-4 border-blue-600 pr-4 text-base leading-relaxed font-medium text-zinc-800 italic sm:text-lg dark:text-zinc-200">
              «آموزش صحیح و باکیفیت زبان، ساختن پلی محکم به سوی آینده است. در
              کیش کارن تلاش ما این بوده است که استانداردهای نوین آموزشی را با
              احترام، تعهد اخلاقی و ارزیابی فردبه‌فرد پیوند بزنیم.»
            </blockquote>

            <div className="space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
              <p>
                مدیریت آموزشگاه کیش کارن با سال‌ها سابقه تخصصی در مدیریت مراکز
                آموزشی و آموزش زبان‌های خارجی، هدایت مجموعه را با رویکرد{" "}
                <strong>دانش‌آموزمحور</strong> بر عهده دارد. هدف اساسی مدیریت،
                ایجاد ساختاری شفاف، ارزیابی مستمر کیفیت تدریس اساتید، و پشتیبانی
                همه جانبه از تک‌تک زبان‌آموزان از مرحله تعیین سطح تا دریافت مدرک
                پایان دوره است.
              </p>
              <p>
                از نگاه مدیریت، موفقیت هر زبان‌آموز دستاوردی بزرگ برای مجموعه
                کیش کارن به شمار می‌رود. به همین منظور، دوره‌ها به صورت تخصصی و
                تفکیک‌شده (کودکان، نوجوانان، بزرگسالان، و آمادگی آزمون‌های
                بین‌المللی) برنامه‌ریزی شده تا هر زبان‌آموز در کوتاه‌ترین زمان
                به بیشترین بازدهی دست یابد.
              </p>
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
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  ارزیابی هفتگی و ماهانه فرآیند تدریس و یادگیری
                </p>
              </AnimateIn>

              <AnimateIn yOffset={16} delay={0.2} className="space-y-1">
                <div className="flex items-center gap-1.5 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  <Iconify
                    icon="solar:check-circle-bold-duotone"
                    className="h-4 w-4 text-emerald-500"
                  />
                  پشتیبانی مستقیم
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  پاسخگویی سریع به دغدغه‌های زبان‌آموزان و اولیا
                </p>
              </AnimateIn>

              <AnimateIn yOffset={16} delay={0.25} className="space-y-1">
                <div className="flex items-center gap-1.5 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  <Iconify
                    icon="solar:check-circle-bold-duotone"
                    className="h-4 w-4 text-emerald-500"
                  />
                  به‌روزرسانی روش‌ها
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  همگام‌سازی دوره‌ها با معتبرترین آکادمی‌های بین‌المللی
                </p>
              </AnimateIn>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Action CTA */}
      <section className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <AnimateIn
          yOffset={20}
          delay={0.1}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href={getCoursesRoute()}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 active:scale-95"
          >
            <span>مشاهده دوره‌های آموزشی</span>
            <Iconify icon="solar:arrow-left-linear" className="h-4 w-4" />
          </Link>
          <Link
            href={getContactRoute()}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-800 transition-all hover:bg-zinc-50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <span>تماس با آموزشگاه</span>
            <Iconify icon="solar:phone-bold-duotone" className="h-4 w-4" />
          </Link>
        </AnimateIn>
      </section>
    </div>
  );
}
