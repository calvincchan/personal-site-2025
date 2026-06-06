# Skill: add-project

Add a new project case study to the site by fetching GitHub data and conducting a structured interview.

## Invocation

```
/add-project <github-url>
```

Example: `/add-project https://github.com/calvincchan/line-me-up`

---

## What this skill does

1. Fetches GitHub repo metadata and README
2. Interviews the user through 5 structured sections
3. Generates a complete TSX page at `src/app/projects/[slug]/page.tsx`

---

## Step 1 — Fetch GitHub data

Parse the GitHub URL to extract `owner` and `repo`. Then run:

```bash
gh api repos/{owner}/{repo}
gh api repos/{owner}/{repo}/readme --jq '.content' | base64 -d
```

Extract from API response:
- `name` → slug candidate (kebab-case)
- `description` → default project description
- `language` → primary language
- `topics` → tags
- `html_url` → GitHub link
- `homepage` → live site link (may be empty)

Use the README as context throughout the interview — do not copy it verbatim.

---

## Step 2 — Determine slug

Slug = repo name in kebab-case (usually already is). Confirm with user if ambiguous.

Target file: `src/app/projects/[slug]/page.tsx`

Check if that file already exists. If yes, warn the user and ask to confirm overwrite.

---

## Step 3 — Interview

Conduct a relentless interview across 5 sections. Rules:

- Ask one question at a time. Wait for the answer.
- Dig on vague answers. Challenge generalities. Push for specifics.
- Use the README as context — reference it when asking ("Your README mentions X — tell me more about why you chose that approach")
- Track coverage for each section internally. When a section has enough specificity, say "Good — I have enough for [Section]. Moving to [Next Section]." User can say "go deeper" to continue or "move on" to skip.
- Never accept "it works" or "standard approach" as final answers for key decisions. Ask why, what the alternative was, what broke, what surprised you.

### Section 1: Problem

Goal: Understand the real-world pain, who had it, and why existing solutions were insufficient.

Opening: "What problem does [repo name] solve? Who has this problem?"

Dig on:
- Why didn't an existing tool solve it?
- What was the user doing before this existed?
- What's the cost of the problem (time, money, frustration)?
- Is this a personal itch or did you build it for someone?

### Section 2: Decisions

Goal: Surface 2–4 key architectural or product decisions that show judgment and ownership.

Opening: "What were the 2–3 most important decisions you made building this? Start with the one you agonized over most."

Dig on:
- What were the alternatives you considered?
- Why did you reject them?
- Did you change your mind mid-build? What made you pivot?
- What would you do differently now?
- Any constraints (time, budget, existing infra) that shaped decisions?

### Section 3: What I Built

Goal: Concrete scope — features, system boundaries, what "done" looked like.

Opening: "Walk me through what you actually built. Not the pitch — the system."

Dig on:
- What are the main components or modules?
- What did you explicitly decide NOT to build? Why?
- What's the hardest technical part that's invisible to users?
- How long did it take?

### Section 4: Evidence of Polish

Goal: Visuals and proof of production-grade delivery.

Ask:
- "Do you have a demo video or YouTube link for this project? If so, provide the URL."
- "List any screenshot filenames you'll add to the project folder (e.g., dashboard.png, mobile-view.png). Say 'none' if you'll skip images for now."
- "Is there a live URL where this is deployed?"
- "Any metrics? (users, uptime, performance numbers, stars, etc.)"

### Section 5: Outcome

Goal: What happened after you shipped? What does this prove about you?

Opening: "This is shipped — what happened next? Who uses it? What changed?"

Dig on:
- Is it actively maintained or archived?
- Did anyone else contribute or fork it?
- What does this project prove you can do that another project doesn't?
- One sentence: what would you want a client to take away from reading this case study?

---

## Step 4 — Collect media details

After the interview, explicitly confirm:

```
Before I generate the page, I need a few details:

1. YouTube video ID (the part after ?v=): _______ (or "none")
2. Screenshot filenames to include: _______ (or "none")
3. Live site URL: _______ (or "none")
4. Tags (comma-separated, e.g. TypeScript,React,Next.js): _______
   (I'll pre-fill from GitHub topics: [topics from API])
```

---

## Step 5 — Generate TSX

Use this template. Fill all placeholders from interview answers.

### Icon mapping

Only these icons are available in `src/_icons/`:
- `GitHubIcon` — always include for the GitHub link
- `ReactIcon` — React
- `NextJsIcon` — Next.js
- `SupabaseIcon` — Supabase
- `RefineJsIcon` — Refine.js

For any other tech (e.g. TypeScript, Python, PostgreSQL), include in `techStack` with `icon: undefined` (no icon prop).

### Template

```tsx
import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import Link from "next/link";
// Only import ImageZoom if screenshots exist
// import { ImageZoom } from "nextra/components";
// Only import YouTube if video exists
// import { YouTube } from "src/_components/YouTube";
// Import only the icons you use
import { GitHubIcon /*, NextJsIcon, ReactIcon, SupabaseIcon, RefineJsIcon */ } from "src/_icons";
import { ProjectCaseStudy } from "../_components/ProjectCaseStudy";
// Import screenshots if provided
// import DashboardImage from "./dashboard.png";

export const metadata: Metadata = {
  title: "[Project Title]",
  description: "[One sentence — the problem this solves and for whom]",
  keywords: [
    "[keyword1]",
    "[keyword2]",
  ],
  alternates: {
    canonical: siteConfig.siteUrl + "/projects/[slug]",
  },
  other: {
    published: "true",
    tags: "[TypeScript,React,Next.js]", // comma-separated, no spaces
  },
};

export default function Page() {
  return (
    <ProjectCaseStudy
      title={metadata.title as string}
      description={metadata.description as string}
      links={[
        {
          label: "View on GitHub",
          href: "[github-url]",
          icon: <GitHubIcon />,
          target: "_blank",
        },
        // Add live site link if homepage exists:
        // {
        //   label: "Live Site",
        //   href: "[homepage-url]",
        //   target: "_blank",
        // },
      ]}
      techStack={[
        // List tech with icons where available, name-only where not
        // { name: "React", icon: <ReactIcon className="" /> },
        // { name: "Next.js", icon: <NextJsIcon className="" /> },
        // { name: "TypeScript" },
      ]}
    >
      {/* YouTube embed — only if video provided */}
      {/* <YouTube id="[video-id]" /> */}

      <h2>Problem</h2>
      <p>[2-3 paragraphs from Section 1 interview. Concrete, specific. Who had this pain. What they did before. Why it mattered.]</p>

      <h2>Key Decisions</h2>
      <p>[Narrative covering 2-4 decisions from Section 2. Each decision: what the choice was, what the alternative was, why this path. Written as connected prose, not bullet points.]</p>

      <h2>What I Built</h2>
      <p>[Scope, main components, what was explicitly excluded, hardest invisible part. From Section 3.]</p>

      {/* Screenshots — only if filenames provided */}
      {/* <ImageZoom src={DashboardImage} alt="[descriptive alt]" width={800} height={500} /> */}

      <h2>Evidence of Polish</h2>
      <p>[Metrics, deployment details, live URL, anything that proves production-grade. From Section 4 + any metrics from Section 5.]</p>

      <h2>Outcome</h2>
      <p>[What happened after shipping. Usage, impact, maintenance status. The one takeaway a client should have. From Section 5.]</p>

      <h3>Work with me</h3>
      <p>
        Interested in a similar build? <Link href="/contact">Contact me</Link> — I offer a free 30-minute consultation.
      </p>
    </ProjectCaseStudy>
  );
}
```

---

## Step 6 — Write the file

Write the generated TSX to `src/app/projects/[slug]/page.tsx`.

After writing, output:

```
Done. Created src/app/projects/[slug]/page.tsx.

Next steps:
1. Drop any screenshot files into src/app/projects/[slug]/
2. Uncomment and update the ImageZoom imports/refs for each screenshot
3. Run `npm run dev` and review at http://localhost:3000/projects/[slug]
4. Commit and push when satisfied
```

Do NOT create a PR, push, or run the dev server.
