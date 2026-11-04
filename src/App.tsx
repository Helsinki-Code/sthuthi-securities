import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { ArrowRight, Check, ClipboardText, CloudCheck, Download, FileLock, Flask, List, Moon, ShieldCheck, Sun, X, Warning } from './icons';
import { services, stages } from './catalog.mjs';
import { articleBySlug, articles, type Article } from './articles';

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

function useDocumentMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const article = pathname.startsWith('/blog/') ? articleBySlug.get(pathname.slice('/blog/'.length)) : undefined;
    const names: Record<string, string> = {
      '/': 'Security testing for apps, cloud, and AI', '/services': 'Security services and pricing',
      '/pricing': 'Security assessment pricing', '/process': 'How a security assessment works',
      '/sample-report': 'Sample security assessment report', '/security': 'Security and data handling',
      '/about': 'About Sthuthi Securities', '/request': 'Discuss your security project',
      '/blog': 'Security testing field notes', '/resources': 'Free security resources and workbooks',
      '/workspace': 'Demo client workspace', '/internal': 'Demo delivery console',
    };
    const title = article?.title || names[pathname] || 'Sthuthi Securities';
    const description = article?.description || (pathname === '/blog'
      ? 'Practical guidance on penetration testing, AI security, security questionnaires, reports, and compliance evidence.'
      : 'Authorized security testing for web applications, APIs, cloud systems, and AI agents.');
    document.title = `${title} | Sthuthi Securities`;
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
  const links = [['/services', 'Services'], ['/pricing', 'Pricing'], ['/process', 'How it works'], ['/resources', 'Resources'], ['/blog', 'Field notes'], ['/security', 'Security']];
  return <header className="site-header">
    <div className="nav-shell">
      <Brand />
      <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <List />}</button>
      <nav className={open ? 'open' : ''} aria-label="Primary navigation">
        {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <NavLink to="/workspace" onClick={() => setOpen(false)}>Demo workspace</NavLink>
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
    <Link className="button light-button" to="/process">Read the assessment process</Link>
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
  return <Layout><PageHero kicker="Ten scoped services" title="Security work matched to the system and the decision." body="Pen tests, AI and cloud assessments, audit readiness, remediation, and recurring checks. Every project states what is included and what remains outside the test." aside={<img className="mascot page-mascot" src="/art/sthuthi-guide-planning.png" alt="Sthuthi guide planning an assessment" />} /><section className="section-shell"><ServiceRows /></section><RequestPanel /></Layout>;
}

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <NotFound />;
  return <Layout><PageHero kicker={service.technical} title={service.name} body={service.description} aside={<div className="quote-panel"><span>Proposed launch offer</span><strong>{service.price}</strong><p>{service.timing}</p>{service.available ? <Status tone="good">Accepting scoping requests</Status> : <Status tone="attention">Not currently offered</Status>}</div>} />
    <section className="detail-grid section-shell"><div><p className="kicker">You're here if</p><h2>{service.trigger}</h2><h3>What you receive</h3><ul className="check-list">{service.includes.map(item => <li key={item}><Check />{item}</li>)}</ul></div><aside><h3>Required access</h3><p>{service.access}</p><h3>Material limit</h3><p>{service.limits}</p><div className="boundary"><Warning /> Scope and written authorization come before payment or testing.</div></aside></section><RequestPanel service={service.slug} /></Layout>;
}

function PricingPage() {
  return <Layout><PageHero kicker="Editable launch offers" title="Prices with the scope beside them." body="These are proposed launch offers approved for this release, not market averages. Projects are scoped and authorized before payment." /><section className="section-shell"><ServiceRows /><div className="pricing-note"><h3>What is not hidden in a footnote</h3><p>Ongoing testing includes a $5,000 setup fee and an initial three-month term. Taxes and third-party licenses, if any, are listed in the quote. A payment provider is not connected in this demo, so no checkout is shown.</p></div></section></Layout>;
}

function ProcessPage() {
  const detail = [
    ['Request and scope', 'Tell us the system, deadline, and decision the report must support. We draft the assets, workflows, exclusions, and limits.'],
    ['Authorization', 'The signed record names in-scope systems, ownership evidence, allowed actions, contacts, and the test window.'],
    ['Access review', 'We confirm test accounts and use a separate secure secrets flow. Credentials never belong in ordinary messages.'],
    ['Bounded testing', 'The runner enforces target allowlists, time and request budgets, concurrency limits, and stop conditions.'],
    ['Evidence review', 'A reviewer checks deterministic evidence before a result becomes a confirmed finding. Drafts stay drafts.'],
    ['Fix and retest', 'Your team marks a finding ready. We repeat the recorded scenario. Fixed and verified requires new evidence and reviewer sign-off.'],
  ];
  return <Layout><PageHero kicker="From request to verified fix" title="A security assessment is a chain of decisions and evidence." body="The workspace records who authorized the work, what ran, what was observed, and who reviewed the result." /><section className="section-shell process-detail">{detail.map(([title, body], i) => <article key={title}><span className="mono">{String(i + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</section><RequestPanel /></Layout>;
}

function SampleReport() {
  return <Layout><PageHero kicker="Illustrative example · Demo data" title="A report should tell an engineer what happened and how to prove the fix." body="This sample uses a local synthetic support app with fake customers and orders. It is not evidence from a client system." /><section className="sample-layout section-shell"><FindingPreview retested /><aside className="report-index"><p className="mono">EXAMPLE SUPPORT APP · V1.1</p><h3>Report record</h3><dl><div><dt>Assessment</dt><dd>AI Security Assessment</dd></div><div><dt>Scope</dt><dd>Order lookup and refund request</dd></div><div><dt>Reviewer</dt><dd>Demo reviewer</dd></div><div><dt>Evidence digest</dt><dd className="mono">9f86d081…0a08</dd></div><div><dt>Status</dt><dd>Demo data</dd></div></dl><p>This preview remains labeled demo data in print and export.</p></aside></section></Layout>;
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
  return <Layout><PageHero kicker="Security and data handling" title="The assessment system has its own boundaries." body="This release demonstrates the controls locally. Live identity, secret storage, object storage, and notification providers remain unconnected until the owner configures them." /><section className="section-shell control-list">{controls.map(([t, b], i) => <article key={t}><span>{i + 1}</span><div><h2>{t}</h2><p>{b}</p></div></article>)}</section></Layout>;
}

function AboutPage() {
  return <Layout><PageHero kicker="A product from Sthuthi Technologies" title="Security testing with a readable record of the work." body="Sthuthi Securities is the cybersecurity product and service from Sthuthi Technologies, LLC. It serves US software and digital businesses that need to prove how their systems behave." aside={<img className="mascot page-mascot" src="/art/sthuthi-guide-laptop.png" alt="Sthuthi guide at a laptop" />} /><section className="section-shell about-copy"><div><h2>What we are building around</h2><p>Ordinary application, API, cloud, and compliance testing forms the base. AI-agent testing is the sharper edge: we test whether systems cross customer boundaries or perform unauthorized actions, not whether the model says the right words.</p></div><div><h2>What we do not claim</h2><p>No invented customers, certifications, insurance, operating locations, or guaranteed outcomes. The owner still needs qualified delivery staff, signed authorization templates, insurance, provider contracts, and operating procedures before selling live work.</p></div></section></Layout>;
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

function RequestPage() { return <Layout><PageHero kicker="Assessment request" title="Describe the system, the deadline, and the proof you need." body="We will use the request to draft a scope. Testing cannot start until ownership, authorization, access, and the test window are agreed." /><section className="section-shell standalone-form"><RequestForm /></section></Layout>; }

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
  return <Layout><div className="demo-banner"><Flask /> Demo data · local synthetic systems only · no production targets or invoices</div><section className="workspace-shell"><aside className="workspace-nav"><Brand compact /><p className="mono">EXAMPLE SUPPORT APP</p>{['Overview', 'Assessment', 'Access setup', 'Findings', 'Reports', 'Files and messages', 'Invoices', 'Team and access'].map((x, i) => <button className={i === 0 ? 'active' : ''} key={x}>{x}</button>)}<img src="/art/sthuthi-guide-laptop.png" alt="" /></aside><div className="workspace-main"><div className="workspace-heading"><div><p className="kicker">AI Security Assessment · Demo data</p><h1>Example Support App</h1></div><Status tone="good">Authorized synthetic target</Status></div><p className="workspace-notice" role="status">{notice}</p><div className="stage-line">{stages.map((s, i) => <div className={i <= currentStage ? 'done' : ''} key={s}><span>{i + 1}</span><small>{s}</small></div>)}</div><div className="workspace-grid"><section className="workspace-card"><div className="card-head"><h2>Next action</h2><Status tone={fixed && !result?.finding ? 'good' : result ? 'attention' : 'neutral'}>{fixed && !result?.finding ? 'Verified' : result ? (confirmed ? 'Remediation' : 'Review needed') : 'Ready'}</Status></div>{!result ? <><h3>Run the authorized synthetic check</h3><p>The fixture has two fake customers, fake orders, and a refund endpoint. The test checks whether the server performed an unauthorized order lookup.</p><button className="button" onClick={() => run(false)} disabled={busy}>{busy ? 'Running…' : 'Run synthetic assessment'}</button></> : !fixed && !confirmed ? <><h3>Review the cross-customer order result</h3><p>This result needs review before it becomes a confirmed finding.</p><button className="button secondary" onClick={() => { setResult(previous => previous?.finding ? { ...previous, finding: { ...previous.finding, reviewState: 'Confirmed' } } : previous); setNotice('Finding confirmed by Demo reviewer. Review and remediation histories remain separate.'); }}>Confirm finding</button></> : !fixed ? <><h3>Prepare the fix for retest</h3><p>Confirming a finding does not mark it fixed. Request a retest only after the ownership check is in place.</p><button className="button" onClick={() => { setFixed(true); setNotice('Your retest request has been saved. Scheduling is pending.'); }}>Mark ready for retest</button></> : result.finding ? <><h3>Retest requested</h3><p>Ready for retest does not mean fixed. Run the corrected fixture to capture verification evidence.</p><button className="button" onClick={() => run(true)} disabled={busy}>{busy ? 'Running…' : 'Run corrected-path retest'}</button></> : <><h3>Fixed and verified</h3><p>The corrected API returned 403 for Customer A's request for Customer B's order. The evidence and reviewer are recorded.</p></>}</section><section className="workspace-card"><h2>Engagement record</h2><dl className="compact-dl"><div><dt>Signed authorization</dt><dd>On file · demo fixture only</dd></div><div><dt>Target</dt><dd className="mono">synthetic://support-agent</dd></div><div><dt>Open confirmed findings</dt><dd>{confirmed ? '1' : '0'}</dd></div><div><dt>Payment</dt><dd>Provider not connected</dd></div><div><dt>Notifications</dt><dd>Unconnected</dd></div></dl></section></div>{result?.finding && <div className="workspace-finding"><FindingPreview retested={false} reviewState={result.finding.reviewState} /></div>}{fixed && result?.finding && <section className="workspace-card run-retest"><h2>Retest boundary</h2><p>The retest will run only against the same synthetic target and recorded scenario. No external request is made.</p><button className="button" onClick={() => run(true)} disabled={busy}>Run corrected-path retest</button></section>}</div></section></Layout>;
}

function InternalConsole() {
  const rows = [['Identity provider', 'Unconnected'], ['Payment provider', 'Unconnected'], ['Email notifications', 'Unconnected'], ['Object storage', 'Unconnected'], ['External model provider', 'Disabled'], ['Synthetic adapter', 'Connected']];
  return <Layout><div className="demo-banner"><Flask /> Internal delivery console · Demo data</div><section className="section-shell internal"><div className="workspace-heading"><div><p className="kicker">Lead and delivery controls</p><h1>Assessment operations</h1></div><Link className="button secondary" to="/workspace">Open client view</Link></div><div className="operations-grid"><article><span>1</span><h2>Lead triage</h2><p>Stored assessment requests await scoping. No email delivery is assumed.</p></article><article><span>2</span><h2>Scope and authorization</h2><p>Testing stays locked until signed scope, ownership evidence, and a valid window are present.</p></article><article><span>3</span><h2>Evidence review</h2><p>Synthetic results can be reviewed. Production scanner adapters are unavailable.</p></article><article><span>4</span><h2>Report and retest</h2><p>Draft reports remain drafts until a named reviewer signs them.</p></article></div><section className="integration-table"><h2>Provider status</h2>{rows.map(([name, status]) => <div key={name}><strong>{name}</strong><Status tone={status === 'Connected' ? 'good' : status === 'Disabled' ? 'neutral' : 'attention'}>{status}</Status></div>)}</section></section></Layout>;
}

function AuthPage({ invite = false }: { invite?: boolean }) {
  return <Layout><section className="auth-shell"><div><Brand /><p className="kicker">{invite ? 'Invitation acceptance' : 'Client workspace'}</p><h1>{invite ? 'Accept an organization invitation.' : 'Sign in to your assessment workspace.'}</h1><p>Live authentication is not connected in this release. The demo workspace uses labeled local data and cannot access production targets.</p><Link className="button" to="/workspace">Open demo workspace</Link></div><img className="mascot" src="/art/sthuthi-guide-laptop.png" alt="Sthuthi guide at a laptop" /></section></Layout>;
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
      '@context': 'https://schema.org', '@type': 'DigitalDocument',
      name: 'Penetration Test Scoping Workbook',
      description: 'A practical workbook for defining penetration test targets, roles, rules of engagement, evidence requirements, reporting, and retesting.',
      author: { '@type': 'Organization', name: 'Sthuthi Securities' },
      publisher: { '@type': 'Organization', name: 'Sthuthi Technologies, LLC' },
      datePublished: '2026-11-04', inLanguage: 'en', isAccessibleForFree: true,
    });
    document.head.querySelector('#resource-structured-data')?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
  return <Layout>
    <PageHero kicker="Free security resources" title="Workbooks built for decisions, evidence, and authorized testing." body="Download practical material your product, engineering, legal, and security teams can complete together. No email gate and no placeholder files." aside={<img className="mascot page-mascot" src="/art/sthuthi-guide-planning.png" alt="Sthuthi guide planning a security assessment" />} />
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
          {workbookFormats.map(item => <a className={`download-option${item.primary ? ' primary' : ''}`} href={`/api/resources/penetration-test-scoping-workbook/download?format=${item.format}`} download={item.file} key={item.format}>
            <Download /><span><strong>{item.label}</strong><small>{item.detail}</small></span>
          </a>)}
        </div>
        <p className="resource-download-note"><ShieldCheck /> Files are served directly from Sthuthi Securities with fixed filenames and file-type checks.</p>
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
    <section className="section-shell resource-use"><div><p className="kicker">Use it safely</p><h2>The workbook supports planning. It does not grant authority.</h2></div><p>Confirm ownership, third-party permissions, cloud-provider rules, privacy obligations, and applicable law before testing. Written authorization must identify the actual targets, allowed actions, test window, contacts, and stop conditions.</p><Link className="text-link" to="/process">See the assessment process <ArrowRight /></Link></section>
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
    <Route path="/pricing" element={<PricingPage />} /><Route path="/process" element={<ProcessPage />} /><Route path="/sample-report" element={<SampleReport />} />
    <Route path="/security" element={<SecurityPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/request" element={<RequestPage />} />
    <Route path="/resources" element={<ResourcesPage />} /><Route path="/blog" element={<BlogIndex />} /><Route path="/blog/:slug" element={<ArticlePage />} />
    <Route path="/workspace" element={<Workspace />} /><Route path="/internal" element={<InternalConsole />} /><Route path="/sign-in" element={<AuthPage />} /><Route path="/invite" element={<AuthPage invite />} />
    <Route path="/privacy" element={<LegalDraft kind="Privacy" />} /><Route path="/terms" element={<LegalDraft kind="Terms" />} /><Route path="*" element={<NotFound />} />
  </Routes>;
}
