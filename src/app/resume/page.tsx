import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { siteConfig } from '@/lib/site-config';
import type { Metadata } from 'next';

const RESUME_LOCAL_PATH = '/calvin-c-chan-resume.md';
const RESUME_FILE = path.join(process.cwd(), 'public', 'calvin-c-chan-resume.md');

export const metadata: Metadata = {
  title: "Resume",
  description: "Full-stack TypeScript engineer with 20+ years building eCommerce, SaaS, and enterprise platforms.",
  openGraph: {
    title: "Resume — Calvin C. Chan",
    description: "Full-stack TypeScript engineer with 20+ years building eCommerce, SaaS, and enterprise platforms.",
    url: siteConfig.siteUrl + '/resume',
    siteName: siteConfig.author,
    type: "profile",
    images: [
      {
        url: siteConfig.siteOgImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: siteConfig.siteUrl + '/resume',
    types: {
      'text/markdown': siteConfig.siteUrl + RESUME_LOCAL_PATH,
    },
  },
};

export default function Page() {
  const raw = fs.readFileSync(RESUME_FILE, 'utf8');
  // Strip YAML frontmatter block
  const content = raw.replace(/^---[\s\S]+?---\n/, '');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Calvin C. Chan",
    "url": siteConfig.siteUrl,
    "email": "hello@calvincchan.com",
    "jobTitle": "Full-stack TypeScript Engineer",
    "hasCredential": {
      "@type": "DigitalDocument",
      "name": "Calvin C. Chan — Resume",
      "url": siteConfig.siteUrl + RESUME_LOCAL_PATH,
      "encodingFormat": "text/markdown",
      "description": "Downloadable resume in Markdown format",
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="x-page-header">
        <h1>Resume</h1>
        <h2>Full-stack TypeScript Engineer</h2>
      </header>

      <div className="x:flex x:gap-4 x:my-6">
        <a
          href={RESUME_LOCAL_PATH}
          download="calvin-c-chan-resume.md"
          className="x-button"
          type="text/markdown"
          aria-label="Download resume as Markdown file"
        >
          ↓ Download (.md)
        </a>
      </div>

      <div role="main" className="x:prose x:dark:prose-invert">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
