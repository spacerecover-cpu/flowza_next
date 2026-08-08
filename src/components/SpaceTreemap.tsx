'use client';

import React, { createContext, useContext, useState } from 'react';
import { CATS, categoryTier, computeTreemapLayout } from '@/lib/data/retail';
import { ItemEconomicsPanel } from '@/components/ItemEconomicsPanel';

/* ------------------------------------------------------------------ context */

interface SpaceCtx {
  selected: number;
  setSelected: (i: number) => void;
}

const SpaceContext = createContext<SpaceCtx>({ selected: 6, setSelected: () => undefined });

/* ------------------------------------------------------------------ provider */

export interface SpaceExplorerProps {
  children: React.ReactNode;
  initialIndex?: number;
}

export function SpaceExplorer({ children, initialIndex = 6 }: SpaceExplorerProps) {
  const [selected, setSelected] = useState(initialIndex);
  return (
    <SpaceContext.Provider value={{ selected, setSelected }}>
      {children}
    </SpaceContext.Provider>
  );
}

/* ------------------------------------------------------------------ treemap */

export interface SpaceTreemapProps {
  className?: string;
}

const LAYOUT = computeTreemapLayout();

export function SpaceTreemap({ className }: SpaceTreemapProps) {
  const { selected, setSelected } = useContext(SpaceContext);
  return (
    <>
      <div className={`tmap${className ? ` ${className}` : ''}`} role="group" aria-label="Trading space by category">
        {LAYOUT.map((tile) => {
          const c = CATS[tile.index];
          const isOn = tile.index === selected;
          return (
            <button
              key={tile.index}
              type="button"
              className={`tmap__t ${categoryTier(c.spm)}${isOn ? ' is-on' : ''}`}
              aria-pressed={isOn}
              style={{
                left: `${tile.left}%`,
                top: `${tile.top}%`,
                width: `${tile.width}%`,
                height: `${tile.height}%`,
              }}
              onClick={() => setSelected(tile.index)}
            >
              <span className="tmap__n">{c.n}</span>
              <span className="tmap__v">{c.sp}% · {c.spm.toLocaleString('en-US')}</span>
            </button>
          );
        })}
      </div>
      <div className="tmkey">
        <b>Sales per m²</b>
        <i style={{ background: 'rgba(10,95,66,.05)' }} />
        <i style={{ background: 'rgba(10,95,66,.19)' }} />
        <i style={{ background: 'rgba(10,95,66,.34)' }} />
        <i style={{ background: 'rgba(10,95,66,.50)' }} />
        <b style={{ marginLeft: 'auto' }}>Tile area = floor space</b>
      </div>
      <p className="sr">
        Treemap of trading space by category. Tile area is proportional to floor space and tint indicates sales per square metre. Beauty and accessories earn the most per metre while occupying the least space; home occupies twelve percent of the floor and earns the least.
      </p>
    </>
  );
}

/* ------------------------------------------------------------------ panel */

export function SpacePanel() {
  const { selected } = useContext(SpaceContext);
  const cat = CATS[selected];
  return (
    <div aria-live="polite">
      <ItemEconomicsPanel
        eyebrow={`CATEGORY · ${cat.sp}% OF TRADING SPACE`}
        title={cat.n}
        cells={[
          { label: 'Floor space', value: `${cat.m2} m²` },
          { label: 'Sales per m²', value: cat.spm.toLocaleString('en-US') },
          { label: 'Gross margin', value: cat.gm },
          { label: 'Stock cover', value: cat.cov },
        ]}
        note={cat.a}
      />
    </div>
  );
}
