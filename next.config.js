/** @type {import('next').NextConfig} */

// When deployed to GitHub Pages the site lives under /<repo-name>,
// so the build sets NEXT_PUBLIC_BASE_PATH (e.g. "/knokout").
// Locally it is empty and everything works at the root as before.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
