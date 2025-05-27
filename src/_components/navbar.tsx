'use client';

import { Anchor } from 'nextra/components';
import type { FC } from 'react';

export const Navbar: FC = () => {
  const topLevelNavbarItems: { title: string, route: string, cta?: boolean; }[] = [
    { title: 'About', route: '/about' },
    { title: 'Projects', route: '/projects' },
    { title: 'Blog', route: '/blog' },
    { title: 'Contact ✨', route: '/contact', cta: true },
  ];

  return (
    <nav role="menu" className="x-top-nav">
      <Anchor role="menuitem" href="/" className="x-main-link" rel="author">Calvin C. Chan</Anchor>
      <ul role="menu" className="x-menu">
        {topLevelNavbarItems.map(item => {
          const route = item.route;
          return (
            <li key={route}>
              <Anchor href={route} role="menuitem" className={item.cta ? 'x-button' : ''}>
                {item.title}
              </Anchor>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};