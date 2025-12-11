
/** @type {import('next').NextConfig} */
const repo = 'portfolio'; // nome esatto del repo
const username = 'ciroskat'; // tuo username GitHub
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    // imposta export statico (Next 13+/14)
    output: 'export',

    // base path solo in produzione, in locale resta vuoto
    basePath: isProd ? `/${repo}` : '',

    // assetPrefix ASSOLUTO in produzione (evita 404 su Pages)
    assetPrefix: isProd ? `https://${username}.github.io/${repo}/` : '',

    images: {
        unoptimized: true,
    },

    // spesso utile su Pages per risoluzione dei path
    trailingSlash: true,
};

module.exports = nextConfig;
