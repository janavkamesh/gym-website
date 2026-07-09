import type { NextConfig } from "next";
// @ts-ignore
import withQRCode from "next-qr";

const nextConfig: NextConfig = {
  // Added the .106 IP from your terminal, kept .103 just in case, and added pinggy
  allowedDevOrigins: ['192.168.0.103', '192.168.0.106', 'a.pinggy.io', 'localhost:3000'],
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withQRCode(nextConfig);