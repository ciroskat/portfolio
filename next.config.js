/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // DEVE ESSERE SOLO IL NOME DEL REPOSITORY
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;