'use client';

import { Anchor } from 'nextra/components';
import type { FC } from 'react';

export const Navbar: FC = () => {
  const topLevelNavbarItems: { title: string, route: string; }[] = [
    { title: 'Work', route: '/work' },
    { title: 'Blog', route: '/blog' },
    { title: 'Contact', route: '/contact' }
  ];

  return (
    <nav role="menu" className="x:px-2 x:py-5 x:flex x:items-center x:justify-between x:flex-col x:sm:flex-row">
      <Anchor role="menuitem" href="/" className="x:font-medium x:hover:underline" rel="author">Calvin C. Chan</Anchor>
      <ul role="menu" className="x:flex x:flex-row x:list-none x:gap-4 x:m-0">
        {topLevelNavbarItems.map(item => {
          const route = item.route;
          return (
            <li key={route}>
              <Anchor href={route} role="menuitem" className="x:hover:underline">
                {item.title}
              </Anchor>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};