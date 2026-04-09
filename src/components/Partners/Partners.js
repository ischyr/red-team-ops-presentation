import './Partners.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const contributors = [
  {
    name: 'Iulian Schifirnet',
    handle: '@ischyr',
    role: 'Creator & Lead Developer',
    contributions: ['Full platform architecture', 'All core modules', 'Frontend & Backend', 'DevOps & Infra'],
    github: 'https://github.com/ischyr',
    linkedin: 'https://www.linkedin.com/in/iulian-schifirnet-238049201/',
    badge: 'Founder',
    badgeColor: '#dc2626',
    rank: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const Partners = () => (
  <div className="app">
    <Navbar />
    <main>

      {/* Hero */}
      <div className="partners-hero">
        <div className="partners-hero__glow" />
        <div className="container">
          <div className="partners-hero__inner text-center">
            <div className="section-tag" style={{ background: 'rgba(220,38,38,0.12)', color: '#f87171', border: '1px solid rgba(220,38,38,0.25)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              Partners
            </div>
            <h1 className="partners-hero__title">
              No partners yet —<br />
              <span className="partners-hero__highlight">but the door is open.</span>
            </h1>
            <p className="partners-hero__sub">
              RedTeamCenter is a community-first project. If you're an operator, a security company, or someone who wants to push offensive security tooling forward — we'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="partners-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc"/>
        </svg>
      </div>

      {/* CTA callout */}
      <div className="partners-body">
        <div className="container">

          <div className="partners-callout">
            <div className="partners-callout__left">
              <div className="partners-callout__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="partners-callout__title">Want to improve the community?</h3>
                <p className="partners-callout__text">
                  Whether you want to sponsor the project, contribute modules, test the platform, or just spread the word — let's talk. Every contribution, big or small, makes RedTeamCenter better for the entire red team community.
                </p>
              </div>
            </div>
            <a href="mailto:support@redteamcenter.io" className="btn btn-primary partners-callout__btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get in Touch
            </a>
          </div>

          {/* Leaderboard */}
          <div className="partners-leaderboard">
            <div className="partners-leaderboard__header">
              <div className="section-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                Contributors
              </div>
              <h2 className="section-title" style={{ marginBottom: 8 }}>
                Hall of Fame
              </h2>
              <p className="section-subtitle" style={{ fontSize: 14 }}>
                The people who helped build and shape RedTeamCenter.
              </p>
            </div>

            <div className="partners-grid">
              {contributors.map((c) => (
                <div key={c.name} className="contributor-card">
                  {/* Rank badge */}
                  <div className="contributor-card__rank">#{c.rank}</div>

                  {/* Avatar */}
                  <div className="contributor-card__avatar" style={{ background: `${c.badgeColor}15`, color: c.badgeColor, border: `1px solid ${c.badgeColor}30` }}>
                    {c.icon}
                  </div>

                  {/* Badge */}
                  <div className="contributor-card__badge" style={{ background: `${c.badgeColor}15`, color: c.badgeColor }}>
                    {c.badge}
                  </div>

                  <h3 className="contributor-card__name">{c.name}</h3>
                  <p className="contributor-card__handle">{c.handle}</p>
                  <p className="contributor-card__role">{c.role}</p>

                  <div className="contributor-card__divider" />

                  <ul className="contributor-card__contributions">
                    {c.contributions.map((item) => (
                      <li key={item} className="contributor-card__contribution">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="contributor-card__links">
                    {c.github && (
                      <a href={c.github} target="_blank" rel="noreferrer" className="contributor-card__link">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {c.linkedin && (
                      <a href={c.linkedin} target="_blank" rel="noreferrer" className="contributor-card__link">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect x="2" y="9" width="4" height="12"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </main>
    <Footer />
  </div>
);

export default Partners;
