import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';
import { PostCard } from "src/app/blog/post-card";
import { sorter } from "./utils";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Hands-on posts on AI tooling, TypeScript, and full-stack development — written by a practitioner, not a commentator.",
  openGraph: {
    title: "My Blog",
    description: "Hands-on posts on AI tooling, TypeScript, and full-stack development — written by a practitioner, not a commentator.",
    url: siteConfig.siteUrl + "/blog",
    siteName: siteConfig.author,
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