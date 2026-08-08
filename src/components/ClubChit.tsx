import React from 'react';
import { CLUB_CHIT_LINES } from '@/lib/data/club';

/**
 * The signed pro-shop chit. Server component — the chit itself never changes;
 * what the toggle in ClubPosting changes is the journal it is turned into.
 *
 * The member does not pay at the till, they sign. 360.00 of goods plus 18.00
 * of tax is 378.00 charged to the account, and that figure appears again as
 * the pro shop line on the household statement.
 */
export function ClubChit() {
  return (
    <div className="clbchit">
      <div className="clbchit__h">
        <p className="clbchit__o">Pro shop</p>
        <p className="clbchit__i">Chit PS-4471 · 06 Aug · 16:22 · till 2</p>
      </div>

      {CLUB_CHIT_LINES.map((line) => (
        <div
          className={line.total ? 'clbchit__ln clbchit__ln--t' : 'clbchit__ln'}
          key={line.label}
        >
          <span>{line.label}</span>
          <b>{line.amount}</b>
        </div>
      ))}

      <div className="clbchit__sig">
        <p className="clbchit__sg">Signed</p>
        <svg viewBox="0 0 160 40" aria-hidden="true">
          <path
            d="M8 31c13-24 20 6 29-9s15 13 25-2 17 11 29-6 21 9 33-6"
            fill="none"
            stroke="var(--fg-2)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <p className="clbchit__sg">R. Iyer · PC-1042-01 · household 1042</p>
      </div>
    </div>
  );
}
