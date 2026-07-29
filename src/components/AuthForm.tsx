"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

import { loginAction, registerAction, type AuthState } from "@/app/actions/auth";

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

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">
        {label}
        {!required && <span className="text-ink-faint"> (optional)</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-line bg-surface-raised px-3.5 py-2.5 text-sm outline-none transition placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      {hint && <span className="mt-1 block text-xs text-ink-faint">{hint}</span>}
    </label>
  );
}

function ErrorBanner({ state }: { state: AuthState }) {
  if (!state?.error) return null;
  return (
    <div className="rounded-xl border border-danger/30 bg-danger/10 px-3.5 py-2.5 text-sm text-danger">
      {state.error}
    </div>
  );
}

export function LoginForm() {
  const [state, action] = useFormState(loginAction, undefined);
  return (
    <form action={action} className="space-y-4">
      <ErrorBanner state={state} />
      <Field
        label="Username or phone number"
        name="identifier"
        required
        placeholder="jkollie or 0770123456"
        autoComplete="username"
      />
      <Field
        label="Password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
      />
      <SubmitButton label="Log in" />
      <p className="text-center text-sm text-ink-muted">
        New to Nuvex?{" "}
        <Link href="/register" className="font-semibold text-brand">
          Create an account
        </Link>
      </p>
    </form>
  );
}

export function RegisterForm() {
  const [state, action] = useFormState(registerAction, undefined);
  return (
    <form action={action} className="space-y-4">
      <ErrorBanner state={state} />
      <Field
        label="Username"
        name="username"
        required
        placeholder="jkollie"
        autoComplete="username"
        hint="Letters, numbers, dots and underscores. This is how you log in."
      />
      <Field
        label="Phone number"
        name="phone"
        type="tel"
        placeholder="0770123456"
        autoComplete="tel"
        hint="Optional — lets you log in with your phone number too."
      />
      <Field label="Full name" name="fullName" placeholder="Joseph Kollie" autoComplete="name" />
      <Field label="School" name="school" placeholder="St. Peter's High School" />
      <Field
        label="Password"
        name="password"
        type="password"
        required
        autoComplete="new-password"
        hint="At least 8 characters."
      />
      <SubmitButton label="Create account" />
      <p className="text-center text-sm text-ink-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-brand">
          Log in
        </Link>
      </p>
    </form>
  );
}
