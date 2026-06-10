"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { siteConfig } from "@/lib/site-config";

export function BookingButton() {
  return (
    <a
      href={siteConfig.calComUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="x-button-ghost x:focus-visible:ring-2 x:focus-visible:ring-primary-700 x:focus-visible:ring-offset-2"
      onClick={() => sendGAEvent("event", "booking_click")}
    >
      Book a Call ↗
    </a>
  );
}
