// scripts/fix-paths.js

// Importazione corretta del modulo (usando la destrutturazione)
const { replaceInFile } = require('replace-in-file');

// Configurazione per la sostituzione dei percorsi
const options = {
    // Lista dei file in cui eseguire la sostituzione.
    // Next.js static export usa 'out/' come root.
    files: [
        'out/index.html',
        'out/404.html',
        'out/_next/static/**/*.css',
        'out/_next/static/**/*.js',
    ],

    // [DA]: Il percorso generato da Next.js che non funziona su GitHub Pages
    // Il pattern è regex per coprire tutti i file.
    from: /\/portfolio\/_next\/static\//g,

    // [A]: Il percorso che funziona su GitHub Pages
    // (Assume che GitHub Pages stia servendo i file statici senza il prefisso '_next')
    to: '/portfolio/static/',
};

/**
 * Esegue la sostituzione dei percorsi nei file di output.
 */
async function fixPaths() {
    console.log('--- Avvio correzione percorsi statici ---');
    console.log(`Cercando e sostituendo: ${options.from} -> ${options.to}`);

    try {
        const results = await replaceInFile(options);

        const changedFiles = results.filter(r => r.hasChanged).map(r => r.file);

        if (changedFiles.length > 0) {
            console.log(`✅ Successo! Percorsi corretti in ${changedFiles.length} file.`);
            // console.log('File modificati:', changedFiles); // Rimuovi per output più pulito
        } else {
            console.log('⚠️ Nessuna sostituzione effettuata. Verificare che il deployment sia necessario.');
        }
    }
    catch (error) {
        console.error('❌ Errore critico durante la sostituzione dei percorsi:', error);
        // Termina il processo con un errore
        process.exit(1);
    }
}

// Esegui la funzione
fixPaths();