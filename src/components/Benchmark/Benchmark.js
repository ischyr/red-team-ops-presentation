import './Benchmark.css';

const stats = [
  {
    value: '90%+',
    label: 'Training Completion Rate',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    color: '#2563eb',
  },
  {
    value: '50',
    label: 'Micro-Learning Modules',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    color: '#7c3aed',
  },
  {
    value: '20+',
    label: 'Achievement Badges',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    color: '#f59e0b',
  },
  {
    value: '4+',
    label: 'Years of Excellence',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: '#10b981',
  },
];

/* ── Platform screenshot placeholder ──────────────── */
const PlatformMockup = () => (
  <div className="benchmark__mockup">
    {/* Header row */}
    <div className="bench-mock__header">
      <div className="bench-mock__tab bench-mock__tab--active">Training Modules</div>
      <div className="bench-mock__tab">Leaderboard</div>
      <div className="bench-mock__tab">My Badges</div>
    </div>

    {/* Module cards grid */}
    <div className="bench-mock__grid">
      {[
        { title: 'Phishing 101', progress: 100, badge: '✅', color: '#10b981' },
        { title: 'Password Hygiene', progress: 100, badge: '✅', color: '#10b981' },
        { title: 'Social Engineering', progress: 75, badge: '⏳', color: '#f59e0b' },
        { title: 'Email Safety', progress: 45, badge: '📖', color: '#3b82f6' },
        { title: 'MFA & 2FA', progress: 20, badge: '🔒', color: '#7c3aed' },
        { title: 'Ransomware Defence', progress: 0, badge: '⏸', color: '#94a3b8' },
      ].map((m) => (
        <div key={m.title} className="bench-mock__card">
          <div className="bench-mock__card-icon" style={{ background: `${m.color}20` }}>
            {m.badge}
          </div>
          <div className="bench-mock__card-body">
            <div className="bench-mock__card-title">{m.title}</div>
            <div className="bench-mock__progress-bar">
              <div
                className="bench-mock__progress-fill"
                style={{ width: `${m.progress}%`, background: m.color }}
              />
            </div>
            <div className="bench-mock__card-pct" style={{ color: m.color }}>
              {m.progress}%
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Benchmark = () => (
  <section className="benchmark section">
    <div className="container">
      {/* Header */}
      <div className="benchmark__header text-center">
        <div className="section-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          Platform Highlights
        </div>
        <h2 className="section-title">
          A New Benchmark in{' '}
          <span className="text-gradient">Security Awareness</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Drive real behaviour change with engaging content, gamification, and
          data-driven insights that show measurable security improvements.
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

      {/* Platform preview */}
      <PlatformMockup />
    </div>
  </section>
);

export default Benchmark;
