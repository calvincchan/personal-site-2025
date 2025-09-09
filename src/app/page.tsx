import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profilePic from 'public/images/calvincchan-profile.png';
import { PostCard } from "./blog/post-card";
import { getPosts } from "./blog/utils";
import { ProjectCard } from "./projects/project-card";
import { getProjects } from "./projects/utils";

// export const metadata: Metadata & FrontMatter = {
//   title: siteConfig.author,
//   description: siteConfig.siteDescription,
//   priority: 1,
// };

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
        <Image src={profilePic} alt={siteConfig.author} width={120} height={120} className="x:rounded-full x:bg-violet-600" />
        <h1>Hi, I&apos;m {siteConfig.author} 👋</h1>
        <h2>{siteConfig.siteDescription}</h2>
        <p>{siteConfig.intro}</p>
        <p>Want to discuss your project or just say hi?</p>
        <div className="x:flex x:gap-4">
          <Link href="/contact" className="x-button x:mt-4">Contact Me ✨</Link>
          <Link href={siteConfig.resumeUrl} className="x-button x:mt-4">Download My Resume</Link>
        </div>
      </section>

      <hr />

      <section>
        <h2>My Blog Posts ✏️</h2>
        <p>Check out my latest articles and insights on AI, automation, and software development.</p>
        <LatestPosts limit={5} />
        <Link href="/blog">View All Blog Posts →</Link>
      </section>

      <hr />

      <section>
        <h2>My Projects ⚙️</h2>
        <p>Explore my portfolio to see the projects I have worked on, including web applications and AI solutions.</p>
        <LatestProjects limit={3} />
        <Link href="/projects">View My Projects →</Link>
      </section>
    </div>
  );
}