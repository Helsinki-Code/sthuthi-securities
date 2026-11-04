import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { ArrowRight, Check, ClipboardText, CloudCheck, Download, FileLock, Flask, List, Moon, ShieldCheck, Sun, X, Warning } from './icons';
import { services, stages } from './catalog.mjs';
import { articleBySlug, articles, type Article } from './articles';
import { servicePageContent } from './service-content';

type Service = (typeof services)[number];
type RunResult = { run: { status: string }; finding: null | { title: string; reviewState: string; remediationState: string }; evidence: unknown[] };

const situations = [
  'A customer asked for a pen test report.', 'You are launching an AI support agent.',
  'A new integration can read private records.', 'Your app now handles refunds or account changes.',
  'A security questionnaire is holding up a deal.', 'You need to get SOC 2 ready.',
];

const workbookFormats = [
  { format: 'pdf', label: 'Download PDF', detail: 'Print-ready · 1.6 MB', file: 'Penetration-Test-Scoping-Workbook.pdf', primary: true },
  { format: 'docx', label: 'Download DOCX', detail: 'Editable · 3.8 MB', file: 'Penetration-Test-Scoping-Workbook.docx' },
  { format: 'epub', label: 'Download EPUB', detail: 'E-reader · 2.9 MB', file: 'Penetration-Test-Scoping-Workbook.epub' },
  { format: 'md', label: 'Download Markdown', detail: 'Plain source · 60 KB', file: 'Penetration-Test-Scoping-Workbook.md' },
];

const resourceGuides = [
  { slug: 'saas-founders-enterprise-security-reviews', file: 'The-SaaS-Founders-Guide-to-Passing-Enterprise-Security-Reviews', category: 'Enterprise security', title: 'The SaaS Founder’s Guide to Passing Enterprise Security Reviews', description: 'Build one truthful evidence system for questionnaires, customer calls, audits, renewals, and enterprise deals.', words: '12,403' },
  { slug: 'scope-web-app-api-penetration-test', file: 'How-to-Scope-a-Web-Application-and-API-Penetration-Test', category: 'Penetration testing', title: 'How to Scope a Web Application and API Penetration Test', description: 'Define targets, roles, tenants, workflows, safety rules, evidence, reporting, and retesting before testing begins.', words: '10,322' },
  { slug: 'first-90-days-startup-security-program', file: 'The-First-90-Days-of-a-Startup-Security-Program', category: 'Security program', title: 'The First 90 Days of a Startup Security Program', description: 'A sequenced operating plan for ownership, inventory, access, engineering, incidents, recovery, and customer proof.', words: '12,560' },
  { slug: 'preparing-first-customer-security-audit', file: 'Preparing-for-Your-First-Customer-Security-Audit', category: 'Customer assurance', title: 'Preparing for Your First Customer Security Audit', description: 'Scope the review, inspect evidence, rehearse interviews, control disclosure, and close findings without contradiction.', words: '12,462' },
  { slug: 'repeatable-security-testing-program', file: 'Building-a-Repeatable-Security-Testing-Program', category: 'Security testing', title: 'Building a Repeatable Security Testing Program', description: 'Choose tests from risk, run them safely, remediate findings, verify results, and measure coverage across releases.', words: '12,454' },
  { slug: 'ai-security-customer-support-agents', file: 'AI-Security-for-Customer-Support-Agents', category: 'AI security', title: 'AI Security for Customer-Support Agents', description: 'Protect customer data, constrain tools, verify identity, require approval, and test agent failure paths.', words: '12,526' },
  { slug: 'security-proof-enterprise-deals', file: 'Security-Proof-That-Helps-Close-Enterprise-Deals', category: 'Security sales proof', title: 'Security Proof That Helps Close Enterprise Deals', description: 'Package accurate claims, current evidence, independent assurance, and controlled disclosure into buyer-ready proof.', words: '12,499' },
];

const guideFormats = [
  { format: 'pdf', label: 'PDF', detail: 'Print-ready' },
  { format: 'docx', label: 'DOCX', detail: 'Editable' },
  { format: 'epub', label: 'EPUB', detail: 'E-reader' },
  { format: 'md', label: 'Markdown', detail: 'Source' },
];

function useDocumentMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const article = pathname.startsWith('/blog/') ? articleBySlug.get(pathname.slice('/blog/'.length)) : undefined;
    const serviceSlug = pathname.startsWith('/services/') ? pathname.slice('/services/'.length) : '';
    const serviceContent = servicePageContent[serviceSlug];
    const names: Record<string, string> = {
      '/': 'Security testing for apps, cloud, and AI', '/services': 'Security services and pricing',
      '/pricing': 'Security assessment pricing and scope', '/process': 'How a security assessment works',
      '/how-it-works': 'How security assessments work',
      '/sample-report': 'Sample security assessment report', '/security': 'Security and data handling',
      '/about': 'About Sthuthi Securities', '/request': 'Discuss your security project',
      '/blog': 'Security testing field notes', '/resources': 'Free security resources and workbooks',
      '/workspace': 'Demo client workspace', '/demo-workspace': 'Demo security assessment workspace', '/internal': 'Demo delivery console',
    };
    const descriptions: Record<string, string> = {
      '/services': 'Compare ten scoped cybersecurity services for web applications, APIs, cloud systems, AI agents, software delivery, audit readiness, incident preparation, and remediation.',
      '/pricing': 'Review starting prices, scope boundaries, timing, access needs, and commercial terms for penetration testing, AI security, cloud reviews, compliance readiness, and recurring testing.',
      '/process': 'See how Sthuthi scopes, authorizes, tests, reviews, reports, and verifies security findings.',
      '/how-it-works': 'See how Sthuthi scopes, authorizes, tests, reviews, reports, and verifies security findings.',
      '/security': 'Read how Sthuthi handles authorization, tenant boundaries, evidence, secrets, downloads, human review, provider status, retention, and incident decisions.',
      '/sample-report': 'Review a labeled example security finding with evidence, impact, remediation guidance, review state, and retest status.',
      '/demo-workspace': 'Explore a local, synthetic security assessment workflow from authorized test through review, remediation, and verified retest.',
      '/about': 'Learn how Sthuthi Securities approaches authorized security testing, evidence, AI-agent risk, remediation, and honest assurance claims.',
      '/request': 'Start a security assessment scope for a web app, API, cloud system, AI agent, compliance review, or remediation project.',
      '/resources': 'Download practical security workbooks and long-form guides for penetration testing, enterprise reviews, audits, AI agents, and security programs.',
    };
    const title = serviceContent?.seoTitle || article?.title || names[pathname] || 'Sthuthi Securities';
    const description = serviceContent?.seoDescription || article?.description || descriptions[pathname] || (pathname === '/blog'
      ? 'Practical guidance on penetration testing, AI security, security questionnaires, reports, and compliance evidence.'
      : 'Authorized security testing for web applications, APIs, cloud systems, and AI agents.');
    document.title = title.includes('Sthuthi Securities') ? title : `${title} | Sthuthi Securities`;
    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let node = document.head.querySelector<HTMLMetaElement>(selector);
      if (!node) { node = document.createElement('meta'); node.setAttribute(attribute, key); document.head.appendChild(node); }
      node.content = content;
    };
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', article ? 'article' : 'website');
    setMeta('meta[property="og:image"]', 'property', 'og:image', article?.featuredImage || '/brand/og-image.png');
    const noIndex = ['/workspace', '/demo-workspace', '/internal', '/sign-in', '/invite', '/privacy', '/terms'].includes(pathname);
    setMeta('meta[name="robots"]', 'name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    window.scrollTo({ top: 0 });
  }, [pathname]);
}

function Brand({ compact = false }: { compact?: boolean }) {
  return <Link className="brand" to="/" aria-label="Sthuthi Securities home">
    <img src="/brand/logo-mark-round.png" alt="" />
    <span><strong>Sthuthi</strong> Securities{!compact && <small>Cybersecurity testing</small>}</span>
  </Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('ss-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('ss-theme', theme); }, [theme]);
  const links = [['/services', 'Services'], ['/pricing', 'Pricing'], ['/how-it-works', 'How it works'], ['/resources', 'Resources'], ['/blog', 'Field notes'], ['/security', 'Security']];
  return <header className="site-header">
    <div className="nav-shell">
      <Brand />
      <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <List />}</button>
      <nav className={open ? 'open' : ''} aria-label="Primary navigation">
        {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <NavLink to="/demo-workspace" onClick={() => setOpen(false)}>Demo workspace</NavLink>
      </nav>
      <div className="nav-actions">
        <button className="theme-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
        <Link className="button small" to="/request">Discuss your project</Link>
      </div>
    </div>
  </header>;
}

function Footer() {
  return <footer>
    <div className="footer-grid">
      <div><Brand /><p>Clear, authorized security testing for software, cloud systems, and AI agents.</p></div>
      <div><h3>Work</h3><Link to="/services">Services</Link><Link to="/pricing">Pricing</Link><Link to="/sample-report">Sample report</Link><Link to="/resources">Resources</Link><Link to="/blog">Field notes</Link></div>
      <div><h3>Company</h3><Link to="/about">About</Link><Link to="/security">Security</Link><a href="https://sthuthi-tech.com">Sthuthi Technologies</a></div>
      <div><h3>Legal</h3><Link to="/privacy">Privacy draft</Link><Link to="/terms">Terms draft</Link><Link to="/sign-in">Sign in</Link></div>
    </div>
    <div className="footer-floor"><span>© 2026 Sthuthi Technologies, LLC</span><span>External providers are unconnected in this demo.</span></div>
  </footer>;
}

function Layout({ children }: { children: ReactNode }) {
  useDocumentMeta();
  return <><a className="skip" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></>;
}

function Status({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'attention' | 'good' | 'danger' }) {
  return <span className={`status ${tone}`}><span aria-hidden="true" />{children}</span>;
}

function FindingPreview({ retested = false, reviewState = 'Confirmed' }: { retested?: boolean; reviewState?: string }) {
  return <article className="finding-paper">
    <div className="paper-top"><span className="mono">FINDING · SS-AI-004</span><Status tone={retested ? 'good' : reviewState === 'Confirmed' ? 'danger' : 'attention'}>{retested ? 'Fixed and verified' : `High · ${reviewState}`}</Status></div>
    <p className="kicker">Illustrative example · Demo data</p>
    <h3>The support agent could access another customer's order.</h3>
    <dl className="finding-details">
      <div><dt>Impact</dt><dd>A signed-in customer could receive order details belonging to someone else.</dd></div>
      <div><dt>Observation</dt><dd>The demo agent returned Customer B's order during Customer A's session.</dd></div>
      <div><dt>Recommended change</dt><dd>Check order ownership in the orders API before returning details.</dd></div>
      <div><dt>Owner</dt><dd>Example App · API team</dd></div>
    </dl>
    <div className="evidence"><span className="mono">POST /orders/ORDER-B-204</span><span>Observed 200 · Expected 403</span></div>
    {retested && <p className="retest-note"><Check weight="bold" /> The corrected API rejected the same request. Tested agent version and scenario recorded.</p>}
  </article>;
}

function Hero() {
  return <section className="hero grid-bg">
    <div className="hero-copy">
      <p className="eyebrow"><span /> Authorized assessment · clear evidence</p>
      <h1>Security testing for the apps, cloud, and AI your business runs on.</h1>
      <p className="lede">We check whether your software and AI tools can expose customer data or take actions they shouldn't. You get clear findings, help with the fixes, and a retest.</p>
      <div className="button-row"><Link className="button" to="/request">Discuss your project</Link><Link className="button secondary" to="/sample-report">View a sample report</Link></div>
      <p className="plain-note"><ShieldCheck /> Projects begin after scope, ownership, and written authorization are confirmed.</p>
    </div>
    <div className="hero-visual">
      <FindingPreview />
      <img className="mascot hero-mascot" src="/art/sthuthi-guide-planning.png" alt="Sthuthi guide reviewing the assessment evidence" />
    </div>
  </section>;
}

function Situations() {
  return <section className="situations section-shell"><div className="section-intro"><p className="kicker">Why teams call</p><h2>You already know the deadline. We help establish what has to be tested.</h2></div>
    <div className="situation-list">{situations.map((s, i) => <div key={s}><span className="mono">0{i + 1}</span><p>{s}</p></div>)}</div>
  </section>;
}

function ServiceRows({ limit }: { limit?: number }) {
  const rows = limit ? services.filter(s => s.featured).slice(0, limit) : services;
  return <div className="service-table">{rows.map((service, index) => <article className="service-row" key={service.slug}>
    <span className="service-index mono">{String(index + 1).padStart(2, '0')}</span>
    <div><div className="service-title"><h3><Link to={`/services/${service.slug}`}>{service.name}</Link></h3>{!service.available && <Status tone="attention">Availability gated</Status>}</div><p>{service.trigger}</p><small>{service.technical}</small></div>
    <div className="service-meta"><strong>{service.price}</strong><span>{service.timing}</span></div>
    <Link className="text-link" to={`/services/${service.slug}`} aria-label={`See ${service.name}`}>Scope <ArrowRight /></Link>
  </article>)}</div>;
}

function ProcessStrip() {
  const items = ['Agree on scope', 'Sign authorization', 'Review access', 'Test', 'Explain findings', 'Fix and retest'];
  return <section className="process-dark"><div className="section-shell"><div className="section-intro light"><p className="kicker">A lawful test has boundaries</p><h2>Every run traces back to an agreed system and test window.</h2></div>
    <ol className="process-list">{items.map((item, i) => <li key={item}><span>{i + 1}</span><strong>{item}</strong>{i === 1 && <em>Required before testing</em>}</li>)}</ol>
    <Link className="button light-button" to="/how-it-works">Read the assessment process</Link>
  </div></section>;
}

function DataNote() {
  return <section className="data-note section-shell">
    <img className="mascot desk-mascot" src="/art/sthuthi-guide-laptop.png" alt="Sthuthi guide working at a laptop" />
    <div><p className="kicker">Data handling</p><h2>Evidence stays tied to the engagement.</h2><p>We collect the minimum needed for the agreed test, redact sensitive values before client-visible reporting, and never ask you to paste credentials into a message or request form.</p><Link className="text-link" to="/security">See the controls <ArrowRight /></Link></div>
    <div className="data-rules"><p><FileLock /> Short-lived authorized downloads</p><p><CloudCheck /> Provider and data-region status shown as configured</p><p><ClipboardText /> Evidence keeps its source, version, digest, and reviewer</p></div>
  </section>;
}

function Home() {
  return <Layout><Hero /><Situations /><section className="section-shell services-home"><div className="section-intro"><p className="kicker">Main entry points</p><h2>Start with the question you need answered.</h2></div><ServiceRows limit={3} /><Link className="button secondary" to="/services">See all services and pricing</Link></section><ProcessStrip /><section className="report-split section-shell"><div><p className="kicker">A report engineers can use</p><h2>Evidence, impact, a specific fix, and the retest result.</h2><p>Findings keep review state separate from remediation state. A request for retest does not mark an issue fixed.</p><Link className="button" to="/sample-report">View the sample report</Link></div><FindingPreview retested /></section><DataNote /><RequestPanel /></Layout>;
}

function PageHero({ kicker, title, body, aside }: { kicker: string; title: string; body: string; aside?: ReactNode }) {
  return <section className="page-hero grid-bg"><div><p className="eyebrow"><span />{kicker}</p><h1>{title}</h1><p className="lede">{body}</p></div>{aside}</section>;
}

function ServicesPage() {
  const paths = [
    ['Prove a product boundary', 'Penetration testing and AI security assessment answer whether customer data, permissions, and sensitive actions stay inside the intended boundary.', 'penetration-testing'],
    ['Control the operating environment', 'Cloud and SaaS access reviews, supply-chain reviews, and incident exercises address the systems that build, run, and recover the product.', 'saas-cloud-security'],
    ['Prepare evidence for buyers', 'Compliance readiness connects each customer or framework requirement to a current control, evidence owner, remaining gap, and approved claim.', 'compliance-readiness'],
    ['Keep fixes and releases verified', 'Remediation engineering and ongoing testing keep implementation evidence separate from independent verification.', 'security-fixes-retesting'],
  ];
  return <Layout><PageHero kicker="Ten separately scoped services" title="Buy the security answer your team actually needs." body="Each service has its own system boundary, access model, test method, evidence standard, exclusions, and definition of done. Choose by the decision in front of you, not by a vague security label." aside={<img className="mascot page-mascot" src="/art/sthuthi-guide-planning.png" alt="Sthuthi guide mapping a security assessment" />} />
    <section className="section-shell buyer-paths"><div className="section-intro"><p className="kicker">Choose by outcome</p><h2>Four reasons teams start the work.</h2></div><div className="buyer-path-grid">{paths.map(([title, body, slug], index) => <article key={title}><span className="mono">0{index + 1}</span><h3>{title}</h3><p>{body}</p><Link className="text-link" to={`/services/${slug}`}>See the matching scope <ArrowRight /></Link></article>)}</div></section>
    <section className="service-catalog-section"><div className="section-shell"><div className="section-intro"><p className="kicker">Service catalog</p><h2>Compare price, timing, availability, and the trigger for every service.</h2></div><ServiceRows /></div></section>
    <section className="section-shell proof-standard"><div><p className="kicker">The proof standard</p><h2>A result is useful only when someone can rely on it.</h2></div><div className="proof-grid"><article><h3>Authorized</h3><p>Named targets, ownership, permitted actions, test window, contacts, and stop conditions are recorded before testing.</p></article><article><h3>Reproducible</h3><p>Evidence stays tied to the tested version, workflow, expected control, observed result, and reviewer.</p></article><article><h3>Actionable</h3><p>Confirmed findings state impact, affected scope, a specific change, an owner, and the evidence required for verification.</p></article></div></section><RequestPanel /></Layout>;
}

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const content = slug ? servicePageContent[slug] : undefined;
  useEffect(() => {
    if (!service || !content) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-structured-data';
    script.text = JSON.stringify({
      '@context': 'https://schema.org', '@graph': [
        { '@type': 'Service', name: service.name, description: content.seoDescription, provider: { '@type': 'Organization', name: 'Sthuthi Technologies, LLC' }, areaServed: 'US', offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', description: service.price } } },
        { '@type': 'FAQPage', mainEntity: content.faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
      ],
    });
    document.head.querySelector('#service-structured-data')?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [service, content]);
  if (!service || !content) return <NotFound />;
  const guideLink = service.slug === 'ai-security-assessment' ? '/resources#guide-library-title' : service.slug === 'compliance-readiness' ? '/resources#guide-library-title' : service.slug === 'penetration-testing' ? '/resources#scoping-workbook-title' : '/blog';
  return <Layout><div className={`service-specific service-${service.slug}`}><PageHero kicker={service.technical} title={service.name} body={content.outcome} aside={<div className="quote-panel"><span>Starting scope</span><strong>{service.price}</strong><p>{service.timing}</p>{service.available ? <Status tone="good">Accepting scoping requests</Status> : <Status tone="attention">Availability gated</Status>}<Link className="button" to={`/request?service=${service.slug}`}>Discuss this scope</Link></div>} />
    <section className="service-trigger section-shell"><div><p className="kicker">When to use this service</p><h2>{service.trigger}</h2><p>{service.description}</p></div><aside><h3>Baseline offer</h3><ul className="check-list">{service.includes.map(item => <li key={item}><Check />{item}</li>)}</ul></aside></section>
    <section className="service-questions"><div className="section-shell"><div className="section-intro light"><p className="kicker">Questions this engagement answers</p><h2>The scope is built around observable decisions, not a generic checklist.</h2></div><div className="question-grid">{content.questions.map((question, index) => <article key={question}><span className="mono">Q{index + 1}</span><p>{question}</p></article>)}</div></div></section>
    <section className="section-shell service-coverage"><div className="section-intro"><p className="kicker">Service-specific coverage</p><h2>What is examined in this engagement.</h2></div><div className="coverage-grid">{content.coverage.map((item, index) => <article key={item.title}><span className="mono">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
    <section className="service-method"><div className="section-shell"><div className="section-intro"><p className="kicker">Delivery method</p><h2>How this service moves from scope to evidence.</h2></div><ol>{content.method.map((item, index) => <li key={item.title}><span>{index + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></li>)}</ol></div></section>
    <section className="section-shell service-commercial"><div><p className="kicker">Deliverables</p><h2>What your team receives.</h2><ul className="check-list">{content.deliverables.map(item => <li key={item}><Check />{item}</li>)}</ul></div><aside><h3>Access required</h3><p>{service.access}</p><h3>Exclusions and limits</h3><ul>{content.exclusions.map(item => <li key={item}>{item}</li>)}</ul><p className="boundary"><Warning /> {service.limits}</p></aside></section>
    <section className="service-faq"><div className="section-shell"><div className="section-intro"><p className="kicker">Buying questions</p><h2>What teams ask before scoping {service.name.toLowerCase()}.</h2></div><div className="faq-list">{content.faqs.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div><div className="related-service-links"><Link className="text-link" to={guideLink}>Read the related security guidance <ArrowRight /></Link><Link className="text-link" to="/sample-report">See the report evidence model <ArrowRight /></Link><Link className="text-link" to="/how-it-works">Review the delivery process <ArrowRight /></Link></div></div></section>
    <RequestPanel service={service.slug} /></div></Layout>;
}

function PricingPage() {
  const drivers = [['System boundary', 'Hosts, applications, APIs, cloud accounts, repositories, providers, and third parties included in the work.'], ['Roles and workflows', 'The number of tenants, permission levels, sensitive actions, integrations, and failure paths that require evidence.'], ['Operating conditions', 'Production restrictions, data sensitivity, test windows, rate limits, monitoring, and coordination requirements.'], ['Evidence and follow-through', 'Report audience, walkthroughs, remediation support, retests, framework mapping, and disclosure needs.']];
  return <Layout><PageHero kicker="Transparent starting scopes" title="Security assessment pricing with the boundary beside it." body="Starting prices help teams budget. The signed quote names the actual systems, workflows, access, test rules, evidence, exclusions, delivery dates, and retest terms before payment." />
    <section className="section-shell pricing-drivers"><div className="section-intro"><p className="kicker">What changes a quote</p><h2>Price follows the number of security decisions the work must prove.</h2></div><div className="driver-grid">{drivers.map(([title, body], index) => <article key={title}><span className="mono">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="service-catalog-section"><div className="section-shell"><div className="section-intro"><p className="kicker">Published offers</p><h2>Compare every starting price and delivery model.</h2></div><ServiceRows /></div></section>
    <section className="section-shell pricing-terms"><div><p className="kicker">Every quote should state</p><h2>The commercial record is part of the control boundary.</h2></div><ul className="check-list"><li><Check />Named in-scope and excluded systems</li><li><Check />Required access, client owners, and delivery dependencies</li><li><Check />Testing window, safety rules, stop conditions, and contacts</li><li><Check />Report, walkthrough, remediation, and retest terms</li><li><Check />Fees, taxes, third-party costs, term, and payment schedule</li></ul><aside className="pricing-note"><h3>Recurring testing terms</h3><p>Ongoing Security Testing starts at $7,500 per month, includes a separate $5,000 setup fee, and begins with a three-month term. Work beyond 30 specialist hours in a month requires written approval.</p><h3>Payment status</h3><p>A payment provider is not connected in this release. The site accepts a scoping request; it does not collect card details or represent a booking as confirmed.</p></aside></section><RequestPanel /></Layout>;
}

function ProcessPage() {
  const detail = [
    ['Decision and scope', 'We identify the relying audience, deadline, product or operating boundary, sensitive workflows, exclusions, and the question the final evidence must answer.'],
    ['Written authorization', 'The signed record names ownership evidence, in-scope targets, permitted actions, prohibited techniques, test window, rate limits, monitoring contacts, and stop conditions.'],
    ['Access and fixture review', 'Test accounts, tenants, roles, fake data, environment, tool permissions, and secure credential handoff are checked before scheduling. Credentials never belong in an ordinary form or message.'],
    ['Assessment plan', 'The assessor converts the scope into scenarios with preconditions, expected controls, safety limits, evidence requirements, and review criteria.'],
    ['Bounded testing', 'Testing stays inside the allowlist, window, request budget, concurrency limit, and cancellation controls. Partial and failed runs remain visible.'],
    ['Evidence and finding review', 'A named reviewer checks the affected asset, failed control, observed consequence, repeatability, severity, and sanitization before confirming a finding.'],
    ['Report and engineering walkthrough', 'The report separates executive decisions from technical evidence. Engineers receive reproduction, impact, the intended control, a specific change, and verification criteria.'],
    ['Remediation and retest', 'Ready for retest is not fixed. Verification repeats the original path, checks likely bypasses, records the changed version, and requires new evidence and reviewer sign-off.'],
  ];
  const responsibilities = [['Scope owner', 'Confirms business objective, system boundary, third-party permission, exclusions, and relying audience.'], ['Technical owner', 'Provides test accounts, representative data, architecture context, monitoring contacts, and safe environment access.'], ['Sthuthi assessor', 'Designs and runs authorized scenarios, protects evidence, observes limits, and records results without overstating them.'], ['Named reviewer', 'Confirms findings, severity, report readiness, and retest evidence independently from the remediation claim.']];
  return <Layout><PageHero kicker="From request to verified fix" title="How an authorized security assessment works." body="The workflow records who approved the work, what could be tested, which controls were expected, what was observed, who reviewed it, and what new evidence proves a fix." />
    <section className="section-shell process-detail">{detail.map(([title, body], i) => <article key={title}><span className="mono">{String(i + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</section>
    <section className="process-responsibility"><div className="section-shell"><div className="section-intro light"><p className="kicker">Named responsibility</p><h2>Delivery stays clear when each decision has an owner.</h2></div><div className="responsibility-grid">{responsibilities.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section-shell process-gates"><div><p className="kicker">Evidence gates</p><h2>Four states that cannot be skipped.</h2></div><ol><li><span>01</span><div><h3>Authorized</h3><p>Testing is locked until target, authority, window, actions, and contacts are accepted.</p></div></li><li><span>02</span><div><h3>Observed</h3><p>A tool result or tester observation is evidence, not yet a confirmed finding.</p></div></li><li><span>03</span><div><h3>Confirmed</h3><p>A reviewer establishes the failed control, security consequence, affected scope, and severity.</p></div></li><li><span>04</span><div><h3>Fixed and verified</h3><p>A changed version produces new evidence that the control now denies the recorded path and likely bypasses.</p></div></li></ol></section><RequestPanel /></Layout>;
}

function SampleReport() {
  const anatomy = [['Decision summary', 'The relying audience can see the assessed boundary, material results, unresolved risk, and the decisions required without reading raw traces.'], ['Finding record', 'Each confirmed issue states affected assets, roles, tenants, prerequisites, observed behavior, expected control, impact, severity, and specific remediation.'], ['Evidence provenance', 'The record keeps the tested version, scenario, sanitized request or action, observed result, tool or fixture version, digest, and reviewer.'], ['Verification status', 'Open, accepted, ready for retest, and fixed and verified remain separate. Closure requires new evidence against the changed version.']];
  return <Layout><PageHero kicker="Illustrative example · Demo data" title="A security report should support a decision and an engineering fix." body="This sample uses a local synthetic support app with fake customers and orders. It shows the evidence and review model; it is not evidence from a client system." /><section className="sample-layout section-shell"><FindingPreview retested /><aside className="report-index"><p className="mono">EXAMPLE SUPPORT APP · V1.1</p><h3>Report record</h3><dl><div><dt>Assessment</dt><dd>AI Security Assessment</dd></div><div><dt>Scope</dt><dd>Order lookup and refund request</dd></div><div><dt>Reviewer</dt><dd>Demo reviewer</dd></div><div><dt>Evidence digest</dt><dd className="mono">9f86d081…0a08</dd></div><div><dt>Status</dt><dd>Demo data</dd></div></dl><p>This preview remains labeled demo data in print and export.</p></aside></section><section className="report-anatomy"><div className="section-shell"><div className="section-intro light"><p className="kicker">Report anatomy</p><h2>Four records make the result usable after delivery.</h2></div><div className="responsibility-grid">{anatomy.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section><section className="section-shell disclosure-model"><div><p className="kicker">Acceptance standard</p><h2>What a buyer or engineer should be able to verify.</h2></div><div><p>The report identifies what was and was not tested, the assessment dates, environment, constraints, confirmed findings, severity method, unresolved limitations, and retest terms.</p><p>A finding is not presented as verified merely because a scanner reported it, a model suggested it, or an engineer marked work complete.</p><div className="button-row"><Link className="button" to="/request">Discuss a report-ready assessment</Link><Link className="button secondary" to="/demo-workspace">Use the demo workflow</Link></div></div></section></Layout>;
}

function SecurityPage() {
  const controls = [
    ['Tenant boundaries', 'Every engagement, API route, document, and job checks organization and role on the server.'],
    ['Runner boundaries', 'Targets must appear in a signed authorization and active test window. Private, loopback, link-local, and cloud metadata destinations are denied by default.'],
    ['Evidence provenance', 'Records keep the test and tool version, sanitized trace, observed result, expected rule, digest, limits, and reviewer.'],
    ['Secrets and files', 'Credentials use an external secret manager when configured. Downloads are short-lived; uploads need validation and quarantine before live use.'],
    ['Human review', 'Model suggestions never become confirmed findings automatically. A named reviewer signs off on consequential results.'],
    ['Retention and access', 'Retention, personnel regions, backup, and deletion schedules must be configured and disclosed before live delivery.'],
  ];
  const lifecycle = [['Before collection', 'The scope states which client data is needed, why it is needed, who can access it, the transfer method, retention decision, and prohibited data.'], ['During testing', 'Evidence is minimized, sanitized, linked to the engagement, protected by role and organization checks, and kept out of ordinary messages.'], ['Report and disclosure', 'Client-visible records separate evidence, interpretation, remediation state, and retest state. Downloads require short-lived authorization when live storage is configured.'], ['Closure', 'The final operating policy must define retention, backup expiry, deletion, legal holds, client export, provider removal, and proof of deletion.']];
  return <Layout><PageHero kicker="Security and data handling" title="The assessment system is part of the security boundary." body="This page separates implemented local controls from the provider, retention, personnel, and incident decisions that must be configured before live delivery." />
    <section className="security-status"><div className="section-shell"><div><p className="kicker">Current release status</p><h2>Local demonstration controls are implemented. External delivery providers remain unconnected.</h2><p>No claim is made that live identity, secret storage, object storage, payment, notification, model, or production-scanner controls exist until the owner configures and verifies them.</p></div><div className="status-board"><p><Status tone="good">Implemented locally</Status> Tenant and role checks, synthetic target allowlist, signed authorization gate, run cancellation, review states, evidence digests</p><p><Status tone="attention">Unconnected</Status> Identity, secrets, object storage, payment, email notification, external model, production scanners</p><p><Status tone="neutral">Owner decision required</Status> Retention, backups, deletion, personnel regions, incident notice, subprocessors, insurance</p></div></div></section>
    <section className="section-shell control-list"><div className="section-intro"><p className="kicker">Control model</p><h2>Six boundaries protect the engagement record.</h2></div>{controls.map(([t, b], i) => <article key={t}><span>{i + 1}</span><div><h2>{t}</h2><p>{b}</p></div></article>)}</section>
    <section className="security-lifecycle"><div className="section-shell"><div className="section-intro light"><p className="kicker">Evidence lifecycle</p><h2>Handling rules follow the record from intake to deletion.</h2></div><div className="lifecycle-grid">{lifecycle.map(([title, body], index) => <article key={title}><span className="mono">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section-shell disclosure-model"><div><p className="kicker">Truthful assurance</p><h2>What this page does and does not prove.</h2></div><div><p>The page documents the intended security model and current connection status. It does not claim certification, an independent audit, a production control test, or legal compliance.</p><p>Before accepting live client evidence, the owner must publish accurate provider, subprocessors, access-region, retention, deletion, incident, and contact details.</p><Link className="button secondary" to="/demo-workspace">Inspect the synthetic workflow</Link></div></section></Layout>;
}

function AboutPage() {
  return <Layout><PageHero kicker="A product from Sthuthi Technologies" title="Security testing built around authority, evidence, and verified change." body="Sthuthi Securities serves software teams that need a defensible answer about how an application, API, cloud system, release process, or AI agent behaves under pressure." aside={<img className="mascot page-mascot" src="/art/sthuthi-guide-laptop.png" alt="Sthuthi guide reviewing security evidence at a laptop" />} /><section className="section-shell about-copy"><div><p className="kicker">Operating position</p><h2>Test the system that makes the decision.</h2><p>Application and API behavior, identity, tenant context, integrations, cloud access, release authority, and recovery procedures are treated as one operating boundary when the risk crosses them.</p><p>For AI agents, an odd response is not enough. The assessment asks whether the system disclosed protected data, crossed a customer boundary, bypassed approval, or performed an action the current user could not authorize.</p></div><div><p className="kicker">Evidence position</p><h2>Keep observation, review, remediation, and verification separate.</h2><p>A scanner result or model suggestion begins an investigation. A named reviewer confirms the affected asset, failed control, security consequence, repeatability, and severity.</p><p>A developer saying a change is ready does not close the finding. Fixed and verified requires new evidence against the changed version.</p></div></section><section className="about-claims"><div className="section-shell"><div><p className="kicker">Claims policy</p><h2>Assurance copy must be supported by current evidence.</h2></div><p>No invented customers, certifications, insurance, operating locations, integrations, or guaranteed outcomes. Availability-gated services stay gated until qualified capacity and safe procedures exist. External providers stay labeled unconnected until configured and tested.</p></div></section><RequestPanel /></Layout>;
}

function RequestForm({ preset }: { preset?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('sending'); setMessage('');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch('/api/requests', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok || !result.stored) throw new Error(result.error || 'The request could not be stored.');
      setStatus('success'); setMessage(`Your request has been received. Reference ${result.id.slice(0, 8)}. Email notification: ${result.notificationStatus}.`); form.reset();
    } catch (error) { setStatus('error'); setMessage(error instanceof Error ? error.message : 'The request could not be stored.'); }
  }
  return <form className="request-form" onSubmit={submit}>
    <div className="form-grid"><label>Name<input name="name" required autoComplete="name" /></label><label>Work email<input name="email" type="email" required autoComplete="email" /></label><label>Company<input name="company" required autoComplete="organization" /></label><label>Desired service<select name="service" defaultValue={preset || ''} required><option value="" disabled>Select a service</option><option value="unsure">I'm not sure which service fits</option>{services.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}</select></label><label>Application or system type<input name="systemType" required placeholder="Web app, API, AWS account, AI agent…" /></label><label>Approximate timeline<select name="timeline" required defaultValue=""><option value="" disabled>Select a timeline</option><option>Within 30 days</option><option>1–3 months</option><option>3–6 months</option><option>Planning ahead</option></select></label><label>Optional budget range<select name="budget" defaultValue=""><option value="">Prefer not to say</option><option>$8,000–$15,000</option><option>$15,000–$30,000</option><option>$30,000+</option></select></label><label className="full">Short description<textarea name="description" required rows={5} placeholder="What are you shipping, and what decision or deadline is driving the assessment?" /></label></div>
    <p className="form-warning"><Warning /> Please don't include passwords, API keys, or customer records. We'll arrange access securely after we agree on the scope.</p>
    <label className="consent"><input type="checkbox" name="consent" value="yes" required /> Sthuthi Technologies, LLC may use these details to respond to this project request. This does not subscribe me to marketing.</label>
    <button className="button" disabled={status === 'sending'}>{status === 'sending' ? 'Saving request…' : 'Send assessment request'}</button>
    {message && <p className={`form-status ${status}`} role="status">{message}</p>}
  </form>;
}

function RequestPanel({ service }: { service?: string }) {
  return <section className="request-panel" id="request"><div className="section-shell request-layout"><div><p className="kicker">Start with scope</p><h2>Tell us what has to be tested and why now.</h2><p>There is no calendar integration or automatic booking. A stored request starts the scoping conversation. It does not schedule testing or send an email.</p></div><RequestForm preset={service} /></div></section>;
}

function RequestPage() {
  const preset = new URLSearchParams(useLocation().search).get('service') || undefined;
  return <Layout><PageHero kicker="Assessment request" title="Describe the system, the deadline, and the proof you need." body="We use this request to draft a scope. It does not book testing. Work starts only after ownership, authorization, access, safety limits, commercial terms, and the test window are agreed." /><section className="section-shell request-expectations"><div><p className="kicker">Useful intake details</p><h2>Give us enough context to define the decision.</h2><ul className="check-list"><li><Check />Product, API, cloud account, repository, or AI workflow involved</li><li><Check />Customer, audit, launch, contract, or internal risk deadline</li><li><Check />Sensitive roles, tenants, data, integrations, and business actions</li><li><Check />Preferred environment and known operating restrictions</li></ul></div><aside><h3>Do not send secrets</h3><p>Do not paste passwords, API keys, tokens, private keys, production customer records, or vulnerability evidence into this form. Secure access is arranged after scope review.</p><h3>What happens next</h3><p>The request is reviewed for service fit, capacity, authority, access, and safety. A written scope and quote follow if the work can be accepted.</p></aside></section><section className="section-shell standalone-form"><RequestForm preset={preset} /></section></Layout>;
}

function Workspace() {
  const [result, setResult] = useState<RunResult | null>(null);
  const [fixed, setFixed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('Signed authorization is on file for the local synthetic fixture.');
  const currentStage = result ? (fixed && !result.finding ? 9 : 6) : 4;
  const confirmed = result?.finding?.reviewState === 'Confirmed';
  async function run(retest = false) {
    setBusy(true);
    try { const res = await fetch('/api/demo/run', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ fixed: retest }) }); const value = await res.json(); if (!res.ok) throw new Error(value.error); setResult(value); setFixed(retest); setNotice(retest ? 'Retest completed. Reviewer evidence is attached.' : 'Synthetic run completed. The result still needs reviewer confirmation.'); }
    catch (e) { setNotice(e instanceof Error ? e.message : 'The run failed.'); }
    finally { setBusy(false); }
  }
  return <Layout><div className="demo-banner"><Flask /> Demo data · local synthetic systems only · no production targets or invoices</div><section className="workspace-explainer"><div className="section-shell"><div><p className="kicker">Interactive assessment record</p><h1>Follow one AI security finding from authorized test to verified fix.</h1><p>This workspace uses two fake customers, fake orders, and a local support-agent fixture. It demonstrates state and evidence rules; it cannot reach a client system.</p></div><div className="workspace-proof"><article><strong>1</strong><span>Run a bounded synthetic scenario</span></article><article><strong>2</strong><span>Review before confirming a finding</span></article><article><strong>3</strong><span>Keep remediation separate from retest</span></article><article><strong>4</strong><span>Require new evidence to verify the fix</span></article></div></div></section><section className="workspace-shell"><aside className="workspace-nav"><Brand compact /><p className="mono">EXAMPLE SUPPORT APP</p>{['Overview', 'Assessment', 'Access setup', 'Findings', 'Reports', 'Files and messages', 'Invoices', 'Team and access'].map((x, i) => <button className={i === 0 ? 'active' : ''} key={x}>{x}</button>)}<img src="/art/sthuthi-guide-laptop.png" alt="" /></aside><div className="workspace-main"><div className="workspace-heading"><div><p className="kicker">AI Security Assessment · Demo data</p><h1>Example Support App</h1></div><Status tone="good">Authorized synthetic target</Status></div><p className="workspace-notice" role="status">{notice}</p><div className="stage-line">{stages.map((s, i) => <div className={i <= currentStage ? 'done' : ''} key={s}><span>{i + 1}</span><small>{s}</small></div>)}</div><div className="workspace-grid"><section className="workspace-card"><div className="card-head"><h2>Next action</h2><Status tone={fixed && !result?.finding ? 'good' : result ? 'attention' : 'neutral'}>{fixed && !result?.finding ? 'Verified' : result ? (confirmed ? 'Remediation' : 'Review needed') : 'Ready'}</Status></div>{!result ? <><h3>Run the authorized synthetic check</h3><p>The fixture has two fake customers, fake orders, and a refund endpoint. The test checks whether the server performed an unauthorized order lookup.</p><button className="button" onClick={() => run(false)} disabled={busy}>{busy ? 'Running…' : 'Run synthetic assessment'}</button></> : !fixed && !confirmed ? <><h3>Review the cross-customer order result</h3><p>This result needs review before it becomes a confirmed finding.</p><button className="button secondary" onClick={() => { setResult(previous => previous?.finding ? { ...previous, finding: { ...previous.finding, reviewState: 'Confirmed' } } : previous); setNotice('Finding confirmed by Demo reviewer. Review and remediation histories remain separate.'); }}>Confirm finding</button></> : !fixed ? <><h3>Prepare the fix for retest</h3><p>Confirming a finding does not mark it fixed. Request a retest only after the ownership check is in place.</p><button className="button" onClick={() => { setFixed(true); setNotice('Your retest request has been saved. Scheduling is pending.'); }}>Mark ready for retest</button></> : result.finding ? <><h3>Retest requested</h3><p>Ready for retest does not mean fixed. Run the corrected fixture to capture verification evidence.</p><button className="button" onClick={() => run(true)} disabled={busy}>{busy ? 'Running…' : 'Run corrected-path retest'}</button></> : <><h3>Fixed and verified</h3><p>The corrected API returned 403 for Customer A's request for Customer B's order. The evidence and reviewer are recorded.</p></>}</section><section className="workspace-card"><h2>Engagement record</h2><dl className="compact-dl"><div><dt>Signed authorization</dt><dd>On file · demo fixture only</dd></div><div><dt>Target</dt><dd className="mono">synthetic://support-agent</dd></div><div><dt>Open confirmed findings</dt><dd>{confirmed ? '1' : '0'}</dd></div><div><dt>Payment</dt><dd>Provider not connected</dd></div><div><dt>Notifications</dt><dd>Unconnected</dd></div></dl></section></div>{result?.finding && <div className="workspace-finding"><FindingPreview retested={false} reviewState={result.finding.reviewState} /></div>}{fixed && result?.finding && <section className="workspace-card run-retest"><h2>Retest boundary</h2><p>The retest will run only against the same synthetic target and recorded scenario. No external request is made.</p><button className="button" onClick={() => run(true)} disabled={busy}>Run corrected-path retest</button></section>}</div></section></Layout>;
}

function InternalConsole() {
  const rows = [['Identity provider', 'Unconnected'], ['Payment provider', 'Unconnected'], ['Email notifications', 'Unconnected'], ['Object storage', 'Unconnected'], ['External model provider', 'Disabled'], ['Synthetic adapter', 'Connected']];
  return <Layout><div className="demo-banner"><Flask /> Internal delivery console · Demo data</div><section className="section-shell internal"><div className="workspace-heading"><div><p className="kicker">Lead and delivery controls</p><h1>Assessment operations</h1></div><Link className="button secondary" to="/demo-workspace">Open client view</Link></div><div className="operations-grid"><article><span>1</span><h2>Lead triage</h2><p>Stored assessment requests await scoping. No email delivery is assumed.</p></article><article><span>2</span><h2>Scope and authorization</h2><p>Testing stays locked until signed scope, ownership evidence, and a valid window are present.</p></article><article><span>3</span><h2>Evidence review</h2><p>Synthetic results can be reviewed. Production scanner adapters are unavailable.</p></article><article><span>4</span><h2>Report and retest</h2><p>Draft reports remain drafts until a named reviewer signs them.</p></article></div><section className="integration-table"><h2>Provider status</h2>{rows.map(([name, status]) => <div key={name}><strong>{name}</strong><Status tone={status === 'Connected' ? 'good' : status === 'Disabled' ? 'neutral' : 'attention'}>{status}</Status></div>)}</section></section></Layout>;
}

function AuthPage({ invite = false }: { invite?: boolean }) {
  return <Layout><section className="auth-shell"><div><Brand /><p className="kicker">{invite ? 'Invitation acceptance' : 'Client workspace'}</p><h1>{invite ? 'Accept an organization invitation.' : 'Sign in to your assessment workspace.'}</h1><p>Live authentication is not connected in this release. The demo workspace uses labeled local data and cannot access production targets.</p><Link className="button" to="/demo-workspace">Open demo workspace</Link></div><img className="mascot" src="/art/sthuthi-guide-laptop.png" alt="Sthuthi guide at a laptop" /></section></Layout>;
}

function LegalDraft({ kind }: { kind: 'Privacy' | 'Terms' }) {
  return <Layout><PageHero kicker="Draft · owner and legal review required" title={`${kind} policy draft`} body="This route is intentionally unpublished legal copy. It must be completed with the actual providers, personnel locations, retention periods, contracting terms, and legal review before publication." /><section className="section-shell legal"><h2>Do not publish this draft yet</h2><p>The live policy must identify Sthuthi Technologies, LLC as the contracting entity and accurately state what data is collected, why it is processed, where providers handle it, how long it is retained, and how requests are handled.</p><h2>Required owner decisions</h2><ul><li>Identity, hosting, storage, notification, analytics, and payment providers</li><li>Personnel access regions and client contracting regions</li><li>Retention, backup, deletion, incident notice, and dispute terms</li><li>Subprocessors, insurance, governing law, and contact details</li></ul></section></Layout>;
}

function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}

function ArticleCard({ article }: { article: Article }) {
  return <article className="article-card">
    <Link className="article-card-image" to={`/blog/${article.slug}`} tabIndex={-1} aria-hidden="true"><img src={article.featuredImage} alt="" loading="lazy" /></Link>
    <div className="article-card-copy">
      <p className="kicker">{article.category}</p>
      <h2><Link to={`/blog/${article.slug}`}>{article.title}</Link></h2>
      <p>{article.description}</p>
      <div className="article-card-meta"><time dateTime={article.published}>{formatArticleDate(article.published)}</time><span>{article.readTime}</span></div>
      <Link className="text-link" to={`/blog/${article.slug}`}>Read field note <ArrowRight /></Link>
    </div>
  </article>;
}

function BlogIndex() {
  return <Layout>
    <PageHero kicker="Security field notes" title="Clear answers for security tests, evidence, and AI risk." body="Practical guides for scoping work, answering customer reviews, judging findings, and turning assessment results into verified fixes." aside={<img className="mascot page-mascot" src="/art/sthuthi-guide-planning.png" alt="Sthuthi guide planning security research" />} />
    <section className="section-shell blog-index" aria-label="Security articles">
      <div className="blog-grid">{articles.map(article => <ArticleCard article={article} key={article.slug} />)}</div>
    </section>
    <RequestPanel />
  </Layout>;
}

function ResourcesPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'resource-structured-data';
    script.text = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'ItemList', name: 'Sthuthi Securities resource library',
      itemListElement: [
        { '@type': 'DigitalDocument', position: 1, name: 'Penetration Test Scoping Workbook' },
        ...resourceGuides.map((guide, index) => ({ '@type': 'DigitalDocument', position: index + 2, name: guide.title, description: guide.description })),
      ].map(item => ({ ...item, author: { '@type': 'Organization', name: 'Sthuthi Securities' }, publisher: { '@type': 'Organization', name: 'Sthuthi Technologies, LLC' }, datePublished: '2026-11-04', inLanguage: 'en', isAccessibleForFree: true })),
    });
    document.head.querySelector('#resource-structured-data')?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
  return <Layout>
    <PageHero kicker="Free security field guides" title="Eight practical resources for security work that cannot stay vague." body="Use the scoping workbook and seven long-form guides to prepare evidence, plan authorized testing, build a startup security program, secure AI support agents, and move enterprise reviews forward. Every edition is available without an email gate." aside={<img className="mascot page-mascot" src="/art/sthuthi-guide-planning.png" alt="Sthuthi guide planning a security assessment" />} />
    <section className="resource-feature section-shell" aria-labelledby="scoping-workbook-title">
      <div className="resource-cover-wrap">
        <img className="resource-cover" src="/resources/penetration-test-scoping-workbook/assets/cover.png" alt="Cover of the Penetration Test Scoping Workbook" />
        <span className="resource-free">Free download</span>
      </div>
      <div className="resource-copy">
        <p className="kicker">Penetration testing · Workbook</p>
        <h2 id="scoping-workbook-title">Penetration Test Scoping Workbook</h2>
        <p className="resource-intro">Define the targets, roles, test rules, evidence, reporting, and retesting before an authorized assessment. The workbook turns a loose request into a reviewable scope and rules-of-engagement record.</p>
        <div className="resource-facts" aria-label="Workbook details">
          <span><strong>44</strong> rendered pages</span><span><strong>31</strong> editable tables</span><span><strong>14</strong> chapters</span><span><strong>4</strong> file formats</span>
        </div>
        <div className="download-grid" aria-label="Download the workbook">
          {workbookFormats.map(item => <a className={`download-option${item.primary ? ' primary' : ''}`} href={`/resources/penetration-test-scoping-workbook/${item.file}`} download={item.file} key={item.format}>
            <Download /><span><strong>{item.label}</strong><small>{item.detail}</small></span>
          </a>)}
        </div>
        <p className="resource-download-note"><ShieldCheck /> Files are served directly from Sthuthi Securities with fixed filenames and file-type checks.</p>
      </div>
    </section>
    <section className="section-shell resource-library" aria-labelledby="guide-library-title">
      <div className="resource-library-heading"><div><p className="kicker">Seven complete field guides</p><h2 id="guide-library-title">Choose the guide that matches the decision in front of you.</h2></div><p>These are 10,000–13,000-word working guides, not short checklists. Each includes a source ledger, an operating model, worksheets, a worked case, technical field modules, and direct links to primary references.</p></div>
      <div className="resource-library-grid">
        {resourceGuides.map(guide => <article className="resource-guide-card" key={guide.slug}>
          <img src={`/resources/${guide.slug}/assets/cover.png`} alt={`Cover of ${guide.title}`} loading="lazy" />
          <div className="resource-guide-copy">
            <p className="kicker">{guide.category} · Field guide</p>
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
            <span className="resource-word-count">{guide.words} words · 4 formats</span>
            <div className="resource-guide-downloads" aria-label={`Download ${guide.title}`}>
              {guideFormats.map(item => <a className={item.format === 'pdf' ? 'primary' : ''} href={`/resources/${guide.slug}/${guide.file}.${item.format}`} download={`${guide.file}.${item.format}`} key={item.format}><Download /><span><strong>{item.label}</strong><small>{item.detail}</small></span></a>)}
            </div>
          </div>
        </article>)}
      </div>
      <p className="resource-download-note"><ShieldCheck /> Every button points to a published file with a fixed filename. The same links work on static hosting and the Sthuthi application server.</p>
    </section>
    <section className="resource-chooser">
      <div className="section-shell">
        <div className="resource-chooser-heading"><p className="kicker">Start with the business problem</p><h2>Use the smallest set of resources that answers the real question.</h2><p>Do not begin with a framework name or a document request. Begin with the decision, system boundary, evidence audience, and action that follows.</p></div>
        <div className="resource-chooser-grid">
          <article><span>01</span><h3>An enterprise deal is blocked</h3><p>Use the founder’s review guide, the customer-audit guide, and the security-proof guide to build consistent claims and a controlled evidence package.</p></article>
          <article><span>02</span><h3>You need to buy a penetration test</h3><p>Complete the scoping workbook, then use the web-and-API scoping guide to define roles, tenants, workflows, authorization, reporting, and retesting.</p></article>
          <article><span>03</span><h3>Your security program is becoming repeatable</h3><p>Start with the first-90-days guide, then use the testing-program guide to connect asset risk, assessment triggers, remediation, verification, and measures.</p></article>
          <article><span>04</span><h3>An AI support agent can take action</h3><p>Use the AI security guide to map identity, tenant boundaries, retrieval, memory, tools, approval gates, logs, evaluation fixtures, and containment.</p></article>
        </div>
      </div>
    </section>
    <section className="resource-details">
      <div className="section-shell resource-detail-grid">
        <div><p className="kicker">What is inside</p><h2>A usable scope, not a blank asset list.</h2><p>The workbook covers application, API, mobile, cloud, SaaS, AI, third-party, data, and environment boundaries. It includes role and tenant matrices, authorization checks, stop conditions, evidence requirements, a vendor scorecard, and a completed multi-tenant SaaS example.</p></div>
        <ul className="resource-checks">
          {['Assessment decision brief', 'Asset and authority register', 'Role, tenant, and workflow matrices', 'Rules of engagement and stop conditions', 'Evidence and report acceptance criteria', 'Remediation and retest agreement', 'One-page scope brief', 'Complete SaaS worked example'].map(item => <li key={item}><Check />{item}</li>)}
        </ul>
      </div>
    </section>
    <section className="section-shell resource-use"><div><p className="kicker">Use it safely</p><h2>The workbook supports planning. It does not grant authority.</h2></div><p>Confirm ownership, third-party permissions, cloud-provider rules, privacy obligations, and applicable law before testing. Written authorization must identify the actual targets, allowed actions, test window, contacts, and stop conditions.</p><Link className="text-link" to="/how-it-works">See the assessment process <ArrowRight /></Link></section>
    <RequestPanel service="penetration-testing" />
  </Layout>;
}

function ArticlePage() {
  const { slug } = useParams();
  const article = slug ? articleBySlug.get(slug) : undefined;
  useEffect(() => {
    if (!article) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-structured-data';
    script.text = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Article', headline: article.title,
      description: article.description, datePublished: article.published, dateModified: article.updated,
      image: article.featuredImage, author: { '@type': 'Organization', name: 'Sthuthi Securities' },
      publisher: { '@type': 'Organization', name: 'Sthuthi Technologies, LLC' },
    });
    document.head.querySelector('#article-structured-data')?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [article]);
  if (!article) return <NotFound />;
  const related = articles.filter(item => item.slug !== article.slug).slice(0, 3);
  return <Layout>
    <article className="article-page">
      <header className="article-hero grid-bg">
        <div className="article-hero-copy">
          <p className="eyebrow"><span />{article.category}</p>
          <h1>{article.title}</h1>
          <p className="lede">{article.description}</p>
          <div className="article-byline"><span>By Sthuthi Securities</span><time dateTime={article.published}>{formatArticleDate(article.published)}</time><span>{article.readTime}</span></div>
        </div>
        <img className="article-featured" src={article.featuredImage} alt={article.featuredAlt} />
      </header>
      <div className="article-shell section-shell">
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.body }} />
        <aside className="article-sidebar">
          <div><p className="kicker">Primary search question</p><p>{article.keyword}</p></div>
          <div><p className="kicker">Editorial standard</p><p>Linked claims point to primary standards, official project documentation, or the relevant service boundary.</p></div>
          <div><p className="kicker">Need the work done?</p><h2>{article.serviceLabel}</h2><Link className="button small" to={`/services/${article.serviceSlug}`}>Review service scope</Link></div>
        </aside>
      </div>
    </article>
    <section className="related-articles section-shell"><div className="section-intro"><p className="kicker">Continue reading</p><h2>Related security field notes</h2></div><div className="related-grid">{related.map(item => <ArticleCard article={item} key={item.slug} />)}</div></section>
    <RequestPanel service={article.serviceSlug} />
  </Layout>;
}

function NotFound() { return <Layout><section className="not-found"><span className="mono">404</span><h1>That page is outside the current scope.</h1><Link className="button" to="/">Return home</Link></section></Layout>; }

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} /><Route path="/services" element={<ServicesPage />} /><Route path="/services/:slug" element={<ServiceDetail />} />
    <Route path="/pricing" element={<PricingPage />} /><Route path="/process" element={<ProcessPage />} /><Route path="/how-it-works" element={<ProcessPage />} /><Route path="/sample-report" element={<SampleReport />} />
    <Route path="/security" element={<SecurityPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/request" element={<RequestPage />} />
    <Route path="/resources" element={<ResourcesPage />} /><Route path="/blog" element={<BlogIndex />} /><Route path="/blog/:slug" element={<ArticlePage />} />
    <Route path="/workspace" element={<Workspace />} /><Route path="/demo-workspace" element={<Workspace />} /><Route path="/internal" element={<InternalConsole />} /><Route path="/sign-in" element={<AuthPage />} /><Route path="/invite" element={<AuthPage invite />} />
    <Route path="/privacy" element={<LegalDraft kind="Privacy" />} /><Route path="/terms" element={<LegalDraft kind="Terms" />} /><Route path="*" element={<NotFound />} />
  </Routes>;
}
