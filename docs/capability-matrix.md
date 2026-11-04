# Capability matrix

| Capability | Status | Current behavior |
|---|---|---|
| Public service and pricing site | Implemented | Ten services share one structured catalog. |
| Assessment intake | Implemented locally | Server validation, rate limit, JSON persistence, separate notification status. |
| Client workspace | Demo-only | Labeled Example Support App data; no production targets. |
| Internal delivery console | Demo-only | Shows workflow and provider truth states. |
| Synthetic support-agent adapter | Implemented | Two fake customers, fake order, vulnerable and corrected authorization paths. |
| Scope and test-window gate | Implemented in domain | Signed record, allowlist, active window, cancel behavior. |
| Evidence provenance | Implemented in domain | Test/tool versions, trace, outcome, rule, digest, limits, reviewer. |
| Role and tenant authorization | Implemented in domain | Covered by behavior tests; live identity provider not connected. |
| Finding and remediation transitions | Implemented in domain | Review and remediation histories stay separate. |
| PostgreSQL, queue, isolated workers | Unconnected | Required before live client delivery. |
| Identity, MFA, invitations | Unconnected | Demo link only; no fake sign-in confirmation. |
| Private object storage and secrets | Unconnected | No credentials accepted in messages or intake. |
| Payment | Unconnected | Manual status is visible; no checkout or real invoices. |
| Email, calendar, ticketing | Unconnected | Stored request does not claim notification or booking. |
| External scanners and model providers | Disabled | Adapter boundary documented; no production calls. |
| vCISO and social-engineering services | Availability-gated | Not offered until qualified lead/consent operations exist. |

## Owner operations needed before sale

The owner must establish signed authorization and rules-of-engagement templates, qualified assessors and reviewers, professional and cyber insurance, legal terms, incident handling, evidence retention, secure access exchange, provider contracts, payment and notification configuration, and documented personnel/data regions. Availability-gated services require a named qualified lead or a complete consent and HR process before they are offered.
