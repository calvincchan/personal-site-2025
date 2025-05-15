## MDX Frontmatter Format
To ensure your MDX files are properly formatted and structured, please adhere to the following guidelines for the frontmatter:
- The frontmatter should be in YAML format.
- The frontmatter should follow the structure below:
```yaml
title: "Enhance Your VSCode AI Code Agent For Free: How To Integrate Context7 With VSCode"
date: 2025-05-09
lastmod: 2025-05-09
description: "Discover how integrating Context7 with VSCode-Insider's Agent Mode revolutionizes coding by providing real-time, accurate documentation, reducing errors, and enhancing productivity."
tags:
  - ai
  - Context7
  - VSCode-Insider
  - code agent
  - AI coding assistant
keywords:
  - Context7 VSCode integration
  - VSCode-Insider Agent Mode
  - AI code documentation
  - Code agent enhancement
  - AI coding assistant
author: Calvin
image: /assets/250509-context7-vscode-insider.png
alternates:
  canonical: /blog/250509-context7-vscode-insider
openGraph:
  type: article
  images:
    - url: /assets/250509-context7-vscode-insider.png
      width: 1600
      height: 900
```

## Creating New Blog Posts
When creating new blog posts, please follow these steps:
1. Ask user for the blog post title.
2. Create a new directory width the title in lowercase and hyphenated format (e.g., `my-new-blog-post`).
3. Create a new MDX file named `page.mdx` inside the newly created directory.
4. Copy the frontmatter template above into the `page.mdx` file.
5. Replace the placeholders in the frontmatter with the actual content:
   - `title`: The title of the blog post.
   - `date`: The date of publication in `YYYY-MM-DD` format.
   - `lastmod`: The last modified date in `YYYY-MM-DD` format.
   - `description`: A brief description of the blog post.
   - `tags`: A list of relevant tags for the blog post. Use lowercase and hyphenated format (e.g., `react-native`, `ai`, `code-agent`).
   - `keywords`: A list of keywords related to the blog post.
   - `author`: The author's name.
   - `image`: The path to the featured image for the blog post. The image filename should be identical to the directory name (e.g., `my-new-blog-post.png`).
   - `alternates.canonical`: The canonical URL for the blog post. The image filename should be the same as `image`.
6. Do not write any content in the `page.mdx` file yet; just focus on the frontmatter.