import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",          // Static HTML export for GitHub Pages
  basePath: isProd ? "/araalion" : "",  // Repo name on GitHub Pages; no prefix in dev so localhost:3000/ works
  turbopack: {
    root: __dirname,         // Pin workspace root — a stray lockfile in $HOME made Turbopack watch the entire home directory
  },
  images: {
    unoptimized: true,       // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web-xolb0reinzyryh7e2bwjykqy.153.75.248.169.sslip.io",
      },
    ],
  },
  trailingSlash: true,       // Ensures proper path resolution on GitHub Pages
};

export default nextConfig;
