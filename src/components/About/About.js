import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const modules = [
  {
    category: 'Operations',
    color: '#dc2626',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    items: ['Engagement Lifecycle', 'Activity Log', 'Calendar', 'TTX Planner', 'Team Vault', 'Assumed Breach'],
  },
  {
    category: 'Infrastructure',
    color: '#2563eb',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    items: ['C2 Infrastructure', 'Device Code Phishing', 'Evil OAuth Generator', 'Pass-the-Cookie', 'MFA Push Fatigue', 'ClickFix Builder'],
  },
  {
    category: 'Intelligence',
    color: '#7c3aed',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    items: ['Loot Tracker', 'Evidence Vault', 'CVE Research Board', 'Reverse Shells', 'Cleanup Tracker', 'BloodHound Analyzer'],
  },
  {
    category: 'Pillaging',
    color: '#0ea5e9',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    items: ['Domain Recon', 'Subdomain Enumeration', 'Network Scanning', 'Webserver Enum', 'Domain Flyover', 'File Metadata'],
  },
  {
    category: 'Builders',
    color: '#f59e0b',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    items: ['Username Generator', 'Typosquat Generator', 'QR Code Generator', 'Redirector Chain', 'Card Generation', 'Fake Teams Message'],
  },
  {
    category: 'Resources',
    color: '#10b981',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    items: ['MITRE ATT&CK Cheatsheets', 'CVE Feed', 'LOLBIN/LOLBAS Reference', 'Email Leaks (HIBP)', 'Google Dorking', 'Malware Scanner'],
  },
  {
    category: 'Reporting',
    color: '#ef4444',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    items: ['Engagement Reports', 'Findings Management', 'Client Portal', 'TLP Classification', 'Evidence Trail', 'TTPs Tracker'],
  },
  {
    category: 'OSINT & Comms',
    color: '#8b5cf6',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    items: ['Emails Harvester', 'Org Chart Mapper', 'Sock Puppet Personas', 'White Team Comms', 'Webhook Alerter', 'Voice Cloner'],
  },
];

const stack = [
  { label: 'Frontend', value: 'React + Chakra UI', color: '#0ea5e9' },
  { label: 'Backend', value: 'Node.js + Express', color: '#10b981' },
  { label: 'Database', value: 'MongoDB + Mongoose', color: '#f59e0b' },
  { label: 'Auth', value: 'JWT + Passport OAuth', color: '#7c3aed' },
  { label: 'Scanning', value: 'Docker (subfinder, httpx, gowitness, rustscan)', color: '#dc2626' },
  { label: 'Diagrams', value: 'draw.io embed', color: '#2563eb' },
];

const About = () => (
  <div className="app">
    <Navbar />
    <main>

      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero__glow" />
        <div className="container">
          <div className="about-hero__inner text-center">
            <div className="section-tag" style={{ background: 'rgba(220,38,38,0.12)', color: '#f87171', border: '1px solid rgba(220,38,38,0.25)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              About
            </div>
            <h1 className="about-hero__title">
              The Platform Built for<br />
              <span className="about-hero__highlight">How Red Teams Actually Operate.</span>
            </h1>
            <p className="about-hero__sub">
              RedTeamCenter is a self-hosted, all-in-one red team operations platform. It brings structure, planning, and execution tooling into a single dashboard — from the first recon query to the final client report.
            </p>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="about-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc"/>
        </svg>
      </div>

      {/* Body */}
      <div className="about-body">
        <div className="container">

          {/* Mission */}
          <div className="about-mission">
            <div className="about-mission__copy">
              <div className="section-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Mission
              </div>
              <h2 className="section-title">
                Structure for every<br />
                <span className="text-gradient">phase of the operation.</span>
              </h2>
              <p className="about-mission__text">
                Red team engagements fail not because operators lack skill — they fail because tooling is scattered, context is lost between sessions, and reporting takes longer than the operation itself.
              </p>
              <p className="about-mission__text">
                RedTeamCenter was built to fix that. Every phase of a modern red team engagement — from initial access planning through exfiltration and reporting — lives in one place, scoped to the active engagement, with full context preserved.
              </p>
              <p className="about-mission__text">
                It's not a C2. It's not just a project tracker. It's the operational backbone that connects all your tools, tracks all your findings, and produces deliverables without the last-minute scramble.
              </p>
            </div>
            <div className="about-mission__stack">
              <div className="about-stack-card">
                <div className="about-stack-card__title">Tech Stack</div>
                {stack.map((s) => (
                  <div key={s.label} className="about-stack-row">
                    <span className="about-stack-row__label">{s.label}</span>
                    <span className="about-stack-row__value" style={{ color: s.color }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modules grid */}
          <div className="about-modules">
            <div className="about-modules__header">
              <div className="section-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="7" height="7"/><rect x="15" y="3" width="7" height="7"/><rect x="2" y="14" width="7" height="7"/><rect x="15" y="14" width="7" height="7"/></svg>
                Platform Modules
              </div>
              <h2 className="section-title">Everything in one place.</h2>
              <p className="section-subtitle" style={{ fontSize: 14 }}>
                Over 60 built views across 8 operational categories — all scoped to the active engagement.
              </p>
            </div>

            <div className="about-modules__grid">
              {modules.map((m) => (
                <div key={m.category} className="about-module-card">
                  <div className="about-module-card__head">
                    <div className="about-module-card__icon" style={{ background: `${m.color}12`, color: m.color }}>
                      {m.icon}
                    </div>
                    <span className="about-module-card__category">{m.category}</span>
                  </div>
                  <ul className="about-module-card__items">
                    {m.items.map((item) => (
                      <li key={item} className="about-module-card__item">
                        <span className="about-module-card__dot" style={{ background: m.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Docker callout */}
          <div className="about-docker">
            <div className="about-docker__head">
              <div className="about-docker__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
                  <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
                </svg>
              </div>
              <div>
                <h3 className="about-docker__title">Docker-Powered Scanning</h3>
                <p className="about-docker__sub">Pillaging and recon tools run as isolated Docker containers — no dependency hell, no version conflicts.</p>
              </div>
            </div>
            <div className="about-docker__images">
              {[
                { image: 'projectdiscovery/subfinder', use: 'Subdomain Enumeration', color: '#0ea5e9' },
                { image: 'projectdiscovery/httpx', use: 'Webserver Enumeration', color: '#10b981' },
                { image: 'leonjza/gowitness', use: 'Domain Flyover', color: '#7c3aed' },
                { image: 'rustscan/rustscan', use: 'Network Scanning', color: '#f59e0b' },
              ].map((d) => (
                <div key={d.image} className="about-docker__row">
                  <div className="about-docker__pill" style={{ borderColor: `${d.color}30` }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="2.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                    docker pull {d.image}
                  </div>
                  <span className="about-docker__use">{d.use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="about-cta">
            <div className="about-cta__inner">
              <h3 className="about-cta__title">Want to get involved?</h3>
              <p className="about-cta__text">RedTeamCenter is open source. If you're an operator with ideas, a developer who wants to contribute, or a security company interested in partnering — reach out.</p>
              <div className="about-cta__btns">
                <a href="https://github.com/ischyr" target="_blank" rel="noreferrer" className="btn btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  View on GitHub
                </a>
                <a href="mailto:support@redteamcenter.io" className="btn btn-secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>
    <Footer />
  </div>
);

export default About;
