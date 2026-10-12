'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { FiShield, FiSettings, FiCheck, FiX, FiInfo } from 'react-icons/fi';

interface ConsentSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'webitup24-cookie-consent';

function subscribeStorage(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener('cookie-consent-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('cookie-consent-change', callback);
  };
}

function getConsentSnapshot(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot(): string | null {
  return null;
}

function parseConsent(raw: string | null): ConsentSettings | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default function CookieConsentBanner() {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const consentRaw = useSyncExternalStore(
    subscribeStorage,
    getConsentSnapshot,
    getServerSnapshot
  );

  const currentConsent = parseConsent(consentRaw);
  const [showModal, setShowModal] = useState(false);
  const [customAnalytics, setCustomAnalytics] = useState<boolean | null>(null);
  const [customMarketing, setCustomMarketing] = useState<boolean | null>(null);

  const analyticsConsent = customAnalytics !== null ? customAnalytics : Boolean(currentConsent?.analytics);
  const marketingConsent = customMarketing !== null ? customMarketing : Boolean(currentConsent?.marketing);

  useEffect(() => {
    const handleOpenModal = () => {
      setShowModal(true);
    };

    window.addEventListener('open-cookie-preferences', handleOpenModal);
    (window as unknown as { openCookiePreferences?: () => void }).openCookiePreferences = () => {
      setShowModal(true);
    };

    return () => {
      window.removeEventListener('open-cookie-preferences', handleOpenModal);
    };
  }, []);

  const applyGtagConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
      gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied',
      });
    }
  };

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const payload: ConsentSettings = {
      essential: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      window.dispatchEvent(new Event('cookie-consent-change'));
    } catch {
      // storage unavailable
    }
    applyGtagConsent(analytics, marketing);
    setCustomAnalytics(analytics);
    setCustomMarketing(marketing);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleRejectNonEssential = () => {
    saveConsent(false, false);
  };

  const handleSaveCustom = () => {
    saveConsent(analyticsConsent, marketingConsent);
  };

  if (!isClient) return null;

  const showBanner = currentConsent === null && !showModal;

  return (
    <>
      {/* Banner */}
      {showBanner && (
        <aside
          className="cookie-banner"
          role="region"
          aria-label="Privacy and Cookie Consent"
        >
          <div className="cookie-banner-content">
            <div className="cookie-banner-text-group">
              <div className="cookie-banner-header">
                <span className="cookie-icon-badge" aria-hidden="true">
                  <FiShield />
                </span>
                <span className="cookie-banner-title">
                  Digital Privacy &amp; Consent (DPDP Act, 2023)
                </span>
              </div>
              <p className="cookie-banner-description">
                In compliance with India&apos;s Digital Personal Data Protection Act, 2023, we seek your explicit consent to process non-essential cookies and analytics. Essential technical cookies are strictly necessary for core site performance.
                Learn more in our{' '}
                <Link href="/privacy-policy" className="cookie-link">
                  Privacy Policy
                </Link>{' '}
                and exercise your rights under{' '}
                <Link href="/dpdp-rights" className="cookie-link">
                  DPDP Rights
                </Link>.
              </p>
            </div>

            <div className="cookie-banner-actions">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="btn btn-primary btn-sm"
              >
                <FiCheck aria-hidden="true" />
                <span>Accept All</span>
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="btn btn-outline btn-sm"
              >
                <FiX aria-hidden="true" />
                <span>Reject Non-Essential</span>
              </button>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn btn-subtle btn-sm"
              >
                <FiSettings aria-hidden="true" />
                <span>Customize</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      {showModal && (
        <div
          className="cookie-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
        >
          <div className="cookie-modal-card">
            <div className="cookie-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="cookie-icon-badge" aria-hidden="true">
                  <FiShield />
                </span>
                <h2 id="cookie-modal-title" className="cookie-modal-title">
                  Cookie &amp; Consent Preferences
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="cookie-close-btn"
                aria-label="Close preferences modal"
              >
                <FiX />
              </button>
            </div>

            <p className="cookie-modal-intro">
              Manage how Web It Up 24 collects and processes your digital personal data pursuant to the Digital Personal Data Protection Act (DPDP Act, 2023). You may modify or withdraw your consent at any time.
            </p>

            <div className="cookie-category-list">
              {/* Essential */}
              <div className="cookie-category-item">
                <div className="cookie-category-info">
                  <div className="cookie-category-header">
                    <strong>Strictly Necessary &amp; Security</strong>
                    <span className="cookie-badge cookie-badge-required">Always Active</span>
                  </div>
                  <p>
                    Required for the website to function, enable navigation, maintain theme preferences, and protect against security threats. These do not store personal identifiable data.
                  </p>
                </div>
              </div>

              {/* Analytics */}
              <div className="cookie-category-item">
                <div className="cookie-category-info">
                  <div className="cookie-category-header">
                    <label htmlFor="analytics-toggle" className="cookie-toggle-label">
                      <strong>Analytics &amp; Performance (Google Analytics)</strong>
                    </label>
                    <input
                      id="analytics-toggle"
                      type="checkbox"
                      checked={analyticsConsent}
                      onChange={(e) => setCustomAnalytics(e.target.checked)}
                      className="cookie-switch-input"
                    />
                  </div>
                  <p>
                    Helps us understand aggregated visitor traffic, page speed, and user engagement so we can continuously optimize user experience. All IP addresses are anonymized.
                  </p>
                </div>
              </div>

              {/* Marketing */}
              <div className="cookie-category-item">
                <div className="cookie-category-info">
                  <div className="cookie-category-header">
                    <label htmlFor="marketing-toggle" className="cookie-toggle-label">
                      <strong>Marketing &amp; Tailored Communication</strong>
                    </label>
                    <input
                      id="marketing-toggle"
                      type="checkbox"
                      checked={marketingConsent}
                      onChange={(e) => setCustomMarketing(e.target.checked)}
                      className="cookie-switch-input"
                    />
                  </div>
                  <p>
                    Used exclusively if you opt into personalized campaign analytics and referral conversion attribution across our digital channels.
                  </p>
                </div>
              </div>
            </div>

            <div className="cookie-modal-footer">
              <div className="cookie-legal-notice">
                <FiInfo aria-hidden="true" />
                <span>
                  Withdrawal of consent does not affect the lawfulness of processing based on consent before withdrawal.
                </span>
              </div>
              <div className="cookie-modal-actions">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="btn btn-outline btn-sm"
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="btn btn-primary btn-sm"
                >
                  Save My Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
