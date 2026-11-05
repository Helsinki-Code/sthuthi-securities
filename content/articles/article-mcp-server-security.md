---
title: "MCP Server Security in 2027: The New Attack Surface Nobody's Testing"
meta_description: "A complete 2027 guide to MCP server security: what MCP is, the five ways it gets attacked, what testing checks, and how to secure the tools your AI agent can reach."
primary_keyword: "MCP server security"
secondary_keywords: ["MCP security", "tool poisoning", "Model Context Protocol security", "MCP vulnerabilities", "secure MCP server"]
intent: Informational / commercial
author: "Sthuthi Securities"
reviewedBy: "Sthuthi Securities Testing Team"
datePublished: "2026-11-04"
dateModified: "2026-11-04"
status: draft — verify external links resolve; wire internal links once site is built; FAQPage JSON-LD at bottom is build-ready
---

# MCP Server Security in 2027: The New Attack Surface Nobody's Testing

*Reviewed by the Sthuthi Securities testing team · Last reviewed: November 2026*

> **Key stats:** Five documented attack classes cover most real-world MCP failures · Thousands of public and private MCP servers were in active use by 2026 · Near-zero competing coverage — this remains one of the least contested AI-security search terms.

**On this page:** [What is MCP](#what-is-mcp-and-why-is-it-a-security-problem) · [The five attack classes](#the-five-main-ways-an-mcp-server-gets-attacked) · [What testing checks](#what-mcp-server-security-testing-checks) · [How to secure a server](#how-to-secure-an-mcp-server) · [The wider agent picture](#mcp-security-and-the-wider-agent-picture) · [FAQ](#frequently-asked-questions)

An MCP server is one of the most dangerous things you can bolt onto an AI agent, because it hands the model real access to your tools, files, and data — and almost nobody is testing it yet. If your agent can read a database, send an email, or hit an internal API through the Model Context Protocol, that connection is an attack surface, and heading into 2027 it's usually an unguarded one.

This is what MCP server security covers: whether the tools your AI can reach can be abused, over-trusted, or turned against you. As agents connect to more enterprise systems, it's becoming one of the fastest-growing risks in AI security — IBM's [2026 Cost of a Data Breach report](https://newsroom.ibm.com/2026-07-29-ibm-study-one-in-four-malicious-breaches-are-ai-enabled,-costing-companies-6-million-on-average) flagged that breaches involving an organization's own AI rose sharply as agents wired into live systems.

## What is MCP, and why is it a security problem?

The Model Context Protocol (MCP) is an open standard, introduced by [Anthropic in late 2024](https://www.anthropic.com/news/model-context-protocol), that lets AI models connect to external tools and data sources in a consistent way. Instead of hand-wiring each integration, you run an MCP server that exposes "tools" — a database query, a file read, an email send — and the AI calls them. The official specification lives at [modelcontextprotocol.io](https://modelcontextprotocol.io/).

It caught on fast because it solves a real problem. By 2026 it had become the default way to give agents access to real systems, with thousands of public and private MCP servers in use. It became a security problem for the same reason it's useful: it gives a language model a direct line to systems that *do things*. And a language model can be talked into misusing that line (see [prompt injection testing](/blog/prompt-injection-testing/)).

The protocol itself isn't the weakness. The weakness is how MCP servers are built, scoped, and trusted — the same ordinary failures that cause every other breach, now wired to an AI that follows instructions from untrusted text.

## The five main ways an MCP server gets attacked

Five risk classes cover most of what goes wrong. None of them is exotic, which is exactly why they keep working.

| # | Risk class | In one line |
|---|---|---|
| 1 | Tool poisoning | A hidden instruction in a tool's description manipulates the model |
| 2 | Indirect injection via tool output | A tool's returned data carries a payload the model acts on |
| 3 | Over-broad permissions | One shared credential becomes the whole blast radius |
| 4 | Confused-deputy | The server acts on its own privileges, not the real user's |
| 5 | Unauthenticated/exposed servers | A server reachable without proper auth or network scoping |

### 1. Tool poisoning

An MCP tool describes itself to the model in natural language, and the model reads that description to decide how and when to use it. A malicious or compromised server can hide instructions inside that description — telling the model to exfiltrate data, call another tool, or ignore a rule — and the user never sees it. Security researchers demonstrated this against real MCP clients in 2025, and it remains one of the defining MCP-specific risks. If you install a third-party MCP server, you are trusting its tool descriptions as much as its code.

### 2. Indirect prompt injection through tool output

When a tool returns data — a web page, a file, a database row, a search result — that content can carry hidden instructions the model then acts on. The MCP server is the pipe that delivers the payload. An attacker doesn't need to touch your server; they just need to plant text where one of your tools will later fetch it.

### 3. Over-broad permissions and standing tokens

MCP servers are often handed one powerful credential that every tool call shares. If the agent is tricked, that single credential is the blast radius. This is the same shared-credential failure behind some of the largest breaches of 2025–26, now attached to an AI that can be manipulated into using it.

### 4. Confused-deputy problems

The server acts on the model's behalf with the server's own privileges, not the end user's. If it doesn't check who actually authorized an action, one user can reach another user's data, or an agent can do something no human approved. This is [excessive agency](/blog/owasp-llm-top-10/) (OWASP LLM06) wearing an MCP badge.

### 5. Unauthenticated or exposed servers

An MCP server reachable without strong authentication, or bound to a network it shouldn't be, is an open door. Several MCP implementations shipped with weak or missing auth, and a server meant for local use sometimes ends up reachable from places it was never meant to serve.

These map onto the broader risk families in the [OWASP Top 10 for LLM Applications](/blog/owasp-llm-top-10/) — prompt injection (LLM01), supply chain (LLM03), improper output handling (LLM05), and excessive agency (LLM06) in particular — and to [MITRE ATLAS](https://atlas.mitre.org/).

## What MCP server security testing checks

A real review of an MCP setup checks whether:

- Each tool is scoped to the authenticated user, not to a shared super-credential.
- Tool descriptions can't inject instructions the model will act on (tool poisoning).
- Tool output can't carry instructions the model will act on (indirect injection).
- The server verifies authorization before every consequential action, not just that the caller is "the agent."
- Consequential actions (writes, sends, payments, deletions) require human approval.
- Third-party MCP servers you depend on are inventoried, pinned, and trusted deliberately — not installed and forgotten.
- Credentials, tokens, and secrets aren't reachable by the model or leaked in tool responses.
- The server isn't exposed to a network or caller it shouldn't serve.

If a review only confirms the agent "works," it isn't security testing. The question is what happens when the agent is manipulated, which is the premise of any real [AI security assessment](/services/ai-security-assessment/).

## How to secure an MCP server

The defenses are the ones that hold for any system acting on untrusted input, applied to the AI case:

| Control | What it stops |
|---|---|
| Scope every tool to the end user | Confused-deputy and cross-user data access |
| Enforce authorization in the tool's own code, at execution time | The model granting itself access it shouldn't have |
| Require human approval for consequential actions | A single injection causing irreversible damage |
| Treat all tool output as untrusted before it reaches the model | Indirect prompt injection |
| Vet third-party MCP servers like any dependency | Tool poisoning and supply-chain compromise |
| Keep secrets out of the model's context and tool responses | Credential and token leakage |
| Authenticate and network-scope the server | Unauthenticated access |

These line up with Anthropic's own [MCP security guidance](https://modelcontextprotocol.io/) and the agent-security principles in the [OWASP GenAI project](https://genai.owasp.org/). Vetting third-party servers overlaps with a broader [software supply chain security review](/services/supply-chain-security/). Testing is how you find out whether these controls actually hold in your build, not just on the diagram.

## MCP security and the wider agent picture

MCP security doesn't stand alone. An agent with MCP tools is an [agentic AI system](/blog/agentic-ai-security/), and its risk is the sum of what it can be told to do (prompt injection) and what it's allowed to do (excessive agency). Securing the MCP layer is necessary but not sufficient — the model, the retrieval layer, and the approval flow all need the same scrutiny. That's why MCP testing is usually scoped inside a full [AI penetration testing](/services/ai-penetration-testing/) engagement rather than sold as a box-tick on its own.

## Frequently asked questions

**What is MCP?**
The Model Context Protocol, an open standard from Anthropic that lets AI models connect to external tools and data through a common interface.

**Is MCP secure?**
The protocol is reasonable; the risk is in how servers are built and trusted. Tool poisoning, over-broad permissions, and missing authorization are the common failures.

**What is tool poisoning?**
Hiding malicious instructions inside an MCP tool's description so the model acts on them without the user seeing. A compromised or malicious server can do this.

**How do you secure an MCP server?**
Scope tools to the real user, enforce authorization in code, require approval for consequential actions, treat tool output as untrusted, vet third-party servers, and keep secrets out of the model's reach.

**How is MCP security different from normal API security?**
It includes normal API security, plus the AI-specific risk that a model can be manipulated through text into misusing the tools you exposed.

**Are third-party MCP servers safe to install?**
Only after you vet them. A third-party server's tool descriptions and output both reach your model, so an untrusted server is a supply-chain risk.

**What are the risks of MCP?**
Tool poisoning, indirect prompt injection through tool output, over-broad permissions, confused-deputy authorization failures, and exposed or unauthenticated servers.

**How do agents use MCP?**
An agent connects to one or more MCP servers, reads the tools they expose, and calls those tools to read data or take actions as part of completing a task.

## Test your agent's tools before an attacker does

If your AI can act through an MCP server, that's the part worth checking first. [Discuss your project](/contact/) and we'll scope a test of your MCP tools and permissions — on systems you authorize, with a report and a retest.

---

Related reading: [Prompt Injection Testing](/blog/prompt-injection-testing/) · [AI Security Assessment](/services/ai-security-assessment/) · [OWASP LLM Top 10, explained](/blog/owasp-llm-top-10/) · [Agentic AI Security](/blog/agentic-ai-security/) · [Software Supply Chain Security](/services/supply-chain-security/)

External references: [Model Context Protocol (official)](https://modelcontextprotocol.io/) · [Anthropic: Introducing MCP](https://www.anthropic.com/news/model-context-protocol) · [OWASP GenAI Security Project](https://genai.owasp.org/) · [MITRE ATLAS](https://atlas.mitre.org/)

<!-- FAQPage structured data — wire into this page's <head> at build time -->
```json-ld
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What is MCP?", "acceptedAnswer": {"@type": "Answer", "text": "The Model Context Protocol, an open standard from Anthropic that lets AI models connect to external tools and data through a common interface."}},
    {"@type": "Question", "name": "Is MCP secure?", "acceptedAnswer": {"@type": "Answer", "text": "The protocol is reasonable; the risk is in how servers are built and trusted. Tool poisoning, over-broad permissions, and missing authorization are the common failures."}},
    {"@type": "Question", "name": "What is tool poisoning?", "acceptedAnswer": {"@type": "Answer", "text": "Hiding malicious instructions inside an MCP tool's description so the model acts on them without the user seeing. A compromised or malicious server can do this."}},
    {"@type": "Question", "name": "How do you secure an MCP server?", "acceptedAnswer": {"@type": "Answer", "text": "Scope tools to the real user, enforce authorization in code, require approval for consequential actions, treat tool output as untrusted, vet third-party servers, and keep secrets out of the model's reach."}},
    {"@type": "Question", "name": "How is MCP security different from normal API security?", "acceptedAnswer": {"@type": "Answer", "text": "It includes normal API security, plus the AI-specific risk that a model can be manipulated through text into misusing the tools you exposed."}},
    {"@type": "Question", "name": "Are third-party MCP servers safe to install?", "acceptedAnswer": {"@type": "Answer", "text": "Only after you vet them. A third-party server's tool descriptions and output both reach your model, so an untrusted server is a supply-chain risk."}},
    {"@type": "Question", "name": "What are the risks of MCP?", "acceptedAnswer": {"@type": "Answer", "text": "Tool poisoning, indirect prompt injection through tool output, over-broad permissions, confused-deputy authorization failures, and exposed or unauthenticated servers."}},
    {"@type": "Question", "name": "How do agents use MCP?", "acceptedAnswer": {"@type": "Answer", "text": "An agent connects to one or more MCP servers, reads the tools they expose, and calls those tools to read data or take actions as part of completing a task."}}
  ]
}
```
