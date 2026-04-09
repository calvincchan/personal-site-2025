type SiteConfig = {
  author: string;
  siteTitle: string;
  siteDescription: string;
  intro: string;
  siteUrl: string;
  siteOgImage: string;
  siteBio: string;
  siteEmail: string;
  sameAs: string[];
};

export const siteConfig: SiteConfig = {
  author: "Calvin C. Chan",
  siteTitle: "Calvin C. Chan | Full-Stack TypeScript Engineer",
  siteDescription: "Full-stack TypeScript engineer with 20+ years building eCommerce, SaaS, and enterprise platforms.",
  intro: "I’m a full-stack TypeScript engineer with 20+ years building eCommerce, SaaS, and enterprise platforms — from student information platforms to health record management and multi-tenant maritime operations software.\n\nI own the full lifecycle: architecture, implementation, deployment, and maintenance. I’ve worked in both solo-developer and team contexts, with a track record of replacing legacy systems, designing multi-layer features end-to-end, and leveraging AI-assisted tooling to sustain high output across complex stacks.",
  siteUrl: "https://calvincchan.com",
  siteOgImage: "https://calvincchan.com/images/calvincchan-profile.png",
  siteBio: "Full-stack TypeScript engineer with 20+ years building eCommerce, SaaS, and enterprise platforms.",
  siteEmail: "hello@calvincchan.com",
  sameAs: [
    "https://github.com/calvincchan",
    "https://www.linkedin.com/in/calvincchan",
    "https://www.youtube.com/@calvincchan",
  ],
};