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

const PrivacyPolicy = () => (
  <LegalLayout tag="Legal" title="Privacy Policy" updated="April 9, 2026">
    <div className="legal-highlight">
      <p>RedTeamCenter is a self-hosted platform. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
    </div>

    <div className="legal-divider" />

    <S title="1. Information We Collect">
      <p>When you register for a RedTeamCenter account or use the platform, we may collect the following types of information:</p>
      <ul>
        <li>Account information: name, email address, callsign, and password (hashed)</li>
        <li>Usage data: engagement activity, feature interactions, and access logs</li>
        <li>Technical data: IP address, browser type, and device identifiers</li>
        <li>OAuth tokens and credentials stored within engagement vaults (encrypted at rest)</li>
      </ul>
    </S>

    <S title="2. How We Use Your Information">
      <p>We use collected information solely to operate and improve the RedTeamCenter platform:</p>
      <ul>
        <li>Authenticating your identity and maintaining your session</li>
        <li>Persisting engagement data, findings, and operator notes</li>
        <li>Sending transactional emails (password resets, account alerts)</li>
        <li>Diagnosing bugs and improving platform stability</li>
      </ul>
      <p>We do not use your data for advertising, profiling, or any purpose unrelated to platform operation.</p>
    </S>

    <S title="3. Data Storage and Security">
      <p>RedTeamCenter is designed to be deployed on your own infrastructure. All engagement data, credentials, tokens, and operator records are stored in your self-hosted MongoDB instance. We do not have access to your deployment unless explicitly granted for support purposes.</p>
      <ul>
        <li>Passwords are hashed using bcrypt before storage</li>
        <li>JWT tokens are signed with your own secret and are short-lived</li>
        <li>Sensitive fields (team vault, token vault) are stored in MongoDB with operator-scoped access controls</li>
        <li>HTTPS is strongly recommended for all production deployments</li>
      </ul>
    </S>

    <S title="4. Third-Party Services">
      <p>Certain platform features connect to external APIs using keys you provide. Data transmitted to these services is governed by their respective privacy policies:</p>
      <ul>
        <li><strong>Shodan CVE DB</strong> — CVE Feed queries</li>
        <li><strong>HaveIBeenPwned</strong> — Email breach lookups</li>
        <li><strong>VirusTotal</strong> — Malware file scanning</li>
        <li><strong>Google / GitHub OAuth</strong> — Optional sign-in providers</li>
        <li><strong>Microsoft Graph API</strong> — Device Code Phishing token enumeration</li>
      </ul>
      <p>RedTeamCenter never stores your API keys in plaintext — they are read from your server-side <code>.env</code> file only.</p>
    </S>

    <S title="5. Data Retention">
      <p>All data is retained for as long as your self-hosted instance is running. You have full control to delete engagements, accounts, and associated records directly from the platform or via your MongoDB instance. There is no external retention of your operational data.</p>
    </S>

    <S title="6. Your Rights">
      <p>As the operator of your own RedTeamCenter instance, you have complete control over all data. You may at any time:</p>
      <ul>
        <li>Export or delete engagement data from the platform</li>
        <li>Terminate operator accounts via the settings panel</li>
        <li>Wipe the entire database by dropping the MongoDB collections</li>
      </ul>
    </S>

    <S title="7. Contact">
      <p>For privacy-related questions, reach out to us directly:</p>
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

export default PrivacyPolicy;
