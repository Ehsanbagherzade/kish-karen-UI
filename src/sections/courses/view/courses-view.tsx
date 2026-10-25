import { AnimateIn } from "@/components/animate";
import { Iconify } from "@/components/iconify";
import { ButtonLink, Card, Container, Typography } from "@/components/ui";
import { getContactRoute } from "@/utils/routes";

import { CourseSeriesCard } from "../components/course-series-card";
import { COURSE_SERIES } from "../data";

export function CoursesView() {
  return (
    <Container
      as="div"
      size="xl"
      className="space-y-10 py-10 sm:space-y-12 sm:py-14 lg:space-y-16 lg:py-16"
    >
      <AnimateIn
        yOffset={20}
        className="mx-auto max-w-3xl space-y-3 text-center sm:space-y-4"
      >
        <Typography
          as="h1"
          variant="h1"
          className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl"
        >
          دوره‌های آموزشی آموزشگاه زبان کیش کارن
        </Typography>
        <Typography variant="lead" tone="muted">
          مجموعه‌کتاب‌ها، سطح‌ها و برنامهٔ ترم‌های هر دوره را ببینید.
        </Typography>
      </AnimateIn>

      <section
        aria-label="مجموعه‌های آموزشی"
        className="space-y-5 sm:space-y-7"
      >
        {COURSE_SERIES.map((series) => (
          <CourseSeriesCard key={series.id} series={series} />
        ))}
      </section>

      <Card
        variant="muted"
        className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start"
      >
        <div className="space-y-1">
          <Typography as="h2" variant="h3">
            برای انتخاب سطح مناسب راهنمایی می‌خواهید؟
          </Typography>
          <Typography variant="caption" tone="muted">
            برای تعیین سطح و اطلاع از زمان‌بندی دوره‌ها با ما در تماس باشید.
          </Typography>
        </div>
        <ButtonLink
          variant="primary"
          size="responsive"
          href={getContactRoute()}
        >
          <Iconify icon="solar:phone-bold-duotone" className="h-4 w-4" />
          <span>استعلام زمان‌بندی و ثبت‌نام در دوره‌ها</span>
        </ButtonLink>
      </Card>
    </Container>
  );
}
