/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['next-mdx-remote'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable SWC for faster builds and avoid trace collection issues
  experimental: {
    disableOptimizedRsbuild: true,
  },
};

export default nextConfig;
