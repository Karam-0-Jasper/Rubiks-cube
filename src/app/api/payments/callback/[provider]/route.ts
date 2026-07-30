import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { finalizePayment } from "@/lib/subscription";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/// Async status callback from a mobile money provider. We do not trust the
/// callback body's claimed outcome — we only use it to identify which payment
/// changed, then re-query the provider through finalizePayment. That keeps a
/// spoofed callback from ever granting a plan.
export async function POST(
  req: Request,
  { params }: { params: Promise<{ provider: string }> },
) {
  await params; // provider is implied by the payment we look up.

  let body: Record<string, unknown> = {};
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    // Some providers send form-encoded callbacks; fall back to that.
    try {
      const form = await req.formData();
      body = Object.fromEntries(form.entries());
    } catch {
      body = {};
    }
  }

  // Providers name our reference differently: MTN echoes `externalId`, Orange
  // sends `order_id`. MTN's own transaction id may arrive as `referenceId`.
  const ref =
    (body.externalId as string) ??
    (body.order_id as string) ??
    (body.reference as string) ??
    null;
  const externalRef =
    (body.referenceId as string) ?? (body.txnid as string) ?? null;

  const payment = await prisma.payment.findFirst({
    where: {
      OR: [
        ...(ref ? [{ reference: ref }] : []),
        ...(externalRef ? [{ externalRef }] : []),
      ],
    },
  });

  // Always 200 so the provider does not retry indefinitely on unknown refs.
  if (!payment) return NextResponse.json({ received: true });

  try {
    await finalizePayment(payment);
  } catch (e) {
    console.error("Payment callback finalize error", e);
  }

  return NextResponse.json({ received: true });
}
