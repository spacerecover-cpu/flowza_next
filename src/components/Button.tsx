'use client';
// Accepts an onClick, so it must be a client component — a server-rendered
// caller passing a handler would otherwise fail at render time.

import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'ghost' | 'text';
type ButtonSize = 'default' | 'sm';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaPressed?: boolean;
  ariaLabel?: string;
}

export function Button({
  variant = 'primary',
  size = 'default',
  href,
  children,
  className,
  style,
  onClick,
  type = 'button',
  ariaPressed,
  ariaLabel,
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size === 'sm' ? 'btn--sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={classes} style={style} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={style}
      onClick={onClick}
      aria-pressed={ariaPressed}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
