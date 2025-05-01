

export function parseTags(tagString: string) {
  const tags = tagString.split(',').map(tag => tag.trim()).sort();
  return tags;
}
