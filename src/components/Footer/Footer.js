import './Footer.css';

const footerLinks = {
  Platform: [
    { label: 'Security Awareness', href: '#' },
    { label: 'Simulated Phishing', href: '#' },
    { label: 'Email Threat Analysis', href: '#' },
    { label: 'Reporting & Analytics', href: '#' },
    { label: 'Pricing', href: '#' },
  ],
  'Free Tools': [
    { label: 'Security Games', href: '#' },
    { label: 'SAT Generator', href: '#' },
    { label: 'Email Analyzer', href: '#' },
    { label: 'Password Checker', href: '#' },
    { label: 'Domain Scanner', href: '#' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Knowledge Base', href: '#' },
    { label: 'Glossary', href: '#' },
    { label: 'Email Examples', href: '#' },
    { label: 'Partners', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Datasheet', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
};

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Data Processing Agreement', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
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
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      {/* Top section */}
      <div className="footer__top">
        {/* Brand column */}
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <svg width="32" height="32" viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" rx="9" fill="#dc2626"/>
              <path d="M17 6L8 10v7c0 5.25 3.85 10.15 9 11.35C22.15 27.15 26 22.25 26 17v-7L17 6z" fill="white" opacity="0.9"/>
              <path d="M14 17l2 2 4-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="footer__logo-text">RedTeamCenter</span>
          </a>
          <p className="footer__tagline">
            The all-in-one platform for red team operators — manage engagements,
            track findings, and coordinate your team in real time.
          </p>
          <div className="footer__contact">
            <a href="mailto:support@redteamcenter.io" className="footer__contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              support@redteamcenter.io
            </a>
          </div>
          <div className="footer__offices">
            <div className="footer__office">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Peregian Beach, QLD, Australia
            </div>
            <div className="footer__office">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              New York, NY, USA
            </div>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="footer__col">
            <h4 className="footer__col-heading">{section}</h4>
            <ul className="footer__col-links">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="footer__divider" />

      {/* Bottom row */}
      <div className="footer__bottom">
        <div className="footer__legal">
          <span className="footer__copyright">© {new Date().getFullYear()} RedTeamCenter. All rights reserved.</span>
          <div className="footer__legal-links">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="footer__legal-link">{l.label}</a>
            ))}
          </div>
        </div>
        <div className="footer__social">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} className="footer__social-link" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
