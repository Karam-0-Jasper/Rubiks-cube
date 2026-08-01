import Link from "next/link";

/// Rich, warm, non-purple cover colours keyed by each subject's accent name.
/// Each is [top, bottom] of a subtle vertical gradient; text sits in near-white.
const COVER: Record<string, [string, string]> = {
  rose: ["#a8324a", "#7d2338"], // English — deep rose
  indigo: ["#2f4a7c", "#213762"], // Maths — navy (not purple)
  emerald: ["#2f7d52", "#1f5c3b"], // Biology — forest green
  amber: ["#b0791c", "#8a5c12"], // Chemistry — amber/ochre
  sky: ["#2f6f96", "#215173"], // Physics — steel blue
  teal: ["#2f7d72", "#1f5c54"], // Geography — teal
  orange: ["#b0551f", "#8a3f12"], // History — rust
  violet: ["#3a4a6a", "#2a374f"], // slate-navy (not purple)
  lime: ["#6a7d2f", "#4f5c22"], // olive
  green: ["#3a7d3a", "#2a5c2a"], // Agriculture — green
  fuchsia: ["#a8503f", "#7d382b"], // Literature — terracotta
  cyan: ["#2f7d8a", "#1f5c66"], // deep cyan
};

function cover(accent: string): [string, string] {
  return COVER[accent] ?? COVER.indigo;
}

export function BookCover({
  href,
  title,
  shortName,
  grade,
  topicCount,
  accent,
}: {
  href: string;
  title: string;
  shortName: string;
  grade: number;
  topicCount: number;
  accent: string;
}) {
  const [top, bottom] = cover(accent);
  return (
    <Link href={href} className="group block" aria-label={`${title} — Grade ${grade}`}>
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-r-lg rounded-l-sm shadow-md transition duration-200 group-hover:-translate-y-1 group-hover:shadow-xl"
        style={{ backgroundImage: `linear-gradient(160deg, ${top}, ${bottom})` }}
      >
        {/* spine */}
        <span
          className="absolute inset-y-0 left-0 w-2.5"
          style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.35), rgba(0,0,0,0))` }}
        />
        {/* faint page edge on the right */}
        <span className="absolute inset-y-1.5 right-0 w-1 rounded-sm bg-white/25" />

        <div className="flex h-full flex-col justify-between p-4 pl-6 text-center">
          <div className="pt-3">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/70">
              Nuvex
            </p>
          </div>

          <div>
            <span className="mx-auto mb-3 block h-px w-8 bg-white/40" />
            <h3 className="font-display text-[1.35rem] font-semibold leading-tight text-white">
              {title}
            </h3>
            <span className="mx-auto mt-3 block h-px w-8 bg-white/40" />
          </div>

          <div className="pb-1">
            <p className="text-[0.7rem] font-medium uppercase tracking-widest text-white/75">
              Grade {grade}
            </p>
            <p className="mt-1 text-[0.7rem] text-white/60">
              {topicCount} lesson{topicCount === 1 ? "" : "s"}
            </p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-sm font-medium text-ink-muted transition group-hover:text-ink">
        {shortName}
      </p>
    </Link>
  );
}
