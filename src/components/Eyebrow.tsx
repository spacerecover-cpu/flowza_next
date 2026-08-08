import React from 'react';

export interface EyebrowProps {
  children: React.ReactNode;
  plain?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Eyebrow({ children, plain, className, style }: EyebrowProps) {
  const classes = ['eyebrow', plain ? 'eyebrow--plain' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <p className={classes} style={style}>
      {children}
    </p>
  );
}
