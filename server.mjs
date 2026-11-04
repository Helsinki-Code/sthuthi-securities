import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { demoEngagement, runSyntheticAssessment, validateAssessmentRequest } from './server/domain.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
const requestsFile = path.join(root, 'data', 'requests.json');
const port = Number(process.env.PORT || 4173);
const rate = new Map();

async function readBody(req) {
  let body = '';
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 20_000) throw new Error('Request is too large');
  }
  return JSON.parse(body || '{}');
}

function json(res, status, value) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  res.end(JSON.stringify(value));
}

async function saveRequest(value) {
  let rows = [];
  try { rows = JSON.parse(await fs.readFile(requestsFile, 'utf8')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  rows.push(value);
  await fs.writeFile(requestsFile, `${JSON.stringify(rows, null, 2)}\n`, { mode: 0o600 });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (url.pathname === '/api/health') return json(res, 200, { status: 'ok', mode: 'demo', payment: 'unconnected', notifications: 'unconnected' });
    if (url.pathname === '/api/requests' && req.method === 'POST') {
      const key = req.socket.remoteAddress || 'unknown';
      const last = rate.get(key) || 0;
      if (Date.now() - last < 10_000) return json(res, 429, { error: 'Please wait before sending another request.' });
      const record = validateAssessmentRequest(await readBody(req));
      await saveRequest(record);
      rate.set(key, Date.now());
      return json(res, 201, { id: record.id, stored: true, notificationStatus: record.notificationStatus });
    }
    if (url.pathname === '/api/demo/run' && req.method === 'POST') {
      const input = await readBody(req);
      return json(res, 200, runSyntheticAssessment({ engagement: demoEngagement, fixed: input.fixed === true, cancelled: input.cancelled === true }));
    }
    if (url.pathname.startsWith('/api/')) return json(res, 404, { error: 'Not found' });

    const relative = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
    let candidate = path.normalize(path.join(dist, relative));
    if (!candidate.startsWith(dist)) return json(res, 403, { error: 'Forbidden' });
    try {
      const body = await fs.readFile(candidate);
      const ext = path.extname(candidate);
      const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain' };
      res.writeHead(200, { 'content-type': types[ext] || 'application/octet-stream' });
      return res.end(body);
    } catch {
      const body = await fs.readFile(path.join(dist, 'index.html'));
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'x-robots-tag': url.pathname.startsWith('/workspace') || url.pathname.startsWith('/internal') ? 'noindex, nofollow' : 'index, follow' });
      return res.end(body);
    }
  } catch (error) {
    return json(res, 400, { error: error.message || 'Request failed' });
  }
});

if (process.env.NODE_ENV !== 'test') server.listen(port, () => console.log(`Sthuthi Securities listening on http://localhost:${port}`));
export { server, saveRequest };
