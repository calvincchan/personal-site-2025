// import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Metadata, Viewport } from 'next'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { FC, ReactNode } from 'react'
import { NextraTheme } from '../_components/nextra-theme'
import './globals.css'
import { Geist } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    default: 'Freelance Web App and AI Developer | Calvin C. Chan',
    template: '%s | Calvin C. Chan'
  },
  description: 'Freelance Web App and AI Developer ',
}

export const viewport: Viewport = {
  initialScale: 1,
}

const mainFont = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  // display: 'swap',
  // fallback: ['system-ui', 'sans-serif'],
  preload: true,
  // weight: ["300", "500"],
})

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap()
  return (
    <html lang="en" className={mainFont.className}>
      <Head faviconGlyph="😆" backgroundColor={{ dark: "#0f172a", light: "#FFFBF4" }} />
      <body>
        <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
      </body>
    </html>
  )
}

export default RootLayout;
