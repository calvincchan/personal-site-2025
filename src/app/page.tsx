import Link from "next/link";

// export const metadata: Metadata & FrontMatter = {
//   title: process.env.SITE_AUTHOR,
//   description: process.env.SITE_DESCRIPTION,
//   priority: 1,
// };

export function generateMetadata() {
  return {
    title: process.env.SITE_AUTHOR,
    description: process.env.SITE_DESCRIPTION,
    lastmod: "2025-05-01",
    priority: 1,
    openGraph: {
      title: process.env.SITE_AUTHOR,
      description: process.env.SITE_DESCRIPTION,
      url: process.env.SITE_URL,
      siteName: process.env.SITE_AUTHOR,
      type: "website",
      images: [
        {
          url: process.env.SITE_OG_IMAGE,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

export default function Page() {
  return (
    <div className="x-top-page">
      <section role="hero" className="x-hero">
        <h1>Hi, I&apos;m Calvin C. Chan 👋</h1>
        <h3>I am a freelance developer offering to build AI-powered solutions, web apps and websites.</h3>
        <p><Link href="/contact" className="x-button">Let&apos;s Talk ✨</Link></p>
      </section>


      <section className="x:my-24">
        <h2>My Works ⚙️</h2>
        <p>Explore my portfolio to see the projects I have worked on, including web applications and AI solutions.</p>
        <Link href="/work">View My Work →</Link>
      </section>

      <section className="x:my-24">
        <h2>Blog Posts ✏️</h2>
        <p>Check out my latest articles and insights on AI, automation, and software development.</p>
        <Link href="/blog">View my Blog Posts →</Link>
      </section>

      <section className="x:my-24">
        <h2>Hire Me</h2>
        <p>
          I am available for freelance work. If you have a project in mind, feel free to reach out!
        </p>
        <p className="x:flex x:gap-4">
          <Link href="/contact" className="x-button">Schedule a Call</Link>
          <Link href="https://github.com/calvincchan/calvincchan/blob/master/Resume-Calvin-C-Chan.pdf" className="x-button">Download Resume</Link>
        </p>
      </section>
    </div >
  );
}  