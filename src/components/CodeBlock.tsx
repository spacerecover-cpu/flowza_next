import React from 'react';

export interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CodeBlock({ children, className, style }: CodeBlockProps) {
  const classes = ['code', className].filter(Boolean).join(' ');
  return (
    <pre className={classes} style={style}>
      {children}
    </pre>
  );
}
