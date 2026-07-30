import Link from "next/link";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { finalizePayment } from "@/lib/subscription";
import { getGateway } from "@/lib/payments";
import { PLANS } from "@/lib/plans";
import { PaymentStatusPoller } from "@/components/PaymentStatusPoller";

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ p?: string }>;
}) {
  const user = await requireUser();
  const { p } = await searchParams;
  if (!p) notFound();

  const found = await prisma.payment.findFirst({
    where: { id: p, userId: user.id },
  });
  if (!found) notFound();

  // Orange redirects back here after the hosted page; check once on load so a
  // completed payment shows instantly instead of waiting for the first poll.
  const payment = await finalizePayment(found);

  const planName = PLANS[payment.plan].name;
  const instruction =
    getGateway(payment.provider).id === "LONESTAR"
      ? "Check your phone for the Lonestar Cell MoMo prompt and enter your PIN to confirm the payment."
      : "Confirming your Orange Money payment…";

  return (
    <div className="mx-auto max-w-lg animate-fade-up">
      <Link
        href="/billing"
        className="text-sm font-medium text-ink-muted transition hover:text-ink"
      >
        ← Plans
      </Link>
      <div className="mt-4">
        <PaymentStatusPoller
          paymentId={payment.id}
          planName={planName}
          instruction={instruction}
        />
      </div>
    </div>
  );
}
