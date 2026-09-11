"use client";

import "keen-slider/keen-slider.min.css";

import { type KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { Iconify } from "@/components/iconify";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/mainsection.webp",
    alt: "کلاس‌های آموزشی مدرن آموزشگاه کیش کارن",
    title: "محیط آموزشی استاندارد و مجهز",
    subtitle: "تجهیزات چندرسانه‌ای پیشرفته و چیدمان تعاملی کلاس‌ها",
    description:
      "کلاس‌های آموزشی کیش کارن با رعایت استانداردهای روز بین‌المللی طراحی شده‌اند؛ فضایی پرانرژی و مجهز به سیستم‌های صوتی و تصویری پیشرفته جهت شبیه‌سازی مکالمات واقعی، ارائه کنفرانس‌های کلاسی و یادگیری عمیق مهارت‌های چهارگانه زبان.",
    tag: "فضای آموزشی",
  },
  {
    id: 2,
    src: "/info.webp",
    alt: "اساتید و شیوه‌های نوین تدریس کیش کارن",
    title: "کادر اساتید برتر و متدهای ارتباطی (CLT)",
    subtitle: "یادگیری مشارکتی متناسب با چارچوب بین‌المللی CEFR",
    description:
      "اساتید مجرب و دارای مدارک بین‌المللی کیش کارن، با تکیه بر متد تدریس ارتباط‌محور و گفتگوهای آزاد (Free Discussion)، انگیزه و اعتمادبه‌نفس زبان‌آموزان را برای صحبت کردن روان به اوج می‌رسانند.",
    tag: "کادر آموزشی",
  },
  {
    id: 3,
    src: "/not-found.jpg",
    alt: "کتابخانه و فضای مطالعه زبان‌آموزان",
    title: "آرشیو کتابخانه و منابع مطالعاتی روز دنیا",
    subtitle: "مجموعه‌ای از معتبرترین رمان‌ها، تست‌ها و منابع آزمون‌ها",
    description:
      "فضایی آرام و اختصاصی برای زبان‌آموزان با دسترسی کامل به جامع‌ترین کتب آمادگی آزمون‌های بین‌المللی IELTS و TOEFL، پادکست‌ها، فیلم‌های آموزشی و نشریات بین‌المللی جهت تقویت دایره لغات و گرامر.",
    tag: "منابع و مطالعه",
  },
  {
    id: 4,
    src: "/kish-karen-logo.png",
    alt: "دپارتمان تخصصی و نشان رسمی کیش کارن",
    title: "مرکز تخصصی آموزش و آزمون‌های زبان‌های خارجی",
    subtitle: "۱۵ سال سابقه درخشان و همراهی با هزاران فارغ‌التحصیل موفق",
    description:
      "آموزشگاه زبان کیش کارن با ارائه مدارک رسمی پایان دوره و برنامه‌ریزی اختصاصی برای تمامی سنین (کودکان، نوجوانان و بزرگسالان)، همراه مطمئن شما در مسیر مهاجرت، ادامه تحصیل و ارتقای شغلی است.",
    tag: "دپارتمان و آزمون",
  },
];

// Autoplay plugin that pauses on hover/focus
const AutoplayPlugin: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 4500);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
  slider.on("destroyed", clearNextTimeout);
};

export function GallerySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Main Slider
  const [mainSliderRef, mainSlider] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      rtl: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [AutoplayPlugin]
  );

  const activeItem = GALLERY_ITEMS[currentSlide] ?? GALLERY_ITEMS[0];

  const handlePrev = () => {
    mainSlider.current?.prev();
  };

  const handleNext = () => {
    mainSlider.current?.next();
  };

  const handleThumbnailClick = (index: number) => {
    mainSlider.current?.moveToIdx(index);
  };

  return (
    <div className="w-full space-y-6">
      {/* 1. Main Showcase Slider */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-900 shadow-2xl sm:rounded-3xl dark:border-zinc-800">
        <div
          ref={mainSliderRef}
          className="keen-slider h-[280px] sm:h-[420px] md:h-[500px]"
        >
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="keen-slider__slide relative flex h-full items-center justify-center overflow-hidden bg-zinc-950"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20" />

              {/* Tag overlay inside slide */}
              <div className="absolute top-4 right-4 z-10 sm:top-6 sm:right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                  <Iconify
                    icon="solar:gallery-bold-duotone"
                    className="h-3.5 w-3.5"
                  />
                  <span>{item.tag}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Counter Badge inside main slider bottom */}
        <div className="absolute bottom-4 left-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md">
          {currentSlide + 1} از {GALLERY_ITEMS.length}
        </div>
      </div>

      {/* 2. Thumbnail Strip with Navigation Arrows */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Previous Button (Right arrow in RTL) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="عکس قبلی"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 active:scale-95 sm:h-12 sm:w-12 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-blue-400 dark:hover:bg-blue-950/50 dark:hover:text-blue-400"
        >
          <Iconify icon="solar:arrow-right-linear" className="h-5 w-5" />
        </button>

        {/* Thumbnails Row */}
        <div className="grid flex-1 grid-cols-4 gap-2 sm:gap-3">
          {GALLERY_ITEMS.map((item, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleThumbnailClick(index)}
                aria-label={`رفتن به تصویر شماره ${index + 1}`}
                className={`group relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 transition-all duration-300 sm:rounded-2xl ${
                  isActive
                    ? "border-blue-600 shadow-md ring-2 shadow-blue-500/20 ring-blue-500/30 dark:border-blue-400"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 25vw, 200px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 transition-colors ${
                    isActive
                      ? "bg-transparent"
                      : "bg-black/20 group-hover:bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Next Button (Left arrow in RTL) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="عکس بعدی"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 active:scale-95 sm:h-12 sm:w-12 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-blue-400 dark:hover:bg-blue-950/50 dark:hover:text-blue-400"
        >
          <Iconify icon="solar:arrow-left-linear" className="h-5 w-5" />
        </button>
      </div>

      {/* 3. Description Box Under Photos */}
      <div className="relative min-h-[140px] rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 sm:rounded-3xl sm:p-7 dark:border-zinc-800 dark:bg-zinc-900/50">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="space-y-3 text-right"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                <h3 className="text-base font-bold text-zinc-900 sm:text-xl dark:text-zinc-50">
                  {activeItem.title}
                </h3>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                {activeItem.subtitle}
              </span>
            </div>

            <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm md:text-base dark:text-zinc-300">
              {activeItem.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
