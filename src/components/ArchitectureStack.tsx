'use client';

import React, { useState } from 'react';
import { PILLARS } from '@/lib/data/layers';

export function ArchitectureStack() {
  const [selected, setSelected] = useState(0);

  const P = PILLARS[selected];

  return (
    <div className="arch rv">
      <div id="archStack">
        {PILLARS.map((pillar, i) => (
          <button
            key={pillar.number}
            type="button"
            className={`layer${selected === i ? ' is-on' : ''}`}
            data-layer={i}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            <span className="layer__i">{pillar.number}</span>
            <span>
              <span className="layer__n">{pillar.name}</span>
              <span className="layer__s">{pillar.subtitle}</span>
            </span>
            <span className="layer__b" />
          </button>
        ))}
      </div>

      <aside className="arch__detail" id="archDetail" aria-live="polite">
        <p className="mono" style={{ fontSize: '.625rem', letterSpacing: '.12em', color: 'var(--fg-3)' }}>
          PILLAR {P.number}
        </p>
        <h3 className="d-s" style={{ margin: 'var(--s3) 0 var(--s4)' }}>
          {P.name}
        </h3>
        <ul className="klist" style={{ borderTop: 0 }}>
          {P.bullets.map((bullet, i) => (
            <li key={i} style={{ padding: '9px 0' }}>
              <p className="small" style={{ color: 'var(--fg)' }}>{bullet}</p>
            </li>
          ))}
        </ul>
        <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
          {P.footer}
        </p>
      </aside>
    </div>
  );
}
