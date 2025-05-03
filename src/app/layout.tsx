// import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { FC, ReactNode } from 'react';
import { NextraTheme } from '../_components/nextra-theme';
import './globals.css';

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
  keywords: [
    'Calvin C. Chan',
    'Freelance Developer',
    'Web Developer',
    'AI Developer',
    'Software Engineer',
    'Freelance Web Developer',
    'Freelance Software Engineer',
    'Freelance AI Developer',
    'Freelance Software Developer',
    'Freelance Web App Developer',
    'Freelance Web App Engineer',
    'Freelance Web App Designer',
    'Freelance Web App Creator',
    'Freelance Web App Builder',
    'Freelance Web App Specialist',
  ],
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

export const viewport: Viewport = {
  initialScale: 1,
};

const mainFont = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  preload: true,
});

const RootLayout: FC<{ children: ReactNode; }> = async ({ children }) => {
  const pageMap = await getPageMap();
  return (
    <html lang="en" className={mainFont.className}>
      <Head faviconGlyph="😆" backgroundColor={{ dark: "#0f172a", light: "#f5f5f5" }} />
      <body>
        <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
      </body>
    </html>
  );
};

export default RootLayout;
