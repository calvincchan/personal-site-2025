
# Copilot Instructions for AI Agents

## Project Overview

This is a Next.js 15.x site using TypeScript, Nextra, and TailwindCSS. It is structured for blog and portfolio content, with custom MDX components and conventions for authoring, styling, and metadata.

## Architecture & Key Patterns

- **MDX Blog Posts**:
  - Each post lives in its own directory, with a `page.mdx` file containing YAML frontmatter (see template below).
  - Use the provided frontmatter structure for metadata (`title`, `date`, `lastmod`, `description`, `tags`, `author`, `image`, etc.).
  - Do not add content to new `page.mdx` files until metadata is complete.

- **Custom Components**:
  - Blog rendering uses custom React components in `src/_components/` and `src/mdx-components.tsx`.
  - Metadata is validated and rendered via `Meta`, `BioCard`, and `DateOnly` components.
  - JSON-LD schema is injected for SEO in blog posts.

- **Styling**:
  - TailwindCSS is used with a custom prefix (`x:`) for all utility classes.
  - Global styles are in `src/globals.css`, with conventions for layout, blog, and project cards.

- **TypeScript**:
  - Types for blog metadata are in `src/types.ts`.
  - Path aliases: `@/*` → `src/*`, `@components/*` → `src/_components/*`.

## Developer Workflows

- **Local Development**:
  - Start with `npm run dev`.
  - Build with `npm run build`.
  - Production: `npm run start`.

- **Linting**:
  - ESLint is configured with Next.js and TypeScript plugins.
  - Enforced rule: use double quotes for JSX attributes.

- **Image Handling**:
  - Blog post images should be placed in `public/assets/` and referenced in frontmatter.
  - Image filenames should match the post directory name.

## Blog Post Creation Example

1. Ask for the blog post title.
2. Create a directory: lowercase, hyphenated (e.g., `my-new-blog-post`).
3. Add `page.mdx` with the following frontmatter:

```yaml
title: "My New Blog Post"
date: 2025-07-31
lastmod: 2025-07-31
description: "Brief description here."
tags:
  - nextjs
  - ai
author: Calvin
image: /assets/my-new-blog-post.png
alternates:
  canonical: /blog/my-new-blog-post
openGraph:
  type: article
  images:
    - url: /assets/my-new-blog-post.png
      width: 1600
      height: 900
```

4. Do not add content yet; focus on metadata.

## Conventions & Integration Points

- All blog metadata is validated for date format (`YYYY-MM-DD` or `YYYY/M/D`).
- Use only the provided custom components for blog rendering.
- External dependencies: Next.js, Nextra, TailwindCSS, dayjs, RSS.
- Images from `calvincchan.com` are allowed via Next.js remote patterns.

## References

- Key files:
  - `src/mdx-components.tsx` (MDX rendering logic)
  - `src/_components/` (custom React components)
  - `src/types.ts` (metadata types)
  - `src/globals.css` (global styles)
- For more, see [Nextra documentation](https://nextra.site/docs) and [Next.js documentation](https://nextjs.org/docs).

---

Please review and let me know if any section is unclear or missing important project-specific details.