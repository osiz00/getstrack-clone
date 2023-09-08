/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/stark-lab/**',
          },
          {
            protocol: 'https',
            hostname: 'images.getstark.co',
            port: '',
            pathname: '/marketing/**',
          },
        ],
      },
}

module.exports = nextConfig
