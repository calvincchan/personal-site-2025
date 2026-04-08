import type { ReadingTime } from 'nextra';

export type BlogMetadata = {
  author?: string;
  date?: string;
  description?: string;
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
