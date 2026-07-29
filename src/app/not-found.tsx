import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <div className="text-sm font-semibold text-brand">404</div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">
          We could not find that page
        </h1>
        <p className="mt-2 text-ink-muted">
          The lesson or page you are looking for is not here.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90"
        >
          Back to subjects
        </Link>
      </div>
    </div>
  );
}
