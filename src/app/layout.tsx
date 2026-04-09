// DEBUG: layout.tsx loaded from src/app
import { siteConfig } from "@/lib/site-config";
// import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { FrontMatter } from "nextra";
import { getPageMap } from 'nextra/page-map';
import { FC, ReactNode } from 'react';
import { NextraTheme } from '../_components/nextra-theme';

export const metadata: FrontMatter = {
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.author}`
  },
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.siteUrl,
    },
  ],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
  }
};

const RootLayout: FC<{ children: ReactNode; }> = async ({ children }) => {
  const pageMap = await getPageMap();
  return (
    <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
  );
};

export default RootLayout;
