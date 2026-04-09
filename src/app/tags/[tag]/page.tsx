import { siteConfig } from "@/lib/site-config";
import { PostCard } from "src/app/blog/post-card";
import { getPosts, getTags } from '../../blog/utils';

export async function generateMetadata(props: { params: Promise<{ tag: string; }>; }) {
  const params = await props.params;
  const tag = decodeURIComponent(params.tag);
  const title = `Posts Tagged with "${tag}"`;
  const description = `Browse all articles tagged with "${tag}" by ${siteConfig.author}.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/tags/${params.tag}`,
      siteName: siteConfig.author,
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.siteUrl}/tags/${params.tag}`,
    },
  };
}

export async function generateStaticParams() {
  const allTags = await getTags();
  return [...new Set(allTags)].map(tag => ({ tag }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string; }>; }) {
  const { tag } = await params;
  const { title } = await generateMetadata({ params });
  const posts = await getPosts();
  return (
    <div>
      <header className="x-page-header">
        <h1>{title}</h1>
      </header>

      <section role="feed">
        {posts
          .filter(post =>
            post.frontMatter.tags?.includes(decodeURIComponent(tag))
          )
          .map(post => (
            <PostCard key={post.route} post={post} />
          ))}
      </section>
    </div>
  );
}
