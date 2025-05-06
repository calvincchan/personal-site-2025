import { Metadata } from "next";
import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';
import { ProjectCard } from "./project-card";
import { sorter } from "./utils";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Showcasing my projects and work experience.",
  openGraph: {
    title: "My Projects",
    description: "Showcasing my projects and work experience.",
    url: process.env.SITE_URL + "/projects",
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
    canonical: process.env.SITE_URL + "/projects",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default async function Page() {
  const pageMap = await getPageMap("/projects/");
  const { directories } = normalizePages({
    list: pageMap,
    route: "/projects/",
  });
  const posts = directories.filter(a => a.route.startsWith("/projects/")).sort(sorter);

  return (
    <div>
      <header className="x-page-header">
        <h1>{metadata.title as string}</h1>
        <h2>{metadata.description}</h2>
      </header>

      <section role="feed" className="x-project-list">
        {posts.map(function renderItem(item) {
          const route = item.route;
          return (
            <ProjectCard
              key={route}
              post={item}
            />
          );
        })}
      </section>
    </div>
  );
}