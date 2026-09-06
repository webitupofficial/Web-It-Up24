'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <Link href="/" className="logo" onClick={closeMenu}>
            <span className="logo-mark">Web It Up</span>
            <span className="logo-accent">24</span>
          </Link>

          <nav className="nav-links-wrap" aria-label="Main navigation">
            <ul className="nav-links">
              <li>
                <Link href="/" className={pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className={pathname === '/services' ? 'active' : ''}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#client-stories">
                  Client Stories
                </Link>
              </li>
              <li>
                <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className={pathname.startsWith('/blog') ? 'active' : ''}>
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <Link href="/contact" className="btn btn-primary nav-cta">
              Start a project
            </Link>
            <button
              type="button"
              className={`menu-toggle ${isOpen ? 'active' : ''}`}
              id="menu-toggle"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`} id="mobile-nav" aria-hidden={!isOpen}>
        <div className="mobile-nav-inner">
          <ul className="mobile-links">
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/#client-stories" onClick={closeMenu}>
                Client Stories
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeMenu}>
                Journal
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-nav-footer">
            <div className="mobile-theme-row">
              <span>Color mode:</span>
              <ThemeToggle />
            </div>
            <Link href="/contact" className="btn btn-primary btn-block" onClick={closeMenu}>
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
