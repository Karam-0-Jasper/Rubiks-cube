import "server-only";

import { randomUUID } from "node:crypto";
import type { PaymentStatus } from "@prisma/client";

import type {
  InitiateInput,
  InitiateResult,
  PaymentGateway,
  StatusInput,
} from "@/lib/payments/types";

/// Lonestar Cell MoMo via the MTN MoMo Collections API (request-to-pay).
///
/// Flow: obtain an OAuth token, POST /collection/v1_0/requesttopay with an
/// X-Reference-Id we generate, which pushes a PIN prompt to the payer's phone.
/// We then poll GET /collection/v1_0/requesttopay/{referenceId} for the result.
///
/// Docs: https://momodeveloper.mtn.com (Collections product).
///
/// Required env:
///   LONESTAR_MOMO_BASE_URL        e.g. https://sandbox.momodeveloper.mtn.com
///   LONESTAR_MOMO_SUBSCRIPTION_KEY  Ocp-Apim-Subscription-Key for Collections
///   LONESTAR_MOMO_API_USER        provisioned API user id (UUID)
///   LONESTAR_MOMO_API_KEY         API key for that user
///   LONESTAR_MOMO_TARGET_ENV      "sandbox" or your production target
///
/// These come from a Lonestar Cell / MTN MoMo merchant account. Until they are
/// set, isConfigured() returns false and the provider is hidden in the UI.

const BASE = () => process.env.LONESTAR_MOMO_BASE_URL ?? "";
const SUB_KEY = () => process.env.LONESTAR_MOMO_SUBSCRIPTION_KEY ?? "";
const API_USER = () => process.env.LONESTAR_MOMO_API_USER ?? "";
const API_KEY = () => process.env.LONESTAR_MOMO_API_KEY ?? "";
const TARGET_ENV = () => process.env.LONESTAR_MOMO_TARGET_ENV ?? "sandbox";

/// MTN expects the local MSISDN without a leading '+'. We store +231XXXXXXXX,
/// so strip the plus.
function toMomoMsisdn(msisdn: string): string {
  return msisdn.replace(/^\+/, "");
}

async function getToken(): Promise<string> {
  const creds = Buffer.from(`${API_USER()}:${API_KEY()}`).toString("base64");
  const res = await fetch(`${BASE()}/collection/token/`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${creds}`,
      "Ocp-Apim-Subscription-Key": SUB_KEY(),
    },
  });
  if (!res.ok) {
    throw new Error(`Lonestar MoMo token failed: ${res.status}`);
  }
  const body = (await res.json()) as { access_token?: string };
  if (!body.access_token) throw new Error("Lonestar MoMo token missing");
  return body.access_token;
}

export const lonestar: PaymentGateway = {
  id: "LONESTAR",
  label: "Lonestar Cell MoMo",
  hint: "A prompt is sent to your phone — enter your MoMo PIN to approve.",

  isConfigured() {
    return Boolean(BASE() && SUB_KEY() && API_USER() && API_KEY());
  },

  async initiate(input: InitiateInput): Promise<InitiateResult> {
    const token = await getToken();
    // MTN uses X-Reference-Id (a UUID) as the transaction id we poll later.
    const referenceId = randomUUID();

    const res = await fetch(`${BASE()}/collection/v1_0/requesttopay`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Reference-Id": referenceId,
        "X-Target-Environment": TARGET_ENV(),
        "Ocp-Apim-Subscription-Key": SUB_KEY(),
        "X-Callback-Url": input.callbackUrl,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // MoMo amounts are decimal strings in major units.
        amount: (input.amountMinor / 100).toFixed(2),
        currency: input.currency,
        externalId: input.reference,
        payer: { partyIdType: "MSISDN", partyId: toMomoMsisdn(input.msisdn) },
        payerMessage: `Nuvex ${input.planName} plan`,
        payeeNote: `Nuvex subscription (${input.reference})`,
      }),
    });

    // 202 Accepted means the prompt was pushed to the payer's phone.
    if (res.status !== 202) {
      const text = await res.text().catch(() => "");
      throw new Error(`Lonestar MoMo requesttopay failed: ${res.status} ${text}`);
    }

    return {
      kind: "push",
      externalRef: referenceId,
      instruction:
        "Check your phone for the Lonestar Cell MoMo prompt and enter your PIN to confirm.",
    };
  },

  async checkStatus(input: StatusInput): Promise<PaymentStatus> {
    if (!input.externalRef) return "PENDING";
    const token = await getToken();
    const res = await fetch(
      `${BASE()}/collection/v1_0/requesttopay/${input.externalRef}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Target-Environment": TARGET_ENV(),
          "Ocp-Apim-Subscription-Key": SUB_KEY(),
        },
      },
    );
    if (!res.ok) return "PENDING";
    const body = (await res.json()) as { status?: string };
    switch (body.status) {
      case "SUCCESSFUL":
        return "SUCCESSFUL";
      case "FAILED":
      case "REJECTED":
      case "TIMEOUT":
      case "EXPIRED":
        return "FAILED";
      default:
        return "PENDING";
    }
  },
};
