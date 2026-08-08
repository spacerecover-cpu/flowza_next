import React from 'react';
import { POSTING_LINES } from '@/lib/data/pos';

/**
 * What the sale on the receipt records inside FlowZa POS: the stock movement,
 * the revenue split, the tax, the tender and the customer's history, all written
 * as the sale clears rather than reconstructed later.
 *
 * Rendered as a flat run of rows rather than a wrapper, because the site sets
 * the keyline off the last row rather than off a container.
 */
export function PostingList() {
  const last = POSTING_LINES.length - 1;
  return (
    <>
      {POSTING_LINES.map((line, i) => (
        <div
          className="posting"
          key={line.kind}
          style={i === last ? { borderBottom: 0 } : undefined}
        >
          <span className="posting__k">{line.kind}</span>
          <span>{line.label}</span>
          <span className="posting__v">{line.value}</span>
        </div>
      ))}
    </>
  );
}
