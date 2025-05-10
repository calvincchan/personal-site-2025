// import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Metadata } from 'next';
import { getPageMap } from 'nextra/page-map';
import { FC, ReactNode } from 'react';
import { NextraTheme } from '../_components/nextra-theme';
import '../globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Freelance Web App and AI Developer | Calvin C. Chan',
    template: '%s | Calvin C. Chan'
  },
  authors: [
    {
      name: process.env.SITE_AUTHOR,
      url: process.env.SITE_URL,
    },
  ],
  creator: process.env.SITE_AUTHOR,
  publisher: process.env.SITE_AUTHOR,
  metadataBase: new URL(process.env.SITE_URL),
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  }
};

const RootLayout: FC<{ children: ReactNode; }> = async ({ children }) => {
  const pageMap = await getPageMap();
  return (
    <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
  );
};

export default RootLayout;
