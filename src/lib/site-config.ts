type SiteConfig = {
  author: string;
  jobTitle: string;
  siteTitle: string;
  siteDescription: string;
  intro: string;
  siteUrl: string;
  siteOgImage: string;
  siteBio: string;
  siteEmail: string;
  sameAs: string[];
  resumeMarkDown: string;
};

export const siteConfig: SiteConfig = {
  author: "Calvin C. Chan",
  jobTitle: "AI-Fluent Full-Stack Developer",
  siteTitle: "Calvin C. Chan | AI-Fluent Full-Stack Developer",
  siteDescription: "Full-stack developer with 20+ years of experience, applying engineering discipline and AI fluency to ship polished, production-grade software faster.",
  intro: "I’m a full-stack developer with 20+ years building SaaS, eCommerce, and enterprise platforms. I use AI as a productivity multiplier — but engineering discipline drives every decision. No vibe coding. Solid architecture, clean implementation, production-grade delivery.\n\nI own the full lifecycle: architecture, implementation, deployment, and maintenance. I’ve replaced legacy systems, designed multi-layer features end-to-end, and shipped polished products both solo and embedded in teams.\n\nI’m available for fractional and contract engagements. If you need a senior developer who moves fast without cutting corners, let’s talk.",
  siteUrl: "https://calvincchan.com",
  siteOgImage: "https://calvincchan.com/images/calvincchan-profile.png",
  siteBio: "Full-stack developer with 20+ years of experience, applying engineering discipline and AI fluency to ship polished, production-grade software faster.",
  siteEmail: "hello@calvincchan.com",
  sameAs: [
    "https://github.com/calvincchan",
    "https://www.linkedin.com/in/calvincchan",
    "https://www.youtube.com/@calvincchan",
  ],
  resumeMarkDown: "calvin-c-chan-resume.md"
};