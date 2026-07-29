import { LoginForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
      <p className="mt-1 text-sm text-ink-muted">
        Log in to reach your lesson notes and Nyvora.
      </p>
      <div className="mt-6">
        <LoginForm />
      </div>
    </div>
  );
}
