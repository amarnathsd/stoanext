/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['flagcdn.com'], // if you are fetching external images from flagcdn.com
    },
    reactStrictMode: true,
    swcMinify: true, // Optional performance improvement
  };
  
  export default nextConfig;
  