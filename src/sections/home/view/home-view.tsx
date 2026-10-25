"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimateIn } from "@/components/animate";
import { ConsultationModal } from "@/components/consultation-modal";
import { Iconify } from "@/components/iconify";
import {
  Badge,
  Button,
  ButtonLink,
  Card,
  Container,
  Typography,
} from "@/components/ui";
import { getCoursesRoute } from "@/utils/routes";

import { ContactBackground } from "../components/contact-background";
import { HeroBackground } from "../components/hero-background";

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
        <section className="relative isolate flex min-h-[30rem] items-center overflow-hidden bg-blue-50/40 py-20 sm:py-24 md:min-h-0 md:py-24 lg:py-32 xl:py-36 dark:bg-zinc-950">
          <HeroBackground />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-white/30 via-white/60 to-white/80 dark:from-zinc-950/40 dark:via-zinc-950/60 dark:to-zinc-950/80"
          />
          <Container>
            <AnimateIn
              yOffset={25}
              className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:gap-8"
            >
              <Typography as="h1" variant="h1" tone="default">
                آموزشگاه زبان{" "}
                <span className="text-primary dark:text-blue-400">
                  کیش کارن
                </span>
              </Typography>

              <Typography
                as="p"
                variant="lead"
                tone="muted"
                className="mx-auto max-w-2xl"
              >
                با کیش کارن، یادگیری زبان دیگر یک چالش نیست! محیطی مجهز،
                متدهای آموزشی روز دنیا و همراهی برترین اساتید تا تسلط کامل بر
                مکالمه و آزمون‌های بین‌المللی.
              </Typography>

              <div className="grid w-full max-w-md grid-cols-2 gap-2 pt-2 sm:flex sm:w-auto sm:max-w-none sm:justify-center sm:gap-3">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="responsive"
                >
                  <Iconify icon="solar:phone-bold-duotone" />
                  <span className="truncate">تعیین سطح و مشاوره</span>
                </Button>

                <ButtonLink
                  variant="outline"
                  size="responsive"
                  href={getCoursesRoute()}
                >
                  <span>مشاهده دوره‌ها</span>
                  <Iconify icon="solar:arrow-left-linear" />
                </ButtonLink>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Features Grid */}
        <Container as="section" size="xl">
          <AnimateIn
            yOffset={20}
            className="mx-auto mb-8 max-w-2xl space-y-2 text-center sm:mb-12 sm:space-y-3"
          >
            <Typography as="h2" variant="h2" tone="default">
              چرا آموزشگاه زبان کیش کارن؟
            </Typography>
            <Typography as="p" variant="body" tone="muted">
              ما بالاترین کیفیت استانداردهای آموزشی را برای رشد و پیشرفت زبانی
              شما مهیا کرده‌ایم.
            </Typography>
          </AnimateIn>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {FEATURES.map((feature, idx) => (
              <AnimateIn
                key={feature.title}
                yOffset={24}
                delay={idx * 0.08}
                className="h-full"
              >
                <Card
                  variant="default"
                  className="h-full transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-md"
                >
                  <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                    <Iconify icon={feature.icon} className="h-5 w-5" />
                  </div>
                  <Typography
                    as="h3"
                    variant="h3"
                    tone="default"
                    className="mb-1.5"
                  >
                    {feature.title}
                  </Typography>
                  <Typography as="p" variant="caption" tone="muted">
                    {feature.description}
                  </Typography>
                </Card>
              </AnimateIn>
            ))}
          </div>
        </Container>

        {/* About Section with info.webp */}
        <Container id="about" as="section" size="xl">
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
                <Typography as="h2" variant="h2" tone="default">
                  مسیر موفقیت زبانی شما از کیش کارن آغاز می‌شود
                </Typography>
                <Typography as="p" variant="body" tone="muted">
                  آموزشگاه زبان کیش کارن با هدف ارتقای مهارت‌های زبانی، فضای
                  علمی پرانرژی و متدهای نوین تدریس را به همراه کادری دلسوز و
                  حرفه‌ای فراهم نموده است. ما به شما کمک می‌کنیم در کوتاه‌ترین
                  زمان، با اعتمادبه‌نفس بالا به زبان مورد علاقه خود مسلط شوید.
                </Typography>

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
        </Container>

        {/* Popular Courses Section: 2 CARDS PER ROW ON MOBILE (grid-cols-2) */}
        <Container id="courses" as="section" size="xl">
          <AnimateIn
            yOffset={20}
            className="mx-auto mb-8 max-w-2xl space-y-2 text-center sm:mb-12 sm:space-y-3"
          >
            <Typography as="h2" variant="h2" tone="default">
              دوره‌های تخصصی کیش کارن
            </Typography>
            <Typography as="p" variant="body" tone="muted">
              دوره‌های طراحی شده متناسب با نیاز و زمان‌بندی شما
            </Typography>
          </AnimateIn>

          {/* 2 per row on mobile (grid-cols-2) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {POPULAR_COURSES.map((course, idx) => (
              <AnimateIn
                key={course.title}
                yOffset={24}
                delay={idx * 0.08}
                className="h-full"
              >
                <Card
                  variant="default"
                  className="flex h-full flex-col justify-between transition-all hover:shadow-md"
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between sm:mb-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-10 sm:w-10 dark:bg-blue-950/60 dark:text-blue-400">
                        <Iconify
                          icon={course.icon}
                          className="h-4 w-4 sm:h-5 sm:w-5"
                        />
                      </div>
                      <Badge size="xs">{course.badge}</Badge>
                    </div>

                    <Typography
                      as="h3"
                      variant="h3"
                      tone="default"
                      className="mb-1 sm:mb-2"
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      as="p"
                      variant="caption"
                      tone="subtle"
                      className="mb-1"
                    >
                      سطح: {course.level}
                    </Typography>
                    <Typography as="p" variant="caption" tone="subtle">
                      برگزاری: {course.duration}
                    </Typography>
                  </div>

                  <Button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    variant="outline"
                    size="sm"
                    className="mt-3.5 sm:mt-5"
                  >
                    <span>مشاوره</span>
                    <Iconify
                      icon="solar:arrow-left-linear"
                      className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                    />
                  </Button>
                </Card>
              </AnimateIn>
            ))}
          </div>
        </Container>

        {/* Contact section with a static vector background */}
        <Container id="contact" as="section" size="xl">
          <div className="relative isolate overflow-hidden rounded-2xl bg-blue-700 p-6 text-white shadow-xl shadow-blue-500/20 sm:rounded-3xl sm:p-12">
            <ContactBackground />

            <div className="relative z-10 mx-auto max-w-2xl space-y-4 text-center sm:space-y-6">
              <Typography as="h2" variant="h2" tone="inherit">
                آماده شروع یادگیری در آموزشگاه زبان کیش کارن هستید؟
              </Typography>
              <Typography
                as="p"
                variant="body"
                tone="inherit"
                className="text-blue-100"
              >
                همین امروز جهت تعیین سطح رایگان و انتخاب مناسب‌ترین دوره آموزشی
                با کارشناسان کیش کارن تماس بگیرید.
              </Typography>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  variant="inverse"
                  size="responsive"
                  className="w-full sm:w-auto"
                >
                  <Iconify
                    icon="solar:phone-bold-duotone"
                    className="h-5 w-5"
                  />
                  <span>تماس با آموزشگاه کیش کارن</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
