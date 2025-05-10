import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profilePic from 'public/images/calvincchan-profile.png';
import { PostCard } from "./blog/post-card";
import { getPosts } from "./blog/utils";
import { ProjectCard } from "./projects/project-card";
import { getProjects } from "./projects/utils";

// export const metadata: Metadata & FrontMatter = {
//   title: process.env.SITE_AUTHOR,
//   description: process.env.SITE_DESCRIPTION,
//   priority: 1,
// };

export const metadata: Metadata = {
  title: {
    default: 'Calvin C. Chan: Freelance Web App and AI Developer',
    template: '%s | Calvin C. Chan'
  },
  description: process.env.SITE_DESCRIPTION,
  keywords: [
    'Calvin C. Chan',
    'Freelance Developer',
    'Web Developer',
    'Workflow Automation',
    'Software Engineer',
    'Freelance Web App Developer',
    'Freelance Software Engineer',
    'Freelance AI Developer',
  ],
  openGraph: {
    title: process.env.SITE_AUTHOR,
    description: process.env.SITE_DESCRIPTION,
    url: process.env.SITE_URL,
    siteName: process.env.SITE_AUTHOR,
    type: 'website',
    images: [
      {
        url: process.env.SITE_OG_IMAGE,
        width: 640,
        height: 640,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: process.env.SITE_AUTHOR,
    description: process.env.SITE_DESCRIPTION,
    images: process.env.SITE_OG_IMAGE,
    creator: process.env.SITE_AUTHOR,
  },
  alternates: {
    canonical: process.env.SITE_URL,
  },

};

// This component fetches the latest posts and displays them
// It is a server component, so it can use async/await
// and fetch data directly
const LatestPosts: React.FC<{ limit: number; }> = async ({ limit }) => {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, limit);
  return (
    <div className="x-latest-posts">
      {latestPosts.map((post) => (
        <PostCard
          key={post.route}
          post={post}
        />
      ))}
    </div>
  );
};

const LatestProjects: React.FC<{ limit: number; }> = async ({ limit }) => {
  const projects = await getProjects();
  const latestProjects = projects.slice(0, limit);
  console.dir(latestProjects, { depth: 2 });
  return (
    <div className="x-project-list">
      {latestProjects.map((project) => (
        <ProjectCard
          key={project.route}
          post={project}
        />
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <div className="x-top-page">
      <section role="hero" className="x-hero">
        <div className="">
          <Image src={profilePic} alt={process.env.SITE_AUTHOR} width={120} height={120} className="x:rounded-full x:bg-violet-600" />
          <h1>Hi, I&apos;m Calvin C. Chan 👋</h1>
          <h2>Full-Stack Dev | AI Workflow Automation | Next.js, Supabase, n8n, LLMs</h2>
          <p>
            I am a full-stack developer specializing in AI workflow automation and web development.
            I create custom solutions to help businesses streamline their processes and improve efficiency.
          </p>
          <p>Want to discuss your project?<br /><Link href="/contact" className="x-button x:mt-4">Let&apos;s Talk ✨</Link></p>
        </div>
      </section>

      <hr />

      <section>
        <h2>My Projects ⚙️</h2>
        <p>Explore my portfolio to see the projects I have worked on, including web applications and AI solutions.</p>
        <LatestProjects limit={3} />
        <Link href="/projects">View My Projects →</Link>
      </section>

      <hr />

      <section>
        <h2>My Blog ✏️</h2>
        <p>Check out my latest articles and insights on AI, automation, and software development.</p>
        <LatestPosts limit={3} />
        <Link href="/blog">View All Blog Posts →</Link>
      </section>

      <hr />

      <section>
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