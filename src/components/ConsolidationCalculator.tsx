'use client';

import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { CALCULATOR_TOOLS } from '@/lib/data/pricing';

function money(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export function ConsolidationCalculator() {
  const [seats, setSeats] = useState(250);
  const [checked, setChecked] = useState<boolean[]>(
    CALCULATOR_TOOLS.map((t) => t.defaultChecked)
  );

  const handleToggle = useCallback((i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }, []);

  const s = Math.max(1, Math.min(20000, seats));
  const on = CALCULATOR_TOOLS.filter((_, i) => checked[i]);
  const perUser = on.reduce((acc, t) => acc + t.costPerUserPerMonth, 0);
  const current = perUser * s * 12;
  const flowza = 39 * s * 12;
  const delta = current - flowza;
  const paths = on.length > 1 ? (on.length * (on.length - 1)) / 2 : 0;

  return (
    <div className="calc rv">
      <div>
        <div className="seats">
          <label htmlFor="seatCount" className="small">Users</label>
          <input
            id="seatCount"
            type="number"
            min={1}
            max={20000}
            value={seats}
            inputMode="numeric"
            onChange={(e) =>
              setSeats(Math.max(1, Math.min(20000, parseInt(e.target.value || '1', 10) || 1)))
            }
          />
          <span className="tiny">people needing access</span>
        </div>

        <div className="calc__tools" id="calcTools">
          {CALCULATOR_TOOLS.map((tool, i) => (
            <label key={tool.name} className="tool">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => handleToggle(i)}
                data-cost={tool.costPerUserPerMonth}
              />
              <span className="tool__n">{tool.name}</span>
              <span className="tool__p">${tool.costPerUserPerMonth}</span>
            </label>
          ))}
        </div>

        <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
          Prices shown are per user per month and are indicative of published list pricing in each category.
          They exclude implementation partners, integration middleware, and the internal time spent reconciling between systems.
        </p>
      </div>

      <aside className="calc__out" aria-live="polite">
        <p className="mono" style={{ fontSize: '.625rem', letterSpacing: '.12em', color: 'var(--fg-3)', marginBottom: 'var(--s4)' }}>
          ANNUAL LICENCE COMPARISON
        </p>

        <div className="calc__row">
          <span className="calc__lab">Current stack</span>
          <span className="calc__val" id="cCurrent">{money(current)}</span>
        </div>
        <div className="calc__row">
          <span className="calc__lab">Flowza Growth</span>
          <span className="calc__val" id="cFlowza">{money(flowza)}</span>
        </div>
        <div className="calc__row">
          <span className="calc__lab">Integration paths removed</span>
          <span className="calc__val" id="cPaths">{paths}</span>
        </div>

        <div style={{ borderTop: '1px solid var(--edge)', marginTop: 'var(--s4)', paddingTop: 'var(--s5)' }}>
          <p className="tiny" style={{ marginBottom: 'var(--s3)' }}>Annual difference</p>
          <div
            className="calc__big"
            id="cDelta"
            style={{ color: delta >= 0 ? 'var(--sig)' : 'var(--sig-amber)' }}
          >
            {delta >= 0 ? '' : '−'}{money(Math.abs(delta))}
          </div>
          <p className="tiny" id="cNote" style={{ marginTop: 'var(--s3)' }}>
            {delta >= 0
              ? `Licence difference only, for ${s.toLocaleString('en-US')} users. It excludes the ${paths} integration paths you stop maintaining.`
              : 'Fewer tools than a typical consolidation case. The argument here is the shared data model rather than the licence line.'}
          </p>
        </div>

        <Link
          className="btn btn--primary"
          href="/pricing"
          style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--s5)' }}
        >
          Model this properly <span className="arw">→</span>
        </Link>
      </aside>
    </div>
  );
}
