import Link from "next/link";
import type { FC } from 'react';
import { SiteLogoIcon } from "src/_icons";

export const Footer: FC = () => {
  return (
    <footer className="x-global-footer">
      <div className="x-row">
        <div className="x-col1">
          <span className="x-author">{new Date().getFullYear()} © {process.env.SITE_AUTHOR}.</span>{' '}
          All rights reserved.
        </div>
        <div className="x-col2">
          <Link href="/" title="Home">
            Home
          </Link>
          <Link href="/blog" title="Blog">
            Blog
          </Link>
          <Link href="/projects" title="Projects">
            Projects
          </Link>
          <Link href="/contact">
            Contact
          </Link>
          <Link href="/feed.xml" title="Blog Post Feed">
            RSS
          </Link>
        </div>
      </div>
      <div className="x:flex x:justify-center x:mt-8 x:text-neutral-400">
        <SiteLogoIcon size={60} />
      </div>
    </footer >
  );
};