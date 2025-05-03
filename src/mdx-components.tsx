// throws TypeError: Cannot read properties of null (reading 'useMemo')
'use no memo';

/* eslint sort-keys: error */
import Link from 'next/link';
import {
  Callout,
  Code,
  Details,
  Image,
  Pre,
  Summary,
  Table,
  withGitHubAlert,
  withIcons
} from 'nextra/components';
import type { MDXComponents } from 'nextra/mdx-components';
import { useMDXComponents as getNextraMDXComponents } from 'nextra/mdx-components';
import profilePic from 'public/images/calvincchan-portrait.jpg';
import type { FC } from 'react';
import { DateOnly } from './_components/date-only';
import { Meta } from './_components/meta';
import { isValidDate } from './is-valid-date';
import type { BlogMetadata } from './types';

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
});
const Blockquote = withGitHubAlert(({ type, ...props }) => (
  <Callout type={CALLOUT_TYPE[type]} {...props} />
));

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
});

interface WrapperProps {
  children: React.ReactNode;
  metadata: BlogMetadata;
}

interface UseMDXComponentsProps {
  DateFormatter?: FC<{ date: Date; }>;
}

export const useMDXComponents = (comp?: UseMDXComponentsProps): MDXComponents => {
  const { DateFormatter, ...components } = comp ?? {};
  return {
    ...DEFAULT_COMPONENTS,
    wrapper({ children, metadata }: WrapperProps) {
      // console.log('metadata', metadata);

      if (!metadata) {
        throw new Error('No metadata provided');
      }

      const date = metadata.date as string;
      if (date && !isValidDate(date)) {
        throw new Error(
          `Invalid date "${date}". Provide date in "YYYY/M/D", "YYYY/M/D H:m", "YYYY-MM-DD", "[YYYY-MM-DD]T[HH:mm]" or "[YYYY-MM-DD]T[HH:mm:ss.SSS]Z" format.`
        );
      }
      const dateObj = date && new Date(date);
      return (
        <article className="x-prose">
          <header className="x-prose-header">
            <nav role="navigation" className="x:mb-4 x:text-gray-500"><Link href=".">← Back to Blog</Link></nav>
            {metadata.image && <Image src={metadata.image} alt={metadata.title}
              width={800}
              height={0}
            />}
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
          <main>
            {children}
          </main>
          <aside role="bio" className="x-bio x:my-24">
            <div className="x:flex x:flex-row x:items-center x:gap-4">
              <div>
                <Image src={profilePic} alt={process.env.SITE_AUTHOR} width={100} height={100} className="x:rounded-full" />
              </div>
              <div>
                <h4>About the Author</h4>
                <h3>{process.env.SITE_AUTHOR}</h3>
                <p>{process.env.SITE_BIO}</p>
                <p><Link href="/contact" className="x-button">Let's Talk ✨</Link></p>
              </div>
            </div>
          </aside>
        </article>
      );
    },
    ...components
  };
};
