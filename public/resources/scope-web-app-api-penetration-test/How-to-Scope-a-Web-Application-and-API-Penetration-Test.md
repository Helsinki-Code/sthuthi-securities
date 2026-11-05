![How to Scope a Web Application and API Penetration Test cover](assets/cover.jpg)

# How to Scope a Web Application and API Penetration Test

*Define targets, roles, tenants, workflows, safety rules, evidence, and retesting before testing begins*

**Shalini Tomar**, CEO, Sthuthi Technologies, LLC  
Sthuthi Securities · Field Guide 02 · Edition 2.0 · November 2026

---

**How to Scope a Web Application and API Penetration Test**  
Edition 2.0, November 2026.

© 2026 Sthuthi Technologies, LLC. All rights reserved. No part of this publication may be reproduced or distributed for commercial purposes without written permission from the publisher. You may copy the companion worksheets for internal use within your own organization.

This guide is educational material. It is not legal advice, an audit opinion, a certification, or authorization to test any system. Security testing requires written permission from the system owner. Contract, privacy, employment, sector, and regional obligations should be reviewed with qualified advisers.

Example Support App and every other organization in the worked examples are fictional. Examples show a method; they are not a scope that fits every system.

OWASP, AWS, Microsoft Azure, Google Cloud, PCI SSC, and NIST names are used for identification only and imply no endorsement.

Framework versions, provider policies, and publication dates were checked against primary sources in November 2026. Requirements change; confirm the current edition before relying on a specific clause.

---

<a id="part3"></a>

# Contents

[**Before you start**](#intro)

**PART I · DEFINE THE ASSESSMENT**

[**01   Start with the decision the test must support**](#ch1)

[**02   Name the systems and assets**](#ch2)

[**03   Map users, roles, tenants, and critical workflows**](#ch3)

**PART II · DESCRIBE THE TEST SURFACE**

[**04   Choose coverage by application type**](#ch4)

[**05   Select environments, data, and dependencies**](#ch5)

[**06   Define reconnaissance and discovery boundaries**](#ch6)

**PART III · MAKE THE ENGAGEMENT LAWFUL AND SAFE**

[**07   Write authorization and rules of engagement**](#ch7)

[**08   Prepare accounts, access, and monitoring**](#ch8)

[**09   State exclusions, limits, and unknowns**](#ch9)

**PART IV · AGREE ON THE OUTPUT**

[**10   Set evidence and reporting requirements**](#ch10)

[**11   Define remediation and retesting**](#ch11)

[**12   Fix the schedule and responsibilities**](#ch12)

**PART V · ISSUE THE SCOPE**

[**13   Assemble the statement of work**](#ch13)

[**14   Worked example: a multi-tenant SaaS platform**](#ch14)

**TOOLS AND REFERENCE**

[**W   Companion worksheet pack**](#worksheets)

[**A   Master pre-test checklist**](#appendix-a)

[**B   Vendor proposal comparison scorecard**](#appendix-b)

[**C   Glossary**](#appendix-c)

[**S   Sources**](#sources)

---

**INTRODUCTION**

<a id="intro"></a>

# Before you start

*A useful scope tells a tester what may be tested, what behavior matters, how far testing may go, when it must stop, and what evidence is expected at the end.*

A list of domain names is not a scope. Neither is “test our platform.” Both leave the tester guessing about which accounts matter, which records are sensitive, which actions are allowed, and what the report has to prove. The result is a report that is hard to compare, hard to rely on, and sometimes unsafe to have produced.

This guide turns a request for a penetration test into a scope that is specific, lawful, safe, and comparable across providers. It is written for security leads, engineering managers, product owners, procurement teams, and assessors planning an authorized test of a web application and its APIs.

## Who should be in the room

Complete the scope with the people who own the product, operate the environment, understand customer data, and can grant written authority. Engineering knows the system. Product knows the critical workflows. Security knows the test controls. Legal or procurement may need to confirm third-party rights and contract terms. In a small company one person may hold several of these roles, but each decision still needs a named owner.

## How to use it

Work through the chapters in order for a first assessment. For a repeat test, start from the previous scope and mark every changed system, role, workflow, integration, environment, or rule. Do not carry an old scope silently into a materially different release.

Each chapter points to a worksheet in the companion pack, which is a separate download. A completed set produces five outputs:

1. A decision brief explaining why the assessment exists.
2. A system boundary with named targets and owners.
3. A coverage plan tied to roles, tenants, and critical workflows.
4. Rules of engagement signed by an authorized owner.
5. Report and retest acceptance criteria.

![Figure 1. Scope starts with the decision the assessment must support, then works backward into the systems, behavior, test rules, and required output.](assets/fig-1.jpg)

*Figure 1. Scope starts with the decision the assessment must support, then works backward into the systems, behavior, test rules, and required output.*

> **Before any testing**
>
> This guide supports planning. It does not authorize testing, grant rights over a system, replace a signed contract, or prove compliance. Never put passwords, API keys, customer records, or production secrets in a scope document that will be shared by ordinary email.

---

**PART I · CHAPTERS 1–3**

<a id="part4"></a>

# Define the assessment

*Start from the decision the test must support, then name the systems and the people, roles, and tenants that use them.*

---

**CHAPTER 01 · DEFINE THE ASSESSMENT**

<a id="ch1"></a>

## Start with the decision the test must support

*A penetration test is only useful if someone knows what question it was meant to answer.*

Penetration tests are bought for different reasons. A customer may require an annual report. An auditor may ask how a control was tested. A product team may be preparing a release. A board may want assurance after a major acquisition. Those are different decisions and may require different targets, timing, evidence, and report language.

Write the decision before naming tools or test cases. “Test our platform” gives no way to judge whether the result is useful. “Determine whether a customer user can access or change another customer’s records before the enterprise launch” gives the assessor a system rule, a role boundary, an impact, and a deadline.

NIST SP 800-115 treats planning as part of the assessment process, not administrative work that happens after the technical plan is set. It describes rules of engagement as detailed constraints established before testing and as the basis for authority to perform the defined activities.<sup>[1]</sup> OWASP likewise describes its testing material as a set of techniques that must be adapted to the application’s architecture, threat model, data, and business context.<sup>[2]</sup>

### Write one primary decision

Choose one sentence that the report must help someone answer. Examples:

- Can a customer cross the tenant boundary in the production-equivalent SaaS application?
- Can an authenticated user call administrative API functions without the required role?
- Can the mobile application expose account data through local storage, transport, or its backend API?
- Can an AI support agent read another customer’s order or issue a refund without approval?
- Does the current release provide the technical testing evidence requested for an audit or customer review?

Secondary goals can be recorded, but they should not crowd out the primary decision. If the company needs an application test, cloud-configuration review, source-code review, phishing exercise, and recovery exercise, it probably needs several workstreams rather than one vague “full security test.”

### Identify the relying audience

The same technical finding is presented differently to an engineer, a customer security team, an auditor, and a board. Record the people who will rely on the output and what they expect to receive. Do not promise a certification, compliance conclusion, or audit opinion when the assessor is only performing technical testing.

An auditor may want scope dates, methodology, tester independence, findings, remediation, and retest evidence. Engineering needs exact reproduction steps, affected components, and a specific fix. Procurement may need a short executive summary and proof that the report can be shared under controlled terms. The statement of work should name these outputs before testing begins.

### Define success without promising zero findings

“No vulnerabilities found” is not a sensible success condition. A test can be well executed and still identify serious weaknesses. Use conditions the engagement can control:

- Every named critical workflow received the agreed coverage.
- Each required role and tenant combination was tested.
- Confirmed findings contain reproducible evidence and a clear affected rule.
- Limitations and untested areas are stated.
- The report is delivered by the required date.
- Retesting uses the recorded scenario against the corrected release.

> **Worksheet 01 · in the companion pack**
>
> **Assessment decision brief.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

**Decision quality check**

- [ ] The decision names a system or product boundary.
- [ ] The decision names the behavior or security rule under review.
- [ ] The deadline has a real business reason.
- [ ] The relying audience is known.
- [ ] Required deliverables are stated.
- [ ] Success does not depend on finding zero vulnerabilities.
- [ ] The test is not being described as an audit or certification unless it actually is one.

---

**CHAPTER 02 · DEFINE THE ASSESSMENT**

<a id="ch2"></a>

## Name the systems and assets

*A tester cannot test what the scope does not name, and must not test what the client does not own.*

The assessor cannot test an unnamed system. Start with the product as the user experiences it, then trace the components that accept requests, make decisions, store data, or call another service.

For a modern SaaS application, one “website” may include a browser application, public API, internal API, identity provider, file store, background workers, administrative console, payment provider, customer-support tooling, cloud infrastructure, and an AI model or retrieval system. The scope must distinguish client-owned components from third-party services. OWASP’s architecture-mapping guidance specifically calls for understanding technologies and components and recognizing that connected third-party systems are usually outside a tester’s authority unless separately included.<sup>[3]</sup>

![Figure 2. A connection does not create authority. Third-party services need their own permission, or a test plan that stops at the client-controlled integration boundary.](assets/fig-2.jpg)

*Figure 2. A connection does not create authority. Third-party services need their own permission, or a test plan that stops at the client-controlled integration boundary.*

### Record targets at the level the tester can identify

Use exact identifiers where possible:

- Fully qualified domain names and base URLs
- API hostnames, base paths, versions, and specifications
- Mobile package or bundle identifier and build number
- Cloud account, subscription, tenant, project, and region
- Source repository and commit or release tag when code review is included
- Container image digest or deployed release identifier
- Administrative interfaces and non-public routes
- Webhook destinations and callback sources
- AI model, orchestration service, retrieval index, and enabled tools

Avoid “all company infrastructure” unless the company can produce a defensible inventory and truly intends to authorize that breadth. Avoid wildcard scope such as *.example.com without stating whether discovery is allowed, which host classes are included, and what happens when a third-party or abandoned service is found.

### Separate scope states

Give each asset one state:

- **In scope:** the assessor may perform the allowed tests.
- **Discovery only:** the assessor may identify and record the asset but may not actively test it.
- **Conditional:** testing requires a named condition, such as a maintenance window or separate approval.
- **Out of scope:** the assessor must not test it.
- **Unknown ownership:** testing is prohibited until ownership or authority is proved.

These states prevent a common error: treating every system discovered under a company domain as client-owned. DNS, content-delivery networks, hosted support pages, payment services, and acquisition-era systems can belong to another party.

> **Worksheet 02 · in the companion pack**
>
> **Asset register.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

> **Worksheet 03 · in the companion pack**
>
> **Ownership and authority record.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

Acceptable evidence depends on the system. It may include cloud-console ownership, a domain record, a contract, a service account controlled by the client, or a written permission chain from the actual owner. The assessor should not decide that a client owns a target merely because the target contains the client’s name.

### Boundary review questions

- Which components enforce identity and authorization?
- Which component makes the final business decision?
- Where are tenant identifiers introduced and checked?
- Which stores contain customer, employee, payment, health, or regulated data?
- Which administrative interfaces are not linked from the normal application?
- Which background jobs continue after the browser request ends?
- Which integrations can read data or perform actions after a user signs out?
- Which assets were added through an acquisition or vendor relationship?
- Which systems cannot tolerate active testing?
- Which systems are being retired but remain reachable?

---

**CHAPTER 03 · DEFINE THE ASSESSMENT**

<a id="ch3"></a>

## Map users, roles, tenants, and critical workflows

*Authorization flaws hide between accounts. The scope has to describe those accounts before testing starts.*

Authorization testing needs more than one test account. The scope should describe who can act, which records they can reach, which operations they can perform, and how those rules change across tenants, teams, subscriptions, or lifecycle states.

OWASP’s authorization testing guidance separates unauthenticated access, horizontal access between equivalent users, and vertical access into higher-privilege functions.<sup>[4]</sup> A useful role matrix turns those categories into the product’s actual rules.

### Inventory identities before permissions

List human users, service identities, API clients, background workers, integration tokens, and emergency accounts. Record how each identity authenticates and where its permissions are enforced. A user may sign in through an identity provider but receive product permissions from a separate application database. An API key may belong to an organization rather than a person. A background worker may carry authority far beyond the user who triggered it.

Include lifecycle states. Newly invited, suspended, deleted, password-reset, trial, past-due, and former-employee accounts can behave differently from normal active users. A test that uses only the happy-path customer account misses these transitions.

### Map tenant boundaries explicitly

For a multi-tenant product, create at least two test tenants with distinct users and records. If resellers, parent organizations, workspaces, projects, or regions create nested boundaries, include those relationships. Give every test record a visible synthetic owner so cross-tenant evidence can be interpreted without exposing customer data.

The matrix should support tests such as:

- Customer A requests Customer B’s object by identifier.
- Customer A submits an API call captured from Customer B.
- A team administrator changes an organization-owner setting.
- A support user accesses an unassigned customer.
- A former member reuses a token after removal.
- A user changes a tenant identifier in a file, export, webhook, or background-job reference.

### Define critical workflows as state changes

“Test account management” is too broad. Write each workflow as a sequence with an expected rule:

1. Starting identity and state
2. Input or action
3. System decision
4. Data read or state change
5. Expected authorization result
6. Evidence that proves what happened

For example: “A customer administrator invites a new member to its own tenant. A standard customer must not invite members. No user from another tenant may accept or alter the invitation.” This description exposes role, tenant, state, and object boundaries.

> **Worksheet 04 · in the companion pack**
>
> **Identity and role matrix.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

> **Worksheet 05 · in the companion pack**
>
> **Tenant test design.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

> **Worksheet 06 · in the companion pack**
>
> **Critical workflow inventory.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

**Minimum role coverage**

- [ ] Anonymous or signed-out behavior
- [ ] Lowest-privilege authenticated user
- [ ] Equivalent users in different tenants
- [ ] Customer or team administrator
- [ ] Internal support or operations role
- [ ] Highest-risk administrative role, if permitted
- [ ] Service or integration identity
- [ ] Suspended, removed, expired, or otherwise changed identity

---

**PART II · CHAPTERS 4–6**

<a id="part5"></a>

# Describe the test surface

*Choose coverage by application type, pick the environment and data, and set the limits of discovery.*

---

**CHAPTER 04 · DESCRIBE THE TEST SURFACE**

<a id="ch4"></a>

## Choose coverage by application type

*Web, API, mobile, cloud, integrations, and AI features each expose a different part of the system.*

The scope should name coverage modules rather than claiming that one method covers everything. A browser test, API test, mobile test, cloud review, and AI-agent assessment can overlap, but each exposes a different part of the system.

OWASP WSTG organizes web testing across information gathering, configuration, identity, authentication, authorization, session management, input handling, error handling, cryptography, business logic, client behavior, and APIs.<sup>[2]</sup> The guide also warns that no fixed checklist can cover every application. Select the relevant techniques and tie them to the system rules recorded in this workbook.

### Web application coverage

Record all browser-accessible roles, routes, critical forms, upload and download functions, administrative interfaces, and client-side storage. Include authentication entry points, password recovery, invitations, federation, MFA enrollment, and session termination.

Browser coverage should address how the application behaves when requests are changed outside the user interface. A disabled button is not an authorization control. The assessor needs permission to capture, repeat, and modify relevant requests within the agreed limits.

Typical coverage areas include:

- Public and authenticated attack surface
- Authentication and account recovery
- Session cookies, tokens, logout, expiry, and concurrent sessions
- Horizontal and vertical authorization
- Input validation and injection paths
- File upload, download, preview, and processing
- Browser storage, cross-origin behavior, and client-side trust
- Business workflows, state transitions, and race conditions
- Error handling and sensitive-data exposure
- Security headers and transport configuration

### API coverage

An API scope needs the specification and the observed endpoints. They may differ. Record base URLs, versions, methods, object types, authentication schemes, webhook behavior, bulk operations, GraphQL operations, and administrative functions.

The OWASP API Security Top 10 highlights object-level authorization, authentication, object-property authorization, resource consumption, function-level authorization, sensitive business flows, server-side request forgery, configuration, inventory, and unsafe consumption of third-party APIs.<sup>[5]</sup> Use it as a risk prompt, not a claim that every relevant API test fits into ten labels.

API test planning should answer:

- Can one identity address another tenant’s object?
- Do list, search, export, batch, and indirect-reference endpoints apply the same checks as single-object endpoints?
- Can a client set server-controlled properties such as role, owner, status, price, or approval state?
- Are function permissions enforced at the API, not only in the interface?
- Can resource-intensive requests exceed agreed budgets or affect other tenants?
- Do webhooks verify source, freshness, and replay resistance?
- Does the application trust unsafe data returned by a supplier API?

### Mobile application coverage

Identify the exact iOS or Android build, distribution channel, supported operating-system versions, backend environment, and whether anti-tamper or certificate-pinning controls may affect testing. Mobile coverage can include local storage, logs, backups, inter-process communication, deep links, transport, authentication, runtime behavior, and backend APIs.

Do not treat the mobile binary and backend API as one unnamed target. A mobile assessment may need separate permission to analyze the application package, instrument the running app, bypass test-environment protections, and call the API outside the app.

### Cloud coverage

Cloud testing needs account-level identifiers and provider-specific rules. AWS currently allows customer testing of listed services without prior approval, but prohibits testing AWS infrastructure itself and requires prior approval for command-and-control activity.<sup>[6]</sup> Microsoft Azure allows testing of resources the customer owns or is authorized to test, subject to its published rules, and prohibits denial-of-service testing and access to other tenants.<sup>[7]</sup> Google Cloud does not require notice for testing a customer project, but the activity must follow its acceptable-use terms and affect only the customer’s projects.<sup>[8]</sup>

Record the current provider policy URL in the engagement file. Policies can change. The rules checked during scoping are part of the evidence for why a planned action was allowed.

Cloud coverage may include:

- Identity roles, trust policies, service accounts, and access keys
- Public endpoints and exposed storage
- Network paths, security groups, firewalls, and private connectivity
- Secrets, configuration, and workload identity
- Management-plane versus application-plane boundaries
- Logging, alerting, and response to test activity
- Container, serverless, and managed-service configuration
- Cross-account, cross-subscription, or cross-project trust

### Connected SaaS and OAuth coverage

List the integration, granted scopes, installation owner, token storage, refresh behavior, revocation behavior, and actions that remain possible after a user leaves. Define whether the assessor may install a test integration, change scopes, replay callbacks, or test only the client-owned portion.

### AI-enabled workflow coverage

An AI feature may connect user input to retrieved documents, memory, external tools, and real business actions. The scope should name the model or service, orchestration layer, retrieval sources, available tools, tool identities, approval requirements, and actions whose effects must be observed.

Prompt output alone does not establish impact. The evidence plan should capture the system’s deterministic decision, tool request, downstream authorization response, and resulting data access or state change. An AI assessment may include direct and indirect prompt injection, retrieval-boundary tests, tool-argument manipulation, cross-tenant context, memory behavior, sensitive-output handling, and approval bypass.

> **Worksheet 07 · in the companion pack**
>
> **Coverage module selection.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

> **Worksheet 08 · in the companion pack**
>
> **API inventory.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

---

**CHAPTER 05 · DESCRIBE THE TEST SURFACE**

<a id="ch5"></a>

## Select environments, data, and dependencies

*Production is faithful and risky. Staging is safer and different. Write down the differences.*

Production provides the most faithful behavior and the highest operational risk. Staging is safer but may differ in data, integrations, identity, configuration, or release version. Record those differences instead of describing one environment as “production-like.”

### Compare environments before choosing

| Question | Production | Test environment |
|---|---|---|
| Application version |  |  |
| Infrastructure and configuration match |  |  |
| Identity provider and role model match |  |  |
| API and integration behavior match |  |  |
| Customer data present |  |  |
| Monitoring and alerting active |  |  |
| Destructive test risk |  |  |
| Reset or recovery available |  |  |

If the test runs in production, identify safe synthetic accounts and records. If it runs in staging, state which findings may require a limited production confirmation and who can approve it. Never copy production customer data into a test environment merely to make the test realistic.

### Minimize sensitive data

The tester usually needs representative object relationships, not real customer content. Build synthetic records that show tenant, owner, state, and sensitivity without reproducing personal information. Record how test data is created, marked, reset, exported, and deleted.

Define evidence sanitization before testing. Screenshots, HTTP traces, logs, database results, model context, and files can contain tokens or customer data. State where raw evidence is stored, who can access it, how client-visible evidence is redacted, and when it is deleted.

### Map dependencies and failure paths

A workflow can depend on email, payment, identity, file processing, queues, analytics, model providers, or customer-managed endpoints. For each dependency, determine whether the tester may interact with the real service, a sandbox, a stub, or only the client-controlled integration code.

Do not send test emails, refunds, support messages, or webhooks to real recipients without explicit permission and controls. For a workflow that changes money or account access, define a synthetic or reversible path and a person who can stop or undo it.

> **Worksheet 09 · in the companion pack**
>
> **Environment and data plan.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

> **Worksheet 10 · in the companion pack**
>
> **Dependency boundary.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

---

**CHAPTER 06 · DESCRIBE THE TEST SURFACE**

<a id="ch6"></a>

## Define reconnaissance and discovery boundaries

*Finding an asset is not the same as being allowed to test it.*

Testing a known URL and discovering the broader attack surface are different tasks. State which one the engagement includes.

OWASP’s attack-surface guidance explains that applications can exist on non-obvious hosts or paths and that the rules of engagement determine whether discovery should extend beyond the listed URL.<sup>[9]</sup> Discovery can find forgotten assets, but it can also reach third-party systems or targets the client is not prepared to test.

### Choose the discovery model

- **Closed list:** only the exact listed targets may be contacted.
- **Passive discovery:** public records, certificates, DNS data, and archives may be reviewed without active requests to discovered targets.
- **Active discovery within a boundary:** the assessor may enumerate hosts, paths, ports, or APIs inside a defined domain, address range, cloud account, or application.
- **Discovery with approval gate:** newly identified targets are reported and tested only after written addition to the scope.

Define whether subdomains, virtual hosts, IP addresses, alternate ports, archived URLs, JavaScript-referenced APIs, mobile backend hosts, and cloud endpoints may be collected. Then state which can receive active requests.

### Handle newly discovered assets

Discovery never automatically expands authority. Use one of three outcomes:

1. Record the asset as an observation and do not test it.
2. Ask the owner to prove authority and issue a written scope change.
3. Stop and escalate if the asset appears sensitive, unstable, or owned by another party.

> **Worksheet 11 · in the companion pack**
>
> **Discovery rules.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

---

**PART III · CHAPTERS 7–9**

<a id="part6"></a>

# Make the engagement lawful and safe

*Written authority, rules of engagement, accounts and monitoring, and an honest list of what the test will not cover.*

---

**CHAPTER 07 · MAKE THE ENGAGEMENT LAWFUL AND SAFE**

<a id="ch7"></a>

## Write authorization and rules of engagement

*Testing stays locked until ownership, scope, timing, and constraints agree in writing.*

The rules of engagement turn the scope into permission and operating constraints. NIST defines them as detailed guidelines established before testing that give the test team authority to conduct the defined activities.<sup>[10]</sup> They should be approved by someone who can speak for the owner of every target.

An assessment request, purchase order, email introduction, or access credential is not automatically sufficient authority. The signed record should connect the legal parties, target identifiers, owner, allowed techniques, test window, and limits. If a customer wants a provider to test a system owned by its client, parent company, cloud customer, or integration partner, the permission chain must reach that owner.

![Figure 3. Testing stays locked until the four authorization conditions agree and a signed record is on file.](assets/fig-3.jpg)

*Figure 3. Testing stays locked until the four authorization conditions agree and a signed record is on file.*

### Name the authorizing parties

Record:

- The contracting client
- The legal or operational owner of each target
- The person granting permission and their authority
- The testing provider and named test lead
- Any hosting, platform, or third party whose rules apply
- Emergency contacts with authority to pause testing

If the owner is not the contracting client, attach the separate permission rather than summarizing it as “approved.”

### Define allowed actions by class

Do not rely on “standard penetration testing.” Mark which activities are allowed:

- Passive observation and public-source discovery
- Account creation and normal workflow use
- Request capture, replay, and parameter modification
- Authentication and authorization testing
- Automated crawling or scanning within rate limits
- File upload and parser testing with safe samples
- Controlled injection and command-execution proof
- Privilege escalation within client-owned systems
- Cloud identity and configuration review
- Mobile instrumentation or binary analysis
- Source-code review
- AI prompt, retrieval, memory, and tool tests
- Controlled changes to synthetic records
- Limited production confirmation

For actions that could change data, send messages, move money, affect availability, trigger fraud controls, or reach another tenant, record the safe method and approval condition.

### Write prohibited actions plainly

Common exclusions include:

- Denial-of-service and load testing
- Destructive data modification
- Persistence beyond what is required to prove impact
- Access to real customer records
- Social engineering or employee targeting
- Testing third-party services
- Using exposed credentials that do not belong to the client’s test identities
- Malware deployment
- Physical access attempts
- Lateral movement outside the named boundary
- Contacting real customers or suppliers

Cloud-provider rules may prohibit actions even when the client requests them. Azure’s current rules, for example, prohibit denial-of-service testing and testing another tenant. AWS requires prior approval for command-and-control activity and prohibits testing AWS services themselves.<sup>[6]</sup><sup>[7]</sup> The engagement record should preserve the policy version or access date used during planning.

### Set time and traffic controls

State the time zone, start, end, maintenance windows, blackout periods, and whether passive work may continue outside the active window. Record assessor source IP addresses or other identifiers when monitoring teams need them. Define concurrency, requests per second, scanner intensity, file size, test-account limits, and budgets for paid APIs or AI model calls.

Rate limits should match the weakest in-scope dependency, not the fastest endpoint. A login, search, export, payment, or model workflow may have different safe rates.

### Establish stop conditions

Testing should pause when:

- Service health crosses an agreed threshold.
- Unexpected real customer data appears.
- A test reaches an unapproved system or tenant.
- A destructive action occurs or becomes likely.
- Monitoring reports abnormal impact.
- The authorization window expires.
- A critical vulnerability requires immediate containment.
- The client or provider stop contact invokes the agreed phrase or channel.

Record who can stop the engagement, how they contact the test lead, and what evidence is preserved after a stop. A pause should not be treated as a failed test. It is a controlled response to a condition named in advance.

> **Worksheet 12 · in the companion pack**
>
> **Rules of engagement.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

**Authorization release check**

- [ ] Every active target has a proved owner.
- [ ] The approver can grant authority for those targets.
- [ ] Third-party and cloud-provider conditions were checked.
- [ ] Allowed and prohibited actions are explicit.
- [ ] Dates, times, time zone, and source addresses are recorded.
- [ ] Rate and cost limits are recorded.
- [ ] Stop contacts and conditions are tested or confirmed.
- [ ] The signed authorization references the same scope version the assessor will use.

---

**CHAPTER 08 · MAKE THE ENGAGEMENT LAWFUL AND SAFE**

<a id="ch8"></a>

## Prepare accounts, access, and monitoring

*Most first-week delays come from missing accounts and blocked access, not from the testing itself.*

Access should be sufficient to test the intended roles without granting unrelated power. Create dedicated test accounts. Do not reuse employee credentials or send passwords through the workbook.

### Build the account set from the role matrix

Each required role should have a test identity with known ownership and synthetic data. For tenant testing, maintain equivalent users in at least two tenants. Record any account that carries global, support, billing, or infrastructure permissions separately.

If MFA, federation, device trust, IP allowlisting, or invitation workflows apply, decide whether the test evaluates those controls or uses an approved bypass. A bypass that is necessary for access becomes a report limitation if it prevents the assessor from testing the real control.

### Separate credential delivery

Record account names and required roles in the scope. Deliver passwords, recovery codes, private keys, and tokens through the agreed secret channel after authorization. Set an owner and expiry for every testing secret. Revoke or rotate them when the engagement closes.

### Prepare monitoring without hiding the test

The operations team should know the test window and stop procedure. Whether defenders know the exact actions depends on the engagement goal. A normal application assessment usually favors safe coordination. A detection exercise may intentionally limit foreknowledge, but that choice belongs in the rules of engagement.

Record the logs and alerts expected during testing. If a critical action cannot be tied to an identity and timestamp, the engagement may reveal an evidence gap even when the action itself was authorized.

> **Worksheet 13 · in the companion pack**
>
> **Access readiness checklist.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

---

**CHAPTER 09 · MAKE THE ENGAGEMENT LAWFUL AND SAFE**

<a id="ch9"></a>

## State exclusions, limits, and unknowns

*A specific limitation helps the reader. A generic disclaimer does not.*

Every assessment has limits. Hiding them makes the report look broader than the work.

### Distinguish an exclusion from a limitation

An **exclusion** is a deliberate boundary: a third-party payment service is not tested. A **limitation** reduces coverage inside the intended boundary: the client could not provide an administrator account, so administrator-only workflows were not tested. An **unknown** has not been resolved: ownership of an old subdomain remains unclear.

Record all three. State the likely effect on assurance. “Mobile application excluded” is clear. “The backend API was tested through browser-observed calls only; unreferenced endpoints may remain untested” explains residual uncertainty.

### Avoid generic disclaimers

“No test can find every issue” is true but not specific enough. Useful limits name the missing access, unavailable environment, untested role, blocked technique, time constraint, or system difference.

Examples:

- Production payment settlement was excluded; sandbox behavior may differ.
- The test did not include source code, so findings based on internal code paths may remain undiscovered.
- Rate limits prevented high-volume resource-consumption testing.
- The client supplied one customer role; support and administrator workflows were not tested.
- Third-party model infrastructure was outside the client’s authority; testing stopped at the client-controlled API boundary.

> **Worksheet 14 · in the companion pack**
>
> **Exclusion, limitation, and unknown register.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

---

**PART IV · CHAPTERS 10–12**

<a id="part7"></a>

# Agree on the output

*What a finding must contain, how fixes are retested, and who is responsible for each decision.*

---

**CHAPTER 10 · AGREE ON THE OUTPUT**

<a id="ch10"></a>

## Set evidence and reporting requirements

*Agree what a finding must contain before anyone writes one.*

A report should prove what was observed, connect the observation to a broken rule, explain material impact, and give the owner a specific correction. Tool output without validation is not a finding.

OWASP’s current testing introduction describes useful reporting as reproducible, actionable, severity-ranked, and understandable to technical and business readers.<sup>[2]</sup> NIST SP 800-115 also connects testing to analysis and mitigation rather than stopping at discovery.<sup>[1]</sup>

### Define the evidence unit

For each confirmed finding, require:

- Finding identifier and plain-language title
- Affected target, release, endpoint, role, and tenant
- Expected security rule
- Preconditions and test identity
- Reproduction steps
- Sanitized request, action, log, or trace
- Observed result
- Business and technical impact
- Severity and rationale
- Recommended correction
- Owner and remediation state
- Retest result and evidence when performed

Evidence should prove the server-side or downstream result. A browser message may not prove a record changed. A model response may not prove a tool ran. A scanner alert may not prove exploitability. Capture the authoritative state where the system made or recorded the decision.

### Agree on severity language

Decide whether the report uses qualitative ratings, CVSS, a client risk matrix, or a combination. FIRST’s CVSS specification provides a standardized way to describe vulnerability severity, but business priority can still depend on asset value, exposure, data, and compensating controls.<sup>[11]</sup> Do not promise that one numeric score will settle every remediation decision.

Record who can change a severity rating and what evidence is required. Separate technical severity from remediation priority when the client’s business context calls for it.

### Protect sensitive evidence

Require redaction of passwords, session tokens, private keys, customer content, and unnecessary personal data. Decide whether raw evidence stays only in the assessor’s restricted store, whether the client receives a sanitized version, and how long both copies remain available.

Reports should carry a classification and an authorized distribution list. If customers will receive a summary, define whether it is a separate redacted report, an executive letter, or a controlled portal copy. Do not assume a full technical report can be forwarded without restriction.

### Define report versions and acceptance

Typical versions are:

1. Draft for factual review
2. Final initial report
3. Retest report or updated final report

The client may correct factual errors, target names, owners, or reproduction details. It should not remove a supported finding merely because the fix is inconvenient. Record the dispute and review process before it is needed.

> **Worksheet 15 · in the companion pack**
>
> **Finding acceptance criteria.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

> **Worksheet 16 · in the companion pack**
>
> **Report acceptance criteria.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

---

**CHAPTER 11 · AGREE ON THE OUTPUT**

<a id="ch11"></a>

## Define remediation and retesting

*“Ready for retest” and “fixed and verified” are different states with different evidence.*

Client remediation and assessor verification are different events. A development team can report that a change was deployed. Only a retest shows how the corrected system behaved under the recorded scenario.

![Figure 4. “Ready for retest” means the client believes the fix is deployed. “Verified” requires new assessor evidence.](assets/fig-4.jpg)

*Figure 4. “Ready for retest” means the client believes the fix is deployed. “Verified” requires new assessor evidence.*

### Keep review and remediation states separate

Finding review states can include Draft, Needs Review, Confirmed, and Rejected. Remediation states can include Open, In Progress, Ready for Retest, Fixed and Verified, Risk Accepted, and Not Reproducible. Mixing them creates false closure. A confirmed finding can still be open. A rejected result is not a fixed vulnerability.

### Define the retest unit

The retest should name:

- The original finding and evidence
- The corrected release or configuration
- The original reproduction scenario
- Any additional regression checks
- The environment and test identity
- The observed corrected result
- Residual or partial risk
- Reviewer and verification date

A narrow retest confirms the agreed correction. It is not automatically a new full assessment. If the fix changes architecture, permissions, workflows, or dependencies, the parties may need a revised scope.

### Set commercial and timing terms

State how many retest rounds are included, how long they remain available, expected scheduling notice, and what counts as a new finding or new scope. Record whether the client must resolve all findings before the retest or may submit them in groups.

> **Worksheet 17 · in the companion pack**
>
> **Retest agreement.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

---

**CHAPTER 12 · AGREE ON THE OUTPUT**

<a id="ch12"></a>

## Fix the schedule and responsibilities

*Name a person for every decision that could stop the test.*

Most engagement delays come from access, authorization, unavailable owners, unstable environments, and late factual review. The operating plan should make those dependencies visible.

### Name contacts by responsibility

Use roles, names, and backup contacts for:

- Executive scope owner
- Technical product owner
- Environment or cloud owner
- Identity and access owner
- Security monitoring contact
- Privacy or data contact
- Third-party integration owner
- Assessor test lead
- Assessor reviewer
- Emergency stop contact

### Set decision points

Recommended milestones include scope approval, signed authorization, access verification, test start, midpoint review, urgent-finding notification, testing end, draft report, factual review close, final report, remediation submission, and retest.

Define the channel for routine updates and a separate channel for critical issues or stop instructions. Record whether a critical finding is reported immediately and who may receive it.

> **Worksheet 18 · in the companion pack**
>
> **Engagement operating plan.** Use the printable or editable version from the [companion worksheet pack](#worksheets).

---

**PART V · CHAPTERS 13–14**

<a id="part8"></a>

# Issue the scope

*Assemble the statement of work, then follow one complete scope for a multi-tenant SaaS platform.*

---

**CHAPTER 13 · ISSUE THE SCOPE**

<a id="ch13"></a>

## Assemble the statement of work

*Turn the worksheets into a one-page scope brief and a change-control rule.*

The completed workbook is planning material. The statement of work and signed rules of engagement are the controlling engagement records. Transfer the final decisions without reducing them to a vague paragraph.

### One page scope brief

#### Assessment identity

| Field | Final value |
|---|---|
| Client and product |  |
| Assessment type |  |
| Primary decision |  |
| Scope version |  |
| Test window and time zone |  |
| Assessor |  |

#### In-scope targets

| Target ID | Exact identifier | Environment | Coverage module | Owner |
|---|---|---|---|---|
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

#### Critical coverage

| Workflow or rule | Roles and tenants | Required test outcome | Priority |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

#### Boundaries

| Item | Final value |
|---|---|
| Discovery model |  |
| Allowed active techniques |  |
| Data-changing actions |  |
| Prohibited actions |  |
| Rate and concurrency limits |  |
| Stop conditions |  |
| Material exclusions |  |

#### Deliverables

| Deliverable | Format | Due | Acceptance owner |
|---|---|---|---|
| Draft report |  |  |  |
| Final report |  |  |  |
| Customer-shareable summary |  |  |  |
| Retest output |  |  |  |

### Scope change control

Define how changes are proposed, approved, priced, and added to the authorization. A new hostname, environment, tenant, workflow, or test technique may change effort and risk. The assessor should not test it first and seek approval later.

A scope change record should contain:

- Requested change and reason
- New or removed targets
- Coverage and timing effect
- Additional access or data
- New provider rules or third-party rights
- Price or schedule change
- Updated scope version
- Named client and assessor approvals

**Final issue checklist**

- [ ] The scope brief matches the detailed workbook.
- [ ] Exact target identifiers are included.
- [ ] Roles, tenants, and critical workflows are named.
- [ ] The environment and release are identified.
- [ ] Discovery rules are clear.
- [ ] Allowed and prohibited actions are clear.
- [ ] Authorization covers every target and action.
- [ ] Access and test data are ready.
- [ ] Evidence, report, severity, and retest terms are agreed.
- [ ] Exclusions and limitations will appear in the report.
- [ ] The client and assessor approved the same version.

---

**CHAPTER 14 · ISSUE THE SCOPE**

<a id="ch14"></a>

## Worked example: a multi-tenant SaaS platform

*A complete scope for Example Support App, a fictional platform with a customer portal, public API, support console, and AI support agent.*

This example uses a fictional support platform. No client systems or customer data are represented.

### Product description

Example Support App lets a company’s customers view orders and request refunds through a browser portal. Each customer belongs to one tenant. Customer administrators can invite team members. Internal support staff can search assigned customers. An AI support agent can look up orders through the same API and can prepare, but not approve, refund requests.

The application is preparing for an enterprise launch. The buyer requested a current penetration-test report. Engineering also wants proof that the AI agent cannot cross tenant boundaries or issue a refund without approval.

### Completed decision brief

| Field | Example response |
|---|---|
| Primary business decision | Determine whether a customer or AI support agent can access another tenant’s order or cause an unapproved refund before enterprise launch. |
| Trigger | Enterprise buyer requested an independent application penetration test. |
| Deadline | Final report due 15 December 2026 for buyer review. |
| Relying audiences | Engineering, product leadership, buyer security team. |
| Required output | Technical report, executive summary, evidence for confirmed findings, and one retest round. |
| Success | Agreed web, API, role, tenant, and AI tool workflows tested; limitations stated; verified retest recorded. |
| Non-claim | The engagement does not issue a SOC 2 opinion or certify the product. |

### Completed asset register

| ID | Asset | Identifier | Owner | Environment | State | Coverage |
|---|---|---|---|---|---|---|
| A-01 | Customer web portal | https://app.example.test | Example Support App | Staging | In scope | Web application |
| A-02 | Public product API | https://api.example.test/v1 | Example Support App | Staging | In scope | API |
| A-03 | Administration console | https://admin.example.test | Example Support App | Staging | Conditional | Support role only |
| A-04 | AI orchestration service | https://agent.example.test | Example Support App | Staging | In scope | AI workflow |
| A-05 | Payment sandbox | Provider sandbox account | Payment provider | Sandbox | Boundary only | Client integration calls only |
| A-06 | Production application | https://app.example.com | Example Support App | Production | Out of scope | No active testing |

### Completed role and tenant plan

| Role | Tenant | Allowed behavior | Prohibited behavior | Test account |
|---|---|---|---|---|
| Customer user A | Tenant A | Read Tenant A orders | Read or change Tenant B orders | Ready |
| Customer admin A | Tenant A | Invite Tenant A members | Administer Tenant B | Ready |
| Customer user B | Tenant B | Read Tenant B orders | Read or change Tenant A orders | Ready |
| Support user | Assigned tenants | Search assigned customers | Search unassigned customer | Ready |
| AI support agent | Calling user context | Look up caller-owned order | Cross-tenant lookup or direct refund approval | Ready |

Synthetic orders are named ORDER-A-101, ORDER-A-102, and ORDER-B-204. The names make ownership visible in evidence. No real addresses, names, or payment details are used.

### Completed critical workflows

| ID | Workflow | Expected rule | Priority |
|---|---|---|---|
| W-01 | View order detail | API verifies the requesting user belongs to the order’s tenant. | Critical |
| W-02 | Export order history | Export contains only the caller’s tenant records. | High |
| W-03 | Invite member | Only a customer administrator can invite a member to its own tenant. | High |
| W-04 | Support search | Support user reaches only explicitly assigned tenants. | High |
| W-05 | AI order lookup | Agent carries the caller’s identity and cannot substitute another tenant’s order ID. | Critical |
| W-06 | Refund request | Agent may prepare a request; server requires customer confirmation and staff approval before execution. | Critical |

### Completed rules of engagement summary

| Field | Example agreement |
|---|---|
| Window | 1–10 December 2026, 09:00–18:00 America/New_York |
| Source | Two assessor VPN egress addresses listed in signed authorization |
| Allowed | Request capture and modification, web/API authorization testing, safe injection tests, synthetic file uploads, AI prompt and tool tests |
| Automated traffic | Maximum five requests per second; authentication endpoints limited to one request per second |
| Data changes | Synthetic invitations and refund requests in staging; all records reset nightly |
| Prohibited | Production requests, denial of service, real customer contact, payment-provider testing, persistence, third-party credential use |
| Stop conditions | Real customer data, unexpected production traffic, staging error rate above agreed threshold, third-party boundary crossed |
| Escalation | Dedicated client and assessor channel; critical confirmed findings reported immediately |

### Example finding acceptance criteria

A cross-tenant order finding must show the calling identity, requested order, expected tenant rule, sanitized request, server response, and proof that another tenant’s record was returned. A model statement such as “I found the order” is insufficient unless the downstream API response or state proves access.

For a refund finding, evidence must show whether a refund record was created, which identity authorized it, whether approval was required, and whether the payment sandbox received a request. The test stops at the client-controlled sandbox integration boundary.

### Example retest

The initial test records HTTP 200 when Customer A requests ORDER-B-204. Engineering adds an order-ownership check and deploys release 2026.12.12-rc2. The retest repeats the same authenticated request and records HTTP 403 with no order data in the response or application logs. A reviewer signs the new evidence and changes the remediation state to Fixed and Verified. The original finding and evidence remain in report history.

---

**TOOLS · COMPANION DOWNLOAD**

<a id="worksheets"></a>

# The companion worksheet pack

*The 20 worksheets referred to in this guide are a separate download, so you can print them, fill them in, and share them with your team without copying pages out of the book.*

Download the pack from the same page as this guide in the Sthuthi Securities resource library at [sthuthi-tech.com](https://sthuthi-tech.com). It comes in three formats:

- **Printable PDF.** Each worksheet starts on a new A4 page, with lined fields for writing by hand.
- **Editable Word document.** The same worksheets as fill-in tables you can type into.
- **Excel workbook.** One tab per worksheet, with registers set up as working trackers.

| # | Worksheet | Use with |
|---|---|---|
| 01 | Assessment decision brief | Chapter 1 |
| 02 | Asset register | Chapter 2 |
| 03 | Ownership and authority record | Chapter 2 |
| 04 | Identity and role matrix | Chapter 3 |
| 05 | Tenant test design | Chapter 3 |
| 06 | Critical workflow inventory | Chapter 3 |
| 07 | Coverage module selection | Chapter 4 |
| 08 | API inventory | Chapter 4 |
| 09 | Environment and data plan | Chapter 5 |
| 10 | Dependency boundary | Chapter 5 |
| 11 | Discovery rules | Chapter 6 |
| 12 | Rules of engagement | Chapter 7 |
| 13 | Access readiness checklist | Chapter 8 |
| 14 | Exclusion, limitation, and unknown register | Chapter 9 |
| 15 | Finding acceptance criteria | Chapter 10 |
| 16 | Report acceptance criteria | Chapter 10 |
| 17 | Retest agreement | Chapter 11 |
| 18 | Engagement operating plan | Chapter 12 |
| 19 | Vendor proposal scorecard | Appendix B |
| 20 | Scope completion record | Chapter 13 |

---

**APPENDIX A · REFERENCE**

<a id="appendix-a"></a>

# Master pre-test checklist

*Run this list the day before active testing begins.*

**Decision and scope**

- [ ] Primary decision written
- [ ] Deadline and relying audience named
- [ ] Exact targets listed
- [ ] Owners proved
- [ ] Environment and release recorded
- [ ] Coverage modules selected
- [ ] Critical workflows prioritized

**Roles and access**

- [ ] Required roles inventoried
- [ ] Two test tenants prepared where applicable
- [ ] Lifecycle states included
- [ ] Accounts and synthetic records ready
- [ ] Credentials have a secure delivery path
- [ ] Secrets have expiry and cleanup owners

**Safety and authority**

- [ ] Written authorization signed
- [ ] Third-party permissions checked
- [ ] Cloud-provider rules checked
- [ ] Test window and source addresses recorded
- [ ] Rate limits recorded
- [ ] Prohibited actions recorded
- [ ] Stop contacts and conditions confirmed

**Evidence and delivery**

- [ ] Evidence fields agreed
- [ ] Redaction and retention agreed
- [ ] Severity method agreed
- [ ] Draft and final dates agreed
- [ ] Distribution list agreed
- [ ] Retest rounds and timing agreed
- [ ] Limitations will be stated in the report

---

**APPENDIX B · REFERENCE**

<a id="appendix-b"></a>

# Vendor proposal comparison scorecard

*Compare proposals on what they will actually test, not on page count.*

Score each item from 0 to 3: 0 absent, 1 weak, 2 acceptable, 3 strong. Multiply the score by the weight. Do not select a provider from the total alone; unresolved authority, data-handling, or tester-quality concerns can disqualify a proposal.

| Criterion | Weight | Vendor A | Vendor B | Vendor C | Evidence or concern |
|---|---|---|---|---|---|
| Scope reflects named systems and workflows | 5 |  |  |  |  |
| Manual authorization and business-logic testing | 5 |  |  |  |  |
| Qualified named test lead and reviewer | 4 |  |  |  |  |
| Clear rules of engagement | 5 |  |  |  |  |
| Evidence and reproduction quality | 5 |  |  |  |  |
| Report serves engineers and executives | 4 |  |  |  |  |
| Data handling and retention | 5 |  |  |  |  |
| Retesting terms | 4 |  |  |  |  |
| Schedule and access dependencies | 3 |  |  |  |  |
| Transparent exclusions and assumptions | 4 |  |  |  |  |
| Price and change-control terms | 3 |  |  |  |  |
| Relevant application or industry experience | 3 |  |  |  |  |

---

**APPENDIX C · REFERENCE**

<a id="appendix-c"></a>

# Glossary

*Terms as they are used in this guide.*

**Active testing:** Requests or actions sent to a target to evaluate security behavior.

**Attack surface:** Reachable systems, interfaces, inputs, identities, and trust relationships that can affect security.

**Authorization:** Permission from an owner for named parties to perform defined testing against defined targets.

**Business logic:** Product rules governing state, eligibility, price, ownership, approval, sequence, or another business decision.

**Coverage:** The systems, roles, workflows, test classes, and techniques included in the assessment.

**Evidence:** A sanitized record that supports what the assessor observed, including relevant identity, request or action, response or state, time, and target version.

**Exclusion:** A deliberate item outside the assessment.

**Finding:** A reviewed security issue supported by evidence, impact, and an expected rule.

**Horizontal authorization:** Access between users or tenants at a similar privilege level.

**Limitation:** A condition that reduces the depth, breadth, or confidence of the assessment.

**Passive discovery:** Collection of public or already available information without active requests to the discovered target.

**Penetration test:** An authorized technical assessment that attempts to identify and validate exploitable security weaknesses within an agreed boundary.

**Ready for retest:** A client state indicating that a correction is believed to be deployed. It is not proof of resolution.

**Retest:** Repetition of the relevant recorded scenario against a corrected system to collect new evidence.

**Rules of engagement:** The detailed permissions and constraints governing how the security test will run.

**Scope change:** A documented addition, removal, or modification to targets, techniques, timing, access, or outputs.

**Stop condition:** A defined event that requires testing to pause or end.

**Tenant:** A customer, organization, workspace, or another logical boundary intended to isolate identities and data.

**Vertical authorization:** Access from a lower-privilege identity into a higher-privilege function or record.

---

**SOURCES · REFERENCE**

<a id="sources"></a>

# Sources

Sources were accessed in November 2026. Provider rules and standards can change. Recheck the current controlling document during each engagement.

1. National Institute of Standards and Technology. *Technical Guide to Information Security Testing and Assessment, NIST SP 800-115.* [https://csrc.nist.gov/pubs/sp/800/115/final](https://csrc.nist.gov/pubs/sp/800/115/final)
2. OWASP Foundation. *Web Security Testing Guide.* [https://wstg.owasp.org/](https://wstg.owasp.org/)
3. OWASP Foundation. *Map Application Architecture, WSTG-INFO-10.* [https://wstg.owasp.org/latest/4-Web_Application_Security_Testing/01-Information_Gathering/10-Map_Application_Architecture/](https://wstg.owasp.org/latest/4-Web_Application_Security_Testing/01-Information_Gathering/10-Map_Application_Architecture/)
4. OWASP Foundation. *Bypassing Authorization Schema, WSTG-ATHZ-02.* [https://wstg.owasp.org/latest/4-Web_Application_Security_Testing/05-Authorization/02-Bypassing_Authorization_Schema/](https://wstg.owasp.org/latest/4-Web_Application_Security_Testing/05-Authorization/02-Bypassing_Authorization_Schema/)
5. OWASP Foundation. *OWASP API Security Top 10 2023.* [https://api-security.owasp.org/](https://api-security.owasp.org/)
6. Amazon Web Services. *AWS Customer Support Policy for Penetration Testing.* [https://aws.amazon.com/security/penetration-testing/](https://aws.amazon.com/security/penetration-testing/)
7. Microsoft. *Penetration testing on Azure.* [https://learn.microsoft.com/en-us/azure/security/fundamentals/pen-testing](https://learn.microsoft.com/en-us/azure/security/fundamentals/pen-testing)
8. Google Cloud. *Cloud Security FAQ, penetration testing.* [https://support.google.com/cloud/answer/6262505](https://support.google.com/cloud/answer/6262505)
9. OWASP Foundation. *Attack Surface Identification.* [https://wstg.owasp.org/latest/4-Web_Application_Security_Testing/01-Information_Gathering/04-Attack_Surface_Identification/](https://wstg.owasp.org/latest/4-Web_Application_Security_Testing/01-Information_Gathering/04-Attack_Surface_Identification/)
10. National Institute of Standards and Technology. *Rules of Engagement glossary definition.* [https://csrc.nist.gov/glossary/term/Rules_of_Engagement](https://csrc.nist.gov/glossary/term/Rules_of_Engagement)
11. Forum of Incident Response and Security Teams. *Common Vulnerability Scoring System version 4.0 specification.* [https://www.first.org/cvss/v4.0/specification-document](https://www.first.org/cvss/v4.0/specification-document)
12. OWASP Foundation. *Application Security Verification Standard.* [https://asvs.owasp.org/](https://asvs.owasp.org/)
13. OWASP Foundation. *Mobile Application Security Verification Standard.* [https://mas.owasp.org/MASVS/](https://mas.owasp.org/MASVS/)
14. PCI Security Standards Council. *Document Library.* [https://www.pcisecuritystandards.org/document_library/](https://www.pcisecuritystandards.org/document_library/)

---

**ABOUT · STHUTHI SECURITIES**

<a id="about"></a>

# About the author

**Shalini Tomar** is the CEO of Sthuthi Technologies, LLC, and leads its cybersecurity practice, Sthuthi Securities. She works with SaaS teams that need to show enterprise buyers clear, scoped, and current evidence of how their products are secured.

# About Sthuthi Securities

Sthuthi Securities is the cybersecurity practice of Sthuthi Technologies, LLC. It tests web applications, APIs, cloud systems, and AI agents, then helps teams fix and retest what it finds. Engagements are scoped in writing and authorized by the system owner, and they end with findings and evidence a buyer’s reviewer can use.

Penetration testing

Web application, API, and cloud testing with clear scope and safe rules of engagement.

AI security assessment

Tool permissions, tenant isolation, and prompt-injection testing for AI agents.

Remediation support

Working with your engineers to fix the cause, not just the symptom.

Retesting and evidence

Independent verification and summary letters you can share with buyers.

More field guides at sthuthi-tech.com

Passing enterprise security reviews · The first 90 days of a security program · Preparing for a customer audit · Repeatable testing · AI security for support agents · Security proof for enterprise deals

---
