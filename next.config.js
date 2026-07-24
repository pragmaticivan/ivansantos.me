/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars2.githubusercontent.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      {
        source:
          "/blog/2023-06-24-replacing-your-kubernetes-hpa-resoursces-with-keda-scaled-objects",
        destination:
          "/blog/2023-06-24-replacing-your-kubernetes-hpa-resources-with-keda-scaled-objects",
        permanent: true,
      },
    ];
  },
  // Add security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
