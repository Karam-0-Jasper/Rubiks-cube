"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "Explain the laws of indices in a way my Grade 10 class will follow.",
  "Give me a five-minute lesson starter on the water cycle.",
  "Turn 'the causes of the 1847 independence' into three exam questions.",
  "Simplify supply and demand for students who find it hard.",
];

export function Nyvora({
  initialRemaining,
  initialLimit,
  planName,
}: {
  initialRemaining: number;
  initialLimit: number;
  planName: string;
}) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [remaining, setRemaining] = useState(initialRemaining);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    if (remaining <= 0) {
      setError("You have used all your Nyvora messages for this period.");
      return;
    }
    setError(null);

    const nextMessages: Msg[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(nextMessages);
    setInput("");
    setBusy(true);

    // Optimistically reserve one message.
    setRemaining((r) => Math.max(0, r - 1));

    // Placeholder assistant message we stream into.
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/nyvora", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, conversationId }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 429) {
          setRemaining(0);
          setError(data.message ?? "You are out of messages for this period.");
        } else {
          setError(data.error ?? "Nyvora could not respond. Try again.");
        }
        // Roll back the optimistic reservation and placeholder.
        setRemaining((r) => (res.status === 429 ? 0 : r + 1));
        setMessages((m) => m.slice(0, -1));
        setBusy(false);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      let metaParsed = false;

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        let chunk = decoder.decode(value, { stream: true });

        if (!metaParsed) {
          acc += chunk;
          const match = acc.match(/^\s*META:([a-z0-9]+)\s*/i);
          if (match) {
            setConversationId(match[1]);
            metaParsed = true;
            chunk = acc.slice(match[0].length);
            acc = "";
          } else {
            // Wait for the meta frame to complete.
            continue;
          }
        }

        if (chunk) {
          setMessages((m) => {
            const copy = [...m];
            copy[copy.length - 1] = {
              role: "assistant",
              content: copy[copy.length - 1].content + chunk,
            };
            return copy;
          });
        }
      }
    } catch {
      setError("Connection lost. Please try again.");
      setMessages((m) => m.slice(0, -1));
      setRemaining((r) => r + 1);
    } finally {
      setBusy(false);
    }
  }

  const empty = messages.length === 0;

  return (
    <div className="flex h-[calc(100vh-9rem)] flex-col rounded-card border border-line bg-surface-raised">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm font-bold text-brand-ink">
            Ny
          </span>
          <div>
            <div className="text-sm font-semibold">Nyvora</div>
            <div className="text-xs text-ink-faint">Your teaching assistant</div>
          </div>
        </div>
        <div className="text-right text-xs">
          <div className="font-semibold text-ink">
            {remaining}
            <span className="font-normal text-ink-faint">
              {" "}
              / {initialLimit} left
            </span>
          </div>
          <div className="text-ink-faint">{planName} plan</div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
        {empty ? (
          <div className="mx-auto max-w-md py-8 text-center">
            <h2 className="text-lg font-semibold">
              How can I help you prepare?
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              Ask for an explanation, a lesson starter, extra examples, or
              questions to set.
            </p>
            <div className="mt-5 grid gap-2 text-left">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  disabled={busy || remaining <= 0}
                  className="rounded-xl border border-line px-3.5 py-2.5 text-sm text-ink-muted transition hover:bg-surface-sunken hover:text-ink disabled:opacity-50"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={
                  m.role === "user"
                    ? "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-brand px-4 py-2.5 text-sm text-brand-ink"
                    : "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-surface-sunken px-4 py-2.5 text-sm"
                }
              >
                {m.content || (
                  <span className="inline-flex gap-1">
                    <Dot /> <Dot /> <Dot />
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {error && (
        <div className="mx-4 mb-2 rounded-lg border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
          {error}
          {remaining <= 0 && (
            <a href="/billing" className="ml-1 font-semibold underline">
              Upgrade
            </a>
          )}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="border-t border-line p-3"
      >
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            rows={1}
            placeholder={
              remaining > 0
                ? "Ask Nyvora anything about your lesson…"
                : "You are out of messages for this period."
            }
            disabled={busy || remaining <= 0}
            className="max-h-32 flex-1 resize-none rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={busy || remaining <= 0 || !input.trim()}
            className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

function Dot() {
  return (
    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-ink-faint" />
  );
}
