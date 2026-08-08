import React from 'react';
import { PMS_CYCLE_RECORD } from '@/lib/data/pms';

/**
 * The record one cycle leaves behind. Server component.
 *
 * Four stages filed against the same person, each carrying who did it and when.
 * The rating links to the session that examined it, the pay links to the rule
 * set that resolved it, and the letter links to the pay.
 */
export function PmsCycleRecord() {
  return (
    <div className="pmsrec">
      <div className="pmsrec__h">
        <span>Cycle record · one employee</span>
        <span>EMP-3907 · FY26 H1</span>
      </div>
      <ul className="pmsrec__l">
        {PMS_CYCLE_RECORD.map((line) => (
          <li key={line.n}>
            <span className="pmsrec__n">{line.n}</span>
            <span className="pmsrec__k">{line.stage}</span>
            <span className="pmsrec__v">
              {line.what}
              <i>{line.detail}</i>
            </span>
          </li>
        ))}
      </ul>
      <div className="pmsrec__f">
        Every line above carries the person who did it and when. The rating links to the session that
        examined it; the pay links to the rule set that resolved it; the letter links to the pay.{' '}
        <b>Nothing here is reconstructed afterwards.</b>
      </div>
    </div>
  );
}
