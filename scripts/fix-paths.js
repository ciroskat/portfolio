// scripts/fix-paths.js
const { replaceInFile } = require('replace-in-file'); // <- MODIFICA QUI

const options = {
    // Lista dei file dove eseguire la sostituzione
    files: [
        'out/index.html',
        'out/404.html',
        'out/_next/static/**/*.css',
        'out/_next/static/**/*.js',
    ],
    // [DA] Il percorso generato da Next.js
    from: /\/portfolio\/_next\/static\//g,
    // [A] Il percorso che funziona su GitHub Pages
    to: '/portfolio/static/',
};

async function fixPaths() {
    try {
        // La funzione corretta è replaceInFile, chiamata con await
        const results = await replaceInFile(options);

        const changedFiles = results.filter(r => r.hasChanged).map(r => r.file);

        if (changedFiles.length > 0) {
            console.log(`✅ Percorsi modificati con successo in ${changedFiles.length} file.`);
            console.log('File modificati:', changedFiles);
        } else {
            console.log('⚠️ Nessuna sostituzione effettuata. Verificare se il pattern è cambiato.');
        }

    }
    catch (error) {
        console.error('❌ Errore durante la sostituzione dei percorsi:', error);
        process.exit(1);
    }
}

fixPaths();