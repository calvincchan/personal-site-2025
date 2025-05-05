import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';
import { ProjectCard } from "./project-card";
import { sorter } from "./utils";

export function generateMetadata() {
  return {
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
  };
};

export default async function Page() {
  const pageMap = await getPageMap("/projects/");
  const { directories } = normalizePages({
    list: pageMap,
    route: "/projects/",
  });
  const posts = directories.filter(a => a.route.startsWith("/projects/")).sort(sorter);
  const metadata = generateMetadata();

  return (
    <div>
      <header className="x-page-header">
        <h1>{metadata.title}</h1>
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