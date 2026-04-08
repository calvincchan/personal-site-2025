import Link from "next/link";
import { BioCard } from "src/_components/BioCard";

type ProjectLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  target?: string;
};

type TechItem = {
  name: string;
  icon?: React.ReactNode;
};

type ProjectCaseStudyProps = {
  title: string;
  description?: string;
  links?: ProjectLink[];
  techStack?: TechItem[];
  children?: React.ReactNode;
};

export function ProjectCaseStudy({ title, description, links, techStack, children }: ProjectCaseStudyProps) {
  return (
    <div>
      <header className="x-page-header">
        <h1>{title}</h1>
        {description && <h2>{description}</h2>}
        {links && links.length > 0 && (
          <p className="x:flex x:gap-2 x:flex-wrap">
            {links.map((link, i) => (
              <Link key={i} href={link.href} className="x-button" target={link.target}>
                {link.icon}{link.label}
              </Link>
            ))}
          </p>
        )}
        {techStack && techStack.length > 0 && (
          <>
            <h3>Tech Stack</h3>
            <div className="x-tech-stack">
              {techStack.map((item, i) => (
                <div key={i} className="x-tech-stack-item">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </header>
      <main className="x:prose">
        {children}
      </main>
      <BioCard />
    </div>
  );
}
