import "server-only";

import Stripe from "stripe";

let cached: Stripe | null = null;

/// Lazily constructed so the app builds and runs (landing, auth, lessons,
/// Nyvora) even when Stripe is not configured. Billing routes call
/// requireStripe() and surface a clear error if the key is missing.
export function getStripe(): Stripe | null {
  if (cached) return cached;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  cached = new Stripe(key, { apiVersion: "2025-02-24.acacia" });
  return cached;
}

export function requireStripe(): Stripe {
  const stripe = getStripe();
  if (!stripe) {
    throw new Error("Stripe is not configured. Set STRIPE_SECRET_KEY.");
  }
  return stripe;
}

export function appUrl(): string {
  return (
    process.env.NEXT_PUBLIC_APP_URL ??
    process.env.APP_URL ??
    "http://localhost:3000"
  );
}
