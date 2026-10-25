"use client";

import { Iconify } from "@/components/iconify";
import {
  Button,
  ButtonLink,
  Card,
  Dialog,
  DialogClose,
  Typography,
} from "@/components/ui";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationModal({
  open,
  onOpenChange,
}: ConsultationModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="مشاوره و ثبت‌نام"
      description="آموزشگاه زبان کیش کارن"
      icon={
        <div className="bg-primary-soft text-primary flex size-10 shrink-0 items-center justify-center rounded-xl xl:size-12">
          <Iconify
            icon="solar:phone-bold-duotone"
            className="size-5 xl:size-6"
          />
        </div>
      }
      footer={
        <div className="flex justify-end">
          <DialogClose asChild>
            <Button variant="secondary" className="w-full sm:w-auto">
              متوجه شدم
            </Button>
          </DialogClose>
        </div>
      }
    >
      <Typography tone="muted">
        جهت رزرو تعیین سطح رایگان، استعلام زمان‌بندی کلاس‌ها و مشاوره تخصصی
        ثبت‌نام با ما در ارتباط باشید:
      </Typography>
      <div className="mt-5 space-y-4">
        <Card variant="muted" padding="sm">
          <Typography variant="caption" tone="subtle" className="mb-2">
            شماره‌های تماس مستقیم:
          </Typography>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <ButtonLink
              href="tel:05832237724"
              variant="outline"
              className="justify-between"
            >
              <Typography as="span" variant="caption" tone="subtle">
                تلفن ثابت:
              </Typography>
              <span dir="ltr" className="text-primary">
                ۰۵۸-۳۲۲۳۷۷۲۴
              </span>
            </ButtonLink>
            <ButtonLink
              href="tel:05832221441"
              variant="outline"
              className="justify-between"
            >
              <Typography as="span" variant="caption" tone="subtle">
                فکس / پشتیبانی:
              </Typography>
              <span dir="ltr" className="text-primary">
                ۰۵۸-۳۲۲۲۱۴۴۱
              </span>
            </ButtonLink>
          </div>
        </Card>
        <Card variant="muted" padding="sm" className="flex items-start gap-3">
          <Iconify
            icon="solar:map-point-bold-duotone"
            className="text-warning mt-1 size-5"
          />
          <div>
            <Typography variant="caption" tone="subtle" className="mb-1">
              دفتر مرکزی:
            </Typography>
            <Typography>
              بجنورد - خیابان طالقانی شرقی - کوچه جاجرمی - نبش عمارت
            </Typography>
          </div>
        </Card>
        <Typography
          variant="caption"
          tone="subtle"
          className="flex items-start gap-2"
        >
          <Iconify
            icon="solar:clock-circle-bold-duotone"
            className="mt-0.5 size-4"
          />
          <span>ساعات کاری: شنبه تا پنجشنبه از ۸:۰۰ صبح الی ۲۱:۰۰ شب</span>
        </Typography>
      </div>
    </Dialog>
  );
}
