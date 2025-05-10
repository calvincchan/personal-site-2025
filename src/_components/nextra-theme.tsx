// import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { GoogleAnalytics } from '@next/third-parties/google';
import { Viewport } from 'next';
import { Geist } from 'next/font/google';
import type { PageMapItem } from 'nextra';
import { Head } from 'nextra/components';
import { FC, ReactNode } from 'react';
import '../globals.css';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const viewport: Viewport = {
  initialScale: 1,
};

const mainFont = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  preload: true,
});

export const NextraTheme: FC<{
  children: ReactNode;
  pageMap: PageMapItem[];
}> = ({ children }) => {
  return (
    <html lang="en" className={mainFont.className}>
      <Head color={{ hue: 265.48, saturation: 99, lightness: 56 }} backgroundColor={{ dark: "#0f172a", light: "#f5f5f5" }} />
      <body>
        <div role="container" className="x-container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
    </html>
  );
};