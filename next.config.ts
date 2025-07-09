import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "**",
    }]
  },
}
module.exports = nextConfig

export default nextConfig;

