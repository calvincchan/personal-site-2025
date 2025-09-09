import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';
import { PostCard } from "src/app/blog/post-card";
import { sorter } from "./utils";

export const metadata: Metadata = {
  title: "My Blog",
  description: "My articles and insights on AI, automation, and web app development.",
  openGraph: {
    title: "My Blog",
    description: "My articles and insights on AI, automation, and web app development.",
    url: siteConfig.siteUrl + "/blog",
    // siteName: "Calvin C. Chan",
    // type: "website",
    // images: [
    //   {
    //     url: siteConfig.siteOgImage,
    //     width: 640,
    //     height: 640,
    //   },
    // ],
  },
  alternates: {
    canonical: siteConfig.siteUrl + "/blog",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default async function Page() {
  const pageMap = await getPageMap("/blog/");
  const { directories } = normalizePages({
    list: pageMap,
    route: "/blog/",
  });
  const posts = directories.filter(a => a.route.startsWith("/blog/")).sort(sorter);

  return (
    <div>
      <header className="x-page-header">
        <h1>{metadata.title as string}</h1>
        <h2>{metadata.description as string}</h2>
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