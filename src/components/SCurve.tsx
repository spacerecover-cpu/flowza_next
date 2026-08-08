import React from 'react';

export function SCurve() {
  return (
    <svg
      className="dgm scv"
      viewBox="0 0 600 300"
      role="img"
      aria-label="S-curve for job 4412 over twelve months. Actual cost runs ahead of the plan throughout. Certified revenue trails actual cost by up to fourteen percentage points around month seven, which is the peak of the unbilled position."
    >
      <g className="grid">
        <path d="M60 40H560" />
        <path d="M60 90H560" />
        <path d="M60 140H560" />
        <path d="M60 190H560" />
        <path d="M60 240H560" />
      </g>
      <polygon
        className="wedge"
        points="60,232 105,220 151,202 196,178 242,150 287,124 333,100 378,80 424,64 469,52 515,44 560,40 560,46 515,60 469,74 424,90 378,108 333,128 287,150 242,172 196,196 151,216 105,228 60,236"
      />
      <path className="planned" d="M60 234L105 224L151 208L196 186L242 160L287 134L333 110L378 90L424 72L469 58L515 48L560 40" />
      <path className="actual"  d="M60 232L105 220L151 202L196 178L242 150L287 124L333 100L378 80L424 64L469 52L515 44L560 40" />
      <path className="certified" d="M60 236L105 228L151 216L196 196L242 172L287 150L333 128L378 108L424 90L469 74L515 60L560 46" />
      <g stroke="var(--sig-amber)" strokeWidth="1.2">
        <path d="M333 100V128" />
      </g>
      <circle cx="333" cy="100" r="3" fill="var(--fg)" />
      <circle cx="333" cy="128" r="3" fill="var(--sig)" />
      <text x="340" y="118" fill="var(--sig-amber)" fontSize="9">14 PTS UNBILLED</text>
      <g>
        <text x="56"  y="258">M1</text>
        <text x="238" y="258">M6</text>
        <text x="420" y="258">M10</text>
        <text x="552" y="258">M12</text>
        <text x="20"  y="44">100%</text>
        <text x="26"  y="244">0%</text>
      </g>
      <g className="key">
        <text x="60"  y="284" fill="var(--fg-3)">- - PLANNED COST</text>
        <text x="200" y="284" fill="var(--fg)">— ACTUAL COST</text>
        <text x="330" y="284" fill="var(--sig)">— CERTIFIED REVENUE</text>
      </g>
    </svg>
  );
}
