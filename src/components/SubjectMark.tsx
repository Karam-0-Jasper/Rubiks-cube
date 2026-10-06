/// One muted, printed-ink colour per subject, keyed by the subject's accent
/// name. Used only as a small marker beside the subject name — never as a
/// background or gradient — so it helps scanning without shouting.
const SUBJECT_INK: Record<string, string> = {
  rose: "#a33a4f", // English
  indigo: "#2f4a7c", // Mathematics
  emerald: "#2f7a50", // Biology
  amber: "#a8741c", // Chemistry
  sky: "#2f6a8f", // Physics
  teal: "#2a7468", // Geography
  orange: "#a8521f", // History
  violet: "#4a5670", // slate
  lime: "#667a2c", // olive
  green: "#3a7a3a", // Agriculture
  fuchsia: "#a24e3d", // Literature
  cyan: "#2c7482", // deep cyan
};

export function subjectInk(accent: string): string {
  return SUBJECT_INK[accent] ?? SUBJECT_INK.indigo;
}

export function SubjectMark({
  accent,
  className = "",
}: {
  accent: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-3 w-1.5 shrink-0 rounded-[1px] ${className}`}
      style={{ backgroundColor: subjectInk(accent) }}
    />
  );
}
