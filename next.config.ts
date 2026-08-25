import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Emit plain HTML, CSS, and JavaScript that can run on any static host.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
