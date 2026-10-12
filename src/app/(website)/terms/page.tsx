import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Web It Up 24',
  description: 'Terms of service and legal agreement governing web design, engineering, and digital consulting services provided by Web It Up 24.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  const lastUpdated = 'October 12, 2026';

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="section-label">Legal Agreement</span>
          <h1>Terms of Service</h1>
          <p>
            Please read these terms carefully before accessing or using the services, website, or engagement frameworks offered by Web It Up 24.
          </p>
          <div className="policy-meta-bar">
            <span><strong>Last Updated:</strong> {lastUpdated}</span>
            <span>&bull;</span>
            <span><strong>Entity:</strong> Web It Up 24</span>
          </div>
        </div>
      </header>

      <section className="legal-content-section">
        <div className="container-narrow">
          <article className="legal-article">
            <section className="legal-section">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing our website (<a href="https://webitup24.com">webitup24.com</a>) or engaging Web It Up 24 (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) for design, software engineering, SEO foundations, or automation systems, you agree to be bound by these Terms of Service and our{' '}
                <Link href="/privacy-policy"><strong>Privacy Policy (DPDP Act, 2023 Compliant)</strong></Link>.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Scope of Agency Services</h2>
              <p>
                Web It Up 24 operates as an international web design, full-stack engineering, and brand identity studio. Our standard deliverables, milestones, commercial terms, and change request procedures are memorialized in client Statements of Work (SOW) or written service agreements.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Data Protection &amp; DPDP Act Compliance</h2>
              <p>
                Both Web It Up 24 and the Client commit to upholding the statutory provisions of India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000:
              </p>
              <ul className="legal-bullets">
                <li>
                  <strong>Client Data Representations:</strong> Where the Client provides data, credentials, customer databases, or user telemetry for integration or testing, the Client warrants that it has secured valid, affirmative statutory consent from respective Data Principals.
                </li>
                <li>
                  <strong>Security Safeguards:</strong> In performing technical services, Web It Up 24 implements reasonable technical safeguards (TLS encryption, principle of least privilege, secure code standards) to prevent unauthorized access or breach of personal digital data.
                </li>
                <li>
                  <strong>Rights &amp; Grievances:</strong> Inquiries relating to digital personal data collected on this site may be directed via our <Link href="/dpdp-rights">DPDP Rights Portal</Link> or to <a href="mailto:privacy@webitup24.com">privacy@webitup24.com</a>.
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Intellectual Property Rights</h2>
              <p>
                Unless otherwise explicitly agreed in an executed Statement of Work:
              </p>
              <ul className="legal-bullets">
                <li>
                  All client-specific brand assets, custom frontend UI code, and bespoke copy crafted explicitly for the client transfer to the client upon receipt of final invoice settlement.
                </li>
                <li>
                  Pre-existing internal libraries, design scaffolding, boilerplates, open-source packages, and foundational agency tooling remain the proprietary property of Web It Up 24 or their respective open-source licensors.
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Acceptable Use of Website</h2>
              <p>
                Visitors and clients must not:
              </p>
              <ul className="legal-bullets">
                <li>Use automated scrapers, crawlers, or malicious bots against website endpoints;</li>
                <li>Submit fraudulent, deceptive, or unsolicited commercial communications via contact forms;</li>
                <li>Introduce worms, viruses, Trojan horses, or logic bombs designed to disrupt server infrastructure.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable Indian law, Web It Up 24 shall not be liable for indirect, incidental, punitive, or consequential damages resulting from website downtime, third-party service provider outages (cloud hosts, domain registrars, payment processors), or unauthorized cyber incidents beyond reasonable technical controls.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Governing Law &amp; Dispute Resolution</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the Republic of India. In the event of disputes arising from digital personal data governance, parties shall first seek resolution through our designated Grievance Redressal Officer before escalating to the Data Protection Board of India (DPBI) or competent courts of jurisdiction.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Contact &amp; Notices</h2>
              <p>
                For legal inquiries, contract notifications, or statutory queries:
              </p>
              <div className="gro-card" style={{ marginTop: '1rem' }}>
                <p><strong>Web It Up 24 &mdash; Legal &amp; Compliance</strong></p>
                <p>Email: <a href="mailto:info@webitup24.com">info@webitup24.com</a> / <a href="mailto:privacy@webitup24.com">privacy@webitup24.com</a></p>
                <p>Website: <a href="https://webitup24.com">https://webitup24.com</a></p>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
