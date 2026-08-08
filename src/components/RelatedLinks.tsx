import React from 'react';
import Link from 'next/link';

export interface RelatedLink {
  href: string;
  title: string;
  subtitle: string;
}

export interface RelatedLinksProps {
  links: RelatedLink[];
  className?: string;
  style?: React.CSSProperties;
}

export function RelatedLinks({ links, className, style }: RelatedLinksProps) {
  const classes = ['rel', className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={style}>
      {links.map((link, i) => (
        <Link key={i} href={link.href}>
          <strong>{link.title}</strong>
          <span className="tiny">{link.subtitle}</span>
        </Link>
      ))}
    </div>
  );
}
