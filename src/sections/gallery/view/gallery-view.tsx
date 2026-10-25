"use client";

import { useState } from "react";

import { AnimateIn } from "@/components/animate";
import { ConsultationModal } from "@/components/consultation-modal";
import { Iconify } from "@/components/iconify";
import { Button, Card, Container, Typography } from "@/components/ui";

import { GallerySlider } from "../components/gallery-slider";

export function GalleryView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container
        as="div"
        size="xl"
        className="flex flex-col gap-10 pt-8 pb-20 sm:gap-14 sm:pt-12"
      >
        {/* Page Header */}
        <AnimateIn
          yOffset={24}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <Typography as="h1" variant="h1" tone="default">
            گالری تصاویر آموزشگاه زبان کیش کارن
          </Typography>

          <Typography as="p" variant="body" tone="muted">
            نگاهی به فضای مدرن، امکانات چندرسانه‌ای و محیط علمی پرانرژی کیش
            کارن؛ جایی که یادگیری زبان به تجربه‌ای لذت‌بخش و مؤثر تبدیل می‌شود.
          </Typography>
        </AnimateIn>

        {/* Gallery Slider Section */}
        <AnimateIn
          yOffset={28}
          delay={0.1}
          className="mx-auto w-full max-w-5xl"
        >
          <GallerySlider />
        </AnimateIn>

        {/* Quick Highlights / Facilities Cards */}
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          <AnimateIn yOffset={20} delay={0.15} className="h-full">
            <Card
              variant="default"
              className="flex h-full items-center gap-3.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <Iconify
                  icon="solar:check-circle-bold-duotone"
                  className="h-5 w-5"
                />
              </div>
              <div>
                <Typography as="h4" variant="h4" tone="default">
                  کلاس‌های هوشمند
                </Typography>
                <Typography as="p" variant="caption" tone="subtle">
                  ویدئوپروژکتور و سیستم‌های چندرسانه‌ای
                </Typography>
              </div>
            </Card>
          </AnimateIn>

          <AnimateIn yOffset={20} delay={0.2} className="h-full">
            <Card
              variant="default"
              className="flex h-full items-center gap-3.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                <Iconify icon="solar:star-bold-duotone" className="h-5 w-5" />
              </div>
              <div>
                <Typography as="h4" variant="h4" tone="default">
                  فضای یادگیری ارگونومیک
                </Typography>
                <Typography as="p" variant="caption" tone="subtle">
                  محیطی آرام، پرنور و متناسب با تمرکز
                </Typography>
              </div>
            </Card>
          </AnimateIn>

          <AnimateIn yOffset={20} delay={0.25} className="h-full">
            <Card
              variant="default"
              className="flex h-full items-center gap-3.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                <Iconify
                  icon="solar:book-bookmark-bold-duotone"
                  className="h-5 w-5"
                />
              </div>
              <div>
                <Typography as="h4" variant="h4" tone="default">
                  کتابخانه و منابع خودخوان
                </Typography>
                <Typography as="p" variant="caption" tone="subtle">
                  دسترسی به آزمون‌ها، رمان‌ها و مجلات روز
                </Typography>
              </div>
            </Card>
          </AnimateIn>
        </div>

        {/* Visit CTA Box */}
        <AnimateIn
          yOffset={24}
          delay={0.2}
          className="mx-auto w-full max-w-5xl rounded-2xl border border-zinc-200/80 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70 p-6 text-center sm:rounded-3xl sm:p-8 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900/80 dark:to-zinc-900"
        >
          <div className="mx-auto max-w-xl space-y-3">
            <Typography as="h3" variant="h3" tone="default">
              مایلید محیط آموزشگاه را از نزدیک ببینید؟
            </Typography>
            <Typography as="p" variant="caption" tone="muted">
              کارشناسان کیش کارن با کمال میل آماده پذیرایی، مشاوره حضوری رایگان
              و ارائه برنامه آموزشی متناسب با هدف شما هستند.
            </Typography>
            <div className="pt-2">
              <Button
                type="button"
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                size="responsive"
              >
                <Iconify icon="solar:phone-bold-duotone" className="h-4 w-4" />
                <span>هماهنگی بازدید و مشاوره حضوری</span>
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Container>

      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
