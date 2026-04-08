import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import { ProjectCaseStudy } from "../_components/ProjectCaseStudy";

export const metadata: Metadata = {
  title: "Icon PNG Image Maker",
  description: "A web tool for generating high-quality PNG icon images for apps, websites, and design projects.",
  alternates: {
    canonical: siteConfig.siteUrl + "/projects/iconimg",
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
