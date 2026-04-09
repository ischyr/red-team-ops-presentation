import { useState } from 'react';
import './Features.css';

const tabs = [
  {
    id: 'device-code',
    label: 'Device Code Phishing',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    heading: 'OAuth Device Code Phishing at Scale',
    description:
      'Initiate OAuth 2.0 device code flows, capture live access tokens, and enumerate Entra ID / Microsoft Graph targets. Pre-configured client app presets for Azure CLI, MS Office, Teams, and OneDrive — ready to deploy in seconds.',
    features: [
      {
        color: '#dc2626',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
        title: 'Multi-Client App Presets',
        desc: 'Azure CLI, Azure PowerShell, MS Office, MS Teams, OneDrive Sync and more — one click to configure.',
      },
      {
        color: '#7c3aed',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>,
        title: 'Token Vault',
        desc: 'Captured access tokens are stored automatically, ready for Graph enumeration and lateral movement.',
      },
      {
        color: '#0891b2',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6c0 0 4-2 11-2s11 2 11 2"/><path d="M5 10c0 0 3-1.5 7-1.5S19 10 19 10"/><path d="M8.5 14c0 0 1.5-1 3.5-1s3.5 1 3.5 1"/><circle cx="12" cy="18" r="1"/></svg>,
        title: 'Live Auth Polling',
        desc: 'Real-time status tracking — see the moment a target authenticates with the device code.',
      },
      {
        color: '#f59e0b',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
        title: 'Phishing Lure Templates',
        desc: 'Pre-built lures: IT Helpdesk, MFA Re-enrollment, Microsoft 365 License, and Shared Document.',
      },
    ],
    img: `${process.env.PUBLIC_URL}/screenshot-device-code.png`,
    alt: 'Device Code Phishing — OAuth 2.0 flow configuration and token capture',
  },
  {
    id: 'c2',
    label: 'C2 Infrastructure',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    heading: 'One-Click C2 Infrastructure Deployment',
    description:
      'Provision and manage C2 nodes via Terraform + Docker across DigitalOcean, AWS EC2, and Vultr — all without leaving the platform. Full lifecycle management: deploy, monitor active nodes, and destroy infrastructure when the op is done.',
    features: [
      {
        color: '#0891b2',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
        title: 'Multi-Cloud Support',
        desc: 'Deploy to DigitalOcean, AWS EC2, or Vultr VPS with provider-specific infrastructure templates.',
      },
      {
        color: '#2563eb',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
        title: 'Terraform + Docker Automation',
        desc: 'Infrastructure-as-code under the hood — reproducible, auditable deployments every time.',
      },
      {
        color: '#10b981',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
        title: 'Live Node Status',
        desc: 'Monitor running, in-progress, and destroyed nodes with real-time status updates per deployment.',
      },
      {
        color: '#dc2626',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
        title: 'Tied to Active Engagements',
        desc: 'Every deployment is scoped to an operation — keeping infrastructure and ops aligned.',
      },
    ],
    img: `${process.env.PUBLIC_URL}/screenshot-c2.png`,
    alt: 'C2 Infrastructure — Terraform + Docker node deployment and management',
  },
  {
    id: 'engagement',
    label: 'Engagement Tracking',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    heading: 'Full Engagement Lifecycle Management',
    description:
      'Track every active operation from Recon to Done. Manage findings by severity, assign operators, and monitor progress through the kill-chain — with an integrated TTX planner, loot tracker, evidence vault, and cleanup tracker all under one workspace.',
    features: [
      {
        color: '#dc2626',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
        title: 'Kill-Chain Progress Tracker',
        desc: 'Visual progress bar across Preparing → Recon → Access → Post-Exploit → Reporting → Done.',
      },
      {
        color: '#ef4444',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
        title: 'Findings Management',
        desc: 'Log Critical, High, Medium, and Low findings with full context and severity tracking.',
      },
      {
        color: '#7c3aed',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
        title: 'Multi-Operator Assignment',
        desc: 'Assign multiple operators per engagement with live active status per team member.',
      },
      {
        color: '#10b981',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
        title: 'Integrated Op Workspace',
        desc: 'Loot Tracker, Evidence Vault, Reverse Shells, CVE Research Board and Cleanup Tracker built in.',
      },
    ],
    img: `${process.env.PUBLIC_URL}/screenshot-engagement.png`,
    alt: 'Engagement Tracking — Operation Obsidian Phoenix findings and progress',
  },
];

const Features = () => {
  const [active, setActive] = useState('device-code');
  const [animating, setAnimating] = useState(false);

  const handleTab = (id) => {
    if (id === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(id);
      setAnimating(false);
    }, 180);
  };

  const tab = tabs.find((t) => t.id === active);

  return (
    <section className="features section">
      <div className="container">
        {/* Header */}
        <div className="features__header">
          <div className="section-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Platform Features
          </div>
          <h2 className="section-title">
            Everything You Need for a{' '}
            <span className="text-gradient">Red Team Engagement</span>
          </h2>
          <p className="section-subtitle">
            RedTeamCenter is more than an engagement management platform — it's a
            fully integrated offensive operations hub built for modern red teams.
          </p>
        </div>

        {/* Tab bar */}
        <div className="features__tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`features__tab ${active === t.id ? 'features__tab--active' : ''}`}
              onClick={() => handleTab(t.id)}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className={`features__content ${animating ? 'features__content--out' : 'features__content--in'}`}>
          {/* Left: copy */}
          <div className="features__copy">
            <h3 className="features__copy-title">{tab.heading}</h3>
            <p className="features__copy-desc">{tab.description}</p>
            <div className="features__list">
              {tab.features.map((f) => (
                <div key={f.title} className="features__item">
                  <div
                    className="features__item-icon"
                    style={{ background: `${f.color}15`, color: f.color }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div className="features__item-title">{f.title}</div>
                    <div className="features__item-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="btn btn-primary btn-lg">
              Explore {tab.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Right: screenshot */}
          <div className="features__visual">
            <div className="features__mockup features__mockup--screenshot">
              <img
                src={tab.img}
                alt={tab.alt}
                className="features__screenshot-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
