const nextConfig = {
    output: 'export',
    basePath: '/portfolio', // se vuoi
    images: {
        unoptimized: true, // permette di usare immagini da /public anche con next export
    },
};

module.exports = nextConfig;
