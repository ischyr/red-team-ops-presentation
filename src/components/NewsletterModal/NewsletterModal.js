import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './NewsletterModal.css';

const NewsletterModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
        setLoading(false);
        setExiting(false);
      }, 250);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || loading) return;

    setLoading(true);
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setSubmitted(true);
        setExiting(false);
        setLoading(false);
      }, 220);
    }, 700);
  };

  return createPortal(
    <div className="newsletter-modal" onMouseDown={onClose}>
      <div className="newsletter-modal__card" onMouseDown={(e) => e.stopPropagation()}>
        <button className="newsletter-modal__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {!submitted ? (
          <div className={`newsletter-modal__form-wrap ${exiting ? 'newsletter-modal__form-wrap--exit' : ''}`}>
            <div className="newsletter-modal__icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>

            <h2 className="newsletter-modal__title">Join the Newsletter</h2>
            <p className="newsletter-modal__text">
              Get product updates, new module announcements, and red team research delivered to your inbox. No spam, just signal.
            </p>

            <form className="newsletter-modal__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className={`newsletter-modal__input ${loading ? 'newsletter-modal__input--loading' : ''}`}
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                disabled={loading}
              />
              <button
                type="submit"
                className={`btn btn-primary newsletter-modal__submit ${loading ? 'newsletter-modal__submit--loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="newsletter-modal__spinner" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </>
                )}
              </button>
            </form>

            <p className="newsletter-modal__disclaimer">
              By subscribing, you agree to receive occasional emails from RedTeamCenter. Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div className="newsletter-modal__success">
            <div className="newsletter-modal__confetti">
              <span style={{ '--i': 0 }} /><span style={{ '--i': 1 }} />
              <span style={{ '--i': 2 }} /><span style={{ '--i': 3 }} />
              <span style={{ '--i': 4 }} /><span style={{ '--i': 5 }} />
            </div>
            <div className="newsletter-modal__success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" className="newsletter-modal__check-path"/>
              </svg>
            </div>
            <h2 className="newsletter-modal__title">You're in!</h2>
            <p className="newsletter-modal__text">
              <strong>{email}</strong> is now registered for the RedTeamCenter newsletter. Check your inbox for a welcome message soon.
            </p>
            <button className="btn btn-primary newsletter-modal__submit" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default NewsletterModal;
