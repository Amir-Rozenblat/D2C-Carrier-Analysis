import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Allow larger file uploads
    },
  },
  // Empty turbopack config to silence warning
  turbopack: {},
};

export default nextConfig;
