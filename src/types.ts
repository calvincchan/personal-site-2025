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
