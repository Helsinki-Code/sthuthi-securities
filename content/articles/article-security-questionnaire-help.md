---
title: "How to Answer a Security Questionnaire (SIG, CAIQ, and Custom) — 2027 Guide"
meta_description: "How to answer a SIG, CAIQ, or custom vendor security questionnaire fast: what evidence actually gets you through, and what to do if you're starting from zero."
primary_keyword: "security questionnaire help"
secondary_keywords: ["how to answer a vendor security questionnaire", "SIG questionnaire", "CAIQ questionnaire", "customer security review"]
intent: Commercial — a sales or security team stuck on a customer's security review, usually blocking a deal
author: "Sthuthi Securities"
reviewedBy: "Sthuthi Securities Testing Team"
datePublished: "2026-11-04"
dateModified: "2026-11-04"
status: draft — verify external links resolve; wire internal links once site is built; FAQPage JSON-LD at bottom is build-ready
---

# How to Answer a Security Questionnaire (SIG, CAIQ, and Custom) — 2027 Guide

*Reviewed by the Sthuthi Securities testing team · Last reviewed: November 2026*

> **Key stats:** SIG Core runs **627 questions** across 21 risk domains; SIG Lite is **128 questions** · A current penetration test report is the single most commonly requested piece of evidence across SIG, CAIQ, and custom formats alike.

**On this page:** [The two formats](#the-two-questionnaire-formats-youll-actually-see) · [What gets you through fast](#what-actually-gets-you-through-these-fast) · [Starting from zero](#what-to-do-if-youre-starting-from-zero) · [FAQ](#faq)

*Last verified: Q1 2027.*

If an enterprise prospect just sent you a 300-question spreadsheet and said the deal can't close until it's answered, you're dealing with a vendor security questionnaire — and the questions underneath the panic are usually simpler than the spreadsheet makes them look: do you have a recent penetration test report, do you have SOC 2 or ISO 27001, and can you answer their specific questions without inventing anything.

## The two questionnaire formats you'll actually see

### SIG (Standardized Information Gathering)

Published by Shared Assessments, a coalition originally formed in 2005 by major banks, the Big Four consulting firms, and industry vendors, specifically so vendors could "complete once, share many times" instead of answering a bespoke questionnaire for every customer.

- **SIG Core:** 627 questions across all 21 risk domains. Sent to higher-risk vendors — those handling sensitive data, critical infrastructure, or deep supply-chain dependencies. Realistically takes days to weeks to complete properly the first time.
- **SIG Lite:** 128 questions, a subset of domains. Used for lower-risk vendors or as a preliminary screen before a buyer decides whether to send the full SIG Core. Hours to days to complete. ([wolfia.com](https://wolfia.com/blog/what-is-sig-questionnaire))

### CAIQ (Consensus Assessments Initiative Questionnaire)

A cloud-focused questionnaire format, commonly used alongside or instead of SIG for SaaS and cloud vendors specifically. Many compliance-automation tools and answer libraries treat SIG, CAIQ, and custom formats interchangeably once your source-of-truth answers exist — the hard part is building that source of truth once, not re-answering it per format.

### Custom questionnaires

Many enterprise buyers, especially in finance and healthcare, send their own bespoke spreadsheet instead of a standard format. These take longer per-response because you can't reuse a pre-built answer library, but the underlying evidence you need (pentest report, compliance certifications, policy documents) is almost always the same set regardless of the questionnaire's shape.

## What actually gets you through these fast

1. **Have a current penetration test report ready before you're asked.** This is the single most commonly requested piece of evidence across SIG, CAIQ, and custom questionnaires. "We'll get one" mid-deal adds weeks; having a dated report on hand turns a blocking question into a five-minute attachment. See our [penetration testing cost guide](/blog/ai-security-assessment-cost/) if you don't have one yet.
2. **Know which compliance frameworks you actually hold evidence for.** SOC 2, ISO 27001, and (increasingly) ISO 42001 or HIPAA compliance each answer clusters of questionnaire sections at once. Our [SOC 2](/blog/soc2-penetration-test/), [ISO 27001](/blog/iso-27001-penetration-testing/), and [HIPAA](/blog/hipaa-security-assessment/) guides cover what each actually requires.
3. **Build an answer library once, not per-deal.** Once your SIG Core or CAIQ answers exist in a maintained document, most future questionnaires become a matter of mapping their questions onto your existing answers rather than writing from scratch.
4. **Never invent an answer you can't back up.** A questionnaire answer that claims a control you don't actually have is worse than an honest "not yet implemented, planned for Q2" — enterprise security teams follow up, and a caught fabrication kills more deals than an honest gap does.
5. **Flag AI features explicitly if you have them.** A growing share of SIG and custom questionnaires now ask AI-specific questions — how you test for prompt injection, what data your AI features can access, whether a human reviews AI-driven decisions. If you don't have a clean answer yet, that's usually the fastest-growing gap on a 2027-era questionnaire. See our [AI security assessment guide](/blog/ai-security-assessment-cost/).

## What to do if you're starting from zero

If a questionnaire landed on your desk and you have no pentest report, no SOC 2, and no answer library, the honest sequence is: get a scoped assessment started immediately (so you have a dated report to point to even while the full engagement wraps up), draft honest, specific answers to what you can currently back up, and flag gaps as "in progress" with a real timeline rather than leaving them blank or guessing. Sthuthi Securities' compliance-readiness engagement (from $15,000) is built around exactly this — gap assessment against the named framework, prioritized remediation, and direct support answering the questionnaire with your team, not just a report handed over cold.

## FAQ

**What's the difference between SIG and CAIQ?**
SIG is a broad, cross-industry vendor-risk questionnaire from Shared Assessments covering 21 risk domains. CAIQ is more cloud/SaaS-focused. Many buyers accept either, and once you have a maintained answer set, responding to one format makes responding to the other largely a mapping exercise.

**How long does a SIG Core questionnaire take to complete the first time?**
Realistically days to weeks for a first-time, accurate completion across all 627 questions — it gets much faster on repeat use once your answer library exists.

**Can I just reuse my competitor's public SIG answers as a template?**
You can use another company's published format as a structural reference, but every answer has to reflect your actual controls — copying substantive answers you can't back up is the fabrication risk mentioned above, and it gets caught.

**Do I need SOC 2 or ISO 27001 before I can answer a questionnaire well?**
No — you can answer honestly without either, but holding one (or being able to show a recent pentest report and documented policies) makes most sections dramatically faster to complete and more credible to the reviewer.

**What's the single most commonly requested piece of evidence across these questionnaires?**
A current penetration test report, consistently, across SIG, CAIQ, and custom formats alike.

**My questionnaire asks about our AI features specifically — what do I need to have ready?**
Evidence that you've tested for prompt injection, data leakage across users, and tool/agent permission boundaries — not just a statement that you "take AI security seriously." See our [AI security assessment guide](/blog/ai-security-assessment-cost/) for what a real test covers.

**How often do I need to update my questionnaire answers?**
At minimum whenever your underlying evidence changes — a new pentest report, a new certification, a material architecture change — and most enterprise buyers expect anything referencing a dated artifact (like a pentest) to be refreshed roughly annually.

---

**Sources:** [Shared Assessments SIG overview — Wolfia](https://wolfia.com/blog/what-is-sig-questionnaire)

<!-- FAQPage structured data — wire into this page's <head> at build time -->
```json-ld
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What's the difference between SIG and CAIQ?", "acceptedAnswer": {"@type": "Answer", "text": "SIG is a broad, cross-industry vendor-risk questionnaire from Shared Assessments covering 21 risk domains. CAIQ is more cloud/SaaS-focused."}},
    {"@type": "Question", "name": "How long does a SIG Core questionnaire take to complete the first time?", "acceptedAnswer": {"@type": "Answer", "text": "Realistically days to weeks for a first-time, accurate completion across all 627 questions — much faster on repeat use once your answer library exists."}},
    {"@type": "Question", "name": "Can I just reuse my competitor's public SIG answers as a template?", "acceptedAnswer": {"@type": "Answer", "text": "You can use another company's published format as a structural reference, but every answer has to reflect your actual controls — copying answers you can't back up gets caught."}},
    {"@type": "Question", "name": "Do I need SOC 2 or ISO 27001 before I can answer a questionnaire well?", "acceptedAnswer": {"@type": "Answer", "text": "No — you can answer honestly without either, but holding one makes most sections dramatically faster to complete and more credible to the reviewer."}},
    {"@type": "Question", "name": "What's the single most commonly requested piece of evidence across these questionnaires?", "acceptedAnswer": {"@type": "Answer", "text": "A current penetration test report, consistently, across SIG, CAIQ, and custom formats alike."}},
    {"@type": "Question", "name": "My questionnaire asks about our AI features specifically — what do I need to have ready?", "acceptedAnswer": {"@type": "Answer", "text": "Evidence that you've tested for prompt injection, data leakage across users, and tool/agent permission boundaries — not just a statement that you take AI security seriously."}},
    {"@type": "Question", "name": "How often do I need to update my questionnaire answers?", "acceptedAnswer": {"@type": "Answer", "text": "At minimum whenever your underlying evidence changes — a new pentest report, a new certification, a material architecture change — and roughly annually for anything referencing a dated artifact."}}
  ]
}
```
