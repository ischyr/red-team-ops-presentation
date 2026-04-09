import './WhyChooseUs.css';

const benefits = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Full Engagement Lifecycle',
    desc: 'Track ops from Recon to Done with kill-chain progress, findings management, operator assignment, and integrated TTX planning.',
    color: '#dc2626',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    title: 'One-Click C2 Deployment',
    desc: 'Provision C2 nodes on DigitalOcean, AWS EC2, or Vultr via Terraform + Docker — scoped to the active engagement.',
    color: '#2563eb',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'Device Code Phishing',
    desc: 'OAuth 2.0 device code flows with token vault, live auth polling, and Graph enumeration against Entra ID targets.',
    color: '#7c3aed',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'MITRE ATT&CK Cheatsheets',
    desc: 'Interactive kill-chain reference with tools, techniques, and copy-paste key commands for every phase of an engagement.',
    color: '#f59e0b',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    title: 'Live CVE Intelligence',
    desc: 'Real-time CVE feed powered by Shodan CVE DB with CVSS scoring, full descriptions, and per-engagement research boards.',
    color: '#ef4444',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    title: 'Email & Domain Breach Lookup',
    desc: 'Check accounts and domains against HaveIBeenPwned with cached results, breach history, and exposed data type breakdowns.',
    color: '#10b981',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    title: 'Phishing & Recon Builders',
    desc: 'Username generator, typosquat domains, wordlists, QR codes, ClickFix lures, Fake Teams messages, and redirector chains.',
    color: '#0ea5e9',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    title: 'Pillaging & Recon Suite',
    desc: 'Subdomain enum, webserver probing, domain flyover, network scanning, BloodHound analysis, and file metadata extraction.',
    color: '#8b5cf6',
  },
];

const WhyChooseUs = () => (
  <section className="why section">
    <div className="container">
      <div className="why__header text-center">
        <div className="section-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Why RedTeamCenter
        </div>
        <h2 className="section-title">
          Built for Red Teams{' '}
          <span className="text-gradient">of All Sizes</span>
        </h2>
        <p className="section-subtitle mx-auto" style={{ textAlign: 'center' }}>
          From solo operators to enterprise red teams — every tool you need for a modern offensive engagement, in one platform.
        </p>
      </div>

      <div className="why__grid">
        {benefits.map((b) => (
          <div key={b.title} className="why__card">
            <div className="why__card-icon" style={{ background: `${b.color}12`, color: b.color }}>
              {b.icon}
            </div>
            <h3 className="why__card-title">{b.title}</h3>
            <p className="why__card-desc">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
