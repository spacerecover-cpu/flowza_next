import React from 'react';

/** Hours (UTC) each office desk is staffed. */
export interface Desk {
  city: string;
  fromHour: number;
  toHour: number;
}

const HOUR_X = 800 / 24;
const x = (hour: number) => 60 + hour * HOUR_X;

/**
 * Desk hours in UTC, derived from local office hours:
 * Bengaluru (UTC+5:30) 09:30–18:30, Muscat (UTC+4) 09:00–18:00,
 * Dubai (UTC+4) 09:00–19:00. The three offices sit within ninety minutes of
 * each other, so the staffed band is a working day rather than a follow-the-sun
 * rota — the chart says so rather than implying otherwise.
 */
const DESKS: Desk[] = [
  { city: 'BENGALURU', fromHour: 4, toHour: 13 },
  { city: 'MUSCAT', fromHour: 5, toHour: 14 },
  { city: 'DUBAI', fromHour: 5, toHour: 15 },
];

/** Union of all desk hours — everything outside this is the on-call window. */
const DESK_FROM = Math.min(...DESKS.map((d) => d.fromHour));
const DESK_TO = Math.max(...DESKS.map((d) => d.toHour));

export interface CoverageBandProps {
  className?: string;
}

export function CoverageBand({ className }: CoverageBandProps) {
  const ticks = [0, 4, 8, 12, 16, 20, 24];

  return (
    <svg
      className={['dgm', 'cov', className].filter(Boolean).join(' ')}
      viewBox="0 0 900 230"
      role="img"
      aria-label={`Support coverage across a day in UTC. Bengaluru is staffed 04:00 to 13:00, Muscat 05:00 to 14:00, Dubai 05:00 to 15:00. Combined desk coverage runs ${String(DESK_FROM).padStart(2, '0')}:00 to ${DESK_TO}:00, leaving the remaining ${24 - (DESK_TO - DESK_FROM)} hours from ${DESK_TO}:00 to ${String(DESK_FROM).padStart(2, '0')}:00 handled by an on-call rota.`}
    >
      <g className="tick">
        {ticks.map((t) => (
          <path key={t} d={`M${x(t)} 40V196`} />
        ))}
      </g>
      <g className="ax">
        {ticks.map((t) => (
          <text key={t} x={x(t) - 8} y="32">
            {String(t).padStart(2, '0')}
          </text>
        ))}
        <text x="60" y="222">HOURS · UTC</text>
      </g>

      {DESKS.map((d, i) => (
        <React.Fragment key={d.city}>
          <text x="0" y={65 + i * 40} className="off">{d.city}</text>
          <rect
            className="bar"
            x={x(d.fromHour)}
            y={52 + i * 40}
            width={(d.toHour - d.fromHour) * HOUR_X}
            height="20"
            rx="2"
          />
        </React.Fragment>
      ))}

      <path className="rule" d="M60 166H860" />
      <text x="0" y="188" className="off">DESK</text>
      <rect className="band" x={x(DESK_FROM)} y="176" width={(DESK_TO - DESK_FROM) * HOUR_X} height="16" rx="2" />
      <rect className="gap" x={x(0)} y="176" width={DESK_FROM * HOUR_X} height="16" rx="2" />
      <rect className="gap" x={x(DESK_TO)} y="176" width={(24 - DESK_TO) * HOUR_X} height="16" rx="2" />
      <text x="640" y="212" className="lab" fill="var(--sig-amber)">
        ON-CALL {DESK_TO}:00–{String(DESK_FROM).padStart(2, '0')}:00
      </text>
    </svg>
  );
}
