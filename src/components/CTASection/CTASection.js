import './CTASection.css';

const steps = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
    label: 'Quick Start',
    color: '#dc2626',
    desc: 'MongoDB must be running on port 27017. Then boot the backend and frontend in two terminals.',
    blocks: [
      { comment: '# Terminal 1 — Backend', lines: ['cd server', 'npm run dev'] },
      { comment: '# Terminal 2 — Frontend', lines: ['npm start'] },
    ],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    label: 'API Keys',
    color: '#7c3aed',
    desc: 'Add the following keys to server/.env before starting.',
    keys: [
      { name: 'MONGO_URI', hint: 'MongoDB connection string' },
      { name: 'JWT_SECRET', hint: 'Random 64-char secret' },
      { name: 'SHODAN_API_KEY', hint: 'CVE Feed (Shodan CVE DB)' },
      { name: 'HIBP_API_KEY', hint: 'Email Leaks (HaveIBeenPwned)' },
      { name: 'VIRUSTOTAL_API_KEY', hint: 'Malware Scanner' },
      { name: 'GOOGLE_CLIENT_ID', hint: 'OAuth — Google sign-in' },
      { name: 'GITHUB_CLIENT_ID', hint: 'OAuth — GitHub sign-in' },
    ],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    label: 'Docker Images',
    color: '#0ea5e9',
    desc: 'Pull these images before using Pillaging tools. Docker Desktop must be running.',
    images: [
      { image: 'projectdiscovery/subfinder', use: 'Subdomain Enumeration' },
      { image: 'projectdiscovery/httpx', use: 'Webserver Enumeration' },
      { image: 'leonjza/gowitness', use: 'Domain Flyover' },
      { image: 'rustscan/rustscan', use: 'Network Scanning' },
    ],
  },
];

const CTASection = () => (
  <section className="setup">
    {/* Top wave — transitions from light WhyChooseUs into dark section */}
    <div className="setup__wave">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="white"/>
      </svg>
    </div>

    <div className="container">
      <div className="setup__header text-center">
        <div className="section-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
          Self-Hosted
        </div>
        <h2 className="section-title" style={{ color: 'white' }}>
          Get Up and Running{' '}
          <span className="setup__title-highlight">in Minutes</span>
        </h2>
        <p className="section-subtitle mx-auto" style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center' }}>
          RedTeamCenter runs fully self-hosted. MongoDB + Node.js backend + React frontend — no third-party SaaS dependencies.
        </p>
      </div>

      <div className="setup__grid">
        {/* Quick Start */}
        <div className="setup__card">
          <div className="setup__card-head">
            <div className="setup__card-icon" style={{ background: `${steps[0].color}12`, color: steps[0].color }}>
              {steps[0].icon}
            </div>
            <div>
              <div className="setup__card-label">{steps[0].label}</div>
              <p className="setup__card-desc">{steps[0].desc}</p>
            </div>
          </div>
          <div className="setup__code-blocks">
            {steps[0].blocks.map((block) => (
              <div key={block.comment} className="setup__code">
                <span className="setup__code-comment">{block.comment}</span>
                {block.lines.map((l) => (
                  <div key={l} className="setup__code-line">
                    <span className="setup__code-prompt">$</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* API Keys */}
        <div className="setup__card">
          <div className="setup__card-head">
            <div className="setup__card-icon" style={{ background: `${steps[1].color}12`, color: steps[1].color }}>
              {steps[1].icon}
            </div>
            <div>
              <div className="setup__card-label">{steps[1].label}</div>
              <p className="setup__card-desc">{steps[1].desc}</p>
            </div>
          </div>
          <div className="setup__key-list">
            {steps[1].keys.map((k) => (
              <div key={k.name} className="setup__key-row">
                <span className="setup__key-name">{k.name}</span>
                <span className="setup__key-hint">{k.hint}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Docker Images */}
        <div className="setup__card">
          <div className="setup__card-head">
            <div className="setup__card-icon" style={{ background: `${steps[2].color}12`, color: steps[2].color }}>
              {steps[2].icon}
            </div>
            <div>
              <div className="setup__card-label">{steps[2].label}</div>
              <p className="setup__card-desc">{steps[2].desc}</p>
            </div>
          </div>
          <div className="setup__docker-list">
            {steps[2].images.map((d) => (
              <div key={d.image} className="setup__docker-row">
                <div className="setup__docker-pill">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                  docker pull {d.image}
                </div>
                <span className="setup__docker-use">{d.use}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
