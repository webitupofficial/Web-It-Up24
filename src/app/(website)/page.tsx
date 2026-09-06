'use client';

import React from 'react';
import Link from 'next/link';
import { getLocoScroll } from '@/animations/scroll';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa6';

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
            EST. 2024 · DIGITAL ATELIER
          </div>
          <h1 className="hero-title">
            <span className="line"><span className="reveal-word">Digital Experiences</span></span>
            <span className="line"><span className="reveal-word">Crafted With</span></span>
            <span className="line accent-line"><span className="reveal-word">Timeless Character.</span></span>
          </h1>
          <p className="hero-sub reveal-up">
            We design and build high-performance websites, enduring brand identities, and intelligent digital systems for businesses that want to look credible, move faster, and convert more visitors.
          </p>
          <div className="hero-buttons reveal-up">
            <Link href="/contact" className="btn btn-primary magnetic-btn">
              <span>Initiate Project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link 
              href="#services" 
              className="btn btn-outline magnetic-btn" 
              onClick={(e) => handleScrollTo(e, '#services')}
              data-scroll-to
            >
              <span>Explore Capabilities</span>
            </Link>
          </div>
        </div>
        <div className="hero-scroll-indicator" data-scroll data-scroll-speed="-1">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ====== 2. ABOUT (THE PHILOSOPHY) ====== */}
      <section className="about" id="about" data-scroll-section>
        <div className="container">
          <div className="about-grid">
            <div className="about-label">
              <span className="section-label reveal-up" data-scroll data-scroll-speed="1">
                I · THE PHILOSOPHY
              </span>
            </div>
            <div className="about-content">
              <h2 className="about-heading shimmer-text" data-scroll data-scroll-speed="0.5">
                We reject transient digital fads in favor of enduring character, neoclassical proportion, and <em>flawless performance</em>.
              </h2>
              <p className="about-body reveal-up">
                Founded on the belief that digital architecture should be as authoritative as it is beautiful, Web It Up 24 unites high-fashion editorial aesthetics with relentless technical engineering. Every layout we structure, every typography pairing we curate, and every interaction we sequence is crafted with one uncompromised purpose: to command prestige and convert visitors into lifelong clients.
              </p>
              <div className="about-stats reveal-up">
                <div className="stat">
                  <span className="stat-number counter" data-target="50">0</span><span className="stat-plus">+</span>
                  <span className="stat-label">Commissions Delivered</span>
                </div>
                <div className="stat">
                  <span className="stat-number counter" data-target="99">0</span><span className="stat-plus">%</span>
                  <span className="stat-label">Performance Rating</span>
                </div>
                <div className="stat">
                  <span className="stat-number counter" data-target="3">0</span><span className="stat-plus">x</span>
                  <span className="stat-label">Avg. Conversion Lift</span>
                </div>
                <div className="stat">
                  <span className="stat-number counter" data-target="5">0</span>
                  <span className="stat-label">Years of Craft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3. SERVICES (CAPABILITIES) ====== */}
      <section className="services" id="services" data-scroll-section>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal-up">II · CAPABILITIES</span>
            <h2 className="section-title reveal-up">Disciplines sculpted for the<br /><em>discerning enterprise.</em></h2>
          </div>
          <div className="services-grid">
            <div className="service-card" data-scroll data-scroll-speed="0.3">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
                  <rect x="6" y="6" width="36" height="28" rx="2" />
                  <line x1="6" y1="36" x2="42" y2="36" />
                  <line x1="18" y1="36" x2="18" y2="42" />
                  <line x1="30" y1="36" x2="30" y2="42" />
                  <line x1="14" y1="42" x2="34" y2="42" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="18" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3>Bespoke Web Design</h3>
              <p>Editorial, award-caliber art direction that dignifies your brand and commands immediate credibility in competitive markets.</p>
              <span className="service-num">01</span>
            </div>

            <div className="service-card" data-scroll data-scroll-speed="0.5">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
                  <polyline points="16 14 8 24 16 34" />
                  <polyline points="32 14 40 24 32 34" />
                  <line x1="28" y1="10" x2="20" y2="38" />
                </svg>
              </div>
              <h3>Modern Engineering</h3>
              <p>Lightning-fast Next.js architecture, reactive GSAP motion design, and clean, accessible code engineered to scale seamlessly.</p>
              <span className="service-num">02</span>
            </div>

            <div className="service-card" data-scroll data-scroll-speed="0.3">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
                  <circle cx="21" cy="21" r="13" />
                  <line x1="31" y1="31" x2="43" y2="43" />
                  <path d="M16 21 L26 21" />
                  <path d="M21 16 L21 26" />
                </svg>
              </div>
              <h3>Search Architecture & SEO</h3>
              <p>Structural search optimization designed to dominate high-intent keywords, establishing lasting organic market authority.</p>
              <span className="service-num">03</span>
            </div>

            <div className="service-card" data-scroll data-scroll-speed="0.5">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
                  <circle cx="24" cy="24" r="18" />
                  <circle cx="24" cy="24" r="6" />
                  <line x1="24" y1="2" x2="24" y2="8" />
                  <line x1="24" y1="40" x2="24" y2="46" />
                  <line x1="2" y1="24" x2="8" y2="24" />
                  <line x1="40" y1="24" x2="46" y2="24" />
                </svg>
              </div>
              <h3>Brand Identity Systems</h3>
              <p>Monograms, typography pairings, and cohesive visual identities that communicate prestige and endure through changing trends.</p>
              <span className="service-num">04</span>
            </div>

            <div className="service-card" data-scroll data-scroll-speed="0.3">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
                  <polygon points="26 2 8 26 22 26 18 46 40 20 26 20 30 2" />
                </svg>
              </div>
              <h3>Speed & Performance</h3>
              <p>Sub-second time-to-first-byte, 100 Core Web Vitals, and lightweight asset delivery optimized for international audiences.</p>
              <span className="service-num">05</span>
            </div>

            <div className="service-card" data-scroll data-scroll-speed="0.5">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
                  <rect x="8" y="12" width="32" height="24" rx="3" />
                  <circle cx="18" cy="24" r="2.5" fill="currentColor" />
                  <circle cx="30" cy="24" r="2.5" fill="currentColor" />
                  <line x1="24" y1="6" x2="24" y2="12" />
                  <circle cx="24" cy="5" r="2" />
                </svg>
              </div>
              <h3>AI & WhatsApp Automation</h3>
              <p>Intelligent WhatsApp bots, custom conversational agents, and automated lead capture workflows that convert visitors 24/7.</p>
              <span className="service-num">06</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 4. PROCESS (METHODOLOGY) ====== */}
      <section className="process" id="process" data-scroll-section>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal-up">III · METHODOLOGY</span>
            <h2 className="section-title reveal-up">A disciplined path from vision<br /><em>to enduring reality.</em></h2>
          </div>
          <div className="process-timeline">
            <div className="process-line"></div>

            <div className="process-step" data-scroll data-scroll-speed="0.2">
              <div className="step-marker">
                <span className="step-num">01</span>
              </div>
              <div className="step-content">
                <h3>Discovery & Architectural Strategy</h3>
                <p>We analyze your brand positioning, audience psychology, and commercial goals to architect a focused strategic roadmap.</p>
              </div>
            </div>

            <div className="process-step" data-scroll data-scroll-speed="0.3">
              <div className="step-marker">
                <span className="step-num">02</span>
              </div>
              <div className="step-content">
                <h3>Art Direction & Prototyping</h3>
                <p>We sculpt bespoke typography, classical proportions, and interactive prototypes that establish unmistakable aesthetic authority.</p>
              </div>
            </div>

            <div className="process-step" data-scroll data-scroll-speed="0.2">
              <div className="step-marker">
                <span className="step-num">03</span>
              </div>
              <div className="step-content">
                <h3>Precision Engineering</h3>
                <p>We write clean, performant Next.js code paired with fluid GSAP animations, built for responsiveness and longevity.</p>
              </div>
            </div>

            <div className="process-step" data-scroll data-scroll-speed="0.3">
              <div className="step-marker">
                <span className="step-num">04</span>
              </div>
              <div className="step-content">
                <h3>Launch & Growth Orchestration</h3>
                <p>We execute exhaustive cross-platform performance audits, SEO indexing, and deployment to ensure high-impact results from day one.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 5. TESTIMONIALS (ENDORSEMENTS) ====== */}
      <section className="testimonials" id="testimonials" data-scroll-section>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal-up">IV · ENDORSEMENTS</span>
            <h2 className="section-title reveal-up">Reflections from founders<br /><em>who demand excellence.</em></h2>
          </div>
          <div className="testimonial-track">
            <div className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <p className="testimonial-text">
                Web It Up 24 completely transformed our brand perception. Our conversion rate doubled within weeks. The attention to detail in every micro-interaction is extraordinary.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80')" }}></div>
                <div>
                  <h4>Sarah Jenkins</h4>
                  <span>CEO, Lumina Capital</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <p className="testimonial-text">
                The level of polish, classical restraint, and motion design put our enterprise lightyears ahead of our industry competitors. Truly timeless craftsmanship.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80')" }}></div>
                <div>
                  <h4>Marcus Chen</h4>
                  <span>Founder, Atlas Ventures</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <p className="testimonial-text">
                Professional, creative, and blazing fast. The mobile experience they delivered is nothing short of breathtaking. Our clients continuously compliment the design.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80')" }}></div>
                <div>
                  <h4>Elena Rossi</h4>
                  <span>Director, Zenith Health</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <p className="testimonial-text">
                Collaborating with Web It Up 24 was an absolute revelation. They grasped our strategic intent immediately and delivered a website that functions as our chief sales vehicle.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80')" }}></div>
                <div>
                  <h4>David Park</h4>
                  <span>CTO, Nexus Intelligence</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <p className="testimonial-text">
                The site isn&apos;t just beautiful—it converted our inbound traffic into a 3x increase in qualified enterprise leads during the very first quarter.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80')" }}></div>
                <div>
                  <h4>Amanda Torres</h4>
                  <span>CMO, Velvet & Rose</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <p className="testimonial-text">
                Every transition, every scroll, every typographical decision feels deliberate. This is what happens when you partner with artists who master code.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80')" }}></div>
                <div>
                  <h4>James Harper</h4>
                  <span>Principal, Obsidian Atelier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. CTA (THE INVITATION) ====== */}
      <section className="cta-section" data-scroll-section>
        <div className="container">
          <div className="cta-content" data-scroll data-scroll-speed="0.3">
            <span className="section-label">V · COMMENCE</span>
            <h2 className="cta-title shimmer-text">
              Let Us Build Something<br /><em>That Endures.</em>
            </h2>
            <p className="cta-sub">
              Whether you are refining an existing market leader or establishing an ambitious new enterprise, our atelier is ready to elevate your digital presence.
            </p>
            <Link href="/contact" className="btn btn-primary btn-large magnetic-btn">
              <span>Initiate a Project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            {/* ====== CONNECT WITH US ====== */}
            <div className="cta-connect-panel">
              <span className="connect-eyebrow">Connect With Us</span>
              <div className="connect-social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=61591909924608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-social-pill magnetic-btn"
                  aria-label="Connect with Web It Up 24 on Facebook (opens in new tab)"
                >
                  <FaFacebookF className="connect-icon" aria-hidden="true" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/webitup24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-social-pill magnetic-btn"
                  aria-label="Connect with Web It Up 24 on Instagram (opens in new tab)"
                >
                  <FaInstagram className="connect-icon" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://github.com/webitupofficial/Web-It-Up24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-social-pill magnetic-btn"
                  aria-label="View Web It Up 24 on GitHub (opens in new tab)"
                >
                  <FaGithub className="connect-icon" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
