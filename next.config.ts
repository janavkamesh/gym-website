import type { NextConfig } from "next";
// @ts-ignore
import withQRCode from "next-qr";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.103'],
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