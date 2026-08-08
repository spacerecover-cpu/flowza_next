import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  raised?: boolean;
  small?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ children, raised, small, className, style }: CardProps) {
  const classes = [
    'card',
    raised ? 'card--raise' : '',
    small ? 'card--pad-s' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
