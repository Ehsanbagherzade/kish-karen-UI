# دیزاین سیستم کیش کارن

کاتالوگ زنده در `/Ehsan` است. ورینت‌ها در `src/components/ui` تعریف می‌شوند و کاتالوگ همان کامپوننت‌های استفاده‌شده در صفحات را نمایش می‌دهد.

## اندازه‌های صفحه

تعریف اصلی در `src/app/globals.css`، داخل `@theme static` است؛ واحد breakpointها `rem` است. مقدارهای پیکسلی زیر با اندازهٔ ریشهٔ پیش‌فرض ۱۶ پیکسل نوشته شده‌اند.

- `xs`: کمتر از ۴۰rem (۶۴۰px). پایهٔ طراحی موبایل؛ پیشوند `xs:` از صفر فعال است.
- `sm`: از ۴۰rem تا کمتر از ۴۸rem (۶۴۰–۷۶۷px).
- `md`: از ۴۸rem تا کمتر از ۶۴rem (۷۶۸–۱۰۲۳px)، تبلت.
- `lg`: از ۶۴rem تا کمتر از ۸۰rem (۱۰۲۴–۱۲۷۹px).
- `xl`: از ۸۰rem (۱۲۸۰px) به بالا.

قواعد از عرض کوچک شروع می‌شوند و فقط هنگام نیاز در breakpoint بعدی تغییر می‌کنند. پنج حالت، کلاس‌های Tailwind هستند و با سایز ثابت کامپوننت اشتباه نشوند: `size="md"` یک سایز ثابت است؛ `size="responsive"` با صفحه تغییر می‌کند.

## کامپوننت‌های مشترک

```tsx
import {
  Badge,
  Button,
  ButtonLink,
  Card,
  Container,
  Typography,
} from "@/components/ui";
import { getCoursesRoute } from "@/utils/routes";

<Container>
  <Typography variant="h1">دوره‌های آموزشی</Typography>
  <Card variant="muted" padding="responsive">
    <Badge variant="success">ثبت‌نام باز است</Badge>
    <Typography tone="muted">توضیحات دوره</Typography>
    <Button size="responsive" onClick={openConsultation}>
      مشاوره
    </Button>
    <ButtonLink href={getCoursesRoute()} variant="outline">
      مشاهده دوره‌ها
    </ButtonLink>
  </Card>
</Container>;
```

- `Button` و `ButtonLink`: ورینت‌های `primary`, `secondary`, `outline`, `soft`, `ghost`, `danger`, `inverse`. سایزهای ثابت `xs` تا `xl` و presetهای `responsive`, `header`. دکمه علاوه بر `disabled` از `loading` پشتیبانی می‌کند؛ `iconOnly` نیاز به `aria-label` دارد. دکمهٔ عادی پیش‌فرض `type="button"` است؛ برای ارسال فرم از `type="submit"` استفاده کنید.
- `Typography`: ورینت‌های `h1` تا `h4`, `lead`, `body`, `caption`, `label`, `nav`, `brand`. `as` تگ معنایی را تعیین می‌کند؛ `size` اختیاری، سایز را در تمام breakpointها ثابت نگه می‌دارد. رنگ‌ها با `tone` انتخاب می‌شوند؛ برای متن روی سطح رنگی از `tone="inherit"` استفاده کنید.
- `Card`: سطح‌های `default`, `muted`, `elevated`. فاصلهٔ داخلی با `padding="none"`, سایزهای `xs` تا `xl` یا `responsive`.
- `Badge`: ورینت‌های `primary`, `solid`, `inverse`, `neutral`, `success`, `warning`, `danger` و سایزهای `xs` تا `xl` یا `responsive`.
- `Container`: عرض‌های `sm`, `md`, `lg`, `xl`, `full` و فاصلهٔ افقی واکنش‌گرا؛ `as="section"` برای بخش‌های صفحه.
- `Input`, `Select`, `Textarea`, `Checkbox`: برچسب و بازخورد خطا، سایزهای `xs` تا `xl` و `responsive`. شناسهٔ یکتا، اتصال برچسب، `aria-invalid` و `aria-describedby` داخل کامپوننت مدیریت می‌شوند.
- `Dialog`: سایزهای `sm`, `md`, `lg`, `xl`؛ عنوان اجباری، توضیح و footer اختیاری. `DialogClose` با `asChild` برای دکمهٔ بستن. محتوای بلند در موبایل اسکرول می‌خورد.
- `Drawer`: منوی سمت راست با مدیریت فوکوس و اسکرول. هدر موبایل از همین کامپوننت استفاده می‌کند.
- `DropdownMenu`: منوی لینک‌ها با سایزهای `sm`, `md`, `responsive`, `header` و جایگاه‌های `bottom`, `bottom-center`, `top`, `inline`. ورینت `header` در تبلت و دسکتاپ عرض و فاصله‌های کمتری دارد و زیر دکمه وسط‌چین می‌شود. پس‌زمینه سفید و گرادینت آبی در ۳٪ پایین دارد؛ با کلیک بیرون، خروج فوکوس یا Escape بسته می‌شود. کلیدهای جهت، Home و End بین گزینه‌ها حرکت می‌کنند. لینک خارجی با `external` در تب جدید باز می‌شود.
- `Accordion`: باز و بسته کردن یک گزینه در هر گروه؛ با ورینت‌های `bordered`, `cards`, `soft` و اندازه‌های `sm`, `md`, `responsive`. مقدار باز را با `value` کنترل کنید و برای گروه‌های تو در تو هر گروه state جدا داشته باشد. کلیدهای Enter و Space با دکمهٔ بومی و حالت reduced-motion پشتیبانی می‌شوند.
- `UserPanelMenu`: ترکیب مشترک انتخاب پنل، با ورینت‌های `header`, `default`, `footer`. پنل یکپارچه به `/panel` و پنل قدیمی (لیمس) به `https://online.karenkish.ir` می‌رود. منوی موبایل از جایگاه `inline` استفاده می‌کند تا گزینه‌ها داخل ناحیهٔ قابل اسکرول بمانند.

## هدر

پیش‌فرض دکمه‌های هدر `size="header"` است؛ در `md` ارتفاع ۳۶px و فونت ۱۱px دارد، در `lg` ارتفاع ۴۰px و فونت ۱۲px، در `xl` ارتفاع ۴۴px و فونت ۱۴px. متن برند و ناوبری از ورینت‌های `brand` و `nav` می‌آیند. عنوان برند و متن اقدامات در عرض تبلت خلاصه‌تر نمایش داده می‌شوند. زیر `md` منوی کشویی فعال است؛ عبور از breakpoint، منوی باز را می‌بندد و قفل اسکرول را آزاد می‌کند. کد این breakpoint را از همان متغیر CSS می‌خواند.

## فرم

فرم‌ها از `Form` همراه `useForm` و `zodResolver` استفاده می‌کنند. فیلدها را از `RHFInput`, `RHFSelect`, `RHFTextarea`, `RHFCheckbox` وارد کنید؛ در sectionها `Controller` یا `FormProvider` اضافه نکنید. نمونهٔ عملی در `components/demo-form.tsx` است. این نمونه فقط اعتبارسنجی محلی دارد و به سرویس خارجی اطلاعات نمی‌فرستد.

## اضافه کردن ورینت

ورینت را در تعریف `cva` کامپوننت مشترک اضافه کنید و نمونهٔ آن را در کاتالوگ بیاورید. کلاس‌های اندازه را در مصرف‌کننده دوباره تعریف نکنید. `className` برای چیدمان محلی است و با `cn()` ادغام می‌شود. مسیرهای ناوبری از `src/utils/routes.ts` و آیکون‌ها از `Iconify` و مجموعهٔ محلی می‌آیند.

## انیمیشن‌های هدر

- `NavigationLink` ورینت‌های `desktop` و `drawer` دارد. `label` متن لینک و `leadingIcon` آیکون اختیاری است. هاور و فوکوس کیبورد، پس‌زمینهٔ آبی نرم را ظاهر می‌کنند و کلمه‌ها با تأخیر کوتاه محو و پخش می‌شوند؛ در پایان متن دوباره واضح است. کلمه‌ها مستقل حرکت می‌کنند تا اتصال حروف فارسی حفظ شود. نسخهٔ خوانده‌شده توسط صفحه‌خوان ثابت است.
- `borderAnimation` روی `Button` و `ButtonLink` یک خط آبی کم‌رنگ را در چهار ثانیه دور لبهٔ دکمه حرکت می‌دهد. این گزینه در دکمهٔ ورود هدر و منوی موبایل فعال است و ابعاد دکمه را تغییر نمی‌دهد.
- با `prefers-reduced-motion` افکت متن متوقف می‌شود و خط دور دکمه ثابت می‌ماند.
