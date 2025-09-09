import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';
import { ProjectCard } from "./project-card";
import { sorter } from "./utils";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Showcasing my projects and work experience.",
  alternates: {
    canonical: siteConfig.siteUrl + "/projects",
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