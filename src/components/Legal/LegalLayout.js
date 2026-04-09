import './LegalLayout.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const LegalLayout = ({ tag, title, updated, children }) => (
  <div className="app">
    <Navbar />
    <main>
      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero__bg" />
        <div className="container">
          <div className="legal-hero__inner">
            <div className="section-tag" style={{ background: 'rgba(220,38,38,0.12)', color: '#f87171', border: '1px solid rgba(220,38,38,0.25)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              {tag}
            </div>
            <h1 className="legal-hero__title">{title}</h1>
            <p className="legal-hero__meta">Last updated: {updated}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="legal-body">
        <div className="container">
          <div className="legal-content">
            {children}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default LegalLayout;
