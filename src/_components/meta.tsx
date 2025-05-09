import { Link } from 'next-view-transitions';
import type { FC, ReactNode } from 'react';
import type { BlogMetadata } from '../types';

export const Meta: FC<BlogMetadata & { children: ReactNode; }> = ({
  author,
  tags,
  date,
  readingTime,
  children
}) => {
  const tagsEl = tags?.map(t => (
    <Link key={t} href={`/tags/${t}`} className="x-tag">
      {t}
    </Link>
  ));

  const readingTimeText = readingTime?.text;

  return (
    <aside
      role="meta"
      className={
        'x-meta-block flex gap-3 ' +
        (readingTimeText ? 'items-start' : 'items-center')
      }
    >
      <div className="grow">
        <div className="x:my-2 x:flex x:flex-wrap x:items-center x:gap-1">
          {author}
          {author && date && ','}

          {children}

          {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- fixme
            (author || date) && (readingTime || tags?.length) && (
              <span className="x:px-1">•</span>
            )
          }
          {readingTimeText || tagsEl}
        </div>
        {readingTime && (
          <div className="x:my-2 x:flex x:flex-wrap x:items-center x:gap-1">
            {tagsEl}
          </div>
        )}
      </div>
    </aside>
  );
};
