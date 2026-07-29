"use client";

import { useMemo, useState } from "react";

export type QuizItem = {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export function Quiz({ questions }: { questions: QuizItem[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce(
      (n, q) => (answers[q.id] === q.correctIndex ? n + 1 : n),
      0,
    );
  }, [answers, questions]);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  function choose(qid: string, oi: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qid]: oi }));
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div>
      <ol className="space-y-5">
        {questions.map((q, qi) => {
          const chosen = answers[q.id];
          return (
            <li
              key={q.id}
              className="rounded-card border border-line bg-surface-raised p-4"
            >
              <p className="font-medium">
                <span className="text-ink-faint">{qi + 1}. </span>
                {q.prompt}
              </p>
              <div className="mt-3 grid gap-2">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrect = oi === q.correctIndex;
                  let cls =
                    "border-line bg-surface hover:bg-surface-sunken";
                  if (submitted) {
                    if (isCorrect)
                      cls = "border-positive/50 bg-positive/10 text-ink";
                    else if (isChosen)
                      cls = "border-danger/50 bg-danger/10 text-ink";
                    else cls = "border-line bg-surface opacity-70";
                  } else if (isChosen) {
                    cls = "border-brand bg-brand-soft";
                  }
                  return (
                    <button
                      key={oi}
                      type="button"
                      onClick={() => choose(q.id, oi)}
                      disabled={submitted}
                      className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm transition ${cls}`}
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-current text-[11px] font-semibold">
                        {String.fromCharCode(65 + oi)}
                      </span>
                      <span>{opt}</span>
                      {submitted && isCorrect && (
                        <span className="ml-auto text-positive">✓</span>
                      )}
                      {submitted && isChosen && !isCorrect && (
                        <span className="ml-auto text-danger">✕</span>
                      )}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <p className="mt-3 rounded-lg bg-surface-sunken px-3 py-2 text-sm text-ink-muted">
                  <span className="font-medium text-ink">Why: </span>
                  {q.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-5 flex items-center gap-3">
        {!submitted ? (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90 disabled:opacity-50"
          >
            Check answers
          </button>
        ) : (
          <>
            <div className="rounded-xl bg-surface-sunken px-4 py-2.5 text-sm font-semibold">
              Score: {score}/{questions.length}
            </div>
            <button
              type="button"
              onClick={reset}
              className="rounded-xl border border-line px-4 py-2.5 text-sm font-semibold transition hover:bg-surface-sunken"
            >
              Try again
            </button>
          </>
        )}
        {!submitted && !allAnswered && (
          <span className="text-sm text-ink-faint">
            {questions.length - Object.keys(answers).length} left
          </span>
        )}
      </div>
    </div>
  );
}
