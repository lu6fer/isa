/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  output: 'standalone',
  images: {
    domains: ['dummyimage.com', 'loremflickr.com'],
  }
}

module.exports = nextConfig
