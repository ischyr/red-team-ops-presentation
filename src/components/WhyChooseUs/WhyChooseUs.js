import './WhyChooseUs.css';

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: 'No Credit Card Required',
    desc: 'Get started with a full-featured free plan. No payment details needed until you are ready to scale.',
    color: '#2563eb',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'SOC 2 Type II Certified',
    desc: 'Enterprise-grade security you can trust. Your data is processed and stored to the highest standards.',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'GDPR Compliant',
    desc: 'Regional data residency across 8 global locations. Full compliance with GDPR, CCPA, and local privacy laws.',
    color: '#10b981',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Free for Up to 5 Users',
    desc: 'Small teams can use CanIPhish for free, forever. Perfect for startups and SMBs just getting started.',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Real-Time Reporting',
    desc: 'Live dashboards show you exactly where your organisation stands — no waiting for monthly batch reports.',
    color: '#ef4444',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Seamless Integrations',
    desc: 'Connect with Microsoft 365, Google Workspace, Okta, Slack, and your existing SIEM or SOAR platform.',
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: 'Multi-Language Training',
    desc: 'Deliver training in 20+ languages so every employee can learn in their native tongue.',
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Automated Campaigns',
    desc: 'Schedule recurring phishing campaigns and training reminders — set it and let the platform do the work.',
    color: '#06b6d4',
  },
];

const WhyChooseUs = () => (
  <section className="why section">
    <div className="container">
      {/* Header */}
      <div className="why__header text-center">
        <div className="section-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Why CanIPhish
        </div>
        <h2 className="section-title">
          Built for Security Teams{' '}
          <span className="text-gradient">of All Sizes</span>
        </h2>
        <p className="section-subtitle mx-auto" style={{ textAlign: 'center' }}>
          From 5-person startups to Fortune 500 enterprises — CanIPhish scales
          with you and delivers results from day one.
        </p>
      </div>

      {/* Benefits grid */}
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
