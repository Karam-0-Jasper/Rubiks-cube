import { RegisterForm } from "@/components/AuthForm";

export default function RegisterPage() {
  return (
    <div className="animate-fade-up">
      <h1 className="book-title text-3xl font-semibold">Create your account</h1>
      <p className="mt-2 text-ink-muted">
        Free to start. All lesson notes included.
      </p>
      <div className="mt-6">
        <RegisterForm />
      </div>
    </div>
  );
}
