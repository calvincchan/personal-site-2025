"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

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
  const email = (formData.get("email") as string).trim().toLowerCase();
  const projectType = formData.get("projectType") as string;
  const budget = formData.get("budget") as string;
  const timeline = formData.get("timeline") as string;
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !projectType || !budget || !timeline) {
    return { status: "error", message: "All required fields must be filled." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return { status: "error", message: "Email service is not configured. Please email me directly." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

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
    from: `Contact Form <${siteConfig.siteEmail}>`,
    to: siteConfig.siteEmail,
    replyTo: email,
    subject: `New contact: ${projectType} — ${name}`,
    text: body,
  });

  if (error) {
    console.error("Resend error:", error);
    return { status: "error", message: "Failed to send message. Please try again or email me directly." };
  }

  return { status: "success" };
}
