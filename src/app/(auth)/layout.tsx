import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (user) redirect("/dashboard");

  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm font-bold text-brand-ink">
            N
          </span>
          <span className="text-lg font-bold tracking-tight">Nuvex</span>
        </Link>
        <ThemeToggle />
      </header>
      <main className="mx-auto flex max-w-md flex-col justify-center px-6 py-10">
        {children}
      </main>
    </div>
  );
}
