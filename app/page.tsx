import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>Building AI-Powered Web Solutions</h1>
      <p>Crafting performant React & Node.js applications with SEO at the core.</p>
      <div className="mt-8 space-x-4">
        <Link href="/contact" className="px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary/90">
          Schedule a Call
        </Link>
        <a href="/portfolio.pdf" className="px-6 py-3 border border-primary rounded-lg hover:bg-primary/10">
          Download Resume
        </a>
      </div>
    </>
  );
}
