// @ts-check
import { createRequire } from "module";
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/' },
      { protocol: 'https', hostname: 'i.pinimg.com', pathname: '/' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/' },
      { protocol: 'https', hostname: 'storage.googleapis.com', pathname: '/' },
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/' },

      // ✅ Add this for Supabase images
      {
        protocol: "https",
        hostname: "fnhcejyptqlfoyzypsam.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.bizaihacks.com' }],
        destination: 'https://bizaihacks.com/:path*',
        permanent: true,
      },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
