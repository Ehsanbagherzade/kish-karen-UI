"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AnimateIn } from "@/components/animate";
import { ConsultationModal } from "@/components/consultation-modal";
import { Iconify } from "@/components/iconify";
import { getCoursesRoute } from "@/utils/routes";

const FEATURES = [
  {
    icon: "solar:graduation-cap-bold-duotone" as const,
    title: "اساتید باتجربه و بین‌المللی",
    description:
      "بهره‌گیری از کادر آموزشی متخصص با سابقه درخشان در تدریس سطوح مختلف.",
  },
  {
    icon: "solar:book-bookmark-bold-duotone" as const,
    title: "محتوا و منابع روز دنیا",
    description:
      "تدریس بر اساس آخرین کتب و متدهای آموزشی مورد تایید مراکز بین‌المللی.",
  },
  {
    icon: "solar:award-bold-duotone" as const,
    title: "ارائه گواهی پایان دوره معتبر",
    description: "اعطای مدرک معتبر آموزشی به فراگیران در پایان هر مقطع تحصیلی.",
  },
  {
    icon: "solar:verified-check-bold" as const,
    title: "تعیین سطح و مشاوره اختصاصی",
    description:
      "بررسی دقیق سطح زبانی و ارائه برنامه یادگیری متناسب با هدف هر زبان‌آموز.",
  },
];

const POPULAR_COURSES = [
  {
    title: "مکالمه جامع انگلیسی",
    level: "از مبتدی تا پیشرفته",
    duration: "ترمیک و فشرده",
    icon: "solar:global-bold-duotone" as const,
    badge: "پرمخاطب",
  },
  {
    title: "آزمون IELTS و TOEFL",
    level: "متوسط و پیشرفته",
    duration: "تکنیکال و تست‌زنی",
    icon: "solar:award-bold-duotone" as const,
    badge: "تخصصی",
  },
  {
    title: "کودکان و نوجوانان",
    level: "۷ الی ۱۵ سال",
    duration: "آموزش تعاملی و شاد",
    icon: "solar:users-group-rounded-bold-duotone" as const,
    badge: "سنین پایه",
  },
  {
    title: "آلمانی و فرانسوی",
    level: "A1 تا C1",
    duration: "مهاجرتی و تحصیلی",
    icon: "solar:star-bold-duotone" as const,
    badge: "بین‌المللی",
  },
];

export function HomeView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-12 overflow-x-hidden pb-16 sm:gap-16 sm:pb-20 md:gap-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-16 md:pb-24 dark:from-blue-950/20 dark:via-zinc-950 dark:to-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              {/* HERO IMAGE: FIRST on Mobile (order-1), SECOND on Desktop (lg:order-2) */}
              <AnimateIn
                yOffset={30}
                delay={0.1}
                className="order-1 w-full lg:order-2 lg:col-span-6"
              >
                <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-xl shadow-blue-500/10 sm:rounded-3xl dark:border-zinc-800 dark:bg-zinc-900">
                    <Image
                      src="/mainsection.webp"
                      alt="فضای آموزشی کیش کارن"
                      width={1672}
                      height={941}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="mt-3 flex items-center justify-center gap-2.5 rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-lg backdrop-blur-md sm:absolute sm:-right-4 sm:-bottom-4 sm:mt-0 sm:justify-start sm:p-4 dark:border-zinc-800 dark:bg-zinc-900/95">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 sm:h-12 sm:w-12">
                      <Iconify
                        icon="solar:award-bold-duotone"
                        className="h-6 w-6 sm:h-7 sm:w-7"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-900 sm:text-sm dark:text-zinc-100">
                        برترین برند آموزشی زبان
                      </div>
                      <div className="text-[11px] text-zinc-500 sm:text-xs dark:text-zinc-400">
                        محیطی مدرن و استاندارد بین‌المللی
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* HERO TEXT: SECOND on Mobile (order-2), FIRST on Desktop (lg:order-1) */}
              <AnimateIn
                yOffset={25}
                delay={0.2}
                className="order-2 space-y-5 text-center sm:space-y-6 lg:order-1 lg:col-span-6 lg:text-right"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
                  <Iconify icon="solar:star-bold-duotone" className="h-4 w-4" />
                  <span>شروع ترم جدید با شرایط ویژه ثبت‌نام</span>
                </div>

                <h1 className="text-2xl leading-tight font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-zinc-50">
                  آموزشگاه زبان{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    کیش کارن
                  </span>
                </h1>

                <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base lg:mx-0 lg:text-lg dark:text-zinc-300">
                  با کیش کارن، یادگیری زبان دیگر یک چالش نیست! محیطی مجهز،
                  متدهای آموزشی روز دنیا و همراهی برترین اساتید تا تسلط کامل بر
                  مکالمه و آزمون‌های بین‌المللی.
                </p>

                {/* Side-by-side buttons on mobile with slightly smaller font */}
                <div className="grid grid-cols-2 gap-2 pt-2 sm:gap-3 lg:flex lg:flex-row lg:justify-start">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-2.5 py-3 text-[11px] font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35 active:scale-95 sm:gap-2 sm:px-5 sm:py-3.5 sm:text-sm"
                  >
                    <Iconify
                      icon="solar:phone-bold-duotone"
                      className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                    />
                    <span className="truncate">تعیین سطح و مشاوره</span>
                  </button>

                  <Link
                    href={getCoursesRoute()}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-2.5 py-3 text-[11px] font-semibold text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-50 active:scale-95 sm:gap-2 sm:px-5 sm:py-3.5 sm:text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    <span>مشاهده دوره‌ها</span>
                    <Iconify
                      icon="solar:arrow-left-linear"
                      className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                    />
                  </Link>
                </div>

                {/* Quick stats / Highlights */}
                <div className="grid grid-cols-3 gap-2 border-t border-zinc-200/80 pt-5 sm:gap-4 sm:pt-6 dark:border-zinc-800/80">
                  <div className="text-center lg:text-right">
                    <div className="text-lg font-bold text-blue-600 sm:text-xl dark:text-blue-400">
                      +۱۵
                    </div>
                    <div className="text-[11px] text-zinc-500 sm:text-xs dark:text-zinc-400">
                      سال تجربه آموزشی
                    </div>
                  </div>
                  <div className="text-center lg:text-right">
                    <div className="text-lg font-bold text-blue-600 sm:text-xl dark:text-blue-400">
                      +۵,۰۰۰
                    </div>
                    <div className="text-[11px] text-zinc-500 sm:text-xs dark:text-zinc-400">
                      زبان‌آموز موفق
                    </div>
                  </div>
                  <div className="text-center lg:text-right">
                    <div className="text-lg font-bold text-blue-600 sm:text-xl dark:text-blue-400">
                      ۱۰۰٪
                    </div>
                    <div className="text-[11px] text-zinc-500 sm:text-xs dark:text-zinc-400">
                      رضایت فراگیران
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn
            yOffset={20}
            className="mx-auto mb-8 max-w-2xl space-y-2 text-center sm:mb-12 sm:space-y-3"
          >
            <h2 className="text-xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-50">
              چرا آموزشگاه زبان کیش کارن؟
            </h2>
            <p className="text-xs text-zinc-600 sm:text-base dark:text-zinc-400">
              ما بالاترین کیفیت استانداردهای آموزشی را برای رشد و پیشرفت زبانی
              شما مهیا کرده‌ایم.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {FEATURES.map((feature, idx) => (
              <AnimateIn
                key={feature.title}
                yOffset={24}
                delay={idx * 0.08}
                className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-md sm:p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                  <Iconify icon={feature.icon} className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-400">
                  {feature.description}
                </p>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* About Section with info.webp */}
        <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn
            yOffset={28}
            className="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 sm:rounded-3xl sm:p-10 lg:p-12 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="order-1 flex justify-center lg:order-1 lg:col-span-5">
                <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-3 shadow-lg sm:p-4 dark:bg-zinc-900">
                  <Image
                    src="/info.webp"
                    alt="درباره آموزشگاه کیش کارن"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="h-auto w-full rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="order-2 space-y-4 text-right lg:order-2 lg:col-span-7">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  درباره آموزشگاه
                </span>
                <h2 className="text-xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-50">
                  مسیر موفقیت زبانی شما از کیش کارن آغاز می‌شود
                </h2>
                <p className="text-xs leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
                  آموزشگاه زبان کیش کارن با هدف ارتقای مهارت‌های زبانی، فضای
                  علمی پرانرژی و متدهای نوین تدریس را به همراه کادری دلسوز و
                  حرفه‌ای فراهم نموده است. ما به شما کمک می‌کنیم در کوتاه‌ترین
                  زمان، با اعتمادبه‌نفس بالا به زبان مورد علاقه خود مسلط شوید.
                </p>

                <div className="grid grid-cols-1 gap-2.5 pt-2 sm:grid-cols-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-700 sm:text-sm dark:text-zinc-300">
                    <Iconify
                      icon="solar:check-circle-bold-duotone"
                      className="h-4 w-4 shrink-0 text-emerald-500 sm:h-5 sm:w-5"
                    />
                    <span>برگزاری کلاس‌های آنلاین و حضوری</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-700 sm:text-sm dark:text-zinc-300">
                    <Iconify
                      icon="solar:check-circle-bold-duotone"
                      className="h-4 w-4 shrink-0 text-emerald-500 sm:h-5 sm:w-5"
                    />
                    <span>آزمون‌های شبیه‌ساز استاندارد</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-700 sm:text-sm dark:text-zinc-300">
                    <Iconify
                      icon="solar:check-circle-bold-duotone"
                      className="h-4 w-4 shrink-0 text-emerald-500 sm:h-5 sm:w-5"
                    />
                    <span>جلسات بحث آزاد (Free Discussion)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-700 sm:text-sm dark:text-zinc-300">
                    <Iconify
                      icon="solar:check-circle-bold-duotone"
                      className="h-4 w-4 shrink-0 text-emerald-500 sm:h-5 sm:w-5"
                    />
                    <span>پایش مستمر پیشرفت زبان‌آموزان</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </section>

        {/* Popular Courses Section: 2 CARDS PER ROW ON MOBILE (grid-cols-2) */}
        <section
          id="courses"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <AnimateIn
            yOffset={20}
            className="mx-auto mb-8 max-w-2xl space-y-2 text-center sm:mb-12 sm:space-y-3"
          >
            <h2 className="text-xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-50">
              دوره‌های تخصصی کیش کارن
            </h2>
            <p className="text-xs text-zinc-600 sm:text-base dark:text-zinc-400">
              دوره‌های طراحی شده متناسب با نیاز و زمان‌بندی شما
            </p>
          </AnimateIn>

          {/* 2 per row on mobile (grid-cols-2) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {POPULAR_COURSES.map((course, idx) => (
              <AnimateIn
                key={course.title}
                yOffset={24}
                delay={idx * 0.08}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-3.5 shadow-sm transition-all hover:shadow-md sm:p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between sm:mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-10 sm:w-10 dark:bg-blue-950/60 dark:text-blue-400">
                      <Iconify
                        icon={course.icon}
                        className="h-4 w-4 sm:h-5 sm:w-5"
                      />
                    </div>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 sm:px-2.5 sm:py-1 sm:text-xs dark:bg-blue-950/60 dark:text-blue-300">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="mb-1 text-xs font-bold text-zinc-900 sm:mb-2 sm:text-base dark:text-zinc-100">
                    {course.title}
                  </h3>
                  <p className="mb-1 text-[11px] text-zinc-500 sm:text-xs dark:text-zinc-400">
                    سطح: {course.level}
                  </p>
                  <p className="text-[11px] text-zinc-500 sm:text-xs dark:text-zinc-400">
                    برگزاری: {course.duration}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-3.5 flex items-center justify-center gap-1 rounded-xl border border-zinc-200 py-2 text-[11px] font-semibold text-blue-600 transition-colors hover:bg-blue-50 sm:mt-5 sm:py-2.5 sm:text-xs dark:border-zinc-800 dark:text-blue-400 dark:hover:bg-blue-950/50"
                >
                  <span>مشاوره</span>
                  <Iconify
                    icon="solar:arrow-left-linear"
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                  />
                </button>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* CTA / Contact Section with Passing Glowing Gradient */}
        <section
          id="contact"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <AnimateIn
            yOffset={30}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-6 text-white shadow-xl shadow-blue-500/20 sm:rounded-3xl sm:p-12"
          >
            {/* Ambient soft glow background circles */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-400/25 blur-3xl" />

            {/* Passing animated gradient beam */}
            <motion.div
              className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent"
              animate={{
                x: ["-140%", "140%"],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.5,
              }}
            />

            <div className="relative z-10 mx-auto max-w-2xl space-y-4 text-center sm:space-y-6">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-3xl">
                آماده شروع یادگیری در آموزشگاه زبان کیش کارن هستید؟
              </h2>
              <p className="text-xs leading-relaxed text-blue-100 sm:text-base">
                همین امروز جهت تعیین سطح رایگان و انتخاب مناسب‌ترین دوره آموزشی
                با کارشناسان کیش کارن تماس بگیرید.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-md transition-all hover:bg-zinc-100 active:scale-95 sm:w-auto"
                >
                  <Iconify
                    icon="solar:phone-bold-duotone"
                    className="h-5 w-5"
                  />
                  <span>تماس با آموزشگاه کیش کارن</span>
                </button>
              </div>
            </div>
          </AnimateIn>
        </section>
      </div>

      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
