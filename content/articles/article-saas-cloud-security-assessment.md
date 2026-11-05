---
title: "SaaS and Cloud Security Assessment (2027 Guide)"
meta_description: "What a SaaS and cloud security assessment actually checks: identity, OAuth grants, connected-app risk, and cloud configuration — and how it differs from a pentest."
primary_keyword: "SaaS security assessment"
secondary_keywords: ["cloud security assessment", "OAuth security review", "connected app risk", "identity and access review"]
intent: Commercial — security and IT leads worried about third-party app access and cloud misconfiguration
author: "Sthuthi Securities"
reviewedBy: "Sthuthi Securities Testing Team"
datePublished: "2026-11-04"
dateModified: "2026-11-04"
status: draft — no external citations in this article (none needed); verify internal links once site is built; FAQPage JSON-LD at bottom is build-ready
---

# SaaS and Cloud Security Assessment (2027 Guide)

*Reviewed by the Sthuthi Securities testing team · Last reviewed: November 2026*

> **Key stats:** The most common real-world finding is stale access — an ex-employee's OAuth grant still active months after departure · Scope: $15,000 for one identity environment, one CRM/support environment, and up to ten integrations · Read-only access only — no production credentials required.

**On this page:** [What's checked](#what-this-assessment-actually-checks) · [Why "reputable cloud provider" isn't enough](#why-we-use-a-reputable-cloud-provider-doesnt-answer-this) · [How it relates to pentesting](#how-this-relates-to-penetration-testing-and-compliance) · [What you get](#what-you-get-at-the-end) · [Scope and cost](#scope-and-cost) · [FAQ](#faq)

*Last verified: Q1 2027.*

Most companies can answer "what applications do we run" but very few can answer "what can read our data, and does it still have access after someone left." That gap — identity, OAuth grants, and connected third-party apps that keep working silently long after anyone remembers granting them — is what a SaaS and cloud security assessment is actually built to close, and it's a different exercise from a standard application penetration test.

## What this assessment actually checks

Unlike a penetration test, which tries to exploit a specific application, a SaaS and cloud security assessment is a review: who and what can access your business systems, cloud accounts, and the data flowing between them.

| Area | What's checked |
|---|---|
| Identity environment | How accounts are provisioned, deprovisioned, and whether offboarding actually revokes access everywhere it should |
| OAuth and connected apps | Third-party apps granted access to your CRM, email, or file storage — including ones nobody remembers authorizing |
| Cloud account configuration | Public exposure, overly broad permissions, unused but still-live credentials |
| CRM/support environment and integrations | Who can see customer data, and which connected tools (Zapier-style automations, chatbots, analytics tools) can pull it out |
| Token and session hygiene | Whether revoked or expired access actually stops working, or quietly keeps functioning |

## Why "we use a reputable cloud provider" doesn't answer this

AWS, Google Cloud, and Microsoft 365 being secure platforms doesn't mean your configuration of them is secure — the responsibility for who has access to what inside your tenant sits with you, not the platform vendor. The most common real-world findings in this category aren't exotic cloud exploits; they're an ex-employee's OAuth grant still active eight months after departure, or a third-party integration with far broader data access than its actual function requires.

## How this relates to penetration testing and compliance

This assessment complements, rather than replaces, a standard [web application penetration test](/blog/web-application-penetration-testing/) — one tests whether your application code can be exploited; this tests whether your identity and cloud configuration quietly gives away access regardless of how clean your code is. Both commonly show up as required evidence in SOC 2 and customer security questionnaires. See our [SOC 2 guide](/blog/soc2-penetration-test/) and [security questionnaire guide](/blog/security-questionnaire-help/) for how this evidence gets used downstream.

It's also closely related to, but distinct from, a software supply chain security review, which focuses on the packages, secrets, and release pipelines your *software* depends on rather than the identity and access layer around your *business* systems.

## What you get at the end

A useful assessment doesn't just list what's wrong — it comes with prioritized, concrete recommendations (revoke this token, narrow this integration's scope, enforce MFA on this account type) and, for a bounded scope, a retest to confirm the highest-priority items actually got fixed. A credible assessment is explicit that a bounded review doesn't prove every cloud resource or integration is safe — it proves the agreed scope was checked, which is a meaningfully different and more honest claim than "we secured your cloud."

## Scope and cost

Sthuthi Securities' SaaS and Cloud Security Assessment runs $15,000, scoped to one identity environment, one CRM or support environment, and up to ten integrations, with read-only administrative visibility and inventory exports as the typical access requirement — no production credentials handed over. Timing is scoped to the environment rather than a fixed day count, since the number of integrations and the state of existing documentation both materially affect how long a thorough review takes.

## FAQ

**How is this different from a penetration test?**
A penetration test tries to exploit application or infrastructure vulnerabilities directly. A SaaS and cloud security assessment reviews identity, access, and integration configuration — who *can* get in through legitimate-looking access, not who can break in through a code flaw.

**Do you need production access to run this assessment?**
No — the standard approach uses read-only administrative visibility where possible, plus inventory exports and agreed cloud account access, specifically to avoid handing over production credentials or write access unnecessarily.

**What's the most common finding in this type of assessment?**
Stale access — OAuth grants, integrations, or accounts that should have been revoked (an employee departure, a discontinued integration) but are still technically live and functional.

**Does this cover our AI tools' access to our CRM or cloud data?**
Yes, if an AI tool is one of the connected integrations in scope — an AI assistant with broad, unreviewed access to your CRM or support platform is exactly the kind of connected-app risk this assessment is built to surface, distinct from testing the AI application itself (see our [AI security assessment guide](/blog/ai-security-assessment-cost/) for that separate test).

**Can this help with a SOC 2 or ISO 27001 audit?**
Often yes — access review and third-party integration risk are common control areas in both frameworks, and this assessment's findings and remediation evidence can support that audit evidence alongside your penetration test.

**What happens if the assessment finds something critical during the engagement?**
As with a penetration test, a credible provider discloses actively exploitable or clearly critical findings (like a wide-open integration with sensitive data access) as soon as they're confirmed, rather than holding everything for the final report.

**Is a one-time assessment enough, or does this need to be ongoing?**
A one-time assessment gives you a snapshot; identity and integration sprawl accumulates continuously as teams add new tools, so most organizations benefit from re-running this on a regular cadence (annually at minimum) rather than treating it as a single project.

<!-- FAQPage structured data — wire into this page's <head> at build time -->
```json-ld
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How is this different from a penetration test?", "acceptedAnswer": {"@type": "Answer", "text": "A penetration test tries to exploit application or infrastructure vulnerabilities directly. A SaaS and cloud security assessment reviews identity, access, and integration configuration."}},
    {"@type": "Question", "name": "Do you need production access to run this assessment?", "acceptedAnswer": {"@type": "Answer", "text": "No — the standard approach uses read-only administrative visibility where possible, plus inventory exports and agreed cloud account access."}},
    {"@type": "Question", "name": "What's the most common finding in this type of assessment?", "acceptedAnswer": {"@type": "Answer", "text": "Stale access — OAuth grants, integrations, or accounts that should have been revoked but are still technically live and functional."}},
    {"@type": "Question", "name": "Does this cover our AI tools' access to our CRM or cloud data?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, if an AI tool is one of the connected integrations in scope — an AI assistant with broad, unreviewed access to your CRM is exactly the kind of risk this assessment surfaces."}},
    {"@type": "Question", "name": "Can this help with a SOC 2 or ISO 27001 audit?", "acceptedAnswer": {"@type": "Answer", "text": "Often yes — access review and third-party integration risk are common control areas in both frameworks."}},
    {"@type": "Question", "name": "What happens if the assessment finds something critical during the engagement?", "acceptedAnswer": {"@type": "Answer", "text": "A credible provider discloses actively exploitable or clearly critical findings as soon as they're confirmed, rather than holding everything for the final report."}},
    {"@type": "Question", "name": "Is a one-time assessment enough, or does this need to be ongoing?", "acceptedAnswer": {"@type": "Answer", "text": "A one-time assessment gives a snapshot; most organizations benefit from re-running this on a regular cadence, annually at minimum."}}
  ]
}
```
