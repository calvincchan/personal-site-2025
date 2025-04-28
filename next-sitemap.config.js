import { getSortedPostsData } from "./scripts/get-sorted-posts-data.js";

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.SITE_URL || "https://calvincchan.com",
  changefreq: "weekly",
  generateRobotsTxt: true, // (optional)
  exclude: ["/blog/template", "*/_meta", "/blog/*"],
  additionalPaths: async (config) => {
    return getSortedPostsData("pages/blog").map((post) => {
      return {
        loc: `/blog/${post.id}`,
        lastmod: post.lastmod || post.date,
        changefreq: post.priority === "high" ? "weekly" : "monthly",
        priority: post.priority === "high" ? 0.9 : 0.5,
      };
    });
  },
  transform: async (config, path) => {
    let changefreq = config.changefreq;
    let priority = config.priority;
    if (path === "/blog") {
      priority = 0.9;
    } else if (path === "/work") {
      priority = 0.5;
      changefreq = "monthly";
    } else if (path === "/") {
      priority = 1;
    }
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
