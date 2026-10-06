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
      className="btn btn-primary w-full"
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
      <div className="text-center text-sm text-ink-muted">
        Mobile money not set up yet
      </div>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn btn-primary w-full"
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
        <legend className="mb-1 text-sm font-medium">
          Pay with
        </legend>
        {providers.map((p) => (
          <label
            key={p.id}
            className={`flex cursor-pointer items-center gap-2.5 rounded-md border px-3 py-2 text-sm transition-colors ${
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
        <span className="mb-1 block text-sm font-medium">
          Mobile money number
        </span>
        <input
          name="phone"
          type="tel"
          required
          defaultValue={defaultPhone}
          placeholder="0770123456"
          className="field"
        />
      </label>

      {activeHint && (
        <p className="text-sm text-ink-muted">{activeHint}</p>
      )}

      <PayButton planName={planName} />
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="w-full py-1 text-center text-sm text-ink-muted hover:text-ink hover:underline"
      >
        Cancel
      </button>
    </form>
  );
}
