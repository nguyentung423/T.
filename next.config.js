/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  reactStrictMode: true,
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Experimental optimizations
  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: ["@heroicons/react"],
  },
  // Disable x-powered-by header for security
  poweredByHeader: false,
};

module.exports = nextConfig;
