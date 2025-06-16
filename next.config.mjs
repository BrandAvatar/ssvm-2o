/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ssvmtransformationindia.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
