import React from 'react';

export interface StatProps {
  number: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Stat({ number, label, className, style }: StatProps) {
  const classes = ['stat', className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={style}>
      <span className="stat__n">{number}</span>
      <span className="stat__l">{label}</span>
    </div>
  );
}
