import { LoginForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="animate-fade-up">
      <h1 className="book-title text-3xl font-semibold">Welcome back</h1>
      <p className="mt-2 text-ink-muted">
        Log in to reach your lesson notes and Nyvora.
      </p>
      <div className="mt-6">
        <LoginForm />
      </div>
    </div>
  );
}
