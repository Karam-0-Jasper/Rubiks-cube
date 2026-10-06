"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/dashboard", label: "Library", match: ["/dashboard", "/grade", "/subjects"] },
  { href: "/search", label: "Search", match: ["/search"] },
  { href: "/nyvora", label: "Nyvora", match: ["/nyvora"] },
  { href: "/billing", label: "Plan", match: ["/billing"] },
];

/// Primary navigation. Marks the current section so the teacher always knows
/// where they are; scrolls sideways on narrow screens instead of wrapping.
export function MainNav() {
  const pathname = usePathname() ?? "";
  return (
    <nav aria-label="Main" className="-mx-1 flex gap-1 overflow-x-auto">
      {LINKS.map((l) => {
        const active = l.match.some(
          (m) => pathname === m || pathname.startsWith(`${m}/`),
        );
        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={active ? "page" : undefined}
            className={`whitespace-nowrap border-b-2 px-2.5 py-2 text-[0.95rem] font-medium transition-colors ${
              active
                ? "border-brand text-ink"
                : "border-transparent text-ink-muted hover:border-line hover:text-ink"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
