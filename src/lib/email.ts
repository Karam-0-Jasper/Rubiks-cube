import "server-only";

/// Minimal transactional email sender built on Resend's HTTP API, so there is
/// no SDK or SMTP setup — just two environment variables:
///   RESEND_API_KEY  — your Resend API key (https://resend.com)
///   EMAIL_FROM      — the verified from address, e.g. "Nuvex <noreply@yourdomain>"
/// If these are not set, email sending is disabled and callers are told so.

/// Read via bracket notation so the value is looked up at runtime rather than
/// inlined at build time. Vercel hides "Sensitive" environment variables from
/// the build step, so `process.env.EMAIL_FROM` (dot access) would be frozen as
/// undefined in the compiled output even though the value is present at
/// runtime. `process.env["EMAIL_FROM"]` is never inlined and reads the live
/// value.
function env(name: string): string | undefined {
  return process.env[name];
}

export function emailConfigured(): boolean {
  return Boolean(env("RESEND_API_KEY") && env("EMAIL_FROM"));
}

export async function sendEmail(opts: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = env("RESEND_API_KEY");
  const from = env("EMAIL_FROM");
  if (!apiKey || !from) {
    return { ok: false, error: "Email is not configured on the server." };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [opts.to],
        subject: opts.subject,
        text: opts.text,
        ...(opts.html ? { html: opts.html } : {}),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return { ok: false, error: `Email provider error (${res.status}). ${detail}`.trim() };
    }
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Failed to send email.",
    };
  }
}
