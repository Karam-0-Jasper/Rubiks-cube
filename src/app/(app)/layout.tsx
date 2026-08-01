import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { getQuota } from "@/lib/quota";
import { logoutAction } from "@/app/actions/auth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StudyTimer } from "@/components/StudyTimer";
import { PLANS } from "@/lib/plans";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const quota = await getQuota(user);
  const displayName = user.fullName || user.username;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-line bg-surface/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/dashboard"
            className="font-display text-xl font-semibold tracking-tight text-ink"
          >
            Nuvex
          </Link>

          <nav className="flex items-center gap-1 text-sm">
            <NavLink href="/dashboard" label="Subjects" />
            <NavLink href="/search" label="Search" />
            <NavLink href="/nyvora" label="Nyvora" />
            <NavLink href="/billing" label="Plan" />
          </nav>

          <div className="flex items-center gap-2">
            <StudyTimer />
            <Link
              href="/nyvora"
              className="hidden rounded-lg border border-line px-2.5 py-1.5 text-xs font-medium text-ink-muted transition hover:bg-surface-sunken sm:block"
              title={`${PLANS[quota.plan].name} plan`}
            >
              <span className="text-ink">{quota.remaining}</span>
              <span className="text-ink-faint">/{quota.limit} left</span>
            </Link>
            <ThemeToggle />
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-ink-muted transition hover:bg-surface-sunken hover:text-ink"
                title={`Logged in as ${displayName}`}
              >
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-1.5 font-medium text-ink-muted transition hover:bg-surface-sunken hover:text-ink"
    >
      {label}
    </Link>
  );
}
