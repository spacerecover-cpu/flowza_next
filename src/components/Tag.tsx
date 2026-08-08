import React from 'react';

type TagVariant = 'default' | 'sig' | 'ai';

export interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
  style?: React.CSSProperties;
  /** Kept so a ported set piece can carry the site's own element id. */
  id?: string;
}

export function Tag({ children, variant = 'default', className, style, id }: TagProps) {
  const classes = [
    'tag',
    variant === 'sig' ? 'tag--sig' : '',
    variant === 'ai' ? 'tag--ai' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <span className={classes} style={style} id={id}>
      {children}
    </span>
  );
}
