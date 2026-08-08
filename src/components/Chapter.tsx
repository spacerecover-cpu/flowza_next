import React from 'react';

type ChapterVariant = 'default' | 'instrument' | 'raised' | 'flush';

export interface ChapterProps {
  children: React.ReactNode;
  variant?: ChapterVariant;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  net?: boolean;
  netFull?: boolean;
}

export function Chapter({
  children,
  variant = 'default',
  id,
  className,
  style,
  net,
  netFull,
}: ChapterProps) {
  const classes = [
    'chapter',
    variant === 'instrument' ? 'chapter--instrument' : '',
    variant === 'raised' ? 'chapter--raised' : '',
    variant === 'flush' ? 'chapter--flush' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} id={id} style={style}>
      {net && (
        <div className={`net${netFull ? ' net--full' : ''}`} aria-hidden="true" />
      )}
      {children}
    </div>
  );
}
