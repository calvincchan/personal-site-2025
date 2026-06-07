---
name: add-seed
description: Capture a new blog content idea or learning into docs/content-seeds/ as a minimal seed file. Use when user invokes /add-seed or wants to jot down a blog idea, project learning, or content thought.
---

# add-seed

Capture a raw content idea into the pipeline. Fast — no grilling, no enrichment.

## Steps

1. **Parse input** — user provides freeform text as the argument. If none provided, ask: "What's the idea?"

2. **Derive title and filename slug**
   - Infer a short descriptive title from the text (5–8 words max)
   - Derive a kebab-case filename slug from the title
   - Filename: `YYYY-MM-DD-filename-slug.md` (today's date)
   - Target: `docs/content-seeds/YYYY-MM-DD-filename-slug.md`
   - Check if file exists — if yes, append `-2` suffix

3. **Write the seed file**

```markdown
---
title: "[Inferred title]"
date: YYYY-MM-DD
type: blog-post
status: raw
slug: 
image: 
---

## Dump

[User's freeform text, preserved verbatim or lightly cleaned for readability. Do not interpret, analyse, or expand.]
```

Leave `slug:` and `image:` blank — set during `process-seeds`.

4. **Confirm** — output:
```
Seed created: docs/content-seeds/YYYY-MM-DD-filename-slug.md
Run /process-seeds when ready to develop it.
```

## Rules

- Do not ask clarifying questions. Capture and file.
- Do not infer angles, outlines, or recommendations. That's `process-seeds`.
- Do not set `slug:` or `image:` — those require deliberate decisions.
