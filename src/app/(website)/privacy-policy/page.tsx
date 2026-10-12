import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FiShield, FiCheckCircle, FiUserCheck, FiAlertCircle, FiMail, FiFileText } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Privacy Policy (DPDP Act, 2023 Compliant) — Web It Up 24',
  description: 'Detailed Privacy Notice & Data Governance framework for Web It Up 24 in compliance with the Digital Personal Data Protection Act (DPDP Act, 2023) of India.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 12, 2026';

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="section-label">Legal &amp; Data Governance</span>
          <h1>Privacy Policy &amp; DPDP Notice</h1>
          <p>
            Governed under India&apos;s Digital Personal Data Protection Act (DPDP Act, 2023). This notice outlines how Web It Up 24 processes, protects, and respects your personal digital data.
          </p>
          <div className="policy-meta-bar">
            <span><strong>Effective Date:</strong> {lastUpdated}</span>
            <span>&bull;</span>
            <span><strong>Data Fiduciary:</strong> Web It Up 24</span>
            <span>&bull;</span>
            <span><strong>Framework:</strong> DPDP Act 2023 (Act No. 22 of 2023)</span>
          </div>
        </div>
      </header>

      <section className="legal-content-section">
        <div className="container-narrow">
          {/* Quick Summary Card */}
          <div className="dpdp-highlight-card">
            <div className="dpdp-highlight-header">
              <span className="cookie-icon-badge" aria-hidden="true">
                <FiShield />
              </span>
              <h3>Core Principles under India&apos;s DPDP Act, 2023</h3>
            </div>
            <p>
              Web It Up 24 serves as a <strong>Data Fiduciary</strong>. We believe in strict purpose limitation, data minimization, unambiguous affirmative consent, and absolute transparency. We do not sell your personal data, conduct unauthorized profiling, or track minors.
            </p>
            <div className="dpdp-rights-pill-group">
              <Link href="/dpdp-rights" className="pill-link">
                <FiUserCheck aria-hidden="true" />
                <span>Exercise DPDP Rights</span>
              </Link>
              <a href="mailto:privacy@webitup24.com" className="pill-link">
                <FiMail aria-hidden="true" />
                <span>Contact Grievance Officer</span>
              </a>
            </div>
          </div>

          <article className="legal-article">
            {/* 1. Introduction & Statutory Notice */}
            <section className="legal-section" id="notice">
              <h2>1. Statutory Notice at Collection (Section 5)</h2>
              <p>
                In compliance with Section 5 of the Digital Personal Data Protection Act, 2023, this notice is presented to you (the &quot;Data Principal&quot;) prior to or at the time of collecting your personal digital data.
              </p>
              <p>
                This document informs you of:
              </p>
              <ul className="legal-bullets">
                <li>The specific categories of personal data collected;</li>
                <li>The specified purpose for which personal data is processed;</li>
                <li>The manner in which you may exercise statutory rights of access, correction, erasure, and grievance redressal;</li>
                <li>The procedure to withdraw consent at any time;</li>
                <li>The contact details of our designated Grievance Redressal Officer; and</li>
                <li>The manner of lodging a complaint with the Data Protection Board of India (DPBI).</li>
              </ul>
              <div className="legal-callout">
                <FiFileText aria-hidden="true" className="legal-callout-icon" />
                <p>
                  <strong>Multilingual Accessibility (Section 5(3)):</strong> This notice is published in English. In accordance with the 8th Schedule of the Constitution of India, you may request this notice in any of the 22 scheduled Indian languages by writing to our Grievance Officer at <a href="mailto:privacy@webitup24.com">privacy@webitup24.com</a>.
                </p>
              </div>
            </section>

            {/* 2. Personal Data We Collect */}
            <section className="legal-section" id="data-collected">
              <h2>2. Categories of Personal Data Collected</h2>
              <p>
                Under the principle of <em>Data Minimization</em>, we collect solely the personal data necessary to evaluate, communicate, and deliver our web design, engineering, and digital consulting services:
              </p>
              <div className="table-responsive">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Data Category</th>
                      <th>Specific Data Points</th>
                      <th>Primary Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Identity &amp; Contact</strong></td>
                      <td>First Name, Last Name, Business Email Address, Company Name</td>
                      <td>Responding to project inquiries, scope reviews, and contractual communications.</td>
                    </tr>
                    <tr>
                      <td><strong>Project Requirements</strong></td>
                      <td>Budget tier, timeline estimates, architectural briefs, feature specs</td>
                      <td>Preparing commercial proposals, quotes, and delivery timelines.</td>
                    </tr>
                    <tr>
                      <td><strong>Technical &amp; Telemetry</strong></td>
                      <td>IP address (anonymized), browser user agent, device operating system, referring URL</td>
                      <td>Preventing cyber threats, DDoS mitigation, and aggregated analytics (only with explicit consent).</td>
                    </tr>
                    <tr>
                      <td><strong>Consent Records</strong></td>
                      <td>Timestamp, consent preferences (essential, analytics, marketing)</td>
                      <td>Maintaining statutory audit trails mandated under DPDP Section 6.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Grounds for Processing & Affirmative Consent */}
            <section className="legal-section" id="consent">
              <h2>3. Grounds for Processing: Affirmative Consent (Section 6)</h2>
              <p>
                Personal data is processed only on lawful grounds:
              </p>
              <ul className="legal-bullets">
                <li>
                  <strong>Unconditional, Affirmative Consent:</strong> Whenever you submit an inquiry through our contact form or accept optional cookies, your consent is collected via an explicit, unbundled affirmative action. We never utilize pre-ticked checkboxes or deceptive dark patterns.
                </li>
                <li>
                  <strong>Legitimate Uses (Section 7):</strong> Limited processing necessary for fulfilling existing contractual obligations, responding to direct inquiries initiated voluntarily by you, or complying with Indian legal statutes.
                </li>
              </ul>
              <div className="legal-callout">
                <FiCheckCircle aria-hidden="true" className="legal-callout-icon" />
                <p>
                  <strong>Right to Withdraw Consent (Section 6(4)):</strong> You may withdraw your consent at any time as easily as it was given. Upon receipt of withdrawal, we will cease processing your personal data within statutory timelines, unless retention is required by applicable law.
                </p>
              </div>
            </section>

            {/* 4. Protection of Minors */}
            <section className="legal-section" id="minors">
              <h2>4. Protection of Children &amp; Persons with Disabilities (Section 9)</h2>
              <p>
                Web It Up 24 provides B2B and enterprise-grade web development services. Our website and services are not directed to individuals under eighteen (18) years of age (&quot;children&quot; under Section 2(f) of the DPDP Act).
              </p>
              <p>
                In strict adherence to Section 9:
              </p>
              <ul className="legal-bullets">
                <li>We do not knowingly collect, process, or store personal data of children.</li>
                <li>We strictly prohibit and do not engage in tracking, behavioral monitoring, or targeted advertising directed at children.</li>
                <li>We do not undertake any processing likely to cause a detrimental effect on the well-being of a child.</li>
              </ul>
              <p>
                If a parent or lawful guardian becomes aware that a minor has submitted personal data without verifiable consent, please contact our Grievance Officer immediately for expedited erasure.
              </p>
            </section>

            {/* 5. Reasonable Security Safeguards */}
            <section className="legal-section" id="security">
              <h2>5. Security Safeguards &amp; Data Protection (Section 8(5))</h2>
              <p>
                As mandated by Section 8(5) of the DPDP Act, Web It Up 24 implements comprehensive technical and organizational safeguards:
              </p>
              <ul className="legal-bullets">
                <li><strong>Transport Layer Security (TLS):</strong> All web traffic and API endpoints are encrypted in transit using industry-standard TLS 1.3 cryptographic protocols.</li>
                <li><strong>Role-Based Access Control:</strong> Access to project inquiries and client databases is strictly restricted to authorized team members on a least-privilege basis.</li>
                <li><strong>Third-Party Processors:</strong> We partner solely with certified Data Processors (e.g., Formspree, Sanity, enterprise cloud hosting) bound by strict data processing agreements and confidentiality covenants.</li>
                <li><strong>Breach Notification Protocol (Section 8(6)):</strong> In the unlikely event of a personal data breach, Web It Up 24 maintains an incident response protocol to notify both affected Data Principals and the Data Protection Board of India (DPBI) expeditiously without undue delay.</li>
              </ul>
            </section>

            {/* 6. Data Retention & Erasure */}
            <section className="legal-section" id="retention">
              <h2>6. Data Retention &amp; Erasure Protocol (Section 8(7))</h2>
              <p>
                We retain your personal digital data only for the duration necessary to satisfy the purpose for which it was collected:
              </p>
              <ul className="legal-bullets">
                <li><strong>Inquiry Data:</strong> Inactive project briefs not resulting in a client engagement are securely purged after twelve (12) months.</li>
                <li><strong>Active Client Records:</strong> Retained for the active duration of the project engagement plus statutory tax/accounting retention periods required by Indian law.</li>
                <li><strong>Cookie Logs:</strong> Consent identifiers expire automatically after six (6) months, requiring fresh affirmative renewal.</li>
              </ul>
            </section>

            {/* 7. Data Principal Rights */}
            <section className="legal-section" id="rights">
              <h2>7. Your Statutory Rights as a Data Principal (Sections 11–14)</h2>
              <p>
                The DPDP Act, 2023 affords you powerful statutory rights over your personal digital data. You may exercise any of these rights at any time without fees via our dedicated <Link href="/dpdp-rights"><strong>DPDP Rights Portal</strong></Link>:
              </p>
              <div className="rights-grid">
                <div className="rights-card">
                  <span className="rights-num">Section 11</span>
                  <h4>Right to Access</h4>
                  <p>Request a summary of your personal data being processed, details of third parties with whom data has been shared, and processing identities.</p>
                </div>
                <div className="rights-card">
                  <span className="rights-num">Section 12</span>
                  <h4>Right to Correction &amp; Erasure</h4>
                  <p>Request correction of inaccurate or misleading data, completion of incomplete data, or permanent deletion (&quot;Right to be Forgotten&quot;).</p>
                </div>
                <div className="rights-card">
                  <span className="rights-num">Section 13</span>
                  <h4>Right of Grievance Redressal</h4>
                  <p>Seek redressal of any grievance from our designated Grievance Redressal Officer before approaching supervisory authorities.</p>
                </div>
                <div className="rights-card">
                  <span className="rights-num">Section 14</span>
                  <h4>Right to Nominate</h4>
                  <p>Nominate another individual to exercise your rights under the Act in the unfortunate event of death or legal incapacity.</p>
                </div>
              </div>
            </section>

            {/* 8. Grievance Redressal & DPBI */}
            <section className="legal-section" id="grievance">
              <h2>8. Grievance Redressal Officer &amp; Regulatory Escalation</h2>
              <p>
                Pursuant to Section 8(9) and Section 13 of the DPDP Act, 2023, Web It Up 24 has designated a Grievance Redressal Officer to receive and resolve any concerns regarding personal data processing:
              </p>
              <div className="gro-card">
                <div className="gro-badge">Designated Grievance Redressal Officer</div>
                <h3>Grievance Officer &mdash; Web It Up 24</h3>
                <div className="gro-details">
                  <p><strong>Designation:</strong> Data Protection &amp; Compliance Officer</p>
                  <p><strong>Official Email:</strong> <a href="mailto:privacy@webitup24.com">privacy@webitup24.com</a></p>
                  <p><strong>Alternative Contact:</strong> <a href="mailto:info@webitup24.com">info@webitup24.com</a></p>
                  <p><strong>Response Timeline:</strong> Acknowledged within 48 hours; substantive resolution within 30 days.</p>
                  <p><strong>Online Submission:</strong> <Link href="/dpdp-rights">Submit a Grievance / Rights Request Online</Link></p>
                </div>
              </div>

              <div className="legal-callout" style={{ marginTop: '1.5rem' }}>
                <FiAlertCircle aria-hidden="true" className="legal-callout-icon" />
                <p>
                  <strong>Escalation to Data Protection Board of India (DPBI):</strong> If you do not receive a response from our Grievance Redressal Officer within the statutory period, or if you are dissatisfied with our resolution, you have the right under Section 13(3) and Section 18 of the DPDP Act, 2023 to file a formal complaint before the <strong>Data Protection Board of India (DPBI)</strong>.
                </p>
              </div>
            </section>

            {/* 9. Updates to Policy */}
            <section className="legal-section" id="updates">
              <h2>9. Amendments &amp; Notifications</h2>
              <p>
                We may periodically update this DPDP Compliance Policy to reflect emerging regulatory circulars or technological changes. Any material amendments will be posted on this page with an updated &quot;Effective Date&quot; banner.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
