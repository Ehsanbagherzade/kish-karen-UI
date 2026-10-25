"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ConsultationModal } from "@/components/consultation-modal";
import { Iconify } from "@/components/iconify";
import {
  Button,
  Container,
  Drawer,
  NavigationLink,
  Typography,
} from "@/components/ui";
import { UserPanelMenu } from "@/components/user-panel-menu";
import {
  getAboutRoute,
  getContactRoute,
  getCoursesRoute,
  getGalleryRoute,
  getHomeRoute,
  getKarenSchoolRoute,
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

  useEffect(() => {
    // Close the drawer and release its focus/scroll lock when switching to tablet.
    const media = window.matchMedia(
      `(min-width: ${getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-md").trim()})`
    );
    const closeOnDesktop = () => {
      if (media.matches) setIsMobileMenuOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/90">
        <Container className="flex h-16 items-center justify-between gap-3 lg:h-18 xl:h-20">
          <Button
            variant="outline"
            size="responsive"
            iconOnly
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden"
            aria-label="باز کردن منو"
            aria-haspopup="dialog"
            aria-expanded={isMobileMenuOpen}
          >
            <Iconify icon="solar:hamburger-menu-linear" />
          </Button>
          <Link
            href={getHomeRoute()}
            className="flex min-w-0 shrink-0 items-center gap-2 xl:gap-3"
          >
            <div className="bg-primary-soft relative hidden size-8 shrink-0 overflow-hidden rounded-xl md:block lg:size-10 xl:size-12">
              <Image
                src="/kish-karen-logo.png"
                alt="آموزشگاه زبان کیش کارن"
                fill
                sizes="(min-width: 1280px) 48px, (min-width: 1024px) 40px, 32px"
                priority
                className="object-contain"
              />
            </div>
            <div>
              <Typography
                as="span"
                variant="brand"
                className="block whitespace-nowrap"
              >
                <span className="lg:hidden">کیش کارن</span>
                <span className="hidden lg:inline">آموزشگاه زبان کیش کارن</span>
              </Typography>
              <Typography
                as="span"
                variant="caption"
                tone="subtle"
                className="hidden xl:block"
              >
                Kish Karen Language Academy
              </Typography>
            </div>
          </Link>
          <Link
            href={getHomeRoute()}
            aria-label="صفحه اصلی"
            className="relative size-10 shrink-0 md:hidden"
          >
            <Image
              src="/kish-karen-logo.png"
              alt="لوگوی کیش کارن"
              fill
              sizes="40px"
              priority
              className="object-contain"
            />
          </Link>
          <nav
            aria-label="منوی اصلی"
            className="hidden min-w-0 items-center gap-2 md:flex lg:gap-3 xl:gap-5"
          >
            {NAV_ITEMS.map((item) => (
              <NavigationLink
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </nav>
          <div className="hidden shrink-0 items-center gap-1 md:flex lg:gap-2 xl:gap-3">
            <UserPanelMenu variant="header" />
            <Button size="header" onClick={() => setIsModalOpen(true)}>
              <Iconify icon="solar:phone-bold-duotone" />
              <span className="lg:hidden">مشاوره</span>
              <span className="hidden lg:inline">مشاوره و ثبت‌نام</span>
            </Button>
          </div>
        </Container>
      </header>
      <Drawer
        open={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
        title="کیش کارن"
      >
        <nav aria-label="منوی موبایل" className="flex flex-col gap-1.5">
          {NAV_ITEMS.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              variant="drawer"
              label={item.label}
              leadingIcon={<Iconify icon={item.icon} />}
            />
          ))}
        </nav>
        <div className="mt-auto space-y-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <UserPanelMenu
            placement="inline"
            onNavigate={() => setIsMobileMenuOpen(false)}
            fullWidth
          />
          <Button
            fullWidth
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
          >
            <Iconify icon="solar:phone-bold-duotone" />
            مشاوره و ثبت‌نام
          </Button>
          <Typography variant="caption" tone="subtle" className="text-center">
            تلفن تماس: ۰۵۸-۳۲۲۳۷۷۲۴
          </Typography>
        </div>
      </Drawer>
      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
