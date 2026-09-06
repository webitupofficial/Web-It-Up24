'use client';

import React, { useSyncExternalStore } from 'react';
import { useTheme } from './ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

const emptySubscribe = () => () => {};

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isHydrated = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!isHydrated) {
    return (
      <div
        className={`theme-toggle-btn ${className}`}
        aria-hidden="true"
        style={{ width: '38px', height: '38px', opacity: 0 }}
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className="theme-toggle-icon-wrap">
        {isDark ? <FiSun className="theme-icon sun" /> : <FiMoon className="theme-icon moon" />}
      </span>
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}
