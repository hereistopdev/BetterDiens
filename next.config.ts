import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ComingSoon',
        permanent: true, // permanent (301) or temporary (302)
      },
    ];
  },
};

export default nextConfig;
