import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "cdn.vectorstock.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
