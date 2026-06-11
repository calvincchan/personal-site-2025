"use server";

import { Resend } from "resend";

export type SubscribeState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function subscribeEmail(
  _prev: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  const email = (formData.get("email") as string | null)?.trim() ?? "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error("RESEND_API_KEY or RESEND_AUDIENCE_ID is not set");
    return { status: "error", message: "Subscription service is not configured." };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.contacts.create({
    audienceId,
    email,
    unsubscribed: false,
  });

  if (error) {
    // 409 duplicate or validation_error for already-subscribed — treat as success
    const err = error as { statusCode?: number; name?: string };
    if (err.statusCode === 409 || err.name === "validation_error") {
      return { status: "success" };
    }
    console.error("Resend contacts error:", error);
    return { status: "error", message: "Failed to subscribe. Please try again." };
  }

  return { status: "success" };
}
