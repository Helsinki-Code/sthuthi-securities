---
title: "ISO 27001 Penetration Testing Requirements (2027 Guide)"
meta_description: "Does ISO 27001 require penetration testing? The honest answer, what Annex A 8.8 actually requires, what a credible pentest needs to show, and what it costs."
primary_keyword: "ISO 27001 penetration testing requirements"
secondary_keywords: ["does ISO 27001 require penetration testing", "ISO 27001 Annex A 8.8", "ISO 42001 penetration testing"]
intent: Commercial — compliance and security leads preparing for certification or a surveillance audit
author: "Sthuthi Securities"
reviewedBy: "Sthuthi Securities Testing Team"
datePublished: "2026-11-04"
dateModified: "2026-11-04"
status: draft — verify external links resolve; wire internal links once site is built; FAQPage JSON-LD at bottom is build-ready
---

# ISO 27001 Penetration Testing Requirements (2027 Guide)

*Reviewed by the Sthuthi Securities testing team · Last reviewed: November 2026*

> **Key stats:** ISO 27001 names **no** explicit penetration-testing mandate — Annex A 8.8 lists it as one accepted method among several · Most organizations run one anyway because auditors expect the evidence in practice.

**On this page:** [What Annex A 8.8 requires](#what-annex-a-88-actually-requires) · [Why auditors ask anyway](#why-auditors-ask-for-a-pentest-even-though-the-standard-doesnt-name-one-explicitly) · [vs SOC 2](#how-this-compares-to-soc-2) · [What a credible test needs](#what-a-credible-iso-27001-pentest-needs-to-include) · [What happens if you skip it](#what-happens-if-you-skip-it) · [Cost](#how-much-it-costs-and-how-long-it-takes) · [FAQ](#faq)

*Last verified: Q1 2027.*

**Short answer: ISO 27001 does not contain a single line that says "you must run a penetration test." It contains a control — Annex A 8.8, Management of Technical Vulnerabilities — that requires you to identify technical vulnerabilities on a documented, risk-based schedule, and penetration testing is the most common and most credible way auditors expect you to satisfy it.** Most organizations that certify end up running one anyway, not because the standard names it, but because explaining to an auditor how else you'd generate credible vulnerability evidence gets harder every year.

## What Annex A 8.8 actually requires

Annex A 8.8 asks organizations to "strive to identify technical vulnerabilities" through a defined set of activities, including:

- Maintaining a current, accurate asset inventory — software versions, deployment locations, vendors, and application names
- Using vulnerability scanning tools and patch management
- Requiring suppliers to disclose known weaknesses in new systems before deployment
- Prioritizing fixes for high-risk and business-critical systems
- Testing patches before deploying to production
- Documenting interim mitigations when no fix is available yet
- Keeping an audit trail and periodically reviewing the whole vulnerability-management process

Penetration testing appears explicitly in the guidance as one accepted method: performing "periodic, documented penetration tests, either by internal staff or by an authenticated third party." It's listed alongside vulnerability scanning, not instead of it — the two aren't interchangeable in an auditor's eyes. ([isms.online](https://isms.online/iso-27001/annex-a/8-8-management-of-technical-vulnerabilities-2022))

## Why auditors ask for a pentest even though the standard doesn't name one explicitly

Certification bodies and ISMS auditors look for evidence that you *actually* identify vulnerabilities, not just that you have a policy saying you will. A vulnerability scan alone — automated, unauthenticated, surface-level — is weak evidence against sophisticated application-layer or logic flaws. A documented, scoped penetration test with a named tester, a dated report, and remediation evidence is the strongest artifact you can put in front of an auditor for this control, and it's become close to a de facto expectation for any organization running a real production application.

## How this compares to SOC 2

ISO 27001 and SOC 2 ask a similar underlying question — "do you find and fix vulnerabilities on a documented cadence" — through different controls (Annex A 8.8 here, CC4.1/CC7.1 under SOC 2). If you need both certifications, one well-scoped annual penetration test with a report dated and retained properly can usually serve as evidence for both, which is worth raising with whoever is running your dual-framework program. See our [SOC 2 penetration test guide](/blog/soc2-penetration-test/) for the SOC 2 side of this.

## What a credible ISO 27001 pentest needs to include

| Requirement | What auditors look for |
|---|---|
| Scope | Named systems/applications in scope, matched to your ISMS boundary |
| Tester independence | Internal staff or an authenticated third party — a named tester, not an anonymous tool run |
| Methodology | A recognized standard (OWASP WSTG for web apps, PTES, or similar) |
| Cadence | Documented, periodic — annual is the common baseline; higher-risk systems more often |
| Findings and remediation | Dated report, severity ratings, fix evidence, and ideally a retest |
| Supporting process | Asset inventory, vulnerability scanning, and patch management running alongside the pentest, not instead of it |

## What happens if you skip it

Nothing stops you from certifying without a formal pentest if you can demonstrate equivalent rigor through scanning and other technical controls — the standard genuinely doesn't mandate it by name. In practice, most auditors treat its absence as a gap they'll flag, and most enterprise customers' own security questionnaires ask for a pentest report directly regardless of what your ISO certificate covers. Skipping it to save cost on certification often just moves the cost to a stalled enterprise deal later. See our [security questionnaire guide](/blog/security-questionnaire-help/) for how often this actually comes up post-certification.

## How much it costs and how long it takes

A scoped application or infrastructure penetration test to support ISO 27001 typically runs in the same range as a SOC 2-driven test — the audit framework doesn't change the technical work, just which report template cites it. Expect a similar cost range to what we break down in our [penetration testing cost guide](/blog/ai-security-assessment-cost/), adjusted for the number of applications and environments in your ISMS scope. Sthuthi Securities runs standard application/API penetration testing from $12,000, and a dedicated **compliance readiness** engagement from $15,000 that covers ISO 27001 (and SOC 2, ISO 42001, HIPAA) gap assessment, prioritized remediation, and questionnaire support alongside the technical test.

## FAQ

**Does ISO 27001 require an annual penetration test?**
Not by that exact name. Annex A 8.8 requires periodic, documented identification of technical vulnerabilities, and lists penetration testing as an accepted method. Annual is the common interval auditors expect to see, but the standard leaves the cadence risk-based.

**Can I use a vulnerability scan instead of a pentest for ISO 27001?**
You can submit it as partial evidence, but scanning and penetration testing are listed as separate, complementary activities under 8.8 — relying on scanning alone to cover application-layer and business-logic risk is a common audit finding.

**Does ISO 42001 have the same requirement?**
ISO 42001 (AI management systems) is a newer, separate standard focused on AI governance rather than technical vulnerability management, so it doesn't carry the same Annex A 8.8-style testing control. If you're pursuing both ISO 27001 and ISO 42001, your AI-specific testing (see our [AI security assessment cost guide](/blog/ai-security-assessment-cost/)) and your general application pentest typically run as separate, complementary engagements.

**Who can perform the test — does it need to be a CREST-accredited firm?**
The standard allows "internal staff or an authenticated third party" — it doesn't mandate a specific accreditation. In practice, many auditors view recognized accreditations (CREST, OSCP-certified testers) as stronger evidence of tester competence, even though they aren't a hard ISO 27001 requirement.

**How often does the test need to be redone?**
Annually is the common baseline for most organizations; higher-risk or frequently-changing systems often get tested more often, and any major architecture change (new product, new cloud migration, major release) typically triggers a fresh scope regardless of the calendar.

**What's the difference between a certification audit pentest and a surveillance audit pentest?**
Your initial certification audit and each annual surveillance audit afterward both expect current vulnerability-identification evidence — a pentest from three years ago won't satisfy a surveillance audit happening now. Budget for recurring testing, not a one-time project.

---

**Sources:** [ISO/IEC 27001:2022 Annex A 8.8 — ISMS.online](https://isms.online/iso-27001/annex-a/8-8-management-of-technical-vulnerabilities-2022) · [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/latest/2-Introduction/)

<!-- FAQPage structured data — wire into this page's <head> at build time -->
```json-ld
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Does ISO 27001 require an annual penetration test?", "acceptedAnswer": {"@type": "Answer", "text": "Not by that exact name. Annex A 8.8 requires periodic, documented identification of technical vulnerabilities, and lists penetration testing as an accepted method. Annual is the common interval auditors expect to see."}},
    {"@type": "Question", "name": "Can I use a vulnerability scan instead of a pentest for ISO 27001?", "acceptedAnswer": {"@type": "Answer", "text": "You can submit it as partial evidence, but scanning and penetration testing are listed as separate, complementary activities under 8.8 — relying on scanning alone is a common audit finding."}},
    {"@type": "Question", "name": "Does ISO 42001 have the same requirement?", "acceptedAnswer": {"@type": "Answer", "text": "ISO 42001 is a newer, separate standard focused on AI governance rather than technical vulnerability management, so it doesn't carry the same Annex A 8.8-style testing control."}},
    {"@type": "Question", "name": "Who can perform the test — does it need to be a CREST-accredited firm?", "acceptedAnswer": {"@type": "Answer", "text": "The standard allows 'internal staff or an authenticated third party' — it doesn't mandate a specific accreditation, though many auditors view recognized accreditations as stronger evidence of tester competence."}},
    {"@type": "Question", "name": "How often does the test need to be redone?", "acceptedAnswer": {"@type": "Answer", "text": "Annually is the common baseline for most organizations; higher-risk or frequently-changing systems often get tested more often."}},
    {"@type": "Question", "name": "What's the difference between a certification audit pentest and a surveillance audit pentest?", "acceptedAnswer": {"@type": "Answer", "text": "Your initial certification audit and each annual surveillance audit afterward both expect current vulnerability-identification evidence — a pentest from three years ago won't satisfy a surveillance audit happening now."}}
  ]
}
```
