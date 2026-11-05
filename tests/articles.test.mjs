import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const articleSource = readFileSync(new URL('../src/articles.ts', import.meta.url), 'utf8');
const appSource = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const slugs = [...articleSource.matchAll(/"slug": "([^"]+)"/g)].map(match => match[1]);

test('the article catalog contains only the 20 imported security articles', () => {
  assert.equal(slugs.length, 20);
  assert.equal(new Set(slugs).size, 20);
  assert.ok(slugs.includes('agentic-ai-security'));
  assert.ok(slugs.includes('web-application-penetration-testing'));
  assert.ok(slugs.includes('what-is-ai-penetration-testing'));
  assert.doesNotMatch(articleSource, /does-soc-2-require-a-penetration-test/);
  assert.doesNotMatch(articleSource, /security-questionnaire-evidence-checklist/);
});

test('every imported article has both branded image assets and a sitemap URL', () => {
  for (const slug of slugs) {
    assert.equal(existsSync(new URL(`../public/articles/${slug}-featured.png`, import.meta.url)), true, `${slug} featured image`);
    assert.equal(existsSync(new URL(`../public/articles/${slug}-explainer.png`, import.meta.url)), true, `${slug} explainer image`);
    assert.match(sitemap, new RegExp(`<loc>/blog/${slug}</loc>`));
  }
});

test('articles publish Shalini Tomar as the person author in the page and schema', () => {
  assert.match(appSource, /By Shalini Tomar, CEO/);
  assert.match(appSource, /'@type': 'Person', name: 'Shalini Tomar', jobTitle: 'CEO'/);
  assert.match(appSource, /'@type': 'FAQPage'/);
});

test('imported copy has working heading anchors and no duplicate markdown H1 or future verification label', () => {
  assert.match(articleSource, /<h2 id=\\"/);
  assert.doesNotMatch(articleSource, /"body": "<p>#/);
  assert.doesNotMatch(articleSource, /Last verified: Q1 2027/i);
  assert.doesNotMatch(articleSource, /href=\\"\/contact\/?\\"/);
});

test('every internal article link resolves to an imported article', () => {
  const linkedSlugs = [...articleSource.matchAll(/href=\\"\/blog\/([^#?"\\]+)(?:#[^"\\]+)?\\"/g)].map(match => match[1]);
  assert.ok(linkedSlugs.length > 40, 'expected a substantial internal-link network');
  for (const linkedSlug of linkedSlugs) assert.ok(slugs.includes(linkedSlug), `missing internal article: ${linkedSlug}`);
});
