import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profilePic from 'public/images/calvincchan-profile.png';
import { GitHubIcon, LinkedInIcon, YouTubeIcon } from "src/_icons";

export function generateMetadata() {
  const result: Metadata = {
    title: "Contact Me",
    description: "Get in touch to discuss projects and opportunities.",
    openGraph: {
      title: "Contact Me",
      description: "Get in touch to discuss projects and opportunities.",
      url: process.env.SITE_URL + "/contact",
      siteName: "Calvin C. Chan",
      type: "website",
      images: [
        {
          url: process.env.SITE_OG_IMAGE,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: process.env.SITE_URL + "/contact",
    },
  };
  return result;
};

export default async function Page() {
  const metadata = generateMetadata();
  return (
    <div>
      <header className="x-page-header">
        <Image src={profilePic} alt={process.env.SITE_AUTHOR} width={180} height={180} className="x:rounded-full x:bg-violet-600" />
        <h1>{metadata.title as string}</h1>
        <h2>{metadata.description as string}</h2>
      </header>

      <section role="main" className="x-contact-page">
        <section className="x:my-24">
          <h2>Schedule a Call</h2>
          <p>Let&apos;s discuss your project and see how I can help you.</p>
          <p>
            <Link href="https://calendly.com/hello-calvincchan/30min" target="_blank" rel="noopener noreferrer" className="x-button">Schedule a Call</Link>
          </p>
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
            Check out my GitHub for my open-source projects and contributions.<br />
            <a href="https://github.com/calvincchan" target="_blank" rel="noopener noreferrer">Visit my GitHub</a>
          </p>

          <h3>LinkedIn <LinkedInIcon /></h3>
          <p>
            Connect with me on LinkedIn to see my professional background and network.<br />
            <a href="https://www.linkedin.com/in/calvincchan/" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a>
          </p>

          <h3>YouTube <YouTubeIcon /></h3>
          <p>
            Check out my YouTube channel for tutorials and insights on AI and software development.<br />
            <a href="https://www.youtube.com/@calvincchan" target="_blank" rel="noopener noreferrer">Visit my YouTube</a>
          </p>
        </section>
      </section>
    </div>
  );
}

