import './Footer.css';

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Data Processing Agreement', href: '/data-processing-agreement' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/iulian-schifirnet-238049201/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ischyr',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      {/* Center block */}
      <div className="footer__center">
        <a href="/" className="footer__logo">
          <svg width="36" height="36" viewBox="0 0 34 34" fill="none">
            <rect width="34" height="34" rx="9" fill="#dc2626"/>
            <path d="M17 6L8 10v7c0 5.25 3.85 10.15 9 11.35C22.15 27.15 26 22.25 26 17v-7L17 6z" fill="white" opacity="0.9"/>
            <path d="M14 17l2 2 4-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="footer__logo-text">RedTeamCenter</span>
        </a>

        <p className="footer__tagline">
          The all-in-one platform for red team operators — manage engagements,<br/>
          track findings, and coordinate your team in real time.
        </p>

        {/* Info row */}
        <div className="footer__info-row">
          <a href="mailto:support@redteamcenter.io" className="footer__info-item footer__contact-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            support@redteamcenter.io
          </a>
          <span className="footer__info-divider" />
          <span className="footer__info-item footer__office">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Bucharest, Romania
          </span>
        </div>

        {/* Social */}
        <div className="footer__social">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} className="footer__social-link" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer__divider" />

      {/* Bottom */}
      <div className="footer__bottom">
        <span className="footer__copyright">© {new Date().getFullYear()} RedTeamCenter. All rights reserved.</span>
        <div className="footer__legal-links">
          {legalLinks.map((l) => (
            <a key={l.label} href={l.href} className="footer__legal-link">{l.label}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
