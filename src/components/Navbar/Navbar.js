import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const platformItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'Security Awareness',
    desc: 'Gamified training with 50+ micro-learning modules',
    href: '#',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Simulated Phishing',
    desc: 'Multi-channel phishing simulation campaigns',
    href: '#',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    label: 'Email Threat Analysis',
    desc: 'Automated suspicious email reporting & analysis',
    href: '#',
  },
];

const freeToolItems = [
  { icon: '🎮', label: 'Security Games', desc: 'Interactive awareness games', href: '#' },
  { icon: '⚡', label: 'SAT Generator', desc: 'Generate training content instantly', href: '#' },
  { icon: '🔍', label: 'Email Analyzer', desc: 'Inspect email headers & metadata', href: '#' },
  { icon: '🔒', label: 'Password Checker', desc: 'Test password strength in real-time', href: '#' },
  { icon: '📋', label: 'Phishing Quiz', desc: 'Spot phishing emails with our quiz', href: '#' },
  { icon: '🌐', label: 'Domain Scanner', desc: 'Check domains for phishing risk', href: '#' },
];

const resourceItems = [
  { icon: '📝', label: 'Blog', desc: 'Security tips & industry news', href: '#' },
  { icon: '📚', label: 'Knowledge Base', desc: 'Guides, docs & best practices', href: '#' },
  { icon: '📖', label: 'Glossary', desc: 'Cybersecurity terms explained', href: '#' },
  { icon: '📨', label: 'Email Examples', desc: 'Real-world phishing templates', href: '#' },
];

const navLinks = [
  { label: 'Pricing', href: '#' },
  { label: 'Partners', href: '#' },
  { label: 'About', href: '#' },
];

const DropdownMenu = ({ items, isWide }) => (
  <div className={`navbar__dropdown ${isWide ? 'navbar__dropdown--wide' : ''}`}>
    {items.map((item) => (
      <a key={item.label} href={item.href} className="navbar__dropdown-item">
        <span className="navbar__dropdown-icon">{item.icon}</span>
        <span>
          <span className="navbar__dropdown-label">{item.label}</span>
          <span className="navbar__dropdown-desc">{item.desc}</span>
        </span>
      </a>
    ))}
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileSection = (label) =>
    setMobileExpanded((prev) => (prev === label ? null : label));

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${mobileOpen ? 'navbar--mobile-open' : ''}`}
    >
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="/" className="navbar__logo">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <rect width="34" height="34" rx="9" fill="#dc2626"/>
            <path d="M17 6L8 10v7c0 5.25 3.85 10.15 9 11.35C22.15 27.15 26 22.25 26 17v-7L17 6z" fill="white" opacity="0.9"/>
            <path d="M14 17l2 2 4-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="navbar__logo-text">RedTeamCenter</span>
        </a>

        {/* Desktop Menu */}
        <ul className="navbar__menu">
          {/* Platform */}
          <li
            className="navbar__item navbar__item--has-dropdown"
            onMouseEnter={() => setActiveMenu('Platform')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="navbar__link">
              Platform
              <svg className={`navbar__chevron ${activeMenu === 'Platform' ? 'navbar__chevron--up' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {activeMenu === 'Platform' && <DropdownMenu items={platformItems} />}
          </li>

          {navLinks.map((link) => (
            <li key={link.label} className="navbar__item">
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="navbar__auth">
          <a href="#" className="btn btn-primary btn-sm">Register to Newsletter</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="navbar__mobile">
          {[
            { label: 'Platform', items: platformItems },
          ].map(({ label, items }) => (
            <div key={label} className="navbar__mobile-group">
              <button
                className="navbar__mobile-link navbar__mobile-link--toggle"
                onClick={() => toggleMobileSection(label)}
              >
                {label}
                <svg className={`navbar__chevron ${mobileExpanded === label ? 'navbar__chevron--up' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {mobileExpanded === label && (
                <div className="navbar__mobile-sub">
                  {items.map((item) => (
                    <a key={item.label} href={item.href} className="navbar__mobile-sub-link">
                      <span>{item.icon}</span> {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {navLinks.map((link) => (
            <a key={link.label} href={link.href || '#'} className="navbar__mobile-link">{link.label}</a>
          ))}
          <div className="navbar__mobile-auth">
            <a href="#" className="btn btn-primary" style={{ justifyContent: 'center' }}>Register to Newsletter</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
