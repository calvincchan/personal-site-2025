# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Serve production build
```

There are no test or lint scripts defined. ESLint is configured via `.eslintrc.json` and can be run with `npx eslint`.

## Stack

- **Next.js 15** with App Router
- **Nextra 4** — provides MDX processing, `getPageMap()`, page normalization, and blog theme primitives
- **Tailwind CSS v4** — all utility classes are prefixed with `x:` (e.g. `x:flex`, `x:text-lg`) to avoid conflicts with Nextra styles
- **TypeScript** with path aliases: `@/*` → `src/*`, `@components/*` → `src/_components/*`

## Architecture

### Content

Blog posts live at `src/app/blog/[slug]/page.mdx`. Projects live at `src/app/projects/[slug]/page.mdx`. Both use YAML frontmatter for metadata (title, date, description, tags, image, etc.).

Content is fetched server-side via Nextra's `getPageMap()` + `normalizePages()`. Helper functions `getPosts()` and `getProjects()` in `src/app/blog/utils.tsx` filter and sort these results.

### MDX rendering

`src/mdx-components.tsx` defines the MDX wrapper used for all `.mdx` pages. It injects JSON-LD schema, wraps content in `<article>`, and provides custom component overrides (YouTube, Audio, etc.).

### Site configuration

All global constants (author name, site URL, bio, resume URL) are in `src/lib/site-config.ts`. Use this as the single source of truth rather than hardcoding values elsewhere.

### Styling

Custom Tailwind utility classes (`.x-container`, `.x-button`, `.x-hero`, etc.) are defined in `src/globals.css`. Nextra default styles are also imported there.

### SEO / feeds

- `src/app/sitemap.ts` — dynamic sitemap
- `src/app/robots.ts` — robots.txt
- `src/app/feed.xml/route.tsx` — RSS feed
- Google Analytics via `@next/third-parties` (GA ID in `.env`)
