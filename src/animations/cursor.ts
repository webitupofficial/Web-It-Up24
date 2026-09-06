/**
 * cursor.ts — Custom Cursor & Magnetic Button Module
 * Lightweight, GPU-accelerated gold cursor dot with GSAP quickTo interpolation
 * and robust event delegation across client-side route transitions.
 */
import gsap from 'gsap';

export function initCursor(): () => void {
  if (typeof window === 'undefined') return () => {};

  // Check accessibility & device pointer capabilities
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  const hasNoHover = window.matchMedia('(hover: none)').matches;
  const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
    !window.matchMedia('(pointer: fine)').matches;

  if (prefersReducedMotion || isCoarse || hasNoHover || isTouchDevice) {
    document.documentElement.classList.remove('has-custom-cursor');
    return () => {};
  }

  const dot = document.getElementById('cursor-dot');
  if (!dot) return () => {};

  // Initialize dot with GPU 3D translation centering
  gsap.set(dot, {
    xPercent: -50,
    yPercent: -50,
    force3D: true,
  });

  // GSAP quickTo creates high-performance reusable tweens for pointer interpolation
  const xTo = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2.out' });
  const yTo = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2.out' });

  let hasMoved = false;

  const onPointerMove = (e: PointerEvent) => {
    // Ignore touch pointer types if fired in hybrid setups
    if (e.pointerType === 'touch') return;

    if (!hasMoved) {
      hasMoved = true;
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      dot.classList.add('is-active');
      document.documentElement.classList.add('has-custom-cursor');
    } else {
      xTo(e.clientX);
      yTo(e.clientY);
    }
  };

  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType === 'touch') return;
    dot.classList.add('is-down');
  };

  const onPointerUp = () => {
    dot.classList.remove('is-down');
  };

  const onPointerLeave = () => {
    dot.classList.remove('is-active');
  };

  const onPointerEnter = () => {
    if (hasMoved) {
      dot.classList.add('is-active');
    }
  };

  // Event delegation for interactive hover states across all pages & route changes
  const INTERACTIVE_SELECTOR = [
    'a',
    'button',
    '[role="button"]',
    'input',
    'textarea',
    'select',
    '.magnetic-btn',
    '.service-card',
    '.blog-card',
    '.contact-card',
    '[data-cursor-hover]',
  ].join(', ');

  const onPointerOver = (e: PointerEvent) => {
    const target = e.target as Element | null;
    if (!target) return;
    if (target.closest(INTERACTIVE_SELECTOR)) {
      dot.classList.add('hovering');
    } else {
      dot.classList.remove('hovering');
    }
  };

  const onPointerOut = (e: PointerEvent) => {
    const nextTarget = e.relatedTarget as Element | null;
    if (!nextTarget || !nextTarget.closest(INTERACTIVE_SELECTOR)) {
      dot.classList.remove('hovering');
    }
  };

  // Listeners
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerdown', onPointerDown, { passive: true });
  window.addEventListener('pointerup', onPointerUp, { passive: true });
  document.addEventListener('pointerover', onPointerOver, { passive: true });
  document.addEventListener('pointerout', onPointerOut, { passive: true });
  document.documentElement.addEventListener('pointerleave', onPointerLeave, { passive: true });
  document.documentElement.addEventListener('pointerenter', onPointerEnter, { passive: true });

  // Handle dynamic changes to reduced motion preferences
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const onMotionChange = (e: MediaQueryListEvent) => {
    if (e.matches) {
      destroy();
    }
  };
  motionQuery.addEventListener('change', onMotionChange);

  const destroy = () => {
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointerup', onPointerUp);
    document.removeEventListener('pointerover', onPointerOver);
    document.removeEventListener('pointerout', onPointerOut);
    document.documentElement.removeEventListener('pointerleave', onPointerLeave);
    document.documentElement.removeEventListener('pointerenter', onPointerEnter);
    motionQuery.removeEventListener('change', onMotionChange);

    document.documentElement.classList.remove('has-custom-cursor');
    dot.classList.remove('is-active', 'hovering', 'is-down');
    gsap.killTweensOf(dot);
  };

  return destroy;
}

/**
 * Magnetic button effect with rAF batching and duplicate attachment protection
 */
export function initMagneticButtons(): () => void {
  if (typeof window === 'undefined') return () => {};

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  if (prefersReducedMotion || isCoarse) return () => {};

  const cleanups: Array<() => void> = [];
  const buttons = document.querySelectorAll('.magnetic-btn');

  buttons.forEach((btnElement) => {
    const btn = btnElement as HTMLElement;

    // Guard against attaching duplicate listeners on page navigation
    if (btn.dataset.magneticBound === 'true') return;
    btn.dataset.magneticBound = 'true';

    // Add inner text wrapper if not exists for parallax effect
    if (!btn.querySelector('.magnetic-text')) {
      const text = btn.innerHTML;
      btn.innerHTML = `<span class="magnetic-text" style="display:inline-flex; align-items:center; gap:0.6rem; transition:transform 0.2s cubic-bezier(0.16, 1, 0.3, 1); pointer-events:none;">${text}</span>`;
    }

    const textSpan = btn.querySelector('.magnetic-text') as HTMLElement | null;

    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let targetTextX = 0;
    let targetTextY = 0;
    let resetTimer: ReturnType<typeof setTimeout> | null = null;

    const strength = 18;
    const textStrength = 9;

    const applyTransform = () => {
      btn.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      if (textSpan) {
        textSpan.style.transform = `translate3d(${targetTextX}px, ${targetTextY}px, 0)`;
      }
      rafId = null;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (resetTimer) {
        clearTimeout(resetTimer);
        resetTimer = null;
      }

      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      targetX = (dx / rect.width) * strength;
      targetY = (dy / rect.height) * strength;
      targetTextX = (dx / rect.width) * textStrength;
      targetTextY = (dy / rect.height) * textStrength;

      if (!rafId) {
        rafId = requestAnimationFrame(applyTransform);
      }
    };

    const onMouseLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      btn.style.transform = 'translate3d(0, 0, 0)';

      if (textSpan) {
        textSpan.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        textSpan.style.transform = 'translate3d(0, 0, 0)';
      }

      resetTimer = setTimeout(() => {
        btn.style.transition = '';
        if (textSpan) {
          textSpan.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
        }
      }, 500);
    };

    btn.addEventListener('mousemove', onMouseMove, { passive: true });
    btn.addEventListener('mouseleave', onMouseLeave, { passive: true });

    cleanups.push(() => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
      delete btn.dataset.magneticBound;
      if (rafId) cancelAnimationFrame(rafId);
      if (resetTimer) clearTimeout(resetTimer);
    });
  });

  return () => {
    cleanups.forEach((c) => c());
  };
}
