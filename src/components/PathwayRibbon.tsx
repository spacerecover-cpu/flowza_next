import React from 'react';
import { PATHWAY_STAGES, totalDays, totalTouch } from '@/lib/data/pathway';

/** SVG viewport constants */
const SVG_W = 600;
const SVG_H = 230;
const X_START = 60;
const X_END = 560;
const BAR_Y = 40;
const BAR_H = 34;
const USABLE_W = X_END - X_START; // 500px

export function PathwayRibbon() {
  const total = totalDays(PATHWAY_STAGES);
  const touch = totalTouch(PATHWAY_STAGES);
  const pctTouch = ((touch / total) * 100).toFixed(1);

  // Build segments with computed x offsets
  type Seg = { waitW: number; touchW: number; waitX: number; touchX: number; name: string };
  let cursor = X_START;
  const segments: Seg[] = PATHWAY_STAGES.map((st) => {
    const waitW = (st.waitDays / total) * USABLE_W;
    const touchW = (st.touchDays / total) * USABLE_W;
    const waitX = cursor;
    const touchX = cursor + waitW;
    cursor += waitW + touchW;
    return { waitW, touchW, waitX, touchX, name: st.name };
  });

  // Label positions (midpoint of wait segment)
  const labelYA = 98; // alternating
  const labelYB = 114;

  // aria description
  const ariaLabel = `Elective care pathway showing median elapsed days per stage. ${PATHWAY_STAGES.map(s => `${s.name.charAt(0) + s.name.slice(1).toLowerCase()} ${s.waitDays} days`).join(', ')}, totalling ${total.toFixed(1)} days with ${touch.toFixed(1)} days of actual clinical contact.`;

  return (
    <svg
      className="dgm pw"
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      role="img"
      aria-label={ariaLabel}
    >
      {/* ribbon bars */}
      {segments.map((seg) => (
        <React.Fragment key={seg.name}>
          <rect className="wait"  x={seg.waitX}  y={BAR_Y} width={seg.waitW}  height={BAR_H} rx="1" />
          <rect className="touch" x={seg.touchX} y={BAR_Y} width={seg.touchW} height={BAR_H} />
        </React.Fragment>
      ))}

      {/* leader lines */}
      <g className="lead">
        {segments.map((seg, i) => {
          const midX = (seg.waitX + seg.touchX) / 2;
          const lineY2 = i % 2 === 0 ? 88 : 104;
          return <path key={seg.name} d={`M${midX.toFixed(1)} ${BAR_Y + BAR_H}V${lineY2}`} />;
        })}
      </g>

      {/* stage labels */}
      <g className="stage">
        {segments.map((seg, i) => {
          const midX = (seg.waitX + seg.touchX) / 2;
          const labelY = i % 2 === 0 ? labelYA : labelYB;
          const waitDays = PATHWAY_STAGES[i].waitDays;
          return (
            <text key={seg.name} x={(midX - 30).toFixed(1)} y={labelY}>
              {seg.name} {waitDays}d
            </text>
          );
        })}
      </g>

      {/* big stat */}
      <text x="60" y="176" className="big">{pctTouch}%</text>
      <text x="60" y="192" className="bigl">
        OF ELAPSED TIME IS CLINICAL CONTACT · {touch.toFixed(1)} OF {total.toFixed(1)} DAYS
      </text>

      {/* key */}
      <g className="keyl">
        <rect className="touch" x="60"  y="204" width="12" height="10" />
        <text x="78"  y="213" fill="var(--sig)">CONTACT</text>
        <rect className="wait"  x="150" y="204" width="12" height="10" />
        <text x="168" y="213" fill="var(--fg-3)">WAITING</text>
      </g>
    </svg>
  );
}
