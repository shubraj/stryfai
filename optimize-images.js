import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Ottieni il percorso corrente in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, 'public', 'images', 'optimized');

// Assicuriamoci che la directory di output esista
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Configurazioni di ottimizzazione
const TEAM_IMAGE_SIZE = 240; // Dimensione ideale per i membri del team
const WEBP_QUALITY = 80; // Buon bilanciamento qualità/dimensione

// Pattern per trovare le immagini dei membri del team
const teamImagePattern = /-ia\.png$/;

// Processa tutte le immagini nella directory
async function processImages() {
  try {
    const files = fs.readdirSync(IMAGES_DIR);

    console.log(`Trovati ${files.length} file nella directory delle immagini`);

    for (const file of files) {
      const inputPath = path.join(IMAGES_DIR, file);

      // Salta directory e file non PNG
      if (fs.statSync(inputPath).isDirectory() || !file.endsWith('.png')) {
        continue;
      }

      // Per le immagini dei membri del team
      if (teamImagePattern.test(file)) {
        const outputFilename = file.replace('.png', '.webp');
        const outputPath = path.join(OUTPUT_DIR, outputFilename);

        console.log(`Ottimizzazione di ${file}...`);

        // Ottimizza e converti in WebP
        await sharp(inputPath)
          .resize(TEAM_IMAGE_SIZE, TEAM_IMAGE_SIZE, {
            fit: 'cover',
            position: 'top' // Mantieni la parte alta dell'immagine (volto)
          })
          .webp({ quality: WEBP_QUALITY })
          .toFile(outputPath);

        console.log(`Ottimizzato: ${outputPath}`);
      }
    }

    console.log('Ottimizzazione completata!');
  } catch (error) {
    console.error('Errore durante l\'ottimizzazione delle immagini:', error);
  }
}

// Esegui lo script
processImages();
