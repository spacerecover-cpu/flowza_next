import React from 'react';

/**
 * An application check races. A constraint cannot.
 *
 * Server component — the drawing is static and carries its whole argument in
 * `aria-label`, so there is nothing to interact with and nothing to hydrate.
 * The left half has a window between the read and the write; the right half has
 * no read to be stale.
 */
export function ClubRaceDiagram() {
  return (
    <div className="clbrace rv">
      <div className="dscroll" style={{ ['--dmin' as string]: '880px' }}>
        <svg
          viewBox="0 0 900 348"
          role="img"
          aria-label="Two request timelines compared. On the left, an application check: both requests read the slot as free, then both insert, and because the read and the write are separate statements the result is two bookings in one slot. On the right, a database constraint: both requests insert directly, the first commits and the second is refused with SQLSTATE 23P01 and offered the waitlist, so the result is one booking and one waitlist. The conclusion is that validating in the application leaves a window between the check and the write, and a constraint leaves none."
        >
          <text className="ttl" x="20" y="26">APPLICATION CHECK</text>
          <text className="sub" x="20" y="46">READ, THEN WRITE · TWO STATEMENTS</text>
          <text className="bad" x="246" y="82" textAnchor="middle">THE WINDOW</text>
          <rect className="win" x="158" y="92" width="176" height="168" rx="2" />
          <line className="lane" x1="140" y1="120" x2="418" y2="120" />
          <line className="lane" x1="140" y1="220" x2="418" y2="220" />
          <text className="lb" x="20" y="124">REQ A · IYER</text>
          <text className="lb" x="20" y="224">REQ B · FERNANDES</text>
          <g className="flow">
            <path d="M176 120H334" />
            <path d="M176 220H334" />
          </g>
          <g className="node">
            <circle cx="176" cy="120" r="6" />
            <circle cx="176" cy="220" r="6" />
          </g>
          <text className="lb" x="166" y="144">SELECT · FREE</text>
          <text className="lb" x="166" y="244">SELECT · FREE</text>
          <g className="nol">
            <path d="M334 120H390" />
            <path d="M334 220H390" />
          </g>
          <g className="nof">
            <polygon points="390,116 400,120 390,124" />
            <polygon points="390,216 400,220 390,224" />
          </g>
          <text className="bad" x="340" y="110">INSERT · OK</text>
          <text className="bad" x="340" y="210">INSERT · OK</text>
          <text className="bad" x="20" y="298">RESULT · TWO BOOKINGS, ONE SLOT</text>
          <text className="sub" x="20" y="320">THE SECOND WRITE NEVER SEES THE FIRST. THE FRONT DESK</text>
          <text className="sub" x="20" y="336">FINDS OUT WHEN BOTH MEMBERS ARRIVE.</text>

          <line className="div" x1="450" y1="14" x2="450" y2="340" />

          <text className="ttl" x="474" y="26">DATABASE CONSTRAINT</text>
          <text className="sub" x="474" y="46">THE WRITE IS THE CHECK · ONE STATEMENT</text>
          <text className="gud" x="474" y="82">NO WINDOW EXISTS TO RACE THROUGH</text>
          <line className="lane" x1="596" y1="120" x2="876" y2="120" />
          <line className="lane" x1="596" y1="220" x2="876" y2="220" />
          <text className="lb" x="474" y="124">REQ A · IYER</text>
          <text className="lb" x="474" y="224">REQ B · FERNANDES</text>
          <g className="node">
            <circle cx="632" cy="120" r="6" />
            <circle cx="632" cy="220" r="6" />
          </g>
          <text className="lb" x="618" y="144">INSERT</text>
          <text className="lb" x="618" y="244">INSERT</text>
          <line className="gate" x1="740" y1="98" x2="740" y2="266" />
          <text className="gud" x="750" y="94">booking_no_overlap</text>
          <g className="okl">
            <path d="M632 120H842" />
          </g>
          <polygon className="okf" points="842,116 852,120 842,124" />
          <text className="gud" x="752" y="144">COMMIT</text>
          <g className="nol">
            <path d="M632 220H726" />
          </g>
          <text className="bad" x="632" y="206">REFUSED · 23P01</text>
          <g className="nol">
            <path d="M676 220V288H802" />
          </g>
          <polygon className="nof" points="802,284 812,288 802,292" />
          <text className="bad" x="686" y="282">WAITLIST · POSITION 1</text>
          <text className="gud" x="474" y="320">RESULT · ONE BOOKING, ONE WAITLIST</text>
          <text className="sub" x="474" y="336">AUTO-PROMOTES THE MOMENT THE BOOKING IS CANCELLED.</text>
        </svg>
      </div>
    </div>
  );
}
