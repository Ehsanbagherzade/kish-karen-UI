"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Accordion,
  type AccordionItem,
  Card,
  Typography,
} from "@/components/ui";

import type { CourseLevel, CourseSeries, CourseTerm } from "../data";

function TermDetails({ term }: { term: CourseTerm }) {
  const details = [
    { label: "Student Book", value: term.studentBook },
    { label: "Workbook", value: term.workbook },
    ...(term.videoBook
      ? [{ label: "Video Book", value: term.videoBook }]
      : []),
    ...(term.oxfordWordSkills
      ? [
          {
            label: "Oxford Word Skills · اختیاری",
            value: term.oxfordWordSkills,
          },
        ]
      : []),
  ];

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-950/50 sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <Typography as="h4" variant="label" className="font-semibold">
          ترم {term.name}
        </Typography>
        <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
          {term.sessions} جلسه
        </span>
      </div>
      <dl className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
        {details.map((detail) => (
          <div key={detail.label} className="min-w-0 space-y-1">
            <dt className="text-[11px] text-zinc-500 dark:text-zinc-400">
              {detail.label}
            </dt>
            <dd
              dir="ltr"
              className="text-left text-xs leading-relaxed font-medium text-zinc-800 dark:text-zinc-200"
            >
              {detail.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function CourseLevels({ levels }: { levels: CourseLevel[] }) {
  const [openLevel, setOpenLevel] = useState<string | null>(null);
  const items: AccordionItem[] = levels.map((level) => ({
    id: level.id,
    title: level.name,
    summary: `${level.terms.length} ترم`,
    content: (
      <div className="grid gap-2.5 sm:grid-cols-2">
        {level.terms.map((term) => (
          <TermDetails key={`${level.id}-${term.name}`} term={term} />
        ))}
      </div>
    ),
  }));

  return (
    <Accordion
      items={items}
      value={openLevel}
      onValueChange={setOpenLevel}
      variant="cards"
      size="responsive"
    />
  );
}

export function CourseSeriesCard({ series }: { series: CourseSeries }) {
  const [open, setOpen] = useState(false);
  const levelsAccordion: AccordionItem[] = [
    {
      id: `${series.id}-levels`,
      title: "کتاب‌ها و ترم‌ها",
      summary: series.levelLabel,
      content: <CourseLevels levels={series.levels} />,
    },
  ];

  return (
    <Card
      padding="none"
      className="overflow-hidden border-zinc-200/80 shadow-sm shadow-blue-950/5 dark:border-zinc-800"
    >
      <div className="grid min-w-0 md:grid-cols-[16rem_minmax(0,1fr)] lg:grid-cols-[19rem_minmax(0,1fr)]">
        <div className="relative flex min-h-60 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100/80 p-5 sm:min-h-72 md:min-h-full md:p-6 dark:from-blue-950/40 dark:via-zinc-900 dark:to-indigo-950/50">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-3xl"
          />
          <Image
            src={series.cover}
            alt={series.coverAlt}
            width={1024}
            height={1536}
            sizes="(min-width: 1024px) 304px, (min-width: 768px) 256px, 100vw"
            className="relative z-10 h-56 w-full object-contain drop-shadow-xl sm:h-64 md:h-72 lg:h-80"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-5 p-4 sm:p-6 md:p-7 lg:p-8">
          <div className="space-y-2.5">
            <Typography as="h2" variant="h2">
              {series.name}
            </Typography>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-600 dark:text-zinc-300 sm:text-sm">
              <span>{series.audience}</span>
              <span aria-hidden="true" className="text-blue-400">·</span>
              <span>{series.levelLabel}</span>
              <span aria-hidden="true" className="text-blue-400">·</span>
              <span>هر ترم ۱۳ جلسه</span>
            </p>
            <Typography variant="body" tone="muted" className="max-w-2xl">
              {series.description}
            </Typography>
          </div>

          <Accordion
            items={levelsAccordion}
            value={open ? `${series.id}-levels` : null}
            onValueChange={(value) => {
              setOpen(value !== null);
            }}
            variant="soft"
            size="responsive"
            className="mt-auto rounded-xl border border-blue-100 bg-blue-50/40 px-1 dark:border-blue-900/50 dark:bg-blue-950/20"
          />
        </div>
      </div>
    </Card>
  );
}
