import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { build } from 'vite';
import { generateSitemap } from './generate-sitemap.mjs';

await generateSitemap();

const result = await build({
  configFile: false,
  plugins: [react()],
  publicDir: false,
  logLevel: 'silent',
  build: { write: false },
});

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const buildResult of Array.isArray(result) ? result : [result]) {
  for (const output of buildResult.output) {
    const destination = path.join('dist', output.fileName);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, output.type === 'asset' ? output.source : output.code);
  }
}
await cp('public', 'dist', { recursive: true, force: true });
console.log('Copied public assets to dist.');
