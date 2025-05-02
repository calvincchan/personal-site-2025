import Link from "next/link";

export default function Page() {
  return (<div className="x-top-page">
    <section role="hero" className="x:my-36">
      <h1 className="x:mb-10">Hi, I&apos;m Calvin C. Chan 👋</h1>
      <h3 className="x:text-lg">I am a freelance developer offering to build AI-powered solutions, web apps and websites.</h3>
      <p><Link href="/contact" className="x-button">Let&apos;s Talk ✨</Link></p>
    </section>


    <section className="x:my-24">
      <h2>My Works ⚙️</h2>
      <Link href="/work">View My Work →</Link>
    </section>

    <section className="x:my-24">
      <h2>Blog ✏️</h2>
      <p>Check out my latest articles and insights!</p>
      <Link href="/blog">View my blog posts →</Link>
    </section>

    <section className="x:my-24">
      <h2>Hire Me</h2>
      <p>
        I am available for freelance work. If you have a project in mind, feel free to reach out!
      </p>
      <p className="x:flex x:gap-4">
        <Link href="/contact" className="x-button">Schedule a Call</Link>
        <Link href="/portfolio.pdf" className="x-button">Download Resume</Link>
      </p>
    </section>
  </div>
  );
}  