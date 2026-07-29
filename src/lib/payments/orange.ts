import "server-only";

import type { PaymentStatus } from "@prisma/client";

import type {
  InitiateInput,
  InitiateResult,
  PaymentGateway,
  StatusInput,
} from "@/lib/payments/types";

/// Orange Money via the Orange Money Web Payment API.
///
/// Flow: obtain an OAuth token, POST .../webpayment to create a payment and get
/// a hosted `payment_url` plus a `pay_token`. The teacher is redirected to
/// Orange, approves the payment, and is returned to our return_url. We confirm
/// the outcome with the transactionstatus endpoint (and via the notif_url
/// callback), keyed by order_id + amount + pay_token.
///
/// Docs: https://developer.orange.com (Orange Money Web Payment).
///
/// Required env:
///   ORANGE_MONEY_BASE_URL      e.g. https://api.orange.com
///   ORANGE_MONEY_TOKEN_URL     OAuth token endpoint (default {BASE}/oauth/v3/token)
///   ORANGE_MONEY_AUTH_HEADER   the Basic auth header value issued to your app
///   ORANGE_MONEY_MERCHANT_KEY  your merchant key
///   ORANGE_MONEY_COUNTRY       webpay country path segment, e.g. "lr"
///
/// These come from an Orange Money Liberia merchant account. Confirm the exact
/// base URL, country segment and currency with Orange Liberia — Web Payment
/// availability and paths vary by market. Until the env is set, isConfigured()
/// returns false and the provider is hidden in the UI.

const BASE = () => process.env.ORANGE_MONEY_BASE_URL ?? "";
const TOKEN_URL = () =>
  process.env.ORANGE_MONEY_TOKEN_URL || `${BASE()}/oauth/v3/token`;
const AUTH_HEADER = () => process.env.ORANGE_MONEY_AUTH_HEADER ?? "";
const MERCHANT_KEY = () => process.env.ORANGE_MONEY_MERCHANT_KEY ?? "";
const COUNTRY = () => process.env.ORANGE_MONEY_COUNTRY || "lr";

function webpayBase(): string {
  return `${BASE()}/orange-money-webpay/${COUNTRY()}/v1`;
}

async function getToken(): Promise<string> {
  const res = await fetch(TOKEN_URL(), {
    method: "POST",
    headers: {
      Authorization: AUTH_HEADER(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!res.ok) throw new Error(`Orange Money token failed: ${res.status}`);
  const body = (await res.json()) as { access_token?: string };
  if (!body.access_token) throw new Error("Orange Money token missing");
  return body.access_token;
}

export const orange: PaymentGateway = {
  id: "ORANGE",
  label: "Orange Money",
  hint: "You'll be taken to Orange Money to approve the payment, then brought back.",

  isConfigured() {
    return Boolean(BASE() && AUTH_HEADER() && MERCHANT_KEY());
  },

  async initiate(input: InitiateInput): Promise<InitiateResult> {
    const token = await getToken();
    const res = await fetch(`${webpayBase()}/webpayment`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        merchant_key: MERCHANT_KEY(),
        currency: input.currency,
        order_id: input.reference,
        // Orange Web Payment expects the amount in major units.
        amount: input.amountMinor / 100,
        return_url: input.returnUrl,
        cancel_url: input.returnUrl,
        notif_url: input.callbackUrl,
        lang: "en",
        reference: `Nuvex ${input.planName}`,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Orange Money webpayment failed: ${res.status} ${text}`);
    }

    const body = (await res.json()) as {
      payment_url?: string;
      pay_token?: string;
    };
    if (!body.payment_url || !body.pay_token) {
      throw new Error("Orange Money webpayment response missing url/token");
    }

    // pay_token is needed to query status later; carry it in externalRef.
    return {
      kind: "redirect",
      url: body.payment_url,
      externalRef: body.pay_token,
    };
  },

  async checkStatus(input: StatusInput): Promise<PaymentStatus> {
    if (!input.externalRef) return "PENDING";
    const token = await getToken();
    const res = await fetch(`${webpayBase()}/transactionstatus`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_id: input.reference,
        amount: input.amountMinor / 100,
        pay_token: input.externalRef,
      }),
    });
    if (!res.ok) return "PENDING";
    const body = (await res.json()) as { status?: string };
    switch ((body.status ?? "").toUpperCase()) {
      case "SUCCESS":
      case "SUCCESSFUL":
        return "SUCCESSFUL";
      case "FAILED":
      case "EXPIRED":
        return "FAILED";
      case "CANCELLED":
      case "CANCELED":
        return "CANCELLED";
      default:
        return "PENDING";
    }
  },
};
