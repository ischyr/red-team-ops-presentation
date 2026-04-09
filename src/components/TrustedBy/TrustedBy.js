import './TrustedBy.css';

const companies = [
  'Easygo', 'Everett Community College', 'XLENT', 'Cybrary',
  'DataCom', 'SecureVault', 'CyberEdge', 'NetGuard',
  'SafeHarbour', 'TrustArc', 'ShieldForce', 'RiskIQ',
];

const TrustedBy = () => (
  <section className="trusted section-sm">
    <div className="container">
      <p className="trusted__label">Trusted by 1,000+ companies worldwide</p>
      <div className="trusted__track-wrap">
        <div className="trusted__track">
          {[...companies, ...companies].map((name, i) => (
            <div key={i} className="trusted__logo">
              <span className="trusted__name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustedBy;
