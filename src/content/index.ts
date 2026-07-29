import type { SubjectContent } from "@/content/types";

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

/// All seeded subjects, ordered for display. Grade 10, Period 1 for launch.
export const SUBJECTS: SubjectContent[] = [
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
].sort((a, b) => a.sortOrder - b.sortOrder);

export function getSubject(slug: string): SubjectContent | undefined {
  return SUBJECTS.find((s) => s.slug === slug);
}
