import Link from "next/link";
import type { FC } from 'react';
import { SiteLogoIcon } from "src/_icons";

export const Footer: FC = () => {
  const topLevelNavbarItems: { title: string, route: string, cta?: boolean; }[] = [
    { title: 'Home', route: '/' },
    { title: 'About', route: '/about' },
    { title: 'Projects', route: '/projects' },
    { title: 'Blog', route: '/blog' },
    { title: 'Contact', route: '/contact', cta: true },
    { title: 'RSS', route: '/feed.xml' }
  ];

  return (
    <footer className="x-global-footer">
      <div className="x-row">
        <div className="x-col1">
          <span className="x-author">{new Date().getFullYear()} © {process.env.SITE_AUTHOR}.</span>{' '}
          All rights reserved.
        </div>
        <div className="x-col2">
          {topLevelNavbarItems.map((item) => (
            <Link key={item.route} href={item.route} title={item.title}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="x:flex x:justify-center x:mt-8 x:text-neutral-400">
        <SiteLogoIcon size={60} />
      </div>
    </footer >
  );
};