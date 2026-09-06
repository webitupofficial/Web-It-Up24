'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { initSmoothScroll, getLocoScroll } from '@/animations/scroll';
import { initCursor, initMagneticButtons } from '@/animations/cursor';
import {
  animatePreloader,
  animateHero,
  initHeroCanvas,
  initScrollAnimations,
  initCounters,
  initDoodleParallax,
} from '@/animations/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const initializedRef = useRef(false);
  const cursorCleanupRef = useRef<(() => void) | null>(null);
  const magneticCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Only run this sequence once on initial site load
    async function setupExperience() {
      // Step 1: Preloader
      await animatePreloader();

      // Step 2: Smooth scrolling
      const scrollInstance = await initSmoothScroll();

      // Step 3: Hero animations
      animateHero();
      initHeroCanvas();

      // Step 4: Scroll reveals and counters
      const container = document.querySelector('[data-scroll-container]');
      if (container) {
        initScrollAnimations(container);
        initCounters(container);
      }

      // Step 5: Interactions
      cursorCleanupRef.current = initCursor();
      magneticCleanupRef.current = initMagneticButtons();
      initDoodleParallax();

      // Step 6: Scroll parallax doodles
      if (scrollInstance) {
        const doodles = document.querySelectorAll('.doodle');
        scrollInstance.on('scroll', (args: { scroll: { y: number } }) => {
          const scrollY = args.scroll.y;
          doodles.forEach((dElement, i) => {
            const d = dElement as HTMLElement;
            const speed = (i % 3 + 1) * 0.1;
            d.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02 * (i % 2 === 0 ? 1 : -1)}deg)`;
          });
        });
      }
      
      initializedRef.current = true;
    }

    setupExperience();

    return () => {
      cursorCleanupRef.current?.();
      magneticCleanupRef.current?.();
    };
  }, []);

  // Update scroll and trigger animations when route changes
  useEffect(() => {
    if (!initializedRef.current) return;

    const timeout = setTimeout(() => {
      // Scroll to top of the page on route change
      window.scrollTo(0, 0);

      // Re-initialize or update scroll
      const loco = getLocoScroll();
      if (loco) {
        loco.update();
        loco.scrollTo(0, { duration: 0, disableLerp: true });
      }

      // Re-initialize standard reveals/magnetic elements for the new page DOM
      const container = document.querySelector('[data-scroll-container]');
      if (container) {
        initScrollAnimations(container);
        initCounters(container);
      }
      initMagneticButtons();

      ScrollTrigger.refresh();
    }, 300); // Wait for page transition / DOM update

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div data-scroll-container id="main-container">
      {children}
    </div>
  );
}
