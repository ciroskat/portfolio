/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    // Rimuoviamo la logica isProd qui se vuoi testare il path locale, 
    // OPPURE la manteniamo se vuoi che in locale sia su localhost:3000/
    basePath: isProd ? '/portfolio' : '',

    // assetPrefix non è quasi mai necessario se basePath è configurato correttamente
    // e spesso causa problemi con i font o i file JSON di Next.js
    // assetPrefix: isProd ? 'https://ciroskat.github.io/portfolio/' : '',

    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;