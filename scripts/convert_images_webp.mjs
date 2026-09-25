#!/usr/bin/env node
/**
 * Converts the game's photographic assets from JPEG to WebP.
 *
 * The scene plates dominate the download (and the offline precache), and WebP at q82 is
 * visually indistinguishable on these images while cutting them to roughly a quarter.
 *
 * Requires sharp, which is intentionally not a project dependency (26 MB of native
 * binaries for a one-off asset pass):
 *
 *   npm i --no-save sharp
 *   node scripts/convert_images_webp.mjs            # convert, keep originals
 *   node scripts/convert_images_webp.mjs --delete   # convert and remove the JPEGs
 *
 * Icon and native-asset sources are skipped: app_icon.jpg feeds
 * scripts/generate_native_assets.py, and the PNG icons are referenced by the manifest.
 */
import { readdir, stat, unlink, writeFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const QUALITY = 82;
const TARGET_DIRS = ['public', 'public/levels', 'public/avatars', 'public/relics'];
const SKIP = new Set(['app_icon.jpg']);

const shouldDelete = process.argv.includes('--delete');

async function jpegsIn(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && /\.jpe?g$/i.test(e.name) && !SKIP.has(e.name))
    .map((e) => join(dir, e.name));
}

const mapping = [];
let before = 0;
let after = 0;
let failed = 0;

for (const dir of TARGET_DIRS) {
  let files;
  try {
    files = await jpegsIn(dir);
  } catch {
    continue;
  }

  for (const file of files) {
    const out = file.replace(/\.jpe?g$/i, '.webp');
    try {
      const { size: srcSize } = await stat(file);
      await sharp(file).webp({ quality: QUALITY, effort: 5 }).toFile(out);
      const { size: outSize } = await stat(out);

      before += srcSize;
      after += outSize;
      mapping.push({ from: basename(file), to: basename(out), dir });

      if (shouldDelete) await unlink(file);
    } catch (err) {
      failed++;
      console.error(`  ! ${file}: ${err.message}`);
    }
  }
  console.log(`${dir}: ${files.length} file`);
}

const mb = (n) => (n / 1048576).toFixed(1);
console.log(
  `\n${mapping.length} convertiti, ${failed} errori` +
    `\n${mb(before)} MB -> ${mb(after)} MB` +
    ` (-${(100 - (after / before) * 100).toFixed(1)}%)` +
    `\noriginali ${shouldDelete ? 'rimossi' : 'conservati (usa --delete)'}`
);

await writeFile(
  'scratch/webp_mapping.json',
  JSON.stringify({ quality: QUALITY, extensions: ['.jpg', '.jpeg'], mapping }, null, 2)
);
console.log('mappatura -> scratch/webp_mapping.json');
