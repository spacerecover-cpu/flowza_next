import React from 'react';
import { CLUB_ACCOUNT, CLUB_CARD_FIELDS } from '@/lib/data/club';

/**
 * The digital membership card. Server component — nothing here has state.
 *
 * The card is the member record: one identity across every facility, and one
 * account every outlet can charge against. Its statement balance is the total
 * of the statement table further down the page, and that is deliberate.
 */
export function ClubMembershipCard() {
  return (
    <div className="clbcard">
      <div className="clbcard__h">
        <div>
          <p className="clbcard__cn">Palm Creek Golf &amp; Country Club</p>
          <p className="clbcard__k">Digital membership card</p>
        </div>
        <svg className="clbcard__qr" viewBox="0 0 36 36" aria-hidden="true">
          <g fill="var(--fg)">
            <rect x="0" y="0" width="10" height="10" />
            <rect x="26" y="0" width="10" height="10" />
            <rect x="0" y="26" width="10" height="10" />
            <rect x="14" y="2" width="3" height="3" />
            <rect x="19" y="2" width="3" height="3" />
            <rect x="14" y="7" width="3" height="3" />
            <rect x="21" y="12" width="3" height="3" />
            <rect x="14" y="14" width="3" height="3" />
            <rect x="26" y="14" width="3" height="3" />
            <rect x="31" y="17" width="3" height="3" />
            <rect x="16" y="19" width="3" height="3" />
            <rect x="21" y="21" width="3" height="3" />
            <rect x="26" y="24" width="3" height="3" />
            <rect x="14" y="26" width="3" height="3" />
            <rect x="19" y="31" width="3" height="3" />
            <rect x="31" y="29" width="3" height="3" />
            <rect x="24" y="31" width="3" height="3" />
          </g>
          <g fill="none" stroke="var(--raise)" strokeWidth="3">
            <rect x="1.5" y="1.5" width="7" height="7" />
            <rect x="27.5" y="1.5" width="7" height="7" />
            <rect x="1.5" y="27.5" width="7" height="7" />
          </g>
        </svg>
      </div>

      <div className="clbcard__b">
        {CLUB_CARD_FIELDS.map((f) => (
          <div className="clbcard__f" key={f.key}>
            <span className="clbcard__fk">{f.key}</span>
            <span className={f.mono ? 'clbcard__fv mono' : 'clbcard__fv'}>{f.value}</span>
          </div>
        ))}
      </div>

      <div className="clbacct">
        {CLUB_ACCOUNT.map((a) => (
          <div key={a.key}>
            <p className="clbacct__k">{a.key}</p>
            <p className={a.signal ? 'clbacct__v clbacct__v--sig' : 'clbacct__v'}>{a.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
