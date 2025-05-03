import RSS from "rss";
import { getPosts } from "../blog/utils";

export async function GET() {
  const allPosts = await getPosts();
  const feed = new RSS({
    title: process.env.SITE_AUTHOR,
    description: process.env.SITE_DESCRIPTION,
    site_url: process.env.SITE_URL,
    feed_url: `${process.env.SITE_URL}/feed.xml`,
    image_url: process.env.SITE_OG_IMAGE,
  });

  allPosts.forEach((post) => {
    const { title, date, description, slug } = post.frontMatter;
    const url = `${process.env.SITE_URL}/blog/${slug}`;
    const image = post.frontMatter.image || process.env.SITE_OG_IMAGE;
    const author = post.frontMatter.author || process.env.SITE_AUTHOR;
    const categories = post.frontMatter.tags || [];
    const pubDate = new Date(date).toUTCString();
    const guid = `${url}#${date}`;
    feed.item({
      title,
      description,
      url,
      guid,
      author,
      date: pubDate,
      categories,
      custom_elements: [
        { "media:content": { _attr: { url: image } } },
        { "media:thumbnail": { _attr: { url: image } } },
        { "media:description": description },
      ],
    });
  });

  const xml = feed.xml({
    indent: true,
  });

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  });
}