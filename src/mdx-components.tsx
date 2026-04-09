// throws TypeError: Cannot read properties of null (reading 'useMemo')
'use no memo';

/* eslint sort-keys: error */
import Image from 'next/image';
import Link from 'next/link';
import {
  Callout,
  Code,
  Details,
  Pre,
  Summary,
  Table,
  withGitHubAlert,
  withIcons
} from 'nextra/components';
import type { MDXComponents } from 'nextra/mdx-components';
import { useMDXComponents as getNextraMDXComponents } from 'nextra/mdx-components';
import type { FC } from 'react';
import { siteConfig } from '@/lib/site-config';
import { BioCard } from './_components/BioCard';
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
      if (!metadata) {
        throw new Error('No metadata provided');
      }

      // Create JSON-LD schema for the blog post
      const imageUrl = metadata.image?.startsWith("http")
        ? metadata.image
        : metadata.image ? `${siteConfig.siteUrl}${metadata.image}` : undefined;
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "author": {
          "@type": "Person",
          "name": metadata.author || siteConfig.author,
          "url": siteConfig.siteUrl,
        },
        "datePublished": metadata.date,
        ...(metadata.lastmod && { "dateModified": metadata.lastmod }),
        "description": metadata.description,
        "headline": metadata.title,
        "image": imageUrl,
        "inLanguage": "en-CA",
        "keywords": metadata.keywords || metadata.tags,
        "publisher": {
          "@type": "Person",
          "name": siteConfig.author,
          "url": siteConfig.siteUrl,
        },
        ...(metadata.readingTime?.minutes && {
          "wordCount": Math.round(metadata.readingTime.minutes * 200),
        }),
      };

      const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "item": siteConfig.siteUrl,
            "name": "Home",
            "position": 1,
          },
          {
            "@type": "ListItem",
            "item": `${siteConfig.siteUrl}/blog`,
            "name": "Blog",
            "position": 2,
          },
          {
            "@type": "ListItem",
            "name": metadata.title,
            "position": 3,
          },
        ],
      };

      const date = metadata.date as string;
      if (date && !isValidDate(date)) {
        throw new Error(
          `Invalid date "${date}". Provide date in "YYYY/M/D", "YYYY/M/D H:m", "YYYY-MM-DD", "[YYYY-MM-DD]T[HH:mm]" or "[YYYY-MM-DD]T[HH:mm:ss.SSS]Z" format.`
        );
      }
      const dateObj = date && new Date(date);
      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          />
          <article className="x:prose x:dark:prose-invert">
            <header className="x-blog-header">
              <nav role="navigation" className="x:mb-4 x:text-gray-500"><Link href="/blog">← Back to Blog</Link></nav>
              {metadata.image && <Image src={metadata.image} alt={metadata.title}
                width={800}
                height={0}
                priority
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
            {children}
          </article>
          <BioCard />
        </>
      );
    },
    ...components
  };
};
