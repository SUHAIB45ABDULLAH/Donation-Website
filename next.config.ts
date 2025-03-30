import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false, // Optional, helps with static hosting
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // Fix for certain dependencies
    return config;
  },

  experimental: {
  },
  reactStrictMode: false, // Sometimes strict mode can cause hydration issues
 
};

export default nextConfig;


