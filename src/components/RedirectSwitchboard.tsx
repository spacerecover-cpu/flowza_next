'use client';

import React, { useState } from 'react';
import {
  QR_DESTINATIONS,
  QR_CARD_STAMP,
  QR_CODE_ID,
  cumulativeScans,
  formatScans,
} from '@/lib/data/qrforge';

export interface RedirectSwitchboardProps {
  /**
   * The printed matrix, rendered by the *server* component that wraps this one
   * and handed in as an already-built element. It is never constructed here, so
   * changing the destination cannot redraw it — which is the point being made.
   */
  matrix: React.ReactNode;
  /** Which destination in the code's life the switchboard opens on. */
  initialDestination?: number;
}

/**
 * One printed code, four destinations over its life.
 *
 * Left: the physical object, immutable. Right: the destination record, which
 * the visitor can switch through the four states the code has actually held —
 * each showing what changed, when, by whom, and that nothing was reprinted. The
 * scan total under the card is cumulative across every change, because the code
 * is the thing being measured and it never changed.
 */
export function RedirectSwitchboard({ matrix, initialDestination = 1 }: RedirectSwitchboardProps) {
  const [sel, setSel] = useState(initialDestination);

  const dest = QR_DESTINATIONS[sel];
  const running = cumulativeScans(sel);

  return (
    <>
      <div className="c-4 rv">
        <figure className="qfcard" style={{ margin: 0 }}>
          {matrix}
          <figcaption>{QR_CARD_STAMP}</figcaption>
          <div className="qfcard__tot">
            <span className="qfbig">{formatScans(running)}</span>
            <span>Scans recorded against this code, cumulative</span>
          </div>
        </figure>
        <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
          The symbol carries a short identifier. Every change below edits the record it points at, not
          the ink.
        </p>
      </div>

      <div className="c-8 rv rv-d2">
        <div
          className="row"
          style={{ gap: 'var(--s2)', marginBottom: 'var(--s5)' }}
          role="group"
          aria-label="Choose a destination in the life of this code"
        >
          {QR_DESTINATIONS.map((d, i) => (
            <button
              key={d.key}
              type="button"
              className="chip"
              aria-pressed={i === sel}
              onClick={() => setSel(i)}
            >
              {d.key}
            </button>
          ))}
        </div>

        <div className="qfsw" aria-live="polite">
          <div className="qfsw__hd">
            <div>
              <p className="qfsw__k">DESTINATION {sel + 1} OF {QR_DESTINATIONS.length}</p>
              <p className="qfsw__n">{dest.name}</p>
            </div>
            <span className="tag tag--sig">{dest.status}</span>
          </div>
          <p className="qfsw__u">{dest.url}</p>
          <div className="qfsw__rows">
            <div className="qfsw__r"><span>Changed</span><span>{dest.changed}</span></div>
            <div className="qfsw__r"><span>Reprinted</span><span>Nothing</span></div>
            <div className="qfsw__r">
              <span>Scans in this period</span>
              <span>{formatScans(dest.added)}</span>
            </div>
          </div>
          <p className="small qfsw__a">{dest.what} {dest.analysis}</p>
        </div>

        <p className="tiny" aria-live="polite" style={{ marginTop: 'var(--s4)' }}>
          Cumulative scans on {QR_CODE_ID} through destination {sel + 1} of {QR_DESTINATIONS.length}:{' '}
          {formatScans(running)}. The symbol has not been reissued.
        </p>
      </div>
    </>
  );
}
