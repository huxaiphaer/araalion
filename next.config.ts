import type { NextConfig } from "next";

// basePath is only needed when the site is served from a sub-path, e.g.
// GitHub Pages at https://<user>.github.io/araalion/. On Coolify (or any
// root-domain host) BASE_PATH is left unset, so assets resolve from "/"
// instead of "/araalion/_next/..." — which is what fixes the missing CSS.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",          // Static HTML export (out/)
  basePath,                  // "" on Coolify, "/araalion" on GitHub Pages
  images: {
    unoptimized: true,       // Required for static export
  },
  trailingSlash: true,       // Ensures proper path resolution
};

export default nextConfig;
