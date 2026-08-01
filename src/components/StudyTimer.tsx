"use client";

import { useEffect, useRef, useState } from "react";

/// Tracks how long the teacher has actively used the app. Time only counts
/// while the tab is visible. "Today" resets each calendar day; the running
/// total is kept as well and shown on hover. Stored in localStorage, so it is
/// private to the device and needs no account data.

const KEY = "nuvex_study_time";
const TICK_SECONDS = 15;

type Store = { date: string; today: number; total: number };

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function load(): Store {
  if (typeof window === "undefined") return { date: todayStr(), today: 0, total: 0 };
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw) as Store;
      if (s.date !== todayStr()) return { date: todayStr(), today: 0, total: s.total ?? 0 };
      return { today: s.today ?? 0, total: s.total ?? 0, date: s.date };
    }
  } catch {
    // fall through to a fresh store
  }
  return { date: todayStr(), today: 0, total: 0 };
}

function format(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m`;
  return "just started";
}

export function StudyTimer() {
  const [store, setStore] = useState<Store | null>(null);
  const ref = useRef<Store>({ date: todayStr(), today: 0, total: 0 });

  useEffect(() => {
    ref.current = load();
    setStore({ ...ref.current });

    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      const s = ref.current;
      // Roll over at midnight.
      if (s.date !== todayStr()) {
        s.date = todayStr();
        s.today = 0;
      }
      s.today += TICK_SECONDS;
      s.total += TICK_SECONDS;
      try {
        window.localStorage.setItem(KEY, JSON.stringify(s));
      } catch {
        // ignore write failures (private mode, etc.)
      }
      setStore({ ...s });
    }, TICK_SECONDS * 1000);

    return () => window.clearInterval(id);
  }, []);

  if (!store) return null;

  return (
    <span
      className="hidden items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-xs font-medium text-ink-muted sm:inline-flex"
      title={`Total time on Nuvex: ${format(store.total)}`}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2 2" />
        <path d="M9 2h6" />
      </svg>
      <span className="text-ink">{format(store.today)}</span>
      <span className="text-ink-faint">today</span>
    </span>
  );
}
