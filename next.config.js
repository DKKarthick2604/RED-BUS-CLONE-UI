/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['st.redbus.in'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
