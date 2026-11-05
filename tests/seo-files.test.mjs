import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const manifest = JSON.parse(readFileSync(new URL('../public/site.webmanifest', import.meta.url), 'utf8'));
const robots = readFileSync(new URL('../public/robots.txt', import.meta.url), 'utf8');

test('public pages receive canonical, Open Graph, and Twitter metadata', () => {
  assert.match(app, /link\[rel="canonical"\]/);
  assert.match(app, /og:url/);
  assert.match(app, /twitter:card/);
  assert.match(app, /twitter:image/);
  assert.doesNotMatch(app, /brand\/og-image\.png/);
});

test('site identity files and icons are linked and present', () => {
  assert.match(html, /rel="manifest" href="\/site\.webmanifest"/);
  assert.match(html, /rel="apple-touch-icon"/);
  assert.match(html, /rel="icon"/);
  assert.equal(manifest.name, 'Sthuthi Securities');
  for (const icon of manifest.icons) assert.equal(existsSync(new URL(`../public${icon.src}`, import.meta.url)), true, icon.src);
});

test('crawler rules reference the sitemap and exclude non-public routes', () => {
  assert.match(robots, /^Sitemap: \/sitemap\.xml$/m);
  for (const route of ['/workspace', '/demo-workspace', '/internal', '/sign-in', '/invite', '/privacy', '/terms']) {
    assert.match(robots, new RegExp(`^Disallow: ${route}$`, 'm'));
  }
});
