'use client';
// Accepts an onClick, so it must be a client component — a server-rendered
// caller passing a handler would otherwise fail at render time.

import React from 'react';

export interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  'data-flow'?: string;
  'data-pf'?: string;
}

export function Chip({ children, active, onClick, className, style, ...dataProps }: ChipProps) {
  const classes = ['chip', active ? 'is-on' : '', className].filter(Boolean).join(' ');
  return (
    <button
      type="button"
      className={classes}
      style={style}
      onClick={onClick}
      aria-pressed={active}
      {...dataProps}
    >
      {children}
    </button>
  );
}
