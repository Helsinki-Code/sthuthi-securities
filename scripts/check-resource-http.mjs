import { resourceDownloads } from '../server/resources.mjs';

for (const [slug, formats] of Object.entries(resourceDownloads)) {
  for (const [format, record] of Object.entries(formats)) {
    const response = await fetch(`http://localhost:4173/api/resources/${slug}/download?format=${format}`, { method: 'HEAD' });
    if (!response.ok) throw new Error(`${slug}/${format}: ${response.status}`);
    const disposition = response.headers.get('content-disposition') || '';
    const type = response.headers.get('content-type') || '';
    const length = Number(response.headers.get('content-length'));
    if (!disposition.includes(record.file)) throw new Error(`${slug}/${format}: bad disposition ${disposition}`);
    if (!type.startsWith(record.type.split(';')[0])) throw new Error(`${slug}/${format}: bad type ${type}`);
    if (!Number.isFinite(length) || length < 1000) throw new Error(`${slug}/${format}: bad length ${length}`);
  }
  console.log(`ok  ${slug}  ${Object.keys(formats).length} formats`);
}
