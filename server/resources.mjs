import path from 'node:path';

const types = Object.freeze({
  pdf: 'application/pdf',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  epub: 'application/epub+zip',
  md: 'text/markdown; charset=utf-8',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
});

function resourceFiles(base) {
  return Object.freeze({
    'guide-pdf': Object.freeze({ file: `${base}.pdf`, type: types.pdf }),
    'guide-docx': Object.freeze({ file: `${base}.docx`, type: types.docx }),
    'guide-epub': Object.freeze({ file: `${base}.epub`, type: types.epub }),
    'guide-md': Object.freeze({ file: `${base}.md`, type: types.md }),
    'worksheet-pdf': Object.freeze({ file: `${base}-Worksheet-Pack.pdf`, type: types.pdf }),
    'worksheet-docx': Object.freeze({ file: `${base}-Worksheet-Pack.docx`, type: types.docx }),
    'worksheet-xlsx': Object.freeze({ file: `${base}-Worksheet-Pack.xlsx`, type: types.xlsx }),
  });
}

const resourceDownloads = Object.freeze({
  'saas-founders-enterprise-security-reviews': resourceFiles('The-SaaS-Founders-Guide-to-Passing-Enterprise-Security-Reviews'),
  'scope-web-app-api-penetration-test': resourceFiles('How-to-Scope-a-Web-Application-and-API-Penetration-Test'),
  'first-90-days-startup-security-program': resourceFiles('The-First-90-Days-of-a-Startup-Security-Program'),
  'preparing-first-customer-security-audit': resourceFiles('Preparing-for-Your-First-Customer-Security-Audit'),
  'repeatable-security-testing-program': resourceFiles('Building-a-Repeatable-Security-Testing-Program'),
  'ai-security-customer-support-agents': resourceFiles('AI-Security-for-Customer-Support-Agents'),
  'security-proof-enterprise-deals': resourceFiles('Security-Proof-That-Helps-Close-Enterprise-Deals'),
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
