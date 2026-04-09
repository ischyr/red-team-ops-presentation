import './Pricing.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const features = [
  'Full engagement lifecycle management',
  'One-click C2 deployment (DO, AWS, Vultr)',
  'Device Code Phishing + Token Vault',
  'MITRE ATT&CK Cheatsheets',
  'Live CVE Feed + Research Boards',
  'Email & Domain Breach Lookup',
  'BloodHound Analyzer + Cypher Library',
  'Subdomain, Network & Webserver Scanning',
  'Domain Flyover + File Metadata',
  'Evil OAuth, ClickFix, MFA Push Fatigue',
  'Reporting, Findings & Client Portal',
  'Unlimited operators & engagements',
];

const Pricing = () => (
  <div className="app">
    <Navbar />
    <main>
      {/* Hero */}
      <div className="pricing-hero">
        <div className="pricing-hero__glow" />
        <div className="container">
          <div className="pricing-hero__inner text-center">
            <div className="section-tag" style={{ background: 'rgba(220,38,38,0.12)', color: '#f87171', border: '1px solid rgba(220,38,38,0.25)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              Pricing
            </div>
            <h1 className="pricing-hero__title">
              Simple, Honest Pricing.<br />
              <span className="pricing-hero__highlight">Free. Forever. Open Source.</span>
            </h1>
            <p className="pricing-hero__sub">
              RedTeamCenter will be released as a fully open-source project on GitHub — no paywalls,
              no tiers, no seat limits. Every feature, available to every operator.
            </p>
          </div>
        </div>
      </div>

      {/* Wave — hero to light body */}
      <div className="pricing-wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc"/>
        </svg>
      </div>

      {/* Card section */}
      <div className="pricing-body">
        <div className="pricing-body__glow" />
        <div className="container">
          <div className="pricing-layout">

            {/* Left — copy */}
            <div className="pricing-copy">
              <h2 className="pricing-copy__title">
                Built for operators,<br />
                <span className="text-gradient">shared with the community.</span>
              </h2>
              <p className="pricing-copy__text">
                Red teaming tooling has always thrived in the open. The best C2 frameworks, the best recon tools, the best techniques — all open source. RedTeamCenter follows that same philosophy.
              </p>
              <p className="pricing-copy__text">
                When we ship to GitHub, the full source will be available — frontend, backend, every module. Self-host it on your own infra, fork it, extend it, make it yours.
              </p>
              <p className="pricing-copy__text">
                If you build something useful — a new module, a better UI, an integration with a tool we're missing — <strong>open a PR.</strong> The best ideas come from operators who are actually in the field.
              </p>

              <div className="pricing-cta-row">
                <a href="https://github.com/ischyr" target="_blank" rel="noreferrer" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  Follow on GitHub
                </a>
                <a href="mailto:support@redteamcenter.io" className="btn btn-secondary">
                  Suggest a Feature
                </a>
              </div>

              {/* Stats */}
              <div className="pricing-stats">
                <div className="pricing-stat">
                  <span className="pricing-stat__value">100%</span>
                  <span className="pricing-stat__label">Open Source</span>
                </div>
                <div className="pricing-stat__divider" />
                <div className="pricing-stat">
                  <span className="pricing-stat__value">$0</span>
                  <span className="pricing-stat__label">Forever</span>
                </div>
                <div className="pricing-stat__divider" />
                <div className="pricing-stat">
                  <span className="pricing-stat__value">MIT</span>
                  <span className="pricing-stat__label">License</span>
                </div>
              </div>
            </div>

            {/* Right — card */}
            <div className="pricing-card-wrap">
              <div className="pricing-card">
                {/* Card header */}
                <div className="pricing-card__head">
                  <div className="pricing-card__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </div>
                  <div>
                    <div className="pricing-card__name">RedTeamCenter</div>
                    <div className="pricing-card__desc">Full platform. Every feature. No limits. Self-hosted on your infrastructure.</div>
                  </div>
                </div>

                <div className="pricing-card__divider" />

                {/* Price */}
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">$0</span>
                  <span className="pricing-card__period">Free forever</span>
                </div>

                {/* CTA */}
                <a href="https://github.com/ischyr" target="_blank" rel="noreferrer" className="pricing-card__btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  Star on GitHub
                </a>

                <div className="pricing-card__divider" />

                {/* Features */}
                <div className="pricing-card__features-label">Everything included</div>
                <ul className="pricing-card__features">
                  {features.map((f) => (
                    <li key={f} className="pricing-card__feature">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Community callout */}
      <div className="pricing-community">
        <div className="container">
          <div className="pricing-community__inner">
            <div className="pricing-community__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="pricing-community__body">
              <h3 className="pricing-community__title">Want to contribute?</h3>
              <p className="pricing-community__text">
                Got an idea for a new module? A better way to handle token capture? An integration with a tool your team already uses? Open an issue, start a discussion, or drop a PR. Every operator who contributes makes the platform better for everyone.
              </p>
            </div>
            <a href="mailto:support@redteamcenter.io" className="btn btn-primary pricing-community__btn">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

    </main>
    <Footer />
  </div>
);

export default Pricing;
