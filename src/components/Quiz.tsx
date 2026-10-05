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

  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length;
  const allAnswered = answeredCount === questions.length;

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
      <ol className="space-y-7">
        {questions.map((q, qi) => {
          const chosen = answers[q.id];
          return (
            <li key={q.id}>
              <fieldset>
                <legend className="flex gap-3 font-serif text-[1.05rem] leading-relaxed">
                  <span className="w-6 shrink-0 font-sans text-sm font-semibold tabular-nums text-ink-faint pt-1">
                    {qi + 1}.
                  </span>
                  <span>{q.prompt}</span>
                </legend>
                <div className="mt-2.5 grid gap-1.5 pl-9">
                  {q.options.map((opt, oi) => {
                    const isChosen = chosen === oi;
                    const isCorrect = oi === q.correctIndex;
                    let cls = "border-line hover:border-ink/40 hover:bg-surface-sunken";
                    let mark: string | null = null;
                    if (submitted) {
                      if (isCorrect) {
                        cls = "border-positive bg-positive/10";
                        mark = isChosen ? "Correct" : "Answer";
                      } else if (isChosen) {
                        cls = "border-danger bg-danger/10";
                        mark = "Your answer";
                      } else {
                        cls = "border-line text-ink-muted";
                      }
                    } else if (isChosen) {
                      cls = "border-brand bg-brand-soft";
                    }
                    return (
                      <button
                        key={oi}
                        type="button"
                        onClick={() => choose(q.id, oi)}
                        disabled={submitted}
                        aria-pressed={isChosen}
                        className={`flex w-full items-start gap-3 rounded-md border px-3 py-2 text-left text-[0.95rem] transition-colors ${cls}`}
                      >
                        <span
                          className={`mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[11px] font-semibold ${
                            isChosen && !submitted
                              ? "border-brand bg-brand text-brand-ink"
                              : "border-current"
                          }`}
                        >
                          {String.fromCharCode(65 + oi)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {mark && (
                          <span
                            className={`shrink-0 text-xs font-semibold ${
                              isCorrect ? "text-positive" : "text-danger"
                            }`}
                          >
                            {mark}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                {submitted && (
                  <p className="mt-2.5 ml-9 border-l-2 border-line pl-3 font-serif text-[0.98rem] leading-relaxed text-ink-muted">
                    {q.explanation}
                  </p>
                )}
              </fieldset>
            </li>
          );
        })}
      </ol>

      <div
        className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-5"
        aria-live="polite"
      >
        {!submitted ? (
          <>
            <button
              type="button"
              disabled={!allAnswered}
              onClick={() => setSubmitted(true)}
              className="btn btn-primary"
            >
              Check answers
            </button>
            <span className="text-sm text-ink-muted">
              {allAnswered
                ? "All questions answered."
                : `${answeredCount} of ${questions.length} answered`}
            </span>
          </>
        ) : (
          <>
            <p className="font-serif text-lg">
              Score: <strong>{score}</strong> out of {questions.length}
            </p>
            <button type="button" onClick={reset} className="btn btn-secondary">
              Try again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
