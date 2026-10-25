export type CourseTerm = {
  name: string;
  sessions: number;
  studentBook: string;
  workbook: string;
  videoBook?: string;
  oxfordWordSkills?: string;
};

export type CourseLevel = {
  id: string;
  name: string;
  terms: CourseTerm[];
};

export type CourseSeries = {
  id: string;
  name: string;
  audience: string;
  description: string;
  levelLabel: string;
  cover: string;
  coverAlt: string;
  levels: CourseLevel[];
};

const units = (first: number, last: number) => `Unit ${first}–${last}`;
const term = (
  name: string,
  studentBook: string,
  workbook = studentBook
): CourseTerm => ({ name, sessions: 13, studentBook, workbook });

const phonicsLevels: CourseLevel[] = [1, 2, 3, 4].map((level) => ({
  id: `phonics-${level}`,
  name: `Phonics ${level}`,
  terms: [
    term("A", units(1, 3)),
    term("B", units(4, level < 3 ? 6 : 7)),
  ],
}));

const letsGoLevels: CourseLevel[] = [
  {
    id: "lets-begin-1",
    name: "Let’s Begin 1",
    terms: [term("A", units(1, 12)), term("B", units(13, 28))],
  },
  {
    id: "lets-begin-2",
    name: "Let’s Begin 2",
    terms: [term("A", units(1, 4)), term("B", units(5, 8))],
  },
  ...[1, 2, 3, 4, 5, 6].map((level) => ({
    id: `lets-go-${level}`,
    name: `Let’s Go ${level}`,
    terms: [
      term("A", units(1, 3)),
      term("B", units(4, 6)),
      term("C", units(7, 8)),
    ],
  })),
];

const teenLevels: CourseLevel[] = [1, 2, 3, 4].map((level) => ({
  id: `teen2teen-${level}`,
  name: `Teen2Teen ${level}`,
  terms: [
    term("A", units(1, 3)),
    term("B", units(4, 6)),
    term("C", units(7, 9)),
    term("D", units(10, 12)),
  ],
}));

const EVOLVE_WORD_SKILLS_RANGES: [number, number][] = [
  [1, 8],
  [9, 16],
  [17, 25],
  [26, 33],
  [34, 41],
  [42, 50],
];

const evolveWordSkillsRange = (termIndex: number, level: number) => {
  const levelOffset = Math.floor((level - 1) / 2) * 50;
  const [firstUnit, lastUnit] = EVOLVE_WORD_SKILLS_RANGES[termIndex];
  const first = firstUnit + levelOffset;
  const last = lastUnit + levelOffset;
  return units(first, last);
};

const evolveLevels: CourseLevel[] = [1, 2, 3, 4, 5, 6].map((level) => {
  const proficiency =
    level < 3 ? "Basic" : level < 5 ? "Intermediate" : "Advanced";

  return {
    id: `evolve-${level}`,
    name: `Evolve ${level}`,
    terms: ["A", "B", "C", "D", "E", "F"].map((letter, index) => {
      const firstUnit = index * 2 + 1;
      const lastUnit = firstUnit + 1;
      const start = evolveWordSkillsRange(index, level);

      return {
        ...term(
          letter,
          `Unit ${firstUnit} & ${lastUnit}`
        ),
        videoBook: `Episodes ${firstUnit} & ${lastUnit} + Documentary U${lastUnit}`,
        oxfordWordSkills: `${proficiency}: ${start}`,
      };
    }),
  };
});

export const COURSE_SERIES: CourseSeries[] = [
  {
    id: "phonics",
    name: "Jungle Phonics",
    audience: "کودکان ۶ تا ۸ سال",
    description:
      "آشنایی پایه با آواها و خواندن زبان انگلیسی، در چهار سطح پیوسته.",
    levelLabel: "۴ سطح · هر سطح ۲ ترم",
    cover: "/images/course-book-phonics.png",
    coverAlt: "موکاپ کتاب دورهٔ Jungle Phonics",
    levels: phonicsLevels,
  },
  {
    id: "lets-go",
    name: "Oxford Let’s Go",
    audience: "کودکان ۸ تا ۱۲ سال",
    description:
      "مجموعه‌ای شش‌سطحی برای یادگیری انگلیسی کودکان، همراه با دو سطح مقدماتی Let’s Begin.",
    levelLabel: "۸ کتاب · ۲۲ ترم",
    cover: "/images/course-book-lets-go.png",
    coverAlt: "موکاپ کتاب دورهٔ Let’s Go",
    levels: letsGoLevels,
  },
  {
    id: "teen2teen",
    name: "Oxford Teen2Teen",
    audience: "نوجوانان",
    description:
      "چهار سطح آموزش زبان انگلیسی برای نوجوانان، هر سطح در چهار ترم آموزشی.",
    levelLabel: "۴ سطح · هر سطح ۴ ترم",
    cover: "/images/course-book-teen2teen.png",
    coverAlt: "موکاپ کتاب دورهٔ Teen2Teen",
    levels: teenLevels,
  },
  {
    id: "evolve",
    name: "Cambridge Evolve",
    audience: "بزرگسالان",
    description:
      "دورهٔ شش‌سطحی بزرگسالان، همراه با کتاب ویدئو و تمرین اختیاری Oxford Word Skills.",
    levelLabel: "۶ سطح · هر سطح ۶ ترم",
    cover: "/images/course-book-evolve.png",
    coverAlt: "موکاپ کتاب دورهٔ Evolve",
    levels: evolveLevels,
  },
];
