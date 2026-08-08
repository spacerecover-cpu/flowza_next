import React from 'react';
import { POSTING_LINES } from '@/lib/data/pos';

/**
 * What the sale on the receipt writes into Flowza Finance. Two systems on one
 * data layer: POS owns the sale, Finance owns the ledger, and there is no export
 * file between them.
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
