"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ConsultationModal } from "@/components/consultation-modal";
import { Iconify } from "@/components/iconify";
import {
  getAboutRoute,
  getContactRoute,
  getCoursesRoute,
  getGalleryRoute,
  getHomeRoute,
  getKarenSchoolRoute,
  getLoginRoute,
} from "@/utils/routes";

const NAV_ITEMS = [
  {
    label: "خانه",
    href: getHomeRoute(),
    icon: "solar:home-2-bold-duotone" as const,
  },
  {
    label: "دوره‌های آموزشی",
    href: getCoursesRoute(),
    icon: "solar:book-bookmark-bold-duotone" as const,
  },
  {
    label: "درباره ما",
    href: getAboutRoute(),
    icon: "solar:award-bold-duotone" as const,
  },
  {
    label: "گالری",
    href: getGalleryRoute(),
    icon: "solar:gallery-bold-duotone" as const,
  },
  {
    label: "تماس با ما",
    href: getContactRoute(),
    icon: "solar:phone-bold-duotone" as const,
  },
  {
    label: "مدرسه کارن",
    href: getKarenSchoolRoute(),
    icon: "solar:school-bold-duotone" as const,
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md transition-all duration-200 dark:border-zinc-800/80 dark:bg-zinc-950/90">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ================= MOBILE HEADER ================= */}
          {/* 1. Mobile Right: Hamburger button */}
          <div className="flex w-11 items-center justify-start md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200/80 bg-zinc-50 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              aria-label="باز کردن منو"
            >
              <Iconify icon="solar:hamburger-menu-linear" className="h-6 w-6" />
            </button>
          </div>

          {/* 2. Mobile Center: "کیش کارن" */}
          <div className="flex flex-1 items-center justify-center md:hidden">
            <Link
              href={getHomeRoute()}
              className="text-base font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              کیش کارن
            </Link>
          </div>

          {/* 3. Mobile Left: Logo icon */}
          <div className="flex w-11 items-center justify-end md:hidden">
            <Link href={getHomeRoute()} aria-label="صفحه اصلی">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-tr from-amber-500/10 to-blue-500/10 p-1">
                <Image
                  src="/kish-karen-logo.png"
                  alt="آموزشگاه زبان کیش کارن"
                  fill
                  sizes="40px"
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* ================= DESKTOP HEADER ================= */}
          {/* Desktop Right: Brand Logo + Full Title */}
          <Link
            href={getHomeRoute()}
            className="hidden items-center gap-3 transition-transform hover:scale-[1.02] md:flex"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-gradient-to-tr from-amber-500/10 to-blue-500/10 p-1">
              <Image
                src="/kish-karen-logo.png"
                alt="آموزشگاه زبان کیش کارن"
                fill
                sizes="48px"
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                آموزشگاه زبان کیش کارن
              </span>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Kish Karen Language Academy
              </span>
            </div>
          </Link>

          {/* Desktop Center: Navigation Links */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Left: Action Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            {/* User Panel Login Button */}
            <a
              href={getLoginRoute()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-zinc-50/80 px-3.5 py-2.5 text-sm font-medium text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-100 active:scale-[0.98] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <Iconify
                icon="solar:user-bold-duotone"
                className="h-4 w-4 text-blue-600 dark:text-blue-400"
              />
              <span>ورود به پنل کاربری</span>
            </a>

            {/* Consultation & Registration Button (Opens Modal) */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/35 active:scale-[0.98]"
            >
              <Iconify icon="solar:phone-bold-duotone" className="h-4 w-4" />
              <span>مشاوره و ثبت‌نام</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER: Slides in from the RIGHT with smooth transition */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        />

        {/* Drawer container from RIGHT */}
        <div
          className={`absolute top-0 right-0 bottom-0 flex h-full w-[290px] max-w-[85vw] flex-col justify-between border-l border-zinc-200 bg-white p-6 shadow-2xl transition-transform duration-300 ease-out dark:border-zinc-800 dark:bg-zinc-950 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top section */}
          <div>
            {/* Drawer Header with clean styled close button */}
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
              <div className="flex items-center gap-2.5">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-blue-50 p-1 dark:bg-blue-950/50">
                  <Image
                    src="/kish-karen-logo.png"
                    alt="آموزشگاه زبان کیش کارن"
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                    کیش کارن
                  </span>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                    آموزشگاه زبان‌های خارجی
                  </span>
                </div>
              </div>

              {/* Styled circular close button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all hover:bg-zinc-200 hover:text-zinc-900 active:scale-90 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                aria-label="بستن منو"
              >
                <Iconify icon="solar:close-linear" className="h-4 w-4" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="mt-5 flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-zinc-700 transition-all hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-200 dark:hover:bg-blue-950/40 dark:hover:text-blue-400"
                >
                  <Iconify
                    icon={item.icon}
                    className="h-5 w-5 text-zinc-400 dark:text-zinc-500"
                  />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom section with action buttons */}
          <div className="space-y-3 border-t border-zinc-100 pt-6 dark:border-zinc-800">
            <a
              href={getLoginRoute()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <Iconify
                icon="solar:user-bold-duotone"
                className="h-4 w-4 text-blue-600"
              />
              <span>ورود به پنل کاربری</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-colors hover:bg-blue-700"
            >
              <Iconify icon="solar:phone-bold-duotone" className="h-4 w-4" />
              <span>مشاوره و ثبت‌نام</span>
            </button>

            <div className="pt-2 text-center text-[11px] text-zinc-400 dark:text-zinc-500">
              تلفن تماس: ۰۵۸-۳۲۲۳۷۷۲۴
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
