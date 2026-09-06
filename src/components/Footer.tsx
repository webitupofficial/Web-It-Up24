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
              Digital experiences with timeless character. We design and build high-performance websites, enduring brand systems, and intelligent digital architecture for clients worldwide.
            </p>
            <div className="atelier-status">
              <span className="atelier-status-dot"></span>
              <span>Accepting Select Commissions</span>
            </div>
            <div>
              <a href="mailto:info@webitup24.com" className="footer-email magnetic-btn">
                info@webitup24.com
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h4>Atelier</h4>
              <ul>
                <li>
                  <Link 
                    href="/#about" 
                    className="footer-link"
                    onClick={(e) => handleScrollTo(e, '#about')}
                    data-scroll-to={pathname === '/' ? '' : undefined}
                  >
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#services" 
                    className="footer-link"
                    onClick={(e) => handleScrollTo(e, '#services')}
                    data-scroll-to={pathname === '/' ? '' : undefined}
                  >
                    Capabilities
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#process" 
                    className="footer-link"
                    onClick={(e) => handleScrollTo(e, '#process')}
                    data-scroll-to={pathname === '/' ? '' : undefined}
                  >
                    Methodology
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="footer-link">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    Direct Inquiry
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Capabilities</h4>
              <ul>
                <li><span className="footer-link" style={{ cursor: 'default' }}>Bespoke Web Design</span></li>
                <li><span className="footer-link" style={{ cursor: 'default' }}>Next.js Engineering</span></li>
                <li><span className="footer-link" style={{ cursor: 'default' }}>Search Architecture</span></li>
                <li><span className="footer-link" style={{ cursor: 'default' }}>Brand Systems</span></li>
                <li><span className="footer-link" style={{ cursor: 'default' }}>AI & WhatsApp Workflows</span></li>
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
          <p className="footer-credit">Neoclassical Character · Precision Engineering</p>
        </div>
      </div>
    </footer>
  );
}
