import { ResetPasswordForm } from "@/components/AuthForm";

export default function ResetPasswordPage() {
  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Reset a password</h1>
      <p className="mt-1 text-sm text-ink-muted">
        Owner-only. Enter the admin key, the account to reset, and a new
        password.
      </p>
      <div className="mt-6">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
