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
          <div className="rocket-wrap studio-mark-wrap">
            <div className="studio-monogram">W·24</div>
          </div>
          <div className="preloader-text">
            <span className="preloader-logo">Web It Up <em>24</em></span>
            <span className="preloader-sub">MODERN DIGITAL STUDIO</span>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar" id="progress-bar"></div>
          </div>
          <p className="loading-text">Loading Studio...</p>
        </div>
      </div>

      {/* ======= CUSTOM CURSOR ======= */}
      <div className="cursor-dot" id="cursor-dot" aria-hidden="true">
        <div className="cursor-dot-inner"></div>
      </div>

      {/* ======= NOISE OVERLAY ======= */}
      <div className="noise-overlay"></div>

      <ScrollProvider>
        <Navbar />
        {children}
        <Footer />
      </ScrollProvider>
    </>
  );
}
