"use client";

import { useActionState, useEffect } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const PROJECT_TYPES = [
  "SaaS build",
  "AI feature",
  "Automation",
  "Team embed",
  "Other",
];

const BUDGET_RANGES = ["<$5k", "$5–15k", "$15–50k", "$50k+", "Other"];

const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Exploring"];

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, action, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  useEffect(() => {
    if (state.status === "success" && window.gtag) {
      window.gtag("event", "contact_form_submit");
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="x:rounded x:border x:border-green-400 x:bg-green-50 x:dark:bg-green-950 x:p-6 x:text-green-800 x:dark:text-green-200">
        <p className="x:font-semibold x:text-lg">Message sent!</p>
        <p>Thanks for reaching out — I&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="x:flex x:flex-col x:gap-5">
      {/* Honeypot */}
      <input type="text" name="website" className="x:hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="x:flex x:flex-col x:gap-1">
        <label htmlFor="name" className="x:font-medium x:text-sm">
          Name <span className="x:text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="x:rounded x:border x:border-neutral-300 x:dark:border-neutral-600 x:bg-white x:dark:bg-neutral-800 x:px-3 x:py-2 x:text-sm x:w-full x:focus:outline-none x:focus:ring-2 x:focus:ring-primary-600"
        />
      </div>

      <div className="x:flex x:flex-col x:gap-1">
        <label htmlFor="email" className="x:font-medium x:text-sm">
          Email <span className="x:text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="x:rounded x:border x:border-neutral-300 x:dark:border-neutral-600 x:bg-white x:dark:bg-neutral-800 x:px-3 x:py-2 x:text-sm x:w-full x:focus:outline-none x:focus:ring-2 x:focus:ring-primary-600"
        />
      </div>

      <div className="x:flex x:flex-col x:gap-1">
        <label htmlFor="projectType" className="x:font-medium x:text-sm">
          Project type <span className="x:text-red-500">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className="x:rounded x:border x:border-neutral-300 x:dark:border-neutral-600 x:bg-white x:dark:bg-neutral-800 x:px-3 x:py-2 x:text-sm x:w-full x:focus:outline-none x:focus:ring-2 x:focus:ring-primary-600"
        >
          <option value="" disabled>Select…</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="x:flex x:flex-col x:gap-1">
        <label htmlFor="budget" className="x:font-medium x:text-sm">
          Budget range <span className="x:text-red-500">*</span>
        </label>
        <select
          id="budget"
          name="budget"
          required
          defaultValue=""
          className="x:rounded x:border x:border-neutral-300 x:dark:border-neutral-600 x:bg-white x:dark:bg-neutral-800 x:px-3 x:py-2 x:text-sm x:w-full x:focus:outline-none x:focus:ring-2 x:focus:ring-primary-600"
        >
          <option value="" disabled>Select…</option>
          {BUDGET_RANGES.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="x:flex x:flex-col x:gap-1">
        <label htmlFor="timeline" className="x:font-medium x:text-sm">
          Timeline <span className="x:text-red-500">*</span>
        </label>
        <select
          id="timeline"
          name="timeline"
          required
          defaultValue=""
          className="x:rounded x:border x:border-neutral-300 x:dark:border-neutral-600 x:bg-white x:dark:bg-neutral-800 x:px-3 x:py-2 x:text-sm x:w-full x:focus:outline-none x:focus:ring-2 x:focus:ring-primary-600"
        >
          <option value="" disabled>Select…</option>
          {TIMELINES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="x:flex x:flex-col x:gap-1">
        <label htmlFor="message" className="x:font-medium x:text-sm">
          Message <span className="x:text-neutral-400 x:text-xs">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="x:rounded x:border x:border-neutral-300 x:dark:border-neutral-600 x:bg-white x:dark:bg-neutral-800 x:px-3 x:py-2 x:text-sm x:w-full x:focus:outline-none x:focus:ring-2 x:focus:ring-primary-600 x:resize-y"
        />
      </div>

      {state.status === "error" && (
        <div className="x:rounded x:border x:border-red-400 x:bg-red-50 x:dark:bg-red-950 x:p-4 x:text-red-700 x:dark:text-red-300 x:text-sm">
          {state.message}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isPending}
          className="x-button x:disabled:opacity-60 x:disabled:cursor-not-allowed"
        >
          {isPending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
