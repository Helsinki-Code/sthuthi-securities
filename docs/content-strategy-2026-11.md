# Sthuthi Securities content strategy

Strategy date: 4 November 2026  
Planning window: 90 days  
Primary market: US software and digital businesses with roughly 50–1,000 employees  
Primary goal: qualified assessment requests  
Secondary goals: build technical trust, support enterprise procurement, and earn search visibility

## Strategic decision

Sthuthi should publish content for buyers who have an active security decision:

- an auditor or enterprise customer asked for a penetration test;
- an AI feature, RAG system, chatbot, or agent is approaching launch;
- a security questionnaire has stalled a deal;
- a product team needs to fix and retest findings;
- a CTO does not know which testing scope to purchase.

Searchable content comes first. Shareable work should come from Sthuthi's own testing method, synthetic demonstrations, and eventually anonymized delivery data. Do not build a high-volume cybersecurity news blog. It would compete with established publishers without helping buyers choose or prepare for an assessment.

The central editorial idea is:

> A security finding needs a broken rule, reproducible evidence, material impact, and a verified fix. A scary model response or scanner alert alone is not enough.

That idea connects application testing, AI-agent testing, reports, remediation, and retesting. It also gives Sthuthi a point of view that is more specific than generic claims about AI-powered security.

## Known context and research gaps

### Known

- Sthuthi sells penetration testing, AI security assessments, cloud and SaaS reviews, compliance readiness, remediation, and retesting.
- The main audience builds or operates software that holds customer data or moves money.
- The current site has service pages, pricing, an assessment request flow, a sample report, and a synthetic cross-customer AI-agent finding.
- Competitors publish substantial AI/LLM security material, testing methods, standards coverage, platform workflows, customer proof, and research.
- Sthuthi has published starting prices and explicit scope boundaries, while many larger competitors require a quote.
- The strongest owned content asset is the synthetic support-agent finding with authorization, evidence, remediation, and retest states.

### Unknown

- No customer-call transcripts, support tickets, or survey responses were available.
- No Google Search Console, analytics, CRM, or paid keyword export was available.
- No existing blog performance or conversion history was available.
- Named assessor experience, credentials, insurance, report acceptance, and delivery capacity remain unverified.
- Available writing, design, video, and engineering hours were not supplied.

The plan assumes one technical writer or subject-matter expert can publish one substantial piece per week, with design and engineering support for one reusable asset per month. Reduce cadence before reducing technical review quality.

## Audience and buyer moments

| Buyer | Trigger | Question in their words | Content job | Service path |
|---|---|---|---|---|
| CTO or founder | Enterprise deal reaches security review | What does the customer actually need from us? | Explain evidence, scope, cost, and sequence | Compliance readiness or penetration testing |
| Security lead | Auditor asks for a test | What scope and report will satisfy the request? | Help evaluate vendors and prepare access | SOC 2 penetration testing |
| Engineering manager | Web app or API needs testing | What will be tested manually, and what do we need to provide? | Set testing expectations and reduce scoping delay | Penetration testing |
| AI product owner | Chatbot, copilot, RAG, or agent is launching | Can it expose private data or misuse a connected tool? | Explain testable rules and realistic attack paths | AI security assessment |
| Founder or sales engineer | Questionnaire arrives | How do we answer without making unsupported claims? | Provide an evidence workflow and reusable checklist | Security-questionnaire support |
| Engineering lead | Findings have been delivered | Which fixes matter, and how will the retest prove them? | Connect remediation to proof | Security fixes and retesting |

Forum discussions reinforce these moments. Founders describe questionnaires with 150–300 questions, answers scattered across prior documents, evidence gaps, and days of engineering time. SOC 2 discussions repeatedly ask whether the test is authenticated, how much manual work is included, whether a sample report is available, and whether retesting is included. AI builders ask how to prove tenant isolation, agent permissions, model handling, and prompt-injection controls.

## Content pillars

### Pillar 1: Buying and scoping penetration testing

Rationale: This pillar captures buyers with the clearest commercial intent. The recurring uncertainty is not “what is cybersecurity?” It is which test to buy, what it covers, what it costs, what access is required, and whether the report will be useful.

Product connection: penetration testing, ongoing testing, sample report, request flow.

Subtopic clusters:

- web application versus API testing;
- authenticated testing and role coverage;
- SOC 2 and customer-requested testing;
- black-box, gray-box, and source-assisted scopes;
- test preparation, authorization, and safe access;
- reports, severity, remediation, and retesting;
- vendor selection and pricing questions.

Primary commercial hub: `/services/penetration-testing`

Supporting service pages:

- `/services/web-application-penetration-testing`
- `/services/api-penetration-testing`
- `/services/soc-2-penetration-testing`
- `/services/ongoing-security-testing`
- `/services/security-fixes-retesting`

### Pillar 2: AI application and agent security

Rationale: AI and agent testing is Sthuthi's clearest specialist angle. Competitors already cover prompt injection and OWASP lists. Sthuthi should focus on the decision boundary between an odd output and a confirmed security finding, then show how data, tools, identity, APIs, retrieval, and approvals interact.

Product connection: AI security assessment, SaaS/cloud assessment, synthetic runner, sample evidence record.

Subtopic clusters:

- AI feature add-on versus AI-native assessment;
- direct and indirect prompt injection;
- customer and tenant separation;
- RAG and retrieved-content trust;
- agent tool permissions and approval gates;
- memory, credentials, identity, and connected applications;
- evidence, versioning, expected rules, and retesting;
- AI application security versus model safety.

Primary commercial hub: `/services/ai-security-assessment`

Possible later service pages, subject to search and sales evidence:

- `/services/llm-penetration-testing`
- `/services/chatbot-security-testing`
- `/services/agentic-ai-security-testing`

### Pillar 3: Enterprise security evidence and compliance readiness

Rationale: Buyers describe security work as a sales blocker and evidence problem. A questionnaire or audit request often creates the budget and deadline. Sthuthi can explain what proof belongs behind an answer, where technical testing fits, and what a readiness consultant cannot certify.

Product connection: compliance readiness, security-questionnaire support, penetration testing, report exports.

Subtopic clusters:

- security-questionnaire workflow;
- evidence library and approved answers;
- SOC 2 readiness versus the CPA examination;
- penetration testing in the audit or customer-review process;
- AI-specific procurement questions;
- policies versus operating evidence;
- unsupported answers and remediation planning.

Primary commercial hub: `/services/compliance-readiness`

Supporting service page: `/services/security-questionnaire-help`

### Pillar 4: From finding to verified fix

Rationale: Many security firms focus content on discovery. Sthuthi's product tracks finding review, ownership, remediation, and retesting separately. Content that shows the full chain is useful to engineers and helps justify remediation and recurring-testing services.

Product connection: security fixes and retesting, ongoing security testing, workspace, sample report.

Subtopic clusters:

- writing reproducible findings;
- assigning ownership and tracking evidence;
- fixing authorization and tenant-boundary failures;
- retest scope and acceptance criteria;
- regression scenarios for critical workflows;
- what “no confirmed findings” does and does not mean;
- report versioning and remaining coverage.

Primary commercial hub: `/services/security-fixes-retesting`

Supporting product proof: `/sample-report`

## Topic cluster map

```text
Home
├── Penetration testing hub
│   ├── Web application penetration testing service
│   ├── API penetration testing service
│   ├── SOC 2 penetration testing service
│   ├── How to scope a web application penetration test
│   ├── API pentest vs web application pentest
│   ├── Black-box vs gray-box pentesting
│   ├── How to compare penetration-testing quotes
│   └── What a useful penetration-test report contains
├── AI security assessment hub
│   ├── AI feature add-on vs AI-native assessment
│   ├── AI security assessment vs web application pentest
│   ├── Direct vs indirect prompt injection
│   ├── Test an AI agent's tool permissions
│   ├── RAG security checklist
│   ├── Customer-data separation in an AI support agent
│   ├── Why a jailbreak is not automatically a finding
│   └── Synthetic agent case study and sample evidence
├── Compliance readiness hub
│   ├── Security-questionnaire help service
│   ├── Security-questionnaire evidence checklist
│   ├── Does SOC 2 require a penetration test?
│   ├── Readiness consultant vs independent auditor
│   ├── Build an approved-answer and evidence library
│   └── AI security questions enterprise buyers ask
└── Remediation and retesting hub
    ├── How penetration-test retesting works
    ├── Fixing cross-tenant authorization failures
    ├── Finding status vs remediation status
    ├── Regression tests for security-critical workflows
    └── What “no confirmed findings” actually means
```

Most supporting content should live under `/blog`. The four service hubs and focused commercial pages should remain under `/services`. The synthetic case study can live under `/research` or `/sample-report` because it is permanent product proof rather than a dated opinion post.

## Priority topics

Scores use the content-strategy weighting:

- customer impact: 40%;
- content-market fit: 30%;
- search potential: 20%;
- resource score: 10%, where a higher score means easier to create with available evidence.

Search scores are directional because no paid volume or Search Console export was available. The sequence also accounts for publishing dependencies, so it is not a strict sort by score.

| Sequence | Working title | Mode | Type | Target query | Stage | Impact | Fit | Search | Resources | Weighted score |
|---:|---|---|---|---|---|---:|---:|---:|---:|---:|
| 1 | Does SOC 2 Require a Penetration Test? What to Ask Your Auditor | Searchable | Decision guide | does SOC 2 require a penetration test | Consideration | 9 | 9 | 8 | 8 | 8.7 |
| 2 | API Pentest vs Web Application Pentest: What Each Scope Covers | Searchable | Comparison | API pentest vs web app pentest | Consideration | 9 | 10 | 8 | 8 | 9.0 |
| 3 | How to Scope a Web Application Penetration Test | Searchable | Buying guide | web application penetration test scope | Decision | 9 | 10 | 8 | 7 | 8.9 |
| 4 | AI Security Assessment vs Web Application Pentest | Searchable | Comparison | AI security assessment vs penetration test | Consideration | 9 | 10 | 7 | 8 | 8.8 |
| 5 | Security Questionnaire Evidence Checklist for SaaS Teams | Both | Checklist/template | security questionnaire evidence checklist | Implementation | 10 | 9 | 7 | 7 | 8.8 |
| 6 | Why a Jailbreak Is Not Automatically a Security Finding | Shareable | Point-of-view article | AI jailbreak security finding | Awareness | 8 | 10 | 6 | 9 | 8.3 |
| 7 | How to Test an AI Agent's Tool Permissions and Approval Gates | Both | Technical guide | AI agent security testing | Implementation | 9 | 10 | 7 | 6 | 8.6 |
| 8 | What a Useful Penetration-Test Report Contains | Both | Evaluation guide | penetration test report example | Decision | 9 | 10 | 7 | 9 | 8.9 |
| 9 | Direct vs Indirect Prompt Injection: Test Scenarios and Evidence | Searchable | Technical guide | direct vs indirect prompt injection | Awareness | 8 | 9 | 8 | 7 | 8.2 |
| 10 | How Penetration-Test Retesting Works | Searchable | Process guide | penetration test retest | Decision | 8 | 10 | 6 | 9 | 8.3 |
| 11 | How to Compare Penetration-Testing Quotes Without Buying a Scan | Both | Buying guide | penetration testing cost comparison | Decision | 9 | 9 | 8 | 7 | 8.6 |
| 12 | RAG Security Checklist: Data, Retrieval, Tenants, and Tools | Both | Checklist/template | RAG security checklist | Implementation | 9 | 9 | 8 | 6 | 8.5 |
| 13 | How to Answer a Security Questionnaire Without Guessing | Searchable | Process guide | security questionnaire help | Implementation | 10 | 9 | 8 | 8 | 9.1 |
| 14 | AI Feature Add-On or Standalone AI Assessment? | Searchable | Scope selector | LLM penetration testing scope | Decision | 8 | 10 | 6 | 9 | 8.3 |
| 15 | Testing Customer-Data Separation in an AI Support Agent | Both | Synthetic case study | chatbot data leakage testing | Consideration | 9 | 10 | 6 | 8 | 8.6 |
| 16 | Black-Box vs Gray-Box Pentesting for Authenticated SaaS Products | Searchable | Comparison | black box vs gray box pentest | Consideration | 8 | 9 | 8 | 8 | 8.3 |
| 17 | Readiness Consultant vs SOC 2 Auditor: Who Does What? | Searchable | Comparison | SOC 2 consultant vs auditor | Consideration | 8 | 8 | 8 | 8 | 8.0 |
| 18 | What Access a Penetration-Testing Company Should Request | Searchable | Preparation guide | penetration test access requirements | Implementation | 8 | 10 | 6 | 8 | 8.2 |

The first eight pieces form the launch set. Topics 9–18 follow after the commercial service pages and sample report are complete.

## Content briefs for the first eight pieces

### 1. Does SOC 2 Require a Penetration Test?

- Reader: CTO, founder, security lead, or audit owner.
- Search intent: determine whether a test is required and what evidence to buy.
- Answer in the first paragraph: SOC 2 does not universally require one specific penetration test; the answer depends on the system description, controls, risk assessment, auditor expectations, and customer requirements.
- Required sections: audit requirement versus customer requirement; scope; audit window; authenticated roles; manual testing; report contents; retest; questions for the auditor.
- Product path: SOC 2 pentest service and compliance readiness.
- Asset: one-page auditor-question checklist.
- Review: qualified SOC 2 practitioner or CPA-facing advisor before publication.

### 2. API Pentest vs Web Application Pentest

- Reader: engineering manager or security lead.
- Search intent: select the correct assessment scope.
- Required sections: browser workflows; backing endpoints used by the app; full API inventory; service-to-service credentials; REST and GraphQL; object and function authorization; role matrices; combined scopes.
- Product path: web and API service pages.
- Asset: scope decision table.
- Avoid: implying that every web test includes every API endpoint.

### 3. How to Scope a Web Application Penetration Test

- Reader: buyer preparing for quotes.
- Search intent: understand assets, roles, timing, access, and cost drivers.
- Required sections: application boundaries; user roles; tenants; APIs; third parties; test environment; test data; prohibited actions; emergency contacts; written authorization; deliverables; retest.
- Product path: penetration-testing request form.
- Asset: downloadable scoping worksheet.

### 4. AI Security Assessment vs Web Application Pentest

- Reader: AI product owner, CTO, or application-security lead.
- Search intent: decide whether ordinary application testing covers the AI feature.
- Required sections: shared application/API coverage; model behavior; retrieval; indirect injection; data boundaries; tool actions; approvals; memory; infrastructure; when to combine scopes.
- Product path: AI assessment and penetration testing.
- Asset: two-column scope map.

### 5. Security Questionnaire Evidence Checklist

- Reader: founder, CTO, or sales engineer handling enterprise procurement.
- Search intent: prepare evidence before the spreadsheet arrives.
- Required categories: company and system description; data flows; encryption; identity and access; vulnerabilities and testing; incident response; backups and recovery; vendors and subprocessors; privacy; AI models and training; retention; policies and approvals.
- Product path: questionnaire support and readiness assessment.
- Asset: editable checklist with evidence owner, location, approval date, and review date.
- Rule: never recommend inventing or inferring an unsupported answer.

### 6. Why a Jailbreak Is Not Automatically a Security Finding

- Reader: AI product and security teams.
- Shareable claim: an unusual response matters when it breaks an explicit rule and creates material impact; the evidence must tie the output to the tested version, configuration, user, data, and action.
- Required sections: content-safety behavior versus application security; expected rule; observed result; business impact; reproducibility; tool action; customer boundary; severity; retest.
- Product path: AI assessment and sample report.
- Asset: finding decision flow.

### 7. Testing AI Agent Tool Permissions

- Reader: engineers building agents with APIs, MCP components, or SaaS connectors.
- Search intent: build and test authorization controls.
- Required sections: inventory tools; least-privilege identity; user delegation; argument validation; approval gates; idempotency; action preview; kill switch; logging; rollback; indirect instructions; cross-tenant tests.
- Product path: AI and SaaS/cloud assessments.
- Asset: tool-permission matrix template.
- Review: AI application-security practitioner.

### 8. What a Useful Penetration-Test Report Contains

- Reader: buyer comparing vendors.
- Search intent: evaluate report quality before purchase.
- Required sections: scope and limits; method; target versions; executive summary; finding evidence; reproduction; impact; severity rationale; fix; owner; report version; retest result; remaining coverage.
- Product path: sample report and assessment request.
- Asset: downloadable watermarked sample report.
- Use the synthetic support-agent finding and label it as illustrative demo data.

## Searchable and shareable mix

Target mix for the first 90 days:

| Mode | Share of output | Purpose |
|---|---:|---|
| Searchable | 65% | Capture active buying and preparation questions |
| Both | 25% | Earn search visibility while giving practitioners a reusable asset or distinct view |
| Shareable | 10% | Build recognition for Sthuthi's evidence-based testing position |

Every article must have one primary search question, even when its main distribution is social or direct outreach. Every shareable article must contain a diagram, template, synthetic experiment, or clear decision rule worth citing.

## Twelve-week editorial calendar

| Week | Publish | Mode | Main asset | Primary conversion path |
|---:|---|---|---|---|
| 1 | Improve penetration-testing service hub | Searchable | Scope and deliverable table | Assessment request |
| 2 | How to Scope a Web Application Penetration Test | Searchable | Scoping worksheet | Web pentest page |
| 3 | Publish web and API penetration-testing service pages | Searchable | Scope comparison | Service request |
| 4 | API Pentest vs Web Application Pentest | Searchable | Decision table | API or web service page |
| 5 | Improve AI security assessment hub | Searchable | Add-on vs standalone selector | AI assessment request |
| 6 | AI Security Assessment vs Web Application Pentest | Searchable | Scope map | Combined-scope request |
| 7 | Publish synthetic AI-agent case study and sample report | Both | HTML and PDF evidence record | AI assessment request |
| 8 | Why a Jailbreak Is Not Automatically a Security Finding | Shareable | Finding decision flow | Case study and AI page |
| 9 | Publish SOC 2 pentest and questionnaire-help service pages | Searchable | Evidence boundary table | Compliance request |
| 10 | Does SOC 2 Require a Penetration Test? | Searchable | Auditor-question checklist | SOC 2 pentest page |
| 11 | Security Questionnaire Evidence Checklist | Both | Editable checklist | Questionnaire support |
| 12 | What a Useful Penetration-Test Report Contains | Both | Watermarked sample | Assessment request |

Do not start with weekly news commentary. Complete the commercial hubs, focused service pages, and reusable proof assets first.

## Distribution plan

### Search

- Use the exact primary question in the title, H1, URL, and opening answer.
- Add concise definitions and comparison tables that can be extracted by search and AI answer systems.
- Cite OWASP, NIST, cloud-provider rules, framework owners, and other primary sources.
- Link each article to one commercial page and one adjacent educational piece.
- Add author and reviewer information only when verified.
- Keep publication and update dates visible.

### Direct sales and procurement

- Attach the scoping worksheet during early sales conversations.
- Send the report-quality guide before buyers compare quotes.
- Send the SOC 2 article with a request to confirm the auditor's exact requirement.
- Send the questionnaire checklist before the customer shares sensitive files.
- Use the synthetic case study to explain evidence quality without implying client history.

### Founder and practitioner distribution

- Publish short LinkedIn posts built from one diagram or decision rule, then link to the full piece.
- Share technical case studies in relevant practitioner communities only when the post answers the community's question without a sales pitch.
- Turn each long article into one five-slide document, one plain-text summary, and one checklist excerpt.
- Avoid posting unsupported statistics or fear-based breach claims.

### Partner distribution

Potential partners include independent SOC 2 auditors, readiness consultants, development agencies, AI implementation firms, and cyber-insurance advisers. Build co-authored content only after responsibilities and independence are clear. An audit firm must not appear to guarantee acceptance of Sthuthi's work.

## Editorial standards

Every published piece should include:

1. One buyer question answered in the first paragraph.
2. A clear statement of what is observed, inferred, and still unknown where research is involved.
3. A concrete example, table, checklist, or diagram.
4. Scope limits and conditions.
5. One relevant service path.
6. Links to primary sources.
7. A technical reviewer for security guidance.
8. A factual-review date.

Do not publish:

- generic lists rewritten from OWASP without an original example;
- breach news summaries with no connection to a buyer decision;
- “best penetration-testing companies” pages written to rank Sthuthi first;
- framework pages for services Sthuthi cannot deliver;
- invented customer quotes, test counts, rankings, certifications, or response times;
- AI-generated security claims that a qualified reviewer has not checked;
- programmatic city pages without a verified operating location and distinct local value.

## Content production workflow

1. Select a topic from the scored backlog.
2. Write the buyer question, search intent, service path, and evidence requirement before drafting.
3. Gather primary sources and internal product evidence.
4. Draft the direct answer and outline.
5. Add the reusable asset: table, template, diagram, or synthetic trace.
6. Complete technical and claim review.
7. Add internal links, metadata, structured data where accurate, and the action-specific CTA.
8. Publish and request indexing.
9. Record search impressions, qualified requests, assisted scopes, and sales use.
10. Update the piece when methods, standards, pricing, or product scope change.

## Measurement

### Primary measures

- qualified assessment requests attributed to content;
- request-to-scoped-project rate by landing page;
- signed work influenced by each content cluster;
- service selected and buyer trigger on the request form;
- sample-report and template downloads that lead to a request.

### Search measures

- impressions, clicks, average position, and query coverage in Search Console;
- non-brand commercial queries reaching service pages;
- article-to-service click rate;
- indexed pages with zero impressions after 90 days;
- pages competing for the same query.

### Trust and sales measures

- articles sent by sales during active opportunities;
- content cited in customer or auditor questions;
- time from initial request to agreed scope;
- repeat use of checklists and templates;
- objections resolved by a piece before a call.

Do not treat page views as the main success measure. Ten readers who are actively scoping an assessment can be more valuable than ten thousand general readers.

## Review points

### Day 30

- Confirm that the penetration-testing hub and focused service pages are indexed.
- Review which scope questions appear in requests.
- Update the first four articles from actual buyer language.

### Day 60

- Compare penetration-testing and AI-cluster conversion paths.
- Decide whether the LLM, chatbot, or agentic AI term deserves its own service page.
- Record which assets sales or partners actually reuse.

### Day 90

- Re-score the backlog with Search Console and CRM evidence.
- Merge pages receiving the same queries.
- Expand the cluster producing qualified scopes.
- Add one real, approved case study if delivery evidence exists.
- Set the next quarter's cadence based on technical-review capacity.

## Source record

The strategy builds on:

- [Sthuthi keyword research](./keyword-research-2026-11.md)
- [Sthuthi competitor analysis](./competitor-analysis-2026-11.md)
- [HackerOne LLM application pentest method](https://docs.hackerone.com/en/articles/13489525-h1-llm-application-pentest)
- [Bishop Fox: prompt engineering is not enough](https://bishopfox.com/blog/youre-pen-testing-ai-wrong-why-prompt-engineering-isnt-enough)
- [Cobalt: introduction to AI penetration testing](https://www.cobalt.io/blog/introduction-to-ai-penetration-testing)
- [NetSPI application pentesting considerations](https://www.netspi.com/wp-content/uploads/2026/02/appsec.pdf)
- [Reddit discussion: SOC 2 penetration-test vendor questions](https://www.reddit.com/r/soc2/comments/1vhhllg/auditor_said_i_need_a_penetration_test_report/)
- [Reddit discussion: enterprise security questionnaires](https://www.reddit.com/r/SaaS/comments/1qwznbv/saas_founders_selling_to_enterprise_how_do_you/)
- [Reddit discussion: AI security questionnaire evidence](https://www.reddit.com/r/SaaS/comments/1uccnif/founders_selling_to_enterprise_how_do_you_handle/)

Forum material identifies questions and language, not market size. Claims about Sthuthi must come from verified product and delivery evidence.

