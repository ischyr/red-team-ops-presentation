import { useState } from 'react';
import './CTASection.css';

const CTASection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Signup logic would go here
    alert(`Thanks! We'll send a signup link to ${email}`);
    setEmail('');
  };

  return (
    <section className="cta-section section">
      {/* Decorative blobs */}
      <div className="cta__blob cta__blob--1" />
      <div className="cta__blob cta__blob--2" />

      <div className="container">
        <div className="cta__inner">
          <div className="cta__badge">🎉 No credit card required</div>

          <h2 className="cta__title">
            Start Building Your Human Firewall{' '}
            <span className="cta__title-highlight">Today</span>
          </h2>

          <p className="cta__subtitle">
            Join 1,000+ companies using CanIPhish to protect their employees.
            Free for up to 5 users — no credit card, no commitment.
          </p>

          <form className="cta__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="cta__input"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-white btn-lg cta__submit">
              Start for free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </form>

          <div className="cta__features">
            {[
              '✓ Free plan — forever',
              '✓ No credit card required',
              '✓ Setup in under 5 minutes',
              '✓ Cancel anytime',
            ].map((f) => (
              <span key={f} className="cta__feature">{f}</span>
            ))}
          </div>

          {/* Proof */}
          <div className="cta__social-proof">
            <div className="cta__avatars">
              {['A', 'B', 'C', 'D', 'E'].map((l, i) => (
                <div key={i} className="cta__avatar" style={{ zIndex: 5 - i }}>{l}</div>
              ))}
            </div>
            <span className="cta__proof-text">
              <strong>1,000+</strong> security teams already onboarded this month
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
