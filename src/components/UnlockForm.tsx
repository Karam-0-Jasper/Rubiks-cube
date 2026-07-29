"use client";

import { useFormState, useFormStatus } from "react-dom";

import { unlockSubjectAction, type UnlockState } from "@/app/actions/unlock";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Checking…" : "Unlock"}
    </button>
  );
}

export function UnlockForm({
  subjectSlug,
  topicSlug,
}: {
  subjectSlug: string;
  topicSlug: string;
}) {
  const [state, action] = useFormState<UnlockState, FormData>(
    unlockSubjectAction,
    undefined,
  );

  return (
    <div className="rounded-card border border-dashed border-line bg-surface-sunken p-5">
      <div className="flex items-center gap-2">
        <span className="text-ink-faint">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </span>
        <h3 className="font-semibold">Teacher-only test questions</h3>
      </div>
      <p className="mt-2 text-sm text-ink-muted">
        Five assessment questions with a marking key, for setting class tests.
        Enter your subject code to unlock them for this subject. You only need to
        do this once.
      </p>
      <form action={action} className="mt-4 flex flex-wrap items-center gap-2">
        <input type="hidden" name="subjectSlug" value={subjectSlug} />
        <input type="hidden" name="topicSlug" value={topicSlug} />
        <input
          name="code"
          placeholder="e.g. MTH-10-4471"
          autoComplete="off"
          className="min-w-[12rem] flex-1 rounded-xl border border-line bg-surface-raised px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
        <Submit />
      </form>
      {state?.error && (
        <p className="mt-2 text-sm text-danger">{state.error}</p>
      )}
    </div>
  );
}
