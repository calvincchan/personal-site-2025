import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (<div className="xtop-page">
    <section role="hero" className="xhero my-36">
      <h1 className="mb-10">Hi, I'm Calvin C. Chan 👋</h1>
      <h3>I'm a freelance developer offering to build AI-powered solutions, web apps and websites.</h3>
      <p><Link href="/contact" className="xbutton">Let's Talk ✨</Link></p>
    </section>


    <section className="my-24">
      <h2>My Works ⚙️</h2>
      <Link href="/work">View My Work →</Link>
    </section>

    <section className="my-24">
      <h2>Blog ✏️</h2>
      <p>Check out my latest articles and insights!</p>
      <Link href="/blog">View my blog posts →</Link>
    </section>

    <section className="my-24">
      <h2>Hire Me</h2>
      <p>
        I am available for freelance work. If you have a project in mind, feel free to reach out!
      </p>
      <p className="flex gap-4">
        <Link href="/contact" className="xbutton">Schedule a Call</Link>
        <Link href="/portfolio.pdf" className="xbutton">Download Resume</Link>
      </p>
    </section>
  </div>
  )
}  