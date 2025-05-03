import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';
import { PostCard } from "src/app/blog/post-card";
import { sorter } from "./utils";

export function generateMetadata() {
  return {
    title: "Blog Posts",
    description: "My articles and insights on AI, automation, and web app development.",
    openGraph: {
      title: "Blog Posts",
      description: "My articles and insights on AI, automation, and web app development.",
      url: process.env.SITE_URL + "/blog",
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
  };
};

export default async function Page() {
  const pageMap = await getPageMap("/blog/");
  const { directories } = normalizePages({
    list: pageMap,
    route: "/blog/",
  });
  const posts = directories.filter(a => a.route.startsWith("/blog/")).sort(sorter);
  const metadata = generateMetadata();

  return (
    <div>
      <header className="x-page-header">
        <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
      </header>

      <section role="feed" className="x-post-list">
        {posts.map(function renderItem(item) {
          const route = item.route;
          return (
            <PostCard
              key={route}
              post={item}
            />
          );
        })}
      </section>
    </div>
  );
}