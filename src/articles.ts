export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  readTime: string;
  keyword: string;
  featuredImage: string;
  featuredAlt: string;
  inlineImage: string;
  inlineAlt: string;
  inlineCaption: string;
  serviceSlug: string;
  serviceLabel: string;
  body: string;
};

export const articles: Article[] = [
  {
    slug: 'does-soc-2-require-a-penetration-test',
    category: 'Compliance and testing',
    title: 'Does SOC 2 Require a Penetration Test? What to Ask Your Auditor',
    description: 'SOC 2 does not impose one universal penetration-test requirement. Learn when a test becomes necessary, what scope to buy, and what evidence your auditor or customer may expect.',
    published: '2026-11-04',
    updated: '2026-11-04',
    readTime: '11 min read',
    keyword: 'does SOC 2 require a penetration test',
    featuredImage: '/articles/soc-2-penetration-test-featured.png',
    featuredAlt: 'Sthuthi guide explaining the path from an auditor request to a scoped penetration test and a report with retesting.',
    inlineImage: '/articles/pentest-evidence-chain.png',
    inlineAlt: 'Sthuthi guide showing scope, authorization, testing, reporting, and retesting as one evidence chain.',
    inlineCaption: 'A useful SOC 2 testing record connects the requirement to the scope, evidence, remediation, and retest.',
    serviceSlug: 'penetration-testing',
    serviceLabel: 'Discuss a SOC 2 penetration-test scope',
    body: `
      <p class="article-answer"><strong>No, SOC 2 does not contain one universal rule that every organization must complete a penetration test.</strong> A test can still become necessary because of your selected controls, risk assessment, system description, auditor's evidence request, or an enterprise customer's contract. Confirm the requirement before buying a test.</p>

      <p>The distinction matters. A company can spend money on the wrong scope and still fail to answer the question its auditor or customer asked. A public vulnerability scan, an unauthenticated web test, and a gray-box application penetration test produce different evidence. The name on the invoice does not make them interchangeable.</p>

      <h2>SOC 2 examines controls, not a fixed shopping list</h2>

      <p>A SOC 2 examination evaluates controls relevant to security, availability, processing integrity, confidentiality, or privacy. The <a href="https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services" target="_blank" rel="noreferrer">AICPA's SOC resource library</a> publishes the governing guides, Trust Services Criteria, description criteria, and illustrative reports. Those materials do not reduce the examination to a universal list that says every service organization must purchase the same penetration test.</p>

      <p>Your organization describes its system and the controls it says are operating. The auditor then tests whether that description is fair and whether the controls meet the applicable criteria. If your risk assessment, control language, customer promise, or auditor request says independent penetration testing occurs, you need evidence that matches that statement.</p>

      <div class="article-callout"><strong>Ask for the exact requirement.</strong><span>“We need a SOC 2 pentest” is not a scope. Ask which system, control, period, testing method, report contents, and retest evidence the auditor or customer expects.</span></div>

      <h2>When a penetration test becomes part of the evidence</h2>

      <p>A penetration test commonly enters a SOC 2 project through one of five paths:</p>

      <ol>
        <li><strong>Your control says you perform one.</strong> If management has committed to annual independent penetration testing, the auditor will expect dated evidence that the control operated.</li>
        <li><strong>Your risk assessment calls for it.</strong> An internet-facing application holding customer data may warrant deeper testing than a scanner can provide.</li>
        <li><strong>The auditor asks how a technical control was validated.</strong> The test may support evidence for access control, change management, vulnerability management, or risk mitigation.</li>
        <li><strong>A customer contract requires it.</strong> Enterprise procurement often asks for an independent report even when the examination itself does not prescribe one.</li>
        <li><strong>Your insurer or regulator expects it.</strong> That is a separate requirement and should be scoped separately, even if the resulting report also supports the SOC 2 evidence package.</li>
      </ol>

      <p>The <a href="https://csrc.nist.gov/pubs/sp/800/115/final" target="_blank" rel="noreferrer">NIST SP 800-115 testing guide</a> distinguishes security testing techniques and stresses planning, execution, analysis, and mitigation. That is a useful model for discussing the test with your auditor: define the objective first, then choose the technique.</p>

      <h2>Seven questions to ask your auditor before requesting quotes</h2>

      <h3>1. Which systems must be in scope?</h3>
      <p>Ask whether the evidence must cover the customer-facing web application, first-party API, mobile application, external infrastructure, cloud environment, or a specific combination. Match the answer to the system description. A report for a marketing site will not establish how an authenticated SaaS product protects tenant data.</p>

      <h3>2. Does the test need authenticated access?</h3>
      <p>For a login-gated product, authenticated testing is usually where authorization and business-logic failures appear. Provide separate accounts for important roles and, where relevant, two test tenants. The <a href="https://owasp.org/projects/web-security-testing-guide" target="_blank" rel="noreferrer">OWASP Web Security Testing Guide</a> covers identity, authentication, authorization, sessions, business logic, client-side behavior, and APIs. A scope that ignores roles may miss the controls buyers care about most.</p>

      <h3>3. Is a vulnerability scan enough?</h3>
      <p>Usually not when the request says “penetration test.” Scanners can identify known patterns and exposed software. They do not reliably reason through tenant boundaries, role combinations, approval flows, or application-specific abuse. Ask whether the evidence needs manual testing and whether the vendor must document the manual hours and methodology.</p>

      <h3>4. Which period must the report cover?</h3>
      <p>Confirm when testing must occur relative to the examination period. A technically good report with the wrong date may not support the control sample the auditor selected. Also ask whether the auditor wants the original report, a management response, a remediation tracker, or the retest version.</p>

      <h3>5. What must the report contain?</h3>
      <p>Request a redacted sample before selecting a vendor. Look for scope and exclusions, target versions, testing dates, methodology, affected workflow, evidence, reproduction steps, impact, severity rationale, recommended fix, and retest history. See our <a href="/blog/what-a-penetration-test-report-should-contain">penetration-test report guide</a> and <a href="/sample-report">illustrative sample report</a>.</p>

      <h3>6. Is remediation retesting required?</h3>
      <p>A finding marked “fixed” by the development team is not the same as a verified retest. Confirm whether the auditor or customer expects independent verification and whether the original vendor must perform it. Sthuthi's <a href="/services/security-fixes-retesting">security fixes and retesting service</a> keeps remediation state separate from verification evidence.</p>

      <h3>7. Are there vendor qualifications or independence rules?</h3>
      <p>Some customers specify insurance, tester certifications, geographic restrictions, data-handling terms, or independence requirements. Collect those before requesting proposals. Do not assume the auditor endorses a vendor merely because a report is formatted for compliance.</p>

      <figure class="article-inline-visual"><img src="/articles/pentest-evidence-chain.png" alt="Sthuthi guide showing the penetration-test evidence chain from scope through retest." loading="lazy" /><figcaption>Scope and report quality matter more than putting “SOC 2” in the project name.</figcaption></figure>

      <h2>What a defensible SOC 2 penetration-test scope looks like</h2>

      <p>For a typical authenticated SaaS product, a defensible starting scope identifies one application, its first-party API, the roles that can perform sensitive operations, two representative tenants, the test environment, the test window, and prohibited actions. It also states whether mobile clients, cloud infrastructure, third-party integrations, social engineering, denial-of-service testing, and source review are excluded.</p>

      <p>Cloud-provider rules still apply. For example, review the <a href="https://aws.amazon.com/security/penetration-testing/" target="_blank" rel="noreferrer">AWS penetration-testing policy</a> before testing hosted services. Written authorization should name the target and allowed activity. “Our application runs on AWS” is not permission to test every related AWS service or third-party system.</p>

      <h2>How to compare SOC 2 penetration-test proposals</h2>

      <table>
        <thead><tr><th>Proposal detail</th><th>What to look for</th></tr></thead>
        <tbody>
          <tr><td>Target</td><td>Named application, API, domains, environment, roles, and tenants</td></tr>
          <tr><td>Method</td><td>Manual testing supported by tools, mapped to an established testing guide</td></tr>
          <tr><td>Depth</td><td>Authorization, sessions, business logic, workflow abuse, and API behavior</td></tr>
          <tr><td>Deliverables</td><td>Executive summary, technical evidence, reproduction, fixes, limits, and report version</td></tr>
          <tr><td>Retest</td><td>Clear window, included findings, evidence standard, and updated report</td></tr>
          <tr><td>Safety</td><td>Written authorization, test window, contacts, rate limits, and stop conditions</td></tr>
        </tbody>
      </table>

      <p>A cheap proposal may be adequate for a small, low-complexity application. An expensive proposal is not automatically deeper. Compare test hours, authenticated roles, assets, exclusions, reporting, and retesting. The useful question is whether the scope tests the controls and risks your evidence must address.</p>

      <h2>Frequently asked questions</h2>

      <h3>Is a penetration test mandatory for SOC 2 Type 1?</h3>
      <p>Not as one universal requirement. A Type 1 report addresses the design of controls at a point in time. Your controls, risks, customer commitments, and auditor requests determine whether a penetration test belongs in the evidence.</p>

      <h3>Is a penetration test mandatory for SOC 2 Type 2?</h3>
      <p>Again, not universally. Type 2 examines operating effectiveness over a period. If your control says a penetration test occurs during that period, the auditor will expect evidence that it operated as described.</p>

      <h3>Can a vulnerability scan replace a penetration test?</h3>
      <p>Only if the requirement actually calls for vulnerability scanning. A scan and a penetration test answer different questions. Confirm the requested technique and deliverable with the auditor or customer.</p>

      <h3>Should the test happen in production?</h3>
      <p>Use a representative test environment when possible. If production testing is necessary, define allowed actions, data restrictions, request limits, monitoring, contacts, and stop conditions in writing.</p>

      <h3>Does the penetration-testing company issue the SOC 2 report?</h3>
      <p>No. A qualified CPA firm performs the SOC examination and issues the SOC report. A penetration-testing company supplies technical assessment evidence.</p>
    `,
  },
  {
    slug: 'how-to-scope-web-application-penetration-test',
    category: 'Penetration testing',
    title: 'How to Scope a Web Application Penetration Test',
    description: 'A practical web application penetration-test scoping guide covering assets, roles, tenants, APIs, environments, authorization, exclusions, deliverables, and retesting.',
    published: '2026-11-04',
    updated: '2026-11-04',
    readTime: '13 min read',
    keyword: 'web application penetration test scope',
    featuredImage: '/articles/web-app-pentest-scope-featured.png',
    featuredAlt: 'Sthuthi guide explaining that a web application penetration test must name the app and API, roles and tenants, and testing rules and window.',
    inlineImage: '/articles/pentest-evidence-chain.png',
    inlineAlt: 'Sthuthi guide showing the stages from scope and written authorization to testing, reporting, and retesting.',
    inlineCaption: 'A scope is complete when the tester can identify what is allowed, what is excluded, and what evidence must be delivered.',
    serviceSlug: 'penetration-testing',
    serviceLabel: 'Request a web application penetration-test scope',
    body: `
      <p class="article-answer"><strong>A useful web application penetration-test scope names the application, backing APIs, environments, authenticated roles, tenant boundaries, sensitive workflows, allowed testing actions, exclusions, dates, deliverables, and retest terms.</strong> If one of those is missing, quotes will not be comparable and coverage will be ambiguous.</p>

      <p>Good scoping is not administrative overhead. It controls safety, cost, testing depth, and the meaning of the final report. “Test our web app” can describe a three-day unauthenticated review or weeks of authenticated business-logic work. The tester needs enough detail to estimate effort without collecting secrets or customer records during sales.</p>

      <h2>Start with the decision the report must support</h2>

      <p>Write one sentence that explains why the assessment exists. Examples:</p>

      <ul>
        <li>An enterprise customer requires an independent application test before contract signature.</li>
        <li>An auditor asked for evidence that authenticated access controls were tested.</li>
        <li>The product now supports refunds and administrators want the approval flow tested.</li>
        <li>A new multi-tenant architecture needs an independent check before migration.</li>
      </ul>

      <p>The decision determines the evidence. A launch review may prioritize high-risk workflows and release blockers. A customer-requested report may need an executive summary and defined remediation status. A regulated scope may need particular systems, tester qualifications, or dates.</p>

      <h2>1. Name the application boundary</h2>

      <p>List the exact hosts, application names, and environment. Include alternate domains used for authentication, file delivery, administration, or regional deployments. State which systems are owned by your organization and which are operated by third parties.</p>

      <p>The <a href="https://owasp.org/projects/web-security-testing-guide" target="_blank" rel="noreferrer">OWASP Web Security Testing Guide</a> covers configuration, identity, authentication, authorization, sessions, input validation, error handling, cryptography, business logic, client-side behavior, and APIs. That breadth is useful, but the guide is not a substitute for naming your specific product boundary.</p>

      <div class="article-callout"><strong>Do not use a wildcard as the scope.</strong><span>“Everything under example.com” can include marketing systems, vendors, abandoned hosts, and services the client is not authorized to test.</span></div>

      <h2>2. Decide whether the backing API is included</h2>

      <p>A web application test normally exercises the endpoints used by the browser. That does not automatically cover every API endpoint, mobile route, partner API, service credential, GraphQL operation, or deprecated version. If the API is a product in its own right, give it a separate inventory and role matrix.</p>

      <p>Read <a href="/blog/api-pentest-vs-web-application-pentest">API pentest versus web application pentest</a> before combining the scopes. The <a href="https://api-security.owasp.org/" target="_blank" rel="noreferrer">OWASP API Security Top 10</a> highlights broken object and function authorization, unrestricted resource consumption, sensitive business flows, inventory problems, and unsafe third-party API use. Those risks often require endpoint and role coverage beyond the browser's normal path.</p>

      <h2>3. Map roles, accounts, and tenants</h2>

      <p>Provide a role matrix showing what each account should be allowed to view and do. Common roles include unauthenticated user, customer member, customer administrator, support agent, finance operator, partner, and internal administrator. Add two test tenants when customer isolation matters.</p>

      <table>
        <thead><tr><th>Role</th><th>Expected access</th><th>High-risk actions</th></tr></thead>
        <tbody>
          <tr><td>Customer member</td><td>Own tenant records</td><td>Export, file access, API tokens</td></tr>
          <tr><td>Customer admin</td><td>Own tenant users and settings</td><td>Invite, role change, integration setup</td></tr>
          <tr><td>Support agent</td><td>Assigned customer cases</td><td>Impersonation, resets, private records</td></tr>
          <tr><td>Finance operator</td><td>Approved billing workflows</td><td>Refunds, payout details, credits</td></tr>
        </tbody>
      </table>

      <p>Do not send passwords in the scoping form or ordinary email. Record the account types first, then arrange a controlled credential handoff after the scope and authorization are agreed. Sthuthi's <a href="/security">security and data-handling page</a> explains this boundary.</p>

      <h2>4. Identify the workflows where failure has material impact</h2>

      <p>Page count is a weak estimate of application complexity. A six-page product may contain payments, file imports, account recovery, administrative impersonation, and cross-tenant search. A hundred-page documentation portal may have little authenticated logic.</p>

      <p>List the workflows that can expose data, change authority, move money, execute code, publish content, or connect another system. For each workflow, state the expected rule. A tester can then check whether the server enforces it rather than merely recording that the interface hides a button.</p>

      <h2>5. Choose the access model</h2>

      <h3>Black-box testing</h3>
      <p>The tester begins with public information and no authenticated context. This can model an outside attacker, but it may spend time rediscovering facts the team already knows and may provide shallow coverage of authenticated controls.</p>

      <h3>Gray-box testing</h3>
      <p>The tester receives representative accounts, architecture context, and agreed test data. For most authenticated SaaS products, this produces better coverage per testing hour because the assessor can compare roles and tenants directly.</p>

      <h3>Source-assisted testing</h3>
      <p>The tester can inspect selected source, configuration, or API definitions to target complex controls. This can be valuable for authorization middleware, cryptographic use, or unusual workflows. It should not be described as a complete secure-code review unless the scope and effort support that claim.</p>

      <p><a href="https://csrc.nist.gov/pubs/sp/800/115/final" target="_blank" rel="noreferrer">NIST SP 800-115</a> describes several testing and examination techniques and their limitations. Choose the access model based on the objective, not on which label sounds more adversarial.</p>

      <figure class="article-inline-visual"><img src="/articles/pentest-evidence-chain.png" alt="Sthuthi guide explaining the stages of a controlled penetration test." loading="lazy" /><figcaption>A written scope should connect the target and test rules to the evidence and retest.</figcaption></figure>

      <h2>6. Define the environment and test data</h2>

      <p>A test environment should represent production controls closely enough for the result to matter. Confirm authentication, authorization, feature flags, integrations, and data shape. Use representative fake data where possible. If production testing is necessary, identify sensitive operations that require notice or approval.</p>

      <p>State whether emails, webhooks, SMS messages, payments, refunds, deletion, file processing, third-party API calls, and background jobs are safe to trigger. Provide sandbox credentials for payment or messaging providers when those workflows are in scope.</p>

      <h2>7. Write allowed actions, exclusions, and stop conditions</h2>

      <p>Written authorization should name the target, owner, test window, source addresses where relevant, allowed techniques, request limits, contacts, and stop conditions. Explicitly address denial-of-service testing, social engineering, persistence, destructive actions, data export, cloud metadata access, and third-party systems.</p>

      <p>Cloud rules may add constraints. Review the provider's policy, such as the <a href="https://aws.amazon.com/security/penetration-testing/" target="_blank" rel="noreferrer">AWS penetration-testing policy</a>, before fieldwork. Client authorization does not grant permission to attack a vendor's independent service.</p>

      <h2>8. Define deliverables before testing starts</h2>

      <p>A strong report should include:</p>

      <ul>
        <li>scope, dates, targets, versions, roles, and exclusions;</li>
        <li>methodology and completed coverage;</li>
        <li>executive summary written for the decision maker;</li>
        <li>finding title, affected workflow, evidence, reproduction, and impact;</li>
        <li>severity rationale and recommended change;</li>
        <li>limitations and remaining untested areas;</li>
        <li>report version and reviewer;</li>
        <li>retest result tied to new evidence.</li>
      </ul>

      <p>Ask for a redacted sample. Our <a href="/sample-report">sample report</a> shows the minimum chain from observation to fix and retest. The <a href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noreferrer">OWASP Application Security Verification Standard</a> can help teams describe security requirements, while the WSTG provides testing techniques. Neither should be pasted into a report as proof that every check was completed.</p>

      <h2>9. Agree on retesting</h2>

      <p>Define how long the included retest remains available, which findings it covers, whether design changes create a new scope, and what evidence marks a finding verified. Retesting should repeat the relevant scenario against the corrected version and record the observed result. “Developer says fixed” is a remediation status, not verification.</p>

      <h2>Scoping checklist</h2>

      <ul class="article-checklist">
        <li>Business reason and deadline</li>
        <li>Named application, domains, and environment</li>
        <li>Included API endpoints or inventory</li>
        <li>Roles, test accounts, and tenant pairs</li>
        <li>Critical workflows and expected rules</li>
        <li>Third-party services and ownership</li>
        <li>Allowed actions and explicit exclusions</li>
        <li>Request limits, contacts, and stop conditions</li>
        <li>Report recipients and required format</li>
        <li>Retest window and acceptance evidence</li>
      </ul>

      <h2>Frequently asked questions</h2>

      <h3>How long does a web application penetration test take?</h3>
      <p>It depends on roles, workflows, APIs, integrations, and reporting needs. Sthuthi's standard launch scope is roughly ten business days after access and authorization are ready, but the written scope controls the estimate.</p>

      <h3>How many test accounts should we provide?</h3>
      <p>Provide at least one account for each material role and two representative tenants when isolation matters. More accounts may be needed for invitation, approval, support, or payment workflows.</p>

      <h3>Should the API be a separate test?</h3>
      <p>Use a separate API scope when it has endpoints, clients, credentials, roles, or business flows that the web application does not exercise.</p>

      <h3>Can the tester use production customer data?</h3>
      <p>Avoid it. Use representative fake data where possible. If production evidence is unavoidable, define collection, redaction, access, retention, and deletion before testing.</p>
    `,
  },
  {
    slug: 'api-pentest-vs-web-application-pentest',
    category: 'Penetration testing',
    title: 'API Pentest vs Web Application Pentest: What Each Scope Covers',
    description: 'Compare API penetration testing with web application penetration testing, including authorization, roles, endpoints, business logic, reporting, and when to combine them.',
    published: '2026-11-04',
    updated: '2026-11-04',
    readTime: '12 min read',
    keyword: 'API pentest vs web application pentest',
    featuredImage: '/articles/api-vs-web-pentest-featured.png',
    featuredAlt: 'Sthuthi guide comparing web application user flows, API authorization rules, and a combined penetration-test scope.',
    inlineImage: '/articles/web-api-boundary.png',
    inlineAlt: 'Sthuthi guide showing a browser request crossing an API role check before reaching tenant data.',
    inlineCaption: 'The browser shows a workflow. The API decides whether the request is permitted.',
    serviceSlug: 'penetration-testing',
    serviceLabel: 'Discuss a web and API testing scope',
    body: `
      <p class="article-answer"><strong>A web application penetration test follows user-facing workflows through the browser and the application behind them. An API penetration test works from the API inventory, credentials, roles, objects, and business operations directly.</strong> They overlap, but a web test does not automatically cover every API endpoint or client.</p>

      <p>The correct scope depends on how the product is built and sold. If one browser application is the only API client, a combined test may be efficient. If mobile apps, partners, service accounts, and customer integrations use the same API, the API needs its own coverage plan.</p>

      <h2>The practical difference</h2>

      <table>
        <thead><tr><th>Area</th><th>Web application pentest</th><th>API pentest</th></tr></thead>
        <tbody>
          <tr><td>Starting point</td><td>User journeys and browser behavior</td><td>Endpoint inventory and API operations</td></tr>
          <tr><td>Identity</td><td>Login, sessions, recovery, browser tokens</td><td>API keys, OAuth, service credentials, bearer tokens</td></tr>
          <tr><td>Authorization</td><td>Roles and actions visible through the app</td><td>Object and function rules across every included operation</td></tr>
          <tr><td>Business logic</td><td>Multi-step UI workflows</td><td>Direct calls, sequence changes, automation, bulk operations</td></tr>
          <tr><td>Input surface</td><td>Forms, files, URLs, client-rendered content</td><td>Parameters, bodies, headers, schemas, GraphQL operations</td></tr>
          <tr><td>Coverage risk</td><td>May miss unused or partner endpoints</td><td>May miss browser-only behavior and client-side failures</td></tr>
        </tbody>
      </table>

      <h2>What a web application penetration test covers</h2>

      <p>A web application test examines the system as a user and attacker encounter it through the browser. The assessor reviews public entry points, authentication, sessions, account recovery, role changes, tenant boundaries, file handling, input processing, client-side behavior, and application-specific workflows.</p>

      <p>The <a href="https://owasp.org/projects/web-security-testing-guide" target="_blank" rel="noreferrer">OWASP Web Security Testing Guide</a> organizes these areas into practical testing domains. Its business-logic section matters because high-impact failures often follow valid requests in the wrong order, with the wrong identity, or against another customer's object.</p>

      <p>During a web test, the assessor will also see API requests made by the browser. Those requests should be tested. The limit is inventory: the browser reveals the endpoints used by the tested workflows, not necessarily every endpoint the API exposes.</p>

      <h2>What an API penetration test covers</h2>

      <p>An API test begins with a defined inventory: hosts, versions, protocols, operations, schemas, authentication methods, roles, object types, and sensitive business flows. The tester sends requests directly rather than relying on the interface to generate them.</p>

      <p>The <a href="https://api-security.owasp.org/" target="_blank" rel="noreferrer">OWASP API Security Top 10</a> puts broken object-level authorization first. The question is simple: if Account A changes an identifier to one owned by Account B, does the server reject it? The same discipline applies to function-level authorization: can a lower-privilege identity call an administrative operation directly?</p>

      <p>An API scope may also cover:</p>

      <ul>
        <li>REST, GraphQL, gRPC, SOAP, or event-driven interfaces where supported;</li>
        <li>API keys, OAuth clients, machine identities, and service-to-service credentials;</li>
        <li>mass assignment and object-property authorization;</li>
        <li>rate limits, resource consumption, and cost-amplifying requests;</li>
        <li>bulk operations, exports, imports, and automation;</li>
        <li>versioning, deprecated endpoints, and undocumented operations;</li>
        <li>unsafe trust in third-party API responses.</li>
      </ul>

      <figure class="article-inline-visual"><img src="/articles/web-api-boundary.png" alt="A browser request passing through an API authorization check before reaching tenant data." loading="lazy" /><figcaption>The interface can hide an action. Only the server can deny it.</figcaption></figure>

      <h2>The largest overlap is authorization</h2>

      <p>Both scopes should test authentication and authorization, but they approach coverage differently. The web test asks whether a user can misuse the product's workflows. The API test asks whether each included operation enforces the identity, role, tenant, object, and state rules the product depends on.</p>

      <p>Suppose a support application lets an agent search orders. The web test may manipulate the order reference inside the normal search flow. The API test should also enumerate related endpoints: order detail, export, refund, note history, attachments, and bulk search. A secure browser route does not compensate for an unprotected export endpoint.</p>

      <h2>When a web test is enough</h2>

      <p>A web application scope may be enough when:</p>

      <ul>
        <li>the browser application is the only meaningful API client;</li>
        <li>the included workflows exercise the sensitive endpoints;</li>
        <li>there are few roles and no separate machine identities;</li>
        <li>the report need concerns the product rather than the complete API platform;</li>
        <li>the scope clearly states which API behavior was and was not tested.</li>
      </ul>

      <p>Do not describe this as a complete API penetration test. State that the backing endpoints used by the included web workflows were assessed.</p>

      <h2>When the API needs its own scope</h2>

      <p>Create a separate or combined API scope when:</p>

      <ul>
        <li>customers or partners integrate directly;</li>
        <li>mobile, desktop, or IoT clients use endpoints the browser does not;</li>
        <li>service accounts or OAuth clients have distinct permissions;</li>
        <li>GraphQL exposes a broad schema;</li>
        <li>deprecated versions remain reachable;</li>
        <li>bulk operations or sensitive business flows can be called directly;</li>
        <li>the auditor or customer explicitly asked for API testing.</li>
      </ul>

      <h2>How to scope a combined assessment</h2>

      <p>Use one written system map. List the browser workflows, API operations, roles, tenants, and credentials. Mark which endpoints each client uses. Identify the expected authorization rule for sensitive objects and functions. Then allocate testing time to both workflow abuse and endpoint coverage.</p>

      <p>Our <a href="/blog/how-to-scope-web-application-penetration-test">web application penetration-test scoping guide</a> provides the complete checklist. The <a href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noreferrer">OWASP ASVS</a> can help define application security requirements, while the API Top 10 highlights recurring API risks. Neither replaces a product-specific threat model and role matrix.</p>

      <h2>What the report should say</h2>

      <p>The report must separate completed web and API coverage. It should list the application, hosts, API versions, operations or collections, roles, tenants, and excluded clients. Findings should name the affected workflow and endpoint, show the sanitized request and response, explain the expected rule, and record the server's observed decision.</p>

      <p>Read <a href="/blog/what-a-penetration-test-report-should-contain">what a useful penetration-test report contains</a> before reviewing proposals. A list of generic vulnerability names is not enough to prove which product rules were tested.</p>

      <h2>Frequently asked questions</h2>

      <h3>Does a web application penetration test include APIs?</h3>
      <p>It normally tests API calls used by the included browser workflows. It does not automatically cover every endpoint, API version, client, or service credential.</p>

      <h3>Is API testing only automated?</h3>
      <p>No. Tools help enumerate and replay requests, but authorization, workflow, and business-impact testing require human reasoning and product context.</p>

      <h3>Do we need to provide an OpenAPI specification?</h3>
      <p>It helps establish inventory, but it may be incomplete. Provide the specification, collections, GraphQL schema, authentication details, role matrix, and known undocumented or deprecated routes.</p>

      <h3>Should mobile APIs be included in a web test?</h3>
      <p>Only when the written scope includes them. A mobile client may use different endpoints, tokens, device assumptions, or versions and often deserves explicit coverage.</p>
    `,
  },
  {
    slug: 'ai-security-assessment-vs-web-application-pentest',
    category: 'AI application security',
    title: 'AI Security Assessment vs Web Application Pentest',
    description: 'Understand where a web application penetration test stops and an AI security assessment begins across models, RAG, prompts, data boundaries, tools, approvals, and actions.',
    published: '2026-11-04',
    updated: '2026-11-04',
    readTime: '13 min read',
    keyword: 'AI security assessment vs penetration test',
    featuredImage: '/articles/ai-security-vs-web-pentest-featured.png',
    featuredAlt: 'Sthuthi guide showing that AI products require application and API testing, model and RAG testing, and tool and action testing.',
    inlineImage: '/articles/ai-action-chain.png',
    inlineAlt: 'Sthuthi guide explaining the path from user input and retrieved content through a tool call to a business action.',
    inlineCaption: 'AI application risk crosses the model boundary: input, retrieved context, tool permissions, and the final action all matter.',
    serviceSlug: 'ai-security-assessment',
    serviceLabel: 'Discuss an AI application assessment',
    body: `
      <p class="article-answer"><strong>A web application penetration test checks the code, APIs, identity, sessions, authorization, and business logic around an AI feature. An AI security assessment also tests model behavior, retrieved content, prompt injection, tenant separation, tool permissions, approval gates, memory, and consequential actions.</strong> AI products usually need both surfaces assessed.</p>

      <p>The model is one component inside a larger system. A secure API can still return the wrong customer's document if retrieval filters fail. A resistant model can still call an over-permissioned refund tool. A successful jailbreak can be harmless if the system has no protected rule or connected action. Scope the complete workflow.</p>

      <h2>What the traditional web application test still needs to cover</h2>

      <p>Adding an LLM does not remove ordinary application risk. The assessment should still examine:</p>

      <ul>
        <li>authentication, session handling, and account recovery;</li>
        <li>server-side authorization and tenant boundaries;</li>
        <li>API object and function permissions;</li>
        <li>file uploads, parsing, rendering, and storage;</li>
        <li>input validation and output encoding;</li>
        <li>secrets, tokens, logs, and error handling;</li>
        <li>business workflows and administrative actions;</li>
        <li>cloud and third-party integration boundaries.</li>
      </ul>

      <p>The <a href="https://owasp.org/projects/web-security-testing-guide" target="_blank" rel="noreferrer">OWASP Web Security Testing Guide</a> remains relevant. Its application and API techniques address the software that collects prompts, retrieves data, calls the model, and executes the result.</p>

      <h2>What the AI assessment adds</h2>

      <h3>Direct and indirect prompt injection</h3>
      <p>Direct injection comes from the user. Indirect injection comes from content the system retrieves or processes: documents, tickets, webpages, emails, tool output, or database records. The <a href="https://genai.owasp.org/glossary/prompt-injection/" target="_blank" rel="noreferrer">OWASP GenAI Security Project's prompt-injection guidance</a> explains why instructions and data enter the same model context.</p>

      <h3>Retrieval and tenant separation</h3>
      <p>A RAG system may enforce access at ingestion, indexing, retrieval, or response time. The test should identify which layer makes the final authorization decision and whether another tenant's content can enter the context. Vector similarity is not an access-control rule.</p>

      <h3>System instructions and sensitive context</h3>
      <p>System-prompt exposure is material when the prompt contains secrets, private rules, or information that enables a more serious attack. Do not store credentials in prompts. Treat model context as observable to an adversarial user unless stronger controls establish otherwise.</p>

      <h3>Tool permissions and approval gates</h3>
      <p>List every tool the AI can call, the identity used, available operations, accepted arguments, affected systems, and actions requiring human approval. Then test whether malicious user or retrieved instructions can redirect the tool. See <a href="/blog/test-ai-agent-tool-permissions">how to test AI agent tool permissions</a>.</p>

      <h3>Memory and cross-session behavior</h3>
      <p>Check whether personal, tenant, or task context survives longer than intended and whether one user's data influences another user's session. Memory stores need the same explicit ownership and retention rules as other application data.</p>

      <h3>Model and provider boundaries</h3>
      <p>Record the model, version, system configuration, moderation, provider settings, data-use terms, and regional processing that affect the test. The <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">NIST AI Risk Management Framework</a> treats AI risk across design, development, deployment, use, and evaluation rather than as one prompt-level check.</p>

      <figure class="article-inline-visual"><img src="/articles/ai-action-chain.png" alt="The AI action chain from input and retrieved context to tool call and business impact." loading="lazy" /><figcaption>The security decision can fail before the model, inside the context, at the tool boundary, or in the downstream action.</figcaption></figure>

      <h2>Use a broken rule, not a strange response, to define findings</h2>

      <p>An AI test produces many surprising outputs. A confirmed security finding needs more:</p>

      <ol>
        <li><strong>Expected rule:</strong> what the system should prevent.</li>
        <li><strong>Tested configuration:</strong> application, model, prompts, tools, permissions, and data state.</li>
        <li><strong>Observed outcome:</strong> the sanitized trace and downstream action.</li>
        <li><strong>Material impact:</strong> data exposure, unauthorized action, privilege change, fraud, code execution, or another real consequence.</li>
        <li><strong>Reproducibility and limits:</strong> how often it worked and where the result does not generalize.</li>
      </ol>

      <p>Read <a href="/blog/ai-jailbreak-vs-security-finding">why a jailbreak is not automatically a security finding</a> for the complete decision model.</p>

      <h2>AI feature add-on or standalone assessment?</h2>

      <h3>Use an AI feature add-on when</h3>
      <ul>
        <li>AI provides chat, summary, classification, or recommendations inside an existing product;</li>
        <li>the model has limited or no tool access;</li>
        <li>the application remains the primary security boundary;</li>
        <li>a few AI-specific scenarios can be added to a normal app test.</li>
      </ul>

      <h3>Use a standalone AI assessment when</h3>
      <ul>
        <li>AI is central to the product's function;</li>
        <li>RAG, vector stores, memory, or data ingestion carry sensitive information;</li>
        <li>the system plans or calls tools;</li>
        <li>multiple agents pass work or authority between them;</li>
        <li>model output changes records, sends messages, moves money, or controls infrastructure;</li>
        <li>the assessment needs versioned adversarial scenarios and AI-specific evidence.</li>
      </ul>

      <p>The <a href="https://owasp.org/projects/top-10-for-large-language-model-applications" target="_blank" rel="noreferrer">OWASP Top 10 for LLM Applications</a> covers prompt injection, sensitive information disclosure, improper output handling, excessive agency, system-prompt leakage, vector and embedding weaknesses, and other AI application risks. Use it as a risk reference, not as proof that ten generic prompts tested your product.</p>

      <h2>How to scope the combined assessment</h2>

      <p>Map one or two critical workflows from user intent to final action. Identify every component crossed: interface, API, orchestration layer, model, retrieval source, memory store, tool, approval service, and downstream system. For each boundary, write the identity and expected rule.</p>

      <table>
        <thead><tr><th>Boundary</th><th>Question</th><th>Evidence</th></tr></thead>
        <tbody>
          <tr><td>User to application</td><td>Who is signed in and which tenant?</td><td>Session and account trace</td></tr>
          <tr><td>Application to retrieval</td><td>Which records may enter context?</td><td>Query filters and returned record IDs</td></tr>
          <tr><td>Context to model</td><td>Can untrusted content become instruction?</td><td>Sanitized prompt and retrieved content</td></tr>
          <tr><td>Model to tool</td><td>Which operations and arguments are allowed?</td><td>Tool call and permission decision</td></tr>
          <tr><td>Tool to action</td><td>Was approval required and recorded?</td><td>Approval and action log</td></tr>
        </tbody>
      </table>

      <p>Sthuthi's published <a href="/services/ai-security-assessment">AI Security Assessment</a> covers one application, two critical workflows, and up to five connected tools. Larger multi-agent, model-pipeline, or infrastructure work needs a separate scope.</p>

      <h2>Frequently asked questions</h2>

      <h3>Can a normal penetration test find prompt injection?</h3>
      <p>It may find obvious cases, but an AI assessment adds indirect content, retrieval, tool, memory, model, and action scenarios that a standard application scope may not include.</p>

      <h3>Does an AI assessment replace a web application pentest?</h3>
      <p>No. The AI workflow still depends on application, API, identity, cloud, and data controls. Combine the scopes or state their boundaries clearly.</p>

      <h3>Is model safety the same as application security?</h3>
      <p>No. Model safety may address harmful or disallowed content. Application security focuses on protected data, authority, integrity, availability, and actions in the deployed system. They can overlap but require different rules and evidence.</p>

      <h3>Should we test the production model?</h3>
      <p>Test a representative configuration with fake data where possible. If production is required, agree on data boundaries, tool restrictions, cost limits, monitoring, and stop conditions first.</p>
    `,
  },
  {
    slug: 'security-questionnaire-evidence-checklist',
    category: 'Enterprise security reviews',
    title: 'Security Questionnaire Evidence Checklist for SaaS Teams',
    description: 'Prepare evidence-backed answers for customer and vendor security questionnaires without guessing. Includes an ownership model, evidence categories, and review checklist.',
    published: '2026-11-04',
    updated: '2026-11-04',
    readTime: '14 min read',
    keyword: 'security questionnaire evidence checklist',
    featuredImage: '/articles/security-questionnaire-evidence-featured.png',
    featuredAlt: 'Sthuthi guide showing a security questionnaire answer supported by proof and a named owner.',
    inlineImage: '/articles/questionnaire-proof-chain.png',
    inlineAlt: 'Sthuthi guide explaining that each security claim needs approved wording, evidence, an owner, and a review date.',
    inlineCaption: 'Treat every answer as a claim that must remain true after the deal closes.',
    serviceSlug: 'compliance-readiness',
    serviceLabel: 'Get help with a security questionnaire',
    body: `
      <p class="article-answer"><strong>A safe security-questionnaire process connects every answer to current evidence, a named owner, an approval date, and a review date.</strong> If the evidence is missing or the question does not match your system, flag it for review. Do not generate a confident “yes” from a policy template.</p>

      <p>Questionnaires are part of enterprise sales, but the answers can become contractual representations. The goal is not to finish the spreadsheet as quickly as possible. The goal is to give the buyer an accurate view of the system while identifying gaps that need a technical or operational fix.</p>

      <h2>Build the answer library before the next deal</h2>

      <p>Store approved answers by topic, not by customer spreadsheet. Each record should include:</p>

      <ul>
        <li>the standard question or control topic;</li>
        <li>the approved answer in plain language;</li>
        <li>systems and products the answer applies to;</li>
        <li>supporting evidence and where it is stored;</li>
        <li>the control or evidence owner;</li>
        <li>approver and approval date;</li>
        <li>next review date;</li>
        <li>exceptions, planned work, and claims you must not make.</li>
      </ul>

      <p>Common questionnaire formats such as the <a href="https://cloudsecurityalliance.org/artifacts/cloud-controls-matrix-v4-1" target="_blank" rel="noreferrer">Cloud Security Alliance CAIQ</a> can help organize topics, but a standard questionnaire is not proof that your controls operate. Map answers to your actual product and evidence.</p>

      <figure class="article-inline-visual"><img src="/articles/questionnaire-proof-chain.png" alt="A security questionnaire claim connected to proof, an owner, approval, and review date." loading="lazy" /><figcaption>Reusable answers reduce work only when the evidence and scope remain current.</figcaption></figure>

      <h2>Evidence checklist</h2>

      <h3>Company and system description</h3>
      <ul>
        <li>legal contracting entity and product names;</li>
        <li>plain-language service description;</li>
        <li>system boundary and architecture diagram;</li>
        <li>data-flow diagram for customer and sensitive data;</li>
        <li>hosting providers and relevant regions;</li>
        <li>subprocessor inventory and purpose;</li>
        <li>named security and privacy contacts.</li>
      </ul>

      <h3>Data classification, use, retention, and deletion</h3>
      <ul>
        <li>data categories collected and processed;</li>
        <li>purposes and customer instructions;</li>
        <li>classification policy and handling rules;</li>
        <li>retention schedule by data type;</li>
        <li>deletion workflow, backups, and verification;</li>
        <li>test-data and production-data separation.</li>
      </ul>

      <h3>Encryption and key management</h3>
      <ul>
        <li>transport encryption configuration;</li>
        <li>storage encryption by service and data type;</li>
        <li>key-management provider and access model;</li>
        <li>rotation, revocation, recovery, and audit records;</li>
        <li>exceptions where data is not encrypted.</li>
      </ul>

      <p>Do not answer “AES-256 everywhere” because a cloud-service marketing page says so. Confirm which storage services, application fields, backups, exports, and endpoints the statement covers.</p>

      <h3>Identity and access</h3>
      <ul>
        <li>identity provider and single sign-on coverage;</li>
        <li>multi-factor authentication requirements;</li>
        <li>role definitions and privileged-access process;</li>
        <li>joiner, mover, and leaver evidence;</li>
        <li>periodic access reviews and approvals;</li>
        <li>service accounts, API keys, and machine identities;</li>
        <li>customer authentication and account-recovery controls.</li>
      </ul>

      <h3>Secure development and change management</h3>
      <ul>
        <li>code-review and branch-protection rules;</li>
        <li>build, test, and deployment evidence;</li>
        <li>dependency, secret, static, and dynamic testing;</li>
        <li>change approval and emergency-change process;</li>
        <li>separation of development and production access;</li>
        <li>release rollback and artifact verification.</li>
      </ul>

      <p>The <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noreferrer">NIST Cybersecurity Framework</a> can help organize governance and risk outcomes. It does not certify your implementation. Use it to locate evidence and ownership, not as a blanket “compliant” answer.</p>

      <h3>Vulnerability management and penetration testing</h3>
      <ul>
        <li>asset and software inventory;</li>
        <li>scan cadence and authenticated coverage;</li>
        <li>triage, severity, ownership, and remediation targets;</li>
        <li>independent penetration-test scope and date;</li>
        <li>redacted report or attestation where permitted;</li>
        <li>retest results and open-risk acceptance.</li>
      </ul>

      <p>If the buyer asks for a penetration test, confirm what it must cover. Our guide explains <a href="/blog/does-soc-2-require-a-penetration-test">when SOC 2 and customer reviews lead to penetration testing</a>.</p>

      <h3>Logging, monitoring, and incident response</h3>
      <ul>
        <li>security-relevant event sources;</li>
        <li>log access, protection, and retention;</li>
        <li>alert ownership and escalation;</li>
        <li>incident-response plan and contact tree;</li>
        <li>tabletop or exercise record;</li>
        <li>customer-notification decision process;</li>
        <li>post-incident review and corrective action.</li>
      </ul>

      <h3>Availability, backups, and recovery</h3>
      <ul>
        <li>service dependencies and criticality;</li>
        <li>backup scope, frequency, protection, and retention;</li>
        <li>restoration test evidence;</li>
        <li>recovery objectives approved by the business;</li>
        <li>business-continuity and disaster-recovery exercises;</li>
        <li>customer communication during an outage.</li>
      </ul>

      <h3>Vendor and subprocessor management</h3>
      <ul>
        <li>vendor inventory and risk tier;</li>
        <li>due-diligence records;</li>
        <li>contracts and data-processing terms;</li>
        <li>security review and renewal dates;</li>
        <li>offboarding and access-revocation evidence;</li>
        <li>current public subprocessor notice.</li>
      </ul>

      <h3>AI-specific evidence</h3>
      <ul>
        <li>models and providers used in each feature;</li>
        <li>data sent to the model and whether it is used for training;</li>
        <li>model hosting and processing regions;</li>
        <li>tenant separation in retrieval and memory;</li>
        <li>prompt-injection and output-handling controls;</li>
        <li>tools, permissions, approval gates, and action logs;</li>
        <li>human review for consequential output;</li>
        <li>evaluation, monitoring, and incident procedures.</li>
      </ul>

      <p>The <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">NIST AI RMF</a> and <a href="https://owasp.org/projects/top-10-for-large-language-model-applications" target="_blank" rel="noreferrer">OWASP Top 10 for LLM Applications</a> provide useful risk categories. Your answer still needs to describe the deployed product.</p>

      <h2>Use five answer states</h2>

      <table>
        <thead><tr><th>State</th><th>Meaning</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>Supported</td><td>Current evidence supports the answer for the stated scope</td><td>Attach or reference approved evidence</td></tr>
          <tr><td>Partially supported</td><td>The control applies only to part of the system</td><td>State the boundary and exception</td></tr>
          <tr><td>Planned</td><td>Work is approved but not operating</td><td>Give an owner and honest target date</td></tr>
          <tr><td>Not applicable</td><td>The question does not fit the product or relationship</td><td>Explain why, without using it to hide a gap</td></tr>
          <tr><td>Needs review</td><td>Evidence or ownership is missing</td><td>Do not send until the owner resolves it</td></tr>
        </tbody>
      </table>

      <h2>Review before sending</h2>

      <p>Route answers to the people who own the facts: engineering for architecture and development controls, IT for workforce identity, legal and privacy for contracts and data rights, finance for insurance, and executive management for risk acceptance. Security or compliance should coordinate consistency, not invent answers on behalf of other owners.</p>

      <p>Keep the original customer wording beside the approved response. A slight wording change can alter the claim. “Do administrators use MFA?” is not the same as “Is MFA technically available?”</p>

      <h2>Frequently asked questions</h2>

      <h3>Can AI complete a security questionnaire?</h3>
      <p>It can help map questions to approved source material and draft responses. A named owner must review the result. Unsupported answers should be flagged, never guessed.</p>

      <h3>Should we send our full penetration-test report?</h3>
      <p>Only under appropriate access and confidentiality controls. Many buyers can begin with a redacted report, executive summary, attestation, or controlled trust-center access.</p>

      <h3>Can we reuse answers?</h3>
      <p>Yes, when the question, system scope, and current facts match. Keep evidence and review dates so reuse does not preserve an outdated claim.</p>

      <h3>Does a completed questionnaire certify our security?</h3>
      <p>No. It represents answers to a customer's due-diligence questions. It does not create an audit opinion, certification, or guarantee.</p>
    `,
  },
  {
    slug: 'ai-jailbreak-vs-security-finding',
    category: 'AI application security',
    title: 'Why an AI Jailbreak Is Not Automatically a Security Finding',
    description: 'A jailbreak becomes a security finding when it breaks an explicit rule, is reproducible, and causes material impact in the deployed AI application.',
    published: '2026-11-04',
    updated: '2026-11-04',
    readTime: '11 min read',
    keyword: 'AI jailbreak security finding',
    featuredImage: '/articles/jailbreak-vs-security-finding-featured.png',
    featuredAlt: 'Sthuthi guide explaining that a model output becomes a security finding when it breaks a rule, is reproducible, and has material impact.',
    inlineImage: '/articles/ai-action-chain.png',
    inlineAlt: 'Sthuthi guide showing the chain from input and retrieved context to a tool call and business impact.',
    inlineCaption: 'Follow the result past the model response. The downstream data or action determines much of the security impact.',
    serviceSlug: 'ai-security-assessment',
    serviceLabel: 'Test an AI workflow against material rules',
    body: `
      <p class="article-answer"><strong>An AI jailbreak is not automatically a security finding.</strong> It becomes one when the tested system violates an explicit security rule, the result can be reproduced under a recorded configuration, and the outcome creates material impact such as private-data exposure or an unauthorized action.</p>

      <p>Models can produce surprising, inaccurate, rude, or policy-breaking text. Some outputs are safety or quality issues. Some are useful observations. A security report needs a traceable connection to confidentiality, integrity, availability, authority, or another agreed business rule.</p>

      <h2>Jailbreak, prompt injection, and finding are different terms</h2>

      <h3>Jailbreak</h3>
      <p>A jailbreak commonly means persuading a model to bypass behavioral or content restrictions. The result might violate a model policy without compromising application data or authority.</p>

      <h3>Prompt injection</h3>
      <p>Prompt injection uses malicious instructions to redirect a model or application. It may arrive directly from the user or indirectly through retrieved content. The <a href="https://genai.owasp.org/glossary/prompt-injection/" target="_blank" rel="noreferrer">OWASP GenAI Security Project</a> explains the structural problem: trusted and untrusted instructions can enter the same context.</p>

      <h3>Security finding</h3>
      <p>A finding records a tested rule, target, configuration, action trace, observed outcome, impact, severity rationale, limits, and reviewer decision. The prompt is only one part of that evidence.</p>

      <h2>The three-part finding test</h2>

      <h3>1. A defined rule was broken</h3>
      <p>Write the expected rule before testing. Examples:</p>

      <ul>
        <li>A customer may retrieve only records owned by their tenant.</li>
        <li>The agent must obtain approval before issuing a refund over $100.</li>
        <li>Retrieved documents must not change the agent's tool policy.</li>
        <li>The model must not receive production credentials.</li>
        <li>A user may not cause the agent to send a message as another employee.</li>
      </ul>

      <p>“The model should never say anything unexpected” is not a testable security rule. Tie the rule to data, identity, authority, system state, or a defined safety requirement.</p>

      <h3>2. The outcome is reproducible and attributable</h3>
      <p>Record the application build, model and version, system instructions, retrieval state, tools, permissions, user role, tenant, test data, request trace, and observed action. Repeat the scenario enough to understand whether the result is stable, intermittent, or dependent on hidden state.</p>

      <p>AI behavior is probabilistic. Reproducibility does not always mean identical wording. It means the same material rule can be violated under a documented scenario with a meaningful success rate.</p>

      <h3>3. The impact is material</h3>
      <p>Material impact can include:</p>

      <ul>
        <li>another customer's private record enters the response;</li>
        <li>a tool creates, changes, deletes, sends, or purchases without authorization;</li>
        <li>the attacker gains a credential, token, or privileged operation;</li>
        <li>untrusted model output reaches a code, query, template, or browser execution sink;</li>
        <li>the attack causes meaningful financial or resource consumption;</li>
        <li>a required safety control fails in the deployed use case.</li>
      </ul>

      <figure class="article-inline-visual"><img src="/articles/ai-action-chain.png" alt="The path from AI input and context to tool action and material impact." loading="lazy" /><figcaption>Do not stop the investigation at the model response. Trace what data or authority the system changed.</figcaption></figure>

      <h2>Examples: observation or confirmed finding?</h2>

      <table>
        <thead><tr><th>Observed behavior</th><th>Likely treatment</th><th>Reason</th></tr></thead>
        <tbody>
          <tr><td>Model reveals a generic system instruction</td><td>Observation or low-risk finding</td><td>Impact depends on whether the instruction contains protected information or enables another attack</td></tr>
          <tr><td>Model produces disallowed fictional content</td><td>Safety finding if the product has that requirement</td><td>May not be an application-security issue without a protected system rule</td></tr>
          <tr><td>Retrieved document instructs agent to send a private file externally</td><td>Security finding</td><td>Indirect injection caused an unauthorized tool action</td></tr>
          <tr><td>User obtains another tenant's order through the agent</td><td>Security finding</td><td>Customer-data boundary was broken</td></tr>
          <tr><td>Model claims a refund occurred, but no tool was called</td><td>Quality or integrity issue</td><td>Material impact depends on downstream reliance and workflow</td></tr>
        </tbody>
      </table>

      <h2>System-prompt leakage needs context</h2>

      <p>The <a href="https://owasp.org/projects/top-10-for-large-language-model-applications" target="_blank" rel="noreferrer">OWASP Top 10 for LLM Applications</a> includes system-prompt leakage as a risk area. The security impact depends on content. A prompt containing API keys is a secret-management failure. A prompt exposing internal tool names may aid follow-on attacks. A prompt containing ordinary behavioral instructions may have limited impact.</p>

      <p>Do not treat secrecy of the system prompt as the main control. Design the application so prompt knowledge does not grant access to data or tools.</p>

      <h2>Severity should follow impact and control failure</h2>

      <p>Traditional severity systems can inform the discussion, but AI application findings need product context. Consider the required user access, reliability, affected tenants, data sensitivity, tool authority, human approval, detectability, reversibility, and downstream consequences.</p>

      <p>Document uncertainty. If the tester cannot establish that the action occurred, label the result as needing review rather than presenting a model statement as proof. Sthuthi's <a href="/sample-report">illustrative sample report</a> separates observation, expected result, impact, remediation, and retest.</p>

      <h2>How to write the finding</h2>

      <p>Use a title that names the broken outcome: “The support agent could retrieve another customer's order,” not “Prompt injection.” Then record:</p>

      <ol>
        <li>the expected ownership or approval rule;</li>
        <li>the tested user, tenant, application, model, and tool versions;</li>
        <li>the sanitized request, retrieved context, tool call, and server response;</li>
        <li>the material business impact;</li>
        <li>the recommended server-side or architectural control;</li>
        <li>limits and success rate;</li>
        <li>review state and reviewer;</li>
        <li>the corrected-path retest evidence.</li>
      </ol>

      <p>The <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">NIST AI RMF</a> provides a broader structure for governing, mapping, measuring, and managing AI risk. Use individual adversarial tests inside that lifecycle rather than treating a jailbreak count as the whole program.</p>

      <h2>Frequently asked questions</h2>

      <h3>Is every prompt injection a vulnerability?</h3>
      <p>No. Prompt injection is an attack technique. The vulnerability and severity depend on which trusted rule or boundary the deployed application fails to enforce.</p>

      <h3>Is system-prompt leakage always a security issue?</h3>
      <p>No. Assess what the prompt contains and what the disclosure enables. Credentials and protected data should never be placed there.</p>

      <h3>Can guardrails fix prompt injection?</h3>
      <p>Guardrails can reduce some behaviors. They should not be the only control protecting data or consequential tools. Enforce authorization and approvals outside the model.</p>

      <h3>How should a jailbreak be retested?</h3>
      <p>Repeat the recorded scenario against the corrected application and configuration. Verify the server-side rule or tool boundary, not merely a different wording from the model.</p>
    `,
  },
  {
    slug: 'test-ai-agent-tool-permissions',
    category: 'AI application security',
    title: 'How to Test an AI Agent’s Tool Permissions and Approval Gates',
    description: 'A practical method for testing AI agent identities, tool permissions, argument validation, approval gates, logs, rollback, and indirect prompt injection.',
    published: '2026-11-04',
    updated: '2026-11-04',
    readTime: '14 min read',
    keyword: 'AI agent security testing',
    featuredImage: '/articles/ai-agent-tool-permissions-featured.png',
    featuredAlt: 'Sthuthi guide explaining that every AI agent action needs an identity, approval decision, log, and rollback path.',
    inlineImage: '/articles/agent-action-controls.png',
    inlineAlt: 'Sthuthi guide showing an AI agent action passing through permission, argument, approval, execution, and logging controls.',
    inlineCaption: 'Treat the model as a proposer. Deterministic services should decide whether an action is allowed.',
    serviceSlug: 'ai-security-assessment',
    serviceLabel: 'Scope an AI agent security assessment',
    body: `
      <p class="article-answer"><strong>Test an AI agent's tools by tracing every consequential action through five controls: identity, permission, argument validation, approval, and evidence.</strong> Then attempt to redirect those actions through user prompts, retrieved content, tool output, memory, and cross-tenant references.</p>

      <p>The model should propose an action. A deterministic service should decide whether the action is permitted. If the model's text is the final authorization layer, prompt injection can become application authority.</p>

      <h2>1. Inventory every tool and operation</h2>

      <p>Create a tool register before testing. Include the tool name, downstream system, allowed operations, identity used, data reachable, argument schema, approval requirement, rate or cost limit, logging, and rollback method.</p>

      <table>
        <thead><tr><th>Tool</th><th>Operations</th><th>Identity</th><th>Approval</th><th>Rollback</th></tr></thead>
        <tbody>
          <tr><td>Order lookup</td><td>Read order by ID</td><td>Delegated customer</td><td>No</td><td>Not applicable</td></tr>
          <tr><td>Refund</td><td>Create refund</td><td>Scoped service role</td><td>Required above threshold</td><td>Finance reversal</td></tr>
          <tr><td>Email</td><td>Draft and send</td><td>Named mailbox</td><td>Required for external send</td><td>Recall where supported</td></tr>
          <tr><td>CRM</td><td>Read and update account</td><td>Support integration</td><td>Required for ownership change</td><td>Version history</td></tr>
        </tbody>
      </table>

      <p>Include MCP components, plugins, browser automation, code execution, databases, ticketing systems, file stores, messaging, and administrative APIs. A tool that appears read-only may still expose private data or trigger expensive work.</p>

      <h2>2. Identify whose authority the agent uses</h2>

      <p>An agent can operate as:</p>

      <ul>
        <li>the signed-in user through delegated authorization;</li>
        <li>a shared service account;</li>
        <li>a privileged application identity;</li>
        <li>a workflow-specific temporary identity;</li>
        <li>a human operator who approves and executes the action.</li>
      </ul>

      <p>Test whether the tool receives the user and tenant context needed to enforce ownership. A shared privileged token can erase the boundary established by the application. The server must not trust a tenant ID or user ID merely because the model supplied it.</p>

      <h2>3. Apply least privilege to each operation</h2>

      <p>Do not grant an agent a general CRM administrator role when it needs to add a note. Separate read, draft, create, update, send, delete, and administrative operations. Limit resources, fields, tenants, amounts, destinations, and time windows.</p>

      <p>The <a href="https://owasp.org/projects/top-10-for-large-language-model-applications" target="_blank" rel="noreferrer">OWASP Top 10 for LLM Applications</a> describes excessive agency as a risk involving excessive functionality, permissions, or autonomy. The remedy is not only a stronger prompt. Reduce authority in the tools and identities outside the model.</p>

      <figure class="article-inline-visual"><img src="/articles/agent-action-controls.png" alt="An AI agent action passing through identity, permission, approval, logging, and rollback controls." loading="lazy" /><figcaption>Each action should have one enforceable path from user authority to recorded result.</figcaption></figure>

      <h2>4. Validate arguments outside the model</h2>

      <p>Treat tool arguments as untrusted input. Validate types, formats, ownership, amounts, destinations, state transitions, and allowed values in ordinary application code. Resolve sensitive object references on the server when possible rather than accepting raw IDs from model output.</p>

      <p>Test:</p>

      <ul>
        <li>another tenant's object ID;</li>
        <li>negative, excessive, or boundary amounts;</li>
        <li>unexpected recipients or destinations;</li>
        <li>hidden additional arguments;</li>
        <li>duplicate and replayed actions;</li>
        <li>out-of-order state changes;</li>
        <li>unescaped model output reaching queries, templates, or commands.</li>
      </ul>

      <h2>5. Put approval gates around consequences</h2>

      <p>Approval should show the human what will happen: target, action, important arguments, source, and consequence. “Allow agent?” is not meaningful approval. Bind the approval to the exact action so the agent cannot change the arguments afterward.</p>

      <p>Test whether the agent can:</p>

      <ul>
        <li>split one high-value action into smaller actions below a threshold;</li>
        <li>substitute the destination after approval;</li>
        <li>reuse an old approval;</li>
        <li>misrepresent the action in the approval preview;</li>
        <li>continue after denial or timeout;</li>
        <li>trigger the action through a different tool path.</li>
      </ul>

      <h2>6. Test direct and indirect instructions</h2>

      <p>Direct tests place the malicious instruction in the user conversation. Indirect tests place it in content the agent is expected to read: an email, support ticket, uploaded document, webpage, tool response, calendar event, code comment, or retrieved record.</p>

      <p>The <a href="https://genai.owasp.org/glossary/prompt-injection/" target="_blank" rel="noreferrer">OWASP prompt-injection definition</a> explains the difference. Test both because an agent may trust retrieved content more than an obviously hostile user message.</p>

      <h2>7. Verify logs are usable</h2>

      <p>For each attempted action, record:</p>

      <ul>
        <li>organization, user, tenant, and session;</li>
        <li>application, agent, model, prompt, and tool versions;</li>
        <li>the proposed operation and sanitized arguments;</li>
        <li>retrieved content or tool output that influenced the decision;</li>
        <li>permission and approval decisions;</li>
        <li>downstream request and observed result;</li>
        <li>cost, timing, and error state;</li>
        <li>reviewer and evidence digest.</li>
      </ul>

      <p>Do not store secrets or unnecessary private data merely to improve debugging. Use identifiers, redaction, access control, retention, and controlled evidence views.</p>

      <h2>8. Plan cancellation and rollback</h2>

      <p>Long-running agents need a kill switch that stops new operations and invalidates queued authority. Consequential tools need idempotency and a recovery path. Test what happens when the agent fails between steps, loses network access, receives a duplicate event, or is cancelled after partial execution.</p>

      <p>The <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">NIST AI RMF</a> encourages risk management across the AI lifecycle. Cancellation, incident handling, monitoring, and recovery belong in the deployed-system assessment, not only the model evaluation.</p>

      <h2>Core adversarial scenarios</h2>

      <ol>
        <li><strong>Cross-tenant lookup:</strong> ask the agent to retrieve another customer's object by reference.</li>
        <li><strong>Indirect tool redirection:</strong> place instructions inside a document the agent summarizes.</li>
        <li><strong>Approval substitution:</strong> approve one target and attempt execution against another.</li>
        <li><strong>Privilege confusion:</strong> compare the signed-in user's authority with the tool's service identity.</li>
        <li><strong>Replay:</strong> repeat the same approved action and observe idempotency.</li>
        <li><strong>Partial failure:</strong> interrupt a multi-step task and inspect state and recovery.</li>
        <li><strong>Cost abuse:</strong> request repeated or recursive work within safe test limits.</li>
        <li><strong>Log evasion:</strong> attempt an action through an alternate path and verify the record.</li>
      </ol>

      <p>Our <a href="/services/ai-security-assessment">AI Security Assessment</a> scopes two critical workflows and up to five connected tools. The assessment records the expected rule and downstream result; model output alone does not establish a finding.</p>

      <h2>Frequently asked questions</h2>

      <h3>Should an AI agent use the user's credentials?</h3>
      <p>Use delegated, scoped authority where practical. Avoid sharing raw user credentials with the model. The downstream service should receive enough trusted identity context to enforce permissions.</p>

      <h3>Are confirmation dialogs enough?</h3>
      <p>No. The preview must accurately describe the exact action, and the server must bind approval to immutable arguments and enforce authorization again at execution.</p>

      <h3>Can prompt instructions enforce permissions?</h3>
      <p>No. Prompts can guide behavior, but deterministic code and downstream services must enforce access and approval rules.</p>

      <h3>What should a retest prove?</h3>
      <p>Repeat the recorded attack against the corrected tool boundary. Verify the system denies or safely contains the action and that the evidence record captures the decision.</p>
    `,
  },
  {
    slug: 'what-a-penetration-test-report-should-contain',
    category: 'Penetration testing',
    title: 'What a Useful Penetration-Test Report Should Contain',
    description: 'Learn how to evaluate a penetration-test report: scope, methodology, evidence, reproduction, impact, severity, fixes, limitations, ownership, and retest results.',
    published: '2026-11-04',
    updated: '2026-11-04',
    readTime: '12 min read',
    keyword: 'penetration test report example',
    featuredImage: '/articles/penetration-test-report-featured.png',
    featuredAlt: 'Sthuthi guide showing that a useful penetration-test report connects evidence to a fix owner and a verified retest.',
    inlineImage: '/articles/pentest-evidence-chain.png',
    inlineAlt: 'Sthuthi guide showing a finding moving from evidence and recommended fix to retest verification.',
    inlineCaption: 'The report is useful when an engineer can reproduce the issue and a reviewer can prove the corrected result.',
    serviceSlug: 'penetration-testing',
    serviceLabel: 'See scope and pricing for penetration testing',
    body: `
      <p class="article-answer"><strong>A useful penetration-test report states exactly what was tested, shows reproducible evidence for each finding, explains material impact, recommends a specific fix, records limitations, and adds retest evidence after remediation.</strong> A list of scanner alerts and generic CVSS text is not enough.</p>

      <p>The report serves several readers. Executives need the decision and risk. Engineers need enough evidence to reproduce and fix the issue. Auditors and customers need scope, dates, independence, and remediation status. A good report separates those needs without hiding technical detail.</p>

      <h2>1. Document identity and version</h2>

      <p>The cover and document metadata should identify:</p>

      <ul>
        <li>client and assessed system;</li>
        <li>assessment type;</li>
        <li>testing dates and report date;</li>
        <li>report version and change history;</li>
        <li>assessor and reviewer;</li>
        <li>distribution and confidentiality marking;</li>
        <li>engagement or authorization reference.</li>
      </ul>

      <p>Versioning matters after retesting. Readers must be able to distinguish the original findings from later verification and understand which application version each result describes.</p>

      <h2>2. Scope, authorization, and exclusions</h2>

      <p>List the exact applications, hosts, APIs, versions, environments, roles, tenants, workflows, and testing window. State the access model and whether the work was black-box, gray-box, or source-assisted. Record major exclusions such as cloud infrastructure, mobile clients, denial-of-service, social engineering, physical access, or third-party systems.</p>

      <p><a href="https://csrc.nist.gov/pubs/sp/800/115/final" target="_blank" rel="noreferrer">NIST SP 800-115</a> treats planning as part of security testing. The report should connect the completed work to the approved plan. Read <a href="/blog/how-to-scope-web-application-penetration-test">how to scope a web application penetration test</a> for the input checklist.</p>

      <div class="article-callout"><strong>Coverage must be falsifiable.</strong><span>A reader should be able to identify what remains untested. “The application was tested against industry standards” is too vague.</span></div>

      <h2>3. Methodology and completed coverage</h2>

      <p>Name the testing references and explain how they were adapted. The <a href="https://owasp.org/projects/web-security-testing-guide" target="_blank" rel="noreferrer">OWASP Web Security Testing Guide</a> is a useful technique reference. The <a href="https://api-security.owasp.org/" target="_blank" rel="noreferrer">OWASP API Security Top 10</a> highlights recurring API risks. Neither proves that a tester completed every listed check.</p>

      <p>Summarize completed coverage by area: authentication, authorization, sessions, input handling, files, business logic, APIs, integrations, client-side behavior, configuration, and other agreed objectives. Note stopped, blocked, or incomplete checks and why they could not be completed.</p>

      <h2>4. Executive summary</h2>

      <p>The executive summary should answer:</p>

      <ul>
        <li>What system and decision did the assessment address?</li>
        <li>What material risks were confirmed?</li>
        <li>Which controls worked as expected?</li>
        <li>What should management do next?</li>
        <li>What was outside scope or remained untested?</li>
      </ul>

      <p>A severity count alone is not an executive summary. One cross-tenant authorization failure may matter more than many low-risk configuration observations.</p>

      <h2>5. Finding title and status</h2>

      <p>Use a title that names the broken outcome: “A customer could download another tenant's invoice,” not “IDOR” or “OWASP A01.” Technical classifications can appear below the title.</p>

      <p>Keep status fields separate:</p>

      <ul>
        <li><strong>Review state:</strong> draft, needs review, confirmed, rejected.</li>
        <li><strong>Remediation state:</strong> open, in progress, ready for retest, risk accepted.</li>
        <li><strong>Verification state:</strong> not retested, fixed and verified, still present, partially fixed.</li>
      </ul>

      <p>A client saying “fixed” should not automatically change the verification result.</p>

      <figure class="article-inline-visual"><img src="/articles/pentest-evidence-chain.png" alt="Finding evidence connected to a recommended fix, owner, and verified retest." loading="lazy" /><figcaption>Every verified fix needs new evidence from the corrected system.</figcaption></figure>

      <h2>6. Affected workflow and expected rule</h2>

      <p>Name the user, role, tenant, object, action, and workflow. Then state the rule the system should enforce. For example: “A signed-in customer may retrieve only orders owned by the same tenant.” This gives the engineer and retester a stable target even when implementation changes.</p>

      <h2>7. Reproducible evidence</h2>

      <p>Evidence should contain enough detail to establish the result without exposing unnecessary sensitive data:</p>

      <ul>
        <li>target and application version;</li>
        <li>test identity and preconditions;</li>
        <li>sanitized request, action, or command;</li>
        <li>observed response or downstream state;</li>
        <li>expected response or rule;</li>
        <li>timestamps and relevant correlation identifiers;</li>
        <li>screenshots or traces where they add information;</li>
        <li>artifact digest and source-tool version where appropriate.</li>
      </ul>

      <p>Redact tokens, secrets, customer records, and unrelated personal data. A screenshot is not automatically better evidence than a concise request and response. Use the artifact that proves the control failure.</p>

      <h2>8. Reproduction steps</h2>

      <p>Write steps that a developer can follow in a safe environment. Include the starting role and data state. Avoid vague phrases such as “intercept the request and change the ID” when multiple IDs, encodings, or endpoints exist.</p>

      <p>For a multi-step business-logic issue, show the sequence and state changes. For an AI finding, include the relevant model, system configuration, retrieved content, tool call, and material action. See <a href="/blog/ai-jailbreak-vs-security-finding">why model output alone may not establish impact</a>.</p>

      <h2>9. Business and technical impact</h2>

      <p>Explain what a successful attacker can read, change, create, delete, execute, approve, or deny. State who is affected and the required access. Separate demonstrated impact from plausible escalation. Do not write “full account takeover” when the test proved only profile-field modification.</p>

      <h2>10. Severity and rationale</h2>

      <p>A numeric score can help consistency, but the report must explain product context. The <a href="https://www.first.org/cvss/v4.0/specification-document" target="_blank" rel="noreferrer">FIRST CVSS v4.0 specification</a> defines a common scoring model. Use it accurately and add the business context it does not know: data sensitivity, tenant count, transaction value, detectability, and operational safeguards.</p>

      <p>Record uncertainty and assumptions. Severity should be reviewable, not an unexplained color.</p>

      <h2>11. Recommended fix</h2>

      <p>Recommend the control, not only a symptom patch. For an object-authorization failure, the recommendation may be to enforce tenant ownership in a shared server-side authorization layer, add negative tests across roles, and remove client-supplied authority. “Sanitize input” would not address that cause.</p>

      <p>Where helpful, separate immediate containment from durable correction. Do not include a code patch the assessor has not tested or pretend there is one universal fix for every architecture.</p>

      <h2>12. Owner and remediation record</h2>

      <p>Assign a team or named role, target date, tracking reference, and management decision. If risk is accepted, record the approver, reason, duration, and review date. Keep client operational notes separate from the assessor's original evidence.</p>

      <h2>13. Retest result</h2>

      <p>A retest should state:</p>

      <ul>
        <li>the corrected application and version;</li>
        <li>date and tester;</li>
        <li>the repeated scenario;</li>
        <li>new observed result;</li>
        <li>whether the original impact remains;</li>
        <li>new limitations or partial fixes;</li>
        <li>updated verification status.</li>
      </ul>

      <p>Our <a href="/sample-report">illustrative report</a> shows a cross-customer order lookup changing from HTTP 200 to HTTP 403 after an ownership check was added. The example is labeled demo data; it demonstrates report structure rather than client history.</p>

      <h2>14. Limitations and remaining risk</h2>

      <p>No test proves that a system is secure. State time limits, inaccessible features, unavailable roles, blocked integrations, rate constraints, environment differences, and untested systems. “No confirmed findings” means no finding was confirmed in the completed checks. It does not mean the business is safe from every attack.</p>

      <h2>Report evaluation checklist</h2>

      <ul class="article-checklist">
        <li>Exact targets, dates, versions, roles, and exclusions</li>
        <li>Named methodology with completed coverage</li>
        <li>Executive decision and remaining limits</li>
        <li>Product-specific finding titles</li>
        <li>Expected rule and affected workflow</li>
        <li>Sanitized, reproducible evidence</li>
        <li>Demonstrated impact and severity rationale</li>
        <li>Specific recommended control</li>
        <li>Owner and remediation state</li>
        <li>Retest evidence and report version history</li>
      </ul>

      <h2>Frequently asked questions</h2>

      <h3>Should a penetration-test report include every tool output?</h3>
      <p>No. Include evidence that supports confirmed findings and coverage. Raw tool output can contain false positives, secrets, or irrelevant data and may belong in a controlled appendix.</p>

      <h3>Is a clean report better than one with findings?</h3>
      <p>Not necessarily. Evaluate scope, depth, evidence, and limitations. A report with zero findings from shallow coverage is not stronger than a report that found and verified meaningful fixes.</p>

      <h3>Can we share the report with customers?</h3>
      <p>Follow the agreement, confidentiality marking, and access controls. Many organizations share a redacted version, executive summary, or controlled trust-center copy.</p>

      <h3>What is the difference between remediation and retesting?</h3>
      <p>Remediation is the client's change. Retesting is the assessor's independent check of the corrected system using the relevant recorded scenario.</p>
    `,
  },
];

export const articleBySlug = new Map(articles.map(article => [article.slug, article]));
