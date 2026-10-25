"use client";

import "keen-slider/keen-slider.min.css";

import { type KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

import { Iconify } from "@/components/iconify";
import { Button } from "@/components/ui";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/mainsection.webp",
    alt: "کلاس‌های آموزشی مدرن آموزشگاه کیش کارن",
    description:
      "کلاس‌های آموزشی کیش کارن با رعایت استانداردهای روز بین‌المللی طراحی شده‌اند؛ فضایی پرانرژی و مجهز به سیستم‌های صوتی و تصویری پیشرفته جهت شبیه‌سازی مکالمات واقعی، ارائه کنفرانس‌های کلاسی و یادگیری عمیق مهارت‌های چهارگانه زبان.",
  },
  {
    id: 2,
    src: "/info.webp",
    alt: "اساتید و شیوه‌های نوین تدریس کیش کارن",
    description:
      "اساتید مجرب و دارای مدارک بین‌المللی کیش کارن، با تکیه بر متد تدریس ارتباط‌محور و گفتگوهای آزاد (Free Discussion)، انگیزه و اعتمادبه‌نفس زبان‌آموزان را برای صحبت کردن روان به اوج می‌رسانند.",
  },
  {
    id: 3,
    src: "/not-found.jpg",
    alt: "کتابخانه و فضای مطالعه زبان‌آموزان",
    description:
      "فضایی آرام و اختصاصی برای زبان‌آموزان با دسترسی کامل به جامع‌ترین کتب آمادگی آزمون‌های بین‌المللی IELTS و TOEFL، پادکست‌ها، فیلم‌های آموزشی و نشریات بین‌المللی جهت تقویت دایره لغات و گرامر.",
  },
  {
    id: 4,
    src: "/kish-karen-logo.png",
    alt: "دپارتمان تخصصی و نشان رسمی کیش کارن",
    description:
      "آموزشگاه زبان کیش کارن با ارائه مدارک رسمی پایان دوره و برنامه‌ریزی اختصاصی برای تمامی سنین (کودکان، نوجوانان و بزرگسالان)، همراه مطمئن شما در مسیر مهاجرت، ادامه تحصیل و ارتقای شغلی است.",
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
            <figure
              key={item.id}
              aria-describedby={`gallery-description-${item.id}`}
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
              <figcaption
                id={`gallery-description-${item.id}`}
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent px-4 pt-16 pb-5 text-center text-[10px] leading-relaxed text-white sm:px-8 sm:pb-6"
              >
                <p className="mx-auto max-w-3xl">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* 2. Thumbnail Strip with Navigation Arrows */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Previous Button (Right arrow in RTL) */}
        <Button
          variant="outline"
          size="responsive"
          iconOnly
          type="button"
          onClick={handlePrev}
          aria-label="عکس قبلی"
        >
          <Iconify icon="solar:arrow-right-linear" className="h-5 w-5" />
        </Button>

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
        <Button
          variant="outline"
          size="responsive"
          iconOnly
          type="button"
          onClick={handleNext}
          aria-label="عکس بعدی"
        >
          <Iconify icon="solar:arrow-left-linear" className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
