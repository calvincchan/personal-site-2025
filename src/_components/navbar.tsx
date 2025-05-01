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
    <nav role="menu" className="px-2 py-5 flex items-center justify-between flex-col sm:flex-row">
      <Anchor role="menuitem" href="/" className="font-medium hover:underline" rel="author">Calvin C. Chan</Anchor>
      <ul role="menu" className="flex flex-row list-none gap-5 m-0">
        {topLevelNavbarItems.map(item => {
          const route = item.route;
          return (
            <li key={route}>
              <Anchor href={route} role="menuitem" className="hover:underline">
                {item.title}
              </Anchor>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};