---
title: "SOC 2 Penetration Test in 2027: What Auditors Actually Require"
meta_description: "Does SOC 2 require a penetration test? The honest 2027 answer, what auditors actually expect, Type 1 vs Type 2, how often you need one, cost, and what the report must show."
primary_keyword: "SOC 2 penetration test"
secondary_keywords: ["does SOC 2 require penetration testing", "SOC 2 penetration testing requirements", "SOC 2 pen test cost", "SOC 2 Type 2 penetration test"]
intent: Commercial
author: "Sthuthi Securities"
reviewedBy: "Sthuthi Securities Testing Team"
datePublished: "2026-11-04"
dateModified: "2026-11-04"
status: draft — verify external links resolve; wire internal links once site is built; FAQPage JSON-LD at bottom is build-ready
---

# SOC 2 Penetration Test in 2027: What Auditors Actually Require

*Reviewed by the Sthuthi Securities testing team · Last reviewed: November 2026*

> **Key stats:** "Penetration test" appears **nowhere** in the AICPA Trust Services Criteria, yet it's expected evidence for CC4.1 and CC7.1 · Typical 2027 cost: **$10,000–$30,000** · Most SOC 2 pen tests still miss AI features entirely.

**On this page:** [Why auditors expect it anyway](#why-auditors-expect-a-pen-test-even-though-soc-2-doesnt-name-one) · [What the report must show](#what-a-soc-2-penetration-test-has-to-show) · [Type 1 vs Type 2](#type-1-vs-type-2-when-you-need-the-test) · [How often](#how-often-do-you-need-a-soc-2-pen-test) · [Scan vs manual test](#internal-vs-external-automated-vs-manual) · [Cost](#what-a-soc-2-pen-test-costs-in-2027) · [The AI gap](#the-gap-most-soc-2-pen-tests-miss-your-ai-features) · [FAQ](#frequently-asked-questions)

SOC 2 does not technically require a penetration test. The phrase "penetration test" appears nowhere in the AICPA's Trust Services Criteria. And yet almost every company going through a SOC 2 audit ends up getting one, because auditors expect evidence that you actively look for and fix vulnerabilities — and a pen test is the cleanest way to show it.

So the honest answer to "does SOC 2 require a penetration test?" is: no on paper, yes in practice. This guide explains why, what the report has to show, how Type 1 and Type 2 differ, how often you need one, and what it costs in 2027.

## Why auditors expect a pen test even though SOC 2 doesn't name one

SOC 2 is built on the [AICPA Trust Services Criteria](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2). The criteria are written as outcomes, not as a checklist of tools, which is why "penetration test" never appears — but two of them are exactly where pen testing earns its place.

- **CC4.1 (Monitoring activities).** You have to evaluate whether your controls are working, over time. A point-in-time penetration test, plus ongoing vulnerability scanning, is standard evidence that you actually do this rather than assume it.
- **CC7.1 (Detecting vulnerabilities).** You have to detect and respond to vulnerabilities. An auditor wants to see *how* you find them. "We run a scanner occasionally" is weaker evidence than a scoped penetration test with findings and documented fixes.

Because the criteria are about outcomes, the auditor has latitude in what they accept. In practice, most auditors treat a recent penetration test as the expected evidence, and a report with remediation is one of the smoothest ways through that part of the audit. Practitioner guidance from [Drata](https://drata.com/blog/soc-2-penetration-test) and [Synack](https://www.synack.com/) lands in the same place: not strictly mandatory, effectively expected.

## What a SOC 2 penetration test has to show

The report is the deliverable the auditor reads, so it has to carry the right evidence. A report that lists findings but shows no remediation or retest is a half-answer, and auditors increasingly want to see the loop closed.

| Element | Why the auditor wants it |
|---|---|
| Scope | Confirms the test covered the systems in your SOC 2 boundary |
| Methodology | Shows the test was real, not just an automated scan |
| Findings with severity | Evidence you detect vulnerabilities (CC7.1) |
| Remediation | Evidence you respond to them |
| Retest | Proof the fixes actually closed the findings, not just that a ticket was marked done |
| Dates | Shows the test is recent enough for the audit period |

## Type 1 vs Type 2: when you need the test

For a **SOC 2 Type 1** (a point-in-time snapshot of whether controls are designed correctly), you need a penetration test done before the audit date, so the report can serve as evidence the monitoring control exists.

For a **SOC 2 Type 2** (controls operating effectively over a period, usually 3–12 months), you need evidence that testing happens on a reasonable cadence — typically at least annually, and after significant changes. If you ship major changes mid-period, one test at the start may not be enough to show the control operated throughout the window. This is where [continuous or recurring testing](/services/ongoing-security-testing/) produces cleaner Type 2 evidence, because the control is visibly operating across the whole period rather than at a single moment.

## How often do you need a SOC 2 pen test?

At least once a year, and again after any significant change to the systems in scope. Annual is the baseline most auditors accept. A "significant change" means a new product, a major architecture shift, a new integration, or anything that materially changes your attack surface. Companies shipping fast often move to more frequent testing, both for security and for cleaner audit evidence.

## Internal vs external, automated vs manual

An automated vulnerability scan is not a penetration test, and most auditors know the difference.

- A **scan** finds known issues from a signature list. It's cheap, fast, and supports the monitoring criteria, but it can't find business-logic flaws or chained attacks.
- A **penetration test** has a human — increasingly with AI-assisted tooling — actually try to exploit the system, including the logic flaws a scanner can't see.

For SOC 2, a scan supports the monitoring criteria, but a real pen test is the stronger evidence. Most auditors expect both: continuous scanning plus at least an annual penetration test. You'll also typically want **both external and internal** testing — external for the internet-facing attack surface, internal for what an attacker can do once inside.

## What a SOC 2 pen test costs in 2027

A SOC 2 penetration test typically runs **$10,000 to $30,000**, depending on the size of your scope — the number of applications, APIs, and environments in your SOC 2 boundary. A single web app sits near the bottom; a multi-service platform sits higher. Automated-only "pen tests" advertised for a few thousand dollars usually won't satisfy an auditor who looks closely, because they're scans with a report attached. For how scope drives price, see our [AI security assessment cost guide](/blog/ai-security-assessment-cost/), and our [pricing page](/pricing/) for our rates.

## The gap most SOC 2 pen tests miss: your AI features

Here's the part most compliance-focused vendors won't tell you. A standard web-app penetration test does not cover an AI feature or agent. If your product includes a chatbot, a copilot, or an agent that reads customer data or takes actions, a normal SOC 2 pen test will walk right past it — it isn't scoped to test [prompt injection](/blog/prompt-injection-testing/), data leakage, or [MCP tool](/blog/mcp-server-security/) misuse.

That matters because the AI is often the newest and least-tested part of your stack, and increasingly the part an enterprise customer's security team asks about. An [AI security assessment](/services/ai-security-assessment/) on top of your SOC 2 pen test closes that gap, and it's the kind of thing that moves a stalled enterprise deal.

## How to choose a SOC 2 pen test provider

- They scope to your actual SOC 2 boundary, not a generic package.
- The report includes remediation guidance and at least one retest.
- They produce auditor-ready evidence — scope, methodology, findings, fixes, dates.
- They can cover AI features if you have them, not just the traditional app.
- They're clear about what's a scan and what's a manual test.

## Frequently asked questions

**Does SOC 2 require a penetration test?**
Not by name. The Trust Services Criteria don't mandate one, but auditors expect evidence of vulnerability detection and monitoring, and a pen test is the standard way to provide it.

**How often is a SOC 2 pen test needed?**
At least annually, and after any significant change to systems in scope.

**What's the difference between a scan and a pen test for SOC 2?**
A scan finds known issues automatically. A pen test has a human try to exploit the system, including business-logic flaws. The pen test is stronger evidence; most auditors expect both.

**How much does a SOC 2 penetration test cost?**
Typically $10,000–$30,000 in 2027, depending on scope.

**Do I need a pen test for SOC 2 Type 1 and Type 2?**
Type 1 needs a test before the audit date. Type 2 needs evidence of testing on a reasonable cadence across the audit period.

**Do I need separate testing for an AI feature?**
Yes. A standard pen test doesn't cover AI-specific risks like prompt injection or tool misuse. An AI security assessment handles those.

**Does a vulnerability scan count as a penetration test for SOC 2?**
No. A scan supports the monitoring criteria but isn't a substitute for a manual penetration test as audit evidence.

**Who can perform a SOC 2 pen test?**
A qualified third-party provider. The auditor assesses your controls; the pen test is evidence you feed into that, usually from a separate security firm.

**Will a pen test guarantee I pass SOC 2?**
No. It's evidence for specific criteria. Passing SOC 2 depends on your whole control environment, which the auditor evaluates.

## Get a SOC 2 pen test that passes the audit

A SOC 2 pen test is only useful if the report holds up with your auditor. [Discuss your project](/contact/) and we'll scope a test to your SOC 2 boundary, deliver auditor-ready findings with remediation and a retest, and cover any AI features a standard test would miss.

---

Related reading: [Compliance Readiness](/services/compliance-readiness/) · [Penetration Testing](/services/penetration-testing/) · [AI Security Assessment](/services/ai-security-assessment/) · [How much does an AI security assessment cost?](/blog/ai-security-assessment-cost/) · [Ongoing Security Testing](/services/ongoing-security-testing/)

External references: [AICPA Trust Services Criteria / SOC 2](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2) · practitioner guidance from [Drata](https://drata.com/blog/soc-2-penetration-test) and [Synack](https://www.synack.com/).

<!-- FAQPage structured data — wire into this page's <head> at build time -->
```json-ld
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Does SOC 2 require a penetration test?", "acceptedAnswer": {"@type": "Answer", "text": "Not by name. The Trust Services Criteria don't mandate one, but auditors expect evidence of vulnerability detection and monitoring, and a pen test is the standard way to provide it."}},
    {"@type": "Question", "name": "How often is a SOC 2 pen test needed?", "acceptedAnswer": {"@type": "Answer", "text": "At least annually, and after any significant change to systems in scope."}},
    {"@type": "Question", "name": "What's the difference between a scan and a pen test for SOC 2?", "acceptedAnswer": {"@type": "Answer", "text": "A scan finds known issues automatically. A pen test has a human try to exploit the system, including business-logic flaws. The pen test is stronger evidence; most auditors expect both."}},
    {"@type": "Question", "name": "How much does a SOC 2 penetration test cost?", "acceptedAnswer": {"@type": "Answer", "text": "Typically $10,000–$30,000 in 2027, depending on scope."}},
    {"@type": "Question", "name": "Do I need a pen test for SOC 2 Type 1 and Type 2?", "acceptedAnswer": {"@type": "Answer", "text": "Type 1 needs a test before the audit date. Type 2 needs evidence of testing on a reasonable cadence across the audit period."}},
    {"@type": "Question", "name": "Do I need separate testing for an AI feature?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. A standard pen test doesn't cover AI-specific risks like prompt injection or tool misuse. An AI security assessment handles those."}},
    {"@type": "Question", "name": "Does a vulnerability scan count as a penetration test for SOC 2?", "acceptedAnswer": {"@type": "Answer", "text": "No. A scan supports the monitoring criteria but isn't a substitute for a manual penetration test as audit evidence."}},
    {"@type": "Question", "name": "Who can perform a SOC 2 pen test?", "acceptedAnswer": {"@type": "Answer", "text": "A qualified third-party provider. The auditor assesses your controls; the pen test is evidence you feed into that, usually from a separate security firm."}},
    {"@type": "Question", "name": "Will a pen test guarantee I pass SOC 2?", "acceptedAnswer": {"@type": "Answer", "text": "No. It's evidence for specific criteria. Passing SOC 2 depends on your whole control environment, which the auditor evaluates."}}
  ]
}
```
