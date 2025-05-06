import type { PageMapItem } from 'nextra';
import type { FC, ReactNode } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const NextraTheme: FC<{
  children: ReactNode;
  pageMap: PageMapItem[];
}> = ({ children }) => {
  return (
    <div role="container" className="x-container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};