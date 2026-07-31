import { ResetPasswordForm } from "@/components/AuthForm";

export default function ResetPasswordPage() {
  return (
    <div className="animate-fade-up">
      <h1 className="book-title text-3xl font-semibold">Reset a password</h1>
      <p className="mt-2 text-ink-muted">
        Owner-only. Enter the admin key, the account to reset, and a new
        password.
      </p>
      <div className="mt-6">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
