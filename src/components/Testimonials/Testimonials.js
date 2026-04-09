import './Testimonials.css';

const testimonials = [
  {
    quote:
      "RedTeamCenter completely changed how we run engagements. Having the kill-chain tracker, findings management, and C2 infrastructure all in one place cut our op setup time in half.",
    author: 'Marcus Holt',
    role: 'Lead Red Team Operator',
    company: 'CyberForce Group',
    color: '#dc2626',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    rating: 5,
  },
  {
    quote:
      "The Device Code Phishing module is a game-changer. We ran a full OAuth token capture campaign against our client's M365 tenant in minutes. The token vault and Graph enumeration saved us hours.",
    author: 'Sasha Kovac',
    role: 'Offensive Security Engineer',
    company: 'RedOps Consulting',
    color: '#7c3aed',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    rating: 5,
  },
  {
    quote:
      "The MITRE ATT&CK cheatsheet with live key commands is something I didn't know I needed until I had it. I keep it open during every engagement. The CVE feed integration is equally impressive.",
    author: 'Priya Anand',
    role: 'Penetration Tester',
    company: 'NullSec Labs',
    color: '#10b981',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    rating: 5,
  },
  {
    quote:
      "Spinning up a DigitalOcean C2 node via Terraform directly from the platform felt like magic the first time. No more manual infra — everything is tracked, scoped to the op, and destroyed with one click.",
    author: 'Tobias Meier',
    role: 'Red Team Lead',
    company: 'Sentinel Advisory',
    color: '#f59e0b',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="testimonial__stars">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const Testimonials = () => (
  <section className="testimonials section">
    {/* Top wave */}
    <div className="testimonials__wave testimonials__wave--top">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="white"/>
      </svg>
    </div>
    <div className="container">
      {/* Header */}
      <div className="testimonials__header text-center">
        <div className="section-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Operator Stories
        </div>
        <h2 className="section-title testimonials__title">
          Trusted by Red Teams <span className="testimonials__title-highlight">Worldwide</span>
        </h2>
        <p className="section-subtitle mx-auto" style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center' }}>
          From solo operators to enterprise red teams — RedTeamCenter is the platform built for how modern offensive security actually works.
        </p>
      </div>

      {/* Cards grid */}
      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <div key={t.author} className="testimonial__card">
            <StarRating count={t.rating} />
            <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="testimonial__author">
              <div className="testimonial__avatar" style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}40` }}>
                {t.icon}
              </div>
              <div>
                <div className="testimonial__name">{t.author}</div>
                <div className="testimonial__meta">{t.role} · {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div className="testimonials__badges">
        <div className="testimonials__badge-item">
          <div className="testimonials__badge-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <div>
            <div className="testimonials__badge-score">4.9 / 5</div>
            <div className="testimonials__badge-source">Operator Rating</div>
          </div>
        </div>
        <div className="testimonials__divider" />
        <div className="testimonials__badge-item">
          <div className="testimonials__badge-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <div className="testimonials__badge-score">500+ Operators</div>
            <div className="testimonials__badge-source">Active Worldwide</div>
          </div>
        </div>
        <div className="testimonials__divider" />
        <div className="testimonials__badge-item">
          <div className="testimonials__badge-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <div className="testimonials__badge-score">SOC 2 Type II</div>
            <div className="testimonials__badge-source">Certified Platform</div>
          </div>
        </div>
      </div>
    </div>
    {/* Bottom wave */}
    <div className="testimonials__wave testimonials__wave--bottom">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
      </svg>
    </div>
  </section>
);

export default Testimonials;
