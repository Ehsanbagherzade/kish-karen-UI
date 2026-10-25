import { Iconify } from "@/components/iconify";
import { ButtonLink, Card, Container, Typography } from "@/components/ui";
import { getHomeRoute } from "@/utils/routes";

export function PanelView() {
  return (
    <Container className="flex min-h-[60dvh] items-center justify-center py-12 sm:py-16">
      <Card className="w-full max-w-2xl space-y-6 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 dark:bg-blue-950/40">
          <Iconify icon="solar:clock-circle-bold-duotone" className="size-8" />
        </div>
        <Typography as="h1" variant="h2">
          پنل یکپارچه کیش و کارن
        </Typography>
        <Typography variant="lead" tone="muted">
          فعلا سامانه جدید راه اندازی نشده، از صبر شما سپاس گذاریم.
        </Typography>
        <ButtonLink href={getHomeRoute()} variant="soft">
          بازگشت به صفحه اصلی
          <Iconify icon="solar:arrow-left-linear" />
        </ButtonLink>
      </Card>
    </Container>
  );
}
