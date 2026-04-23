/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  experimental: {
    serverComponentsExternalPackages: ['lucide-react'],
  },
  images: {
    domains: ['images.unsplash.com', 'img.icons8.com'],
  },
};

module.exports = nextConfig;
