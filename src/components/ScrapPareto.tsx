import React from 'react';

export function ScrapPareto() {
  return (
    <div className="panel rv" style={{ padding: 'var(--s6)' }}>
      <div className="dscroll" style={{ ['--dmin' as string]: '600px' }}>
        <svg
          className="dgm pto"
          viewBox="0 0 600 250"
          role="img"
          aria-label="Pareto chart of scrap causes. Weld porosity 38 percent, dimensional 24, coating defect 14, material 10, handling 8, other 6. Cumulatively the first three causes reach 76 percent and the fourth passes 80 percent."
        >
          <path d="M60 190H580" stroke="var(--edge)" strokeWidth="1" />
          <g stroke="var(--edge-2)" strokeWidth="1">
            <path d="M60 40H580" />
            <path d="M60 90H580" />
            <path d="M60 140H580" />
          </g>
          {/* 80% reference line — path carries .pref class; label is a plain text without .pref */}
          <path className="pref" d="M60 70H570" />
          <text
            x="570"
            y="64"
            fontSize="8"
            fill="var(--sig-amber)"
            textAnchor="end"
            fontFamily="IBM Plex Mono, monospace"
          >
            80% OF SCRAP VALUE
          </text>
          <g>
            <rect className="pb" x="70" y="50" width="60" height="140" />
            <rect className="pb" x="158" y="101.6" width="60" height="88.4" />
            <rect className="pb" x="246" y="138.4" width="60" height="51.6" />
            <rect className="pb tail" x="334" y="153.2" width="60" height="36.8" />
            <rect className="pb tail" x="422" y="160.5" width="60" height="29.5" />
            <rect className="pb tail" x="510" y="167.9" width="60" height="22.1" />
          </g>
          <path className="pl" d="M100 133L188 97L276 76L364 61L452 49L540 40" />
          <g fill="var(--graphite)">
            <circle cx="100" cy="133" r="3" />
            <circle cx="188" cy="97" r="3" />
            <circle cx="276" cy="76" r="3" />
            <circle cx="364" cy="61" r="3" />
            <circle cx="452" cy="49" r="3" />
            <circle cx="540" cy="40" r="3" />
          </g>
          <g fontSize="9" fill="var(--fg)" fontFamily="IBM Plex Mono, monospace">
            <text x="82" y="44">38%</text>
            <text x="170" y="96">24%</text>
            <text x="258" y="132">14%</text>
            <text x="346" y="147">10%</text>
            <text x="438" y="155">8%</text>
            <text x="526" y="162">6%</text>
          </g>
          <g fontSize="8" fill="var(--fg-3)" fontFamily="IBM Plex Mono, monospace">
            <text x="70" y="206">WELD</text>
            <text x="70" y="216">POROSITY</text>
            <text x="158" y="206">DIMEN-</text>
            <text x="158" y="216">SIONAL</text>
            <text x="246" y="206">COATING</text>
            <text x="246" y="216">DEFECT</text>
            <text x="334" y="206">MATERIAL</text>
            <text x="422" y="206">HANDLING</text>
            <text x="510" y="206">OTHER</text>
            <text x="60" y="240">— CUMULATIVE SHARE OF SCRAP VALUE</text>
          </g>
        </svg>
      </div>
      <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
        Weld porosity is both the largest scrap cause and the constraint station, which is the worst combination available — every rejected weld consumes capacity the whole line is waiting for. Fixing it twice over: fewer rejects and more throughput from the same shift.
      </p>
    </div>
  );
}
