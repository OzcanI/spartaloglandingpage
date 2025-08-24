import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/spartaloglandingpage',
  assetPrefix: '/spartaloglandingpage/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
