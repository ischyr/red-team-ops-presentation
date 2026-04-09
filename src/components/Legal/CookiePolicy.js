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

const CookiePolicy = () => (
  <LegalLayout tag="Legal" title="Cookie Policy" updated="April 9, 2026">
    <div className="legal-highlight">
      <p>RedTeamCenter uses minimal browser storage. We do not use third-party tracking cookies or advertising cookies of any kind.</p>
    </div>

    <div className="legal-divider" />

    <S title="1. What Are Cookies">
      <p>Cookies are small text files stored in your browser when you visit a website. RedTeamCenter uses a combination of cookies and browser localStorage to maintain your authenticated session and store operator preferences.</p>
    </S>

    <S title="2. Cookies We Use">
      <p>The following cookies and storage mechanisms are used by the platform:</p>
      <ul>
        <li><strong>Session Cookie (auth_token)</strong> — an HTTP-only JWT cookie used to authenticate your session. This is essential for platform access and cannot be disabled. Expires when the session ends or after the configured JWT expiry.</li>
        <li><strong>Preferences (localStorage)</strong> — stores UI settings such as compact mode, sidebar state, and active engagement context. Stored locally in your browser and never transmitted to any server.</li>
        <li><strong>Token Vault (localStorage: dc_tokens)</strong> — stores OAuth tokens captured during authorized device code phishing or Evil OAuth sessions. Local to your browser and cleared on logout.</li>
      </ul>
    </S>

    <S title="3. Cookies We Do Not Use">
      <p>RedTeamCenter does not use or set:</p>
      <ul>
        <li>Analytics or tracking cookies (Google Analytics, Mixpanel, Hotjar, etc.)</li>
        <li>Advertising or retargeting cookies</li>
        <li>Third-party social media cookies</li>
        <li>Cross-site tracking identifiers of any kind</li>
      </ul>
      <p>Because the platform is self-hosted, there is no telemetry or usage data sent back to RedTeamCenter.</p>
    </S>

    <S title="4. Third-Party Cookies">
      <p>Some optional platform features embed third-party content that may set their own cookies:</p>
      <ul>
        <li><strong>draw.io (diagrams.net)</strong> — the Diagram Editor embeds the draw.io editor in an iframe. Their cookie policy applies to that embedded context.</li>
        <li><strong>Google / GitHub OAuth</strong> — if you use social sign-in, those providers set their own authentication cookies governed by their respective policies.</li>
      </ul>
    </S>

    <S title="5. Managing Cookies">
      <p>You can manage or clear cookies at any time through your browser settings. Note that disabling the session cookie will prevent you from logging into the platform.</p>
      <p>To clear localStorage data stored by RedTeamCenter, open your browser's developer tools, navigate to the Application tab, and clear the localStorage entries for the platform's domain.</p>
    </S>

    <S title="6. Changes to This Policy">
      <p>We may update this Cookie Policy from time to time to reflect changes to the platform. The "Last updated" date at the top of this page will reflect any revisions. Continued use of the platform constitutes acceptance of the updated policy.</p>
    </S>

    <S title="7. Contact">
      <p>For cookie-related questions:</p>
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

export default CookiePolicy;
