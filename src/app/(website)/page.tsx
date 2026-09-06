'use client';

import React from 'react';
import Link from 'next/link';
import { getLocoScroll } from '@/animations/scroll';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa6';
import { FiArrowUpRight, FiCheckCircle, FiLayers, FiCode, FiSearch, FiFeather, FiZap, FiCpu, FiMessageSquare } from 'react-icons/fi';

export default function Home() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const loco = getLocoScroll();
    const target = document.querySelector(targetId);
    if (loco && target) {
      loco.scrollTo(target, { offset: -80 });
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* ====== 1. HERO SECTION ====== */}
      <section className="hero" id="hero" data-scroll-section>
        <canvas id="hero-gradient-canvas"></canvas>
        <div className="hero-content">
          <div className="hero-eyebrow">
            MODERN DIGITAL STUDIO · WEB IT UP 24
          </div>
          <h1 className="hero-title">
            <span className="line"><span className="reveal-word">Websites that look sharp,</span></span>
            <span className="line"><span className="reveal-word">load fast, and bring in</span></span>
            <span className="line accent-line"><span className="reveal-word">better enquiries.</span></span>
          </h1>
          <p className="hero-sub reveal-up">
            We design and build fast, conversion-focused websites, brand identities, and practical AI automation systems for businesses that want a stronger online presence.
          </p>
          <div className="hero-buttons reveal-up">
            <Link href="/contact" className="btn btn-primary magnetic-btn">
              <span>Start a project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link 
              href="#work" 
              className="btn btn-outline magnetic-btn" 
              onClick={(e) => handleScrollTo(e, '#work')}
              data-scroll-to
            >
              <span>View selected work</span>
            </Link>
          </div>

          {/* Clean hero capability badges */}
          <div className="hero-meta-bar reveal-up">
            <div className="hero-meta-item">
              <FiCheckCircle className="meta-icon" />
              <span>Tailored Next.js Architecture</span>
            </div>
            <div className="hero-meta-divider">/</div>
            <div className="hero-meta-item">
              <FiCheckCircle className="meta-icon" />
              <span>Conversion-Focused Design</span>
            </div>
            <div className="hero-meta-divider">/</div>
            <div className="hero-meta-item">
              <FiCheckCircle className="meta-icon" />
              <span>Practical Automation</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator" data-scroll data-scroll-speed="-1">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ====== 2. CREDIBILITY & VALUE SECTION (ABOUT) ====== */}
      <section className="about" id="about" data-scroll-section>
        <div className="container">
          <div className="about-grid">
            <div className="about-label">
              <span className="section-label reveal-up" data-scroll data-scroll-speed="1">
                ABOUT
              </span>
            </div>
            <div className="about-content">
              <h2 className="about-heading shimmer-text" data-scroll data-scroll-speed="0.5">
                Built with attention to strategy, performance, and detail.
              </h2>
              <p className="about-body reveal-up">
                We partner with ambitious companies to create digital products and websites that communicate value clearly, perform seamlessly on every screen, and drive measurable commercial momentum. No template shortcuts, no unneeded complexity—just disciplined design paired with modern web engineering.
              </p>
              
              {/* Honest, verified value pillars */}
              <div className="value-pillars-grid reveal-up">
                <div className="value-pillar-card">
                  <div className="pillar-num">01</div>
                  <h3>Strategy & Structure</h3>
                  <p>Every page is structured around clear customer intent, logical hierarchy, and intuitive conversion pathways that guide visitors forward.</p>
                </div>
                <div className="value-pillar-card">
                  <div className="pillar-num">02</div>
                  <h3>Modern Performance</h3>
                  <p>Developed with Next.js, clean semantic code, and optimized asset delivery so your site loads rapidly and runs reliably across all devices.</p>
                </div>
                <div className="value-pillar-card">
                  <div className="pillar-num">03</div>
                  <h3>Editorial Detail</h3>
                  <p>Balanced proportions, refined typography, and thoughtful micro-interactions create an authentic, premium impression without clutter.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3. SELECTED WORK ====== */}
      <section className="work" id="work" data-scroll-section>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal-up">SELECTED WORK</span>
            <h2 className="section-title reveal-up">Recent work &amp; case studies<br /><em>in progress.</em></h2>
            <p className="section-intro reveal-up">
              A curation of websites, digital identities, and platforms designed for clarity, speed, and real business results.
            </p>
          </div>

          <div className="work-grid">
            {/* Project Card 1 */}
            <div className="work-card" data-scroll data-scroll-speed="0.2">
              <div className="work-preview">
                <div className="work-placeholder-frame">
                  <div className="frame-header">
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-url">apex-capital.preview</span>
                  </div>
                  <div className="frame-body">
                    <div className="frame-mock-title">APEX FINANCIAL</div>
                    <div className="frame-mock-lines">
                      <div className="mock-line wide"></div>
                      <div className="mock-line"></div>
                      <div className="mock-line short"></div>
                    </div>
                    <div className="frame-mock-grid">
                      <div className="mock-col"></div>
                      <div className="mock-col"></div>
                    </div>
                  </div>
                </div>
                <span className="work-status-badge">Case study in progress</span>
              </div>
              <div className="work-content">
                <div className="work-meta">
                  <span className="work-industry">Finance &amp; Asset Management</span>
                  <span className="work-services">Brand · Web Design · Next.js</span>
                </div>
                <h3 className="work-title">Apex Global Capital</h3>
                <p className="work-desc">
                  Corporate marketing website and investor portal interface engineered for institutional credibility, clear fund strategy overviews, and mobile readability.
                </p>
                <div className="work-footer-note">
                  <span>Approved case study publishing soon</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="work-card" data-scroll data-scroll-speed="0.3">
              <div className="work-preview">
                <div className="work-placeholder-frame">
                  <div className="frame-header">
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-url">kova-health.preview</span>
                  </div>
                  <div className="frame-body">
                    <div className="frame-mock-title">KOVA CLINICAL</div>
                    <div className="frame-mock-lines">
                      <div className="mock-line wide"></div>
                      <div className="mock-line short"></div>
                    </div>
                    <div className="frame-mock-grid">
                      <div className="mock-col"></div>
                      <div className="mock-col"></div>
                    </div>
                  </div>
                </div>
                <span className="work-status-badge">Project coming soon</span>
              </div>
              <div className="work-content">
                <div className="work-meta">
                  <span className="work-industry">Health &amp; Clinical Services</span>
                  <span className="work-services">UI/UX · Booking Pathways · SEO</span>
                </div>
                <h3 className="work-title">Kova Health &amp; Wellness</h3>
                <p className="work-desc">
                  Patient-first web experience featuring streamlined appointment inquiry flows, service breakdowns, and high-contrast accessible typography.
                </p>
                <div className="work-footer-note">
                  <span>Project release scheduled for Q2</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="work-card" data-scroll data-scroll-speed="0.2">
              <div className="work-preview">
                <div className="work-placeholder-frame">
                  <div className="frame-header">
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-url">strata-arch.preview</span>
                  </div>
                  <div className="frame-body">
                    <div className="frame-mock-title">STRATA ARCHITECTURE</div>
                    <div className="frame-mock-lines">
                      <div className="mock-line wide"></div>
                      <div className="mock-line"></div>
                    </div>
                    <div className="frame-mock-grid">
                      <div className="mock-col"></div>
                      <div className="mock-col"></div>
                    </div>
                  </div>
                </div>
                <span className="work-status-badge">Case study in progress</span>
              </div>
              <div className="work-content">
                <div className="work-meta">
                  <span className="work-industry">Architecture &amp; Built Environment</span>
                  <span className="work-services">Editorial Design · Custom CMS</span>
                </div>
                <h3 className="work-title">Strata Architectural Studio</h3>
                <p className="work-desc">
                  Minimal visual portfolio balancing generous negative space, crisp architectural project imagery, and structured index filtering.
                </p>
                <div className="work-footer-note">
                  <span>Case study documentation in progress</span>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="work-card" data-scroll data-scroll-speed="0.3">
              <div className="work-preview">
                <div className="work-placeholder-frame">
                  <div className="frame-header">
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-url">veloce-tech.preview</span>
                  </div>
                  <div className="frame-body">
                    <div className="frame-mock-title">VELOCE COMMERCE</div>
                    <div className="frame-mock-lines">
                      <div className="mock-line wide"></div>
                      <div className="mock-line short"></div>
                    </div>
                    <div className="frame-mock-grid">
                      <div className="mock-col"></div>
                      <div className="mock-col"></div>
                    </div>
                  </div>
                </div>
                <span className="work-status-badge">Project coming soon</span>
              </div>
              <div className="work-content">
                <div className="work-meta">
                  <span className="work-industry">Direct-to-Consumer Commerce</span>
                  <span className="work-services">Product UX · WhatsApp Automation</span>
                </div>
                <h3 className="work-title">Veloce Commerce Platform</h3>
                <p className="work-desc">
                  Speed-optimized digital product showcase with direct WhatsApp customer routing for real-time lead capture and purchase assistance.
                </p>
                <div className="work-footer-note">
                  <span>Client review in final stage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 4. SERVICES SECTION ====== */}
      <section className="services" id="services" data-scroll-section>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal-up">SERVICES</span>
            <h2 className="section-title reveal-up">Direct, focused disciplines for<br /><em>ambitious businesses.</em></h2>
            <p className="section-intro reveal-up">
              Everything we deliver is designed to be clear, performant, and practical for your commercial goals.
            </p>
          </div>
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card" data-scroll data-scroll-speed="0.3">
              <div className="service-icon">
                <FiLayers />
              </div>
              <span className="service-num">01</span>
              <h3>Website Design</h3>
              <div className="service-detail">
                <div className="detail-row">
                  <span className="detail-label">What it is:</span>
                  <p>Custom UI/UX interface design structured for clarity, brand credibility, and engaging user journeys.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Who it is for:</span>
                  <p>Growing companies needing a clean digital presence that reflects their quality and outshines competitors.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">What you receive:</span>
                  <p>Responsive Figma layouts, design system guidelines, component tokens, and interactive wireframes.</p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card" data-scroll data-scroll-speed="0.4">
              <div className="service-icon">
                <FiCode />
              </div>
              <span className="service-num">02</span>
              <h3>Website Development</h3>
              <div className="service-detail">
                <div className="detail-row">
                  <span className="detail-label">What it is:</span>
                  <p>Modern, responsive front-end engineering built on Next.js, React, and TypeScript for enduring stability.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Who it is for:</span>
                  <p>Businesses that require clean, maintainable code without slow page loads or heavy third-party dependencies.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">What you receive:</span>
                  <p>Production-ready code repository, headless CMS integration, cross-device testing, and deployment setup.</p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card" data-scroll data-scroll-speed="0.3">
              <div className="service-icon">
                <FiSearch />
              </div>
              <span className="service-num">03</span>
              <h3>SEO Foundations</h3>
              <div className="service-detail">
                <div className="detail-row">
                  <span className="detail-label">What it is:</span>
                  <p>Structural technical SEO, semantic HTML, and metadata setup ensuring search engines index your content cleanly.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Who it is for:</span>
                  <p>Brands looking to build long-term organic visibility and ensure their key pages are properly discovered.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">What you receive:</span>
                  <p>Schema markup, OpenGraph metadata, XML sitemaps, robots.txt configuration, and search console indexing.</p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card" data-scroll data-scroll-speed="0.4">
              <div className="service-icon">
                <FiFeather />
              </div>
              <span className="service-num">04</span>
              <h3>Brand Identity</h3>
              <div className="service-detail">
                <div className="detail-row">
                  <span className="detail-label">What it is:</span>
                  <p>Cohesive visual identity systems, typography guidelines, color palettes, and polished vector marks.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Who it is for:</span>
                  <p>Founders and teams looking to establish an authoritative, consistent visual tone across all customer touchpoints.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">What you receive:</span>
                  <p>Primary and secondary logo marks, typographic scale, color tokens, and exportable digital asset packages.</p>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="service-card" data-scroll data-scroll-speed="0.3">
              <div className="service-icon">
                <FiZap />
              </div>
              <span className="service-num">05</span>
              <h3>Performance Optimization</h3>
              <div className="service-detail">
                <div className="detail-row">
                  <span className="detail-label">What it is:</span>
                  <p>Targeted auditing and refinement of asset compression, script execution, font loading, and layout shifts.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Who it is for:</span>
                  <p>Existing websites that feel sluggish, lose mobile visitors, or struggle with heavy unoptimized resources.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">What you receive:</span>
                  <p>Optimized image pipeline, script deferral plan, cache headers configuration, and a comprehensive audit report.</p>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="service-card" data-scroll data-scroll-speed="0.4">
              <div className="service-icon">
                <FiMessageSquare />
              </div>
              <span className="service-num">06</span>
              <h3>AI &amp; WhatsApp Automation</h3>
              <div className="service-detail">
                <div className="detail-row">
                  <span className="detail-label">What it is:</span>
                  <p>Practical customer routing, WhatsApp lead capture flows, and automated enquiry handling workflows.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Who it is for:</span>
                  <p>Companies receiving recurring inquiries that need prompt, structured customer qualification without manual overhead.</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">What you receive:</span>
                  <p>Configured API webhooks, automated reply workflows, and direct CRM notification routing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 5. PROCESS SECTION ====== */}
      <section className="process" id="process" data-scroll-section>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal-up">PROCESS</span>
            <h2 className="section-title reveal-up">A structured path from discovery<br /><em>to launch.</em></h2>
            <p className="section-intro reveal-up">
              No guesswork or scope confusion. We guide each project through four transparent, disciplined phases.
            </p>
          </div>
          <div className="process-timeline">
            <div className="process-line"></div>

            <div className="process-step" data-scroll data-scroll-speed="0.2">
              <div className="step-marker">
                <span className="step-num">01</span>
              </div>
              <div className="step-content">
                <h3>Discovery &amp; Strategy</h3>
                <p>We analyze your business objectives, target audience, and key offerings to establish a focused project roadmap and content hierarchy.</p>
              </div>
            </div>

            <div className="process-step" data-scroll data-scroll-speed="0.3">
              <div className="step-marker">
                <span className="step-num">02</span>
              </div>
              <div className="step-content">
                <h3>Design &amp; Architecture</h3>
                <p>We design wireframes, typographic scales, and responsive interface layouts that communicate value clearly and convert visitors effectively.</p>
              </div>
            </div>

            <div className="process-step" data-scroll data-scroll-speed="0.2">
              <div className="step-marker">
                <span className="step-num">03</span>
              </div>
              <div className="step-content">
                <h3>Development &amp; Build</h3>
                <p>We build your website with clean, performant Next.js code, robust TypeScript, and fluid responsive behavior across desktop and mobile.</p>
              </div>
            </div>

            <div className="process-step" data-scroll data-scroll-speed="0.3">
              <div className="step-marker">
                <span className="step-num">04</span>
              </div>
              <div className="step-content">
                <h3>Review &amp; Deployment</h3>
                <p>We test across multiple browsers, verify form submissions and SEO tags, and manage a seamless production launch on your domain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. WHY WORK WITH US ====== */}
      <section className="why-us" id="why-us" data-scroll-section>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal-up">WHY WORK WITH US</span>
            <h2 className="section-title reveal-up">Three honest principles behind<br /><em>our studio.</em></h2>
            <p className="section-intro reveal-up">
              We believe great client outcomes come from clarity, thoughtful craft, and dependable engineering.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card reveal-up">
              <div className="why-icon-wrap">
                <FiMessageSquare className="why-icon" />
              </div>
              <h3>Clear communication</h3>
              <p>
                Direct updates, realistic timelines, and transparent collaboration from kick-off to launch. You always know what is being built, why decisions were made, and when to expect deliverables.
              </p>
            </div>

            <div className="why-card reveal-up">
              <div className="why-icon-wrap">
                <FiLayers className="why-icon" />
              </div>
              <h3>Thoughtful design</h3>
              <p>
                Clean visual hierarchy and purposeful typography that communicate credibility without unnecessary clutter. We build interfaces designed to make your business look sharp and trustworthy.
              </p>
            </div>

            <div className="why-card reveal-up">
              <div className="why-icon-wrap">
                <FiCpu className="why-icon" />
              </div>
              <h3>Reliable technical execution</h3>
              <p>
                Fast-loading, scalable code written to modern industry standards. We use modern frameworks like Next.js and avoid bloated templates so your website runs smoothly and remains easy to maintain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 7. SOCIAL LINKS (FOLLOW THE WORK) ====== */}
      <section className="social-section" id="social" data-scroll-section>
        <div className="container">
          <div className="social-panel reveal-up">
            <span className="section-label">FOLLOW THE WORK</span>
            <h2 className="social-title">Connect with our studio</h2>
            <p className="social-desc">
              Explore our latest releases, technical notes, and public code repositories across our official profiles.
            </p>
            
            <div className="social-grid">
              <a
                href="https://www.facebook.com/profile.php?id=61591909924608"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card magnetic-btn"
                aria-label="Connect with Web It Up 24 on Facebook (opens in new tab)"
              >
                <div className="social-card-icon">
                  <FaFacebookF />
                </div>
                <div className="social-card-info">
                  <h4>Facebook</h4>
                  <span>facebook.com/profile.php?id=61591909924608</span>
                </div>
                <FiArrowUpRight className="social-arrow" />
              </a>

              <a
                href="https://www.instagram.com/webitup24/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card magnetic-btn"
                aria-label="Connect with Web It Up 24 on Instagram (opens in new tab)"
              >
                <div className="social-card-icon">
                  <FaInstagram />
                </div>
                <div className="social-card-info">
                  <h4>Instagram</h4>
                  <span>@webitup24</span>
                </div>
                <FiArrowUpRight className="social-arrow" />
              </a>

              <a
                href="https://github.com/webitupofficial/Web-It-Up24"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card magnetic-btn"
                aria-label="View Web It Up 24 on GitHub (opens in new tab)"
              >
                <div className="social-card-icon">
                  <FaGithub />
                </div>
                <div className="social-card-info">
                  <h4>GitHub</h4>
                  <span>github.com/webitupofficial/Web-It-Up24</span>
                </div>
                <FiArrowUpRight className="social-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 8. CONTACT CTA ====== */}
      <section className="cta-section" data-scroll-section>
        <div className="container">
          <div className="cta-content" data-scroll data-scroll-speed="0.2">
            <span className="section-label">START A PROJECT</span>
            <h2 className="cta-title shimmer-text">
              Ready to build a website<br /><em>that works for you?</em>
            </h2>
            <p className="cta-sub">
              Whether you need a new website, a brand upgrade, or practical automation, let&apos;s talk through your goals and build something sharp and effective.
            </p>
            <Link href="/contact" className="btn btn-primary btn-large magnetic-btn">
              <span>Start a project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
