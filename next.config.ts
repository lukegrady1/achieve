import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder art ships as local SVGs; allow next/image to optimise them.
    // Replace with real photos (jpg/webp) and these flags can be removed.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
