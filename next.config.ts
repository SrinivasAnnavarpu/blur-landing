import type { NextConfig } from "next";

// PWA support (service worker + caching). Works great on Vercel.
// Note: In dev mode, SW is disabled to avoid caching headaches.
// Docs: https://github.com/shadowwalker/next-pwa
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  // keep defaults; PWA plugin will extend this
  // Next 16 enables Turbopack by default; next-pwa injects webpack config.
  // Adding an empty turbopack config avoids the "webpack config + no turbopack config" error.
  turbopack: {},
};

export default withPWA(nextConfig);
