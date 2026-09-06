'use client';

import React from 'react';
import Link from 'next/link';
import { socialLinks } from '@/lib/social';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'facebook':
        return <FaFacebookF />;
      case 'instagram':
        return <FaInstagram />;
      case 'github':
        return <FaGithub />;
      default:
        return <FiArrowUpRight />;
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo footer-logo">
              <span className="logo-mark">Web It Up</span>
              <span className="logo-accent">24</span>
            </Link>
            <p className="footer-tagline">
              International web design and development agency building fast, conversion-focused digital systems for ambitious startups and growing companies.
            </p>
            <div className="footer-contact-quick">
              <a href="mailto:info@webitup24.com" className="footer-email-link">
                info@webitup24.com
              </a>
            </div>
          </div>

          <div className="footer-nav-grid">
            <div className="footer-nav-col">
              <span className="footer-col-title">Navigation</span>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/#client-stories">Client Stories</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Journal</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">Services</span>
              <ul>
                <li><Link href="/services#website-design">Website Design</Link></li>
                <li><Link href="/services#code-development">Code Development</Link></li>
                <li><Link href="/services#seo-foundations">SEO Foundations</Link></li>
                <li><Link href="/services#brand-identity">Brand Identity</Link></li>
                <li><Link href="/services#performance-optimization">Performance Optimization</Link></li>
                <li><Link href="/services#ai-whatsapp-automation">AI &amp; WhatsApp Automation</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">Connect</span>
              <ul className="footer-social-list">
                {socialLinks.filter(l => l.enabled).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-item"
                      aria-label={link.ariaLabel}
                    >
                      <span className="footer-social-icon" aria-hidden="true">
                        {getSocialIcon(link.label)}
                      </span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; {year} Web It Up 24. All rights reserved.</p>
          <p className="footer-note">International Web Design &amp; Development Studio</p>
        </div>
      </div>
    </footer>
  );
}
