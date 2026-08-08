import React from 'react';

export interface KeylineItem {
  heading: string;
  body: React.ReactNode;
}

export interface KeylineListProps {
  items: KeylineItem[];
  twoCol?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function KeylineList({ items, twoCol, className, style }: KeylineListProps) {
  const classes = ['klist', twoCol ? 'klist--2' : '', className].filter(Boolean).join(' ');
  return (
    <ul className={classes} style={style}>
      {items.map((item, i) => (
        <li key={i}>
          <h3>{item.heading}</h3>
          <p className="small">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
