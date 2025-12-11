#!/bin/bash

set -e

REPO_URL=$(git config --get remote.origin.url)
BRANCH="gh-pages"

echo "🧹 Pulizia precedente..."
rm -rf out

echo "🔧 Build del progetto Next.js..."
npm run build || { echo "❌ Build fallita"; exit 1; }

echo "🌿 Creazione branch $BRANCH..."
git checkout $BRANCH
git reset --hard

echo "📂 Copia dei file statici da out/..."
cp -r out/* .

echo "📝 Commit..."
git add .
git commit -m "Deploy automatico"

echo "⬆️ Push su $BRANCH..."
git push -f "$REPO_URL" $BRANCH

echo "🔙 Torno al branch main..."
git checkout main

echo "✅ Deploy completato con successo!"
echo "🌐 Il sito sarà disponibile su:"
echo "https://ciroskat.github.io/portfolio/"

