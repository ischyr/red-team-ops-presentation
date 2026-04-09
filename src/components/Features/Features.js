import { useState } from 'react';
import './Features.css';

const tabs = [
  {
    id: 'training',
    label: 'Gamified Training',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    heading: 'Drive Behaviour Change Through Gamification',
    description:
      'Employees learn best when training is fun and rewarding. Our gamified platform uses points, badges, and leaderboards to boost engagement and create lasting security habits.',
    features: [
      { icon: '🏆', title: '20+ Achievement Badges', desc: 'Reward employees as they complete training milestones.' },
      { icon: '📊', title: 'Live Leaderboards', desc: 'Foster healthy competition across teams and departments.' },
      { icon: '📚', title: '50 Micro-Learning Modules', desc: 'Bite-sized lessons covering every key security topic.' },
      { icon: '🌐', title: 'Multi-Language Support', desc: 'Train your global workforce in their native language.' },
    ],
    mockup: 'training',
  },
  {
    id: 'phishing',
    label: 'Phishing Simulation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    heading: 'Run Realistic Multi-Channel Phishing Campaigns',
    description:
      'Test your employees with real-world phishing simulations across email, voice, and conversational channels. Identify vulnerable users and automatically enrol them in targeted training.',
    features: [
      { icon: '📧', title: 'Email Phishing', desc: 'Hundreds of customisable phishing email templates.' },
      { icon: '📞', title: 'Voice Phishing (Vishing)', desc: 'Simulate phone-based social engineering attacks.' },
      { icon: '💬', title: 'SMS & Chat Phishing', desc: 'Test employees across modern communication channels.' },
      { icon: '🎯', title: 'Smart Auto-Enrolment', desc: 'Auto-enrol clickers into remedial training instantly.' },
    ],
    mockup: 'phishing',
  },
  {
    id: 'reporting',
    label: 'Reporting & Analytics',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6"  y1="20" x2="6"  y2="14"/>
      </svg>
    ),
    heading: 'Real-Time Insights That Drive Measurable Results',
    description:
      'Turn security awareness data into actionable intelligence. Track individual and organisational risk scores, monitor campaign outcomes, and generate compliance-ready reports.',
    features: [
      { icon: '📈', title: 'Risk Score Tracking', desc: 'Quantify employee and team risk with live dashboards.' },
      { icon: '🔔', title: 'Automated Alerts', desc: 'Get notified when employees fail phishing tests.' },
      { icon: '📄', title: 'Compliance Reports', desc: 'One-click reports for ISO 27001, GDPR & more.' },
      { icon: '🔗', title: 'SIEM Integrations', desc: 'Push events to Splunk, Microsoft Sentinel and more.' },
    ],
    mockup: 'reporting',
  },
];

/* ── Feature-specific CSS mockups ─────────────────── */
const TrainingMockup = () => (
  <div className="features__mockup-inner">
    <div className="feat-mock__top">
      <span className="feat-mock__heading">My Training Progress</span>
      <span className="feat-mock__score">Score: 2,450 pts</span>
    </div>
    <div className="feat-mock__badges-row">
      {['🛡️', '🎯', '🔒', '📧', '🏆'].map((b, i) => (
        <div key={i} className="feat-mock__badge">{b}</div>
      ))}
      <div className="feat-mock__badge feat-mock__badge--locked">🔐</div>
      <div className="feat-mock__badge feat-mock__badge--locked">🔐</div>
    </div>
    <div className="feat-mock__leaderboard">
      <div className="feat-mock__lb-header">Leaderboard — This Month</div>
      {[
        { rank: '🥇', name: 'Alice M.', pts: 3200 },
        { rank: '🥈', name: 'Bob K.', pts: 2900 },
        { rank: '🥉', name: 'You', pts: 2450, highlight: true },
        { rank: '4', name: 'Dana R.', pts: 2100 },
      ].map((row) => (
        <div key={row.name} className={`feat-mock__lb-row ${row.highlight ? 'feat-mock__lb-row--you' : ''}`}>
          <span>{row.rank}</span>
          <span>{row.name}</span>
          <span style={{ marginLeft: 'auto', fontWeight: 700 }}>{row.pts.toLocaleString()} pts</span>
        </div>
      ))}
    </div>
  </div>
);

const PhishingMockup = () => (
  <div className="features__mockup-inner">
    <div className="feat-mock__top">
      <span className="feat-mock__heading">Campaign: Q2 Phishing Test</span>
      <span className="feat-mock__status">● Live</span>
    </div>
    <div className="feat-mock__campaign-stats">
      {[
        { label: 'Sent', value: '1,240', color: '#3b82f6' },
        { label: 'Opened', value: '856', color: '#f59e0b' },
        { label: 'Clicked', value: '124', color: '#ef4444' },
        { label: 'Reported', value: '312', color: '#10b981' },
      ].map((s) => (
        <div key={s.label} className="feat-mock__campaign-stat">
          <div className="feat-mock__campaign-val" style={{ color: s.color }}>{s.value}</div>
          <div className="feat-mock__campaign-lbl">{s.label}</div>
        </div>
      ))}
    </div>
    <div className="feat-mock__funnel">
      {[
        { label: 'Sent', width: '100%', color: '#3b82f6' },
        { label: 'Opened 69%', width: '69%', color: '#f59e0b' },
        { label: 'Clicked 10%', width: '30%', color: '#ef4444' },
        { label: 'Trained 8%', width: '20%', color: '#10b981' },
      ].map((row) => (
        <div key={row.label} className="feat-mock__funnel-row">
          <span className="feat-mock__funnel-lbl">{row.label}</span>
          <div className="feat-mock__funnel-bar" style={{ width: row.width, background: row.color }} />
        </div>
      ))}
    </div>
  </div>
);

const ReportingMockup = () => (
  <div className="features__mockup-inner">
    <div className="feat-mock__top">
      <span className="feat-mock__heading">Security Risk Dashboard</span>
      <span className="feat-mock__badge-pill feat-mock__badge-pill--green">Low Risk</span>
    </div>
    <div className="feat-mock__risk-meter">
      <div className="feat-mock__risk-arc">
        <svg viewBox="0 0 120 70" width="180" height="100">
          <path d="M10 60 A50 50 0 0 1 110 60" fill="none" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round"/>
          <path d="M10 60 A50 50 0 0 1 110 60" fill="none" stroke="url(#rg)" strokeWidth="12" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="60"/>
          <defs>
            <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="60%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#ef4444"/>
            </linearGradient>
          </defs>
          <text x="60" y="58" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="800">24</text>
          <text x="60" y="68" textAnchor="middle" fill="#94a3b8" fontSize="7">RISK SCORE</text>
        </svg>
      </div>
    </div>
    <div className="feat-mock__metrics">
      {[
        { label: 'Phishing Resistance', val: 92, color: '#10b981' },
        { label: 'Training Coverage', val: 87, color: '#3b82f6' },
        { label: 'Reporting Rate', val: 74, color: '#7c3aed' },
      ].map((m) => (
        <div key={m.label} className="feat-mock__metric">
          <div className="feat-mock__metric-top">
            <span>{m.label}</span>
            <span style={{ color: m.color, fontWeight: 700 }}>{m.val}%</span>
          </div>
          <div className="feat-mock__metric-bar">
            <div className="feat-mock__metric-fill" style={{ width: `${m.val}%`, background: m.color }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const mockups = {
  training: <TrainingMockup />,
  phishing: <PhishingMockup />,
  reporting: <ReportingMockup />,
};

const Features = () => {
  const [active, setActive] = useState('training');
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
            Everything You Need to{' '}
            <span className="text-gradient">Defend Your People</span>
          </h2>
          <p className="section-subtitle">
            From initial awareness to measurable behaviour change — CanIPhish
            covers every step of the security awareness journey.
          </p>
        </div>

        {/* Tab bar */}
        <div className="features__tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`features__tab ${active === t.id ? 'features__tab--active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="features__content">
          {/* Left */}
          <div className="features__copy">
            <h3 className="features__copy-title">{tab.heading}</h3>
            <p className="features__copy-desc">{tab.description}</p>
            <div className="features__list">
              {tab.features.map((f) => (
                <div key={f.title} className="features__item">
                  <div className="features__item-icon">{f.icon}</div>
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

          {/* Right: mockup */}
          <div className="features__visual">
            <div className="features__mockup">
              {mockups[active]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
