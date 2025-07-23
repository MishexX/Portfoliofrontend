/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/skills',
        destination: 'http://localhost:5000/api/skills',
      },
      {
        source: '/api/experience',
        destination: 'http://localhost:5000/api/experience',
      },
      {
        source: '/api/education',
        destination: 'http://localhost:5000/api/education',
      },
      {
        source: '/api/profile-image',
        destination: 'http://localhost:5000/api/profile-image',
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
