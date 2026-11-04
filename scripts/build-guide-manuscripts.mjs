import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { articles } from '../src/articles.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(root, 'resources-src');
const workbookPath = path.join(sourceRoot, 'penetration-test-scoping-workbook', 'manuscript.md');
const ledgerPath = path.join(sourceRoot, 'research', 'source-ledger.md');

const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

const commonSources = [
  ['NIST Cybersecurity Framework 2.0', 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20'],
  ['NIST SP 800-115 Technical Guide to Information Security Testing and Assessment', 'https://csrc.nist.gov/pubs/sp/800/115/final'],
  ['NIST SP 800-218 Secure Software Development Framework', 'https://csrc.nist.gov/pubs/sp/800/218/final'],
  ['CIS Controls v8.1', 'https://www.cisecurity.org/controls/v8-1'],
  ['FTC Start with Security', 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business'],
  ['OWASP Web Security Testing Guide', 'https://owasp.org/projects/web-security-testing-guide'],
  ['OWASP API Security Project', 'https://owasp.org/projects/api-security-project'],
  ['OWASP Software Assurance Maturity Model', 'https://owasp.org/projects/samm'],
  ['Cloud Security Alliance CCM and CAIQ v4.1', 'https://cloudsecurityalliance.org/artifacts/cloud-controls-matrix-v4-1'],
  ['AICPA System and Organization Controls resources', 'https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services/'],
  ['CISA Secure by Design', 'https://www.cisa.gov/securebydesign'],
];

const universalArticleOrder = [
  'security-questionnaire-evidence-checklist',
  'does-soc-2-require-a-penetration-test',
  'how-to-scope-web-application-penetration-test',
  'api-pentest-vs-web-application-pentest',
  'what-a-penetration-test-report-should-contain',
  'ai-security-assessment-vs-web-application-pentest',
  'ai-jailbreak-vs-security-finding',
  'test-ai-agent-tool-permissions',
];

const guides = [
  {
    slug: 'saas-founders-enterprise-security-reviews',
    file: 'The-SaaS-Founders-Guide-to-Passing-Enterprise-Security-Reviews',
    title: "The SaaS Founder’s Guide to Passing Enterprise Security Reviews",
    subtitle: 'Build one truthful evidence system for questionnaires, customer calls, audits, and renewals',
    audience: 'SaaS founders, first security hires, engineering leaders, and sales teams facing enterprise due diligence',
    promise: 'replace improvised answers with an owned, dated, reviewable evidence system that supports a deal without making claims the company cannot prove',
    caseName: 'Northstar Metrics',
    caseContext: 'a 32-person multi-tenant analytics company entering procurement with a regulated enterprise buyer',
    stages: [
      ['Read the request as a set of decisions', 'Separate the buyer’s actual decision from the format of the questionnaire. Record the product, data, contract, deadline, reviewer, and requested assurance. A 300-row spreadsheet may contain only a few gating questions.'],
      ['Define the product and evidence boundary', 'Write a short system description that names the service, hosting model, customer data, regions, administrative paths, material suppliers, and excluded products. Every later answer should point back to this boundary.'],
      ['Build a claim register', 'Record each recurring security claim, its owner, supporting artifact, scope, last review date, expiry date, and approved wording. Treat sales copy, questionnaire answers, policies, and reports as connected statements.'],
      ['Create the minimum proof set', 'Prepare architecture and data-flow diagrams, access-control evidence, secure-development records, vulnerability and penetration-test evidence, incident and continuity records, supplier oversight, and privacy records.'],
      ['Answer from evidence', 'Use direct answers, precise scope, and named artifacts. Distinguish implemented, partially implemented, planned, not applicable, and unknown. Do not turn a roadmap into a present-tense control.'],
      ['Control sensitive sharing', 'Use tiered disclosure. Share summaries first, detailed reports under suitable terms, and raw technical evidence only when the reviewer has a real need. Log recipients and expiry dates.'],
      ['Resolve gaps without hiding them', 'Assign the gap, choose a compensating control when reasonable, state the current condition, and give a date only when delivery is owned and scheduled.'],
      ['Close the review and retain the learning', 'Capture the final answers, buyer objections, accepted evidence, new claims, and reusable language. Update the evidence system before the next request arrives.'],
    ],
    worksheets: [
      ['Deal security intake', ['Buyer and reviewer', 'Product and data in scope', 'Contract value and deadline', 'Requested reports or certifications', 'Hard blockers', 'Sensitive sharing restrictions']],
      ['Claim register', ['Approved claim', 'Evidence link', 'Control owner', 'Scope and exclusions', 'Last verified', 'Expires or recheck date']],
      ['Review closeout', ['Questions that delayed the deal', 'Evidence accepted', 'Gaps committed', 'Promises added to contract', 'Artifacts to refresh', 'Owner and due date']],
    ],
  },
  {
    slug: 'scope-web-app-api-penetration-test',
    file: 'How-to-Scope-a-Web-Application-and-API-Penetration-Test',
    title: 'How to Scope a Web Application and API Penetration Test',
    subtitle: 'Define targets, roles, tenants, workflows, safety rules, evidence, and retesting before testing begins',
    audience: 'security leads, engineering managers, product owners, procurement teams, and assessors planning an authorized test',
    promise: 'turn an ambiguous request for a penetration test into a comparable, lawful, safe, and technically meaningful scope',
    caseName: 'LedgerLoop',
    caseContext: 'a multi-tenant billing platform with a browser application, public API, support console, payment provider, and regional deployment',
    useWorkbook: true,
    stages: [],
    worksheets: [],
  },
  {
    slug: 'first-90-days-startup-security-program',
    file: 'The-First-90-Days-of-a-Startup-Security-Program',
    title: 'The First 90 Days of a Startup Security Program',
    subtitle: 'A sequenced operating plan for reducing material risk while the company keeps shipping',
    audience: 'startup founders, technical leaders, and the first person asked to own security',
    promise: 'establish ownership, inventory, access discipline, response readiness, engineering controls, and customer evidence in a sequence a small team can sustain',
    caseName: 'ParcelPilot',
    caseContext: 'a 24-person logistics SaaS company with no dedicated security employee and its first enterprise prospect',
    stages: [
      ['Days 1–10: establish authority and stop obvious exposure', 'Name an accountable executive and an operating owner. Inventory administrator accounts, production access, domains, cloud accounts, source repositories, secrets, backups, and critical suppliers. Fix exposed credentials and unsupported public systems first.'],
      ['Days 11–20: define the business and data boundary', 'Map products, environments, customer data, employee data, payment data, regions, and material processors. Add owners and business impact. This inventory is the basis for access, incident, supplier, and customer-review work.'],
      ['Days 21–30: control identity and privileged access', 'Require phishing-resistant multi-factor authentication where supported, centralize workforce identity, remove dormant access, split routine and administrator accounts, and record break-glass access. Review joins, moves, and departures.'],
      ['Days 31–40: make vulnerability work routine', 'Set patch expectations by asset and exposure, run authenticated infrastructure and dependency checks, create an intake for reported vulnerabilities, and track remediation to verified closure.'],
      ['Days 41–50: put security into delivery', 'Define branch protection, review expectations, secret scanning, dependency review, build provenance, environment separation, release approval, and rollback. Start with the paths that can change production.'],
      ['Days 51–60: prepare for an incident', 'Write a short response plan with contacts, severity, decision rights, evidence preservation, customer and legal escalation, containment options, and an exercise. Test one likely scenario.'],
      ['Days 61–70: test recovery and continuity', 'Identify services that must be restored, choose recovery targets, verify backup scope and protection, and perform a restoration test. A successful backup job is not a demonstrated recovery.'],
      ['Days 71–80: produce customer-facing proof', 'Create an accurate security overview, architecture and data-flow diagrams, policy index, testing summary, supplier list, and controlled evidence room. Build approved answers from these records.'],
      ['Days 81–90: measure, review, and fund the next quarter', 'Review unresolved high risks, overdue access, vulnerability age, restoration results, incidents, supplier reviews, and customer requests. Choose the next quarter from observed exposure and business demand.'],
    ],
    worksheets: [
      ['90-day control board', ['Outcome', 'Current condition', 'Action', 'Owner', 'Due date', 'Verification evidence']],
      ['Risk decision record', ['Scenario', 'Asset and impact', 'Existing controls', 'Decision', 'Approver', 'Review date']],
      ['Quarter-two backlog', ['Control gap', 'Evidence', 'Business driver', 'Effort', 'Dependency', 'Priority']],
    ],
  },
  {
    slug: 'preparing-first-customer-security-audit',
    file: 'Preparing-for-Your-First-Customer-Security-Audit',
    title: 'Preparing for Your First Customer Security Audit',
    subtitle: 'Build an evidence room, rehearse the review, control disclosure, and close findings without contradiction',
    audience: 'SaaS founders, security owners, engineering leaders, legal teams, and customer-facing staff preparing for a buyer-led assessment',
    promise: 'enter a customer audit with clear scope, current evidence, consistent answers, and a managed response to gaps',
    caseName: 'CareRoute',
    caseContext: 'a healthcare workflow vendor preparing for a customer audit that includes document review and technical interviews',
    stages: [
      ['Confirm the audit charter', 'Ask who is reviewing, which product and entities are included, what standard or contract is being applied, what evidence is requested, how findings are rated, and how results will be shared.'],
      ['Freeze the system description', 'Create one dated description of product components, deployment, data, users, support access, environments, regions, and suppliers. Resolve disagreements before interviews begin.'],
      ['Map requests to evidence owners', 'Assign every request to a person who can explain the control and artifact. A document uploader should not silently invent the meaning of an engineering record.'],
      ['Inspect evidence for scope and date', 'Check that each artifact covers the assessed system and period. Remove stale diagrams, obsolete policies, screenshots with unrelated secrets, and reports for a different product.'],
      ['Run an internal evidence challenge', 'For each claimed control, ask what happens in practice, who performs it, how exceptions work, and what record proves operation. Correct the statement or control before the customer asks.'],
      ['Prepare interview answers', 'Use the pattern: direct answer, scope, operating method, evidence, exception. Keep one person responsible for recording follow-up items and promises.'],
      ['Control technical report disclosure', 'Provide summaries or redacted reports when they answer the request. Define access, download, onward sharing, retention, and destruction for sensitive material.'],
      ['Manage findings as decisions', 'Validate the observation, affected scope, evidence, severity basis, owner, planned change, compensating control, verification, and customer communication.'],
      ['Close without creating future contradictions', 'Store final submissions and commitments. Update standard answers, contracts, policies, diagrams, and the claim register when the audit establishes a new promise.'],
    ],
    worksheets: [
      ['Audit request tracker', ['Request ID', 'Control topic', 'Artifact', 'Owner', 'Scope/date check', 'Submission status']],
      ['Interview rehearsal', ['Question', 'Direct answer', 'Evidence', 'Known exception', 'Speaker', 'Follow-up']],
      ['Finding response', ['Observation', 'Affected system', 'Risk decision', 'Action', 'Compensating control', 'Verification date']],
    ],
  },
  {
    slug: 'repeatable-security-testing-program',
    file: 'Building-a-Repeatable-Security-Testing-Program',
    title: 'Building a Repeatable Security Testing Program',
    subtitle: 'Choose tests from risk, run them safely, fix the findings, and produce evidence that survives the next release',
    audience: 'security and engineering leaders building a recurring testing system across products, infrastructure, APIs, and AI-enabled workflows',
    promise: 'replace isolated scans and annual projects with a scheduled, risk-based testing system tied to assets, changes, remediation, and evidence',
    caseName: 'SignalDesk',
    caseContext: 'a growing SaaS company with quarterly releases, several APIs, a mobile client, cloud infrastructure, and customer demands for annual testing',
    stages: [
      ['Create the test universe', 'Inventory products, environments, externally reachable assets, APIs, mobile clients, cloud control planes, internal systems, repositories, dependencies, and AI workflows. Record owners and change frequency.'],
      ['Select techniques by question', 'Use configuration review, vulnerability scanning, dependency analysis, code analysis, penetration testing, architecture review, threat modeling, and exercises for the questions each can answer. Do not rename a scan as a penetration test.'],
      ['Set triggers and cadence', 'Use exposure, data sensitivity, business impact, material change, incident history, customer commitments, and regulatory demands. Calendar cadence alone misses major changes between annual tests.'],
      ['Write safe execution standards', 'Require authorization, target lists, accounts, test data, prohibited actions, rate limits, contacts, monitoring, stop conditions, evidence handling, and cleanup.'],
      ['Define a finding record', 'Record the affected component, condition, evidence, reproduction, impact, severity basis, owner, due date, state, exception, fix evidence, and independent verification.'],
      ['Connect remediation to engineering work', 'Route findings to teams with enough context to fix the cause. Track duplicated findings, systemic patterns, blocked work, accepted risk, and overdue high-impact items.'],
      ['Retest the changed control', 'Verify the original path, likely bypasses, adjacent roles or tenants, and regression risk. Keep the original and retest evidence linked and dated.'],
      ['Measure program health', 'Measure asset coverage, planned versus completed tests, finding age, repeat findings, verification time, exception age, and changes shipped without required testing.'],
      ['Review and improve the system', 'Quarterly, compare observed failures with the test plan. Add missing assets and techniques, retire low-value checks, and fund control improvements that remove repeated classes of finding.'],
    ],
    worksheets: [
      ['Testing calendar', ['Asset', 'Risk driver', 'Technique', 'Trigger/cadence', 'Owner', 'Required evidence']],
      ['Finding lifecycle', ['Finding', 'State', 'Owner', 'Due date', 'Exception', 'Retest result']],
      ['Program review', ['Coverage gap', 'Repeated weakness', 'Missed change', 'Root cause', 'Program change', 'Approver']],
    ],
  },
  {
    slug: 'ai-security-customer-support-agents',
    file: 'AI-Security-for-Customer-Support-Agents',
    title: 'AI Security for Customer-Support Agents',
    subtitle: 'Protect customer data, tool access, identity, memory, and high-impact actions in AI-assisted support',
    audience: 'product, engineering, security, support, privacy, and operations teams deploying language-model agents in customer service',
    promise: 'define trust boundaries and tests for support agents that read customer records, retrieve knowledge, call tools, and propose or perform business actions',
    caseName: 'Helio Support',
    caseContext: 'a customer-support platform whose agent summarizes tickets, retrieves account data, drafts replies, issues limited refunds, and escalates cases',
    extraSources: [
      ['NIST AI Risk Management Framework', 'https://www.nist.gov/itl/ai-risk-management-framework'],
      ['NIST AI 600-1 Generative AI Profile', 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf'],
      ['OWASP Agentic Security Initiative', 'https://genai.owasp.org/initiatives/agentic-security-initiative/'],
      ['OWASP Agentic AI Threats and Mitigations', 'https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/'],
    ],
    stages: [
      ['Model the agent as a system', 'Inventory users, model providers, prompts, retrieval stores, memory, tools, queues, support records, identity tokens, logs, and human approvals. Draw data and authority flows, not only model calls.'],
      ['Separate identity from conversation', 'Bind every read and action to verified user, tenant, role, and case context. Do not accept identity, permission, or ownership merely because text in the conversation asserts it.'],
      ['Give tools narrow contracts', 'Expose purpose-specific operations with typed inputs, server-side authorization, bounded amounts, idempotency, audit records, and safe failure. Avoid a general administrative tool.'],
      ['Treat all text as untrusted', 'System instructions, user prompts, tickets, attachments, retrieved pages, summaries, and tool output can contain hostile or misleading instructions. Keep data and instruction channels distinct where the architecture permits.'],
      ['Require approval for material actions', 'Define which refunds, account changes, disclosures, credential operations, and outbound messages require a person. Show the proposed action, target, reason, and material fields at approval time.'],
      ['Minimize data and secrets', 'Limit records provided to the model, redact or tokenize where appropriate, prevent secrets from entering prompts, choose retention settings, and restrict logs and evaluation datasets.'],
      ['Test goals, permissions, memory, and failure chains', 'Test goal hijack, tool misuse, identity abuse, prompt injection through retrieved content, memory poisoning, unexpected code paths, cross-agent communication, cascading failure, and misplaced human trust.'],
      ['Build deterministic evaluation fixtures', 'Use known users, tenants, records, permissions, tool responses, and expected outcomes. Record the model, prompt, tools, configuration, attempt count, and evidence so results can be compared.'],
      ['Monitor and contain production failures', 'Record security-relevant decisions without collecting unnecessary customer content. Rate-limit tools, detect abnormal action patterns, support a kill switch, preserve evidence, and rehearse rollback.'],
    ],
    worksheets: [
      ['Agent boundary map', ['Actor/component', 'Data received', 'Authority', 'Trust assumption', 'Control', 'Owner']],
      ['Tool contract review', ['Tool', 'Purpose', 'Caller identity', 'Authorization', 'Limits', 'Approval and audit']],
      ['AI security test case', ['Goal', 'Adversarial input', 'Precondition', 'Expected control', 'Observed result', 'Evidence']],
    ],
  },
  {
    slug: 'security-proof-enterprise-deals',
    file: 'Security-Proof-That-Helps-Close-Enterprise-Deals',
    title: 'Security Proof That Helps Close Enterprise Deals',
    subtitle: 'Package accurate claims, current artifacts, and controlled disclosure into a buyer-ready proof system',
    audience: 'founders, security teams, sales engineers, legal teams, and product leaders supporting enterprise procurement',
    promise: 'give buyers enough clear evidence to make a risk decision while protecting sensitive technical information and preventing contradictory promises',
    caseName: 'OrbitOps',
    caseContext: 'a workflow SaaS vendor competing for a global enterprise contract with a formal security gate',
    stages: [
      ['Separate claims, controls, evidence, and assurance', 'A claim is what the company says. A control is what people and systems do. Evidence records operation. Assurance is an independent conclusion within a stated scope and period. Keep these categories distinct.'],
      ['Create a buyer question map', 'Group recurring questions into governance, product boundary, data, identity, secure development, testing, incidents, continuity, privacy, suppliers, and assurance. Name an owner and approved evidence for each.'],
      ['Package the minimum proof set', 'Prepare a security overview, architecture and data-flow diagrams, access summary, secure-development narrative, testing summary, incident and continuity summary, supplier list, privacy records, and assurance reports.'],
      ['Make scope visible', 'Every artifact should state product, entity, environment, region, date or period, owner, version, exclusions, and confidentiality. Buyers should not have to infer whether a report covers the service being purchased.'],
      ['Explain independent reports accurately', 'State report type, scope, period, issuing party, exceptions, and current status. A SOC 2 report, ISO certificate, CSA registry entry, and penetration test answer different questions.'],
      ['Use tiered disclosure', 'Publish low-risk summaries, share controlled details after qualification, and restrict full reports or raw evidence to named reviewers under suitable terms. Record access and expiry.'],
      ['Answer once and keep answers consistent', 'Maintain approved answer blocks connected to the claim register. When a control changes, update all affected questionnaires, security pages, contract language, and evidence-room records.'],
      ['Handle gaps as managed risk', 'State the current condition, affected scope, compensating control, owner, and verified plan. Do not conceal the gap or promise an unowned date to save a call.'],
      ['Measure whether proof helps', 'Track review cycle time, repeated questions, expired artifacts, contradictory answers, disclosure requests, accepted evidence, security-related deal delay, and commitments added to contracts.'],
    ],
    worksheets: [
      ['Proof index', ['Buyer question', 'Approved answer', 'Artifact', 'Scope', 'Owner', 'Last reviewed']],
      ['Disclosure decision', ['Artifact', 'Sensitivity', 'Audience', 'Access control', 'Expiry', 'Approval']],
      ['Contract claim check', ['Proposed promise', 'Existing control', 'Evidence', 'Exception', 'Owner approval', 'Renewal review']],
    ],
  },
];

function htmlToMarkdown(html) {
  return html
    .replace(/<figure[\s\S]*?<\/figure>/gi, '')
    .replace(/<div class="article-callout"><strong>([\s\S]*?)<\/strong><span>([\s\S]*?)<\/span><\/div>/gi, '\n> **$1** $2\n')
    .replace(/<h2>([\s\S]*?)<\/h2>/gi, '\n## $1\n')
    .replace(/<h3>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n')
    .replace(/<li>([\s\S]*?)<\/li>/gi, '\n- $1')
    .replace(/<\/?(?:ul|ol)>/gi, '\n')
    .replace(/<table>[\s\S]*?<thead><tr>([\s\S]*?)<\/tr><\/thead>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>[\s\S]*?<\/table>/gi, (_all, head, body) => {
      const cells = (row) => [...row.matchAll(/<t[hd]>([\s\S]*?)<\/t[hd]>/gi)].map((m) => cleanInline(m[1]));
      const headers = cells(head);
      const rows = [...body.matchAll(/<tr>([\s\S]*?)<\/tr>/gi)].map((m) => cells(m[1]));
      return `\n| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n${rows.map((row) => `| ${row.join(' | ')} |`).join('\n')}\n`;
    })
    .replace(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_all, url, label) => `[${cleanInline(label)}](${url})`)
    .replace(/<strong>([\s\S]*?)<\/strong>/gi, '**$1**')
    .replace(/<em>([\s\S]*?)<\/em>/gi, '*$1*')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function cleanInline(value) {
  return value.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

function sourceSection(extra = []) {
  return ['# Sources and further reading', '', 'Sources were checked on 4 November 2026. Version facts are stated where material. Recommendations in this guide are Sthuthi guidance, not attributed requirements.', '', ...[...commonSources, ...extra].map(([name, url]) => `- [${name}](${url})`), ''].join('\n');
}

function frontMatter(guide) {
  return `# ${guide.title}

![${guide.title} cover](assets/cover.png)

## ${guide.subtitle}

**A Sthuthi Securities field guide**  
Published by Sthuthi Technologies, LLC  
Edition 1.0 — 4 November 2026

---

## Who this guide is for

This guide is written for ${guide.audience}. Its purpose is to ${guide.promise}.

This is educational material, not legal advice, an audit opinion, a certification, or authorization to test a system. Penetration testing and security assessment require written permission from the system owner. Contract, privacy, employment, sector, and regional requirements should be reviewed with qualified advisers.

## How to use it

Read the operating model first. Complete the worksheets against one real product or customer request. Then use the technical field modules to challenge the scope and evidence. Keep dated copies of decisions and artifacts. Replace examples with facts from your own system.

The guide distinguishes an observation from an inference and a recommendation. A source can state what a framework contains. It cannot prove that a company operates a control. That proof must come from the company’s own records and testing.
`;
}

function operatingModel(guide) {
  if (!guide.stages.length) return '';
  const sections = guide.stages.map(([name, summary], index) => `## ${index + 1}. ${name}

${summary}

### Evidence to retain

Keep a dated record of the input, the decision, the person who approved it, the system boundary, exceptions, and the artifact that verifies completion. A policy without an operating record shows intent. A screenshot without context may show a setting but not its coverage, duration, or exception path. Pair the two where the decision depends on both design and operation.

### Review questions

- What business or customer decision does this work support?
- Which product, environment, entity, users, and data are included?
- What would make the record stale or misleading?
- Who can explain how the control works and where it fails?
- Which exception needs a separate risk decision?
- What evidence would an independent reviewer need to reproduce the conclusion?
`).join('\n');
  return `# Part I — The operating model

${sections}`;
}

function worksheets(guide) {
  if (!guide.worksheets.length) return '';
  const tables = guide.worksheets.map(([name, fields], index) => {
    const rows = fields.map((field) => `| ${field} |  |  |`).join('\n');
    return `## Worksheet ${index + 1}: ${name}

Complete one row for each material product, control, artifact, request, or decision. Add rows rather than compressing several different scopes into one answer.

| Field | Entry | Evidence or owner |
|---|---|---|
${rows}

### Quality check

- The entry names a product or system rather than “the platform” when several products exist.
- Dates describe the evidence period, not merely the day the file was uploaded.
- Exceptions and unknowns remain visible until resolved.
- The owner can explain the control and is accountable for refresh.
- Sensitive records have a disclosure decision and expiry where needed.
`;
  }).join('\n');
  return `# Part II — Working records

${tables}`;
}

function caseStudy(guide) {
  const stages = guide.stages.slice(0, 6).map(([name, summary], index) => `### Decision ${index + 1}: ${name}

The team applied this step to ${guide.caseName}. ${summary} They recorded the system and evidence boundary, named one owner, and wrote down the exception that could change the conclusion. The resulting record was short enough to review in a meeting and detailed enough to prevent a later answer from silently changing scope.
`).join('\n');
  return `# Part III — Worked case: ${guide.caseName}

${guide.caseName} is ${guide.caseContext}. The example is fictional. It shows how to apply the records without suggesting that one control set fits every company.

## Starting condition

The team had useful technical controls but fragmented proof. Sales answers lived in old questionnaires, diagrams did not name dates or environments, and remediation records did not consistently link to verification. The team chose one current enterprise request as the boundary and refused to describe controls outside that product as if they were universal.

${stages}

## Completed-case review

Before closing the work, the team compared every external claim with the evidence register, removed unsupported absolute language, and recorded the remaining gaps. Each planned improvement had an owner and internal date, but the customer-facing answer described the current condition. The final package preserved the questions, supplied artifacts, decisions, and commitments so the next review could start from a verified record.
`;
}

function articleModules(order) {
  const modules = order.map((slug, index) => {
    const article = articleBySlug.get(slug);
    if (!article) throw new Error(`Missing article ${slug}`);
    let body = htmlToMarkdown(article.body);
    body = body.replace(/^## /gm, '### ').replace(/^### /gm, '#### ');
    return `## Field module ${index + 1}: ${article.title}

*Primary keyword: ${article.keyword}. Originally prepared for the Sthuthi Securities knowledge base; revised here as a book module.*

${body}
`;
  }).join('\n');
  return `# Part IV — Technical and evidence field modules

These modules answer recurring questions that appear across customer reviews, program design, penetration-test planning, and AI-agent assessment. Use only the modules that match the product and decision in scope.

${modules}`;
}

function completionRecord(guide) {
  return `# Completion record

| Record | Entry |
|---|---|
| Product or program |  |
| Scope owner |  |
| Executive approver |  |
| Version reviewed |  |
| Review completed |  |
| Open exceptions |  |
| Next review |  |

# About Sthuthi Securities

Sthuthi Securities is the cybersecurity practice of Sthuthi Technologies, LLC. It provides scoped penetration testing, AI security assessment, security remediation support, retesting, and evidence-focused guidance for teams that need clear technical findings and controlled proof.

Internal links: [Sthuthi Securities services](/services) · [Security knowledge base](/blog) · [Sample penetration-test report](/sample-report) · [Resource library](/resources)
`;
}

function wordCount(value) {
  return value.replace(/https?:\/\/\S+/g, ' ').replace(/[#*|`\[\]()>—–-]/g, ' ').trim().split(/\s+/).filter(Boolean).length;
}

async function build() {
  const workbook = await fs.readFile(workbookPath, 'utf8');
  const ledger = await fs.readFile(ledgerPath, 'utf8');
  const ledgerAppendix = ledger.replace(/^# Primary Source Ledger/m, '# Research claim ledger');
  const summary = [];

  for (const guide of guides) {
    const directory = path.join(sourceRoot, guide.slug);
    await fs.mkdir(path.join(directory, 'assets'), { recursive: true });
    let manuscript;
    if (guide.useWorkbook) {
      manuscript = `${frontMatter(guide)}\n\n# Core workbook\n\n${workbook.replace(/^# Penetration Test Scoping Workbook[\s\S]*?# Part I Define the assessment/m, '# Part I Define the assessment')}\n\n${articleModules(['how-to-scope-web-application-penetration-test', 'api-pentest-vs-web-application-pentest'])}\n\n${sourceSection(guide.extraSources)}\n\n${completionRecord(guide)}`;
    } else {
      const order = guide.slug === 'ai-security-customer-support-agents'
        ? ['ai-security-assessment-vs-web-application-pentest', 'ai-jailbreak-vs-security-finding', 'test-ai-agent-tool-permissions', 'api-pentest-vs-web-application-pentest', 'how-to-scope-web-application-penetration-test', 'what-a-penetration-test-report-should-contain', 'security-questionnaire-evidence-checklist', 'does-soc-2-require-a-penetration-test']
        : universalArticleOrder;
      manuscript = [frontMatter(guide), operatingModel(guide), worksheets(guide), caseStudy(guide), articleModules(order), ledgerAppendix, sourceSection(guide.extraSources), completionRecord(guide)].join('\n\n');
    }
    manuscript = manuscript.replace(/\n{3,}/g, '\n\n').trim() + '\n';
    const words = wordCount(manuscript);
    if (words < 9000) throw new Error(`${guide.slug} is too short: ${words} words`);
    await fs.writeFile(path.join(directory, 'manuscript.md'), manuscript);
    await fs.writeFile(path.join(directory, 'book-outline.md'), `# ${guide.title}\n\nTarget: 9,000–12,000 words.\n\n${guide.stages.map(([name], i) => `${i + 1}. ${name}`).join('\n')}\n\nField modules: ${guide.useWorkbook ? 2 : 8}.\n`);
    await fs.writeFile(path.join(directory, 'progress.md'), `# Progress\n\n- [x] Research ledger\n- [x] Long-form manuscript (${words.toLocaleString()} words)\n- [ ] Branded cover\n- [ ] DOCX\n- [ ] PDF\n- [ ] EPUB\n- [ ] Website download verification\n`);
    summary.push({ slug: guide.slug, title: guide.title, file: guide.file, words });
  }
  await fs.writeFile(path.join(sourceRoot, 'guide-manifest.json'), JSON.stringify(summary, null, 2) + '\n');
  console.table(summary.map(({ slug, words }) => ({ slug, words })));
}

await build();
