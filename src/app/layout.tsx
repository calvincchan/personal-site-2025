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
  description: process.env.SITE_DESCRIPTION,
  authors: [
    {
      name: process.env.SITE_AUTHOR,
      url: process.env.SITE_URL,
    },
  ],
  creator: process.env.SITE_AUTHOR,
  publisher: process.env.SITE_AUTHOR,
  keywords: [
    'Calvin C. Chan',
    'Freelance Developer',
    'Web Developer',
    'Workflow Automation',
    'Software Engineer',
    'Freelance Web App Developer',
    'Freelance Software Engineer',
    'Freelance AI Developer',
  ],
  metadataBase: new URL(process.env.SITE_URL),
  openGraph: {
    title: process.env.SITE_AUTHOR,
    description: process.env.SITE_DESCRIPTION,
    url: process.env.SITE_URL,
    siteName: process.env.SITE_AUTHOR,
    type: 'website',
    images: [
      {
        url: process.env.SITE_OG_IMAGE,
        width: 640,
        height: 640,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.SITE_AUTHOR,
    description: process.env.SITE_DESCRIPTION,
    images: process.env.SITE_OG_IMAGE,
    creator: process.env.SITE_AUTHOR,
  },
  icons: {
    icon: '/favicon.ico',
  }
};

const RootLayout: FC<{ children: ReactNode; }> = async ({ children }) => {
  const pageMap = await getPageMap();
  return (
    <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
  );
};

export default RootLayout;
