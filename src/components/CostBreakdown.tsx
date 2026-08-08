import React from 'react';
import { COST_PACKAGES } from '@/lib/data/construction';

export function CostBreakdown() {
  return (
    <div className="cbs">
      <div className="cbs__hd">
        <span>Package</span>
        <span>Spent and committed against budget</span>
        <span>Exposure</span>
      </div>
      {COST_PACKAGES.map((pkg) => (
        <div
          key={pkg.code}
          className={`cbs__r${pkg.isOver ? ' is-over' : ''}`}
          data-d={String(pkg.depth)}
        >
          <span className="cbs__n">
            {pkg.name}
            <span>{pkg.code}</span>
          </span>
          <span className="cbs__bar">
            <i className="sp" style={{ width: `${pkg.spentPct}%` }} />
            <i className="cm" style={{ width: `${pkg.committedPct}%` }} />
            {pkg.overPct > 0 && <i className="ov" style={{ width: `${pkg.overPct}%` }} />}
          </span>
          <span className="cbs__v">{pkg.spentPct + pkg.committedPct + pkg.overPct}%</span>
        </div>
      ))}
      <div className="cbs__key">
        <span><i style={{ background: 'var(--sig)' }} />Spent</span>
        <span><i style={{ background: 'rgba(10,95,66,.34)' }} />Committed, not yet invoiced</span>
        <span><i style={{ background: 'var(--sig-amber)' }} />Over budget</span>
      </div>
    </div>
  );
}
