import GitHubIcon from "@/_icons/GitHubIcon";
import { siteConfig } from "@/lib/site-config";
import { FrontMatter } from "nextra";
import { ProjectCaseStudy } from "../_components/ProjectCaseStudy";

export const metadata: FrontMatter = {
  title: "DisplayToggle",
  description: "A minimal Swift CLI to turn the MacBook built-in display on or off without closing the lid.",
  alternates: {
    canonical: siteConfig.siteUrl + "/projects/displaytoggle",
  },
  other: {
    published: "true",
    tags: "Swift, macOS",
  },
  date: "2026-04-07",
};

export default function Page() {
  return (
    <ProjectCaseStudy
      title={metadata.title as string}
      description={metadata.description as string}
      links={[
        {
          label: "View on GitHub",
          href: "https://github.com/calvincchan/displaytoggle",
          icon: <GitHubIcon />,
          target: "_blank",
        },
      ]}
    >
      {/* TODO: Add case study content */}
    </ProjectCaseStudy>
  );
}
