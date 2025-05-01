import type { PageMapItem } from 'nextra'
import type { FC, ReactNode } from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'

export const NextraTheme: FC<{
  children: ReactNode
  pageMap: PageMapItem[]
}> = ({ children, pageMap }) => {
  return (
    <div role="background" className="xbackground">
      <div role="container" className="max-w-3xl mx-auto p-2">
        <Navbar pageMap={pageMap} />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}