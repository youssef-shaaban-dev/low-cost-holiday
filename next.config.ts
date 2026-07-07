import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ahnrawayhnobdxjookax.supabase.co",
      },
    ],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
