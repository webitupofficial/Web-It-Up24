'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { socialLinks } from '@/lib/social';
import { servicesData } from '@/lib/services';
import { FiMail, FiGlobe, FiClock, FiCheck, FiArrowRight, FiSend } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa6';

export default function ContactPage() {
  const [state, handleSubmit, reset] = useForm('mykqjakg');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    timeline: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    reset();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      service: '',
      timeline: '',
      message: '',
    });
  };

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'facebook':
        return <FaFacebookF />;
      case 'instagram':
        return <FaInstagram />;
      case 'github':
        return <FaGithub />;
      default:
        return <FiGlobe />;
    }
  };

  return (
    <main>
      {/* Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-label">Start a Project</span>
          <h1>Let&apos;s build what&apos;s next</h1>
          <p>
            Tell us about your product, timeline, and goals. We review every enquiry and reply with clear next steps within 24 hours.
          </p>
        </div>
      </header>

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout">
            {/* Left Column: Direct Info */}
            <div className="contact-info-panel">
              <div className="contact-info-card">
                <h3>Direct Email</h3>
                <p>Reach out directly to discuss partnership opportunities, RFPs, or general questions.</p>
                <a href="mailto:info@webitup24.com" className="contact-direct-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FiMail aria-hidden="true" />
                  <span>info@webitup24.com</span>
                </a>
              </div>

              <div className="contact-info-card">
                <h3>Response Expectation</h3>
                <p>We respect your time. All inquiries receive a detailed initial review and response within 24 hours (Monday &ndash; Friday).</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.6rem', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600 }}>
                  <FiClock aria-hidden="true" />
                  <span>Within 24 business hours</span>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Global Availability</h3>
                <p>Working with startups and ambitious businesses worldwide across multiple time zones.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.6rem', color: 'var(--text)', fontSize: '0.9rem' }}>
                  <FiGlobe style={{ color: 'var(--accent)' }} aria-hidden="true" />
                  <span>Worldwide &amp; Remote</span>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Connect on Social</h3>
                <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.8rem' }}>
                  {socialLinks.filter(l => l.enabled).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-toggle-btn"
                      aria-label={link.ariaLabel}
                      title={link.label}
                    >
                      {getSocialIcon(link.label)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-card">
              {state.succeeded ? (
                <div className="form-success-state">
                  <div className="form-success-icon" aria-hidden="true">
                    <FiCheck />
                  </div>
                  <h3>Message received</h3>
                  <p>
                    Thank you for reaching out. We have received your project details and will get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-outline"
                    style={{ marginTop: '1rem' }}
                  >
                    <span>Send another message</span>
                    <FiArrowRight aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="firstName" className="form-label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Alex"
                        required
                      />
                      <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="validation-error" />
                    </div>

                    <div className="form-field">
                      <label htmlFor="lastName" className="form-label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Morgan"
                        required
                      />
                      <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="validation-error" />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="email" className="form-label">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="alex@company.com"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="validation-error" />
                    </div>

                    <div className="form-field">
                      <label htmlFor="company" className="form-label">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Acme Technologies"
                      />
                      <ValidationError prefix="Company" field="company" errors={state.errors} className="validation-error" />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="service" className="form-label">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select primary service...</option>
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Full Project / Multiple Services">
                          Full Project (Design + Development)
                        </option>
                      </select>
                      <ValidationError prefix="Service" field="service" errors={state.errors} className="validation-error" />
                    </div>

                    <div className="form-field">
                      <label htmlFor="timeline" className="form-label">
                        Estimated Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select target timeline...</option>
                        <option value="ASAP (within 2-4 weeks)">ASAP (2&ndash;4 weeks)</option>
                        <option value="1-2 months">1&ndash;2 months</option>
                        <option value="2-3 months">2&ndash;3 months</option>
                        <option value="Flexible / Exploring">Flexible / Planning stage</option>
                      </select>
                      <ValidationError prefix="Timeline" field="timeline" errors={state.errors} className="validation-error" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="form-label">
                      Project Details &amp; Goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Tell us about what you want to build, current challenges, references, or expected deliverables..."
                      rows={5}
                      required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="validation-error" />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-large btn-block"
                    disabled={state.submitting}
                  >
                    <span>{state.submitting ? 'Submitting brief...' : 'Send project enquiry'}</span>
                    <FiSend aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
