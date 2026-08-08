'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SYSTEMS, FlowzaSystem, RecordUse } from '@/lib/data/systems';
import { AppLink } from '@/components/ProductChrome';

/** "Writes into the layer" and "Reads back out" share one row treatment. */
function ShareList({ items }: { items: RecordUse[] }) {
  return (
    <ul className="mx__shares">
      {items.map((use) => (
        <li key={`${use.type}-${use.detail}`}>
          <span className="k">{use.type}</span>
          <span>{use.detail}</span>
        </li>
      ))}
    </ul>
  );
}

export interface SystemExplorerProps {
  /** Which of the nine opens selected. Finance by default, as on the site. */
  initialIndex?: number;
}

export function SystemExplorer({ initialIndex = 0 }: SystemExplorerProps) {
  const [selected, setSelected] = useState(initialIndex);

  const y: FlowzaSystem = SYSTEMS[selected];
  const related = new Set(y.exchanges.map((x) => x.system));

  return (
    <div className="mx rv">
      <div className="mx__board" id="mxBoard" role="group" aria-label="The nine Flowza systems">
        {SYSTEMS.map((system, i) => {
          const isSelected = i === selected;
          const isRelated = related.has(system.key) && !isSelected;
          const isDimmed = !isRelated && !isSelected;

          return (
            <button
              key={system.key}
              type="button"
              className={['mod', isSelected ? 'is-sel' : '', isRelated ? 'is-rel' : '', isDimmed ? 'is-dim' : '']
                .filter(Boolean)
                .join(' ')}
              aria-pressed={isSelected}
              onClick={() => setSelected(i)}
            >
              <span className="mod__k">{system.app}</span>
              <span className="mod__n">{system.name}</span>
              <span className="mod__d">{system.tagline}</span>
            </button>
          );
        })}
      </div>

      <aside className="mx__panel" id="mxPanel" aria-live="polite">
        <p className="mono" style={{ fontSize: '.625rem', letterSpacing: '.12em', color: 'var(--fg-3)' }}>
          SYSTEM {String(selected + 1).padStart(2, '0')} OF NINE
        </p>
        <h3 className="d-s" style={{ margin: 'var(--s3) 0 6px' }}>{y.name}</h3>
        <p className="tiny" style={{ marginBottom: '2px' }}>{y.tagline}</p>
        <AppLink host={y.app} />
        <p className="small" style={{ marginTop: 'var(--s4)' }}>{y.description}</p>

        <span className="mx__cap">Writes into the layer</span>
        <ShareList items={y.writes} />

        <span className="mx__cap">Reads back out</span>
        <ShareList items={y.reads} />

        <span className="mx__cap">
          Which connects it to{' '}
          {y.exchanges.length === 1 ? 'one system' : `${y.exchanges.length} of the other eight`}
        </span>
        <ul className="mx__flow">
          {y.exchanges.map((x) => (
            <li key={x.system}>
              <span className="k">{x.record}</span>
              <span>
                <b>Flowza {x.system}</b> — {x.why}
              </span>
            </li>
          ))}
        </ul>

        <Link className="btn btn--text" href={y.href} style={{ marginTop: 'var(--s5)' }}>
          {y.name} <span className="arw">→</span>
        </Link>
      </aside>
    </div>
  );
}
