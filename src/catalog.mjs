export const services = [
  {
    slug: 'penetration-testing', name: 'Penetration Testing', technical: 'Web, mobile, and API pen test', price: 'From $12,000', timing: 'About 10 business days', featured: true, available: true,
    trigger: 'A customer or auditor asked for a pen test report, or you have never had one.',
    description: 'We attack your web app, mobile app, or API the way a real attacker would, then hand you a report with reproduction steps and fixes.',
    includes: ['One application or API', 'Findings report and engineering walkthrough', 'One retest requested within 30 days'],
    access: 'Agreed test accounts, test environment, signed authorization, and a named test window.',
    limits: 'Internal networks, physical tests, and red-team engagements need a separate scope.'
  },
  {
    slug: 'ai-security-assessment', name: 'AI Security Assessment', technical: 'AI penetration testing and prompt injection testing', price: '$9,500', timing: 'About 10 business days', featured: true, available: true,
    trigger: 'You shipped an AI feature, copilot, or agent that can take actions and nobody has tried to break it.',
    description: 'Find out whether your AI app can leak private information, follow malicious instructions, or take actions it should not.',
    includes: ['One application and two critical workflows', 'Up to five connected tools', 'Report, walkthrough, and one retest'],
    access: 'A test tenant, representative fake data, tool-permission map, signed authorization, and permitted workflows.',
    limits: 'Testing stays inside the agreed workflows. Model output alone does not establish a finding.'
  },
  {
    slug: 'saas-cloud-security', name: 'SaaS and Cloud Security Assessment', technical: 'Cloud, identity, OAuth, and connected-app review', price: '$15,000', timing: 'Scoped to the environment', featured: false, available: true,
    trigger: 'You are not sure what is public, what tokens exist, or which third-party app can read your data.',
    description: 'Check who and what can access your business apps and cloud, including integrations that keep working after sign-out.',
    includes: ['One identity environment', 'One CRM or support environment and up to ten integrations', 'Recommendations and a bounded retest'],
    access: 'Read-only administrative visibility where possible, inventory exports, and agreed cloud accounts.',
    limits: 'A bounded review does not prove every cloud resource or integration is safe.'
  },
  {
    slug: 'supply-chain-security', name: 'Software Supply Chain Security Review', technical: 'Dependencies, secrets, CI/CD, and release controls', price: 'From $15,000', timing: 'Set during scoping', featured: false, available: true,
    trigger: 'You ship software and have never checked the packages, credentials, and release process it depends on.',
    description: 'Check the packages, credentials, and release processes your software depends on.',
    includes: ['Up to five repositories', 'Two build or release pipelines', 'Dependency, secret, and artifact-verification review'],
    access: 'Read access to selected repositories and build configuration, never production secrets.',
    limits: 'Dependency scanning alone does not prove the entire supply chain is safe.'
  },
  {
    slug: 'phishing-resilience', name: 'Phishing and Social Engineering Resilience', technical: 'Consented staff and help-desk testing', price: 'From $8,000', timing: 'Set with HR and security', featured: false, available: false,
    trigger: 'Your help desk can reset access, your team moves money, or fake-executive calls are a concern.',
    description: 'Test whether named staff and help-desk processes can be tricked, then repair the approval steps that failed.',
    includes: ['Named, opted-in participants only', 'Agreed notification policy', 'Process redesign after the exercise'],
    access: 'Written consent from each participant and an approved HR notification plan.',
    limits: 'Never targets customers, the general public, or anyone who did not consent.'
  },
  {
    slug: 'compliance-readiness', name: 'Compliance Readiness', technical: 'SOC 2, ISO 27001, ISO 42001, and HIPAA preparation', price: 'From $15,000', timing: 'Set by framework and scope', featured: true, available: true,
    trigger: 'A deal is stuck on a security review, or an audit is coming.',
    description: 'Find the gaps, prepare missing evidence and draft policies, and answer the security questionnaire with your team.',
    includes: ['Named-framework gap assessment', 'Prioritized remediation list', 'Draft policies, evidence, and questionnaire support'],
    access: 'Existing policies, system inventory, evidence owners, and the exact audit or customer requirement.',
    limits: 'We prepare you for the audit. We do not issue an audit opinion or certificate.'
  },
  {
    slug: 'security-fixes-retesting', name: 'Security Fixes and Retesting', technical: 'Remediation engineering and verification', price: 'From $25,000', timing: 'Four-week project', featured: false, available: true,
    trigger: 'You have findings and need engineers to fix them and verify the changes.',
    description: 'Work with our engineers to fix agreed issues. We test the changes and document what remains open.',
    includes: ['Changes to one assessed application', 'Fix evidence and engineering notes', 'Verification of agreed findings'],
    access: 'An assessment report, source access agreed for the work, and a controlled delivery path.',
    limits: 'Major redesign and unrelated findings require a revised scope.'
  },
  {
    slug: 'ongoing-security-testing', name: 'Ongoing Security Testing', technical: 'Release regression tests and remediation tracking', price: '$7,500/month + $5,000 setup', timing: 'Initial 3-month term', featured: false, available: true,
    trigger: 'You release often and need agreed workflows checked again as the product changes.',
    description: 'Check that new releases and integrations have not brought known security problems back.',
    includes: ['Up to five agreed workflows', 'Monthly regression and permission reviews', 'Up to 30 specialist hours each month'],
    access: 'Versioned test workflows, approved environments, and change summaries.',
    limits: 'Scheduled testing is not 24/7 monitoring or emergency incident response. Overage needs written approval.'
  },
  {
    slug: 'incident-response-planning', name: 'Incident Response Planning and Recovery Testing', technical: 'Tabletop exercise and recovery checks', price: '$12,500', timing: 'Planned exercise', featured: false, available: true,
    trigger: 'Your team needs a tested plan for stopping an incident and restoring critical services.',
    description: 'Make sure your team knows how to stop an incident, preserve useful evidence, and restore critical systems.',
    includes: ['Two critical services', 'One agreed tabletop exercise', 'Access revocation, evidence, and recovery checks'],
    access: 'Current response plan, service owners, and a safe exercise environment.',
    limits: 'This is readiness work, not active incident response or an emergency hotline.'
  },
  {
    slug: 'fractional-security-lead', name: 'Fractional Security Lead (vCISO)', technical: 'Retained security program ownership', price: 'From $6,000/month', timing: 'Availability-gated', featured: false, available: false,
    trigger: 'You need a named senior lead to own the program and handle customer security reviews.',
    description: 'A named senior security lead on retainer owns the agreed program and talks to customer security teams.',
    includes: ['Retained monthly hours', 'Program ownership', 'Customer-facing review support'],
    access: 'Executive sponsor, agreed decision rights, and current security records.',
    limits: 'Unavailable until a qualified named lead is assigned.'
  }
];

export const stages = ['Request received', 'Scoping', 'Awaiting authorization/access', 'Scheduled', 'Testing', 'Report review', 'Report delivered', 'Remediation', 'Retest', 'Closed'];
