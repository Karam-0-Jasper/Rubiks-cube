import type { PaymentProvider as ProviderId, PaymentStatus } from "@prisma/client";

export type { ProviderId };

/// The result of asking a provider to start a payment. Orange Money returns a
/// hosted page to redirect the teacher to; Lonestar (MTN MoMo) pushes a PIN
/// prompt to the phone and we poll, so there is nothing to redirect to.
export type InitiateResult =
  | { kind: "redirect"; url: string; externalRef?: string }
  | { kind: "push"; externalRef?: string; instruction: string };

export type InitiateInput = {
  /// Our unique reference for this payment (Payment.reference).
  reference: string;
  amountMinor: number;
  currency: string;
  /// Payer number, normalised to +231XXXXXXXX.
  msisdn: string;
  planName: string;
  /// Where the provider should send the teacher back to (redirect providers).
  returnUrl: string;
  /// Where the provider should POST an async status callback.
  callbackUrl: string;
};

export type StatusInput = {
  reference: string;
  externalRef: string | null;
  amountMinor: number;
  currency: string;
};

export interface PaymentGateway {
  id: ProviderId;
  label: string;
  /// Short line shown under the provider option (e.g. "Enter your PIN on your phone").
  hint: string;
  /// True when the required credentials are present in the environment.
  isConfigured(): boolean;
  initiate(input: InitiateInput): Promise<InitiateResult>;
  checkStatus(input: StatusInput): Promise<PaymentStatus>;
}
