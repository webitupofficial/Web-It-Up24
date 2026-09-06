'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocoScroll } from '@/animations/scroll';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa6';

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const loco = getLocoScroll();
      const target = document.querySelector(targetId);
      if (loco && target) {
        loco.scrollTo(target, { offset: -80 });
      } else if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer" id="footer" data-scroll-section>
      <div className="container">
        <div className="footer-top">
          <div className="footer-info">
            <Link href="/" className="logo footer-logo">
              Web It Up <span>24</span>
            </Link>
            <p className="footer-tagline">
              Websites, brands, and digital systems built to help ambitious businesses grow. Modern design paired with dependable technical execution.
            </p>
            <div className="atelier-status">
              <span className="atelier-status-dot"></span>
              <span>Accepting New Projects</span>
            </div>
            <div>
              <a href="mailto:info@webitup24.com" className="footer-email magnetic-btn">
                info@webitup24.com
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <Link 
                    href="/#about" 
                    className="footer-link"
                    onClick={(e) => handleScrollTo(e, '#about')}
                    data-scroll-to={pathname === '/' ? '' : undefined}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#work" 
                    className="footer-link"
                    onClick={(e) => handleScrollTo(e, '#work')}
                    data-scroll-to={pathname === '/' ? '' : undefined}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#services" 
                    className="footer-link"
                    onClick={(e) => handleScrollTo(e, '#services')}
                    data-scroll-to={pathname === '/' ? '' : undefined}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#process" 
                    className="footer-link"
                    onClick={(e) => handleScrollTo(e, '#process')}
                    data-scroll-to={pathname === '/' ? '' : undefined}
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="footer-link">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    Start a project
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><span className="footer-link" style={{ cursor: 'default' }}>Website Design</span></li>
                <li><span className="footer-link" style={{ cursor: 'default' }}>Website Development</span></li>
                <li><span className="footer-link" style={{ cursor: 'default' }}>SEO Foundations</span></li>
                <li><span className="footer-link" style={{ cursor: 'default' }}>Brand Identity</span></li>
                <li><span className="footer-link" style={{ cursor: 'default' }}>Performance Optimization</span></li>
                <li><span className="footer-link" style={{ cursor: 'default' }}>AI &amp; WhatsApp Automation</span></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Connect</h4>
              <ul className="footer-social-list">
                <li>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61591909924608" 
                    className="footer-social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Connect with Web It Up 24 on Facebook (opens in a new tab)"
                  >
                    <FaFacebookF className="footer-social-icon" aria-hidden="true" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/webitup24/" 
                    className="footer-social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Connect with Web It Up 24 on Instagram (opens in a new tab)"
                  >
                    <FaInstagram className="footer-social-icon" aria-hidden="true" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/webitupofficial/Web-It-Up24" 
                    className="footer-social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View Web It Up 24 on GitHub (opens in a new tab)"
                  >
                    <FaGithub className="footer-social-icon" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Web It Up 24. All rights reserved.</p>
          <p className="footer-credit">Modern Digital Studio · Web It Up 24</p>
        </div>
      </div>
    </footer>
  );
}
