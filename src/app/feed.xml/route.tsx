import RSS from "rss";
import { getPosts } from "../blog/utils";

const normalizeUrl = (url: string): string => {
  const baseUrl = process.env.SITE_URL;
  if (!baseUrl) {
    throw new Error("SITE_URL is not defined");
  }
  return new URL(url, baseUrl).toString();
};

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
    const { title, date, description } = post.frontMatter;
    const url = normalizeUrl(post.route);
    const image = post.frontMatter.image ? normalizeUrl(post.frontMatter.image) : process.env.SITE_OG_IMAGE;
    const author = post.frontMatter.author || process.env.SITE_AUTHOR;
    const categories = post.frontMatter.tags || [];
    const pubDate = post.frontMatter.lastmod ?
      new Date(post.frontMatter.lastmod).toUTCString() :
      post.frontMatter.date ?
        new Date(post.frontMatter.date).toUTCString() :
        new Date(date).toUTCString();
    const guid = post.route;
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