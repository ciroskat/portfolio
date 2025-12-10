/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',       // per generare sito statico
    basePath: '/portfolio'  // necessario se il sito non è alla root
};

module.exports = nextConfig;
