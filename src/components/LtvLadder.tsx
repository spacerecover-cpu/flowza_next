import React from 'react';
import { LTV_POINTS } from '@/lib/data/cohorts';

export function LtvLadder() {
  // Build the step path from the points
  const pts = LTV_POINTS;
  // step path: horizontal then vertical for each pair
  let d = `M${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    d += `H${pts[i].x}V${pts[i].y}`;
  }
  // last segment to right edge
  d += `H560`;

  // fill area under step
  const fillD = `${d}V200H60Z`;

  return (
    <svg
      className="dgm ltv"
      viewBox="0 0 600 250"
      role="img"
      aria-label="Cumulative contribution per guest: 186 after one visit, 512 after three, 1,024 after six and 2,180 after twelve."
    >
      <g className="grid">
        <path d="M60 50H560" />
        <path d="M60 100H560" />
        <path d="M60 150H560" />
        <path d="M60 200H560" />
      </g>
      <path className="fillu" d={fillD} />
      <path className="step" d={d} />
      <g className="v">
        <text x="66"  y="180">AED 186</text>
        <text x="186" y="158">512</text>
        <text x="306" y="122">1,024</text>
        <text x="436" y="43">2,180</text>
      </g>
      <g className="x">
        <text x="66"  y="218">VISIT 1</text>
        <text x="186" y="218">BY VISIT 3</text>
        <text x="306" y="218">BY VISIT 6</text>
        <text x="436" y="218">BY VISIT 12</text>
        <text x="60"  y="238">CUMULATIVE CONTRIBUTION PER GUEST</text>
      </g>
    </svg>
  );
}
