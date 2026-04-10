import nextra from "nextra";

const withNextra = nextra({
  // theme: "nextra-theme-blog",
  // themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
  readingTime: true,
});

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/about',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "calvincchan.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
});
