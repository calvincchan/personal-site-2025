# Site Strategy

> For Calvin C. Chan — calvincchan.com
> Established: 2026-06-05 · Last revised: 2026-06-07

This document is the lighthouse for all content, copy, and design decisions on this site. When in doubt about a page, a post title, a CTA, or a layout choice — come here first.

---

## Mission

Position Calvin as a senior full-stack developer who uses AI as a force-multiplier — available for fractional and ongoing contract work with SaaS founders and SMBs who need polished, production-grade delivery.

The site is a conversion tool. Every page should move a potential client closer to hitting "Contact Me."

---

## Who's Reading This Site

**Primary visitor:** A SaaS founder or SMB decision-maker evaluating whether to hire a senior contractor. They arrive via a referral, a blog post, or a search. They are time-poor and sceptical.

**How they read:** They scan, not read. They look for signals — credentials, shipped work, clear pitch — before deciding whether to invest more time. If the pitch isn't visible above the fold, they leave.

**What triggers contact:** Confidence that Calvin can own a problem end-to-end without hand-holding. Not the tech stack list. Not the blog archive. The sense that they've found someone senior who delivers.

**Secondary visitor:** A developer or technical peer — via blog post, social, or referral. They read more deeply. They are not the conversion target, but a good post turns them into a referrer.

---

## The Positioning

Calvin is a **full-stack developer who applies AI to make business systems smarter and ship faster** — not an AI product builder, not a junior feature-coder, not a tech blogger.

The AI angle is a workflow multiplier, not a product speciality. "I use AI to move faster and build better" — not "I build AI products." Leading with tool names (RAG, MCP, agentic workflows) reads as an AI startup developer, which is the wrong signal for a contract full-stack hire. Let the blog posts prove the depth; the pitch pages stay outcome-first.

The 20+ years is not about tenure — it's about pattern recognition. "I've seen enough systems to know what breaks. I design to avoid it."

---

## Voice & Tone

**Direct.** Say the thing. Not "I strive to deliver quality" — say "I ship polished, production-grade software." Not "I'm passionate about AI" — say "I use AI to ship faster. Here's proof."

**Confident, not desperate.** No "Available Now" badges. No "I'd love to help!" No filler. The pitch quality carries the availability signal. If it needs to be stated, do it in prose on the contact page.

**Personal, not agency.** First person throughout. "I own the full lifecycle" — not "we deliver solutions." Calvin is a solo operator; personality builds trust that a polished agency front page cannot.

**Outcome language, not tech-showcase language.** Write for the person who needs a problem solved, not the developer who wants to know the stack. The stack is context, not the headline.

**Dry, not warm-fuzzy.** Approachable but not performatively enthusiastic. The tone of someone who knows their craft well enough not to over-explain it.

---

## The 3 Goals (priority order)

### 1. Win contract work

- **Engagement model:** fractional/ongoing (ideal), project-based (acceptable)
- **Target client:** SaaS founders, SMBs — teams that need a senior developer with AI fluency, not a junior feature-builder
- **What to make explicit:** availability, engagement model, what working with Calvin looks like

### 2. Demonstrate competence via blog

Blog posts are proof of capability, not a personal journal. Each post should function as a mini case study or technical evidence — a **Proof Post**.

- Structure: problem → what was built → outcome/lesson
- Titles like "Reflecting on Completing the Coursera…" read as personal notes — reframe toward client-relevant insight
- AI experiments (local LLM, RAG, MCP, agents) are the strongest proof — early adoption + hands-on impl, not just talk
- Posts about Supabase, auth, multi-tenant patterns are directly relevant to target clients

### 3. Showcase portfolio as evidence of "polished and delivered"

Each project should answer: *what was the problem, what did I build, what does "polished" mean here?*

- Line Me Up, iconimg, iOS app — real shipped products, not toy demos
- Frame around: "I own the full lifecycle. Here's proof."

---

## Calvin's Differentiators

These are undersold. Make them visible.

| Differentiator | Evidence | How to surface it |
|---|---|---|
| **AI-fluent workflow** | 15+ blog posts on local LLMs, RAG, MCP, agents — timestamped early 2024 | "I use AI to ship faster and better — here's the work to prove it" |
| **Full-lifecycle ownership** | "architecture, implementation, deployment, maintenance" + "replaced legacy systems" | Say it in the hero. Show it in project framing. |
| **Real shipped products** | Line Me Up (open source), iconimg, iOS app | Project cards show outcome + scale, not just name |
| **20+ years of pattern recognition** | Maritime ops, health records, eCommerce, SaaS, student info | "I've seen enough systems to know what breaks — I design to avoid it" |
| **Stack adaptability** | TypeScript core, shipped across many domains | "I learn new stacks fast. My AI workflow means I'm productive in days, not months." |

---

## Content Decision Test

Before publishing a post, adding a project, or changing copy — ask:

1. **Does this move a potential client toward Contact?** If no, it still might be worth publishing (secondary audience), but it should not take priority over content that does.
2. **Is the title written for the client or for the author?** "Reflecting on X" is for the author. "How I cut X by 40% using Y" is for the client.
3. **Does this sound like a business problem solver or an AI hobbyist?** Outcome language first. Tool names in the body, not the headline.
4. **Would a senior developer be embarrassed by it?** Polish matters. Half-finished demos and "just playing around" framing undercut the positioning.

---

## What This Site Is NOT

- A tech blog written for developers to impress other developers
- A portfolio of toy demos and learning projects
- An agency front (avoid "we", avoid cold corporate copy)
- An AI product company ("We build AI solutions" is not the pitch)
- A platform for broadcasting availability desperately ("Open to work", "Available Now" badges)

The AI experiment posts are the strongest differentiator — keep publishing. The resume download is useful — keep it. The personal tone is a feature — protect it.

---

## Backlog

### LOW — `src/app/work/page.tsx`

Dead file: redirects to `/projects`, all content commented out. Safe to delete; move redirect to `next.config` or sitemap.
