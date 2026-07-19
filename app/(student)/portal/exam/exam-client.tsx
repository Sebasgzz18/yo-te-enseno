"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TrafficSignIcon, type SignId } from "@/components/traffic-sign-icon";
import { submitExamAttempt } from "./actions";

interface PublicTextQuestion {
  id: string;
  type: "text";
  question: string;
  options: string[];
}

interface PublicSignQuestion {
  id: string;
  type: "sign";
  sign: SignId;
  question: string;
  options: string[];
  category: string;
}

type PublicQuizItem = PublicTextQuestion | PublicSignQuestion;

const OPTION_LETTERS = ["A", "B", "C", "D"];

export function ExamClient({
  attemptId,
  questions,
}: {
  attemptId: string;
  questions: PublicQuizItem[];
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const total = questions.length;
  const current = questions[currentIndex];
  const isLast = currentIndex === total - 1;
  const hasAnswered = answers[currentIndex] !== null;

  function selectOption(i: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = i;
      return next;
    });
  }

  async function goNext() {
    if (!isLast) {
      setCurrentIndex((i) => i + 1);
      return;
    }
    setSubmitting(true);
    setError(null);
    const result = await submitExamAttempt(
      attemptId,
      answers as number[]
    );
    if (result?.error) {
      setError(result.error);
      setSubmitting(false);
    }
  }

  return (
    <div className="surface-card mx-auto max-w-2xl rounded-3xl p-6 md:p-10">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-300">
          Pregunta {currentIndex + 1} de {total}
        </span>
        <span className="text-xs font-semibold text-lime-600">
          {Math.round(((currentIndex + 1) / total) * 100)}%
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-lime-500 to-lime-400 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>

      {current.type === "sign" && (
        <div className="mt-6 flex justify-center">
          <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink-100">
            <TrafficSignIcon sign={current.sign} className="h-full w-full" />
          </div>
        </div>
      )}

      <h3
        className={cn(
          "font-display text-lg font-semibold leading-snug text-navy-900 md:text-xl",
          current.type === "sign" ? "mt-5 text-center" : "mt-7"
        )}
      >
        {current.question}
      </h3>

      <div className="mt-6 flex flex-col gap-3">
        {current.options.map((option, i) => {
          const selected = answers[currentIndex] === i;
          return (
            <button
              key={option}
              type="button"
              onClick={() => selectOption(i)}
              className={cn(
                "flex items-center gap-3 rounded-2xl border px-4 py-4 text-left text-[15px] transition-all duration-200",
                selected
                  ? "border-lime-500 bg-lime-500/10 text-navy-900"
                  : "border-ink-100 bg-white text-ink-700 hover:border-navy-900/20 hover:bg-navy-900/[0.02]"
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-200",
                  selected ? "bg-lime-500 text-navy-900" : "bg-ink-100 text-ink-500"
                )}
              >
                {selected ? (
                  <CheckCircle2 className="h-4.5 w-4.5" strokeWidth={2.4} />
                ) : (
                  OPTION_LETTERS[i]
                )}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-orange-500/10 px-3 py-2 text-sm text-orange-600">
          {error}
        </p>
      )}

      <Button
        size="lg"
        variant="primary"
        className="btn-shine mt-8 w-full"
        disabled={!hasAnswered || submitting}
        onClick={goNext}
      >
        {submitting
          ? "Enviando..."
          : isLast
            ? "Finalizar examen"
            : "Siguiente"}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
