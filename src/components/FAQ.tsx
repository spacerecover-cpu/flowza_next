import React from 'react';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface FAQProps {
  items: FAQItem[];
  className?: string;
  style?: React.CSSProperties;
}

export function FAQ({ items, className, style }: FAQProps) {
  const classes = ['faq', className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={style}>
      {items.map((item, i) => (
        <details key={i}>
          <summary>{item.question}</summary>
          <div className="faq__a">
            <p className="small">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
