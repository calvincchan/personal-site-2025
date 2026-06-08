---
name: process-seeds
description: Review raw content seeds in docs/content-seeds/, recommend the best one to develop, grill the user to build a full writing brief, and update the seed file ready for write-post. Use when user invokes /process-seeds or wants to develop a content idea into a writing brief.
---

# process-seeds

Turn a raw seed into a ready-to-write brief. One seed per session.

## Step 1 — List and score raw seeds

Read all files in `docs/content-seeds/` with `status: raw`.

Score each seed on two axes (read `docs/site-strategy.md` first):
- **Client value** — does this move a potential client toward Contact? (proof post structure, outcome language, SMB/SaaS relevance)
- **Recency** — older seeds score slightly higher (been waiting longer)

Present top 3 with one-line reasoning each:

```
1. [title] — [why high client value]
2. [title] — [why]
3. [title] — [why]

Recommendation: #1. Proceed with this one? (or say which you prefer)
```

Wait for user confirmation.

## Step 2 — Grill

Set `status: grilling` in the chosen seed file.

Conduct a relentless interview. Walk down each branch of the writing brief, resolving dependencies one-by-one. One question at a time. Wait for each answer.

For each question, provide your recommended answer derived from the seed dump and site-strategy.md. Let the user confirm, redirect, or override.

### Questions to resolve (in order):

**Slug**
"What should the URL slug be? Aim for keyword-rich, no date. E.g. `interac-etransfer-nodejs-pipeline`"
→ Recommend: derive from the seed's primary keyword or most concrete outcome phrase.
→ Record as `slug:` in frontmatter.

**Angle**
"What's the ONE thing a reader should take away? Frame it as a client takeaway, not a learning log."
→ Recommend: identify the strongest concrete outcome in the seed dump (a specific result, decision, or technique) and propose it as the spine. If the seed mentions a measurable result, lead with that.
→ This becomes the post's spine.

**Target title**
"Draft a title. Client-first, outcome language. No 'Reflecting on…' or 'My journey…'"
→ Recommend: draft a title from the agreed angle. Offer it for the user to confirm or tweak.
→ Record as the refined `title:` in frontmatter.

**Outline**
"What are the 3–5 main sections? Just headings."
→ Recommend: propose headings derived from the seed dump's natural structure or the problem → solution → outcome arc.

**Key points**
"For each section — what's the ONE most important concrete detail? No generalities."
→ Recommend: pull the most specific detail from the dump for each proposed section. Name tools, numbers, decisions, or outcomes explicitly.
→ Push back on: "standard approach", "it works", "various techniques". Demand specifics.

**Tone notes**
"Anything specific about voice for this post? (e.g. more technical, more narrative, code-heavy)"
→ Recommend: site-strategy.md defaults (direct, confident, outcome-first) unless the dump signals otherwise — note if it does.
→ Default: follow site-strategy.md voice guidelines — direct, confident, outcome-first.

**Image**
"OG image filename? Convention: `{slug}.png`. Say 'skip' to leave blank."
→ Recommend: `{agreed-slug}.png`.
→ Record as `image: /assets/{slug}.png` or leave blank.

## Step 3 — Update seed file

Rewrite the seed file in place with enriched content:

```markdown
---
title: "[Refined title]"
date: YYYY-MM-DD
type: blog-post
status: ready
slug: keyword-rich-slug
image: /assets/keyword-rich-slug.png
---

## Dump

[Original dump preserved verbatim]

## Angle

[The one takeaway from grilling]

## Outline

- [H2 heading 1]
- [H2 heading 2]
- [H2 heading 3]
...

## Key points

**[Section 1]:** [Most important concrete detail]
**[Section 2]:** [Most important concrete detail]
...

## Tone notes

[Any specific voice direction, or "Follow site-strategy.md defaults"]
```

## Step 4 — Hand off

```
Seed ready: docs/content-seeds/YYYY-MM-DD-filename-slug.md
Run /write-post to generate the MDX draft.
```

## Rules

- Read `docs/site-strategy.md` before scoring. Client value is judged against the primary visitor model.
- Never accept vague answers on Key points. Concrete details only.
- One question at a time. No batching.
- Grilling ends when all sections have specific, usable answers — not before.
