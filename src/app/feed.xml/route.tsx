console.log(process.env.SITE_URL)
const CONFIG = {
  title: 'My Blog',
  siteUrl: process.env.SITE_URL,
  description: 'Latest blog posts',
  lang: 'en-us'
}

function getPosts() {
  return [
    { title: 'Post 1', frontMatter: { description: 'Description 1', date: '2023-01-01' }, route: '/post-1' },
    { title: 'Post 2', frontMatter: { description: 'Description 2', date: '2023-02-01' }, route: '/post-2' },
  ]
}

export async function GET() {
  const allPosts = await getPosts()
  const posts = allPosts
    .map(
      post => `    <item>
        <title>${post.title}</title>
        <description>${post.frontMatter.description}</description>
        <link>${CONFIG.siteUrl}${post.route}</link>
        <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${CONFIG.title}</title>
    <link>${CONFIG.siteUrl}</link>
    <description>${CONFIG.description}</description>
    <language>${CONFIG.lang}</language>
${posts}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  })
}