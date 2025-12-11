/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Forza l'output statico (necessario per GitHub Pages)
    output: 'export',

    // 2. Imposta il base path (deve corrispondere al nome della tua repository)
    basePath: '/portfolio',

    // 3. Imposta l'asset prefix per le risorse statiche
    assetPrefix: '/portfolio/',

    // 4. (Opzionale) Disabilita l'ottimizzazione delle immagini per l'export statico
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;