// import { useSelectedLayoutSegments } from 'next/navigation';
// import { getPageBySlug } from './utils';

export async function generateMetadata({ params }) {
  return {
    title: {
      default: 'Projects | Calvin C. Chan',
      template: '%s | Projects | Calvin C. Chan'
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