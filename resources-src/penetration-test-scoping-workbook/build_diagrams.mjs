import fs from 'node:fs';
import path from 'node:path';
import sharp from '/Users/vikky/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';

const root = path.dirname(new URL(import.meta.url).pathname);
const assets = path.join(root, 'assets');
const logo = fs.readFileSync(path.resolve(root, '../../brand/logo-mark-round.png')).toString('base64');

const palette = { paper: '#F6F2E9', navy: '#15202B', blue: '#173651', coral: '#DF6845', gold: '#C88416', pale: '#E7EEF2', line: '#AEBEC8' };

function shell(title, subtitle, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="${palette.coral}"/></marker></defs>
  <rect width="1600" height="900" fill="${palette.paper}"/><path d="M0 0h1600v20H0z" fill="${palette.coral}"/>
  <image href="data:image/png;base64,${logo}" x="64" y="54" width="82" height="82"/>
  <text x="170" y="89" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="${palette.navy}">STHUTHI SECURITIES</text>
  <text x="170" y="122" font-family="Arial,sans-serif" font-size="18" letter-spacing="3" fill="${palette.coral}">SCOPING WORKBOOK</text>
  <text x="64" y="210" font-family="Arial,sans-serif" font-size="62" font-weight="800" fill="${palette.navy}">${title}</text>
  <text x="66" y="254" font-family="Arial,sans-serif" font-size="24" fill="${palette.blue}">${subtitle}</text>
  ${body}
  <text x="64" y="850" font-family="Arial,sans-serif" font-size="18" fill="${palette.blue}">Sthuthi Technologies, LLC</text>
  <text x="1536" y="850" text-anchor="end" font-family="Arial,sans-serif" font-size="18" fill="${palette.blue}">Authorized testing starts with a written boundary.</text>
  </svg>`;
}

function box(x, y, w, h, title, lines, accent = palette.coral) {
  const text = lines.map((line, i) => `<text x="${x + 26}" y="${y + 84 + i * 30}" font-family="Arial,sans-serif" font-size="21" fill="${palette.blue}">${line}</text>`).join('');
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="#FFFFFF" stroke="${palette.line}" stroke-width="3"/><rect x="${x}" y="${y}" width="${w}" height="14" rx="7" fill="${accent}"/><text x="${x + 26}" y="${y + 54}" font-family="Arial,sans-serif" font-size="27" font-weight="800" fill="${palette.navy}">${title}</text>${text}`;
}

const diagrams = [
  ['scope-chain.png', shell('SCOPE FROM THE DECISION BACKWARD', 'Every field should support the buyer’s decision or the tester’s safe execution.', `${box(64,330,260,270,'1  DECISION',['Why now?','Who relies on it?','What proof is due?'])}${box(370,330,260,270,'2  SYSTEM',['Named assets','Environments','Dependencies'],palette.gold)}${box(676,330,260,270,'3  BEHAVIOR',['Roles and tenants','Critical workflows','Expected rules'],palette.coral)}${box(982,330,260,270,'4  TEST RULES',['Written authority','Allowed actions','Stop conditions'],palette.gold)}${box(1288,330,248,270,'5  OUTPUT',['Evidence','Report','Retest state'])}<path d="M324 465H364M630 465H670M936 465H976M1242 465H1282" stroke="${palette.coral}" stroke-width="5" marker-end="url(#arrow)"/>`)],
  ['system-boundary-map.png', shell('DRAW THE SYSTEM BOUNDARY', 'Name what belongs to the client, what is connected, and what remains outside the test.', `<rect x="300" y="300" width="980" height="450" rx="42" fill="${palette.pale}" stroke="${palette.blue}" stroke-width="5" stroke-dasharray="18 12"/><text x="330" y="346" font-family="Arial,sans-serif" font-size="22" font-weight="700" fill="${palette.blue}">AUTHORIZED CLIENT BOUNDARY</text>${box(370,405,250,210,'WEB APP',['Browser routes','Sessions','User workflows'])}${box(700,405,250,210,'API',['Objects and methods','Role checks','Webhooks'],palette.gold)}${box(1030,405,210,210,'DATA',['Tenant records','Files','Audit events'])}${box(64,405,200,210,'USERS',['Anonymous','Customer','Administrator'],palette.gold)}${box(1330,405,206,210,'THIRD PARTY',['Payment','Email','Model API'],palette.gold)}<path d="M264 510H364M620 510H694M950 510H1024M1240 510H1324" stroke="${palette.coral}" stroke-width="5" marker-end="url(#arrow)"/><text x="1432" y="670" text-anchor="middle" font-family="Arial,sans-serif" font-size="17" fill="${palette.coral}">Separate authority required</text>`)],
  ['authorization-gate.png', shell('PASS THE AUTHORIZATION GATE', 'Testing remains locked until ownership, scope, timing, and constraints agree.', `${box(84,340,300,280,'OWNERSHIP',['Asset owner named','Third-party rights checked','Approver identified'])}${box(470,340,300,280,'SCOPE',['Exact targets listed','Actions defined','Exclusions recorded'],palette.gold)}${box(856,340,300,280,'WINDOW',['Start and end time','Source addresses','Contacts on call'])}${box(1242,340,274,280,'CONSTRAINTS',['Rate limits','Stop conditions','Data rules'],palette.gold)}<path d="M384 480H464M770 480H850M1156 480H1236" stroke="${palette.coral}" stroke-width="5" marker-end="url(#arrow)"/><rect x="510" y="675" width="580" height="82" rx="18" fill="${palette.navy}"/><text x="800" y="727" text-anchor="middle" font-family="Arial,sans-serif" font-size="32" font-weight="800" fill="#FFFFFF">SIGNED AUTHORIZATION ON FILE</text>`)],
  ['finding-lifecycle.png', shell('FINDING TO VERIFIED FIX', 'A client fix and an assessor retest are separate events with separate evidence.', `${box(90,350,260,250,'CONFIRMED',['Reviewer validates','Evidence attached','Impact explained'])}${box(390,350,260,250,'IN PROGRESS',['Owner assigned','Change underway','Risk still open'],palette.gold)}${box(690,350,260,250,'READY FOR RETEST',['Client reports fix','Build identified','Test access restored'])}${box(990,350,260,250,'RETESTED',['Original scenario run','New evidence stored','Residual risk checked'],palette.gold)}${box(1290,350,220,250,'VERIFIED',['Reviewer signs','Report updated','History preserved'])}<path d="M350 475H384M650 475H684M950 475H984M1250 475H1284" stroke="${palette.coral}" stroke-width="5" marker-end="url(#arrow)"/>`)]
];

for (const [name, svg] of diagrams) {
  await sharp(Buffer.from(svg)).png().toFile(path.join(assets, name));
}
