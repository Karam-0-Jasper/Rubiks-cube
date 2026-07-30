"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Status = "PENDING" | "SUCCESSFUL" | "FAILED" | "CANCELLED";

export function PaymentStatusPoller({
  paymentId,
  planName,
  instruction,
}: {
  paymentId: string;
  planName: string;
  instruction: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("PENDING");
  const [failureReason, setFailureReason] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const stopped = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    async function poll() {
      if (stopped.current) return;
      try {
        const res = await fetch(`/api/payments/${paymentId}/status`, {
          cache: "no-store",
        });
        if (res.ok) {
          const data = (await res.json()) as {
            status: Status;
            failureReason?: string | null;
          };
          setStatus(data.status);
          setFailureReason(data.failureReason ?? null);
          if (data.status !== "PENDING") {
            stopped.current = true;
            if (data.status === "SUCCESSFUL") {
              // Refresh server components so the new plan shows everywhere.
              setTimeout(() => router.refresh(), 1200);
            }
            return;
          }
        }
      } catch {
        // Ignore transient errors and keep polling.
      }
      setElapsed((e) => e + 3);
      timer = setTimeout(poll, 3000);
    }

    timer = setTimeout(poll, 2000);
    return () => {
      stopped.current = true;
      clearTimeout(timer);
    };
  }, [paymentId, router]);

  // Give up gracefully after ~3 minutes of pending.
  const timedOut = status === "PENDING" && elapsed >= 180;

  if (status === "SUCCESSFUL") {
    return (
      <Panel tone="positive" icon="✓" title={`You're on the ${planName} plan`}>
        Your payment went through. Enjoy the extra Nyvora messages and the
        teacher-only test questions.
        <Actions primary={{ href: "/dashboard", label: "Back to subjects" }} />
      </Panel>
    );
  }

  if (status === "FAILED" || status === "CANCELLED" || timedOut) {
    return (
      <Panel
        tone="danger"
        icon="!"
        title={
          status === "CANCELLED" ? "Payment cancelled" : "Payment not completed"
        }
      >
        {failureReason ||
          (timedOut
            ? "We didn't get a confirmation in time. If you were charged, your plan will update shortly — otherwise you can try again."
            : "The payment did not go through. No plan change was made.")}
        <Actions
          primary={{ href: "/billing", label: "Try again" }}
          secondary={{ href: "/dashboard", label: "Back to subjects" }}
        />
      </Panel>
    );
  }

  return (
    <Panel tone="pending" icon={<Spinner />} title="Waiting for your payment">
      {instruction}
      <p className="mt-3 text-xs text-ink-faint">
        This page updates on its own — no need to refresh. ({elapsed}s)
      </p>
    </Panel>
  );
}

function Panel({
  tone,
  icon,
  title,
  children,
}: {
  tone: "positive" | "danger" | "pending";
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  const ring =
    tone === "positive"
      ? "border-positive/30"
      : tone === "danger"
        ? "border-danger/30"
        : "border-line";
  const badge =
    tone === "positive"
      ? "bg-positive/15 text-positive"
      : tone === "danger"
        ? "bg-danger/15 text-danger"
        : "bg-brand-soft text-brand";
  return (
    <div className={`rounded-card border ${ring} bg-surface-raised p-6`}>
      <div
        className={`grid h-11 w-11 place-items-center rounded-xl text-lg font-bold ${badge}`}
      >
        {icon}
      </div>
      <h1 className="mt-4 text-xl font-bold tracking-tight">{title}</h1>
      <div className="mt-2 text-sm leading-relaxed text-ink-muted">
        {children}
      </div>
    </div>
  );
}

function Actions({
  primary,
  secondary,
}: {
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      <a
        href={primary.href}
        className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90"
      >
        {primary.label}
      </a>
      {secondary && (
        <a
          href={secondary.href}
          className="rounded-xl border border-line px-4 py-2.5 text-sm font-semibold transition hover:bg-surface-sunken"
        >
          {secondary.label}
        </a>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
  );
}
