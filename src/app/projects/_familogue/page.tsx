import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import { ProjectCaseStudy } from "../_components/ProjectCaseStudy";

export const metadata: Metadata = {
  title: "Familogue",
  description: "Web and automation work for Familogue.ca — a non-profit dedicated to Cantonese parenting and language preservation.",
  alternates: {
    canonical: siteConfig.siteUrl + "/projects/familogue",
  },
  other: {
    published: "false",
  },
};

export default function Page() {
  return (
    <ProjectCaseStudy
      title={metadata.title as string}
      description={metadata.description as string}
    >
      {/* TODO: Add case study content */}
      <p>Content coming soon.</p>
    </ProjectCaseStudy>
  );
}
