"use client";

import { useEffect, useMemo, useState } from "react";
import {
  necropsiaChapters,
  necropsiaIntro,
  type Control,
  type Group,
  type Question,
} from "@/lib/necropsia-schema";

type Answer = string | string[];
type SampleRow = Record<string, string>;

const STORAGE_KEY = "necropsia-formato-v1";
const SAMPLE_COLUMNS = [
  "No.",
  "Órgano / lesión",
  "Tipo de muestra",
  "Fijador / medio",
  "Estudio",
  "Observaciones",
];

const steps = necropsiaChapters.flatMap((chapter, chapterIndex) =>
  chapter.groups.map((group, groupIndex) => ({
    chapter,
    group,
    chapterIndex,
    groupIndex,
  })),
);

function emptySamples(): SampleRow[] {
  return Array.from({ length: 3 }, (_, index) => ({
    "No.": String(index + 1),
    "Órgano / lesión": "",
    "Tipo de muestra": "",
    "Fijador / medio": "",
    Estudio: "",
    Observaciones: "",
  }));
}

function isFilled(value: Answer | undefined) {
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value && value.trim());
}

function questionAnswered(question: Question, answers: Record<string, Answer>) {
  return question.controls.some((control) => {
    if (control.type === "dimensions") {
      return Array.from({ length: control.count }, (_, index) =>
        isFilled(answers[`${control.id}-${index}`]),
      ).some(Boolean);
    }
    return isFilled(answers[control.id]);
  });
}

function groupProgress(group: Group, answers: Record<string, Answer>, samples: SampleRow[]) {
  if (group.kind === "samples") {
    const filled = samples.filter((row) =>
      SAMPLE_COLUMNS.some((column) => column !== "No." && row[column]?.trim()),
    ).length;
    return { filled, total: Math.max(samples.length, 1) };
  }
  const filled = group.questions.filter((question) => questionAnswered(question, answers)).length;
  return { filled, total: group.questions.length };
}

export function NecropsiaForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [samples, setSamples] = useState<SampleRow[]>(emptySamples);
  const [ready, setReady] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const draft = JSON.parse(raw) as {
          answers?: Record<string, Answer>;
          samples?: SampleRow[];
          stepIndex?: number;
        };
        if (draft.answers) setAnswers(draft.answers);
        if (draft.samples?.length) setSamples(draft.samples);
        if (typeof draft.stepIndex === "number") {
          setStepIndex(Math.min(draft.stepIndex, steps.length - 1));
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ answers, samples, stepIndex }),
    );
    setSavedAt(
      new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" }),
    );
  }, [answers, samples, stepIndex, ready]);

  const step = steps[stepIndex];
  const progress = useMemo(() => {
    const totals = steps.map(({ group }) => groupProgress(group, answers, samples));
    const filled = totals.reduce((sum, item) => sum + item.filled, 0);
    const total = totals.reduce((sum, item) => sum + item.total, 0);
    return { filled, total, byStep: totals };
  }, [answers, samples]);

  function setText(id: string, value: string) {
    setAnswers((current) => ({ ...current, [id]: value }));
  }

  function toggleCheck(id: string, option: string) {
    setAnswers((current) => {
      const selected = Array.isArray(current[id]) ? current[id] : [];
      const next = selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option];
      return { ...current, [id]: next };
    });
  }

  function download() {
    const payload = {
      formato: "Descripción macroscópica de necropsia veterinaria",
      exportadoEn: new Date().toISOString(),
      secciones: necropsiaChapters.map((chapter) => ({
        titulo: chapter.title,
        grupos: chapter.groups.map((group) => {
          if (group.kind === "samples") {
            return {
              titulo: group.title,
              muestras: samples.filter((row) =>
                SAMPLE_COLUMNS.some((column) => column !== "No." && row[column]?.trim()),
              ),
            };
          }
          return {
            titulo: group.title,
            preguntas: group.questions.map((question) => ({
              pregunta: question.label,
              respuesta: question.controls.map((control) => readControl(control, answers)),
            })),
          };
        }),
      })),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `necropsia-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  function clearDraft() {
    if (!window.confirm("Se borrarán todas las respuestas guardadas en este navegador.")) return;
    setAnswers({});
    setSamples(emptySamples());
    setStepIndex(0);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-stone-900">
      <header className="border-b border-stone-300 bg-[#1f3d36] text-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-emerald-100/80 uppercase">
              Patología veterinaria
            </p>
            <h1 className="mt-1 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Descripción macroscópica de necropsia
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-emerald-50/80">
              Formato por órgano, segmento anatómico y capa tisular.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="mr-2 text-sm text-emerald-50/80">
              {progress.filled} de {progress.total} preguntas con respuesta
              {savedAt ? ` · guardado ${savedAt}` : ""}
            </p>
            <button
              type="button"
              onClick={download}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#1f3d36] hover:bg-emerald-50"
            >
              Descargar JSON
            </button>
            <button
              type="button"
              onClick={clearDraft}
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Limpiar
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-auto">
          <label className="mb-3 block text-sm font-medium text-stone-700 lg:hidden">
            Sección
            <select
              className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2"
              value={stepIndex}
              onChange={(event) => setStepIndex(Number(event.target.value))}
            >
              {steps.map((item, index) => (
                <option key={item.group.id} value={index}>
                  {item.chapter.title} — {item.group.title}
                </option>
              ))}
            </select>
          </label>
          <nav className="hidden space-y-4 lg:block" aria-label="Secciones del formato">
            {necropsiaChapters.map((chapter) => (
              <div key={chapter.id}>
                <p className="px-2 text-xs font-semibold tracking-wide text-stone-500 uppercase">
                  {chapter.title}
                </p>
                <ul className="mt-1 space-y-0.5">
                  {chapter.groups.map((group) => {
                    const index = steps.findIndex((item) => item.group.id === group.id);
                    const itemProgress = progress.byStep[index];
                    const active = index === stepIndex;
                    return (
                      <li key={group.id}>
                        <button
                          type="button"
                          onClick={() => setStepIndex(index)}
                          className={`flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left text-sm ${
                            active
                              ? "bg-[#1f3d36] text-white"
                              : "text-stone-700 hover:bg-white"
                          }`}
                        >
                          <span>{group.title}</span>
                          <span className={active ? "text-emerald-100" : "text-stone-400"}>
                            {itemProgress.filled}/{itemProgress.total}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <main className="min-w-0">
          <div className="mb-4 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-xs font-semibold tracking-wide text-[#1f3d36] uppercase">
              {step.chapter.title}
            </p>
            <h2 className="mt-1 text-xl font-semibold">{step.group.title}</h2>
            {step.chapterIndex === 0 && step.groupIndex === 0 ? (
              <p className="mt-3 text-sm leading-6 text-stone-600">{necropsiaIntro}</p>
            ) : null}
            {step.group.note ? (
              <p className="mt-3 text-sm leading-6 text-stone-600">{step.group.note}</p>
            ) : null}
          </div>

          {step.group.kind === "samples" ? (
            <SamplesTable rows={samples} onChange={setSamples} />
          ) : (
            <div className="space-y-4">
              {step.group.questions.map((question) => (
                <QuestionBlock
                  key={question.id}
                  question={question}
                  answers={answers}
                  onText={setText}
                  onToggle={toggleCheck}
                />
              ))}
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
              disabled={stepIndex === 0}
              className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium disabled:opacity-40"
            >
              Anterior
            </button>
            <p className="text-sm text-stone-500">
              {stepIndex + 1} / {steps.length}
            </p>
            <button
              type="button"
              onClick={() =>
                setStepIndex((current) => Math.min(steps.length - 1, current + 1))
              }
              disabled={stepIndex === steps.length - 1}
              className="rounded-full bg-[#1f3d36] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
            >
              Siguiente
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

function QuestionBlock({
  question,
  answers,
  onText,
  onToggle,
}: {
  question: Question;
  answers: Record<string, Answer>;
  onText: (id: string, value: string) => void;
  onToggle: (id: string, option: string) => void;
}) {
  return (
    <fieldset className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
      <legend className="px-1 text-sm font-semibold text-stone-900">{question.label}</legend>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {question.controls.map((control) => (
          <ControlField
            key={control.id}
            control={control}
            answers={answers}
            onText={onText}
            onToggle={onToggle}
          />
        ))}
      </div>
    </fieldset>
  );
}

function ControlField({
  control,
  answers,
  onText,
  onToggle,
}: {
  control: Control;
  answers: Record<string, Answer>;
  onText: (id: string, value: string) => void;
  onToggle: (id: string, option: string) => void;
}) {
  if (control.type === "checks" || control.type === "choice") {
    const selected = answers[control.id];
    const wide = control.options.length > 2 || control.type === "choice";
    return (
      <div className={wide ? "sm:col-span-2" : ""}>
        {control.type === "checks" && control.label ? (
          <p className="mb-2 text-sm font-medium text-stone-700">{control.label}</p>
        ) : null}
        <div className={control.type === "choice" ? "space-y-2" : "flex flex-wrap gap-2"}>
          {control.options.map((option) => {
            const checked =
              control.type === "choice"
                ? selected === option
                : Array.isArray(selected) && selected.includes(option);
            return (
              <label
                key={option}
                className={`cursor-pointer border text-sm ${
                  control.type === "choice"
                    ? "block rounded-xl px-3 py-2"
                    : "rounded-full px-3 py-1.5"
                } ${
                  checked
                    ? "border-[#1f3d36] bg-[#e7f0ec] text-[#1f3d36]"
                    : "border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-400"
                }`}
              >
                <input
                  className="sr-only"
                  type={control.type === "choice" ? "radio" : "checkbox"}
                  name={control.id}
                  checked={checked}
                  onChange={() => {
                    if (control.type === "choice") onText(control.id, option);
                    else onToggle(control.id, option);
                  }}
                />
                {option}
              </label>
            );
          })}
        </div>
      </div>
    );
  }

  if (control.type === "dimensions") {
    return (
      <div className="sm:col-span-2">
        <p className="mb-2 text-sm font-medium text-stone-700">
          Medidas {control.unit ? `(${control.unit})` : ""}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {Array.from({ length: control.count }, (_, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 ? <span className="text-stone-400">×</span> : null}
              <input
                inputMode="decimal"
                value={String(answers[`${control.id}-${index}`] ?? "")}
                onChange={(event) => onText(`${control.id}-${index}`, event.target.value)}
                className="w-24 rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-[#1f3d36]"
                aria-label={`Medida ${index + 1}`}
              />
            </span>
          ))}
        </div>
      </div>
    );
  }

  const value = typeof answers[control.id] === "string" ? String(answers[control.id]) : "";
  const inputId = control.id;
  const isDate = control.id.startsWith("fecha-y-hora");

  return (
    <label className={`block text-sm ${control.multiline ? "sm:col-span-2" : ""}`} htmlFor={inputId}>
      {control.label ? <span className="mb-1.5 block font-medium text-stone-700">{control.label}</span> : null}
      <span className="flex items-start gap-2">
        {control.multiline ? (
          <textarea
            id={inputId}
            rows={4}
            value={value}
            onChange={(event) => onText(control.id, event.target.value)}
            className="min-h-28 w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-[#1f3d36]"
          />
        ) : (
          <input
            id={inputId}
            type={isDate ? "datetime-local" : "text"}
            value={value}
            onChange={(event) => onText(control.id, event.target.value)}
            className="w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-[#1f3d36]"
          />
        )}
        {control.unit ? <span className="pt-2 text-stone-500">{control.unit}</span> : null}
      </span>
    </label>
  );
}

function SamplesTable({
  rows,
  onChange,
}: {
  rows: SampleRow[];
  onChange: (rows: SampleRow[]) => void;
}) {
  function update(rowIndex: number, column: string, value: string) {
    onChange(rows.map((row, index) => (index === rowIndex ? { ...row, [column]: value } : row)));
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-separate border-spacing-y-2 text-sm">
          <thead>
            <tr>
              {SAMPLE_COLUMNS.map((column) => (
                <th key={column} className="px-2 text-left font-medium text-stone-600">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {SAMPLE_COLUMNS.map((column) => (
                  <td key={column} className="px-1">
                    <input
                      value={row[column] ?? ""}
                      onChange={(event) => update(rowIndex, column, event.target.value)}
                      aria-label={`${column}, fila ${rowIndex + 1}`}
                      className="w-full rounded-lg border border-stone-300 px-2 py-2 outline-none focus:border-[#1f3d36]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={() =>
          onChange([
            ...rows,
            {
              "No.": String(rows.length + 1),
              "Órgano / lesión": "",
              "Tipo de muestra": "",
              "Fijador / medio": "",
              Estudio: "",
              Observaciones: "",
            },
          ])
        }
        className="mt-3 rounded-full border border-stone-300 px-4 py-2 text-sm font-medium hover:bg-stone-50"
      >
        Agregar muestra
      </button>
    </div>
  );
}

function readControl(control: Control, answers: Record<string, Answer>) {
  if (control.type === "dimensions") {
    const measures = Array.from({ length: control.count }, (_, index) =>
      String(answers[`${control.id}-${index}`] ?? ""),
    );
    return {
      campo: "Tamaño",
      valor: measures.join(" × "),
      unidad: control.unit ?? "",
    };
  }
  if (control.type === "checks") {
    const selected = answers[control.id];
    return {
      campo: control.label ?? "Opciones",
      valor: Array.isArray(selected) ? selected : [],
    };
  }
  if (control.type === "choice") {
    return { campo: "Severidad", valor: answers[control.id] ?? "" };
  }
  return {
    campo: control.label ?? "Respuesta",
    valor: typeof answers[control.id] === "string" ? answers[control.id] : "",
    unidad: control.unit ?? "",
  };
}
