'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

export interface CountUpProps {
  target: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ target, decimalPlaces = 0, prefix = '', suffix = '', className }: CountUpProps) {
  const [display, setDisplay] = useState(prefix + (0).toFixed(decimalPlaces));
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return;

    function run() {
      done.current = true;
      if (reduced) {
        setDisplay(prefix + target.toLocaleString('en-US', { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces }));
        return;
      }
      const start = performance.now();
      const dur = 1100;
      function tick(now: number) {
        const p = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        const val = target * e;
        const formatted = val.toLocaleString('en-US', {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        });
        setDisplay(prefix + formatted);
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, decimalPlaces, prefix, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
