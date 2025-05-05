

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

export async function getProjects() {
  const { directories } = normalizePages({
    list: await getPageMap('/projects'),
    route: '/projects'
  });
  return directories
    .filter(post => post.name !== 'index')
    .sort(sorter) as PostItem[];
}

export function sorter(a: MdxFile, b: MdxFile) {
  return new Date(a.frontMatter.date) > new Date(b.frontMatter.date) ? -1 : 1;
}