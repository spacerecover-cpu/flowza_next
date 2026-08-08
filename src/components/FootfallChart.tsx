import React from 'react';

export interface FootfallChartProps {
  className?: string;
}

export function FootfallChart({ className }: FootfallChartProps) {
  return (
    <div className={`panel rv${className ? ` ${className}` : ''}`} style={{ padding: 'var(--s6)' }}>
      <div className="dscroll" style={{ ['--dmin' as string]: '620px' }}>
        <svg
          className="dgm"
          viewBox="0 0 600 230"
          role="img"
          aria-label="Chart comparing hourly footfall against staffed hours. Demand exceeds cover at 11:00 and again between 16:00 and 17:00, while 09:00 and 18:00 are overstaffed."
        >
          <g stroke="var(--edge-2)" strokeWidth="1">
            <path d="M40 170H570" />
            <path d="M40 130H570" />
            <path d="M40 90H570" />
            <path d="M40 50H570" />
          </g>
          <g fill="rgba(227,155,60,.16)">
            <rect x="146" y="40" width="53" height="130" />
            <rect x="358" y="40" width="106" height="130" />
          </g>
          <path
            d="M40 105H93V105H146V79H199V79H252V92H305V92H358V66H411V66H464V118H517V118H570"
            fill="none"
            stroke="var(--on-dark-2)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <path
            d="M66 131L119 98L172 69L225 50L278 79L331 88L384 60L437 40L490 56L543 113"
            fill="none"
            stroke="var(--sig)"
            strokeWidth="2"
          />
          <g fill="var(--sig)">
            <circle cx="172" cy="69" r="3" />
            <circle cx="437" cy="40" r="3" />
          </g>
          <g fontSize="8.5" fill="var(--fg-3)" fontFamily="IBM Plex Mono, monospace">
            <text x="58" y="188">09</text>
            <text x="111" y="188">10</text>
            <text x="164" y="188">11</text>
            <text x="217" y="188">12</text>
            <text x="270" y="188">13</text>
            <text x="323" y="188">14</text>
            <text x="376" y="188">15</text>
            <text x="429" y="188">16</text>
            <text x="482" y="188">17</text>
            <text x="535" y="188">18</text>
          </g>
          <g fontSize="9" fontFamily="IBM Plex Mono, monospace">
            <text x="40" y="212" fill="var(--sig)">— FOOTFALL</text>
            <text x="150" y="212" fill="var(--fg-3)">-- STAFFED HOURS</text>
            <text x="300" y="212" fill="var(--sig-amber)">▨ DEMAND ABOVE COVER</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
