export type ServicePageContent = {
  seoTitle: string;
  seoDescription: string;
  outcome: string;
  questions: string[];
  coverage: Array<{ title: string; body: string }>;
  method: Array<{ title: string; body: string }>;
  deliverables: string[];
  exclusions: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const servicePageContent: Record<string, ServicePageContent> = {
  'penetration-testing': {
    seoTitle: 'Penetration Testing for Web Apps, APIs, and Mobile Apps',
    seoDescription: 'Authorized penetration testing for web applications, APIs, and mobile apps, with reproducible findings, engineering guidance, and one verification retest.',
    outcome: 'A defensible answer to a practical question: can someone cross an authorization boundary, expose customer data, abuse a sensitive workflow, or gain access the product should deny?',
    questions: ['Can one customer reach another customer’s records?', 'Can a lower-privilege user perform an administrator action?', 'Can authentication, recovery, session, file, payment, or export workflows be abused?', 'Will the report give engineers enough evidence to reproduce and fix each confirmed issue?'],
    coverage: [
      { title: 'Application and API boundary', body: 'Named hosts, API versions, mobile backends, roles, tenants, critical workflows, and owned dependencies are recorded before testing.' },
      { title: 'Authenticated manual testing', body: 'Representative accounts are used to test authorization, sessions, business logic, input handling, workflow abuse, and server-side enforcement.' },
      { title: 'Safe operating rules', body: 'Written authorization states the target, window, rate limits, prohibited actions, test data, monitoring contacts, and stop conditions.' },
      { title: 'Finding verification', body: 'A result becomes a confirmed finding only after evidence review. Severity, affected scope, reproduction, impact, and the recommended change stay connected.' },
    ],
    method: [
      { title: 'Scope the decision', body: 'We identify who needs the report, which product is being assessed, what promise or requirement it must support, and which systems are outside the engagement.' },
      { title: 'Prepare access', body: 'The client supplies agreed accounts and representative test data through a controlled handoff. Two tenants are preferred where customer separation matters.' },
      { title: 'Test and review', body: 'Manual testing is supported by tools. Evidence is sanitized, reviewed, and tied to the tested version and workflow.' },
      { title: 'Explain, fix, and retest', body: 'Engineers receive a walkthrough. One requested retest within 30 days repeats the finding path and checks likely bypasses.' },
    ],
    deliverables: ['Executive summary for the relying audience', 'Technical findings with evidence and reproduction steps', 'Severity rationale and specific remediation guidance', 'Engineering walkthrough and updated retest status'],
    exclusions: ['No denial-of-service, social engineering, physical testing, or persistence unless separately authorized', 'No claim that a time-bounded assessment proves the product is free of vulnerabilities', 'Third-party infrastructure is excluded unless its owner has granted permission'],
    faqs: [
      { question: 'Is this the same as a vulnerability scan?', answer: 'No. Scanners help identify known patterns and exposed software. A penetration test adds manual analysis of roles, tenants, sessions, business logic, and application-specific abuse.' },
      { question: 'Can the test support SOC 2 or a customer review?', answer: 'It can supply technical evidence when the scope, dates, report contents, and retest match the auditor or customer request. SOC 2 does not create one universal penetration-test scope.' },
      { question: 'Do you test production?', answer: 'A representative test environment is preferred. Production testing requires specific data rules, request limits, contacts, monitoring, and stop conditions.' },
    ],
  },
  'ai-security-assessment': {
    seoTitle: 'AI Security Assessment and Agent Penetration Testing',
    seoDescription: 'Test AI agents, copilots, and chatbots for data exposure, prompt injection, identity failures, unsafe tool use, approval bypass, and cross-customer access.',
    outcome: 'Evidence showing whether an AI-enabled workflow can expose private data or cause a business action outside the user’s identity, tenant, role, and approval boundary.',
    questions: ['Can retrieved content or a user prompt redirect the agent’s goal?', 'Can the agent call a tool with authority the current user does not have?', 'Can one tenant’s ticket, memory, file, or order appear in another tenant’s session?', 'Which refunds, account changes, disclosures, or outbound actions need human approval?'],
    coverage: [
      { title: 'Identity and tenant context', body: 'We trace how user, tenant, role, case, and ownership context reaches retrieval, model calls, memory, tools, and server-side authorization.' },
      { title: 'Prompt and retrieval attacks', body: 'Direct and indirect prompt injection, goal redirection, untrusted attachments, retrieved pages, tool output, and memory inputs are tested inside the agreed workflows.' },
      { title: 'Tool and approval controls', body: 'Tool schemas, server checks, amount limits, idempotency, approval gates, audit records, and failure behavior are examined for critical actions.' },
      { title: 'Deterministic evidence', body: 'The record keeps the model, prompt version, tools, configuration, attempt count, test fixture, expected control, and observed result.' },
    ],
    method: [
      { title: 'Map the system', body: 'We diagram models, prompts, retrieval sources, memory, tools, queues, identity tokens, logs, providers, and human decisions.' },
      { title: 'Choose critical workflows', body: 'Two high-impact workflows are selected based on data access, money movement, account authority, or external communication.' },
      { title: 'Run adversarial scenarios', body: 'Tests cover goal hijack, identity abuse, tool misuse, unsafe retrieval, memory poisoning, approval bypass, cross-tenant access, and chained failure.' },
      { title: 'Verify the control', body: 'A security finding requires an observed consequence or control failure, not merely an unusual model response.' },
    ],
    deliverables: ['AI system and authority boundary', 'Scenario matrix with expected controls', 'Confirmed findings with repeatable evidence', 'Engineering review and one bounded retest'],
    exclusions: ['No claim that a model is universally safe or aligned', 'No testing outside the agreed workflows, tenants, tools, and providers', 'Safety, bias, and content-quality review are separate unless explicitly scoped'],
    faqs: [
      { question: 'Is a jailbreak automatically a security finding?', answer: 'No. A finding needs an affected asset, a failed control, and a security consequence such as unauthorized data access or action.' },
      { question: 'Do you test the model or the application?', answer: 'The assessment treats the agent as a system: application code, APIs, identity, retrieval, memory, tools, approvals, model and provider configuration, and logging.' },
      { question: 'Can you test a customer-support agent?', answer: 'Yes, when the client can provide a safe test tenant, representative data, a tool-permission map, and authorization for the selected support workflows.' },
    ],
  },
  'saas-cloud-security': {
    seoTitle: 'SaaS and Cloud Security Assessment',
    seoDescription: 'Review cloud exposure, identity, OAuth grants, business SaaS access, tokens, secrets, storage, recovery procedures, and high-risk integrations.',
    outcome: 'A current map of which people, workloads, tokens, and connected applications can reach important systems and data, followed by prioritized changes and verification.',
    questions: ['Which cloud resources and administrative interfaces are reachable?', 'Which people, service accounts, OAuth grants, and long-lived tokens retain access?', 'Can a compromised integration reach data beyond its business purpose?', 'Do recovery and offboarding procedures actually remove access?'],
    coverage: [
      { title: 'Cloud exposure', body: 'Selected accounts, public services, storage, secrets, administrator paths, logging, and recovery controls are reviewed within the agreed boundary.' },
      { title: 'Identity and privilege', body: 'Workforce identity, administrator roles, service accounts, dormant access, break-glass paths, and joiner-mover-leaver records are examined.' },
      { title: 'SaaS and OAuth', body: 'Connected applications, delegated permissions, refresh tokens, service integrations, ownership, business purpose, and revocation behavior are inventoried.' },
      { title: 'Response readiness', body: 'The team checks how suspicious access is detected, investigated, contained, and documented for the systems in scope.' },
    ],
    method: [
      { title: 'Select accounts and applications', body: 'One identity environment and either one CRM or support environment with up to ten integrations, or a bounded cloud account, are named.' },
      { title: 'Collect read-only records', body: 'Administrative exports, inventories, role data, provider configuration, and existing evidence are preferred over unnecessary broad access.' },
      { title: 'Trace access paths', body: 'We connect identities, tokens, public exposure, storage, and sensitive data to show where one compromised path creates material impact.' },
      { title: 'Prioritize and verify', body: 'Recommendations identify the owner, affected system, intended change, and evidence required for a bounded retest.' },
    ],
    deliverables: ['Cloud or SaaS access inventory', 'Identity, token, and integration risk register', 'Prioritized remediation plan with owners', 'Management summary and bounded verification'],
    exclusions: ['Not a complete inventory of systems outside the named accounts and applications', 'No active exploitation of provider infrastructure', 'Provider licensing, implementation, and migration work are quoted separately'],
    faqs: [
      { question: 'Do you need administrator access?', answer: 'Read-only administrative visibility or exports are preferred. The exact access is agreed during scoping and should be no broader than the work requires.' },
      { question: 'Does the review cover AWS, Azure, or Google Cloud?', answer: 'A bounded account review can cover any named provider when the required inventory and configuration records are available.' },
      { question: 'Will this remove old OAuth access?', answer: 'The assessment identifies and prioritizes grants. Changes are made by the client unless remediation work is separately agreed.' },
    ],
  },
  'supply-chain-security': {
    seoTitle: 'Software Supply Chain and CI/CD Security Review',
    seoDescription: 'Review repositories, dependencies, secrets, build permissions, CI/CD pipelines, artifact integrity, release controls, and software provenance.',
    outcome: 'A traceable picture of how source becomes a shipped artifact, which identities and dependencies can alter that path, and where integrity or secret controls fail.',
    questions: ['Who can change source, pipeline configuration, build workers, and release destinations?', 'Can secrets leak through repositories, logs, artifacts, or pull requests?', 'Are dependencies and build inputs pinned, reviewed, and attributable?', 'Can the team verify that a released artifact came from the expected source and pipeline?'],
    coverage: [
      { title: 'Repositories and review', body: 'Branch protection, reviewer rules, sensitive paths, automation identities, deploy keys, secret scanning, and change history are examined.' },
      { title: 'Dependencies and components', body: 'Direct and material transitive dependencies, registries, package sources, update behavior, SBOM practices, and known-risk handling are reviewed.' },
      { title: 'Build and release authority', body: 'Pipeline permissions, runners, environment boundaries, approvals, signing, artifact storage, and release promotion are traced.' },
      { title: 'Shipped-artifact proof', body: 'Where available, source revision, build record, provenance, digest, signature, and deployed version are connected.' },
    ],
    method: [
      { title: 'Map the release path', body: 'Up to five repositories and two build or release pipelines are selected, with owners and production impact.' },
      { title: 'Inspect configuration and access', body: 'Read access is used to review policy, pipeline code, secrets handling, identities, approvals, and artifact movement.' },
      { title: 'Challenge control assumptions', body: 'The assessment checks whether a contributor, compromised dependency, leaked token, or untrusted runner can change a release.' },
      { title: 'Define verification evidence', body: 'Each recommendation states how the team can prove the changed release control operates.' },
    ],
    deliverables: ['Release-path and authority diagram', 'Dependency and secret-control observations', 'Pipeline and artifact-integrity findings', 'Prioritized hardening and verification plan'],
    exclusions: ['A dependency scan alone is not represented as a supply-chain assessment', 'No live production release is performed by the assessor', 'Vendor source code and registries outside client authority are not tested'],
    faqs: [
      { question: 'Is an SBOM enough?', answer: 'No. An SBOM helps inventory components. It does not prove who can change the pipeline, how secrets are protected, or whether a shipped artifact matches reviewed source.' },
      { question: 'Can you review GitHub Actions or other CI systems?', answer: 'Yes, when the selected repositories, workflows, identities, environments, and release path are included in scope.' },
      { question: 'Do you fix pipeline findings?', answer: 'The review supplies specific changes. Implementation can be scoped as separate remediation engineering.' },
    ],
  },
  'phishing-resilience': {
    seoTitle: 'Consented Phishing and Social Engineering Resilience Testing',
    seoDescription: 'Consent-based phishing, help-desk, payment approval, and impersonation exercises for named participants, followed by process repair.',
    outcome: 'Evidence showing where identity verification, password or MFA recovery, payment approval, and escalation procedures fail under a controlled and consented exercise.',
    questions: ['Can a help desk be persuaded to reset access without sufficient proof?', 'Can a payment or bank-detail change bypass an independent verification step?', 'Will staff recognize and report a realistic phishing attempt?', 'Does the response process contain the event and preserve useful evidence?'],
    coverage: [
      { title: 'Named participants only', body: 'Every participant, scenario, notification rule, data source, and communication channel requires prior written agreement.' },
      { title: 'Process-centered scenarios', body: 'Exercises focus on password recovery, MFA reset, payment change, executive impersonation, sensitive disclosure, or another agreed business process.' },
      { title: 'Safe handling', body: 'No real credentials are collected. Test pages, mailboxes, likeness material, and exercise records have defined owners, retention, and destruction.' },
      { title: 'Repair the failed step', body: 'The output identifies which verification, approval, escalation, training, or monitoring step must change.' },
    ],
    method: [
      { title: 'Approve the exercise', body: 'Security, legal, HR, and the named participants agree on consent, timing, channels, notification, stop conditions, and welfare considerations.' },
      { title: 'Build the scenario', body: 'The pretext and action are bounded to the approved process and avoid unnecessary personal or customer data.' },
      { title: 'Observe process outcomes', body: 'The assessment records decisions and control outcomes rather than shaming individuals.' },
      { title: 'Rehearse the repair', body: 'The team updates and tests verification, escalation, reporting, and recovery steps.' },
    ],
    deliverables: ['Approved exercise plan and participant record', 'Control-outcome report without blame scoring', 'Revised verification and escalation workflow', 'Leadership debrief and retest options'],
    exclusions: ['Not offered until qualified delivery capacity is assigned', 'No non-consenting employees, customers, public targets, or surprise deepfake exercises', 'No collection or retention of real passwords, MFA codes, or payment credentials'],
    faqs: [
      { question: 'Why is this availability-gated?', answer: 'The work needs qualified staff, consent handling, HR coordination, and safe operating procedures. It is not offered until those conditions are met.' },
      { question: 'Do you rank employees?', answer: 'No. The assessment tests whether the process prevents and contains a harmful action. Individual outcomes are handled under the agreed notification plan.' },
      { question: 'Can you clone an executive’s voice?', answer: 'Only with that person’s explicit consent, an agreed scenario, and a destruction plan for the temporary model and source material.' },
    ],
  },
  'compliance-readiness': {
    seoTitle: 'SOC 2, ISO 27001, HIPAA, and Security Review Readiness',
    seoDescription: 'Prepare for customer security reviews and named-framework audits with a scoped gap assessment, evidence plan, remediation priorities, and questionnaire support.',
    outcome: 'A truthful, reviewable connection between the requirement, the company’s current control, the evidence that proves operation, the remaining gap, and the person accountable for closing it.',
    questions: ['Which exact framework, customer requirement, contract, and product boundary apply?', 'Which claims have current evidence and which describe planned work?', 'Where do policies disagree with technical operation?', 'Which gaps block the audit or deal, and what proof will establish closure?'],
    coverage: [
      { title: 'Requirement and scope', body: 'The named framework, customer questionnaire, system description, entities, services, data, suppliers, and review period are defined.' },
      { title: 'Control and evidence mapping', body: 'Policies, procedures, tickets, settings, logs, reviews, tests, exceptions, and owner interviews are mapped to the requirement they support.' },
      { title: 'Gap decisions', body: 'Each gap has affected scope, risk, owner, action, evidence of completion, and an honest customer-facing statement.' },
      { title: 'Review preparation', body: 'The team prepares an evidence index, approved answer set, interview plan, disclosure rules, and response tracker.' },
    ],
    method: [
      { title: 'Freeze the review boundary', body: 'We identify the product, period, criteria, relying audience, and material suppliers before collecting documents.' },
      { title: 'Challenge current operation', body: 'The team compares written controls with what people and systems do, including exceptions.' },
      { title: 'Prioritize blockers', body: 'Work is ordered by contractual or audit impact, security risk, dependency, and evidence lead time.' },
      { title: 'Prepare the handoff', body: 'Artifacts, owners, approved answers, and remaining risks are organized for the customer or independent auditor.' },
    ],
    deliverables: ['Named-framework gap assessment', 'Control, evidence, and owner matrix', 'Prioritized remediation and exception register', 'Draft policies and questionnaire support'],
    exclusions: ['Sthuthi does not issue a SOC audit opinion or ISO certificate', 'Readiness does not guarantee an auditor or customer will accept every control', 'Legal interpretation and formal attestation remain with qualified counsel and auditors'],
    faqs: [
      { question: 'Do you perform the SOC 2 audit?', answer: 'No. A qualified CPA firm performs the examination. Sthuthi prepares the system, evidence, remediation plan, and technical testing records.' },
      { question: 'Can you complete a security questionnaire?', answer: 'We can help answer it from current evidence, identify unknowns, and prepare supporting artifacts. We do not invent controls or certifications.' },
      { question: 'Which framework should we choose?', answer: 'That depends on customer, regulatory, contractual, and product requirements. The first step is to identify the relying audience and exact decision.' },
    ],
  },
  'security-fixes-retesting': {
    seoTitle: 'Security Remediation Engineering and Penetration Test Retesting',
    seoDescription: 'Fix agreed application security findings, preserve engineering evidence, and independently verify the changed control through a bounded retest.',
    outcome: 'Confirmed findings move through owned engineering changes to independent verification, with the original evidence, fix record, retest result, and residual risk kept separate.',
    questions: ['What control failed rather than which line happened to contain the symptom?', 'Which roles, tenants, endpoints, and workflows share the same cause?', 'What change will prevent bypasses without breaking the product?', 'What evidence is required to call the finding fixed and verified?'],
    coverage: [
      { title: 'Finding validation', body: 'Third-party or Sthuthi findings are reviewed for affected scope, reproduction, severity, root cause, and acceptance criteria.' },
      { title: 'Remediation design', body: 'Changes can include server-side authorization, narrower tokens, secret handling, approval gates, audit records, validation, and safe defaults.' },
      { title: 'Engineering delivery', body: 'The agreed code and configuration changes are implemented through the client’s controlled development and review path.' },
      { title: 'Independent retest', body: 'The original path, likely bypasses, adjacent roles or tenants, and regression risk are checked against a named version.' },
    ],
    method: [
      { title: 'Accept the findings', body: 'The team establishes which observations are confirmed, which need more evidence, and which are outside the repair scope.' },
      { title: 'Define done', body: 'Acceptance criteria state the expected security behavior and the evidence required for verification.' },
      { title: 'Implement through normal controls', body: 'Changes use the client’s repository, review, test, release, and rollback process.' },
      { title: 'Verify independently', body: 'A retest records the tested version and outcome. “Ready for retest” never means “fixed.”' },
    ],
    deliverables: ['Finding acceptance and scope record', 'Agreed code or configuration changes', 'Engineering notes and fix evidence', 'Retest evidence and updated status'],
    exclusions: ['Major product redesign and unrelated defects require a revised scope', 'No guarantee that a change removes every vulnerability in the product', 'Production deployment ownership stays with the client unless explicitly agreed'],
    faqs: [
      { question: 'Can you fix findings from another testing company?', answer: 'Yes. The findings are first reviewed for evidence, scope, and acceptance criteria before a remediation quote is issued.' },
      { question: 'Who verifies the fix?', answer: 'Verification is kept separate from the engineer’s implementation record and requires new test evidence.' },
      { question: 'What if the recommended fix changes the product?', answer: 'The team agrees on the security outcome, product constraint, compensating control, and residual risk before implementation.' },
    ],
  },
  'ongoing-security-testing': {
    seoTitle: 'Ongoing Security Testing for SaaS Releases',
    seoDescription: 'Recurring security testing for agreed workflows, releases, permissions, integrations, remediation, and quarterly exercises, with explicit monthly limits.',
    outcome: 'A maintained set of high-risk workflows and controls is checked as the product changes, so prior findings and important boundaries do not disappear between annual assessments.',
    questions: ['Which releases or configuration changes should trigger testing?', 'Which workflows would create the most customer or business impact if they regressed?', 'Are permission, tenant, integration, and approval controls still enforced?', 'Are old findings recurring, aging, or being closed without verification?'],
    coverage: [
      { title: 'Versioned workflow set', body: 'Up to five agreed workflows have roles, tenants, preconditions, expected controls, and test data.' },
      { title: 'Release and change review', body: 'Material changes, new integrations, permission changes, and remediation work are reviewed against test triggers.' },
      { title: 'Monthly testing', body: 'Regression scenarios and selected permission checks run within authorized environments and the 30-hour monthly service limit.' },
      { title: 'Quarterly program review', body: 'Coverage gaps, repeat findings, exception age, evidence quality, and the next quarter’s priorities are reviewed.' },
    ],
    method: [
      { title: 'Set up the program', body: 'The first month defines assets, workflows, accounts, environments, change inputs, contacts, and reporting.' },
      { title: 'Select each test cycle', body: 'Testing is chosen from product change, risk, prior findings, customer commitments, and planned cadence.' },
      { title: 'Track findings to verification', body: 'New and recurring findings retain owner, due date, exception, fix evidence, and retest state.' },
      { title: 'Adjust coverage', body: 'Low-value checks are retired and material gaps are added through an explicit scope decision.' },
    ],
    deliverables: ['Initial testing baseline and workflow inventory', 'Monthly test and change-review record', 'Remediation and retest tracker', 'Quarterly program review'],
    exclusions: ['Not 24/7 monitoring, managed detection, or emergency response', 'Work beyond 30 specialist hours requires written approval', 'Initial term is three months and includes a separate setup fee'],
    faqs: [
      { question: 'Is this penetration testing as a service?', answer: 'It is recurring, authorized testing of an agreed product boundary and workflow set. It is not an unlimited scanner or continuous attack against production.' },
      { question: 'What is included in setup?', answer: 'Asset and workflow selection, accounts, environments, test data, authorization, change inputs, reporting, and the first baseline.' },
      { question: 'Can the workflows change?', answer: 'Yes, through a scope review that accounts for risk, effort, test data, and the monthly hour limit.' },
    ],
  },
  'incident-response-planning': {
    seoTitle: 'Incident Response Planning and Recovery Testing',
    seoDescription: 'Prepare and exercise incident decision rights, access revocation, evidence preservation, containment, communication, backup restoration, and service recovery.',
    outcome: 'The team can make and record the first critical decisions of an incident, contain the selected scenario, preserve useful evidence, communicate responsibly, and restore named services.',
    questions: ['Who can declare an incident and shut down a risky integration or agent?', 'How are privileged sessions, tokens, API keys, and third-party access revoked?', 'Which evidence must be preserved before systems are changed?', 'Can two critical services be restored to agreed recovery objectives?'],
    coverage: [
      { title: 'Decision rights and contacts', body: 'Incident roles, executive authority, legal and privacy escalation, service owners, suppliers, and communications responsibility are named.' },
      { title: 'Containment procedures', body: 'Identity revocation, token and secret rotation, workload isolation, agent or integration shutdown, and emergency changes are rehearsed.' },
      { title: 'Evidence and communication', body: 'The plan identifies useful logs and records, preservation steps, customer and regulatory decision points, and message approval.' },
      { title: 'Recovery checks', body: 'Backups, dependencies, restoration procedures, recovery targets, validation, and return-to-service decisions are tested for two critical services.' },
    ],
    method: [
      { title: 'Choose a material scenario', body: 'The scenario is based on the company’s services, access model, data, suppliers, and plausible failure paths.' },
      { title: 'Prepare the exercise', body: 'Objectives, participants, injects, expected decisions, safety boundaries, and evidence are agreed.' },
      { title: 'Run and observe', body: 'The exercise records decisions, timing, missing information, blocked actions, and communication dependencies.' },
      { title: 'Repair and retest', body: 'The team updates procedures, access, tooling, ownership, and restoration steps, then verifies the critical changes.' },
    ],
    deliverables: ['Incident response plan for the selected boundary', 'Tabletop scenario and decision record', 'Containment, revocation, and evidence checklist', 'Recovery test results and improvement backlog'],
    exclusions: ['Readiness service only; no staffed emergency hotline or active incident response retainer', 'No destructive production exercise', 'Legal advice and regulatory notification decisions require qualified counsel'],
    faqs: [
      { question: 'Is this an incident response retainer?', answer: 'No. It prepares the team and tests procedures. It does not promise emergency availability during a live incident.' },
      { question: 'Do you test backups?', answer: 'The scope includes restoration checks for two named critical services, with agreed recovery targets and safe test conditions.' },
      { question: 'Can the exercise cover an AI agent?', answer: 'Yes. Agent shutdown, tool revocation, memory or data containment, provider dependencies, and customer impact can be part of the scenario.' },
    ],
  },
  'fractional-security-lead': {
    seoTitle: 'Fractional Security Lead and vCISO Services',
    seoDescription: 'Availability-gated fractional security leadership for program ownership, risk decisions, customer reviews, evidence, testing priorities, and executive reporting.',
    outcome: 'A named senior owner turns scattered security tasks into an accountable program with decisions, owners, evidence, review dates, and customer-facing consistency.',
    questions: ['Which risks and customer commitments require executive decisions?', 'Who owns the security program between audits and assessments?', 'Are product, policy, sales, and contract claims consistent?', 'Which controls and tests deserve funding this quarter?'],
    coverage: [
      { title: 'Program ownership', body: 'The lead maintains priorities, risk decisions, control ownership, review cadence, and the executive backlog within agreed retained hours.' },
      { title: 'Customer assurance', body: 'Security reviews, questionnaires, trust material, evidence requests, exceptions, and contractual claims are coordinated.' },
      { title: 'Engineering and testing priorities', body: 'Architecture, delivery controls, vulnerability work, assessments, remediation, and verification are connected to product risk.' },
      { title: 'Executive reporting', body: 'Leadership receives a concise view of material risks, decisions required, overdue work, evidence health, and the next quarter.' },
    ],
    method: [
      { title: 'Confirm named availability', body: 'The service is offered only when a qualified person is assigned and the expected hours and decision rights are realistic.' },
      { title: 'Establish the mandate', body: 'The executive sponsor, product boundary, decision authority, stakeholders, meeting cadence, and current commitments are documented.' },
      { title: 'Run the program', body: 'Work follows an owned backlog with explicit decisions, evidence, dependencies, and review dates.' },
      { title: 'Report and adjust', body: 'The sponsor reviews material risk, program results, capacity, and the next period before renewal.' },
    ],
    deliverables: ['Quarterly security plan and owned backlog', 'Risk and exception register', 'Customer review and evidence support', 'Executive security report'],
    exclusions: ['Unavailable until a qualified named lead is assigned', 'Retained hours and response expectations are fixed in the agreement', 'Does not replace legal counsel, a formal auditor, or a staffed security operations center'],
    faqs: [
      { question: 'Is the service available now?', answer: 'It is availability-gated. A request begins a fit and capacity review; the site does not promise immediate assignment.' },
      { question: 'Is this the same as a consultant project?', answer: 'No. The distinguishing feature is named, recurring ownership and decision support within defined retained hours.' },
      { question: 'Can the lead answer customer security reviews?', answer: 'Yes, when the answers can be supported by current evidence and fall within the agreed product and company boundary.' },
    ],
  },
};
