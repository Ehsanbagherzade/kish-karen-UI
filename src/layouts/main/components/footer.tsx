import Image from "next/image";
import Link from "next/link";

import { Iconify } from "@/components/iconify";
import { ButtonLink, Container, Typography } from "@/components/ui";
import { UserPanelMenu } from "@/components/user-panel-menu";
import { cn } from "@/utils/cn";
import {
  getAboutRoute,
  getContactRoute,
  getCoursesRoute,
  getGalleryRoute,
  getHomeRoute,
  getKarenSchoolRoute,
} from "@/utils/routes";

const SOCIAL_LINKS = [
  {
    name: "اینستاگرام",
    href: "https://instagram.com",
    icon: "solar:brand-instagram" as const,
    hoverClass:
      "hover:text-pink-600 hover:border-pink-500/30 hover:bg-pink-50 dark:hover:bg-pink-950/30",
  },
  {
    name: "تلگرام",
    href: "https://t.me",
    icon: "solar:brand-telegram" as const,
    hoverClass:
      "hover:text-sky-500 hover:border-sky-500/30 hover:bg-sky-50 dark:hover:bg-sky-950/30",
  },
  {
    name: "یوتیوب",
    href: "https://youtube.com",
    icon: "solar:brand-youtube" as const,
    hoverClass:
      "hover:text-red-600 hover:border-red-500/30 hover:bg-red-50 dark:hover:bg-red-950/30",
  },
  {
    name: "روبیکا",
    href: "https://rubika.ir",
    icon: "solar:brand-rubika" as const,
    hoverClass:
      "hover:text-purple-600 hover:border-purple-500/30 hover:bg-purple-50 dark:hover:bg-purple-950/30",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 transition-colors dark:border-zinc-800 dark:bg-zinc-950">
      <Container as="div" size="xl" className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* 1. Brand & Management & Socials (lg:col-span-4) */}
          <div className="space-y-4 lg:col-span-4">
            <Link href={getHomeRoute()} className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-sm dark:bg-zinc-900">
                <Image
                  src="/kish-karen-logo.png"
                  alt="آموزشگاه زبان کیش کارن"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-zinc-900 sm:text-lg dark:text-zinc-50">
                  مراکز زبان کیش و کارن
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  و مدارس غیردولتی کارن
                </span>
              </div>
            </Link>

            <Typography as="p" variant="caption" tone="muted">
              مراکز زبان کیش و کارن بجنورد و مدارس غیردولتی کارن با مدیریت دکتر
              مجتبی غلامیان
            </Typography>

            {/* Social Media Access Links */}
            <div className="pt-2">
              <div className="mb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                شبکه‌های اجتماعی ما:
              </div>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((item) => (
                  <ButtonLink
                    variant="outline"
                    size="responsive"
                    iconOnly
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.name}
                    aria-label={item.name}
                    className={cn(
                      "text-zinc-600 dark:text-zinc-300",
                      item.hoverClass
                    )}
                  >
                    <Iconify icon={item.icon} />
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>

          {/* 2. School & Features (lg:col-span-2) */}
          <div className="space-y-3 lg:col-span-2">
            <Typography as="h3" variant="h3" tone="default">
              مدرسه و خدمات
            </Typography>
            <ul className="space-y-2.5 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
              <li>
                <Link
                  href={getKarenSchoolRoute()}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  مدرسه زبان کارن
                </Link>
              </li>
              <li>
                <Link
                  href={getGalleryRoute()}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  گالری تصاویر
                </Link>
              </li>
              <li>
                <Link
                  href={getContactRoute()}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  تماس با ما
                </Link>
              </li>
              <li>
                <UserPanelMenu variant="footer" placement="top" />
              </li>
            </ul>
          </div>

          {/* 3. Quick Links (lg:col-span-2) */}
          <div className="space-y-3 lg:col-span-2">
            <Typography as="h3" variant="h3" tone="default">
              لینک‌های سریع
            </Typography>
            <ul className="space-y-2.5 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
              <li>
                <Link
                  href={getHomeRoute()}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href={getCoursesRoute()}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  دوره‌های آموزشی (کلاس‌ها)
                </Link>
              </li>
              <li>
                <Link
                  href={getAboutRoute()}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  درباره آموزشگاه
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Us (lg:col-span-4) */}
          <div className="space-y-3 lg:col-span-4">
            <Typography as="h3" variant="h3" tone="default">
              تماس بگیرید
            </Typography>
            <ul className="space-y-2.5 text-xs text-zinc-600 sm:text-sm dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <Iconify
                  icon="solar:phone-bold-duotone"
                  className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                />
                <span className="font-semibold text-zinc-700 dark:text-zinc-200">
                  تلفن:
                </span>
                <a
                  href="tel:05832237724"
                  dir="ltr"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  ۰۵۸-۳۲۲۳۷۷۲۴
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Iconify
                  icon="solar:printer-bold-duotone"
                  className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                />
                <span className="font-semibold text-zinc-700 dark:text-zinc-200">
                  فکس:
                </span>
                <a
                  href="tel:05832221441"
                  dir="ltr"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  ۰۵۸-۳۲۲۲۱۴۴۱
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Iconify
                  icon="solar:letter-bold-duotone"
                  className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                />
                <span className="font-semibold text-zinc-700 dark:text-zinc-200">
                  ایمیل:
                </span>
                <a
                  href="mailto:support@karenkish.ir"
                  dir="ltr"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  support@karenkish.ir
                </a>
              </li>

              <li className="flex items-start gap-2 pt-0.5">
                <Iconify
                  icon="solar:map-point-bold-duotone"
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                />
                <span className="text-xs leading-relaxed sm:text-sm">
                  <strong className="font-semibold text-zinc-700 dark:text-zinc-200">
                    دفتر مرکزی:
                  </strong>{" "}
                  بجنورد - خیابان طالقانی شرقی - کوچه جاجرمی - نبش عمارت
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200/80 pt-6 text-center dark:border-zinc-800/80">
          <Typography as="p" variant="caption" tone="subtle">
            © {new Date().getFullYear()} مراکز زبان کیش و کارن بجنورد و مدارس
            غیردولتی کارن با مدیریت دکتر مجتبی غلامیان. تمامی حقوق محفوظ است.
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
