import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await fs.readFile(path.join(root, 'resources-src', 'guide-manifest.json'), 'utf8'));

for (const guide of manifest) {
  const source = path.join(root, 'resources-src', guide.slug);
  const target = path.join(root, 'public', 'resources', guide.slug);
  await fs.mkdir(path.join(target, 'assets'), { recursive: true });
  for (const extension of ['docx', 'pdf', 'epub']) {
    await fs.copyFile(path.join(source, `${guide.file}.${extension}`), path.join(target, `${guide.file}.${extension}`));
  }
  await fs.copyFile(path.join(source, 'manuscript.md'), path.join(target, `${guide.file}.md`));
  await fs.copyFile(path.join(source, 'assets', 'cover.png'), path.join(target, 'assets', 'cover.png'));
  const progress = `# Progress\n\n- [x] Research ledger\n- [x] Long-form manuscript (${guide.words.toLocaleString()} words)\n- [x] Branded cover with explainer text\n- [x] DOCX\n- [x] PDF\n- [x] EPUB\n- [ ] Website download verification\n`;
  await fs.writeFile(path.join(source, 'progress.md'), progress);
}

console.log(`Published ${manifest.length} guides to public/resources.`);
