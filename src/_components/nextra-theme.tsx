import type { PageMapItem } from 'nextra';
import type { FC, ReactNode } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const NextraTheme: FC<{
  children: ReactNode;
  pageMap: PageMapItem[];
}> = ({ children }) => {
  return (
    <div role="background" className="x-background">
      <div role="container" className="max-w-3xl mx-auto p-2">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};