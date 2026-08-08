'use client';

import React, { createContext, useContext, useState } from 'react';
import { LANES, laneX, laneY, bubbleRadius } from '@/lib/data/lanes';
import { ItemEconomicsPanel } from '@/components/ItemEconomicsPanel';

/* ------------------------------------------------------------------ context */

interface LaneCtx {
  selected: number;
  setSelected: (i: number) => void;
}

const LaneContext = createContext<LaneCtx>({ selected: 6, setSelected: () => undefined });

/* ------------------------------------------------------------------ provider */

export interface LaneExplorerProps {
  children: React.ReactNode;
  initialIndex?: number;
}

export function LaneExplorer({ children, initialIndex = 6 }: LaneExplorerProps) {
  const [selected, setSelected] = useState(initialIndex);
  return (
    <LaneContext.Provider value={{ selected, setSelected }}>
      {children}
    </LaneContext.Provider>
  );
}

/* ------------------------------------------------------------------ quadrant SVG */

const MX = laneX(200);
const MY = laneY(18);

export function LaneQuadrant() {
  const { selected, setSelected } = useContext(LaneContext);

  function handleKey(e: React.KeyboardEvent, i: number) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelected(i);
    }
  }

  return (
    <div className="dscroll" style={{ ['--dmin' as string]: '600px' }}>
      <svg
        className="dgm quad"
        viewBox="0 0 600 460"
        role="img"
        aria-label="Quadrant chart plotting eight freight lanes by monthly volume against margin. Riyadh to Dammam carries the highest volume on a nine percent margin; Salalah to Muscat is loss making; Dubai to Muscat has the best margin on the lowest volume."
      >
        <g className="qdiv">
          <path d={`M${MX.toFixed(1)} 40V390`} />
          <path d={`M60 ${MY.toFixed(1)}H570`} />
        </g>
        <path d="M60 390H570" stroke="var(--edge)" strokeWidth="1" />
        <path d="M60 40V390" stroke="var(--edge)" strokeWidth="1" />
        <g className="qlab">
          <text x="76" y="58">PROTECT · HIGH MARGIN, LOW VOLUME</text>
          <text x={MX + 16} y="58">SCALE</text>
          <text x="76" y="382">EXIT OR REPRICE</text>
          <text x={MX + 16} y="382">FIX THE PRICE</text>
        </g>
        <g className="qax">
          <text x="60" y="418">LOADS PER MONTH →</text>
          <text x="60" y="434">BUBBLE AREA = MONTHLY REVENUE</text>
          <text transform="translate(52,220) rotate(-90)" textAnchor="middle">MARGIN % →</text>
        </g>
        {LANES.map((l, i) => {
          const cx = laneX(l.vol);
          const cy = laneY(l.mg);
          const r = bubbleRadius(l.rev);
          const right = cx > 430;
          const isOn = i === selected;
          return (
            <g
              key={i}
              className={`lb${l.mg < 0 ? ' neg' : ''}${isOn ? ' is-on' : ''}`}
              role="button" aria-pressed={selected === i}
              tabIndex={0}
              aria-label={`${l.n}, ${l.vol} loads, ${l.mg} per cent margin`}
              onClick={() => setSelected(i)}
              onKeyDown={(e) => handleKey(e, i)}
            >
              <circle cx={cx.toFixed(1)} cy={cy.toFixed(1)} r={r.toFixed(1)} />
              <text
                x={right ? (cx - r - 6).toFixed(1) : (cx + r + 6).toFixed(1)}
                y={(cy + 3).toFixed(1)}
                textAnchor={right ? 'end' : undefined}
              >
                {l.c}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ panel */

export function LanePanel() {
  const { selected } = useContext(LaneContext);
  const l = LANES[selected];
  return (
    <div aria-live="polite">
      <ItemEconomicsPanel
        eyebrow={`LANE · ${l.c}`}
        title={l.n}
        cells={[
          { label: 'Sell rate', value: `AED ${l.rate.toLocaleString('en-US')}` },
          { label: 'Cost per load', value: `AED ${l.cost.toLocaleString('en-US')}` },
          { label: 'Margin', value: `${l.mg}%` },
          { label: 'Loads / month', value: String(l.vol) },
        ]}
        note={l.a}
      />
    </div>
  );
}
