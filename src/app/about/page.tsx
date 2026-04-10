import { siteConfig } from "@/lib/site-config";
import fs from 'fs';
import { Metadata } from "next";
import path from 'path';
import ReactMarkdown from 'react-markdown';

const RESUME_LOCAL_PATH = '/calvin-c-chan-resume.md';
const RESUME_FILE = path.join(process.cwd(), 'public', 'calvin-c-chan-resume.md');

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "url": `${siteConfig.siteUrl}/about`,
  "name": `About ${siteConfig.author}`,
  "mainEntity": {
    "@type": "Person",
    "name": siteConfig.author,
    "url": siteConfig.siteUrl,
    "email": siteConfig.siteEmail,
    "jobTitle": siteConfig.jobTitle,
    "description": siteConfig.siteDescription,
    "image": siteConfig.siteOgImage,
    "sameAs": siteConfig.sameAs,
    "hasCredential": {
      "@type": "DigitalDocument",
      "name": "Calvin C. Chan — Resume",
      "url": siteConfig.siteUrl + RESUME_LOCAL_PATH,
      "encodingFormat": "text/markdown",
      "description": "Downloadable resume in Markdown format",
    },
  },
};

export const metadata: Metadata = {
  title: "About Me",
  description: siteConfig.siteDescription,
  openGraph: {
    title: "About Me",
    description: siteConfig.siteDescription,
    url: siteConfig.siteUrl + "/about",
    siteName: "Calvin C. Chan",
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
    canonical: siteConfig.siteUrl + "/about",
    types: {
      'text/markdown': siteConfig.siteUrl + RESUME_LOCAL_PATH,
    },
  },
};

export default async function Page() {
  const raw = fs.readFileSync(RESUME_FILE, 'utf8');
  // Strip YAML frontmatter block
  const resumeContent = raw.replace(/^---[\s\S]+?---\n/, '');

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <header className="x-page-header">
        <h1>{metadata.title as string}</h1>
      </header>

      <div role="main" className="x:prose">

        <div className="x:flex x:gap-4 x:my-4">
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
        <ReactMarkdown>{resumeContent}</ReactMarkdown>
      </div>
    </div>
  );
}
