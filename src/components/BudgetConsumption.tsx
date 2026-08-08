import React from 'react';
import { BUDGET_LINES } from '@/lib/data/publicsector';

export function BudgetConsumption() {
  return (
    <div className="bgt">
      <div className="bgt__hd">
        <span>Programme</span>
        <span>Spent and committed against appropriation</span>
        <span>Consumed</span>
      </div>
      {BUDGET_LINES.map((line) => (
        <div key={line.code} className={`bgt__r${line.isOver ? ' is-over' : ''}`}>
          <span className="bgt__n">
            {line.name}
            <span>{line.code}</span>
          </span>
          <span className="bgt__track">
            <i className="sp" style={{ width: `${line.spentPct}%` }} />
            <i className="cm" style={{ width: `${line.committedPct}%` }} />
            {line.overPct > 0 && <i className="ov" style={{ width: `${line.overPct}%` }} />}
            <span className="bgt__ceil" />
          </span>
          <span className="bgt__v">
            {Math.round(line.spentPct + line.committedPct + line.overPct)}%
          </span>
        </div>
      ))}
      <div className="bgt__key">
        <span><i style={{ background: 'var(--sig)' }} />Spent</span>
        <span><i style={{ background: 'rgba(10,95,66,.34)' }} />Committed</span>
        <span><i style={{ background: 'var(--sig-amber)' }} />Beyond appropriation</span>
        <span><i style={{ background: 'var(--graphite)', width: '3px' }} />Appropriation ceiling</span>
      </div>
    </div>
  );
}
