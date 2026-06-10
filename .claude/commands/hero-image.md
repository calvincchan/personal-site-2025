---
description: Generate a hero image prompt for a blog post. Accepts a subject and outputs a ready-to-use AI image generation prompt.
---

# hero-image

Generate a hero image prompt for a blog post.

## Steps

1. **Get subject** — use the argument provided by the user as `$ARGUMENTS`. If empty, ask: "What is the subject of the hero image?"

2. **Output prompt** — print the following block verbatim, with `[subject]` replaced by the user's subject:

---

A 16:9 aspect ratio minimalist blog header image. The entire background is a completely solid, flat, vibrant medium-tone purple-violet with the exact hex color #8046E6. Centered perfectly on the canvas is a single, isolated [subject]. The subject is rendered in a clean, crisp, pure black and white photorealistic style with fine mechanical or structural details and realistic textures, completely free of any color or color casts. The subject is captured from a slight three-quarter overhead angle, sitting on an invisible surface with absolutely no drop shadows, reflections, or grounding lines beneath it, creating a floating effect. The composition is highly spacious, leaving generous, clean empty space above and to the sides for a blog title overlay. No human faces, no words, no text, and no numbers are visible anywhere on the subject.

---

3. **Done** — no further action. User copies prompt into their image generation tool.

## Rules

- Do not modify the prompt template wording — output it exactly.
- Do not ask clarifying questions beyond getting the subject.
- Do not suggest image generation tools or offer to generate the image.
