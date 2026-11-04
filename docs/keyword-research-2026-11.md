# Sthuthi Securities keyword research

Research date: 4 November 2026  
Market: United States  
Audience: software and digital businesses with roughly 50–1,000 employees  
Research status: directional search and competitor research, not paid keyword-volume data

## Executive decision

Build search acquisition around four buyer moments:

1. A customer or auditor requires a penetration test.
2. A team is launching an AI feature or agent and needs an independent assessment.
3. A SaaS company needs SOC 2 readiness or a security questionnaire completed.
4. A product team needs findings fixed and retested.

The first two are the main acquisition paths. Compliance and remediation should receive their own pages because their search intent and buyer questions differ from a general services page.

Do not create dozens of thin location or framework pages. The site has no verified local office, delivery team, certification inventory, or customer proof to support them. Publish a small set of pages with exact scope, inputs, deliverables, price, limits, and an illustrative report.

## Method and limits

This research used live search results and current competitor pages to identify the wording companies use for services, page structures, pricing signals, and likely buying intent. It did not use Google Search Console, Google Ads Keyword Planner, DataForSEO, Semrush, or Ahrefs. No search-volume, cost-per-click, ranking, or demand claim appears in this report.

Priority is based on:

- fit with the approved service catalog;
- commercial intent in observed results;
- value of the engagement;
- Sthuthi's ability to show a concrete difference;
- how closely the query maps to one buying decision;
- whether the site can support the claim today.

Before publishing more than the P0 pages, connect Search Console and a paid keyword source, then record US monthly volume, keyword difficulty, cost per click, and current rank in this document.

## Priority keyword map

| Priority | Primary query | Closely related language | Intent | Recommended page | Buyer question | Main action |
|---|---|---|---|---|---|---|
| P0 | penetration testing services | penetration testing company, pen test company, application penetration testing | Commercial | `/services/penetration-testing` | Who can test our product and give us an audit-ready report? | Discuss your project |
| P0 | web application penetration testing | web app pentest, SaaS application penetration test | Commercial | `/services/web-application-penetration-testing` | Can you test our authenticated application and business logic? | Request a web app scope |
| P0 | API penetration testing services | API security testing service, REST API pentest, GraphQL pentest | Commercial | `/services/api-penetration-testing` | Can you test authorization across users, roles, and endpoints? | Request an API scope |
| P0 | SOC 2 penetration testing | SOC 2 pen test, penetration test for SOC 2, audit-ready pentest | Commercial / deadline | `/services/soc-2-penetration-testing` | Will the scope and report fit what our auditor or customer asked for? | Discuss the audit requirement |
| P0 | AI security assessment | AI penetration testing services, AI application security testing | Commercial | `/services/ai-security-assessment` | Can our AI feature expose data or perform an unapproved action? | Request an AI assessment |
| P0 | LLM penetration testing | LLM security testing, LLM application pentest | Commercial / technical | `/services/llm-penetration-testing` or a clearly separated section on the AI page | How will you test the model, retrieval, application, and tools together? | Discuss the AI system |
| P0 | prompt injection testing | indirect prompt injection testing, prompt injection assessment | Commercial / problem-led | Section and anchor on the AI page initially | Can hidden instructions make the system leak data or call a tool? | Request an AI assessment |
| P0 | chatbot security testing | AI chatbot penetration testing, chatbot security assessment | Commercial / use-case | `/services/chatbot-security-testing` after proof exists | Can our support or internal chatbot cross a data boundary? | Test a chatbot workflow |
| P1 | agentic AI security testing | AI agent penetration testing, AI agent security assessment | Commercial / emerging | `/services/agentic-ai-security-testing` after the method is documented | Can an agent misuse tools, credentials, memory, or approvals? | Scope an agent test |
| P1 | SOC 2 readiness consulting | SOC 2 help for SaaS, SOC 2 readiness services | Commercial | `/services/compliance-readiness` | What is missing before we engage the auditor? | Request a readiness review |
| P1 | security questionnaire help | security questionnaire completion service, vendor questionnaire help | Commercial / urgent | `/services/security-questionnaire-help` | Can someone produce evidence-backed answers without guessing? | Send the questionnaire scope |
| P1 | SaaS security assessment | SaaS security review, SaaS access review | Commercial | `/services/saas-cloud-security` | Which users, apps, and persistent integrations can reach our data? | Discuss the environment |
| P1 | OAuth security assessment | OAuth security review, connected app security review | Commercial / problem-led | Section on SaaS/cloud page; separate page after demand is measured | Which grants and tokens remain active, and what can they access? | Request an access review |
| P1 | cloud security assessment | AWS security assessment services, cloud security review | Commercial | `/services/cloud-security-assessment` when delivery scope is ready | What is public, over-permissioned, or poorly recoverable in our account? | Request a cloud scope |
| P1 | ongoing penetration testing | penetration testing as a service, PTaaS, continuous pentesting | Commercial / recurring | `/services/ongoing-security-testing` | How do we retest important workflows as releases change? | Discuss recurring coverage |
| P1 | penetration test remediation | fix penetration test findings, pentest remediation services | Commercial / post-assessment | `/services/security-fixes-retesting` | Can a team fix the issues and prove the changes work? | Share a sanitized findings summary |
| P1 | penetration test retesting | retest security findings, vulnerability retest service | Commercial / urgent | Section on remediation page | Can you verify our fixes and issue an updated result? | Request a retest |
| P2 | software supply chain security assessment | CI/CD security review, build pipeline security assessment | Commercial / technical | `/services/supply-chain-security` | Can someone inspect dependencies, secrets, build access, and artifact checks? | Discuss repositories and pipelines |
| P2 | incident response tabletop exercise | ransomware tabletop exercise, incident response plan testing | Commercial | `/services/incident-response-planning` | Can our team revoke access, preserve evidence, and restore the service? | Plan an exercise |
| P2 | ISO 42001 readiness | AI management system readiness, ISO 42001 consulting | Commercial / framework | A section under compliance until delivery staff and method are confirmed | What must we prepare before an independent certification audit? | Discuss the framework |

## Page decisions

### 1. Penetration testing hub

Primary intent: `penetration testing services`

Keep `/services/penetration-testing` as the category page. It should explain when a web application, API, mobile, cloud, or combined scope is appropriate. It should link to focused web, API, and SOC 2 pages rather than trying to rank one page for every variation.

Suggested title: `Penetration Testing Services for Software Companies | Sthuthi Securities`

Suggested H1: `Penetration testing for web apps, APIs, and mobile products.`

Suggested description: `Manual security testing for one application or API, with reproduction steps, an engineering walkthrough, and one retest. Projects start at $12,000.`

Required sections:

- what is tested manually and what tools support the work;
- authenticated roles and business-logic testing;
- scope and written authorization;
- evidence and severity review;
- deliverables and one retest;
- what the test does not prove;
- sample finding and sample report link;
- price, timing, and access checklist.

### 2. Web application penetration testing

Primary intent: `web application penetration testing`

This deserves a separate P0 page because the buyer is selecting an application test, while the parent page helps buyers choose a service. Explain authenticated testing, role and tenant boundaries, file handling, session behavior, business logic, and the relationship between the browser application and its backing APIs.

Suggested title: `Web Application Penetration Testing Services | Sthuthi Securities`

Suggested H1: `Find exploitable flaws in your web application before a customer does.`

Suggested description: `Authenticated web application testing with validated findings, reproduction steps, fix guidance, and one retest.`

### 3. API penetration testing

Primary intent: `API penetration testing services`

Observed service pages repeatedly distinguish API testing from a web-app test. The page should lead with object- and function-level authorization, role matrices, service credentials, REST and GraphQL, rate and resource abuse, and third-party API trust. Do not promise protocol coverage the team cannot deliver.

Suggested title: `API Penetration Testing Services | Sthuthi Securities`

Suggested H1: `Test whether every API request is authorized for the right user and role.`

Suggested description: `API security testing for authentication, authorization, data exposure, business logic, and service-to-service access, with evidence engineers can reproduce.`

### 4. SOC 2 penetration testing

Primary intent: `SOC 2 penetration testing`

This page should not claim a penetration test is universally required by SOC 2. Ask for the auditor's exact request and system description. Explain the difference between a report that supports evidence collection and an audit opinion issued by a CPA firm.

Suggested title: `SOC 2 Penetration Testing for SaaS Companies | Sthuthi Securities`

Suggested H1: `A scoped penetration test for your SOC 2 evidence package.`

Suggested description: `Web application and API testing mapped to the scope your auditor or customer requested, with a technical report, executive summary, and retest.`

### 5. AI security assessment

Primary intent: `AI security assessment`

Keep the existing route as the commercial hub. Split the offer visibly into two scopes:

- **AI feature add-on:** an existing application has chat, summarization, classification, or recommendation features. Pair AI-specific checks with an application test.
- **AI-native assessment:** an agentic or RAG-based product depends on model output, vector stores, tool calls, memory, or automated actions. Test the whole workflow and its trust boundaries.

HackerOne uses a similar add-on versus standalone distinction. That makes the buying choice easier and prevents a small chatbot feature from receiving the same scope as an autonomous multi-agent system.

Suggested title: `AI Security Assessment and LLM Penetration Testing | Sthuthi Securities`

Suggested H1: `Test whether your AI can expose data or take an action it should not.`

Suggested description: `Security testing for AI features, chatbots, RAG systems, and agents. Check prompt injection, customer separation, tool permissions, approvals, and application controls.`

Required sections:

- AI feature add-on versus AI-native scope;
- direct and indirect prompt injection;
- retrieval and customer-data separation;
- tool permissions, approval gates, and action traces;
- system prompt leakage versus material business impact;
- model, application, API, cloud, and identity boundaries;
- versioned scenarios and reproducible evidence;
- representative fake data and test-environment requirements;
- what remains untested;
- exact scope: one application, two workflows, five connected tools, $9,500.

### 6. Security questionnaire help

Primary intent: `security questionnaire help`

Give this a focused P1 page. Current service pages stress that answers must come from supplied policies and approved evidence, and that missing support should be flagged rather than invented. Sthuthi can connect the questionnaire to technical remediation and a future pen test, which pure completion services often do not.

Suggested title: `Security Questionnaire Help for SaaS Companies | Sthuthi Securities`

Suggested H1: `Complete the questionnaire with evidence, and flag the controls you cannot support yet.`

Suggested description: `Evidence-backed help with customer and vendor security questionnaires, including answer drafting, gap identification, and a prioritized remediation list.`

### 7. SaaS, cloud, identity, and OAuth

Primary intent: `SaaS security assessment`

Use plain wording before cloud acronyms. The distinguishing workflow is an access-path review across identity, a CRM or support platform, integrations, tokens, and selected recovery steps. Use `OAuth security review` as a section and supporting query first. Create a separate OAuth page only if Search Console shows impressions or buyers repeatedly request it.

## Content clusters

### Penetration testing buying guide

Commercial-support content:

- `How to scope a web application penetration test`
- `API pentest vs web application pentest`
- `What a SOC 2 penetration test report should contain`
- `Black box vs gray box penetration testing`
- `What access a penetration testing company needs`
- `How penetration-test retesting works`

Each article should link to one service page and the sample report. Avoid generic “top ten vulnerabilities” posts unless they use original findings or code examples.

### AI and agent security

Commercial-support content:

- `AI security assessment vs web application penetration test`
- `Direct vs indirect prompt injection testing`
- `How to test an AI agent's tool permissions`
- `Security checklist for a RAG application`
- `What evidence belongs in an LLM penetration test report`
- `Why a jailbreak is not always a security finding`
- `How to test customer-data separation in an AI support agent`

The strongest original asset is the existing synthetic cross-customer order example. Turn it into a technical case study with the target version, authorization rule, sanitized trace, observed result, fix, and retest result.

### Compliance and enterprise sales

Commercial-support content:

- `Does SOC 2 require a penetration test?`
- `Security questionnaire evidence checklist for SaaS teams`
- `SOC 2 readiness: what the consultant does and what the auditor does`
- `How to answer a customer security questionnaire without guessing`
- `Penetration-test evidence for an enterprise security review`

## Internal-link map

| From | Link to | Anchor idea |
|---|---|---|
| Home | Penetration testing | penetration testing for your web app or API |
| Home | AI assessment | test an AI feature or agent |
| Home | Compliance readiness | SOC 2 and security questionnaire help |
| Penetration testing | Web app page | authenticated web application testing |
| Penetration testing | API page | API authorization testing |
| Penetration testing | SOC 2 page | penetration testing for SOC 2 evidence |
| AI assessment | Penetration testing | application and API controls around the model |
| AI assessment | SaaS/cloud | tool, OAuth, and connected-app permissions |
| AI assessment | Sample report | illustrative AI-agent finding |
| Compliance readiness | SOC 2 pentest | independent technical testing |
| Compliance readiness | Questionnaire page | evidence-backed questionnaire help |
| Every service | Process | scope, written authorization, testing, review, and retest |
| Every service | Request | describe the system and required proof |

## Cannibalization rules

- The penetration-testing hub owns `penetration testing services`; web, API, and SOC 2 pages own their exact service modifiers.
- The AI hub owns `AI security assessment`. A future LLM page must focus on AI-native applications and must not repeat the hub word for word.
- Prompt injection and chatbot terms should remain sections on the AI page until there is enough original material for distinct pages.
- Compliance readiness owns framework preparation. The SOC 2 pentest page owns the technical test. Cross-link them and state the boundary.
- The SaaS/cloud page owns access paths and connected apps. A future AWS page should focus on account and workload configuration, not repeat the SaaS page.

## Conversion and proof requirements

The current site has clear prices and boundaries, but it lacks the proof buyers compare on competitor pages. Add these only when they are true:

1. Named assessor biographies and relevant credentials.
2. A downloadable, watermarked sample report.
3. A one-page methodology for web/API tests and a separate AI method.
4. A report acceptance statement based on actual auditor or customer use.
5. Professional liability and cyber insurance details suitable for procurement.
6. A data-processing and personnel-access statement based on configured providers.
7. Client references or case studies with written permission.
8. A real scheduling and response-time commitment supported by delivery capacity.

Until then, the site should keep its current honest wording and use the synthetic evidence record as illustrative proof of report quality, not proof of client history.

## Measurement plan

Track each page separately:

- impressions and clicks by query in Google Search Console;
- qualified assessment requests by landing page and selected service;
- request-to-scope and scope-to-signed-project rates;
- average time from request to scope;
- page-to-sample-report clicks;
- requests that mention an audit, customer deadline, AI launch, or remediation;
- no-result internal searches, if site search is later added.

Review at 30, 60, and 90 days after indexing. Merge or rewrite pages that receive the same queries. Do not judge a page from traffic alone; count qualified scopes and signed work.

## Sources

- [Cobalt pentest pricing](https://www.cobalt.io/platform/pricing)
- [NetSPI AI and LLM penetration testing](https://www.netspi.com/netspi-ptaas/ai-ml-penetration-testing/)
- [Bishop Fox AI and LLM security assessment](https://bishopfox.com/services/penetration-testing-services/ai-llm-security-assessment)
- [HackerOne H1 LLM Application Pentest](https://docs.hackerone.com/en/articles/13489525-h1-llm-application-pentest)
- [BreachLock penetration testing services](https://www.breachlock.com/penetration-testing-service/)
- [Trail of Bits AI/ML security](https://trailofbits.com/services/ai-ml)
- [CSIS AI security assessment](https://www.csis.com/ai-security-assessment)
- [AWS penetration testing policy](https://aws.amazon.com/security/penetration-testing/)
- [Cichocki Advisory security questionnaire service](https://www.cichocki.com/trust/security-questionnaire/)
- [SecureQuestionnaires service](https://securequestionnaires.com/)

