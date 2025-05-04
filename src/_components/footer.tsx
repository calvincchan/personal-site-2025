import Link from "next/link";
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="x-global-footer">
      <div className="x-col1">
        <span className="x-author">{new Date().getFullYear()} © {process.env.SITE_AUTHOR}.</span>{' '}
        All rights reserved.
      </div>
      <div className="x-col2">
        <Link href="/" title="Home">
          Home
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        <Link href="/feed.xml" title="Blog Post Feed">
          RSS
        </Link>
      </div>
    </footer>
  );
};