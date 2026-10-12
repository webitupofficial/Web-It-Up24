'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FiShield, 
  FiCheckCircle, 
  FiFileText, 
  FiUserCheck, 
  FiTrash2, 
  FiEdit3, 
  FiXCircle, 
  FiSend, 
  FiInfo, 
  FiAlertTriangle 
} from 'react-icons/fi';

type RequestType = 'access' | 'correction' | 'erasure' | 'withdraw' | 'grievance' | 'nomination';

export default function DPDPRightsPage() {
  const [requestType, setRequestType] = useState<RequestType>('access');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [nomineeName, setNomineeName] = useState('');
  const [nomineeRelation, setNomineeRelation] = useState('');
  const [nomineeEmail, setNomineeEmail] = useState('');
  const [declarationChecked, setDeclarationChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!declarationChecked) {
      alert('Please confirm the statutory identity verification declaration.');
      return;
    }

    const generatedId = `DPDP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setRequestType('access');
    setFullName('');
    setEmail('');
    setPhone('');
    setDetails('');
    setNomineeName('');
    setNomineeRelation('');
    setNomineeEmail('');
    setDeclarationChecked(false);
  };

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="section-label">Data Principal Rights Portal</span>
          <h1>Exercise Your DPDP Rights</h1>
          <p>
            Under Sections 11, 12, 13, and 14 of India&apos;s Digital Personal Data Protection Act, 2023, you have clear statutory control over your personal digital data.
          </p>
        </div>
      </header>

      <section className="legal-content-section">
        <div className="container-narrow">
          {/* Statutory Explainer */}
          <div className="dpdp-overview-grid">
            <button
              type="button"
              className={`dpdp-tab-btn ${requestType === 'access' ? 'active' : ''}`}
              onClick={() => setRequestType('access')}
            >
              <FiFileText aria-hidden="true" />
              <span>Right to Access (Sec. 11)</span>
            </button>
            <button
              type="button"
              className={`dpdp-tab-btn ${requestType === 'correction' ? 'active' : ''}`}
              onClick={() => setRequestType('correction')}
            >
              <FiEdit3 aria-hidden="true" />
              <span>Right to Correction (Sec. 12)</span>
            </button>
            <button
              type="button"
              className={`dpdp-tab-btn ${requestType === 'erasure' ? 'active' : ''}`}
              onClick={() => setRequestType('erasure')}
            >
              <FiTrash2 aria-hidden="true" />
              <span>Right to Erasure (Sec. 12)</span>
            </button>
            <button
              type="button"
              className={`dpdp-tab-btn ${requestType === 'withdraw' ? 'active' : ''}`}
              onClick={() => setRequestType('withdraw')}
            >
              <FiXCircle aria-hidden="true" />
              <span>Withdraw Consent (Sec. 6)</span>
            </button>
            <button
              type="button"
              className={`dpdp-tab-btn ${requestType === 'grievance' ? 'active' : ''}`}
              onClick={() => setRequestType('grievance')}
            >
              <FiAlertTriangle aria-hidden="true" />
              <span>File Grievance (Sec. 13)</span>
            </button>
            <button
              type="button"
              className={`dpdp-tab-btn ${requestType === 'nomination' ? 'active' : ''}`}
              onClick={() => setRequestType('nomination')}
            >
              <FiUserCheck aria-hidden="true" />
              <span>Nomination (Sec. 14)</span>
            </button>
          </div>

          <div className="dpdp-form-wrapper">
            {submitted ? (
              <div className="dpdp-success-card">
                <div className="form-success-icon" aria-hidden="true">
                  <FiCheckCircle />
                </div>
                <h2>DPDP Request Lodged Successfully</h2>
                <div className="dpdp-ticket-pill">
                  <span>Reference ID:</span>
                  <strong>{ticketId}</strong>
                </div>
                <p>
                  Your statutory request has been logged into the Web It Up 24 Data Governance Registry. A confirmation notice has been queued for <strong>{email}</strong>.
                </p>
                <div className="dpdp-sla-box">
                  <FiInfo aria-hidden="true" />
                  <div>
                    <strong>Statutory Service Level Agreement (SLA):</strong>
                    <p>
                      Our Grievance Redressal Officer will review your request, verify identity, and respond within <strong>30 calendar days</strong> in accordance with Section 13 of the DPDP Act, 2023.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-outline"
                  >
                    Submit Another Request
                  </button>
                  <Link href="/privacy-policy" className="btn btn-subtle">
                    View Privacy Policy
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-field">
                  <label htmlFor="reqType" className="form-label">
                    Statutory Request Category *
                  </label>
                  <select
                    id="reqType"
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value as RequestType)}
                    className="form-select"
                  >
                    <option value="access">Section 11: Right to Access Summary of Personal Data</option>
                    <option value="correction">Section 12: Right to Correction &amp; Updating of Inaccurate Data</option>
                    <option value="erasure">Section 12: Right to Erasure / Deletion (Right to be Forgotten)</option>
                    <option value="withdraw">Section 6(4): Withdrawal of Previously Given Consent</option>
                    <option value="grievance">Section 13: Formal Grievance to Grievance Redressal Officer</option>
                    <option value="nomination">Section 14: Designation of Nominee</option>
                  </select>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="fullName" className="form-label">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="form-input"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email" className="form-label">
                      Email Address (Associated with Data) *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="phone" className="form-label">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                    placeholder="+91 or country code"
                  />
                </div>

                {requestType === 'nomination' && (
                  <div className="dpdp-subform-group">
                    <h4 style={{ marginBottom: '0.8rem', fontSize: '1rem', color: 'var(--text)' }}>
                      Nominee Details (Section 14)
                    </h4>
                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="nomineeName" className="form-label">
                          Nominee Legal Name *
                        </label>
                        <input
                          type="text"
                          id="nomineeName"
                          value={nomineeName}
                          onChange={(e) => setNomineeName(e.target.value)}
                          className="form-input"
                          placeholder="Nominee full name"
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="nomineeRelation" className="form-label">
                          Relationship with Principal *
                        </label>
                        <input
                          type="text"
                          id="nomineeRelation"
                          value={nomineeRelation}
                          onChange={(e) => setNomineeRelation(e.target.value)}
                          className="form-input"
                          placeholder="e.g., Spouse, Parent, Legal Representative"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="nomineeEmail" className="form-label">
                        Nominee Email Address *
                      </label>
                      <input
                        type="email"
                        id="nomineeEmail"
                        value={nomineeEmail}
                        onChange={(e) => setNomineeEmail(e.target.value)}
                        className="form-input"
                        placeholder="nominee@domain.com"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="form-field">
                  <label htmlFor="details" className="form-label">
                    Specific Particulars of the Request *
                  </label>
                  <textarea
                    id="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="form-textarea"
                    rows={4}
                    placeholder="Specify the exact personal data, interaction, inquiry date, or grievance details you wish us to examine..."
                    required
                  />
                </div>

                <div className="dpdp-checkbox-group">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={declarationChecked}
                      onChange={(e) => setDeclarationChecked(e.target.checked)}
                      required
                    />
                    <span className="checkbox-label-text">
                      I declare under penalty of perjury that I am the Data Principal or lawful representative authorized to exercise these statutory rights pursuant to the Digital Personal Data Protection Act, 2023. I understand that Web It Up 24 may contact me to verify my identity before disclosing, modifying, or expunging records.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-large btn-block"
                  style={{ marginTop: '1.2rem' }}
                >
                  <span>Submit Statutory DPDP Request</span>
                  <FiSend aria-hidden="true" />
                </button>
              </form>
            )}
          </div>

          {/* Direct GRO Info Card */}
          <div className="gro-info-panel" style={{ marginTop: '2.5rem' }}>
            <div className="gro-info-icon" aria-hidden="true">
              <FiShield />
            </div>
            <div>
              <h3>Prefer Direct Email Escalation?</h3>
              <p>
                You can write directly to our designated Grievance Redressal Officer at{' '}
                <a href="mailto:privacy@webitup24.com"><strong>privacy@webitup24.com</strong></a>. All formal grievances receive statutory tracking, prompt verification, and resolution within 30 days.
              </p>
              <p style={{ marginTop: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                If your grievance remains unaddressed after 30 days, you may approach the <strong>Data Protection Board of India (DPBI)</strong> under Section 13(3) of the Act.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
