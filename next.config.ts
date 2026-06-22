import type { NextConfig } from "next";

// On GitHub Pages the site is served from https://<user>.github.io/<repo>.
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH=/<repo> so assets resolve
// correctly; locally it is empty so dev/build run at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // static HTML export — required for GitHub Pages
  basePath, // prefixes routes + next/image + next/font + next/link
  trailingSlash: true, // emit /route/index.html for reliable static hosting
  images: {
    // Static host has no Next image server. A custom loader serves files as-is
    // AND applies basePath to the src (unoptimized alone does not). See image-loader.ts.
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
};

export default nextConfig;
