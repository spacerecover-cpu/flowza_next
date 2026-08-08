import React from 'react';
import { STATUTORY_COUNTRIES, STATUTORY_NOTE } from '@/lib/data/statutory';

/**
 * What FlowZa Finance carries statutorily, country by country.
 *
 * This replaces the S-curve and the package cost breakdown that used to sit on
 * the construction page. Both needed a project ledger, valuations and committed
 * cost, none of which exist. A contractor with people on sites in four
 * countries has a real problem this product does solve, and the board states
 * the boundary in the same breath: four countries, and the rest is roadmap.
 */
export function StatutoryPayrollMatrix() {
  return (
    <div className="spm rv">
      <ul className="spm__grid">
        {STATUTORY_COUNTRIES.map((c) => (
          <li key={c.code} className="spm__c">
            <div className="spm__hd">
              <span className="spm__code">{c.code}</span>
              <span className="spm__country">{c.country}</span>
            </div>
            <ul className="spm__items">
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <div className="spm__out">
              <span className="spm__outk">Month ends with</span>
              <span className="spm__outv">{c.output}</span>
            </div>
          </li>
        ))}
      </ul>
      <p className="tiny spm__note">{STATUTORY_NOTE}</p>
    </div>
  );
}
