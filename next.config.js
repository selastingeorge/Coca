/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.pravatar.cc',
            port: '',
          },
        ],
    },
  reactStrictMode: true,
  experimental: { optimizeCss: true }
}

module.exports = nextConfig
