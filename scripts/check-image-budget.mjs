import { readdir, stat } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url));
const maximumRasterBytes = 350 * 1024;
const rasterExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? collectFiles(path) : [path];
    }),
  );

  return files.flat();
}

const rasterFiles = (await collectFiles(publicDirectory)).filter((path) =>
  rasterExtensions.has(extname(path).toLowerCase()),
);

const oversizedImages = [];
for (const path of rasterFiles) {
  const { size } = await stat(path);
  if (size > maximumRasterBytes) {
    oversizedImages.push({ path: relative(publicDirectory, path), size });
  }
}

if (oversizedImages.length > 0) {
  console.error('Raster image budget exceeded (350 KiB maximum):');
  oversizedImages.forEach(({ path, size }) => {
    console.error(`- ${path}: ${(size / 1024).toFixed(1)} KiB`);
  });
  process.exit(1);
}

console.log(`Image budget passed for ${rasterFiles.length} raster assets.`);
