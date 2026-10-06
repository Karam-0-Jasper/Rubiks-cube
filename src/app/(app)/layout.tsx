import Link from "next/link";

import { getCurrentUser } from "@/lib/auth";
import { getQuota } from "@/lib/quota";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StudyTimer } from "@/components/StudyTimer";
import { MainNav } from "@/components/MainNav";
import { PLANS } from "@/lib/plans";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  const quota = await getQuota(user);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-surface-raised focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur-sm supports-[backdrop-filter]:bg-surface/85">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-0 px-4 sm:px-6">
          <Link
            href="/dashboard"
            className="py-3 font-serif text-xl font-semibold tracking-tight text-ink"
          >
            Nuvex
          </Link>

          <div className="order-3 w-full sm:order-2 sm:w-auto">
            <MainNav />
          </div>

          <div className="order-2 ml-auto flex items-center gap-2 sm:order-3">
            <StudyTimer />
            <Link
              href="/billing"
              className="hidden text-sm text-ink-muted hover:text-ink md:block"
              title={`${PLANS[quota.plan].name} plan — Nyvora messages left this period`}
            >
              <span className="font-semibold text-ink">{quota.remaining}</span>
              <span>/{quota.limit} messages</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
        {children}
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-1 px-4 py-6 text-sm text-ink-faint sm:px-6">
          <span>Nuvex · Lesson notes for the Liberian MoE curriculum</span>
          <span>Notes are built from open textbooks (OpenStax, LibreTexts, CK-12 and others).</span>
        </div>
      </footer>
    </div>
  );
}
