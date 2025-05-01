import Link from 'next/link'
import type { Folder, MdxFile } from 'nextra'
import { getPageMap } from 'nextra/page-map'
import type { FC } from 'react'
import { DateOnly } from '../../_components/date-only'
import { normalizePages } from 'nextra/normalize-pages'

function sorter(a: MdxFile, b: MdxFile) {
  return new Date(a.frontMatter.date) > new Date(b.frontMatter.date) ? -1 : 1;
}

export const BlogPosts: FC = async () => {
  const pageMap = await getPageMap("/blog/");
  const { directories } = normalizePages({
    list: pageMap,
    route: "/blog/",
  })
  console.dir({ pageMap }, { depth: 5 })
  console.dir({ directories }, { depth: 5 })
  const posts = directories.filter(a => a.route.startsWith("/blog/")).sort(sorter);

  console.dir(posts, { depth: 5 })

  return (
    <section role="feed">
      {posts.map(function renderItem(item) {
        const route = item.route;
        const { title, date } = item.frontMatter;
        return (
          <div key={route} role="listitem" className="xblog-card">
            <Link href={route} className="hover:underline">
              <h2>{title}</h2>
            </Link>
            <p>
              {item.frontMatter.description}{" "}
              <Link href={route} className="underline">Read More →</Link>
            </p>

            <DateOnly date={item.frontMatter.date} />
          </div>
        )
      })}
    </section>
  )
}
export default function Page() {
  return (<div className="xblog-top">
    <section className="my-36">
      <h1>Blog Posts ✏️</h1>
      <p>My articles and insights on various topics.</p>
    </section>

    <BlogPosts />
  </div>
  )
}