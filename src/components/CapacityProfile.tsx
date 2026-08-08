'use client';

import React, { createContext, useContext, useState } from 'react';
import { WC, WEEKLY_DEMAND, BAR_BASE, BAR_SCALE } from '@/lib/data/workcentres';
import { ItemEconomicsPanel } from '@/components/ItemEconomicsPanel';

/* ------------------------------------------------------------------ context */

interface CapCtx {
  selected: number;
  setSelected: (i: number) => void;
}

const CapContext = createContext<CapCtx>({ selected: 2, setSelected: () => undefined });

/* ------------------------------------------------------------------ provider */

export interface CapacityExplorerProps {
  children: React.ReactNode;
  initialIndex?: number;
}

export function CapacityExplorer({ children, initialIndex = 2 }: CapacityExplorerProps) {
  const [selected, setSelected] = useState(initialIndex);
  return (
    <CapContext.Provider value={{ selected, setSelected }}>
      {children}
    </CapContext.Provider>
  );
}

/* ------------------------------------------------------------------ chart */

export function CapacityProfile() {
  const { selected, setSelected } = useContext(CapContext);

  const dy = BAR_BASE - WEEKLY_DEMAND * BAR_SCALE;

  function handleKey(e: React.KeyboardEvent, i: number) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelected(i);
    }
  }

  return (
    <div className="panel" style={{ padding: 'var(--s6)' }}>
      <div className="row" style={{ justifyContent: 'space-between', marginBottom: 'var(--s5)' }}>
        <span className="mono" style={{ fontSize: '.625rem', letterSpacing: '.11em', color: 'var(--fg-3)' }}>
          CAPACITY BY WORK CENTRE · UNITS / WEEK
        </span>
        <span className="tag tag--ai">Constraint</span>
      </div>
      <div className="dscroll" style={{ ['--dmin' as string]: '560px' }}>
        <svg
          className="dgm cap"
          viewBox="0 0 600 240"
          role="img"
          aria-label="Capacity by work centre against weekly demand of 760 units. Cutting 1200, forming 980, welding 640, machining 1050, coating 820, assembly 900. Welding is the only station below demand and is therefore the constraint."
        >
          <g stroke="var(--edge-2)" strokeWidth="1">
            <path d={`M50 ${BAR_BASE}H580`} />
          </g>
          {WC.map((w, i) => {
            const h = w.cap * BAR_SCALE;
            const x = 60 + i * 88;
            const y = BAR_BASE - h;
            const isOn = i === selected;
            return (
              <g
                key={i}
                className={`wc${w.bn ? ' bn' : ''}${isOn ? ' is-on' : ''}`}
                role="button" aria-pressed={selected === i}
                tabIndex={0}
                aria-label={`${w.n}, capacity ${w.cap} units per week`}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => handleKey(e, i)}
              >
                <rect x={x} y={y.toFixed(1)} width="56" height={h.toFixed(1)} />
                <text x={x} y={BAR_BASE + 16}>{w.c}</text>
                <text x={x} y={BAR_BASE + 28}>{w.cap}</text>
              </g>
            );
          })}
          <path className="dm" d={`M50 ${dy.toFixed(1)}H580`} />
          <text className="dmt" x="580" y="16" textAnchor="end">
            - - -  DEMAND {WEEKLY_DEMAND} / WEEK
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ panel */

export function CapacityPanel() {
  const { selected } = useContext(CapContext);
  const w = WC[selected];
  return (
    <div aria-live="polite">
      <ItemEconomicsPanel
        eyebrow={`${w.bn ? 'CONSTRAINT' : 'WORK CENTRE'} · ${w.c}`}
        title={w.n}
        cells={[
          { label: 'Capacity', value: `${w.cap} / wk` },
          { label: 'Utilisation', value: w.util },
          { label: 'Queue', value: w.q },
          { label: 'Setup', value: w.su },
        ]}
        note={w.a}
      />
    </div>
  );
}
