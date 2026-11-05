---
title: "Best AI Red Teaming Companies (2027 Guide)"
meta_description: "A 2027 guide to AI red teaming companies: who's independent, who got acquired, automated platforms vs human-led services, and how to evaluate a vendor."
primary_keyword: "AI red teaming companies"
secondary_keywords: ["best AI red teaming platforms", "LLM red teaming vendors", "AI red team services", "automated AI red teaming"]
intent: Mixed — enterprise security and AI platform teams shortlisting a vendor, plus top-of-funnel category traffic
author: "Sthuthi Securities"
reviewedBy: "Sthuthi Securities Testing Team"
datePublished: "2026-11-04"
dateModified: "2026-11-04"
status: draft — verify external links resolve; wire internal links once site is built; FAQPage JSON-LD at bottom is build-ready; disclosed conflict of interest retained
---

# Best AI Red Teaming Companies (2027 Guide)

*Reviewed by the Sthuthi Securities testing team · Last reviewed: November 2026*

> **Key stats:** Four major red-teaming startups (Robust Intelligence, Protect AI, Lakera, SPLX) were acquired by Cisco, Palo Alto Networks, Check Point, and Zscaler respectively since **2024** · Still independent: Mindgard, HiddenLayer, Repello AI, Giskard · Open-source and vendor-neutral: NVIDIA garak, Microsoft PyRIT.

**On this page:** [Who owns whom](#who-owns-whom-read-this-before-anything-else) · [Automated platforms](#automated-red-teaming-platforms) · [Human-led and hybrid](#human-led-and-hybrid-red-teaming) · [Comparison table](#quick-answer-comparison-table) · [How to evaluate a vendor](#how-to-evaluate-an-ai-red-teaming-vendor) · [FAQ](#faq)

*Last verified: Q1 2027. This is the most acquisition-heavy category in AI security — Mindgard, HiddenLayer, Giskard, and Repello AI remain independent as of this writing; nearly everyone else on a 2025-era "top AI red teaming" list now sits inside a much larger company.*

"AI red teaming" and "AI penetration testing" get used almost interchangeably in marketing copy, but they're not the same thing — we cover the actual distinction in our [red teaming vs. penetration testing guide](/blog/ai-red-teaming-vs-penetration-testing/). Red teaming is adversarial, continuous, and usually automated-first: thousands of attack variations run against a model or agent to find where it breaks, often integrated into CI/CD rather than run as a one-time engagement. That's why this list looks different from a pentest-company list — it's dominated by platforms, not services firms.

## Who owns whom (read this before anything else)

| Platform | Original company | Now owned by | Deal status |
|---|---|---|---|
| Cisco AI Defense | Robust Intelligence | Cisco | Closed Sep–Oct 2024 |
| Prisma AIRS AI Red Teaming | Protect AI | Palo Alto Networks | Closed July 22, 2025 |
| Lakera Red | Lakera | Check Point | Closed Nov 2025 |
| Zscaler AI Protect (Red Teaming) | SPLX / SplxAI | Zscaler | Announced Nov 3, 2025 |

Still independent: **Mindgard, HiddenLayer, Repello AI, Giskard**. Open source and vendor-neutral: **NVIDIA garak and Microsoft PyRIT**, both covered in our [AI pentesting tools guide](/blog/ai-pentesting-tools/).

## Automated red-teaming platforms

### Mindgard

A Lancaster University spinout founded in 2022, headquartered across Boston and London, offering continuous automated red teaming for LLMs, agents, and multimodal systems (branded DAST-AI) plus a hands-on red teaming service. Raised an $8M round in January 2025 (.406 Ventures) followed by a $30M Series A (Album VC) — roughly $41–42M total. Mindgard says it has publicly disclosed more than 150 AI security and safety vulnerabilities, including findings in Cursor, ChatGPT, and Google AI tools (vendor claim, not independently verified). ([mindgard.ai](https://mindgard.ai/))

### HiddenLayer

An Austin, Texas-based AI security platform (founded 2022) spanning AI discovery, supply-chain security, attack simulation (red teaming), and runtime security — notably without requiring customers to hand over model weights or training data. Raised a $100M Series B in September 2026 led by Delta-v Capital, bringing total funding above $155M, with investors including Morgan Stanley, M12, and Booz Allen Ventures. Named a Gartner Cool Vendor and selected for the US Department of Energy's Prometheus initiative. ([hiddenlayer.com](https://www.hiddenlayer.com))

### Repello AI

Offers ARTEMIS, an autonomous red-teaming engine for apps, agents, and RAG pipelines, paired with ARGUS, a runtime guardrail calibrated from ARTEMIS's own findings, plus an AI asset inventory, an MCP gateway, and coding-agent security coverage. Disclosed a $1.2M raise; headquarters and founding year weren't independently verifiable at the time of writing. ([repello.ai](https://repello.ai/solutions/ai-red-teaming))

### Giskard

A Paris-founded (2021) open-source AI testing company. The core library is Apache 2.0 licensed; the Giskard Hub is the paid enterprise layer for continuous red teaming of agents and RAG systems. Giskard led the Phare LLM safety benchmark with Google DeepMind as a research partner (February 2025), and its library underpins DeepLearning.AI's "Red Teaming LLM Applications" course — a notable academic/educational footprint most competitors don't have. ([docs.giskard.ai](https://docs.giskard.ai/))

### Cisco AI Defense (formerly Robust Intelligence)

Built on Robust Intelligence — "the industry's first AI Firewall," per Cisco — now offering algorithmic red teaming ("AI Validation"), AI visibility, access control, and runtime guardrails inside Cisco's broader security portfolio. Robust Intelligence was founded in 2019 by Yaron Singer; reported acquisition price was roughly $400M according to US media reports (Cisco itself did not disclose terms). ([cisco.com](https://www.cisco.com/site/us/en/products/security/ai-defense/robust-intelligence-is-part-of-cisco/index.html))

### Check Point Lakera (Lakera Red + Lakera Guard)

Founded 2021 in Zurich (now Check Point's AI security R&D hub). Combines pre-deployment red teaming with runtime protection, trained in part on data from the public Gandalf adversarial prompt-injection game — Lakera says more than 80 million adversarial patterns. Offers a free community tier of 10,000 API requests/month. Vendor-claimed detection above 98%, latency under 50ms, false positives below 0.5% — treat these as unverified marketing figures until tested on your own traffic. ([blog.checkpoint.com](https://blog.checkpoint.com/security/check-point-to-acquire-lakera-redefining-security-for-the-ai-era/))

### Zscaler AI Protect (SPLX)

SPLX was founded in 2023 in New York, had raised roughly $9M before being acquired, and offered automated red teaming with over 5,000 purpose-built attack simulations plus AI asset discovery and prompt-hardening. Now folded into Zscaler's AI Protect suite following the November 2025 acquisition. ([splx.ai](https://splx.ai/blog/zscaler-acquires-splx))

## Human-led and hybrid red teaming

CrowdStrike's AI Red Team Services, HackerOne's researcher-driven AI red teaming challenges, and consultancy-led engagements from Bishop Fox and NCC Group round out the human-in-the-loop side of this market — useful when you need a signed report rather than a dashboard.

**Sthuthi Securities** belongs here too, with a caveat worth stating plainly: it doesn't run continuous automated red teaming the way Mindgard or HiddenLayer do. Its **AI Security Assessment** ($9,500, ~10 business days) is a scoped, human-led engagement — one application, two critical workflows, up to five connected tools — that includes adversarial prompt-injection and tool-misuse testing as part of the methodology, not a standing red-team platform you integrate into CI/CD. If you need continuous automated testing between releases, that's a platform purchase (see above). If you need one thorough, human-verified pass before a launch or an audit, that's what a fixed-scope assessment like this is for. ([sthuthi-securities.vercel.app/services/ai-security-assessment](https://sthuthi-securities.vercel.app/services/ai-security-assessment))

See our [AI penetration testing companies guide](/blog/ai-penetration-testing-companies/) for the full services-firm comparison, including pricing for Astra, SecureLayer7, Qualysec, Vaadata, Synack, and Schellman alongside Sthuthi.

## Quick-answer comparison table

| Company | Independent? | Coverage | Notable claim | Best for |
|---|---|---|---|---|
| Mindgard | Yes | LLMs, agents, multimodal | 150+ disclosed vulnerabilities | CI/CD-integrated continuous testing |
| HiddenLayer | Yes | Full AI stack, no weight access needed | $100M Series B (Sep 2026) | Enterprises wary of sharing model weights |
| Repello AI | Yes | Agents, RAG, MCP | Runtime guardrails calibrated from findings | Agent-heavy / MCP-heavy stacks |
| Giskard | Yes (OSS + paid Hub) | LLM/RAG/agent testing | DeepMind-partnered safety benchmark | Teams wanting open-source-first |
| Cisco AI Defense | No (platform) | Enterprise AI estate | Built on "first AI Firewall" | Existing Cisco shops |
| Lakera (Check Point) | No (platform) | Prompt/RAG/MCP, 100+ languages | 80M+ adversarial patterns from Gandalf | Existing Check Point shops |
| Zscaler AI Protect | No (platform) | Full AI lifecycle | 5,000+ attack simulations | Existing Zscaler shops |
| Sthuthi Securities | Yes (human-led, not continuous) | One app, two workflows, five tools per engagement | Fixed $9,500 scope | One pre-launch or pre-audit pass |

## How to evaluate an AI red teaming vendor

1. **Check if it tests agents and MCP servers, not just chatbots.** Agentic systems have a different, broader attack surface — see our [agentic AI security guide](/blog/agentic-ai-security/) and [MCP server security guide](/blog/mcp-server-security/) for what should be covered.
2. **Ask whether testing is continuous or point-in-time.** Platforms (Mindgard, HiddenLayer, the acquired-brand suites) run continuously; a one-time red team engagement from a consultancy or a firm like Sthuthi gives you a snapshot. Both have a place — a continuous platform plus a periodic independent engagement is the strongest combination.
3. **Confirm framework mapping.** OWASP LLM Top 10 and OWASP Top 10 for Agentic Applications coverage, MITRE ATLAS mapping, and NIST AI RMF alignment should be explicit on the vendor's page, not something you have to ask about.
4. **Separate vendor-claimed metrics from independently verified ones.** Detection rates, false-positive percentages, and "vulnerabilities disclosed" counts in this space are almost universally self-reported. Ask for a reference customer or a sample finding.

We're disclosing this straight: Sthuthi Securities wrote this article and competes for some of the same engagements named above. Every fact on every other vendor here is sourced the same way regardless.

## FAQ

**Is AI red teaming the same as AI penetration testing?**
No — red teaming is broader and adversarial-goal-driven (can we get the model to do something bad, at scale, repeatedly), while penetration testing is scoped and compliance-oriented (find and report specific vulnerabilities). Full comparison in our [dedicated guide](/blog/ai-red-teaming-vs-penetration-testing/).

**Do I need a platform, a services firm, or both?**
If you ship model updates frequently, a continuous platform (Mindgard, HiddenLayer, or a bundled suite like Prisma AIRS) catches regressions between releases. If you need a report for an auditor or enterprise customer, you also want a periodic human-led engagement.

**Why did almost every independent AI red-teaming startup get acquired?**
Large security and cloud platforms wanted AI security as a native feature rather than a bolt-on, and 2025–26 was when most of them bought rather than built. It mirrors what happened to cloud security posture management (CSPM) a few years earlier.

**Does being acquired make a red-teaming product worse?**
Not inherently — it usually means tighter platform integration and more engineering resources — but it does mean the product is typically sold bundled into the parent's enterprise contract rather than as a standalone purchase.

**What's the Gandalf game Lakera is known for?**
A public, gamified prompt-injection challenge Lakera ran that generated a large dataset of real adversarial prompts, which it says now trains its detection models — an unusually transparent way to build a red-teaming dataset.

**Can I red-team my own models with free tools instead of paying a vendor?**
Yes, to a point — NVIDIA's garak and Microsoft's PyRIT are free, open-source, and actively maintained. See our [AI pentesting tools guide](/blog/ai-pentesting-tools/). They don't give you a vendor-backed SLA or a report for an auditor, but they're a legitimate way to test continuously between paid engagements.

**How is pricing structured for AI red-teaming platforms?**
Almost universally "custom quote," usually scaled by model/agent count, request volume, or seats, and typically sold as part of a broader enterprise security contract rather than à la carte. Services-firm engagements, like Sthuthi's $9,500 AI Security Assessment, tend to be flatter and scoped per application instead.

---

**Sources:** [Mindgard](https://mindgard.ai/) · [HiddenLayer](https://www.hiddenlayer.com) · [Repello AI](https://repello.ai/solutions/ai-red-teaming) · [Giskard](https://docs.giskard.ai/) · [Cisco AI Defense](https://www.cisco.com/site/us/en/products/security/ai-defense/robust-intelligence-is-part-of-cisco/index.html) · [Check Point / Lakera](https://blog.checkpoint.com/security/check-point-to-acquire-lakera-redefining-security-for-the-ai-era/) · [Zscaler / SPLX](https://splx.ai/blog/zscaler-acquires-splx) · [OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/) · [Sthuthi Securities AI Security Assessment](https://sthuthi-securities.vercel.app/services/ai-security-assessment)

<!-- FAQPage structured data — wire into this page's <head> at build time -->
```json-ld
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Is AI red teaming the same as AI penetration testing?", "acceptedAnswer": {"@type": "Answer", "text": "No — red teaming is broader and adversarial-goal-driven, while penetration testing is scoped and compliance-oriented (find and report specific vulnerabilities)."}},
    {"@type": "Question", "name": "Do I need a platform, a services firm, or both?", "acceptedAnswer": {"@type": "Answer", "text": "If you ship model updates frequently, a continuous platform catches regressions between releases. If you need a report for an auditor or enterprise customer, you also want a periodic human-led engagement."}},
    {"@type": "Question", "name": "Why did almost every independent AI red-teaming startup get acquired?", "acceptedAnswer": {"@type": "Answer", "text": "Large security and cloud platforms wanted AI security as a native feature rather than a bolt-on, and 2025–26 was when most of them bought rather than built."}},
    {"@type": "Question", "name": "Does being acquired make a red-teaming product worse?", "acceptedAnswer": {"@type": "Answer", "text": "Not inherently — it usually means tighter platform integration and more engineering resources, but the product is typically sold bundled into the parent's enterprise contract rather than as a standalone purchase."}},
    {"@type": "Question", "name": "What's the Gandalf game Lakera is known for?", "acceptedAnswer": {"@type": "Answer", "text": "A public, gamified prompt-injection challenge Lakera ran that generated a large dataset of real adversarial prompts, which it says now trains its detection models."}},
    {"@type": "Question", "name": "Can I red-team my own models with free tools instead of paying a vendor?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, to a point — NVIDIA's garak and Microsoft's PyRIT are free, open-source, and actively maintained. They don't give you a vendor-backed SLA or an auditor-ready report."}},
    {"@type": "Question", "name": "How is pricing structured for AI red-teaming platforms?", "acceptedAnswer": {"@type": "Answer", "text": "Almost universally 'custom quote,' usually scaled by model/agent count, request volume, or seats, and typically sold as part of a broader enterprise security contract."}}
  ]
}
```
