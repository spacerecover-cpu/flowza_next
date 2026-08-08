import React from 'react';
import { RENTFLOW_SCOPE } from '@/lib/data/rentflow';

/**
 * What RentFlow does not do. Server component.
 *
 * This block occupies the slot a testimonial would occupy on the other product
 * pages, and its last item is the absence of a published customer quote and why.
 * That item is the most credible thing on the page. It must not be replaced with
 * a quote, a placeholder, or a substitute pull-quote.
 */
export function RentScope() {
  return (
    <div className="rfnot rv">
      <div className="rfnot__h">Out of scope, deliberately</div>
      <ul>
        {RENTFLOW_SCOPE.map((item) => (
          <li key={item.heading}>
            <i>—</i>
            <div>
              <b>{item.heading}</b>
              <span>{item.body}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
