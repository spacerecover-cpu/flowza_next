import React from 'react';

export interface PanelProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Panel({ children, className, style }: PanelProps) {
  const classes = ['panel', className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
