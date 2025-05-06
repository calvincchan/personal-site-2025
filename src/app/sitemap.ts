import { MetadataRoute } from "next";
import { Item, normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";
import { sorter } from "./blog/utils";

export const dynamic = "force-static";

interface PageType {
  title: string;
  type?: "page";
  display?: "hidden" | "normal" | string;
}

interface SitemapEntry {
  url: string;
  lastModified?: string | Date | undefined;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' | undefined;
  priority?: number | undefined;
  // alternates?: {
  //   languages?: Languages<string> | undefined;
  // } | undefined;
  images?: string[] | undefined;
  // videos?: Videos[] | undefined;
}

const normalizeUrl = (url: string): string => {
  const baseUrl = process.env.SITE_URL;
  if (!baseUrl) {
    throw new Error("SITE_URL is not defined");
  }
  return new URL(url, baseUrl).toString();
};

const toSitemapEntry = (item: Item): SitemapEntry => {
  const { frontMatter } = item;
  const lastModified = frontMatter?.lastmod ?
    new Date(frontMatter.lastmod) :
    frontMatter?.date ?
      new Date(frontMatter.date) :
      new Date();
  return {
    url: normalizeUrl(item.route),
    lastModified: lastModified.toISOString(),
    changeFrequency: frontMatter?.changeFrequency,
    priority: frontMatter?.priority,
    // images: frontMatter?.image,
  };
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = process.env.SITE_URL;
  const pageMap = await getPageMap();
  const { flatDocsDirectories } = normalizePages({
    list: await getPageMap('/'),
    route: '/',
  });
  const siteMapEntries = flatDocsDirectories.sort(sorter).map(toSitemapEntry);
  return siteMapEntries;
};

export default sitemap;