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

const DataProcessingAgreement = () => (
  <LegalLayout tag="Legal" title="Data Processing Agreement" updated="April 9, 2026">
    <div className="legal-highlight">
      <p>This DPA governs how RedTeamCenter processes personal data on behalf of operators. As a self-hosted platform, you act as both the Data Controller and Data Processor for your own deployment.</p>
    </div>

    <div className="legal-divider" />

    <S title="1. Definitions">
      <p>For the purposes of this Agreement:</p>
      <ul>
        <li><strong>Data Controller</strong> — the organization or individual that deploys RedTeamCenter and determines the purposes of data processing</li>
        <li><strong>Data Processor</strong> — RedTeamCenter software acting on instructions of the Controller</li>
        <li><strong>Personal Data</strong> — any information relating to an identified or identifiable natural person</li>
        <li><strong>Engagement Data</strong> — operational findings, credentials, tokens, and artifacts collected during authorized security assessments</li>
        <li><strong>Processing</strong> — any operation performed on personal data including collection, storage, retrieval, and deletion</li>
      </ul>
    </S>

    <S title="2. Nature and Purpose of Processing">
      <p>RedTeamCenter processes the following categories of data on your behalf:</p>
      <ul>
        <li>Operator account data (name, email, callsign) for authentication and access control</li>
        <li>Engagement metadata (targets, scope, dates, findings) for operational tracking</li>
        <li>Collected artifacts (credentials, tokens, email addresses) captured during authorized tests</li>
        <li>Infrastructure records (C2 nodes, phishing domains) created during engagement execution</li>
      </ul>
      <p>All processing is performed locally on your infrastructure. No data is transmitted to RedTeamCenter servers.</p>
    </S>

    <S title="3. Data Subject Categories">
      <p>The platform may process data relating to the following categories of individuals:</p>
      <ul>
        <li>Red team operators and team members using the platform</li>
        <li>Target organization employees whose data is collected within an authorized engagement scope</li>
        <li>Client contacts and white team representatives</li>
      </ul>
      <p>You are responsible for ensuring that any collection of data about third parties is conducted within the lawful scope of an authorized security engagement.</p>
    </S>

    <S title="4. Data Security Measures">
      <p>RedTeamCenter implements the following technical controls to protect processed data:</p>
      <ul>
        <li>Password hashing using bcrypt with a minimum cost factor of 10</li>
        <li>JWT-based session management with configurable expiry</li>
        <li>MongoDB access controls with engagement-scoped data isolation</li>
        <li>Server-side-only storage of API keys and client secrets</li>
        <li>Optional HTTPS enforcement (strongly recommended for production)</li>
      </ul>
    </S>

    <S title="5. Sub-Processors">
      <p>When you configure third-party API integrations, those providers act as sub-processors for specific data categories:</p>
      <ul>
        <li><strong>Shodan</strong> — CVE identifiers and vulnerability metadata</li>
        <li><strong>HaveIBeenPwned</strong> — Email addresses submitted for breach lookup</li>
        <li><strong>VirusTotal</strong> — File hashes and binary content submitted for analysis</li>
        <li><strong>Microsoft Azure AD</strong> — OAuth tokens obtained during device code phishing simulations</li>
      </ul>
      <p>You are responsible for reviewing and accepting the terms of each sub-processor before enabling those integrations.</p>
    </S>

    <S title="6. Data Transfers">
      <p>Because RedTeamCenter is self-hosted, you control the geographic location of all data storage. No data is automatically transferred outside your infrastructure. Cross-border transfers that occur as a result of third-party API calls are governed by those providers' data transfer mechanisms.</p>
    </S>

    <S title="7. Data Retention and Deletion">
      <p>Data is retained for as long as your deployment is active. You may delete data at any time:</p>
      <ul>
        <li>Individual records via the platform UI (engagements, findings, tokens, operators)</li>
        <li>Full data wipe by dropping MongoDB collections or terminating the deployment</li>
      </ul>
      <p>There is no external backup of your operational data held by RedTeamCenter.</p>
    </S>

    <S title="8. Contact">
      <p>For DPA-related inquiries:</p>
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

export default DataProcessingAgreement;
