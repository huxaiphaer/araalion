import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // Static HTML export for GitHub Pages
  basePath: "/araalion",     // Must match your repo name
  images: {
    unoptimized: true,       // Required for static export
  },
  trailingSlash: true,       // Ensures proper path resolution on GitHub Pages
};

export default nextConfig;
