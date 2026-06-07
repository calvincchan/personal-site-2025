import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profilePic from 'public/images/calvincchan-profile.png';
import { getPosts } from "./blog/utils";
import { ProjectCard } from "./projects/project-card";
import { getProjects } from "./projects/utils";

export function generateMetadata(): Metadata {
  return {
    title: {
      default: siteConfig.siteTitle,
      template: `%s | ${siteConfig.author}`
    },
    description: siteConfig.siteDescription,
    openGraph: {
      title: siteConfig.author,
      description: siteConfig.siteDescription,
      url: siteConfig.siteUrl,
      siteName: siteConfig.author,
      type: 'website',
      images: [
        {
          url: siteConfig.siteOgImage,
          width: 640,
          height: 640,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: siteConfig.author,
      description: siteConfig.siteDescription,
      images: siteConfig.siteOgImage,
      creator: siteConfig.author,
    },
    alternates: {
      canonical: siteConfig.siteUrl,
    },
  };
}

const ProjectsJsonLd: React.FC = async () => {
  const projects = await getProjects();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projects by Calvin C. Chan",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.frontMatter.title,
        "description": project.frontMatter.description,
        "url": `https://calvincchan.com${project.route}`,
        "applicationCategory": "WebApplication",
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": siteConfig.author,
  "url": siteConfig.siteUrl,
  "email": siteConfig.siteEmail,
  "jobTitle": siteConfig.jobTitle,
  "description": siteConfig.siteDescription,
  "image": siteConfig.siteOgImage,
  "sameAs": siteConfig.sameAs,
  "knowsAbout": ["TypeScript", "React", "Supabase", "Next.js", "AI agents", "RAG", "MCP", "Node.js"],
};

const SERVICES = [
  "SaaS MVP builds — from architecture to launch",
  "Business process automation — agentic workflows that cut manual ops",
  "Full-lifecycle development — architecture, implementation, and deployment",
  "Team embed — senior contractor who hits the ground running",
];

export default async function Page() {
  const [posts, projects] = await Promise.all([getPosts(), getProjects()]);

  return (
    <div className="x-top-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ProjectsJsonLd />

      {/* Above fold: identity left, pitch right */}
      <section className="x:grid x:grid-cols-1 x:md:grid-cols-5 x:gap-12 x:my-16 x:sm:my-32">
        <div className="x:md:col-span-2 x:flex x:flex-col x:items-start x:gap-5">
          <Image
            src={profilePic}
            alt={siteConfig.author}
            width={96}
            height={96}
            className="x:rounded-2xl x:bg-primary-700"
            priority
          />
          <div>
            <h1 className="x:text-2xl x:font-semibold x:my-0">{siteConfig.author}</h1>
            <p className="x:text-neutral-500 x:text-sm x:mt-1">{siteConfig.jobTitle}</p>
          </div>
          <div className="x:flex x:gap-4">
            <a
              href={siteConfig.sameAs[0]}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Calvin's GitHub profile (opens in new tab)"
              className="x:text-sm x:text-neutral-500 x:hover:text-neutral-900 x:dark:hover:text-neutral-100 x:transition-colors x:focus-visible:ring-2 x:focus-visible:ring-primary-700 x:rounded"
            >
              GitHub ↗
            </a>
            <a
              href={siteConfig.sameAs[1]}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Calvin's LinkedIn profile (opens in new tab)"
              className="x:text-sm x:text-neutral-500 x:hover:text-neutral-900 x:dark:hover:text-neutral-100 x:transition-colors x:focus-visible:ring-2 x:focus-visible:ring-primary-700 x:rounded"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="x:md:col-span-3">
          <h2 className="x:text-3xl x:font-semibold x:leading-tight x:mb-6 x:text-balance x:my-0">
            Senior developer for SaaS teams that need polished, production-grade delivery.
          </h2>
          <ul className="x:space-y-3 x:mb-8" role="list">
            {SERVICES.map(s => (
              <li key={s} className="x:flex x:items-start x:gap-3 x:text-neutral-700 x:dark:text-neutral-300">
                <span aria-hidden="true" className="x:text-green-500 x:mt-0.5 x:shrink-0 x:font-bold">✓</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="x:flex x:flex-wrap x:gap-3">
            <Link
              href="/contact"
              className="x-button x:focus-visible:ring-2 x:focus-visible:ring-primary-700 x:focus-visible:ring-offset-2"
            >
              Start a Conversation →
            </Link>
            <Link
              href="/about"
              className="x-button-ghost x:focus-visible:ring-2 x:focus-visible:ring-primary-700 x:focus-visible:ring-offset-2"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <h2 className="x:text-balance">Selected Work</h2>
        <p>Shipped projects — from open-source tooling to production SaaS. Each one owned end-to-end.</p>
        <div className="x-project-list x:mt-4" role="list">
          {projects.slice(0, 4).map(p => (
            <ProjectCard key={p.route} post={p} />
          ))}
        </div>
        <Link href="/projects" className="x:mt-4 x:inline-block">All Projects →</Link>
      </section>

      <hr />

      <section>
        <h2 className="x:text-balance">Latest Writing</h2>
        <p>Hands-on posts on AI tooling, TypeScript, and full-stack development — written by a practitioner.</p>
        <div className="x:mt-4 x:divide-y x:divide-neutral-100 x:dark:divide-neutral-800" role="list">
          {posts.slice(0, 8).map(p => (
            <div key={p.route} role="listitem" className="x:py-3 x:flex x:items-baseline x:gap-4">
              {p.frontMatter.date && (
                <time
                  dateTime={p.frontMatter.date}
                  className="x:text-xs x:text-neutral-400 x:shrink-0 x:font-mono"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: 'short' }).format(new Date(p.frontMatter.date))}
                </time>
              )}
              <Link
                href={p.route}
                className="x:text-sm x:hover:underline x:text-neutral-800 x:dark:text-neutral-200 x:min-w-0 x:focus-visible:ring-2 x:focus-visible:ring-primary-700 x:rounded"
              >
                {p.frontMatter.title}
              </Link>
            </div>
          ))}
        </div>
        <Link href="/blog" className="x:mt-4 x:inline-block">All Posts →</Link>
      </section>
    </div>
  );
}
