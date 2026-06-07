# Seed: Interac e-Transfer deposit pipeline for Familogue

Date: 2026-06-07
Type: blog-post
Priority: high

## Raw idea

Built an automated Interac e-Transfer deposit handling pipeline for Familogue.

Components:
- Monitor Gmail for Interac e-Transfer notification emails
- Auto-parse and file deposit records to own DB
- Trigger order payment confirmation flow
- Analytics on payment activity

## Why interesting

Real business problem: accepting Interac without Stripe or a payment processor middleman. End-to-end ownership — email ingestion, DB design, business logic, analytics.

## Possible angles

- "How I automated Interac e-Transfer reconciliation for a SaaS product — without Stripe"
- Proof post: full-lifecycle ownership, real shipped system, SMB-relevant

## Open questions

- What was the hardest part? Parsing email formats? Reliability? Idempotency?
- What DB schema / state machine for payment status?
- Any edge cases with Interac email format variations?
- Analytics: what metrics surfaced, how used?
