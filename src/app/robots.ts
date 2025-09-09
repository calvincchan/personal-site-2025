import { siteConfig } from "@/lib/site-config";
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/',
    },
    host: siteConfig.siteUrl,
    sitemap: siteConfig.siteUrl + '/sitemap.xml',
  };
}