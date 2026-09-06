'use client';

import React, { useState, useEffect } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiArrowRight } from 'react-icons/fi';
import { useForm, ValidationError } from '@formspree/react';
import { getLocoScroll } from '@/animations/scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [state, handleSubmit, reset] = useForm('mykqjakg');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    reset();
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  // Recalculate Locomotive Scroll and GSAP ScrollTrigger heights dynamically when status changes
  useEffect(() => {
    const loco = getLocoScroll();
    if (loco) {
      setTimeout(() => {
        loco.update();
        ScrollTrigger.refresh();
      }, 100); // Wait for the transition to finish rendering in DOM
    }
  }, [state.succeeded]);

  return (
    <section className="contact-section" data-scroll-section>
      <div className="container">
        <div className="section-header">
          <span className="section-label reveal-up">START A PROJECT</span>
          <h2 className="section-title reveal-up">Let&apos;s discuss your next<br /><em>website or digital system.</em></h2>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Information */}
          <div className="contact-info" data-scroll data-scroll-speed="0.2">
            <p className="reveal-up" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
              Tell us about your project, timeline, and goals. We review every enquiry and reply with clear next steps within 24 hours.
            </p>

            <div className="contact-card-container">
              {/* Card 1: Email */}
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <FiMail />
                </div>
                <div className="contact-card-text">
                  <h4>Email</h4>
                  <p>info@webitup24.com</p>
                </div>
              </div>

              {/* Card 2: Response */}
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <FiPhone />
                </div>
                <div className="contact-card-text">
                  <h4>Turnaround</h4>
                  <p>Response within 24 hours</p>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <FiMapPin />
                </div>
                <div className="contact-card-text">
                  <h4>Location</h4>
                  <p>Worldwide &amp; Remote</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-container" data-scroll data-scroll-speed="0.4">
            <div className={`form-animation-wrapper ${state.succeeded ? 'succeeded' : ''}`}>
              
              {/* Form Slide */}
              <div className="form-content-slide">
                <form onSubmit={handleSubmit} className="contact-form">
                  
                  {/* First & Last Name Grid Row */}
                  <div className="form-row-2col">
                    <div className="form-group">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Jane"
                        required
                      />
                      <label htmlFor="firstName" className="form-label">First Name *</label>
                      <span className="form-border-focus"></span>
                      <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="validation-error" />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Doe"
                        required
                      />
                      <label htmlFor="lastName" className="form-label">Last Name *</label>
                      <span className="form-border-focus"></span>
                      <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="validation-error" />
                    </div>
                  </div>

                  {/* Email Row */}
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@example.com"
                      required
                    />
                    <label htmlFor="email" className="form-label">Email ID *</label>
                    <span className="form-border-focus"></span>
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="validation-error" />
                  </div>

                  {/* Message Row */}
                  <div className="form-group">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input"
                      rows={4}
                      placeholder="Tell us about your project..."
                      style={{ resize: 'none' }}
                      required
                    />
                    <label htmlFor="message" className="form-label">How can we help? *</label>
                    <span className="form-border-focus"></span>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="validation-error" />
                  </div>

                  {/* Submit button */}
                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn magnetic-btn"
                    disabled={state.submitting}
                  >
                    <span>{state.submitting ? 'Sending...' : 'Submit enquiry'}</span>
                    {state.submitting ? (
                      <div className="spinner" style={{
                        width: '18px',
                        height: '18px',
                        border: '2px solid rgba(11, 11, 11, 0.3)',
                        borderTopColor: 'var(--bg)',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite'
                      }} />
                    ) : (
                      <FiSend style={{ fontSize: '0.9rem' }} />
                    )}
                  </button>
                </form>
              </div>

              {/* Success Slide */}
              <div className="success-content-slide">
                <div className="success-screen">
                  {/* SVG Checkmark drawing animation */}
                  <svg className="success-checkmark" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                    <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                  
                  <h3>Message Received</h3>
                  <p>Thank you for reaching out. We will review your project details and get back to you within 24 hours.</p>
                  <button 
                    className="btn btn-outline magnetic-btn"
                    onClick={handleReset}
                  >
                    <span>Send Another Message</span>
                    <FiArrowRight />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Styles for dynamic layout features, validation, expanding focus underline, and checkmark animations */}
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .form-animation-wrapper {
          position: relative;
          width: 100%;
          min-height: 480px;
          display: flex;
          flex-direction: column;
        }

        .form-content-slide {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
        }

        .success-content-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          transform: translateY(30px);
          pointer-events: none;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .succeeded .form-content-slide {
          opacity: 0;
          transform: translateY(-30px);
          pointer-events: none;
        }

        .succeeded .success-content-slide {
          position: relative;
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          width: 100%;
        }

        @media (max-width: 600px) {
          .form-row-2col {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .form-border-focus {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(-50%);
        }

        .form-input:focus ~ .form-border-focus {
          width: 100%;
        }

        .validation-error {
          color: #ff4a4a;
          font-size: 0.8rem;
          margin-top: 0.5rem;
          display: block;
          font-weight: 500;
        }

        /* SVG Checkmark Drawing Animations */
        .success-checkmark {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          display: block;
          stroke-width: 2.5;
          stroke: var(--accent);
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px var(--accent);
          animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
          margin-bottom: 2rem;
        }

        .success-checkmark-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2.5;
          stroke-miterlimit: 10;
          stroke: var(--accent);
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .success-checkmark-check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.35s cubic-bezier(0.65, 0, 0.45, 1) 0.75s forwards;
        }

        @keyframes stroke {
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes scale {
          0%, 100% {
            transform: none;
          }
          50% {
            transform: scale3d(1.1, 1.1, 1);
          }
        }

        @keyframes fill {
          100% {
            box-shadow: inset 0px 0px 0px 45px rgba(212, 175, 55, 0.08);
          }
        }
      `}</style>
    </section>
  );
}
