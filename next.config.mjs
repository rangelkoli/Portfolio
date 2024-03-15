/** @type {import('next').NextConfig} */
const nextConfig = {

    // Target must be serverless
    images: {
        domains: ['images.unsplash.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            
          },
        ],
    },    
};

export default nextConfig;
