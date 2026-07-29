"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

import { startPayment } from "@/app/actions/billing";

export type ProviderOption = { id: string; label: string; hint: string };

function PayButton({ planName }: { planName: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Starting…" : `Pay for ${planName}`}
    </button>
  );
}

export function PlanCheckout({
  planId,
  planName,
  providers,
  defaultPhone,
}: {
  planId: string;
  planName: string;
  providers: ProviderOption[];
  defaultPhone: string;
}) {
  const [open, setOpen] = useState(false);
  const [provider, setProvider] = useState(providers[0]?.id ?? "");

  if (providers.length === 0) {
    return (
      <div className="rounded-xl border border-line px-4 py-2.5 text-center text-sm text-ink-faint">
        Mobile money not set up yet
      </div>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90"
      >
        Choose {planName}
      </button>
    );
  }

  const activeHint = providers.find((p) => p.id === provider)?.hint;

  return (
    <form action={startPayment} className="space-y-3">
      <input type="hidden" name="plan" value={planId} />
      <fieldset className="space-y-2">
        <legend className="text-xs font-medium text-ink-faint">
          Pay with
        </legend>
        {providers.map((p) => (
          <label
            key={p.id}
            className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3 py-2 text-sm transition ${
              provider === p.id
                ? "border-brand bg-brand-soft"
                : "border-line hover:bg-surface-sunken"
            }`}
          >
            <input
              type="radio"
              name="provider"
              value={p.id}
              checked={provider === p.id}
              onChange={() => setProvider(p.id)}
              className="accent-brand"
            />
            <span className="font-medium">{p.label}</span>
          </label>
        ))}
      </fieldset>

      <label className="block">
        <span className="mb-1 block text-xs font-medium text-ink-faint">
          Mobile money number
        </span>
        <input
          name="phone"
          type="tel"
          required
          defaultValue={defaultPhone}
          placeholder="0770123456"
          className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </label>

      {activeHint && (
        <p className="text-xs text-ink-faint">{activeHint}</p>
      )}

      <PayButton planName={planName} />
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="w-full text-center text-xs text-ink-faint transition hover:text-ink"
      >
        Cancel
      </button>
    </form>
  );
}
