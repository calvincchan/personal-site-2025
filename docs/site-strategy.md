# Site Strategy & Mission Statement

> For Calvin C. Chan — calvincchan.com  
> Established: 2026-06-05

---

## Mission

Position Calvin as a senior full-stack developer who uses AI as a force-multiplier — available for fractional/ongoing contract work with SaaS founders and SMBs who need polished, production-grade delivery.

---

## The 3 Goals (priority order)

### 1. Win contract work

The site is a conversion tool first. Every page should move a potential client closer to hitting "Contact Me."

- **Positioning**: "AI-native full-stack developer for hire" — not "engineer who blogs"
- **Engagement model**: fractional/ongoing (ideal), project-based (acceptable)
- **Target client**: SaaS founders, SMBs — teams that need a senior developer with AI fluency, not a junior feature-builder
- **What to make explicit on the site**: availability, engagement model, what working with Calvin looks like

### 2. Demonstrate competence via blog

Blog posts are proof of capability, not a personal journal. Each post should function as a mini case study or technical evidence.

- Reframe posts as **Proof Posts**: problem → what was built → outcome/lesson
- Titles like "Reflecting on Completing the Coursera…" read as personal notes — reframe toward client-relevant insight
- AI experiments (local LLM, RAG, MCP, agents) are the strongest proof — they show early adoption + hands-on implementation, not just talk
- Posts about Supabase, auth, multi-tenant patterns are directly relevant to target clients

### 3. Showcase portfolio as evidence of "polished and delivered"

Projects section exists but is underused. Each project should answer: *what was the problem, what did I build, what does "polished" mean here?*

- Line Me Up, iconimg, iOS app — real shipped products, not toy demos
- Frame around: "I own the full lifecycle. Here's proof."

---

## Calvin's Edges (undersold, make them visible)

| Edge | Evidence in codebase | How to surface it |
|------|---------------------|-------------------|
| **AI-native workflow** | 15+ blog posts on local LLMs, RAG, MCP, agents — timestamped early 2024 | Lead with "I use AI to ship faster and better, not just talk about it" |
| **Full-lifecycle solo operator** | site intro: "architecture, implementation, deployment, maintenance" + "replaced legacy systems" | Say it explicitly in hero. Add a "How I Work" section. |
| **Real shipped products** | Line Me Up (open source), iconimg, iOS app | Project cards should show outcome + scale, not just name |
| **20+ years breadth** | Maritime ops, health records, eCommerce, SaaS, student info | Frame as: "I've seen enough systems to know what breaks — and I design to avoid it" |
| **Stack adaptability** | TypeScript core, but shipped across many domains | "I learn new stacks fast. My AI workflow means I'm productive in days, not months." |

---

## What to Change on the Site

### Hero section (`src/app/page.tsx`)
- Current: generic bio
- Add: explicit availability signal ("Open to contracts") + engagement model
- Change CTA from "Contact Me" → something more specific ("Let's talk about your project")

### `siteDescription` / `siteBio` (`src/lib/site-config.ts`)
- Current: "Full-stack TypeScript engineer with 20+ years..."
- Suggest: "AI-native full-stack developer. I design, build, and ship production-grade apps for SaaS teams and founders."

### Blog post framing
- Shift from learning-log titles → proof-post titles
- Add a "What I built" / "Outcome" section to existing AI posts
- Consider tagging posts: `proof-of-work`, `ai-experiment`, `tutorial`

### Projects section
- Add problem/outcome framing to each project card
- Prioritize projects that show full-lifecycle ownership

### Contact page
- State engagement model explicitly
- State what you do NOT do (e.g., no $500 weekend gigs)
- Make it easy to say "I need a senior contractor for 3 months"

---

## What NOT to Change

- The AI experiment blog posts — they are your strongest differentiator. Keep publishing.
- The resume download — useful for clients who want to vet you fast.
- The personal tone — you're a solo contractor, not an agency. Personality builds trust.
