import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* ✅ existing config options */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/',
      },
    ],
  },

  /* ✅ SEO Redirect Fixes */
  async redirects() {
    return [
      // 1️⃣ Redirect WWW → Non-WWW
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.bizaihacks.com' }],
        destination: 'https://bizaihacks.com/:path*',
        permanent: true,
      },

      // 2️⃣ Redirect /index.html → /
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },

      // 3️⃣ Redirect /index.php → /
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;