import { useState } from 'react';
import './Benchmark.css';

const stats = [
  {
    value: '10+',
    label: 'Attack Kill-Chain Phases',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    color: '#dc2626',
  },
  {
    value: '500+',
    label: 'CVEs Tracked Live',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    color: '#7c3aed',
  },
  {
    value: '50+',
    label: 'Red Team Tools Mapped',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    color: '#f59e0b',
  },
  {
    value: '24/7',
    label: 'Live Threat Intelligence',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    color: '#10b981',
  },
];

const tabs = [
  {
    label: 'Cheatsheet',
    img: `${process.env.PUBLIC_URL}/screenshot-cheatsheet.png`,
    alt: 'Red Team Ops Map – Attack Kill Chain Cheatsheet',
    badge: 'MITRE ATT&CK Aligned',
    badgeColor: '#dc2626',
    title: 'Red Team Operations Architecture Map',
    description: 'A fully interactive, MITRE ATT&CK-aligned kill-chain reference. Each phase — from Recon to Collection & Exfil — is mapped with techniques, real-world tools, and ready-to-run key commands so operators move fast without missing steps.',
    highlights: ['10 kill-chain phases covered', 'Tools per phase (Cobalt Strike, Sliver, GoPhish…)', 'Copy-paste key commands'],
  },
  {
    label: 'CVE Feed',
    img: `${process.env.PUBLIC_URL}/screenshot-cve.png`,
    alt: 'Live CVE Feed – Vulnerability Intelligence',
    badge: 'Live',
    badgeColor: '#10b981',
    title: 'Live CVE Vulnerability Intelligence',
    description: 'Stay ahead of emerging threats with a real-time CVE feed powered by Shodan\'s CVE DB. Search by CVE ID, inspect CVSS scores, read full descriptions, and track the latest published vulnerabilities — all without leaving the platform.',
    highlights: ['Real-time feed from Shodan CVE DB', 'CVSS v2 & v3 scoring', 'Instant CVE ID search & detail view'],
  },
  {
    label: 'Email Leaks',
    img: `${process.env.PUBLIC_URL}/screenshot-email-leaks.png`,
    alt: 'Email Leaks – Breach Database Lookup',
    badge: 'Powered by HaveIBeenPwned',
    badgeColor: '#7c3aed',
    title: 'Email & Domain Breach Lookup',
    description: 'Check individual accounts or entire domains against the HaveIBeenPwned breach database. View breach counts, exposed data types, and historical records — cached results return instantly so you don\'t burn API credits on repeated checks.',
    highlights: ['Account & domain scan modes', 'Breach history with data type breakdown', 'Results cached for 30 days'],
  },
];

const Benchmark = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleTabClick = (i) => {
    if (i === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(i);
      setAnimating(false);
    }, 200);
  };

  const tab = tabs[activeTab];

  return (
    <section className="benchmark section">
      <div className="container">
        {/* Header */}
        <div className="benchmark__header text-center">
          <div className="section-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Platform Highlights
          </div>
          <h2 className="section-title">
            Everything a Red Team{' '}
            <span className="text-gradient">Operator Needs</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From live CVE intelligence and breach lookups to MITRE-aligned cheatsheets
            and C2 lab management — all in one place.
          </p>
        </div>

        {/* Stats grid */}
        <div className="benchmark__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="benchmark__stat">
              <div className="benchmark__stat-icon" style={{ color: stat.color, background: `${stat.color}15` }}>
                {stat.icon}
              </div>
              <div className="benchmark__stat-value" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="benchmark__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Screenshot tabs */}
        <div className="benchmark__mockup">
          {/* Tab bar */}
          <div className="bench-mock__header">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                className={`bench-mock__tab ${activeTab === i ? 'bench-mock__tab--active' : ''}`}
                onClick={() => handleTabClick(i)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className={`bench-mock__body ${animating ? 'bench-mock__body--out' : 'bench-mock__body--in'}`}>
            {/* Description row */}
            <div className="bench-mock__desc">
              <div className="bench-mock__desc-left">
                <span className="bench-mock__badge" style={{ background: `${tab.badgeColor}18`, color: tab.badgeColor, borderColor: `${tab.badgeColor}35` }}>
                  {tab.badge}
                </span>
                <h3 className="bench-mock__title">{tab.title}</h3>
                <p className="bench-mock__text">{tab.description}</p>
                <ul className="bench-mock__highlights">
                  {tab.highlights.map((h) => (
                    <li key={h}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Screenshot */}
            <div className="bench-mock__screenshot">
              <img
                src={tab.img}
                alt={tab.alt}
                className="bench-mock__screenshot-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benchmark;
