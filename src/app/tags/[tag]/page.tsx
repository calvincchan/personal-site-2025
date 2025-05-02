import { PostCard } from "src/app/blog/post-card";
import { getPosts, getTags } from '../../blog/utils';

export async function generateMetadata(props) {
  const params = await props.params;
  return {
    title: `Posts Tagged with “${decodeURIComponent(params.tag)}”`
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
    <div className="x-blog-top">
      <section>
        <h1>{title}</h1>
      </section>

      <section role="feed">
        {posts
          .filter(post =>
            post.frontMatter.tags?.includes(decodeURIComponent(tag))
          )
          .map(post => (
            <PostCard key={post.route} post={post} />
          ))}
      </section>
    </div >
  );
}