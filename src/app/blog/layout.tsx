// import { useSelectedLayoutSegments } from 'next/navigation';
// import { getPageBySlug } from './utils';

export async function generateMetadata({ params }) {
  // In a static route, useSelectedLayoutSegments() gives us the path segments
  // const segments = await useSelectedLayoutSegments();
  // const slug = segments.join('/');

  // Get the current blog post metadata
  // const post = await getPageBySlug(slug);
  const post = null;

  return {
    title: {
      default: 'Blog | Calvin C. Chan',
      template: '%s | Blog | Calvin C. Chan'
    },
    keywords: [
      'Calvin C. Chan'
    ],
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}