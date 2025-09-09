import { siteConfig } from "@/lib/site-config";
import RSS from "rss";
import { getPosts } from "../blog/utils";

const normalizeUrl = (url: string): string => {
  const baseUrl = siteConfig.siteUrl;
  if (!baseUrl) {
    throw new Error("SITE_URL is not defined");
  }
  return new URL(url, baseUrl).toString();
};

export async function GET() {
  const allPosts = await getPosts();
  const feed = new RSS({
    title: siteConfig.author,
    description: siteConfig.siteDescription,
    site_url: siteConfig.siteUrl,
    feed_url: `${siteConfig.siteUrl}/feed.xml`,
    image_url: siteConfig.siteOgImage,
  });

  allPosts.forEach((post) => {
    const { title, date, description } = post.frontMatter;
    const url = normalizeUrl(post.route);
    const image = post.frontMatter.image ? normalizeUrl(post.frontMatter.image) : siteConfig.siteOgImage;
    const author = post.frontMatter.author || siteConfig.author;
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