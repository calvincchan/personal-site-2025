

import { MdxFile } from "nextra";
import { Item, normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';
import { BlogMetadata } from '../../types';

// export function parseTags(tagString: string) {
//   const tags = tagString.split(',').map(tag => tag.trim()).sort();
//   return tags;
// }

export type PostItem = Item & {
  frontMatter: BlogMetadata;
};

export async function getPosts() {
  const { directories } = normalizePages({
    list: await getPageMap('/blog'),
    route: '/blog'
  });
  return directories
    .filter(post => post.name !== 'index')
    .sort(sorter) as PostItem[];
  // .sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date));
}

export async function getTags() {
  const posts = await getPosts();
  const tags = posts.flatMap(post => post.frontMatter.tags);
  return tags;
}

export function sorter(a: MdxFile, b: MdxFile) {
  return new Date(a.frontMatter.date) > new Date(b.frontMatter.date) ? -1 : 1;
}