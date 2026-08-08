'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SYSTEMS, FlowzaSystem, Capability } from '@/lib/data/systems';
import { AppLink } from '@/components/ProductChrome';

/** The capability list inside the detail panel. */
function CapabilityList({ items }: { items: Capability[] }) {
  return (
    <ul className="mx__shares">
      {items.map((capability) => (
        <li key={capability.title}>
          <span className="k">·</span>
          <span>
            <b>{capability.title}</b> — {capability.detail}
          </span>
        </li>
      ))}
    </ul>
  );
}

export interface SystemExplorerProps {
  /** Which of the nine opens selected. Finance by default. */
  initialIndex?: number;
}

export function SystemExplorer({ initialIndex = 0 }: SystemExplorerProps) {
  const [selected, setSelected] = useState(initialIndex);

  const y: FlowzaSystem = SYSTEMS[selected];

  return (
    <div className="mx rv">
      <div className="mx__board" id="mxBoard" role="group" aria-label="The nine FlowZa AI applications">
        {SYSTEMS.map((system, i) => {
          const isSelected = i === selected;

          return (
            <button
              key={system.key}
              type="button"
              className={`mod${isSelected ? ' is-sel' : ''}`}
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
          APPLICATION {String(selected + 1).padStart(2, '0')} OF NINE
        </p>
        <h3 className="d-s" style={{ margin: 'var(--s3) 0 6px' }}>{y.name}</h3>
        <p className="tiny" style={{ marginBottom: '2px' }}>{y.tagline}</p>
        <AppLink host={y.app} />
        <p className="small" style={{ marginTop: 'var(--s4)' }}>{y.description}</p>

        <span className="mx__cap">Built for</span>
        <p className="small">{y.builtFor}.</p>

        <span className="mx__cap">What it does</span>
        <CapabilityList items={y.capabilities} />

        <span className="mx__cap">Usually replaces</span>
        <p className="small">{y.replaces}.</p>

        <Link className="btn btn--text" href={y.href} style={{ marginTop: 'var(--s5)' }}>
          {y.name} <span className="arw">→</span>
        </Link>
      </aside>
    </div>
  );
}
