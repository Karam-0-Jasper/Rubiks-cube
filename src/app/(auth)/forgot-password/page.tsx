import { ForgotPasswordForm } from "@/components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="animate-fade-up">
      <h1 className="book-title text-3xl font-semibold">Forgot your password?</h1>
      <p className="mt-2 text-ink-muted">
        Enter the email on your account and we&apos;ll send you a 6-digit code
        to set a new password.
      </p>
      <div className="mt-6">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
