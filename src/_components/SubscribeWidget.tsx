"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useActionState, useEffect } from "react";
import { subscribeEmail, type SubscribeState } from "@/app/subscribe/actions";

const initialState: SubscribeState = { status: "idle" };

export function SubscribeWidget() {
  const [state, action, isPending] = useActionState(subscribeEmail, initialState);

  useEffect(() => {
    if (state.status === "success") {
      sendGAEvent("event", "email_subscribe");
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="x:rounded x:border x:border-green-400 x:bg-green-50 x:dark:bg-green-950 x:p-6 x:text-green-800 x:dark:text-green-200">
        <p className="x:font-semibold">You&apos;re subscribed!</p>
        <p className="x:text-sm x:mt-1">I&apos;ll be in touch next time I publish something worth your attention.</p>
      </div>
    );
  }

  return (
    <div className="x:rounded x:border x:border-neutral-200 x:dark:border-neutral-700 x:bg-neutral-50 x:dark:bg-neutral-900 x:p-6">
      <p className="x:font-semibold x:mb-1">Stay in the loop</p>
      <p className="x:text-sm x:text-neutral-600 x:dark:text-neutral-400 x:mb-4">
        Practical posts on AI tooling, TypeScript, and full-stack dev — when I publish, not on a schedule.
      </p>
      <form action={action} className="x:flex x:gap-2 x:flex-col x:sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
          className="x:rounded x:border x:border-neutral-300 x:dark:border-neutral-600 x:bg-white x:dark:bg-neutral-800 x:px-3 x:py-2 x:text-sm x:flex-1 x:focus:outline-none x:focus:ring-2 x:focus:ring-primary-600"
        />
        <button
          type="submit"
          disabled={isPending}
          className="x-button x:disabled:opacity-60 x:disabled:cursor-not-allowed x:whitespace-nowrap"
        >
          {isPending ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {state.status === "error" && (
        <p className="x:mt-2 x:text-sm x:text-red-600 x:dark:text-red-400">{state.message}</p>
      )}
    </div>
  );
}
