import './Hero.css';

/* ── Real dashboard screenshot ─────────────────────── */
/* Drop your screenshot at public/dashboard.png        */
const DashboardScreenshot = () => (
  <div className="hero__screenshot-frame">
    {/* Browser chrome */}
    <div className="mockup__chrome">
      <div className="mockup__dots">
        <span className="mockup__dot mockup__dot--red" />
        <span className="mockup__dot mockup__dot--yellow" />
        <span className="mockup__dot mockup__dot--green" />
      </div>
      <div className="mockup__url">redteamcenter.io/dashboard</div>
    </div>
    {/* ── Replace dashboard.png in /public with your screenshot ── */}
    <img
      src={`${process.env.PUBLIC_URL}/dashboard.png`}
      alt="Red Team Center – Operations Dashboard"
      className="hero__screenshot-img"
    />
  </div>
);

/* ── Hero Section ──────────────────────────────────── */
const Hero = () => {
  return (
    <section className="hero">
      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="container hero__inner">
        {/* Left: Copy */}
        <div className="hero__copy">
          <div className="hero__tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            #1 Red Team Operations Platform
          </div>

          <h1 className="hero__title">
            Command Your&nbsp;
            <span className="hero__title-gradient">Red Team Operations</span>
            &nbsp;From One Place
          </h1>

          <p className="hero__subtitle">
            Manage engagements, track findings, coordinate team members and run
            phishing simulations — all from a single, powerful operations centre.
          </p>

          <div className="hero__actions">
            <a href="#" className="btn btn-white btn-lg hero__cta-primary">
              Request access
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#" className="btn btn-ghost-white btn-lg">
              Watch demo
            </a>
          </div>

          <div className="hero__social-proof">
            <div className="hero__avatars">
              {['E', 'C', 'X', 'A', 'B'].map((letter, i) => (
                <div key={i} className="hero__avatar" style={{ zIndex: 5 - i }}>
                  {letter}
                </div>
              ))}
            </div>
            <span className="hero__proof-text">
              Used by <strong>500+ red team operators</strong> worldwide
            </span>
          </div>

          {/* Trust badges */}
          <div className="hero__trust">
            <div className="hero__trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Engagement Tracking
            </div>
            <div className="hero__trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10z"/></svg>
              Live Ops Dashboard
            </div>
            <div className="hero__trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              Team Coordination
            </div>
          </div>
        </div>

        {/* Right: Dashboard screenshot */}
        <div className="hero__visual">
          <DashboardScreenshot />
          {/* Floating card 1 */}
          <div className="hero__float hero__float--tl">
            <div className="hero__float-icon hero__float-icon--green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <div className="hero__float-title">3 Active Engagements</div>
              <div className="hero__float-sub">All systems nominal</div>
            </div>
          </div>
          {/* Floating card 2 */}
          <div className="hero__float hero__float--br">
            <div className="hero__float-icon hero__float-icon--red">🎯</div>
            <div>
              <div className="hero__float-title">2 Critical Findings</div>
              <div className="hero__float-sub">Operation Obsidian Phoenix</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
