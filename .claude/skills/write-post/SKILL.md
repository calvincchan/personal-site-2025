---
name: write-post
description: Write a blog post MDX file from a ready content seed. Reads enriched seed from docs/content-seeds/, writes to src/app/blog/[slug]/page.mdx. Use when user invokes /write-post or wants to generate a blog post draft from a prepared seed.
---

# write-post

Generate the MDX blog post from an enriched seed. No interviews — all content decisions were made in `process-seeds`.

## Step 1 — Find the seed

List files in `docs/content-seeds/` with `status: ready`.

If multiple, list them and ask: "Which seed should I write?"
If one, confirm: "Writing post from: [title]. Proceed?"

## Step 2 — Read inputs

Read in parallel:
- The chosen seed file (title, slug, image, angle, outline, key points, tone notes, dump)
- `.claude/skills/write-post/blog-post-template.mdx` — frontmatter schema and structure reference
- One recent post from `src/app/blog/` for prose tone calibration (pick the most recent `page.mdx`)

## Step 3 — Write the MDX

Target path: `src/app/blog/[slug]/page.mdx`

Check if file exists — if yes, warn and ask to confirm overwrite.

**Frontmatter rules:**
- `title` — from seed (refined during grilling)
- `date` / `lastmod` — today's date
- `description` — one sentence, max 160 chars, outcome language, no "In this post..."
- `tags` — 5–8 lowercase kebab tags derived from content
- `keywords` — 4–6 title-case keyword phrases for AEO (what a user would ask an AI engine)
- `author` — always `Calvin C. Chan`
- `image` — from seed `image:` field; omit the field entirely if blank
- `alternates.canonical` — `/blog/[slug]`
- `openGraph` — only include if `image:` is set

**Prose rules (from site-strategy.md voice):**
- Direct. No throat-clearing. Drop reader into context immediately.
- Outcome language. Problem → what was built → result/lesson.
- No "I decided to" without explaining why.
- No "standard approach" without naming the alternative.
- Dry, not warm-fuzzy. Confident, not desperate.
- First person throughout.
- Each section adds new information — no restatement.

**Structure:**
- Opening paragraph (no heading) — hook with the problem or situation
- H2 sections from seed outline
- Each section driven by seed key points — expand into prose, add specifics
- Optional `## Takeaway` if conclusion isn't already clear
- No `## Introduction` or `## Conclusion` headings

## Step 4 — Update seed status

After writing the file, update the seed:
```
status: published
```

## Step 5 — Output next steps

```
Done. Created src/app/blog/[slug]/page.mdx

Next steps:
1. Drop OG image into public/assets/[slug].png (if applicable)
2. Run /review-post to check against site strategy and AEO guidelines
3. Run `npm run dev` and review at http://localhost:3000/blog/[slug]
4. Commit and push when satisfied
```

Do NOT run the dev server, create a PR, or push.
