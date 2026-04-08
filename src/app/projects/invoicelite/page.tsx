import GitHubIcon from "@/_icons/GitHubIcon";
import { siteConfig } from "@/lib/site-config";
import { FrontMatter } from "nextra";
import { ProjectCaseStudy } from "../_components/ProjectCaseStudy";

export const metadata: FrontMatter = {
  title: "InvoiceLite",
  description: "A lightweight CLI invoice tool for freelancers. Zero config, file-based, fully scriptable — designed to be driven by AI agents or used directly from the terminal.",
  alternates: {
    canonical: siteConfig.siteUrl + "/projects/invoicelite",
  },
  other: {
    published: "true",
    tags: "TypeScript",
  },
  date: "2026-04-08",
};

export default function Page() {
  return (
    <ProjectCaseStudy
      title={metadata.title as string}
      description={metadata.description as string}
      links={[
        {
          label: "View on GitHub",
          href: "https://github.com/calvincchan/invoicelite",
          icon: <GitHubIcon />,
          target: "_blank",
        },
      ]}
    >
      {/* TODO: Add case study content */}
    </ProjectCaseStudy>
  );
}
