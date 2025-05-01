import { Link } from 'next-view-transitions'
import type { FC, ReactNode } from 'react'
import type { BlogMetadata } from '../types'
import { GoBack } from './go-back'

export const Meta: FC<BlogMetadata & { children: ReactNode }> = ({
  author,
  tags,
  date,
  readingTime,
  children
}) => {
  const tagsEl = tags?.map(t => (
    <Link key={t} href={`/tags/${t}`} className="nextra-tag">
      {t}
    </Link>
  ))

  const readingTimeText = readingTime?.text

  return (
    <aside
      role="meta"
      className={
        'mb-8 flex gap-3 ' +
        (readingTimeText ? 'items-start' : 'items-center')
      }
    >
      <div className="grow dark:text-gray-400 text-gray-600">
        <div className="flex flex-wrap items-center gap-1">
          {author}
          {author && date && ','}

          {children}

          {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- fixme
            (author || date) && (readingTime || tags?.length) && (
              <span className="px-1">•</span>
            )
          }
          {readingTimeText || tagsEl}
        </div>
        {readingTime && (
          <div className="mt-1 flex flex-wrap items-center gap-1">
            {tagsEl}
          </div>
        )}
      </div>
    </aside>
  )
}
