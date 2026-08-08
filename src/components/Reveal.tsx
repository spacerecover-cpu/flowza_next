'use client';

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

export interface RevealProps {
  children: React.ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

export function Reveal({ children, delay, className, style, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const classes = [
    'rv',
    delay ? `rv-d${delay}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.classList.add('in');
      return;
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    // @ts-expect-error -- dynamic tag
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  );
}
