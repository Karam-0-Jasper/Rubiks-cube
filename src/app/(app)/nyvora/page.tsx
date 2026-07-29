import { requireUser } from "@/lib/auth";
import { getQuota } from "@/lib/quota";
import { PLANS } from "@/lib/plans";
import { Nyvora } from "@/components/Nyvora";

export default async function NyvoraPage() {
  const user = await requireUser();
  const quota = await getQuota(user);

  return (
    <div className="animate-fade-up">
      <Nyvora
        initialRemaining={quota.remaining}
        initialLimit={quota.limit}
        planName={PLANS[quota.plan].name}
      />
    </div>
  );
}
