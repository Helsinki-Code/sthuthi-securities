import path from 'node:path';

const resourceDownloads = Object.freeze({
  'penetration-test-scoping-workbook': Object.freeze({
    pdf: Object.freeze({
      file: 'Penetration-Test-Scoping-Workbook.pdf',
      type: 'application/pdf',
    }),
    docx: Object.freeze({
      file: 'Penetration-Test-Scoping-Workbook.docx',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    }),
    epub: Object.freeze({
      file: 'Penetration-Test-Scoping-Workbook.epub',
      type: 'application/epub+zip',
    }),
    md: Object.freeze({
      file: 'Penetration-Test-Scoping-Workbook.md',
      type: 'text/markdown; charset=utf-8',
    }),
  }),
});

function resolveResourceDownload(distRoot, slug, format) {
  const record = resourceDownloads[slug]?.[format];
  if (!record) return null;
  const directory = path.join(distRoot, 'resources', slug);
  const filePath = path.join(directory, record.file);
  if (path.dirname(filePath) !== directory) return null;
  return { ...record, filePath };
}

export { resourceDownloads, resolveResourceDownload };
