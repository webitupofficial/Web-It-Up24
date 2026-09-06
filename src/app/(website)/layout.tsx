import React from 'react';
import '../style.css';
import ScrollProvider from '@/components/ScrollProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* ======= PRELOADER ======= */}
      <div id="preloader">
        <div className="preloader-inner">
          <canvas id="preloader-particles"></canvas>
          <div className="rocket-wrap atelier-seal-wrap">
            <svg className="atelier-seal-svg" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
              {/* Outer delicate classical border */}
              <circle cx="80" cy="80" r="74" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.4" strokeDasharray="3 3"/>
              <circle cx="80" cy="80" r="68" fill="none" stroke="#C9A227" strokeWidth="1.5" opacity="0.8"/>
              <circle cx="80" cy="80" r="62" fill="none" stroke="#F1EBDD" strokeWidth="0.75" opacity="0.25"/>
              
              {/* Classical 8-point starburst */}
              <g stroke="#C9A227" strokeWidth="1" opacity="0.6">
                <line x1="80" y1="20" x2="80" y2="140" />
                <line x1="20" y1="80" x2="140" y2="80" />
                <line x1="38" y1="38" x2="122" y2="122" opacity="0.4"/>
                <line x1="122" y1="38" x2="38" y2="122" opacity="0.4"/>
              </g>

              {/* Central medallion */}
              <circle cx="80" cy="80" r="32" fill="#101010" stroke="#C9A227" strokeWidth="1.5"/>
              <circle cx="80" cy="80" r="28" fill="none" stroke="#F1EBDD" strokeWidth="0.5" opacity="0.3"/>

              {/* Classical monogram */}
              <text x="80" y="86" textAnchor="middle" fill="#F1EBDD" fontSize="18" fontFamily="var(--font-heading), 'Cormorant Garamond', serif" fontWeight="600" letterSpacing="1">
                W·24
              </text>
            </svg>
          </div>
          <div className="preloader-text">
            <span className="preloader-logo">Web It Up <em>24</em></span>
            <span className="preloader-sub">EST. 2024 · DIGITAL ATELIER</span>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar" id="progress-bar"></div>
          </div>
          <p className="loading-text">Curating Experience...</p>
        </div>
      </div>

      {/* ======= CUSTOM CURSOR ======= */}
      <div className="cursor-dot" id="cursor-dot" aria-hidden="true">
        <div className="cursor-dot-inner"></div>
      </div>

      {/* ======= NOISE OVERLAY ======= */}
      <div className="noise-overlay"></div>

      {/* ======= FLOATING ORNAMENTS ======= */}
      <div className="doodles-layer" aria-hidden="true">
        {/* Classical 8-point gold star */}
        <svg className="doodle doodle-star" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0 L53 38 L90 20 L62 47 L100 50 L62 53 L90 80 L53 62 L50 100 L47 62 L10 80 L38 53 L0 50 L38 47 L10 20 L47 38 Z" fill="none" stroke="#C9A227" strokeWidth="1.2" opacity="0.22"/>
        </svg>
        {/* Delicate astronomical crosshair */}
        <svg className="doodle doodle-arrow" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="24" fill="none" stroke="#C9A227" strokeWidth="1" strokeDasharray="2 4" opacity="0.2"/>
          <line x1="40" y1="8" x2="40" y2="72" stroke="#C9A227" strokeWidth="1" opacity="0.25"/>
          <line x1="8" y1="40" x2="72" y2="40" stroke="#C9A227" strokeWidth="1" opacity="0.25"/>
        </svg>
        {/* Geometric rosette */}
        <svg className="doodle doodle-circle" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="50" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.18"/>
          <circle cx="60" cy="60" r="38" fill="none" stroke="#F1EBDD" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.15"/>
          <circle cx="60" cy="60" r="26" fill="none" stroke="#C9A227" strokeWidth="0.75" opacity="0.2"/>
        </svg>
        {/* Diamond asters */}
        <svg className="doodle doodle-squiggle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.18"/>
          <circle cx="50" cy="50" r="4" fill="#C9A227" opacity="0.3"/>
        </svg>
        {/* Small classical star */}
        <svg className="doodle doodle-star-small" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 4 L34 22 L52 24 L37 34 L43 51 L30 40 L17 51 L23 34 L8 24 L26 22Z" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.2"/>
        </svg>
        {/* Classical corner bracket ornament */}
        <svg className="doodle doodle-cross" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 28 L12 12 L28 12" fill="none" stroke="#C9A227" strokeWidth="1.5" opacity="0.22"/>
          <path d="M48 32 L48 48 L32 48" fill="none" stroke="#C9A227" strokeWidth="1.5" opacity="0.22"/>
        </svg>
      </div>

      <ScrollProvider>
        <Navbar />
        {children}
        <Footer />
      </ScrollProvider>
    </>
  );
}
