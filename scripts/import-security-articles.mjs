import { cpSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const sourceDirectory = '/Users/vikky/Desktop/skill-dev/security-articles';
const projectDirectory = '/Users/vikky/Desktop/skill-dev/security';
const archiveDirectory = join(projectDirectory, 'content/articles');

const articleConfig = {
  'agentic-ai-security': {
    category: 'Agentic AI security', serviceSlug: 'ai-security-assessment', serviceLabel: 'Test an AI agent before it can act',
    featuredAlt: 'Sthuthi mascot stopping an agentic AI workflow at a security control gate before an unauthorized money movement.',
    inlineAlt: 'Agentic AI security diagram showing that manipulation multiplied by permissions creates real-world impact.',
    inlineCaption: 'Agent risk grows when manipulable instructions meet broad tools, credentials, and authority.',
  },
  'ai-penetration-testing-companies': {
    category: 'AI security buyers guide', serviceSlug: 'ai-security-assessment', serviceLabel: 'Compare an independent AI security assessment',
    featuredAlt: 'Sthuthi mascot comparing AI penetration testing companies by test depth, evidence, independence, and retesting.',
    inlineAlt: 'AI penetration testing company scorecard comparing scope, human testing, proof, remediation, and retest support.',
    inlineCaption: 'A useful vendor comparison measures the work and evidence, not the size of the logo.',
  },
  'ai-pentesting-tools': {
    category: 'AI testing tools', serviceSlug: 'ai-security-assessment', serviceLabel: 'Add human validation to AI security tooling',
    featuredAlt: 'Sthuthi mascot reviewing AI penetration testing tools across prompt, retrieval, model, agent, and application layers.',
    inlineAlt: 'AI pentesting tools workflow showing automated probes followed by human validation and reproducible evidence.',
    inlineCaption: 'Tools create coverage; human review decides whether an observed behavior is an exploitable security finding.',
  },
  'ai-red-teaming-companies': {
    category: 'AI security buyers guide', serviceSlug: 'ai-security-assessment', serviceLabel: 'Scope a focused AI red-team engagement',
    featuredAlt: 'Sthuthi mascot evaluating AI red teaming companies by attack coverage, evidence quality, and independence.',
    inlineAlt: 'AI red teaming vendor evidence chain from adversarial objective through verified impact and retest.',
    inlineCaption: 'The vendor should connect an adversarial objective to verified impact and a testable fix.',
  },
  'ai-red-teaming-vs-penetration-testing': {
    category: 'AI red teaming', serviceSlug: 'ai-security-assessment', serviceLabel: 'Choose the right AI security test',
    featuredAlt: 'Sthuthi mascot comparing bounded AI penetration testing with open-ended AI red teaming.',
    inlineAlt: 'Decision guide comparing AI penetration testing and AI red teaming by scope, question, maturity, time, and cost.',
    inlineCaption: 'Start with the method that matches the decision you need to make and the maturity of the system.',
  },
  'ai-security-assessment-cost': {
    category: 'AI security pricing', serviceSlug: 'ai-security-assessment', serviceLabel: 'Price a defined AI security scope',
    featuredAlt: 'Sthuthi mascot explaining AI security assessment cost drivers including agents, workflows, tools, data, and retesting.',
    inlineAlt: 'AI security assessment cost model showing how system complexity, test depth, evidence, and retesting affect price.',
    inlineCaption: 'Price follows scope: connected tools, sensitive workflows, roles, tenants, and evidence depth drive the work.',
  },
  'best-ai-security-companies': {
    category: 'AI security buyers guide', serviceSlug: 'ai-security-assessment', serviceLabel: 'Compare AI security providers by outcome',
    featuredAlt: 'Sthuthi mascot mapping AI security companies across testing, runtime protection, posture management, and compliance.',
    inlineAlt: 'AI security company selection matrix separating testing services, runtime platforms, posture management, and GRC.',
    inlineCaption: 'The right provider depends on whether you need a test, a runtime control, estate visibility, or compliance evidence.',
  },
  'chatbot-security-testing': {
    category: 'Chatbot security', serviceSlug: 'ai-security-assessment', serviceLabel: 'Test a customer-facing chatbot',
    featuredAlt: 'Sthuthi mascot testing a chatbot for prompt injection, private-data exposure, and unauthorized tool use.',
    inlineAlt: 'Chatbot security testing diagram showing prompt, retrieval, authorization, tool, and output control layers.',
    inlineCaption: 'A chatbot test must follow the request through the model to the data and action boundaries behind it.',
  },
  'hipaa-security-assessment': {
    category: 'Healthcare security', serviceSlug: 'compliance-readiness', serviceLabel: 'Assess the systems that handle ePHI',
    featuredAlt: 'Sthuthi mascot reviewing a HIPAA security assessment across patient applications, APIs, access controls, and audit logs.',
    inlineAlt: 'HIPAA security evidence map connecting ePHI systems, risk analysis, technical testing, remediation, and documented proof.',
    inlineCaption: 'A defensible assessment ties each ePHI risk to a system, control, test result, owner, and follow-up action.',
  },
  'iso-27001-penetration-testing': {
    category: 'ISO 27001 testing', serviceSlug: 'compliance-readiness', serviceLabel: 'Build penetration-test evidence for ISO 27001',
    featuredAlt: 'Sthuthi mascot mapping penetration testing evidence to ISO 27001 risk treatment and Annex A controls.',
    inlineAlt: 'ISO 27001 penetration testing cycle showing scope, authorization, test, findings, remediation, retest, and audit evidence.',
    inlineCaption: 'The report is strongest when it sits inside the ISMS risk and corrective-action cycle.',
  },
  'llm-penetration-testing': {
    category: 'LLM security testing', serviceSlug: 'ai-security-assessment', serviceLabel: 'Scope an LLM penetration test',
    featuredAlt: 'Sthuthi mascot testing an LLM application across prompts, retrieval, tenant data, plugins, and business actions.',
    inlineAlt: 'LLM penetration testing model tracing attacks from untrusted input through retrieval and tools to verified impact.',
    inlineCaption: 'The test follows attacker-controlled input through every model-connected data and action boundary.',
  },
  'llm-security-companies': {
    category: 'AI security buyers guide', serviceSlug: 'ai-security-assessment', serviceLabel: 'Compare LLM security providers',
    featuredAlt: 'Sthuthi mascot comparing LLM security companies for testing, guardrails, monitoring, and deployment fit.',
    inlineAlt: 'LLM security company matrix comparing runtime guardrails with testing and red-team services.',
    inlineCaption: 'Runtime controls and independent testing solve different problems; many teams need both.',
  },
  'mcp-server-security': {
    category: 'MCP security', serviceSlug: 'ai-security-assessment', serviceLabel: 'Test an MCP server and its authorization model',
    featuredAlt: 'Sthuthi mascot inspecting MCP server security across tools, credentials, user identity, and approval boundaries.',
    inlineAlt: 'MCP server authorization diagram showing user identity, agent request, policy check, tool call, and audit record.',
    inlineCaption: 'The server must authorize the user and action at execution time, even when an agent initiated the call.',
  },
  'owasp-llm-top-10': {
    category: 'OWASP LLM security', serviceSlug: 'ai-security-assessment', serviceLabel: 'Test OWASP LLM risks in the full application',
    featuredAlt: 'Sthuthi mascot organizing the OWASP Top 10 for LLM applications into testable system risks.',
    inlineAlt: 'OWASP LLM Top 10 explainer grouping risks across inputs, models, retrieval, tools, data, and operations.',
    inlineCaption: 'The OWASP categories become useful when each one maps to a real component, abuse case, and expected control.',
  },
  'prompt-injection-testing': {
    category: 'Prompt injection testing', serviceSlug: 'ai-security-assessment', serviceLabel: 'Test direct and indirect prompt injection',
    featuredAlt: 'Sthuthi mascot tracing prompt injection from user input and retrieved content to blocked AI actions.',
    inlineAlt: 'Prompt injection entry-point map covering direct prompts, web content, documents, email, memory, and tool output.',
    inlineCaption: 'Every content source that reaches the model can carry instructions, so each source needs its own test path.',
  },
  'saas-cloud-security-assessment': {
    category: 'SaaS cloud security', serviceSlug: 'saas-cloud-security', serviceLabel: 'Assess a SaaS cloud boundary',
    featuredAlt: 'Sthuthi mascot reviewing SaaS cloud security across identity, tenant data, infrastructure, secrets, and logging.',
    inlineAlt: 'SaaS cloud security assessment map connecting identities, services, data stores, tenant boundaries, and evidence.',
    inlineCaption: 'A useful cloud assessment follows access from human and workload identities to sensitive tenant data.',
  },
  'security-questionnaire-help': {
    category: 'Customer assurance', serviceSlug: 'compliance-readiness', serviceLabel: 'Build evidence-backed questionnaire answers',
    featuredAlt: 'Sthuthi mascot turning a customer security questionnaire into controlled claims and current evidence.',
    inlineAlt: 'Security questionnaire workflow from buyer question to control owner, evidence, approved answer, and review date.',
    inlineCaption: 'Repeatable answers come from a maintained evidence system, not a newly written response for every buyer.',
  },
  'soc2-penetration-test': {
    category: 'SOC 2 testing', serviceSlug: 'penetration-testing', serviceLabel: 'Scope penetration testing for SOC 2 evidence',
    featuredAlt: 'Sthuthi mascot connecting a SOC 2 penetration test to system scope, findings, remediation, and retest evidence.',
    inlineAlt: 'SOC 2 penetration testing evidence chain showing scope, methodology, findings, remediation, and verified retest.',
    inlineCaption: 'The useful evidence is the complete chain from the in-scope system to independently verified remediation.',
  },
  'web-application-penetration-testing': {
    category: 'Web application testing', serviceSlug: 'penetration-testing', serviceLabel: 'Scope a web application penetration test',
    featuredAlt: 'Sthuthi mascot testing web application security across authentication, roles, tenant boundaries, APIs, and business logic.',
    inlineAlt: 'Web application penetration testing matrix covering roles, tenants, sensitive workflows, APIs, and expected authorization.',
    inlineCaption: 'Good coverage is built from the application’s roles, tenant boundaries, and sensitive workflows.',
  },
  'what-is-ai-penetration-testing': {
    category: 'AI penetration testing', serviceSlug: 'ai-security-assessment', serviceLabel: 'Plan an AI penetration test',
    featuredAlt: 'Sthuthi mascot explaining AI penetration testing from adversarial input through model behavior to verified system impact.',
    inlineAlt: 'AI penetration testing process showing scope, attack simulation, server-side verification, evidence, fixes, and retest.',
    inlineCaption: 'A credible AI finding proves what happened in the connected system and whether the fix stopped it.',
  },
};

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

function normalizeUrl(url) {
  if (url === '/contact/' || url === '/contact') return '/request';
  if (url === '/blog/soc-2-penetration-test/' || url === '/blog/soc-2-penetration-test') return '/blog/soc2-penetration-test';
  if (url.startsWith('/') && url.length > 1) return url.replace(/\/$/, '');
  return url;
}

function inlineMarkdown(value) {
  let output = escapeHtml(value);
  output = output.replace(/`([^`]+)`/g, '<code>$1</code>');
  output = output.replace(/\[([^\]]+)]\(([^\s)]+)(?:\s+&quot;[^&]*&quot;)?\)/g, (_, label, rawUrl) => {
    const url = normalizeUrl(rawUrl.replaceAll('&amp;', '&'));
    const external = /^https?:\/\//.test(url);
    return `<a href="${escapeHtml(url)}"${external ? ' target="_blank" rel="noreferrer"' : ''}>${label}</a>`;
  });
  output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  output = output.replace(/(^|[\s(])\*([^*]+)\*/g, '$1<em>$2</em>');
  return output;
}

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error('Missing frontmatter');
  const data = {};
  for (const line of match[1].split('\n')) {
    const divider = line.indexOf(':');
    if (divider === -1) continue;
    const key = line.slice(0, divider).trim();
    let value = line.slice(divider + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    data[key] = value;
  }
  return { data, markdown: match[2] };
}

function cleanMarkdown(markdown) {
  return markdown
    .trimStart()
    .replace(/<!--[^]*?-->/g, '')
    .replace(/```json-ld[^]*?```/g, '')
    .replace(/^# .+\n+/, '')
    .replace(/^\*Reviewed by[^\n]+\*\n+/im, '')
    .replace(/^\*Last verified:[^\n]+\*\n+/im, '')
    .replace(/Last verified:\s*Q1 2027/gi, 'Last reviewed: November 2026')
    .trim();
}

function extractFaqs(markdown) {
  const section = markdown.match(/^## (?:Frequently asked questions|FAQ)\s*\n([\s\S]*?)(?=^##\s|(?![\s\S]))/m)?.[1] || '';
  const lines = section.split('\n');
  const faqs = [];
  for (let index = 0; index < lines.length;) {
    const question = lines[index].trim().match(/^\*\*(.+\?)\*\*$/)?.[1];
    if (!question) { index += 1; continue; }
    const answerLines = [];
    index += 1;
    while (index < lines.length) {
      const line = lines[index].trim();
      if (/^\*\*(.+\?)\*\*$/.test(line)) break;
      if (line) answerLines.push(line);
      index += 1;
    }
    const answer = answerLines.join(' ').replace(/\[([^\]]+)]\([^)]+\)/g, '$1').replace(/\*\*/g, '').replace(/\*/g, '');
    if (answer) faqs.push({ question, answer });
  }
  return faqs;
}

function tableToHtml(lines) {
  const rows = lines.map(line => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim()));
  const headers = rows[0];
  const body = rows.slice(2);
  return `<div class="article-table-wrap"><table><thead><tr>${headers.map(cell => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead><tbody>${body.map(row => `<tr>${row.map(cell => `<td>${inlineMarkdown(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function markdownToHtml(markdown, config, slug) {
  const lines = markdown.split('\n');
  const blocks = [];
  let headingCount = 0;
  let insertedFigure = false;

  const figure = `<figure class="article-inline-visual"><img src="/articles/${slug}-explainer.png" alt="${escapeHtml(config.inlineAlt)}" loading="lazy" /><figcaption>${escapeHtml(config.inlineCaption)}</figcaption></figure>`;

  for (let index = 0; index < lines.length;) {
    const line = lines[index].trim();
    if (!line || line === '---') { index += 1; continue; }

    if (/^##\s/.test(line)) {
      headingCount += 1;
      if (headingCount === 2 && !insertedFigure) { blocks.push(figure); insertedFigure = true; }
      const heading = line.replace(/^##\s+/, '');
      const headingId = heading.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
      blocks.push(`<h2 id="${headingId}">${inlineMarkdown(heading)}</h2>`);
      index += 1;
      continue;
    }
    if (/^###\s/.test(line)) {
      const heading = line.replace(/^###\s+/, '');
      const headingId = heading.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
      blocks.push(`<h3 id="${headingId}">${inlineMarkdown(heading)}</h3>`);
      index += 1;
      continue;
    }
    if (line.startsWith('> ')) {
      const quote = [];
      while (index < lines.length && lines[index].trim().startsWith('> ')) quote.push(lines[index++].trim().slice(2));
      blocks.push(`<div class="article-callout">${inlineMarkdown(quote.join(' '))}</div>`);
      continue;
    }
    if (line.startsWith('|') && index + 1 < lines.length && /^\|?\s*:?-+/.test(lines[index + 1].trim())) {
      const table = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) table.push(lines[index++]);
      blocks.push(tableToHtml(table));
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) items.push(lines[index++].trim().replace(/^[-*]\s+/, ''));
      blocks.push(`<ul>${items.map(item => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) items.push(lines[index++].trim().replace(/^\d+\.\s+/, ''));
      blocks.push(`<ol>${items.map(item => `<li>${inlineMarkdown(item)}</li>`).join('')}</ol>`);
      continue;
    }

    const paragraph = [];
    while (index < lines.length) {
      const next = lines[index].trim();
      if (!next || /^(##|###|> |\| |[-*] |\d+\. |---$)/.test(next)) break;
      paragraph.push(next);
      index += 1;
    }
    if (paragraph.length) {
      const copy = paragraph.join(' ');
      const className = /^\*\*On this page:/.test(copy) ? ' class="article-toc"' : '';
      blocks.push(`<p${className}>${inlineMarkdown(copy)}</p>`);
    } else index += 1;
  }

  if (!insertedFigure) blocks.splice(Math.min(4, blocks.length), 0, figure);
  return blocks.join('\n      ');
}

mkdirSync(archiveDirectory, { recursive: true });
const sourceFiles = readdirSync(sourceDirectory).filter(file => /^article-.+\.md$/.test(file)).sort();
const articles = sourceFiles.map(file => {
  const slug = basename(file, '.md').replace(/^article-/, '');
  const config = articleConfig[slug];
  if (!config) throw new Error(`Missing article configuration for ${slug}`);
  const sourcePath = join(sourceDirectory, file);
  const source = readFileSync(sourcePath, 'utf8');
  cpSync(sourcePath, join(archiveDirectory, file));
  const { data, markdown: rawMarkdown } = parseFrontmatter(source);
  const markdown = cleanMarkdown(rawMarkdown);
  const wordCount = markdown.replace(/\[[^\]]+]\([^)]+\)/g, ' ').replace(/[^\p{L}\p{N}'’-]+/gu, ' ').trim().split(/\s+/).length;
  return {
    slug,
    category: config.category,
    title: data.title,
    description: data.meta_description,
    published: data.datePublished || '2026-11-04',
    updated: '2026-11-05',
    readTime: `${Math.max(1, Math.ceil(wordCount / 220))} min read`,
    keyword: data.primary_keyword,
    featuredImage: `/articles/${slug}-featured.png`,
    featuredAlt: config.featuredAlt,
    inlineImage: `/articles/${slug}-explainer.png`,
    inlineAlt: config.inlineAlt,
    inlineCaption: config.inlineCaption,
    serviceSlug: config.serviceSlug,
    serviceLabel: config.serviceLabel,
    faqs: extractFaqs(markdown),
    body: markdownToHtml(markdown, config, slug),
  };
});

const output = `export type ArticleFaq = { question: string; answer: string };\n\nexport type Article = {\n  slug: string;\n  category: string;\n  title: string;\n  description: string;\n  published: string;\n  updated: string;\n  readTime: string;\n  keyword: string;\n  featuredImage: string;\n  featuredAlt: string;\n  inlineImage: string;\n  inlineAlt: string;\n  inlineCaption: string;\n  serviceSlug: string;\n  serviceLabel: string;\n  faqs: ArticleFaq[];\n  body: string;\n};\n\nexport const articles: Article[] = ${JSON.stringify(articles, null, 2)};\n\nexport const articleBySlug = new Map(articles.map(article => [article.slug, article]));\n`;

writeFileSync(join(projectDirectory, 'src/articles.ts'), output);
console.log(`Imported ${articles.length} articles from ${sourceDirectory}`);
