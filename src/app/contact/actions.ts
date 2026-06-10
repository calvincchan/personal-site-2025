"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    return { status: "success" };
  }

  const name = (formData.get("name") as string).trim();
  const email = (formData.get("email") as string).trim();
  const projectType = formData.get("projectType") as string;
  const budget = formData.get("budget") as string;
  const timeline = formData.get("timeline") as string;
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project Type: ${projectType}`,
    `Budget: ${budget}`,
    `Timeline: ${timeline}`,
    message ? `Message:\n${message}` : null,
  ]
    .filter(Boolean)
    .join("\n\n");

  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: siteConfig.siteEmail,
    replyTo: email,
    subject: `New contact: ${projectType} — ${name}`,
    text: body,
  });

  if (error) {
    return { status: "error", message: error.message };
  }

  return { status: "success" };
}
