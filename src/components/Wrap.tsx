import React from 'react';

export interface WrapProps {
  children: React.ReactNode;
  tight?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Wrap({ children, tight, className, style }: WrapProps) {
  const classes = ['wrap', tight ? 'wrap--tight' : '', className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
