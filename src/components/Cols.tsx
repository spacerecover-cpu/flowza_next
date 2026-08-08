import React from 'react';

export interface ColsProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Cols({ children, className, style }: ColsProps) {
  const classes = ['cols', className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
