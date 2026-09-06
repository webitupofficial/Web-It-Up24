import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/lib/services';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Services — Web It Up 24 | Web Design, Development & Automation',
  description: 'Explore our six core services: Website design, code development, SEO foundations, brand identity, performance optimization, and AI & WhatsApp automation.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-label">Studio Capabilities</span>
          <h1>Services designed for growing companies</h1>
          <p>
            Disciplined web design, code development, and digital automation built to help ambitious startups and technology businesses move forward.
          </p>
        </div>
      </header>

      {/* Services Detailed List */}
      <section className="services-detail-section">
        <div className="container">
          <div className="services-detail-list">
            {servicesData.map((service) => (
              <article key={service.id} id={service.id} className="service-detail-item">
                {/* Left overview */}
                <div className="service-detail-left">
                  <div className="service-badge-row">
                    <span className="service-tag">Service {service.number}</span>
                  </div>
                  <h2>{service.title}</h2>
                  <p>{service.shortDesc}</p>
                  
                  <div style={{ marginTop: '1rem' }}>
                    <Link href="/contact" className="btn btn-primary">
                      <span>Inquire about this service</span>
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Right Breakdown */}
                <div className="service-detail-right">
                  <div className="detail-block">
                    <span className="detail-block-title">What It Includes</span>
                    <div className="detail-check-list">
                      {service.whatItIncludes.map((item, idx) => (
                        <div key={idx} className="detail-check-item">
                          <FiCheck className="check-icon" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="detail-block">
                    <span className="detail-block-title">Who It Is For</span>
                    <p>{service.whoItIsFor}</p>
                  </div>

                  <div className="detail-block">
                    <span className="detail-block-title">What You Receive</span>
                    <div className="detail-check-list">
                      {service.whatClientReceives.map((item, idx) => (
                        <div key={idx} className="detail-check-item">
                          <FiCheck className="check-icon" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="detail-block">
                    <span className="detail-block-title">The Next Step</span>
                    <p>{service.nextStep}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-panel">
            <h2 className="cta-title">Need multiple services or custom scope?</h2>
            <p className="cta-desc">
              Many of our client projects combine design, Next.js development, and technical SEO into one cohesive engagement. Tell us about your goals.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Start a project inquiry</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
