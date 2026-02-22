/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // ─── www → non-www permanent redirect (301) ───────────────────────────────
  // Catches ALL paths: www.tatvabeverages.com/* → tatvabeverages.com/*
  // Uses `permanent: true` which Next.js maps to HTTP 301.
  // `has` ensures this rule only fires when the host is "www.tatvabeverages.com",
  // preventing any redirect loop on the canonical domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.tatvabeverages.com",
          },
        ],
        destination: "https://tatvabeverages.com/:path*",
        permanent: true, // HTTP 301
      },
    ];
  },
};

export default nextConfig;
