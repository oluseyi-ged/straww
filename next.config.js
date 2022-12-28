/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  nextConfig,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
}
