"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

import {
  requestResetCodeAction,
  resetWithCodeAction,
  type ForgotState,
} from "@/app/actions/forgot";

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-brand-ink transition hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Please wait…" : label}
    </button>
  );
}

function Field(props: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  hint?: string;
  defaultValue?: string;
  inputMode?: "text" | "numeric";
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{props.label}</span>
      <input
        name={props.name}
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        defaultValue={props.defaultValue}
        inputMode={props.inputMode}
        required
        className="w-full rounded-xl border border-line bg-surface-raised px-3.5 py-2.5 text-sm outline-none transition placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      {props.hint && (
        <span className="mt-1 block text-xs text-ink-faint">{props.hint}</span>
      )}
    </label>
  );
}

function ErrorBanner({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <div className="rounded-xl border border-danger/30 bg-danger/10 px-3.5 py-2.5 text-sm text-danger">
      {error}
    </div>
  );
}

function Notice({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="rounded-xl border border-brand/30 bg-brand-soft/60 px-3.5 py-2.5 text-sm">
      {text}
    </div>
  );
}

function CodeStep({ email, notice }: { email: string; notice?: string }) {
  const [state, action] = useFormState<ForgotState, FormData>(
    resetWithCodeAction,
    undefined,
  );

  if (state?.step === "done") {
    return (
      <div className="space-y-4">
        <Notice text="Your password has been reset. You can now log in with your new password." />
        <Link
          href="/login"
          className="block w-full rounded-xl bg-brand px-4 py-3 text-center text-sm font-semibold text-brand-ink transition hover:opacity-90"
        >
          Go to log in
        </Link>
      </div>
    );
  }

  const err = state?.step === "code" ? state.error : undefined;

  return (
    <form action={action} className="space-y-4">
      <Notice text={notice} />
      <ErrorBanner error={err} />
      <input type="hidden" name="email" value={email} />
      <Field
        label="6-digit code"
        name="code"
        inputMode="numeric"
        placeholder="123456"
        autoComplete="one-time-code"
        hint={`Sent to ${email}. It expires in 15 minutes.`}
      />
      <Field
        label="New password"
        name="password"
        type="password"
        autoComplete="new-password"
        hint="At least 8 characters."
      />
      <Field
        label="Confirm new password"
        name="confirm"
        type="password"
        autoComplete="new-password"
      />
      <SubmitButton label="Reset password" />
      <p className="text-center text-sm text-ink-muted">
        <Link href="/forgot-password" className="font-semibold text-brand">
          Start over
        </Link>
      </p>
    </form>
  );
}

export function ForgotPasswordForm() {
  const [state, action] = useFormState<ForgotState, FormData>(
    requestResetCodeAction,
    undefined,
  );

  if (state?.step === "code") {
    return <CodeStep email={state.email} notice={state.notice} />;
  }

  const err = state?.step === "request" ? state.error : undefined;

  return (
    <form action={action} className="space-y-4">
      <ErrorBanner error={err} />
      <Field
        label="Your email"
        name="email"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
        hint="We'll email you a 6-digit code to reset your password."
      />
      <SubmitButton label="Send code" />
      <p className="text-center text-sm text-ink-muted">
        <Link href="/login" className="font-semibold text-brand">
          Back to log in
        </Link>
      </p>
    </form>
  );
}
