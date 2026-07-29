import { RegisterForm } from "@/components/AuthForm";

export default function RegisterPage() {
  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Create your account</h1>
      <p className="mt-1 text-sm text-ink-muted">
        Free to start. All lesson notes included.
      </p>
      <div className="mt-6">
        <RegisterForm />
      </div>
    </div>
  );
}
