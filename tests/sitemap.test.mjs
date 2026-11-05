import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { services } from '../src/catalog.mjs';
import { articleRoutes, buildSitemap, canonicalOrigin, generateSitemap, staticRoutes } from '../scripts/generate-sitemap.mjs';

const articleSource = readFileSync(new URL('../src/articles.ts', import.meta.url), 'utf8');
const appSource = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');

test('generated sitemap matches the current route catalogs', async () => {
  const generated = await generateSitemap({ write: false });
  const published = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  const publishedLlms = readFileSync(new URL('../public/llms.txt', import.meta.url), 'utf8');
  assert.equal(published, generated.sitemap);
  assert.equal(publishedLlms, generated.llms);
  assert.equal((published.match(/<url>/g) || []).length, staticRoutes(appSource).length + services.length + articleRoutes(articleSource).length);
  assert.equal((publishedLlms.match(/^- \[.+\]\(\/blog\//gm) || []).length, articleRoutes(articleSource).length);
  assert.doesNotMatch(publishedLlms, /does-soc-2-require-a-penetration-test/);
});

test('sitemap contains every service and article exactly once', () => {
  const sitemap = buildSitemap({ appSource, articleSource });
  for (const service of services) assert.equal((sitemap.match(new RegExp(`<loc>/services/${service.slug}</loc>`, 'g')) || []).length, 1);
  for (const article of articleRoutes(articleSource)) assert.equal((sitemap.match(new RegExp(`<loc>${article.path}</loc>`, 'g')) || []).length, 1);
});

test('private, demo, authentication, and draft routes stay out of search indexing', () => {
  const sitemap = buildSitemap({ appSource, articleSource });
  for (const route of ['/workspace', '/demo-workspace', '/internal', '/sign-in', '/invite', '/privacy', '/terms']) {
    assert.doesNotMatch(sitemap, new RegExp(`<loc>${route}</loc>`));
  }
});

test('configured canonical origins are validated and produce absolute locations', () => {
  assert.equal(canonicalOrigin('https://security.example.com/'), 'https://security.example.com');
  assert.throws(() => canonicalOrigin('http://security.example.com'), /HTTPS/);
  assert.throws(() => canonicalOrigin('https://security.example.com/path'), /scheme and host/);
  assert.match(buildSitemap({ appSource, articleSource, origin: 'https://security.example.com' }), /<loc>https:\/\/security\.example\.com\/resources<\/loc>/);
});

test('a new public static route is discovered without editing the sitemap generator', () => {
  const appWithNewRoute = `${appSource}\n<Route path="/new-public-page" element={<div />} />`;
  assert.match(buildSitemap({ appSource: appWithNewRoute, articleSource }), /<loc>\/new-public-page<\/loc>/);
});
