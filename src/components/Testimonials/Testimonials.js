import './Testimonials.css';

const testimonials = [
  {
    quote:
      "CanIPhish transformed how we approach security awareness. Our phishing click rate dropped from 28% to just 4% within 90 days. The gamification keeps employees genuinely engaged.",
    author: 'Sarah Chen',
    role: 'Head of Information Security',
    company: 'Easygo',
    initials: 'SC',
    color: '#2563eb',
    rating: 5,
  },
  {
    quote:
      "We needed an affordable, comprehensive platform for our 2,500 students and staff. CanIPhish delivered beyond expectations — setup took under an hour and the results were immediate.",
    author: 'James Whitfield',
    role: 'IT Security Director',
    company: 'Everett Community College',
    initials: 'JW',
    color: '#7c3aed',
    rating: 5,
  },
  {
    quote:
      "The reporting capabilities are exceptional. We can demonstrate measurable security improvements to our board and tick compliance boxes effortlessly. Highly recommended for any CISO.",
    author: 'Maja Lindström',
    role: 'CISO',
    company: 'XLENT Group',
    initials: 'ML',
    color: '#10b981',
    rating: 5,
  },
  {
    quote:
      "CanIPhish integrates seamlessly into our existing security stack. The auto-enrolment feature is brilliant — employees who click phishing links are immediately trained. That closed-loop is gold.",
    author: 'Ryan Torres',
    role: 'Cybersecurity Manager',
    company: 'Cybrary',
    initials: 'RT',
    color: '#f59e0b',
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="testimonial__stars">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const Testimonials = () => (
  <section className="testimonials section">
    <div className="container">
      {/* Header */}
      <div className="testimonials__header text-center">
        <div className="section-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Customer Stories
        </div>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>
          Trusted by Security Teams{' '}
          <span style={{ background: 'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Worldwide
          </span>
        </h2>
        <p className="section-subtitle mx-auto" style={{ color: '#94a3b8', textAlign: 'center' }}>
          Join 1,000+ organisations that have built a human firewall with CanIPhish.
        </p>
      </div>

      {/* Cards grid */}
      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <div key={t.author} className="testimonial__card">
            <StarRating count={t.rating} />
            <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="testimonial__author">
              <div className="testimonial__avatar" style={{ background: `${t.color}25`, color: t.color }}>
                {t.initials}
              </div>
              <div>
                <div className="testimonial__name">{t.author}</div>
                <div className="testimonial__meta">{t.role} · {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Capterra badge row */}
      <div className="testimonials__badges">
        <div className="testimonials__badge-item">
          <div className="testimonials__badge-icon">⭐</div>
          <div>
            <div className="testimonials__badge-score">4.9 / 5</div>
            <div className="testimonials__badge-source">Capterra Reviews</div>
          </div>
        </div>
        <div className="testimonials__divider" />
        <div className="testimonials__badge-item">
          <div className="testimonials__badge-icon">🏅</div>
          <div>
            <div className="testimonials__badge-score">Top Rated</div>
            <div className="testimonials__badge-source">G2 Security Training</div>
          </div>
        </div>
        <div className="testimonials__divider" />
        <div className="testimonials__badge-item">
          <div className="testimonials__badge-icon">🛡️</div>
          <div>
            <div className="testimonials__badge-score">SOC 2 Type II</div>
            <div className="testimonials__badge-source">Certified Platform</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
