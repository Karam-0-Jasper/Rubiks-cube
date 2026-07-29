/// Per-subject accent styling. Kept as literal class strings and safelisted in
/// tailwind.config.ts so the JIT compiler retains them.
export type Accent = {
  chip: string;
  dot: string;
  ring: string;
};

const ACCENTS: Record<string, Accent> = {
  rose: { chip: "bg-rose-500/12 text-rose-600 dark:text-rose-300", dot: "bg-rose-500", ring: "hover:border-rose-400/60" },
  indigo: { chip: "bg-indigo-500/12 text-indigo-600 dark:text-indigo-300", dot: "bg-indigo-500", ring: "hover:border-indigo-400/60" },
  emerald: { chip: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-300", dot: "bg-emerald-500", ring: "hover:border-emerald-400/60" },
  amber: { chip: "bg-amber-500/12 text-amber-600 dark:text-amber-300", dot: "bg-amber-500", ring: "hover:border-amber-400/60" },
  sky: { chip: "bg-sky-500/12 text-sky-600 dark:text-sky-300", dot: "bg-sky-500", ring: "hover:border-sky-400/60" },
  teal: { chip: "bg-teal-500/12 text-teal-600 dark:text-teal-300", dot: "bg-teal-500", ring: "hover:border-teal-400/60" },
  orange: { chip: "bg-orange-500/12 text-orange-600 dark:text-orange-300", dot: "bg-orange-500", ring: "hover:border-orange-400/60" },
  violet: { chip: "bg-violet-500/12 text-violet-600 dark:text-violet-300", dot: "bg-violet-500", ring: "hover:border-violet-400/60" },
  lime: { chip: "bg-lime-500/12 text-lime-600 dark:text-lime-300", dot: "bg-lime-500", ring: "hover:border-lime-400/60" },
  green: { chip: "bg-green-500/12 text-green-600 dark:text-green-300", dot: "bg-green-500", ring: "hover:border-green-400/60" },
  fuchsia: { chip: "bg-fuchsia-500/12 text-fuchsia-600 dark:text-fuchsia-300", dot: "bg-fuchsia-500", ring: "hover:border-fuchsia-400/60" },
  cyan: { chip: "bg-cyan-500/12 text-cyan-600 dark:text-cyan-300", dot: "bg-cyan-500", ring: "hover:border-cyan-400/60" },
};

export function accent(name: string): Accent {
  return ACCENTS[name] ?? ACCENTS.indigo;
}
