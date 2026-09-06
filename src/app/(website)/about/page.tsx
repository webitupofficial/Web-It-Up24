import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About — Web It Up 24 | International Web Studio',
  description: 'Learn about Web It Up 24: an international web design and development studio focused on startups, technology companies, and growth brands.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-label">About the Agency</span>
          <h1>Design and technology for ambitious companies</h1>
          <p>
            We help startup founders and international businesses build fast, conversion-driven digital products and platforms without unnecessary agency overhead.
          </p>
        </div>
      </header>

      {/* Narrative Sections */}
      <section className="about-narrative-section">
        <div className="container">
          <div className="about-grid-sections">
            {/* Section 1: What We Do */}
            <div className="about-block-row">
              <div className="about-block-lead">
                <h2>What we do</h2>
              </div>
              <div className="about-block-body">
                <p>
                  Web It Up 24 is an international web design and development agency. We build bespoke digital systems: high-converting marketing sites, interactive SaaS user interfaces, headless CMS platforms, and practical workflow automations.
                </p>
                <p>
                  We focus on the intersection of strategic user experience, production-grade frontend engineering, and search optimization. Every website we create is built to help real companies launch effectively, communicate clearly, and bring in qualified customer enquiries.
                </p>
              </div>
            </div>

            {/* Section 2: Who We Serve */}
            <div className="about-block-row">
              <div className="about-block-lead">
                <h2>Who we serve</h2>
              </div>
              <div className="about-block-body">
                <p>
                  We primarily collaborate with:
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.5rem', marginBottom: '1.2rem' }}>
                  <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <FiCheckCircle style={{ color: 'var(--accent)', marginTop: '4px', flexShrink: 0 }} />
                    <span><strong>Startups and SaaS teams:</strong> Preparing for product launch, fundraising, or market entry where credibility and conversion are critical.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <FiCheckCircle style={{ color: 'var(--accent)', marginTop: '4px', flexShrink: 0 }} />
                    <span><strong>Growth-stage companies:</strong> Outgrowing slow, legacy templates and seeking a modern, scalable Next.js architecture.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <FiCheckCircle style={{ color: 'var(--accent)', marginTop: '4px', flexShrink: 0 }} />
                    <span><strong>International businesses:</strong> Requiring swift, localized, and search-optimized web experiences across multiple regions.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: How We Work */}
            <div className="about-block-row">
              <div className="about-block-lead">
                <h2>How we work</h2>
              </div>
              <div className="about-block-body">
                <p>
                  We reject the traditional agency model of bloated teams, layers of middle management, and endless administrative meetings. Instead, you collaborate directly with the engineers and designers executing your build.
                </p>
                <p>
                  Projects run on clear sprints with transparent milestones, shared Figma prototypes, staging deployments, and responsive async updates. This approach minimizes turnaround time and keeps every decision focused on your commercial objectives.
                </p>
              </div>
            </div>

            {/* Section 4: What We Value */}
            <div className="about-block-row">
              <div className="about-block-lead">
                <h2>What we value</h2>
              </div>
              <div className="about-block-body">
                <div className="values-grid-3">
                  <div className="value-box">
                    <h3>Clarity over noise</h3>
                    <p>We believe great design clarifies value rather than disguising a lack of substance with unnecessary visual gimmicks.</p>
                  </div>
                  <div className="value-box">
                    <h3>Engineering discipline</h3>
                    <p>Clean semantic code, rigorous TypeScript typing, and fast asset loading ensure longevity and easy maintenance.</p>
                  </div>
                  <div className="value-box">
                    <h3>Accountable partnerships</h3>
                    <p>We set honest timelines, provide direct recommendations, and hold ourselves accountable to your project goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: International Collaboration */}
            <div className="about-block-row">
              <div className="about-block-lead">
                <h2>Working with international clients</h2>
              </div>
              <div className="about-block-body">
                <p>
                  Digital products exist on a global stage. We collaborate seamlessly across time zones with clients in North America, Europe, Asia, and beyond.
                </p>
                <p>
                  By utilizing asynchronous review cycles, structured video walkthroughs, and clear documentation, we ensure projects proceed efficiently regardless of your physical location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-panel">
            <h2 className="cta-title">Ready to build with our studio?</h2>
            <p className="cta-desc">
              Tell us about your product, timeline, and goals. We review every brief and reply with clear next steps within 24 hours.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Start a project</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
