export type QuizQuestionContent = {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type TestQuestionContent = {
  type: "MULTIPLE_CHOICE" | "SHORT_ANSWER" | "ESSAY";
  prompt: string;
  options?: string[];
  correctIndex?: number;
  /// Marking guidance the teacher sees once the subject code is entered.
  answerKey: string;
  marks: number;
};

export type TopicContent = {
  slug: string;
  title: string;
  objective: string;
  /// Markdown-ish body: `##` headings, `-` bullets, `1.` lists, `**bold**`,
  /// `*italic*`, `` `code` ``. Rendered by src/components/Notes.tsx.
  notes: string;
  workedExample: string;
  /// Deprecated: no longer shown to users. Retained as optional so existing
  /// content still type-checks; new topics omit it.
  teachingTip?: string;
  estimatedMinutes: number;
  quiz: QuizQuestionContent[];
  test: TestQuestionContent[];
};

export type PeriodContent = {
  grade: number;
  number: number;
  title: string;
  summary: string;
  topics: TopicContent[];
};

export type SubjectContent = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  accent: string;
  sortOrder: number;
  /// Plain-text code seeded as a hash; teachers enter it to unlock test items.
  teacherCode: string;
  periods: PeriodContent[];
};
