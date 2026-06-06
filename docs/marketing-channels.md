# Marketing Channels

Content published to calvincchan.com should be relayed to these channels. Pipelines are deferred — this doc tracks the channel list and relay intent.

---

## Active Channels

| Channel | URL | Content Type | Relay Status |
|---------|-----|-------------|--------------|
| LinkedIn | https://www.linkedin.com/in/calvincchan | Long-form posts, project announcements, career positioning | Deferred |
| GitHub | https://github.com/calvincchan | Code repos, README updates, project releases | Deferred |
| YouTube | https://www.youtube.com/@calvincchan | Video walkthroughs, demos, screen recordings | Deferred |

## Candidate Channels (high-value, not yet set up)

| Channel | Why | Content Type | Priority |
|---------|-----|-------------|----------|
| **Dev.to** | High organic reach for technical posts. AI + TypeScript audience. Cross-posting friendly — canonical URL preserves SEO. | Blog posts (Proof Posts) | High |
| **Hacker News (Show HN)** | Strong signal when launching projects. Line Me Up, iconimg would qualify for Show HN. | Project launches only | High |
| **X / Twitter** | Fast distribution for short AI experiment notes. Links back to full posts. | Short-form + links | Medium |
| **Bluesky** | Growing tech/dev community migrating from X. Low effort if X is already set up. | Short-form + links | Medium |
| **Reddit** (r/LocalLLaMA, r/MachineLearning, r/webdev) | Targeted reach. Local LLM and RAG posts would land well in r/LocalLLaMA. | Selective post sharing | Medium |
| **Substack** | Newsletter format for longer pieces. Builds subscriber list = owned audience. | Monthly digest or long-form | Low (future) |
| **Product Hunt** | Project launches. Line Me Up is a good candidate. | Project launches only | Low (future) |

---

## Relay Pipeline Notes

- Personal site = **source of truth**. All content originates here.
- Relay = repurpose/summarize for each channel's format. Do not duplicate verbatim (SEO + platform fit).
- LinkedIn: paste full post text + link. AI-experiment posts perform well.
- Dev.to: cross-post with `canonical_url` pointing to calvincchan.com.
- YouTube: Proof Posts with demos → record a short walkthrough video, embed back on the blog post.
- GitHub: project posts should link to or reference the corresponding repo README.

---

## Future Automation Ideas

- RSS feed (`/feed.xml`) already exists — use it as trigger for relay pipelines (n8n, Zapier, Make).
- LinkedIn and X APIs support programmatic posting — automate announce on publish.
- Dev.to API supports cross-post via API with canonical URL.
