import React from 'react';

/**
 * Chrome reused across the nine product pages.
 *
 * These are deliberately atoms, not a page template. Nine independent products
 * sharing a layout would read as one product with nine skins, which is the
 * opposite of what the positioning claims. What they share is the design
 * system: the same badge row, the same four published numbers, the same
 * treatment for an attributed quote.
 */

/** The subdomain a product runs on. Nine applications means nine apps. */
export function AppLink({ host, className }: { host: string; className?: string }) {
  return (
    <a
      className={['applink', className].filter(Boolean).join(' ')}
      href={`https://${host}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i aria-hidden="true" />
      {host}
    </a>
  );
}

/** The catalogue badges for a product, e.g. "Offline mode · Multi-location". */
export function ProductBadges({ badges }: { badges: readonly string[] }) {
  return (
    <p className="pbadges">
      {badges.map((b) => (
        <span className="tag" key={b}>
          {b}
        </span>
      ))}
    </p>
  );
}

export interface Metric {
  /** The figure itself, exactly as published. */
  value: string;
  /** What it measures. Sentence case, no full stop. */
  label: string;
}

/**
 * The four published statistics for a product. Only ever fed from the
 * catalogue — scenario numbers elsewhere on a page are captioned as
 * illustrative and never appear here.
 */
export function Metrics({ items }: { items: readonly Metric[] }) {
  return (
    <div className="metrics">
      {items.map((m) => (
        <div key={m.label}>
          <div className="metrics__n">{m.value}</div>
          <div className="metrics__l">{m.label}</div>
        </div>
      ))}
    </div>
  );
}

export interface QuoteProps {
  /** Verbatim. Never edited, re-spelled or trimmed. */
  children: React.ReactNode;
  name: string;
  role: string;
}

/**
 * An attributed customer quote. Render this only where a real, named,
 * cleared quote exists — two of the nine products deliberately have none,
 * and those pages say so in words rather than showing a substitute.
 */
export function Quote({ children, name, role }: QuoteProps) {
  return (
    <figure className="quote">
      <blockquote>
        <p>{children}</p>
      </blockquote>
      <figcaption>
        <b>{name}</b>
        {role}
      </figcaption>
    </figure>
  );
}
