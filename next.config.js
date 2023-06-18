/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yrkmfyagoygyrmzacbjq.supabase.co']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
