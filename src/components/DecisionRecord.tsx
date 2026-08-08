import React from 'react';
import { SCREENING_CHECKS, APPLICATION_RECORD } from '@/lib/data/decision';

/**
 * One housing application, five checks, and the reason the decision gives.
 *
 * This replaces the case-ageing chart that used to sit on the public sector
 * page. That chart measured casework against a statutory window, which the
 * product does not do. This shows what FlowZa RentFlow does do — and the last
 * block is the piece that matters to a public body, because a recorded reason
 * is what an appeal, an ombudsman or an auditor asks to see.
 */
export function DecisionRecord() {
  return (
    <div className="dcr rv">
      <div className="dcr__hd">
        <span className="mono dcr__ref">{APPLICATION_RECORD.reference}</span>
        <span className="dcr__dates">
          Received {APPLICATION_RECORD.received} · decided {APPLICATION_RECORD.decided}
        </span>
      </div>

      <ol className="dcr__checks">
        {SCREENING_CHECKS.map((c, i) => (
          <li key={c.name} className={`dcr__ck dcr__ck--${c.outcome.toLowerCase()}`}>
            <span className="dcr__i">{String(i + 1).padStart(2, '0')}</span>
            <span className="dcr__ckn">{c.name}</span>
            <span className="dcr__o">{c.outcome}</span>
            <span className="dcr__det">{c.detail}</span>
          </li>
        ))}
      </ol>

      <div className="dcr__out">
        <div className="dcr__outhd">
          <span className="dcr__outk">Decision</span>
          <span className="dcr__outv">{APPLICATION_RECORD.outcome}</span>
        </div>
        <p className="dcr__reason">{APPLICATION_RECORD.reason}</p>
        <div className="dcr__by">
          <span>{APPLICATION_RECORD.decidedBy}</span>
          <span className="dcr__pol">{APPLICATION_RECORD.policy}</span>
        </div>
      </div>
    </div>
  );
}
