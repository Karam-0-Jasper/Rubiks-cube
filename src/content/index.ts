import type { PeriodContent, SubjectContent } from "@/content/types";

// --- Grade 10, Period 1 (full subject definitions with metadata) ---
import { englishLanguage } from "@/content/grade10/period1/english-language";
import { mathematics } from "@/content/grade10/period1/mathematics";
import { biology } from "@/content/grade10/period1/biology";
import { chemistry } from "@/content/grade10/period1/chemistry";
import { physics } from "@/content/grade10/period1/physics";
import { geography } from "@/content/grade10/period1/geography";
import { history } from "@/content/grade10/period1/history";
import { civics } from "@/content/grade10/period1/civics";
import { economics } from "@/content/grade10/period1/economics";
import { agriculture } from "@/content/grade10/period1/agriculture";
import { literature } from "@/content/grade10/period1/literature";
import { computerScience } from "@/content/grade10/period1/computer-science";

// --- Additional periods (PeriodContent only; merged onto the base subject
// by slug). Add new period files here as the Grade 10-12 rebuild continues. ---
import { mathematicsG10P2 } from "@/content/grade10/period2/mathematics";
import { englishLanguageG10P2 } from "@/content/grade10/period2/english-language";
import { biologyG10P2 } from "@/content/grade10/period2/biology";
import { chemistryG10P2 } from "@/content/grade10/period2/chemistry";
import { physicsG10P2 } from "@/content/grade10/period2/physics";
import { geographyG10P2 } from "@/content/grade10/period2/geography";
import { historyG10P2 } from "@/content/grade10/period2/history";
import { economicsG10P2 } from "@/content/grade10/period2/economics";
import { literatureG10P2 } from "@/content/grade10/period2/literature";

import { mathematicsG10P3 } from "@/content/grade10/period3/mathematics";
import { mathematicsG10P4 } from "@/content/grade10/period4/mathematics";
import { mathematicsG10P5 } from "@/content/grade10/period5/mathematics";
import { mathematicsG10P6 } from "@/content/grade10/period6/mathematics";
import { englishLanguageG10P4 } from "@/content/grade10/period4/english-language";
import { englishLanguageG10P5 } from "@/content/grade10/period5/english-language";
import { englishLanguageG10P6 } from "@/content/grade10/period6/english-language";
import { biologyG10P4 } from "@/content/grade10/period4/biology";
import { biologyG10P5 } from "@/content/grade10/period5/biology";
import { biologyG10P6 } from "@/content/grade10/period6/biology";
import { chemistryG10P4 } from "@/content/grade10/period4/chemistry";
import { physicsG10P4 } from "@/content/grade10/period4/physics";
import { chemistryG10P5 } from "@/content/grade10/period5/chemistry";
import { physicsG10P5 } from "@/content/grade10/period5/physics";
import { chemistryG10P6 } from "@/content/grade10/period6/chemistry";
import { physicsG10P6 } from "@/content/grade10/period6/physics";
import { geographyG10P6 } from "@/content/grade10/period6/geography";
import { historyG10P6 } from "@/content/grade10/period6/history";
import { economicsG10P6 } from "@/content/grade10/period6/economics";
import { literatureG10P6 } from "@/content/grade10/period6/literature";
import { geographyG10P5 } from "@/content/grade10/period5/geography";
import { historyG10P5 } from "@/content/grade10/period5/history";
import { economicsG10P5 } from "@/content/grade10/period5/economics";
import { literatureG10P5 } from "@/content/grade10/period5/literature";
import { geographyG10P4 } from "@/content/grade10/period4/geography";
import { historyG10P4 } from "@/content/grade10/period4/history";
import { economicsG10P4 } from "@/content/grade10/period4/economics";
import { literatureG10P4 } from "@/content/grade10/period4/literature";
import { englishLanguageG10P3 } from "@/content/grade10/period3/english-language";
import { biologyG10P3 } from "@/content/grade10/period3/biology";
import { chemistryG10P3 } from "@/content/grade10/period3/chemistry";
import { physicsG10P3 } from "@/content/grade10/period3/physics";
import { geographyG10P3 } from "@/content/grade10/period3/geography";
import { historyG10P3 } from "@/content/grade10/period3/history";
import { economicsG10P3 } from "@/content/grade10/period3/economics";
import { literatureG10P3 } from "@/content/grade10/period3/literature";

// --- Grade 11 (PeriodContent only; merged onto the base subject by slug) ---
import { biologyG11P1 } from "@/content/grade11/period1/biology";
import { biologyG11P2 } from "@/content/grade11/period2/biology";
import { biologyG11P3 } from "@/content/grade11/period3/biology";
import { chemistryG11P1 } from "@/content/grade11/period1/chemistry";
import { chemistryG11P2 } from "@/content/grade11/period2/chemistry";
import { chemistryG11P3 } from "@/content/grade11/period3/chemistry";
import { physicsG11P1 } from "@/content/grade11/period1/physics";
import { physicsG11P2 } from "@/content/grade11/period2/physics";
import { physicsG11P3 } from "@/content/grade11/period3/physics";
import { physicsG11P4 } from "@/content/grade11/period4/physics";
import { physicsG11P5 } from "@/content/grade11/period5/physics";
import { physicsG11P6 } from "@/content/grade11/period6/physics";
import { biologyG11P4 } from "@/content/grade11/period4/biology";
import { chemistryG11P4 } from "@/content/grade11/period4/chemistry";
import { geographyG11P1 } from "@/content/grade11/period1/geography";
import { geographyG11P2 } from "@/content/grade11/period2/geography";
import { mathematicsG11P1 } from "@/content/grade11/period1/mathematics";
import { mathematicsG11P2 } from "@/content/grade11/period2/mathematics";
import { mathematicsG11P3 } from "@/content/grade11/period3/mathematics";
import { mathematicsG11P4 } from "@/content/grade11/period4/mathematics";
import { biologyG11P5 } from "@/content/grade11/period5/biology";
import { chemistryG11P5 } from "@/content/grade11/period5/chemistry";
import { economicsG11P1 } from "@/content/grade11/period1/economics";
import { economicsG11P2 } from "@/content/grade11/period2/economics";
import { biologyG11P6 } from "@/content/grade11/period6/biology";
import { chemistryG11P6 } from "@/content/grade11/period6/chemistry";
import { mathematicsG11P5 } from "@/content/grade11/period5/mathematics";
import { geographyG11P3 } from "@/content/grade11/period3/geography";
import { historyG11P1 } from "@/content/grade11/period1/history";
import { englishLanguageG11P1 } from "@/content/grade11/period1/english-language";
import { literatureG11P1 } from "@/content/grade11/period1/literature";

// Base subjects carry identity + metadata and Period 1 content.
const BASE_SUBJECTS: SubjectContent[] = [
  englishLanguage,
  mathematics,
  biology,
  chemistry,
  physics,
  geography,
  history,
  civics,
  economics,
  agriculture,
  literature,
  computerScience,
];

// Extra periods keyed by subject slug. Each entry is appended to the matching
// base subject's `periods` list, then all periods are sorted by grade + number.
const EXTRA_PERIODS: Record<string, PeriodContent[]> = {
  mathematics: [
    mathematicsG10P2,
    mathematicsG10P3,
    mathematicsG10P4,
    mathematicsG10P5,
    mathematicsG10P6,
    mathematicsG11P1,
    mathematicsG11P2,
    mathematicsG11P3,
    mathematicsG11P4,
    mathematicsG11P5,
  ],
  "english-language": [
    englishLanguageG10P2,
    englishLanguageG10P3,
    englishLanguageG10P4,
    englishLanguageG10P5,
    englishLanguageG10P6,
    englishLanguageG11P1,
  ],
  biology: [
    biologyG10P2,
    biologyG10P3,
    biologyG10P4,
    biologyG10P5,
    biologyG10P6,
    biologyG11P1,
    biologyG11P2,
    biologyG11P3,
    biologyG11P4,
    biologyG11P5,
    biologyG11P6,
  ],
  chemistry: [
    chemistryG10P2,
    chemistryG10P3,
    chemistryG10P4,
    chemistryG10P5,
    chemistryG10P6,
    chemistryG11P1,
    chemistryG11P2,
    chemistryG11P3,
    chemistryG11P4,
    chemistryG11P5,
    chemistryG11P6,
  ],
  physics: [
    physicsG10P2,
    physicsG10P3,
    physicsG10P4,
    physicsG10P5,
    physicsG10P6,
    physicsG11P1,
    physicsG11P2,
    physicsG11P3,
    physicsG11P4,
    physicsG11P5,
    physicsG11P6,
  ],
  geography: [
    geographyG10P2,
    geographyG10P3,
    geographyG10P4,
    geographyG10P5,
    geographyG10P6,
    geographyG11P1,
    geographyG11P2,
    geographyG11P3,
  ],
  history: [
    historyG10P2,
    historyG10P3,
    historyG10P4,
    historyG10P5,
    historyG10P6,
    historyG11P1,
  ],
  economics: [
    economicsG10P2,
    economicsG10P3,
    economicsG10P4,
    economicsG10P5,
    economicsG10P6,
    economicsG11P1,
    economicsG11P2,
  ],
  literature: [
    literatureG10P2,
    literatureG10P3,
    literatureG10P4,
    literatureG10P5,
    literatureG10P6,
    literatureG11P1,
  ],
};

function withExtraPeriods(subject: SubjectContent): SubjectContent {
  const extra = EXTRA_PERIODS[subject.slug] ?? [];
  const periods = [...subject.periods, ...extra].sort(
    (a, b) => a.grade - b.grade || a.number - b.number,
  );
  return { ...subject, periods };
}

/// All seeded subjects, ordered for display, each with every authored period.
export const SUBJECTS: SubjectContent[] = BASE_SUBJECTS.map(withExtraPeriods).sort(
  (a, b) => a.sortOrder - b.sortOrder,
);

export function getSubject(slug: string): SubjectContent | undefined {
  return SUBJECTS.find((s) => s.slug === slug);
}
