import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';
import { PostCard } from "src/app/blog/post-card";
import { sorter } from "./utils";

export default async function Page() {
  const pageMap = await getPageMap("/blog/");
  const { directories } = normalizePages({
    list: pageMap,
    route: "/blog/",
  });
  const posts = directories.filter(a => a.route.startsWith("/blog/")).sort(sorter);

  return (
    <div className="x-blog-top">
      <section>
        <h1>Blog Posts ✏️</h1>
        <p>My articles and insights on various topics.</p>
      </section>

      <section role="feed">
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