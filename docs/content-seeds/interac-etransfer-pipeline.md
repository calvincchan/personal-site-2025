---
title: "Automating Interac e-Transfer Reconciliation Without a Payment Processor"
date: 2026-06-07
type: blog-post
status: published
slug: interac-etransfer-automated-reconciliation
image: /assets/interac-etransfer-automated-reconciliation.png
---

## Dump

Built an automated Interac e-Transfer deposit handling pipeline for Familogue (a small local NGO).

Components:
- Monitor Gmail for Interac e-Transfer notification emails
- Auto-parse and file deposit records to own DB
- Trigger order payment confirmation flow
- Analytics on payment activity

## Angle

You can accept Interac e-Transfer payments in a SaaS product without Stripe or any payment processor — by owning the full pipeline from Gmail ingestion to DB reconciliation to order confirmation.

## Outline

- The problem: Interac has no API/webhook; manual reconciliation is a hassle for SMBs/NGOs
- The ingestion layer: Google Apps Script polls Gmail, detects Interac notification emails, POSTs payload to webhook
- Parsing the notification: extracting reference number + amount from standardized `notify@payments.interac.ca` emails
- DB + order confirmation flow: state machine, idempotency
- Analytics: reporting dashboard
- Tradeoffs: when to use this vs. Stripe

## Key points

**The problem:** Interac provides no API, no webhook, no consumer endpoint. Every bank sends notification emails — but the only practical ingestion point is the recipient's inbox. Manual confirmation is a bottleneck for any volume.

**Ingestion layer:** Google Apps Script (no IFTTT or third-party dependency) polls Gmail inbox, filters by subject `"Interac e-Transfer:"`, and POSTs full email payload (id, subject, sender, recipient, reply_to, date, plain body, HTML body) to a secured webhook endpoint. Auth via Bearer token stored in Script Properties. On success, labels thread `"forwarded"` and archives it.

```javascript
function forwardEtransferEmails() {
  const labelName = "forwarded";
  const webhookUrl = PropertiesService.getScriptProperties().getProperty(
    "WEBHOOK_URL",
  );
  const apiKey = PropertiesService.getScriptProperties().getProperty(
    "WEBHOOK_API_KEY",
  );

  if (!webhookUrl || !apiKey) {
    Logger.log("Missing WEBHOOK_URL or WEBHOOK_API_KEY in Script Properties.");
    return;
  }

  const label = GmailApp.getUserLabelByName(labelName) ||
    GmailApp.createLabel(labelName);

  const threads = GmailApp.getInboxThreads();

  for (const thread of threads) {
    const messages = thread.getMessages();

    for (const message of messages) {
      if (!message.getSubject().includes("Interac e-Transfer:")) continue;

      const payload = {
        id: message.getId(),
        subject: message.getSubject(),
        sender: message.getFrom(),
        recipient: message.getTo(),
        reply_to: message.getReplyTo(),
        date: message.getDate(),
        body: message.getPlainBody(),
        html: message.getBody()
      };

      try {
        const response = UrlFetchApp.fetch(webhookUrl, {
          method: "post",
          contentType: "application/json",
          headers: {
            "Authorization": "Bearer " + apiKey,
          },
          payload: JSON.stringify(payload),
          muteHttpExceptions: true,
        });

        if (
          response.getResponseCode() >= 200 && response.getResponseCode() < 300
        ) {
          message.getThread().addLabel(label);
          message.getThread().moveToArchive();
        } else {
          Logger.log(
            `Webhook failed: ${response.getResponseCode()} - ${response.getContentText()}`,
          );
        }
      } catch (e) {
        Logger.log("Webhook error: " + e.toString());
      }
    }
  }
}
```

**Parsing:** Emails from `notify@payments.interac.ca` use a standardized format. Extract the `Message` field (customer-entered reference number, e.g. `FS1071`) and `Amount`. No multi-bank format variations to handle.

**DB + order flow:** `pending → confirmed` when reference number matches `Message` field AND amount matches order total. Subsequent webhook deliveries for same email are ignored if order already `confirmed` — idempotency via status check before transition.

**Analytics:** Admin dashboard — payment received log, volume counts, period breakdowns (weekly/monthly). Operational visibility for the NGO, not deep BI.

**Tradeoffs:** Interac = zero transaction fees → right for Canadian SMBs, NGOs, small retail that already accept e-Transfer but hate manual reconciliation. This approach automates the accounting without touching Stripe. Stripe = better UX, instant confirmation, automated receipts — but costs 2.9%+. Use Stripe if you can absorb fees; use this if your customers already expect e-Transfer or fees are unacceptable.

## Tone notes

Follow site-strategy.md defaults — direct, confident, outcome-first. Include the Apps Script code snippet. Accessible to a non-developer SMB owner scanning for "can this work for my business" as well as a developer who wants to implement it.
