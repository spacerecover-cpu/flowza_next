'use client';

import React, { useState } from 'react';
import { CLUB_VERTICALS } from '@/lib/data/club';

/**
 * Six facility verticals: what changes, and what does not.
 *
 * Client component for the chip selector, because the answer panel and the
 * chips share one selection. The column of things that do not change is passed
 * in as `children` so it stays a server render — it is the same for all six by
 * definition, and putting it here would say the opposite.
 */
export interface ClubVerticalsProps {
  /** The "Constant across all six" panel. */
  children?: React.ReactNode;
}

export function ClubVerticals({ children }: ClubVerticalsProps) {
  const [sel, setSel] = useState(0);
  const v = CLUB_VERTICALS[sel];

  return (
    <>
      <div className="clbv" role="group" aria-label="Choose a facility vertical">
        {CLUB_VERTICALS.map((vert, i) => (
          <button
            type="button"
            className="chip"
            key={vert.name}
            aria-pressed={sel === i}
            onClick={() => setSel(i)}
          >
            {vert.name}
          </button>
        ))}
      </div>

      <div className="cols" style={{ alignItems: 'stretch' }}>
        <div className="c-7 rv">
          <div className="clbvo" aria-live="polite">
            <div className="clbvo__h">
              <p className="clbvo__t">{v.name}</p>
              <span className="tag tag--sig">Licensed independently</span>
            </div>
            <div className="clbvo__g">
              <div>
                <p className="clbvo__k">The bookable resource</p>
                <p className="clbvo__val">{v.resource}</p>
              </div>
              <div>
                <p className="clbvo__k">The unit of time</p>
                <p className="clbvo__val">{v.unit}</p>
              </div>
              <div>
                <p className="clbvo__k">How it is priced</p>
                <p className="clbvo__val">{v.pricing}</p>
              </div>
              <div>
                <p className="clbvo__k">Enforced beyond overlap</p>
                <p className="clbvo__val">{v.beyondOverlap}</p>
              </div>
            </div>
            <div className="clbvo__n">
              <p className="clbvo__k">One booking, as it reads on the calendar</p>
              <p className="mono" style={{ fontSize: '.75rem', color: 'var(--fg)' }}>{v.example}</p>
            </div>
          </div>
        </div>
        <div className="c-5 rv rv-d2">{children}</div>
      </div>
    </>
  );
}
