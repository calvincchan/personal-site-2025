import type { ReadingTime } from 'nextra';

export type BlogMetadata = {
  alternates?: { canonical?: string | URL | { url: string | URL; hreflang?: string } };
  author?: string;
  date?: string;
  description?: string;
  keywords?: string | string[];
  lastmod?: string;
  readingTime?: ReadingTime;
  tags?: string[];
  title?: string;
  image?: string;
};

export type ProjectMetadata = BlogMetadata & {
  other?: {
    image?: string;
    published?: string;
    tags?: string;
  };
};
