# Handoff: calvincchan.com Site Strategy Optimizations

**Date:** 2026-06-06  
**Repo:** `/Users/calvin/GitHub/personal-site-2025`  
**Branch:** `main`  
**Focus:** Execute the optimization backlog from `docs/site-strategy.md`

---

## Context

A strategy session was completed for Calvin C. Chan's personal site (calvincchan.com). The session established positioning, goals, and a prioritized backlog of copy/content changes across the site.

**Do NOT re-derive strategy.** Read the artifacts below instead.

### Key artifacts (read these first)

| File | What it contains |
|------|-----------------|
| `CONTEXT.md` | Domain glossary — canonical terms (AI-Fluent Workflow, Engagement Model, Proof Post, Target Client, etc.) |
| `docs/site-strategy.md` | Full mission statement, 3 goals, edges, and the **Optimization Backlog** section |
| `docs/marketing-channels.md` | Channel list (LinkedIn, GitHub, YouTube + candidates) — deferred, do not action |
| `src/lib/site-config.ts` | Already updated: jobTitle, siteTitle, siteDescription, siteBio, intro |
| `src/app/page.tsx` | Already updated: hero subtitle + CTA button text |

---

## What Was Already Done (do not redo)

- `site-config.ts`: `jobTitle` → "AI-Fluent Full-Stack Developer", `siteTitle`, `siteDescription`, `siteBio`, `intro` all updated
- `page.tsx`: hero subtitle → "Available for fractional and contract engagements…", CTA → "Let's Talk"
- `CONTEXT.md` created (glossary only)
- `docs/site-strategy.md` created (strategy + backlog)
- `docs/marketing-channels.md` created (deferred)

---

## Your Task: Execute the Optimization Backlog

The full backlog is in `docs/site-strategy.md` under **"Optimization Backlog (for agent execution)"**. Execute all items. Summary below for quick reference:

### HIGH priority

1. **Contact page** — `src/app/contact/page.tsx`
   - Update `h2` subtitle to: "Available for fractional and contract engagements — let's discuss your project."
   - Add a "What I can help with" section: SaaS builds, AI feature integration, full-lifecycle development, team embed
   - Remove generic filler from existing copy

2. **Home page sections** — `src/app/page.tsx`
   - "Topics" section intro → "Proof-of-work posts: AI experiments, engineering decisions, and lessons from real projects."
   - "My Projects" section intro → "Shipped projects — from open-source tooling to production SaaS. Each one owned end-to-end."

### MEDIUM priority

3. **Projects index** — `src/app/projects/page.tsx`
   - `description` → "Production-grade projects built and shipped end-to-end — SaaS tools, AI experiments, and open-source software."

4. **Blog index** — `src/app/blog/page.tsx`
   - `description` → "Hands-on posts on AI tooling, TypeScript, and full-stack development — written by a practitioner, not a commentator."

5. **About page** — `src/app/about/page.tsx`
   - Add 2-3 sentence positioning blurb above the resume download (AI-fluent, contract-focused, full-lifecycle ownership)

6. **Line Me Up project CTA** — `src/app/projects/line-me-up/page.tsx` line ~95
   - Replace "I'd be happy to discuss" filler with: "Interested in a customized version? [Contact me](/contact) — I offer a free 30-minute consultation."

### LOW priority

7. **Home page JSON-LD** — `src/app/page.tsx`
   - Add `knowsAbout` array to Person schema: `["TypeScript", "React", "Supabase", "Next.js", "AI agents", "RAG", "MCP", "Node.js"]`

8. **Dead file** — `src/app/work/page.tsx`
   - Just a `permanentRedirect("/projects")` with all content commented out
   - Confirm with user before deleting — may have historical reason to keep

---

## Tone & Constraints

- **No vibe-coder language.** Never say "I'd be happy to", "I leverage AI", "passion for", etc.
- **Canonical term**: "AI-Fluent" — not AI-native, AI-assisted, AI-powered. See `CONTEXT.md`.
- **Engagement model**: fractional/ongoing contract — not full-time, not agency.
- **Target client**: SaaS founders and SMBs. Not enterprise. Not a specific vertical.
- **Stack**: TypeScript, React, Node.js, Supabase, Next.js — but adaptable.
- No emojis unless already present in the file.
- Canadian English spelling (e.g. "behaviour", "colour") — but keep "-ize"/"-ization" endings.

---

## Tech Stack (for context)

- Next.js 15, App Router
- Nextra 4 (MDX, blog primitives)
- Tailwind CSS v4 with `x:` prefix
- TypeScript, path alias `@/*` → `src/*`
- `src/lib/site-config.ts` = single source of truth for all global constants

---

## Suggested Skills

- No specific skills required for this task — direct file edits only.
- If copy decisions feel ambiguous, use `grill-with-docs` to ask Calvin before writing.
- After completing edits, consider running `npm run build` to verify no TypeScript/build errors.

---

## Done Condition

All items in the backlog executed. Update `docs/site-strategy.md` — mark each backlog item as `[x]` when complete.
