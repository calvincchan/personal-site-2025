// throws TypeError: Cannot read properties of null (reading 'useMemo')
'use no memo'

/* eslint sort-keys: error */
import {
  Callout,
  Code,
  Details,
  Pre,
  Summary,
  Table,
  withGitHubAlert,
  withIcons,
  Image
} from 'nextra/components'
import { useMDXComponents as getNextraMDXComponents } from 'nextra/mdx-components'
import type { MDXComponents } from 'nextra/mdx-components'
import type { ComponentProps, FC } from 'react'
import { Meta } from './_components/meta'
import { isValidDate } from './is-valid-date'
import type { BlogMetadata } from './types'
import { DateOnly } from './_components/date-only'
import Link from 'next/link'

// const createHeading = (
//   Tag: `h${2 | 3 | 4 | 5 | 6}`
// ): FC<ComponentProps<typeof Tag>> =>
//   function HeadingLink({ children, id, className, ...props }) {
//     return (
//       <Tag
//         id= { id }
//     // can be added by footnotes
//     className = { className === 'sr-only' ? 'x:sr-only' : ''
//   }
// {...props }
//       >
//   { children }
// {
//   id && (
//     <a
//             href={ `#${id}` }
//   className = "not-prose subheading-anchor"
//   aria - label="Permalink for this section"
//     />
//         )
// }
// </Tag>
//     )
//   }

const CALLOUT_TYPE = Object.freeze({
  caution: 'error',
  important: 'warning',
  note: 'info',
  tip: 'default',
  warning: 'warning'
})
const Blockquote = withGitHubAlert(({ type, ...props }) => (
  <Callout type={CALLOUT_TYPE[type]} {...props} />
))

type BlogMDXComponents = MDXComponents & {
  DateFormatter?: FC<{ date: Date }>
}

const DEFAULT_COMPONENTS = getNextraMDXComponents({
  blockquote: Blockquote,
  code: Code,
  details: Details,
  // h2: createHeading('h2'),
  // h3: createHeading('h3'),
  // h4: createHeading('h4'),
  // h5: createHeading('h5'),
  // h6: createHeading('h6'),
  pre: withIcons(Pre),
  summary: Summary,
  table: Table,
  td: Table.Td,
  th: Table.Th,
  tr: Table.Tr
})

interface WrapperProps {
  children: React.ReactNode
  metadata: BlogMetadata
}

interface UseMDXComponentsProps {
  DateFormatter?: FC<{ date: Date }>
}

export const useMDXComponents = (comp?: UseMDXComponentsProps): MDXComponents => {
  const { DateFormatter, ...components } = comp ?? {}
  return {
    ...DEFAULT_COMPONENTS,
    wrapper({ children, metadata }: WrapperProps) {
      console.log('metadata', metadata)

      if (!metadata) {
        throw new Error('No metadata provided')
      }

      const date = metadata.date as string
      if (date && !isValidDate(date)) {
        throw new Error(
          `Invalid date "${date}". Provide date in "YYYY/M/D", "YYYY/M/D H:m", "YYYY-MM-DD", "[YYYY-MM-DD]T[HH:mm]" or "[YYYY-MM-DD]T[HH:mm:ss.SSS]Z" format.`
        )
      }
      const dateObj = date && new Date(date)
      return (
        <article className="xprose">
          <header>
            <nav role="navigation" className="mb-4 text-gray-500"><Link href=".">← Back to Blog</Link></nav>
            {metadata.image && <Image src={metadata.image} alt={metadata.title}
              width={800}
              height={200}
              placeholder="blur" />}
            <h1>{metadata.title}</h1>
            <Meta {...(metadata as BlogMetadata)}>
              {dateObj && (
                <time dateTime={dateObj.toISOString()}>
                  {DateFormatter ? (
                    <DateFormatter date={dateObj} />
                  ) : (
                    <DateOnly date={dateObj} />
                  )}
                </time>
              )}
            </Meta>
          </header>
          {children}
        </article>
      )
    },
    ...components
  }
}
