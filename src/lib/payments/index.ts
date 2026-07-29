import "server-only";

import type { PaymentProvider } from "@prisma/client";

import type { PaymentGateway } from "@/lib/payments/types";
import { lonestar } from "@/lib/payments/lonestar";
import { orange } from "@/lib/payments/orange";

const GATEWAYS: Record<PaymentProvider, PaymentGateway> = {
  ORANGE: orange,
  LONESTAR: lonestar,
};

export function getGateway(provider: PaymentProvider): PaymentGateway {
  return GATEWAYS[provider];
}

export function allGateways(): PaymentGateway[] {
  return [orange, lonestar];
}

/// Providers that have their credentials configured, for the checkout UI.
export function configuredGateways(): PaymentGateway[] {
  return allGateways().filter((g) => g.isConfigured());
}

export function appUrl(): string {
  return (
    process.env.NEXT_PUBLIC_APP_URL ??
    process.env.APP_URL ??
    "http://localhost:3000"
  );
}
