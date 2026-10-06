"use client";

import { useFormState, useFormStatus } from "react-dom";

import { unlockSubjectAction, type UnlockState } from "@/app/actions/unlock";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-primary">
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
    <div className="panel p-5">
      <h3 className="flex items-center gap-2 font-semibold">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          className="text-ink-faint"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Locked for teachers
      </h3>
      <p className="mt-2 max-w-[60ch] text-sm text-ink-muted">
        Test questions come with a marking key, for setting class tests. Enter
        the subject code from your school to unlock them for every topic in
        this subject. You only need to do this once.
      </p>
      <form action={action} className="mt-4 flex flex-wrap items-end gap-2">
        <input type="hidden" name="subjectSlug" value={subjectSlug} />
        <input type="hidden" name="topicSlug" value={topicSlug} />
        <label className="min-w-[12rem] flex-1">
          <span className="mb-1 block text-sm font-medium">Subject code</span>
          <input
            name="code"
            placeholder="e.g. MTH-10-4471"
            autoComplete="off"
            className="field"
          />
        </label>
        <Submit />
      </form>
      {state?.error && (
        <p className="notice notice-danger mt-3" role="alert">
          {state.error}
        </p>
      )}
    </div>
  );
}
