"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { Iconify } from "@/components/iconify";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationModal({
  open,
  onOpenChange,
}: ConsultationModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 w-[92vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl duration-200 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                <Iconify icon="solar:phone-bold-duotone" className="h-6 w-6" />
              </div>
              <div>
                <Dialog.Title className="text-lg font-bold text-zinc-900 sm:text-xl dark:text-zinc-50">
                  مشاوره و ثبت‌نام
                </Dialog.Title>
                <Dialog.Description className="text-xs text-zinc-500 sm:text-sm dark:text-zinc-400">
                  آموزشگاه زبان کیش کارن
                </Dialog.Description>
              </div>
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all hover:bg-zinc-200 hover:text-zinc-900 active:scale-90 sm:h-9 sm:w-9 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                aria-label="بستن پنجره"
              >
                <Iconify icon="solar:close-linear" className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            جهت رزرو تعیین سطح رایگان، استعلام زمان‌بندی کلاس‌ها و مشاوره تخصصی
            ثبت‌نام با ما در ارتباط باشید:
          </p>

          <div className="mt-6 space-y-4">
            {/* Contact Phones */}
            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="mb-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                شماره‌های تماس مستقیم:
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <a
                  href="tel:05832237724"
                  className="flex items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-white p-3 text-sm font-bold text-blue-600 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-blue-400 dark:hover:bg-zinc-800"
                >
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    تلفن ثابت:
                  </span>
                  <span dir="ltr">۰۵۸-۳۲۲۳۷۷۲۴</span>
                </a>

                <a
                  href="tel:05832221441"
                  className="flex items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-white p-3 text-sm font-bold text-blue-600 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-blue-400 dark:hover:bg-zinc-800"
                >
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    فکس / پشتیبانی:
                  </span>
                  <span dir="ltr">۰۵۸-۳۲۲۲۱۴۴۱</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                <Iconify
                  icon="solar:map-point-bold-duotone"
                  className="h-4 w-4"
                />
              </div>
              <div>
                <div className="mb-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  دفتر مرکزی:
                </div>
                <div className="text-sm leading-relaxed font-medium text-zinc-800 dark:text-zinc-200">
                  بجنورد - خیابان طالقانی شرقی - کوچه جاجرمی - نبش عمارت
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3 px-2 text-xs text-zinc-500 dark:text-zinc-400">
              <Iconify
                icon="solar:clock-circle-bold-duotone"
                className="h-4 w-4 text-zinc-400"
              />
              <span>ساعات کاری: شنبه تا پنجشنبه از ۸:۰۰ صبح الی ۲۱:۰۰ شب</span>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Dialog.Close asChild>
              <button
                type="button"
                className="w-full rounded-xl bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 sm:w-auto dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                متوجه شدم
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
