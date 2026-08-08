'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Drives the `.rv` → `.rv.in` scroll reveal for the whole site.
 *
 * The design system ships `.rv { opacity: 0 }` and only reveals an element once
 * `.in` is added. The `Reveal` component does that for elements it wraps, but
 * most of the site writes `className="rv"` directly on an existing element —
 * a grid column, a panel, a table wrapper — where wrapping it in another div
 * would break the layout it sits in. Without this observer those elements stay
 * at `opacity: 0` and the page renders blank below the fold.
 *
 * Mounted once in the root layout. It re-scans on navigation because the App
 * Router keeps the layout mounted across route changes, so a fresh page's
 * elements would otherwise never be observed.
 *
 * Safe alongside `Reveal`: both only ever add `.in`, and each unobserves on
 * first intersection.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('.rv:not(.in)')
    );
    if (nodes.length === 0) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // No animation to run, or no observer to run it with: show everything now.
    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
