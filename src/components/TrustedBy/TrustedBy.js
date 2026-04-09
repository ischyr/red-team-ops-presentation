import './TrustedBy.css';

const companies = [
  'ISC Guard', 'Disruption Academy', 'ISC Security',
];

const TrustedBy = () => (
  <section className="trusted section-sm">
    <div className="container">
      <p className="trusted__label">Trusted by operators at</p>
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
