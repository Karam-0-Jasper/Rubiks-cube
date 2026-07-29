import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { finalizePayment } from "@/lib/subscription";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/// Polled by the confirmation page while a payment is pending. Re-checks the
/// provider, applies the outcome, and reports the current status.
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const { id } = await params;
  const payment = await prisma.payment.findFirst({
    where: { id, userId: user.id },
  });
  if (!payment) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const settled = await finalizePayment(payment);

  return NextResponse.json({
    status: settled.status,
    plan: settled.plan,
    failureReason: settled.failureReason,
  });
}
