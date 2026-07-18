"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  RotateCcw,
  Send,
  ShieldCheck,
  SignpostBig,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn, whatsappUrlWithMessage } from "@/lib/utils";
import { EXAM_PASSING_SCORE, QUIZ_ITEMS, TEXT_SECTION_LENGTH } from "@/lib/exam-data";
import { TrafficSignIcon } from "@/components/traffic-sign-icon";

type Stage = "intro" | "quiz" | "lead" | "results";

const OPTION_LETTERS = ["A", "B", "C", "D"];

export function ExamSimulator() {
  const [stage, setStage] = React.useState<Stage>("intro");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    Array(QUIZ_ITEMS.length).fill(null)
  );
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const totalQuestions = QUIZ_ITEMS.length;
  const currentQuestion = QUIZ_ITEMS[currentIndex];
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const hasAnswered = answers[currentIndex] !== null;
  const isSignSection = currentIndex >= TEXT_SECTION_LENGTH;
  const justEnteredSignSection = currentIndex === TEXT_SECTION_LENGTH;

  const score = React.useMemo(
    () =>
      answers.reduce<number>(
        (total, answer, i) =>
          answer === QUIZ_ITEMS[i].correctIndex ? total + 1 : total,
        0
      ),
    [answers]
  );

  const passed = score >= EXAM_PASSING_SCORE;

  function selectOption(optionIndex: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  }

  function goNext() {
    if (isLastQuestion) {
      setStage("lead");
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hola, acabo de terminar el simulacro de examen teórico en la página.
Nombre: ${name}
Teléfono: ${phone}
Resultado: ${score}/${totalQuestions} (${passed ? "Aprobado" : "No aprobado"})
Me gustaría más información sobre sus cursos 🚗`;
    window.open(whatsappUrlWithMessage(message), "_blank", "noopener,noreferrer");
    setStage("results");
  }

  function reset() {
    setStage("intro");
    setCurrentIndex(0);
    setAnswers(Array(QUIZ_ITEMS.length).fill(null));
  }

  return (
    <div className="surface-card relative mx-auto max-w-2xl overflow-hidden rounded-3xl p-6 md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-[0.4]" />
      <div className="relative">
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-lime-600 shadow-card">
              <ShieldCheck className="h-7 w-7 text-navy-900" strokeWidth={1.8} />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-navy-900">
              ¿Listo para tu simulacro?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">
              {totalQuestions} preguntas basadas en el examen teórico real que
              aplicamos en Yo Te Enseño: conocimientos generales y
              reconocimiento de señales de tránsito.
            </p>

            <div className="mx-auto mt-6 grid max-w-sm grid-cols-2 gap-3">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-ink-100 bg-white px-4 py-4">
                <BookOpen className="h-5 w-5 text-orange-500" strokeWidth={1.8} />
                <p className="text-xs font-semibold text-navy-900">
                  {TEXT_SECTION_LENGTH} preguntas
                </p>
                <p className="text-[11px] text-ink-500">Conocimientos generales</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-ink-100 bg-white px-4 py-4">
                <SignpostBig className="h-5 w-5 text-lime-600" strokeWidth={1.8} />
                <p className="text-xs font-semibold text-navy-900">
                  {totalQuestions - TEXT_SECTION_LENGTH} señales
                </p>
                <p className="text-[11px] text-ink-500">Identificación visual</p>
              </div>
            </div>

            <Button
              size="lg"
              variant="primary"
              className="btn-shine mt-7"
              onClick={() => setStage("quiz")}
            >
              Comenzar simulacro
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {stage === "quiz" && (
          <motion.div
            key={`question-${currentIndex}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-300">
                {isSignSection ? (
                  <SignpostBig className="h-3.5 w-3.5 text-lime-600" strokeWidth={2} />
                ) : (
                  <BookOpen className="h-3.5 w-3.5 text-orange-500" strokeWidth={2} />
                )}
                {isSignSection ? "Señales de tránsito" : "Conocimientos generales"}
              </span>
              <span className="text-xs font-semibold text-lime-600">
                {currentIndex + 1}/{totalQuestions}
              </span>
            </div>
            <div className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
              <div
                className="absolute inset-y-0 z-10 w-[2px] bg-white"
                style={{
                  left: `${(TEXT_SECTION_LENGTH / totalQuestions) * 100}%`,
                }}
              />
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-lime-500 to-lime-400"
                initial={false}
                animate={{
                  width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {justEnteredSignSection && (
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-lime-500/10 px-4 py-2.5 text-xs font-semibold text-navy-900">
                <SignpostBig className="h-4 w-4 text-lime-600" strokeWidth={2} />
                Ahora identifica las señales de tránsito
              </div>
            )}

            {currentQuestion.type === "sign" && (
              <div className="mt-6 flex justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink-100">
                  <TrafficSignIcon sign={currentQuestion.sign} className="h-full w-full" />
                </div>
              </div>
            )}

            <h3
              className={cn(
                "font-display text-lg font-semibold leading-snug text-navy-900 md:text-xl",
                currentQuestion.type === "sign" ? "mt-5 text-center" : "mt-7"
              )}
            >
              {currentQuestion.question}
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {currentQuestion.options.map((option, i) => {
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
                        selected
                          ? "bg-lime-500 text-navy-900"
                          : "bg-ink-100 text-ink-500"
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

            <Button
              size="lg"
              variant="primary"
              className="btn-shine mt-8 w-full"
              disabled={!hasAnswered}
              onClick={goNext}
            >
              {isLastQuestion ? "Ver mi resultado" : "Siguiente"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {stage === "lead" && (
          <motion.form
            key="lead"
            onSubmit={handleLeadSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-center font-display text-2xl font-bold text-navy-900">
              ¡Ya terminaste! Un último paso
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-[15px] leading-relaxed text-ink-500">
              Déjanos tus datos para mostrarte tu resultado y platicar contigo
              por WhatsApp sobre cómo seguir preparándote.
            </p>

            <div className="mt-7 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="exam-name">Nombre</Label>
                <Input
                  id="exam-name"
                  placeholder="¿Cómo te llamas?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="exam-phone">Teléfono</Label>
                <Input
                  id="exam-phone"
                  type="tel"
                  placeholder="81 0000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              variant="primary"
              className="btn-shine mt-7 w-full"
            >
              Ver mi resultado
              <Send className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-center text-xs text-ink-300">
              Al continuar, abriremos WhatsApp con tu resultado listo para
              enviarnos.
            </p>
          </motion.form>
        )}

        {stage === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span
              className={cn(
                "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-card",
                passed
                  ? "bg-gradient-to-br from-lime-400 to-lime-600"
                  : "bg-gradient-to-br from-orange-400 to-orange-600"
              )}
            >
              {passed ? (
                <CheckCircle2 className="h-8 w-8 text-navy-900" strokeWidth={1.8} />
              ) : (
                <XCircle className="h-8 w-8 text-white" strokeWidth={1.8} />
              )}
            </span>

            <p className="mt-6 font-display text-4xl font-bold text-navy-900">
              {score}/{totalQuestions}
            </p>
            <p className="mt-2 font-display text-xl font-semibold text-navy-900">
              {passed ? "¡Aprobaste el simulacro!" : "Todavía no es un aprobado"}
            </p>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">
              {passed
                ? "Vas muy bien encaminado. Con un poco más de práctica llegas listo a tu examen real."
                : "No te preocupes, es justo para eso el simulacro. En Yo Te Enseño te ayudamos a repasar la teoría hasta que la domines."}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="primary" className="btn-shine">
                <a href="/#paquetes">
                  Ver paquetes
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={reset}>
                <RotateCcw className="h-4 w-4" />
                Repetir simulacro
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
