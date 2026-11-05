---
title: "Best LLM Security Companies (2027 Guide)"
meta_description: "A 2027 guide to LLM security companies: runtime guardrails vs testing-only tools, who's independent, who got acquired, and how to choose for your LLM app."
primary_keyword: "LLM security companies"
secondary_keywords: ["LLM security vendors", "LLM runtime protection", "LLM security platform", "prompt injection protection vendors"]
intent: Mid-funnel, technical
author: "Sthuthi Securities"
reviewedBy: "Sthuthi Securities Testing Team"
datePublished: "2026-11-04"
dateModified: "2026-11-04"
status: draft — verify external links resolve; wire internal links once site is built; FAQPage JSON-LD at bottom is build-ready; disclosed conflict of interest retained
---

# Best LLM Security Companies (2027 Guide)

*Reviewed by the Sthuthi Securities testing team · Last reviewed: November 2026*

> **Key stats:** Lakera, Protect AI, and SPLX — all independent LLM security specialists before mid-2025 — are now inside Check Point, Palo Alto Networks, and Zscaler respectively · The core choice: **runtime guardrails** (block bad prompts/outputs live) vs **testing-only tools** (find problems, don't stop them).

**On this page:** [Runtime protection + testing](#runtime-protection--testing-platforms) · [Testing-first / open-source](#testing-first--open-source-options) · [Services firms](#services-firms-offering-llm-specific-testing) · [Comparison table](#quick-answer-table) · [How to choose](#how-to-choose) · [FAQ](#faq)

*Last verified: Q1 2027. "LLM security" sits one layer narrower than "AI security" — it's specifically about protecting the model/application layer (prompts, context, outputs) rather than infrastructure or governance. Most names here also appear in our broader [AI security companies](/blog/best-ai-security-companies/) and [AI red teaming companies](/blog/ai-red-teaming-companies/) guides; this list is focused on runtime protection plus testing, specifically for LLM apps.*

If you're here, you probably have a specific chatbot, RAG pipeline, or LLM-powered feature in production and you're looking for something that actively protects it — not just tests it once a quarter. That's the distinction that matters for this list: **runtime guardrails** (sit in front of your model, block bad prompts/outputs in real time) versus **testing-only tools and services** (find the problems, don't stop them live).

## Runtime protection + testing platforms

### Lakera (Check Point)

LLM-native runtime guardrails (Lakera Guard) plus pre-deployment red teaming (Lakera Red), covering prompts, RAG, and MCP boundaries in 100+ languages. Trained in part on data from the public Gandalf prompt-injection game (80M+ adversarial patterns, per Lakera). Free community tier: 10,000 API requests/month. Acquired by Check Point, deal closed November 2025. ([blog.checkpoint.com](https://blog.checkpoint.com/security/check-point-to-acquire-lakera-redefining-security-for-the-ai-era/))

### Prisma AIRS (Protect AI / Palo Alto Networks)

Runtime protection and red-teaming connectors covering OpenAI, Bedrock, Databricks, Hugging Face, REST, and Copilot Studio integrations, mapped to the OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF, and DASF. Acquired by Palo Alto Networks, closed July 22, 2025, later joined by the Portkey acquisition (closed May 29, 2026) for the AI gateway layer. ([paloaltonetworks.com](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-completes-acquisition-of-protect-ai))

### Cisco AI Defense

Runtime guardrails and access control built on Robust Intelligence's "AI Firewall" concept, plus algorithmic red teaming. Part of Cisco's broader security portfolio since the 2024 acquisition. ([cisco.com](https://www.cisco.com/site/us/en/products/security/ai-defense/robust-intelligence-is-part-of-cisco/index.html))

### HiddenLayer

Runtime security specifically for AI and agents, part of a broader platform spanning discovery, supply-chain security, and attack simulation — notably without requiring access to model weights or training data. Still independent; raised a $100M Series B in September 2026. ([hiddenlayer.com](https://www.hiddenlayer.com))

### Repello AI

ARGUS, Repello's runtime guardrail product, is explicitly calibrated using findings from its own ARTEMIS red-teaming engine — a tighter test-then-protect loop than vendors where testing and runtime protection are separate products. ([repello.ai](https://repello.ai/solutions/ai-red-teaming))

### WitnessAI

Intent-based policy enforcement and runtime defense with network-level visibility into how employees and agents are actually using AI — closer to an access-control layer than a per-prompt content filter. Still independent; raised $58M in January 2026. ([prnewswire.com](https://www.prnewswire.com/news-releases/witnessai-raises-58-million-for-global-expansion-and-announces-new-ways-to-secure-ai-agents-302659319.html))

### CrowdStrike Falcon AIDR

Blocks prompt injection and jailbreak attempts in real time, built on the Pangea acquisition, general availability December 15, 2025. Cites internal research on "180+ known prompt injection techniques" (vendor claim). ([crowdstrike.com](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-announces-general-availability-of-falcon-ai-detection-and-response/))

### Zscaler AI Protect (SPLX)

Automated red-teaming plus prompt-hardening and governance for the full AI lifecycle, following Zscaler's November 2025 acquisition of SPLX. ([splx.ai](https://splx.ai/blog/zscaler-acquires-splx))

## Testing-first / open-source options

### Promptfoo (OpenAI)

Open-source CLI and library for LLM evals and red-teaming, with a large developer community; being acquired by OpenAI (announced March 9, 2026) and explicitly staying open source under its current license. Covered in depth in our [AI pentesting tools guide](/blog/ai-pentesting-tools/). ([securityweek.com](https://www.securityweek.com/openai-to-acquire-ai-security-startup-promptfoo/))

### Giskard

Open-source LLM testing library plus the paid Giskard Hub, with Giskard Guards guardrails reportedly launched in 2026 (single secondary source — confirm directly before citing in a client-facing deck). Still independent. ([docs.giskard.ai](https://docs.giskard.ai/))

### Mindgard

Continuous, automated red-teaming for LLMs and agents (DAST-AI), with CLI/CI-CD integration — testing-focused rather than a runtime guardrail product. Still independent. ([mindgard.ai](https://mindgard.ai/))

## Services firms offering LLM-specific testing

If what you actually need is someone to test your LLM app before launch rather than a standing guardrail, this is the category.

**SecureLayer7** pairs LLM pentests with its own PromptPurify guardrail. **Vaadata**, **Astra Security**, and **Qualysec** all run dedicated LLM/prompt-injection testing as part of broader AI pentest engagements — full pricing and scope comparison in our [AI penetration testing companies guide](/blog/ai-penetration-testing-companies/).

**Sthuthi Securities** fits here too: its **AI Security Assessment** ($9,500, ~10 business days) specifically tests whether an LLM app leaks private data across customer boundaries, follows malicious instructions injected through retrieved content, or lets an agent bypass tool permissions — one application, two critical workflows, up to five connected tools, with a report and one retest included. It's a scoped testing engagement, not a runtime guardrail, so pair it with one of the platforms above if you need live protection in production as well. ([sthuthi-securities.vercel.app/services/ai-security-assessment](https://sthuthi-securities.vercel.app/services/ai-security-assessment))

## Quick-answer table

| Company | Runtime guardrails | Testing/red-teaming | Independent? |
|---|---|---|---|
| Lakera (Check Point) | Yes | Yes | No |
| Prisma AIRS (Protect AI) | Yes | Yes | No |
| Cisco AI Defense | Yes | Yes | No |
| HiddenLayer | Yes | Yes | Yes |
| Repello AI | Yes (ARGUS) | Yes (ARTEMIS) | Yes |
| WitnessAI | Yes (policy-based) | No | Yes |
| CrowdStrike Falcon AIDR | Yes | Via AI Red Team Services | No |
| Promptfoo | No | Yes (OSS) | Being acquired (stays OSS) |
| Mindgard | No | Yes | Yes |
| Sthuthi Securities | No | Yes (scoped engagement) | Yes |

## How to choose

1. **Need to stop prompt injection in production right now?** You need a runtime guardrail — Lakera, Prisma AIRS, Repello's ARGUS, or CrowdStrike's Falcon AIDR, not a testing-only tool.
2. **Need to find out if your chatbot is vulnerable before launch?** Start with testing — see our [prompt injection testing](/blog/prompt-injection-testing/) and [chatbot security testing](/blog/chatbot-security-testing/) guides, consider a free open-source scan with garak or Promptfoo, or book a scoped engagement like Sthuthi's AI Security Assessment.
3. **Running an agent that calls external tools or MCP servers?** Prioritize vendors with explicit agent/MCP coverage — Repello and the Prisma AIRS connectors are ahead on this specifically. See our [MCP server security guide](/blog/mcp-server-security/).
4. **Already locked into a security platform vendor?** Check if your existing provider (Palo Alto, Cisco, Check Point, Zscaler, CrowdStrike) already has an LLM security module before adding a new point solution.
5. **Want a one-time engagement rather than an ongoing subscription?** Go services-firm route instead — see [AI penetration testing companies](/blog/ai-penetration-testing-companies/) and our [LLM penetration testing guide](/blog/llm-penetration-testing/).

We're disclosing this directly: Sthuthi Securities wrote this guide and sits in the "services firms" section above, competing with SecureLayer7, Vaadata, Astra, and Qualysec for the same engagements.

## FAQ

**What's the difference between "LLM security" and "AI security"?**
LLM security is narrower — it's specifically about the model/application layer (prompts, outputs, context windows). AI security is the broader umbrella that also includes infrastructure, governance, and shadow-AI discovery. See our [broader AI security companies guide](/blog/best-ai-security-companies/).

**Do I need a runtime guardrail if I've already had a pentest done?**
Yes if your app is in production and the pentest was a point-in-time snapshot — a guardrail protects against new attack patterns discovered after your last test. The two are complementary, not substitutes.

**Can I use a free tool like Promptfoo or garak instead of a commercial platform?**
For testing, yes — both are capable and actively maintained. For *runtime* protection in production, you generally need a commercial guardrail product (Lakera, Prisma AIRS, Repello's ARGUS), since the open-source tools are testing tools, not production-grade inline filters.

**Why do so many LLM security vendors now belong to larger companies?**
The same consolidation wave that hit AI red-teaming hit LLM security specifically — Lakera, Protect AI, and SPLX were all independent LLM security specialists before being acquired into Check Point, Palo Alto Networks, and Zscaler respectively between mid-2025 and late-2025.

**Does a runtime guardrail slow down my application?**
Vendors claim low added latency (Lakera claims under 50ms, for example) but these are self-reported figures — test latency impact against your own traffic before committing in production.

**What should a runtime guardrail actually catch?**
At minimum: prompt injection (direct and indirect), jailbreak attempts, PII/sensitive-data leakage in outputs, and — increasingly — unauthorized tool calls if your LLM is agentic. Our [prompt injection testing guide](/blog/prompt-injection-testing/) breaks down the attack types in detail.

**Is MCP server security a separate product category, or part of LLM security?**
It's emerging as its own sub-category — a handful of vendors (Repello's MCP gateway is the clearest example) now sell dedicated MCP-layer protection, distinct from general prompt-level guardrails. See our [MCP server security guide](/blog/mcp-server-security/).

---

**Sources:** [Check Point / Lakera](https://blog.checkpoint.com/security/check-point-to-acquire-lakera-redefining-security-for-the-ai-era/) · [Palo Alto Networks](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-completes-acquisition-of-protect-ai) · [Cisco AI Defense](https://www.cisco.com/site/us/en/products/security/ai-defense/robust-intelligence-is-part-of-cisco/index.html) · [HiddenLayer](https://www.hiddenlayer.com) · [Repello AI](https://repello.ai/solutions/ai-red-teaming) · [WitnessAI](https://www.prnewswire.com/news-releases/witnessai-raises-58-million-for-global-expansion-and-announces-new-ways-to-secure-ai-agents-302659319.html) · [CrowdStrike](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-announces-general-availability-of-falcon-ai-detection-and-response/) · [Promptfoo / OpenAI](https://www.securityweek.com/openai-to-acquire-ai-security-startup-promptfoo/) · [Giskard](https://docs.giskard.ai/) · [Mindgard](https://mindgard.ai/) · [Sthuthi Securities AI Security Assessment](https://sthuthi-securities.vercel.app/services/ai-security-assessment)

<!-- FAQPage structured data — wire into this page's <head> at build time -->
```json-ld
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What's the difference between 'LLM security' and 'AI security'?", "acceptedAnswer": {"@type": "Answer", "text": "LLM security is narrower — it's specifically about the model/application layer (prompts, outputs, context windows). AI security is the broader umbrella that also includes infrastructure, governance, and shadow-AI discovery."}},
    {"@type": "Question", "name": "Do I need a runtime guardrail if I've already had a pentest done?", "acceptedAnswer": {"@type": "Answer", "text": "Yes if your app is in production and the pentest was a point-in-time snapshot — a guardrail protects against new attack patterns discovered after your last test."}},
    {"@type": "Question", "name": "Can I use a free tool like Promptfoo or garak instead of a commercial platform?", "acceptedAnswer": {"@type": "Answer", "text": "For testing, yes. For runtime protection in production, you generally need a commercial guardrail product, since the open-source tools are testing tools, not production-grade inline filters."}},
    {"@type": "Question", "name": "Why do so many LLM security vendors now belong to larger companies?", "acceptedAnswer": {"@type": "Answer", "text": "The same consolidation wave that hit AI red-teaming hit LLM security specifically — Lakera, Protect AI, and SPLX were all independent before being acquired between mid-2025 and late-2025."}},
    {"@type": "Question", "name": "Does a runtime guardrail slow down my application?", "acceptedAnswer": {"@type": "Answer", "text": "Vendors claim low added latency, but these are self-reported figures — test latency impact against your own traffic before committing in production."}},
    {"@type": "Question", "name": "What should a runtime guardrail actually catch?", "acceptedAnswer": {"@type": "Answer", "text": "At minimum: prompt injection (direct and indirect), jailbreak attempts, PII/sensitive-data leakage in outputs, and increasingly unauthorized tool calls if your LLM is agentic."}},
    {"@type": "Question", "name": "Is MCP server security a separate product category, or part of LLM security?", "acceptedAnswer": {"@type": "Answer", "text": "It's emerging as its own sub-category — a handful of vendors now sell dedicated MCP-layer protection, distinct from general prompt-level guardrails."}}
  ]
}
```
