import React from 'react';
import '../style.css';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsentBanner from '@/components/CookieConsentBanner';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Navbar />
      <div id="main-content">
        {children}
      </div>
      <Footer />
      <CookieConsentBanner />
    </ThemeProvider>
  );
}
