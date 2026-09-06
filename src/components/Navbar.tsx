'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocoScroll } from '@/animations/scroll';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent background scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Liquid-glass scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        if (window.scrollY > 30) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="navbar" id="navbar">
        <Link href="/" className="logo">
          Web It Up <span>24</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              href="/#about" 
              onClick={(e) => handleScrollTo(e, '#about')}
              data-scroll-to={pathname === '/' ? '' : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/#work" 
              onClick={(e) => handleScrollTo(e, '#work')}
              data-scroll-to={pathname === '/' ? '' : undefined}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              href="/#services" 
              onClick={(e) => handleScrollTo(e, '#services')}
              data-scroll-to={pathname === '/' ? '' : undefined}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/#process" 
              onClick={(e) => handleScrollTo(e, '#process')}
              data-scroll-to={pathname === '/' ? '' : undefined}
            >
              Process
            </Link>
          </li>
          <li>
            <Link href="/blog" className={pathname.startsWith('/blog') ? 'active' : ''}>
              Journal
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-cta magnetic-btn">
              Start a project
            </Link>
          </li>
        </ul>
        <button 
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          id="menu-toggle" 
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`} id="mobile-nav">
        <ul className="mobile-links">
          <li>
            <Link 
              href="/#about" 
              onClick={(e) => { setIsOpen(false); handleScrollTo(e, '#about'); }}
              data-scroll-to={pathname === '/' ? '' : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/#work" 
              onClick={(e) => { setIsOpen(false); handleScrollTo(e, '#work'); }}
              data-scroll-to={pathname === '/' ? '' : undefined}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              href="/#services" 
              onClick={(e) => { setIsOpen(false); handleScrollTo(e, '#services'); }}
              data-scroll-to={pathname === '/' ? '' : undefined}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/#process" 
              onClick={(e) => { setIsOpen(false); handleScrollTo(e, '#process'); }}
              data-scroll-to={pathname === '/' ? '' : undefined}
            >
              Process
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Journal
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
