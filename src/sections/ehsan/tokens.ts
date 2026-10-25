export const SIZES = ["xs", "sm", "md", "lg", "xl"] as const;
export const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "outline",
  "soft",
  "ghost",
  "danger",
  "inverse",
] as const;
export const TYPOGRAPHY_VARIANTS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "lead",
  "body",
  "label",
  "caption",
  "nav",
  "brand",
] as const;
export const COLORS = [
  {
    name: "Primary",
    token: "primary",
    value: "#2563EB",
    className: "bg-primary",
  },
  {
    name: "Primary hover",
    token: "primary-hover",
    value: "#1D4ED8",
    className: "bg-primary-hover",
  },
  {
    name: "Primary soft",
    token: "primary-soft",
    value: "#EFF6FF",
    className: "bg-primary-soft",
  },
  {
    name: "Success",
    token: "success",
    value: "#047857",
    className: "bg-success",
  },
  {
    name: "Warning",
    token: "warning",
    value: "#B45309",
    className: "bg-warning",
  },
  { name: "Danger", token: "danger", value: "#DC2626", className: "bg-danger" },
] as const;
export const BREAKPOINTS = [
  {
    name: "xs",
    range: "۰ تا ۶۳۹",
    description: "موبایل؛ منوی کشویی، کنترل‌های قابل لمس",
    active: "max-sm:border-primary max-sm:bg-primary-soft",
  },
  {
    name: "sm",
    range: "۶۴۰ تا ۷۶۷",
    description: "موبایل بزرگ؛ فرم و کارت دو ستونه",
    active: "sm:max-md:border-primary sm:max-md:bg-primary-soft",
  },
  {
    name: "md",
    range: "۷۶۸ تا ۱۰۲۳",
    description: "تبلت؛ منوی کامل، فونت و دکمه جمع‌وجور",
    active: "md:max-lg:border-primary md:max-lg:bg-primary-soft",
  },
  {
    name: "lg",
    range: "۱۰۲۴ تا ۱۲۷۹",
    description: "لپ‌تاپ؛ فاصله‌ها و کنترل‌های متوسط",
    active: "lg:max-xl:border-primary lg:max-xl:bg-primary-soft",
  },
  {
    name: "xl",
    range: "۱۲۸۰ و بیشتر",
    description: "دسکتاپ؛ تایپوگرافی و دکمه‌های بزرگ‌تر",
    active: "xl:border-primary xl:bg-primary-soft",
  },
] as const;
