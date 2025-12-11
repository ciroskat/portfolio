/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
    images: {
        unoptimized: true,
    },
    turbopack: {
        root: __dirname,
    }

};


module.exports = nextConfig;
