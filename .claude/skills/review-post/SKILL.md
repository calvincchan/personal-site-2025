---
name: review-post
description: Review a blog post draft against site-strategy.md, voice/tone guidelines, and AEO best practices. Reports findings with specific suggestions. Use when user invokes /review-post or wants to review a blog post before publishing.
---

# review-post

Quality gate before publishing. Checks strategy alignment, voice, and discoverability.

## Invocation

```
/review-post [slug]
```

If no slug provided, find the most recently modified `page.mdx` under `src/app/blog/`.

## Step 1 — Read inputs

Read in parallel:
- `src/app/blog/[slug]/page.mdx`
- `docs/site-strategy.md`

## Step 2 — Run checks

Report findings per category. For each issue: quote the offending text → state the problem → suggest the fix.

### A. Title check
- Is it client-first? (outcome/benefit language, not "Reflecting on…" / "My experience with…")
- Is it specific? (avoids "Using AI" — names the tool/outcome)
- Does it match the `description` field?

### B. Proof post structure
- Does it follow: problem → what was built → outcome/lesson?
- Is there a concrete opening hook (no throat-clearing)?
- Does each section add new information (no restatement)?

### C. Voice and tone (site-strategy.md)
- Direct — no hedging ("I tried to", "sort of", "kind of")
- Outcome language — no tech-showcase-first ("I used X" → reframe as "X solved Y")
- Personal, not agency — first person throughout, no "we"
- Dry, not warm-fuzzy — flag performative enthusiasm ("exciting!", "I'm passionate about")

### D. Frontmatter completeness
- `title` — present, under 70 chars
- `description` — present, under 160 chars, outcome language
- `tags` — at least 4 tags
- `keywords` — at least 4 keyword phrases (title-case, AEO-targeted)
- `author` — `Calvin C. Chan`
- `alternates.canonical` — correct slug
- `date` — present

### E. AEO basics (placeholder — full AEO skill deferred)
- H2 headings — are they question-shaped or answer-shaped? (AI engines prefer "How I solved X" over "Background")
- Does the opening paragraph directly answer the core question of the post?
- Are there any lists or structured content that AI engines can extract?

## Step 3 — Score and summarise

```
## Review: [slug]

### Must fix (blocks publishing)
- [issue + suggestion]

### Should fix (quality)  
- [issue + suggestion]

### Nice to have
- [issue + suggestion]

Overall: [PASS / NEEDS WORK / REWRITE]
```

PASS = no must-fix items.
NEEDS WORK = 1–3 must-fix items.
REWRITE = structural proof-post issues or voice completely off.

## Rules

- Quote exact text when flagging. No vague "improve the opening."
- Suggest concrete rewrites, not directions.
- Do not rewrite the entire post unprompted — flag issues, let the user decide.
- AEO section is advisory only until the full AEO skill is built.
