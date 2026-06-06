import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import Image from "next/image";
import profilePic from 'public/images/calvincchan-profile.png';
import { GitHubIcon, LinkedInIcon, YouTubeIcon } from "src/_icons";

export function generateMetadata() {
  const result: Metadata = {
    title: "Contact Me",
    description: "Get in touch to discuss projects and opportunities.",
    openGraph: {
      title: "Contact Me",
      description: "Get in touch to discuss projects and opportunities.",
      url: siteConfig.siteUrl + "/contact",
      siteName: "Calvin C. Chan",
      type: "website",
      images: [
        {
          url: siteConfig.siteOgImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: siteConfig.siteUrl + "/contact",
    },
  };
  return result;
};

export default async function Page() {
  const metadata = generateMetadata();
  return (
    <div>
      <header className="x-page-header">
        <Image src={profilePic} alt={siteConfig.author} width={180} height={180} className="x:rounded-full x:bg-primary-700" />
        <h1>{metadata.title as string}</h1>
        <h2>Available for fractional and contract engagements — let&apos;s discuss your project.</h2>
      </header>

      <section role="main" className="x-contact-page x:prose x:dark:prose-invert">
        <section className="x:my-24">
          <h2>What I can help with</h2>
          <ul>
            <li>SaaS builds — full-stack from schema to deployment</li>
            <li>AI feature integration — agents, RAG pipelines, MCP tooling</li>
            <li>Full-lifecycle development — architecture, build, ship, iterate</li>
            <li>Team embed — fractional senior dev on existing product teams</li>
          </ul>
        </section>

        <section className="x:my-24">
          <h2>Email</h2>
          <p>
            You can also reach me via email at <a href="mailto:hello@calvincchan.com">hello@calvincchan.com</a>
          </p>
        </section>

        <section className="x:my-24">
          <h2>Social Media</h2>
          <h3>GitHub <GitHubIcon /></h3>
          <p>
            Open-source projects and code.<br />
            <a href="https://github.com/calvincchan" target="_blank" rel="noopener noreferrer">Visit my GitHub</a>
          </p>

          <h3>LinkedIn <LinkedInIcon /></h3>
          <p>
            Professional background and work history.<br />
            <a href="https://www.linkedin.com/in/calvincchan/" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a>
          </p>

          <h3>YouTube <YouTubeIcon /></h3>
          <p>
            Tutorials and walkthroughs on AI tooling and software development.<br />
            <a href="https://www.youtube.com/@calvincchan" target="_blank" rel="noopener noreferrer">Visit my YouTube</a>
          </p>
        </section>
      </section>
    </div>
  );
}

