"use client";

import { type ReactNode, useState } from "react";
import { toast } from "sonner";

import { AnimateIn } from "@/components/animate";
import { ConsultationModal } from "@/components/consultation-modal";
import { Iconify, type IconifyName } from "@/components/iconify";
import { ICON_SETS } from "@/components/iconify/icon-sets";
import {
  Accordion,
  type AccordionItem,
  Badge,
  Button,
  ButtonLink,
  Card,
  Checkbox,
  Container,
  Dialog,
  DialogClose,
  Drawer,
  Input,
  NavigationLink,
  Select,
  Textarea,
  Typography,
} from "@/components/ui";
import { UserPanelMenu } from "@/components/user-panel-menu";
import { cn } from "@/utils/cn";
import { getContactRoute, getEhsanRoute, getHomeRoute } from "@/utils/routes";

import { DemoForm } from "../components/demo-form";
import {
  BREAKPOINTS,
  BUTTON_VARIANTS,
  COLORS,
  SIZES,
  TYPOGRAPHY_VARIANTS,
} from "../tokens";

const SECTIONS = [
  { id: "responsive", label: "صفحه و ریسپانسیو" },
  { id: "colors", label: "رنگ‌ها" },
  { id: "typography", label: "تایپوگرافی" },
  { id: "buttons", label: "دکمه‌ها" },
  { id: "fields", label: "فیلد و فرم" },
  { id: "surfaces", label: "کارت و نشان" },
  { id: "overlays", label: "پنجره و منو" },
  { id: "icons", label: "آیکون و حرکت" },
] as const;

function ShowcaseSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 space-y-5">
      <div className="space-y-2">
        <Typography as="h2" variant="h2">
          {title}
        </Typography>
        <Typography tone="muted">{description}</Typography>
      </div>
      {children}
    </section>
  );
}

export function EhsanView() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordionItem, setOpenAccordionItem] = useState<string | null>(
    null
  );

  const accordionItems: AccordionItem[] = [
    {
      id: "design-accordion-level-one",
      title: "نمونهٔ سطح اول",
      summary: "فهرست ترم‌ها",
      content: (
        <ul className="list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <li>ترم A · Unit 1–3</li>
          <li>ترم B · Unit 4–6</li>
        </ul>
      ),
    },
    {
      id: "design-accordion-level-two",
      title: "نمونهٔ سطح دوم",
      summary: "فهرست ترم‌ها",
      content: (
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          ترم A · Unit 1–3
        </p>
      ),
    },
  ];

  return (
    <Container className="space-y-12 py-8 sm:py-10 lg:space-y-16 lg:py-14">
      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-bl from-blue-50 via-white to-amber-50/50 p-5 sm:p-8 xl:p-10">
        <Typography as="h1" variant="h1">
          یک زبان مشترک برای تمام صفحات
        </Typography>
        <Typography variant="lead" tone="muted" className="mt-4 max-w-3xl">
          کامپوننت‌هایی که همین حالا در پروژه استفاده می‌شوند؛ با ظاهر، اندازه و
          رفتار مشخص برای موبایل، تبلت و دسکتاپ.
        </Typography>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ButtonLink href={getHomeRoute()} variant="outline">
            <Iconify icon="solar:home-2-bold-duotone" />
            مشاهده صفحه اصلی
          </ButtonLink>
        </div>
      </div>

      <nav
        aria-label="بخش‌های دیزاین سیستم"
        className="flex flex-wrap gap-2 border-b border-zinc-200 pb-5"
      >
        {SECTIONS.map((section) => (
          <ButtonLink
            key={section.id}
            href={`${getEhsanRoute()}#${section.id}`}
            variant="soft"
            size="sm"
          >
            {section.label}
          </ButtonLink>
        ))}
      </nav>

      <ShowcaseSection
        id="responsive"
        title="پنج حالت صفحه"
        description="مبنای اندازه‌ها عرض صفحه است. اندازهٔ responsive به‌صورت خودکار تغییر می‌کند؛ header نسخهٔ مخصوص هدر با سایز کوچک‌تر در تبلت است."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {BREAKPOINTS.map((bp) => (
            <Card
              key={bp.name}
              padding="sm"
              className={cn("space-y-2 transition-colors", bp.active)}
            >
              <Typography variant="h3" as="h3">
                <span dir="ltr">{bp.name}</span>
              </Typography>
              <Typography variant="caption">{bp.range} پیکسل</Typography>
              <Typography variant="caption" tone="muted">
                {bp.description}
              </Typography>
            </Card>
          ))}
        </div>
        <Card variant="muted" className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="neutral">
              حالت فعال: <span className="sm:hidden">xs</span>
              <span className="hidden sm:inline md:hidden">sm</span>
              <span className="hidden md:inline lg:hidden">md</span>
              <span className="hidden lg:inline xl:hidden">lg</span>
              <span className="hidden xl:inline">xl</span>
            </Badge>
            <Typography variant="caption" tone="muted">
              کارت آبی نشان‌دهندهٔ عرض فعلی است؛ عرض مرورگر را تغییر دهید.
            </Typography>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="responsive" onClick={() => setConsultationOpen(true)}>
              دکمهٔ responsive
            </Button>
            <Button
              size="header"
              variant="outline"
              onClick={() => setConsultationOpen(true)}
            >
              دکمهٔ header
            </Button>
            <Typography as="span" variant="brand">
              تایپوگرافی برند هدر
            </Typography>
          </div>
          <Typography variant="caption" tone="muted">
            سایزهای ثابت xs، sm، md، lg و xl مستقل از عرض صفحه‌اند. سایز ثابت
            برای نمونه‌ها یا کنترل دقیق و سایز واکنش‌گرا برای صفحات استفاده
            می‌شود.
          </Typography>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        id="colors"
        title="رنگ‌های پروژه"
        description="آبی برای اقدامات اصلی، طیف خنثی برای متن و سطح، و رنگ‌های معنایی برای وضعیت‌ها."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {COLORS.map((color) => (
            <Card key={color.token} padding="none" className="overflow-hidden">
              <div
                className={cn("h-20 border-b border-zinc-200", color.className)}
              />
              <div className="space-y-1 p-3" dir="ltr">
                <Typography variant="label">{color.name}</Typography>
                <Typography variant="caption" tone="muted">
                  {color.value}
                </Typography>
                <Typography variant="caption" tone="subtle">
                  {color.token}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Card padding="sm">
            <Typography variant="label">متن اصلی</Typography>
            <Typography variant="caption" tone="subtle">
              Zinc 900 · پس‌زمینهٔ سفید
            </Typography>
          </Card>
          <Card variant="muted" padding="sm">
            <Typography variant="label" tone="muted">
              متن توضیحی
            </Typography>
            <Typography variant="caption" tone="subtle">
              Zinc 600 · سطح Zinc 50
            </Typography>
          </Card>
          <Card padding="sm">
            <Typography variant="label" tone="subtle">
              متن کمکی
            </Typography>
            <Typography variant="caption" tone="subtle">
              Zinc 500 · خط دور Zinc 200/300
            </Typography>
          </Card>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        id="typography"
        title="تایپوگرافی"
        description="ورینت ظاهر متن را تعیین می‌کند و as معنای HTML را. اندازه‌های واکنش‌گرا داخل کامپوننت تعریف شده‌اند."
      >
        <Card className="divide-y divide-zinc-100">
          {TYPOGRAPHY_VARIANTS.map((variant) => (
            <div
              key={variant}
              className="grid min-w-0 gap-2 py-5 first:pt-0 last:pb-0 md:grid-cols-[6rem_1fr] md:items-center"
            >
              <Typography variant="caption" tone="subtle">
                <span dir="ltr">{variant}</span>
              </Typography>
              <Typography as="div" variant={variant}>
                یادگیری زبان، شروع یک مسیر تازه
              </Typography>
            </div>
          ))}
        </Card>
        <Card variant="muted" className="space-y-3">
          <Typography variant="label">اندازهٔ ثابت برای متن</Typography>
          <div className="flex flex-wrap items-baseline gap-5">
            {SIZES.map((size) => (
              <Typography key={size} as="span" size={size}>
                کیش کارن <span dir="ltr">{size}</span>
              </Typography>
            ))}
          </div>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        id="buttons"
        title="دکمه‌ها و لینک‌های عملیاتی"
        description="Button برای عمل و ButtonLink برای مسیر است. هر دو از همان ورینت‌ها استفاده می‌کنند و وضعیت فوکوس کیبورد دارند."
      >
        <Card className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {BUTTON_VARIANTS.map((variant) => (
              <div
                key={variant}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl p-2",
                  variant === "inverse" && "bg-primary"
                )}
              >
                <Button
                  variant={variant}
                  onClick={() => toast.message(`ورینت ${variant}`)}
                >
                  دکمه {variant}
                </Button>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {SIZES.map((size) => (
              <Button
                key={size}
                size={size}
                onClick={() => toast.message(`سایز ثابت ${size}`)}
              >
                {size}
              </Button>
            ))}
          </div>
        </Card>
        <Card className="space-y-4">
          <Typography as="h3" variant="h3">
            انیمیشن‌های هدر
          </Typography>
          <div className="flex flex-wrap items-center gap-6">
            <NavigationLink href={getHomeRoute()} label="خانه" />
            <NavigationLink href={getContactRoute()} label="تماس با ما" />
            <ButtonLink href={getHomeRoute()} variant="outline" borderAnimation>
              خط آبی متحرک دور دکمه
            </ButtonLink>
            <UserPanelMenu />
          </div>
          <Typography variant="caption" tone="muted">
            هاور یا فوکوس کیبورد: پس‌زمینهٔ نرم و محوشدن متن به سبک Smoke.
          </Typography>
        </Card>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="space-y-4">
            <Typography variant="h3" as="h3">
              وضعیت‌ها
            </Typography>
            <div className="flex flex-wrap gap-3">
              <Button disabled>غیرفعال</Button>
              <Button loading>در حال ارسال</Button>
              <Button
                variant="outline"
                onClick={() => toast.success("نمونهٔ اعلان موفقیت")}
              >
                نمایش اعلان
              </Button>
              <Button
                iconOnly
                aria-label="مشاوره"
                onClick={() => setConsultationOpen(true)}
              >
                <Iconify icon="solar:phone-bold-duotone" />
              </Button>
            </div>
          </Card>
          <Card className="space-y-4">
            <Typography variant="h3" as="h3">
              لینک و عرض کامل
            </Typography>
            <ButtonLink href={getHomeRoute()} variant="outline">
              <Iconify icon="solar:arrow-right-linear" />
              بازگشت به خانه
            </ButtonLink>
            <Button fullWidth onClick={() => setConsultationOpen(true)}>
              مشاوره و ثبت‌نام
            </Button>
          </Card>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        id="fields"
        title="فیلدها و فرم‌ها"
        description="Input، Select، Textarea و Checkbox با سایز مشترک، برچسب، توضیح و خطا. فرم‌ها از wrapperهای RHF استفاده می‌کنند."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-4">
            <Typography as="h3" variant="h3">
              حالت‌های فیلد
            </Typography>
            <Input
              label="حالت عادی"
              placeholder="متن را اینجا وارد کنید"
              helperText="توضیح کمکی فیلد"
            />
            <Input
              label="حالت خطا"
              defaultValue="شماره نامعتبر"
              error="لطفاً شماره موبایل معتبر وارد کنید."
            />
            <Input
              label="حالت غیرفعال"
              defaultValue="قابل ویرایش نیست"
              disabled
            />
            <Input
              label="فقط خواندنی"
              defaultValue="آموزشگاه زبان کیش کارن"
              readOnly
            />
            <Select label="انتخاب نمونه">
              <option>زبان انگلیسی</option>
              <option>زبان آلمانی</option>
            </Select>
            <Textarea label="متن چندخطی" placeholder="پیام شما" rows={2} />
            <Checkbox label="گزینهٔ انتخابی نمونه" defaultChecked />
          </Card>
          <Card>
            <Typography as="h3" variant="h3" className="mb-5">
              فرم قابل تست
            </Typography>
            <DemoForm />
          </Card>
        </div>
        <Card className="space-y-4">
          <Typography variant="label">سایزهای ثابت ورودی</Typography>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SIZES.map((size) => (
              <Input
                key={size}
                size={size}
                label={`Input · ${size}`}
                placeholder={`size="${size}"`}
              />
            ))}
          </div>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        id="surfaces"
        title="کارت‌ها و نشان‌ها"
        description="سطوح default، muted و elevated؛ فاصلهٔ داخلی none یا xs تا xl و responsive. نشان‌ها وضعیت را با رنگ و متن مشخص می‌کنند."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {(["default", "muted", "elevated"] as const).map((variant) => (
            <Card key={variant} variant={variant} className="space-y-3">
              <Badge variant="primary">دورهٔ آموزشی</Badge>
              <Typography as="h3" variant="h3">
                کارت {variant}
              </Typography>
              <Typography tone="muted">
                از همین کارت در صفحات تماس، دوره‌ها و صفحهٔ اصلی استفاده می‌شود.
              </Typography>
              <Button
                variant="outline"
                onClick={() => setConsultationOpen(true)}
              >
                دریافت مشاوره
              </Button>
            </Card>
          ))}
        </div>
        <Card className="space-y-5">
          <div className="flex flex-wrap gap-3">
            {(
              [
                "primary",
                "solid",
                "inverse",
                "neutral",
                "success",
                "warning",
                "danger",
              ] as const
            ).map((variant) => (
              <Badge key={variant} variant={variant}>
                {variant}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {SIZES.map((size) => (
              <Badge key={size} size={size}>
                {size}
              </Badge>
            ))}
          </div>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        id="overlays"
        title="پنجره، منوی کشویی و مشاوره"
        description="پنجره‌ها با Radix، مدیریت فوکوس، بستن با Escape و قفل اسکرول ساخته شده‌اند. دیالوگ سایزهای sm، md، lg و xl دارد."
      >
        <Card className="flex flex-wrap gap-3">
          <Button onClick={() => setDialogOpen(true)}>پنجرهٔ نمونه</Button>
          <Button variant="outline" onClick={() => setDrawerOpen(true)}>
            منوی کشویی نمونه
          </Button>
          <Button variant="soft" onClick={() => setConsultationOpen(true)}>
            <Iconify icon="solar:phone-bold-duotone" />
            مشاورهٔ پروژه
          </Button>
        </Card>
        <Card className="space-y-3">
          <Typography as="h3" variant="h3">
            آکاردیون
          </Typography>
          <Typography variant="caption" tone="muted">
            دکمهٔ دسترس‌پذیر با وضعیت باز و بسته، ورینت‌های ظاهری و کاهش حرکت.
          </Typography>
          <Accordion
            items={accordionItems}
            value={openAccordionItem}
            onValueChange={setOpenAccordionItem}
            variant="cards"
            size="responsive"
          />
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        id="icons"
        title="آیکون‌های پروژه و حرکت"
        description="آیکون‌های بسته‌بندی‌شدهٔ Iconify بدون درخواست به API نمایش داده می‌شوند. AnimateIn کامپوننت مشترک ورود محتوا است."
      >
        <Card>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {(Object.keys(ICON_SETS) as IconifyName[]).map((icon) => (
              <div
                key={icon}
                className="flex min-w-0 flex-col items-center gap-3 rounded-xl bg-zinc-50 p-3"
              >
                <Iconify icon={icon} className="text-primary size-6" />
                <Typography
                  variant="caption"
                  tone="subtle"
                  className="w-full text-center break-words"
                >
                  <span dir="ltr">{icon.replace("solar:", "")}</span>
                </Typography>
              </div>
            ))}
          </div>
        </Card>
        <AnimateIn>
          <Card variant="muted" className="flex items-center gap-3">
            <Iconify
              icon="solar:star-bold-duotone"
              className="text-primary size-6"
            />
            <Typography>این کارت با AnimateIn وارد صفحه می‌شود.</Typography>
          </Card>
        </AnimateIn>
      </ShowcaseSection>

      <Dialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="پنجرهٔ نمونه"
        description="نمونه‌ای از Dialog مشترک"
        footer={
          <DialogClose asChild>
            <Button>متوجه شدم</Button>
          </DialogClose>
        }
      >
        <Typography tone="muted">
          برای بستن از دکمه، بیرون پنجره یا کلید Escape استفاده کنید. پس از
          بستن، فوکوس به دکمهٔ قبلی برمی‌گردد.
        </Typography>
      </Dialog>
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} title="منوی نمونه">
        <Typography tone="muted" className="mb-5">
          همان کامپوننتی که در هدر موبایل پروژه استفاده می‌شود.
        </Typography>
        <ButtonLink
          href={getHomeRoute()}
          variant="soft"
          onClick={() => setDrawerOpen(false)}
        >
          صفحهٔ اصلی
        </ButtonLink>
      </Drawer>
      <ConsultationModal
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
      />
    </Container>
  );
}
