import Image from "next/image";
import Link from "next/link";
import profilePic from 'public/images/calvincchan-portrait.jpg';
import { PostCard } from "./blog/post-card";
import { getPosts } from "./blog/utils";

// export const metadata: Metadata & FrontMatter = {
//   title: process.env.SITE_AUTHOR,
//   description: process.env.SITE_DESCRIPTION,
//   priority: 1,
// };

export function generateMetadata() {
  return {
    title: process.env.SITE_AUTHOR,
    description: process.env.SITE_DESCRIPTION,
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

// This component fetches the latest posts and displays them
// It is a server component, so it can use async/await
// and fetch data directly
const LatestPosts: React.FC<{ limit: number; }> = async ({ limit }) => {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, limit);
  console.log('Latest Posts:', latestPosts);
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

export default function Page() {
  return (
    <div className="x-top-page">
      <section role="hero" className="x-hero">
        <h1><Image src={profilePic} alt={process.env.SITE_AUTHOR} width={120} height={120} className="x:rounded-full" /> Hi, I&apos;m Calvin C. Chan 👋</h1>
        <h3>I am a freelance developer offering to build AI-powered solutions, web apps and websites.</h3>
        <p><Link href="/contact" className="x-button">Let&apos;s Talk ✨</Link></p>
      </section>

      <hr />

      <section className="x:my-18">
        <h2>My Works ⚙️</h2>
        <p>Explore my portfolio to see the projects I have worked on, including web applications and AI solutions.</p>
        <Link href="/work">View My Work →</Link>
      </section>

      <hr />

      <section className="x:my-18">
        <h2>Blog Posts ✏️</h2>
        <p>Check out my latest articles and insights on AI, automation, and software development.</p>
        <LatestPosts limit={3} />
        <Link href="/blog">View All Blog Posts →</Link>
      </section>

      <hr />

      <section className="x:my-18">
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