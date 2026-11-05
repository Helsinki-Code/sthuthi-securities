---
title: "HIPAA Security Assessment and Penetration Testing (2027 Guide)"
meta_description: "Does HIPAA require a penetration test? The current rule, the proposed 2025 HHS update that would make it mandatory, and what a HIPAA-relevant test should cover."
primary_keyword: "HIPAA security assessment"
secondary_keywords: ["HIPAA penetration testing requirements", "does HIPAA require a pen test", "HIPAA Security Rule 2025 update", "healthcare penetration testing"]
intent: Commercial — covered entities and business associates responding to a compliance driver or a new regulatory requirement
author: "Sthuthi Securities"
reviewedBy: "Sthuthi Securities Testing Team"
datePublished: "2026-11-04"
dateModified: "2026-11-04"
status: draft — proposed rule status must be re-verified against HHS OCR before publishing, since it can change after this review date; verify external links resolve; wire internal links once site is built; FAQPage JSON-LD at bottom is build-ready
---

# HIPAA Security Assessment and Penetration Testing (2027 Guide)

*Reviewed by the Sthuthi Securities testing team · Last reviewed: November 2026*

> **Key stats:** The current HIPAA Security Rule names **no** specific pentest mandate — only a general "risk analysis" · A proposed Jan 6, 2025 HHS OCR rule would make annual penetration testing mandatory, but it is **still not finalized** as of this writing.

**On this page:** [The current rule](#the-current-rule-risk-analysis-not-a-named-pentest) · [What's changing](#whats-changing-the-proposed-2025-security-rule-update) · [What a test should cover](#what-a-hipaa-relevant-penetration-test-should-actually-cover) · [Other frameworks](#how-this-relates-to-other-frameworks-you-might-also-need) · [Cost](#cost-and-timing) · [FAQ](#faq)

*Last verified: Q1 2027. This is the one compliance area in this guide with a genuinely live rule change in motion — read the status section before assuming penetration testing is already legally mandatory under HIPAA, because as of this writing it isn't yet.*

Healthcare organizations have run risk analyses under HIPAA for two decades without a specific, named penetration-testing mandate. That's in the process of changing, and the direction is unambiguous even though the final rule isn't locked yet.

## The current rule: risk analysis, not a named pentest

The existing HIPAA Security Rule requires covered entities and business associates to conduct a "risk analysis" — an assessment of potential risks and vulnerabilities to electronic protected health information (ePHI) — but it never specifically names penetration testing as a required method. Organizations have historically satisfied this with a mix of vulnerability scanning, risk assessments, and, for more mature programs, voluntary penetration testing.

## What's changing: the proposed 2025 Security Rule update

On January 6, 2025, HHS's Office for Civil Rights published a proposed rule that would make penetration testing an explicit, named, mandatory requirement for the first time. As proposed:

- **Mandatory:** All covered entities and business associates would be required to conduct penetration testing of their electronic information systems — this includes government agencies that qualify as covered entities, such as State Medicaid agencies.
- **Frequency:** At least every 12 months, or sooner if the entity's own risk analysis calls for it.
- **Who can perform it:** The test must be done by "qualified person(s)" — the proposed rule doesn't name a specific accreditation requirement, but expects documented competence.
- **Status as of this writing: still a proposal, not final.** The obligations described apply "if finalized" — organizations aren't yet legally required to comply, but the direction of travel is clear enough that waiting for the final rule before starting is a bet, not a strategy. ([coresecurity.com](https://www.coresecurity.com/blog/proposed-hipaa-update-makes-yearly-pen-testing-mandatory))

Check the current status directly before making a compliance claim based on this — proposed federal rules can be finalized, revised, or withdrawn, and the timeline for this one specifically should be confirmed against HHS's own published status, not inferred from a blog post, including this one.

## What a HIPAA-relevant penetration test should actually cover

| Area | Why it matters for ePHI |
|---|---|
| Patient portals and apps | Direct ePHI exposure surface; authentication and authorization bypass risk |
| APIs connecting clinical systems | ePHI moves between systems here; a common unmonitored gap |
| Third-party integrations | Business associates and connected apps that touch ePHI need the same scrutiny as your own systems |
| AI features (clinical chatbots, intake assistants) | A newer gap — an AI assistant that can be prompt-injected into revealing one patient's data to another is a HIPAA incident, not just a security bug |
| Access controls and audit logging | Core HIPAA Security Rule requirements that a pentest should verify are enforced, not just configured |

The AI-feature row matters more every year. A growing share of HIPAA-covered organizations now run some kind of AI-powered intake, triage, or patient-communication tool, and a standard infrastructure pentest won't catch a prompt-injection path that leaks one patient's data to another through a chatbot. See our [AI security assessment cost guide](/blog/ai-security-assessment-cost/) and our [chatbot security testing guide](/blog/chatbot-security-testing/) for what that specific test looks like.

## How this relates to other frameworks you might also need

Healthcare organizations frequently need more than just HIPAA — a hospital system's software vendor might also need SOC 2 for enterprise customers, or ISO 27001 for a broader buyer base. One well-scoped penetration test, run against the union of all required frameworks' scope, can often generate evidence for multiple compliance needs at once rather than running separate tests for each. See our [SOC 2 penetration test guide](/blog/soc2-penetration-test/) and [ISO 27001 penetration testing requirements guide](/blog/iso-27001-penetration-testing/) for how those frameworks define their own testing expectations.

## Cost and timing

A HIPAA-relevant penetration test scoped to patient-facing applications and the APIs behind them typically falls in a similar range to other application-level penetration tests — see our [cost breakdown guide](/blog/ai-security-assessment-cost/) for the general drivers (app complexity, number of workflows, retest inclusion). Sthuthi Securities runs standard penetration testing from $12,000 and a compliance-readiness engagement from $15,000 covering HIPAA alongside SOC 2, ISO 27001, and ISO 42001 gap assessment and evidence preparation.

## FAQ

**Does HIPAA currently require a penetration test?**
Not explicitly, as of this writing — the current Security Rule requires a risk analysis but doesn't name penetration testing as a mandatory method. A proposed 2025 rule would make it mandatory annually; it has not been finalized.

**If the proposed rule isn't final, why would I test now?**
Three reasons: your risk analysis may already call for it under the current rule's general risk-assessment requirement; enterprise customers and business partners increasingly ask for a pentest report regardless of what HIPAA itself mandates; and if the rule finalizes on anything close to its proposed timeline, starting now avoids a scramble.

**Who counts as a "covered entity" or "business associate" under HIPAA?**
Covered entities include healthcare providers, health plans, and healthcare clearinghouses that handle ePHI. Business associates are vendors and contractors that handle ePHI on a covered entity's behalf — this is the category most health-tech and SaaS companies serving healthcare clients fall into.

**Does a HIPAA risk analysis replace a penetration test, or do I need both?**
They're different activities. A risk analysis is a broader assessment of risks and vulnerabilities across your environment; a penetration test is a specific, hands-on technical exercise. Under the proposed rule, both would be required, not either/or.

**What happens to State Medicaid agencies under the proposed rule?**
The proposal explicitly includes government agencies that qualify as covered entities, such as State Medicaid agencies, in the mandatory testing requirement.

**Does an AI chatbot used for patient intake need separate testing from the rest of our HIPAA security program?**
Yes, functionally — a standard infrastructure or web-app pentest doesn't test for prompt injection, cross-patient data leakage through model behavior, or malicious instructions hidden in retrieved clinical content. That requires an AI-specific assessment; see our [AI security assessment cost guide](/blog/ai-security-assessment-cost/).

**How do I track whether the proposed rule has been finalized?**
Check HHS OCR's own published rulemaking status directly rather than relying on any third-party summary's publish date, including this one — proposed federal rules can move on a timeline that outpaces any static article.

---

**Sources:** [HHS OCR proposed HIPAA Security Rule update — CoreSecurity](https://www.coresecurity.com/blog/proposed-hipaa-update-makes-yearly-pen-testing-mandatory) · [Maynard Nexsen summary of proposed changes](https://www.maynardnexsen.com/publication-changes-proposed-by-hhs-to-strengthen-hipaa-security-rule)

<!-- FAQPage structured data — wire into this page's <head> at build time -->
```json-ld
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Does HIPAA currently require a penetration test?", "acceptedAnswer": {"@type": "Answer", "text": "Not explicitly, as of this writing — the current Security Rule requires a risk analysis but doesn't name penetration testing as a mandatory method. A proposed 2025 rule would make it mandatory annually; it has not been finalized."}},
    {"@type": "Question", "name": "If the proposed rule isn't final, why would I test now?", "acceptedAnswer": {"@type": "Answer", "text": "Your risk analysis may already call for it, enterprise customers increasingly ask for a pentest report regardless of what HIPAA mandates, and starting now avoids a scramble if the rule finalizes."}},
    {"@type": "Question", "name": "Who counts as a 'covered entity' or 'business associate' under HIPAA?", "acceptedAnswer": {"@type": "Answer", "text": "Covered entities include healthcare providers, health plans, and healthcare clearinghouses that handle ePHI. Business associates are vendors and contractors that handle ePHI on a covered entity's behalf."}},
    {"@type": "Question", "name": "Does a HIPAA risk analysis replace a penetration test, or do I need both?", "acceptedAnswer": {"@type": "Answer", "text": "They're different activities. A risk analysis is a broader assessment; a penetration test is a specific, hands-on technical exercise. Under the proposed rule, both would be required."}},
    {"@type": "Question", "name": "What happens to State Medicaid agencies under the proposed rule?", "acceptedAnswer": {"@type": "Answer", "text": "The proposal explicitly includes government agencies that qualify as covered entities, such as State Medicaid agencies, in the mandatory testing requirement."}},
    {"@type": "Question", "name": "Does an AI chatbot used for patient intake need separate testing?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — a standard infrastructure or web-app pentest doesn't test for prompt injection, cross-patient data leakage, or malicious instructions hidden in retrieved clinical content. That requires an AI-specific assessment."}},
    {"@type": "Question", "name": "How do I track whether the proposed rule has been finalized?", "acceptedAnswer": {"@type": "Answer", "text": "Check HHS OCR's own published rulemaking status directly rather than relying on any third-party summary's publish date."}}
  ]
}
```
