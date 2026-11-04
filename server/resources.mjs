import path from 'node:path';

const types = Object.freeze({
  pdf: 'application/pdf',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  epub: 'application/epub+zip',
  md: 'text/markdown; charset=utf-8',
});

function guideFiles(base) {
  return Object.freeze(Object.fromEntries(Object.entries(types).map(([format, type]) => [
    format,
    Object.freeze({ file: `${base}.${format}`, type }),
  ])));
}

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
  'saas-founders-enterprise-security-reviews': guideFiles('The-SaaS-Founders-Guide-to-Passing-Enterprise-Security-Reviews'),
  'scope-web-app-api-penetration-test': guideFiles('How-to-Scope-a-Web-Application-and-API-Penetration-Test'),
  'first-90-days-startup-security-program': guideFiles('The-First-90-Days-of-a-Startup-Security-Program'),
  'preparing-first-customer-security-audit': guideFiles('Preparing-for-Your-First-Customer-Security-Audit'),
  'repeatable-security-testing-program': guideFiles('Building-a-Repeatable-Security-Testing-Program'),
  'ai-security-customer-support-agents': guideFiles('AI-Security-for-Customer-Support-Agents'),
  'security-proof-enterprise-deals': guideFiles('Security-Proof-That-Helps-Close-Enterprise-Deals'),
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
