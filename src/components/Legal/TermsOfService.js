import LegalLayout from './LegalLayout';

const S = ({ title, children }) => (
  <div className="legal-section">
    <h2 className="legal-section__title">
      <span className="legal-section__title-dot" />
      {title}
    </h2>
    {children}
  </div>
);

const TermsOfService = () => (
  <LegalLayout tag="Legal" title="Terms of Service" updated="April 9, 2026">
    <div className="legal-highlight">
      <p>RedTeamCenter is a professional red team operations platform. By using this software you agree that all activities conducted through it are authorized, legal, and within the scope of a legitimate security engagement.</p>
    </div>

    <div className="legal-divider" />

    <S title="1. Acceptance of Terms">
      <p>By accessing or using RedTeamCenter (the "Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Platform.</p>
      <p>These terms apply to all users, operators, and organizations that deploy or interact with a RedTeamCenter instance.</p>
    </S>

    <S title="2. Authorized Use Only">
      <p>RedTeamCenter is designed exclusively for authorized security testing, red team operations, and penetration testing engagements. You agree that you will only use the Platform to:</p>
      <ul>
        <li>Conduct security assessments against systems you own or have explicit written authorization to test</li>
        <li>Perform red team engagements within the defined scope agreed with the client</li>
        <li>Train and educate security professionals in a controlled lab environment</li>
        <li>Conduct CTF (Capture the Flag) competitions and security research</li>
      </ul>
      <p>Use of this Platform against unauthorized targets is strictly prohibited and may violate applicable computer fraud and abuse laws.</p>
    </S>

    <S title="3. Prohibited Activities">
      <p>You must not use RedTeamCenter to:</p>
      <ul>
        <li>Conduct attacks against systems without written authorization from the system owner</li>
        <li>Perform denial-of-service (DoS/DDoS) attacks of any kind</li>
        <li>Harvest credentials, tokens, or data from individuals outside an authorized engagement</li>
        <li>Deploy infrastructure used to attack critical services, government systems, or civilian infrastructure</li>
        <li>Violate any applicable local, national, or international law or regulation</li>
        <li>Distribute or resell the platform or its components without authorization</li>
      </ul>
    </S>

    <S title="4. Operator Responsibility">
      <p>As a self-hosted platform, you (the operator) are solely responsible for:</p>
      <ul>
        <li>Securing your deployment against unauthorized access</li>
        <li>Ensuring all team members using the platform are authorized and trained</li>
        <li>Maintaining proper engagement scoping, rules of engagement, and written authorizations</li>
        <li>Compliance with all applicable laws in your jurisdiction</li>
        <li>Proper handling and destruction of sensitive data collected during engagements</li>
      </ul>
    </S>

    <S title="5. Disclaimer of Warranties">
      <p>RedTeamCenter is provided "as is" without warranty of any kind, express or implied. We do not warrant that the Platform will be error-free, uninterrupted, or suitable for any particular purpose. You use the Platform at your own risk.</p>
    </S>

    <S title="6. Limitation of Liability">
      <p>To the maximum extent permitted by law, RedTeamCenter and its creators shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the Platform — including but not limited to damages resulting from unauthorized access, data loss, or legal claims arising from misuse.</p>
    </S>

    <S title="7. Changes to Terms">
      <p>We reserve the right to modify these Terms of Service at any time. Material changes will be communicated via the platform or by email. Continued use of the Platform after changes constitutes acceptance of the updated terms.</p>
    </S>

    <S title="8. Contact">
      <p>Questions about these terms should be directed to:</p>
      <div className="legal-contact">
        <div className="legal-contact__row">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:support@redteamcenter.io">support@redteamcenter.io</a>
        </div>
        <div className="legal-contact__row">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Bucharest, Romania
        </div>
      </div>
    </S>
  </LegalLayout>
);

export default TermsOfService;
