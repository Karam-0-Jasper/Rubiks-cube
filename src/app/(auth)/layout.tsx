import Link from "next/link";
import { redirect } from "next/navigation";

import { getRealUser } from "@/lib/auth";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getRealUser();
  if (user) redirect("/dashboard");

  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight"
        >
          Nuvex
        </Link>
        <ThemeToggle />
      </header>
      <main className="mx-auto flex max-w-md flex-col justify-center px-6 py-10">
        {children}
      </main>
    </div>
  );
}
