

import { MdxFile } from "nextra";
import { Item, normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';
import { ProjectMetadata } from '../../types';

// export function parseTags(tagString: string) {
//   const tags = tagString.split(',').map(tag => tag.trim()).sort();
//   return tags;
// }

export type PostItem = Item & {
  frontMatter: ProjectMetadata;
};

export async function getProjects() {
  const { directories } = normalizePages({
    list: await getPageMap('/projects'),
    route: '/projects'
  });
  return directories
    .filter(post => post.name !== 'index' && post.frontMatter?.other?.published !== "false")
    .sort(sorter) as PostItem[];
}

export function sorter(a: MdxFile, b: MdxFile) {
  const dateA = a.frontMatter.date || a.frontMatter.other?.date || '1970-01-01';
  const dateB = b.frontMatter.date || b.frontMatter.other?.date || '1970-01-01';
  return new Date(dateA) > new Date(dateB) ? -1 : 1;
}