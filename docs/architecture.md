# Architecture and operating boundaries

## Request and delivery path

Public site → application API and server authorization → tenant-aware project records → scoped job → isolated runner → signed and allowlisted target → evidence store → human review → versioned report → remediation → retest.

The repository implements the public UI, local API, intake persistence, role and tenant rules, scope gates, synthetic runner, evidence records, review/remediation transitions, and a deterministic retest. Production persistence and external providers are not configured.

## Adapter contract

Every future scanner, model provider, or client API adapter must declare:

- capabilities and exact actions;
- required access and secret references;
- data destinations and personnel regions;
- expected variable costs;
- request, time, concurrency, and target limits;
- cancellation and partial-result behavior;
- version and evidence-provenance fields.

Business logic may not rely on one model vendor. LLM output can suggest cases or draft text; deterministic checks plus human investigation establish consequential findings.

## Network safety

The synthetic adapter has no network access. Any future URL adapter must resolve DNS before and after redirects, block loopback, private, link-local, multicast, and cloud-metadata ranges by default, cap redirects and response size, and re-check the resolved address on every hop. Private-network tests require a separately configured customer-side runner and a signed scope decision.

## Authorization

Client roles are owner, engineer, and viewer. Delivery roles are assigned assessor, reviewer, and administrator. Organization checks apply before engagement or evidence reads. A reviewer is required for confirmation and fixed-and-verified status. Only an owner or administrator may accept risk. Testing requires a signed authorization, named target, and active window.

## Production work still required

- PostgreSQL migrations and row-level tenant protection
- established authentication, MFA, session rotation, and invitation delivery
- private object storage, antivirus/quarantine, retention, deletion, and backup processes
- external secret manager with encrypted references
- isolated queue workers and hardened runner images
- audit-event storage and alerts
- provider webhook verification and idempotency
- legal and owner review of privacy, terms, authorization, and rules-of-engagement templates
