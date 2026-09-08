/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  trailingSlash: true,
  images: { unoptimized: true },
  transpilePackages: ["next-mdx-remote"],
};
export default nextConfig;
