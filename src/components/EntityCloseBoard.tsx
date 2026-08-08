import React from 'react';
import { GROUP_ENTITIES, GROUP_CONSOLIDATION } from '@/lib/data/entities';

const STATUS_CLASS: Record<string, string> = {
  Locked: 'ecb__s ecb__s--locked',
  'In review': 'ecb__s ecb__s--review',
  Open: 'ecb__s ecb__s--open',
};

/**
 * Three entities closing in FlowZa Finance, and the group line under them.
 *
 * This replaces the per-person utilisation grid that used to open the
 * professional services page. That grid needed recorded hours, which no
 * application in the range captures. A multi-entity close needs nothing the
 * product does not already do, and it is the reason services groups look at
 * Finance in the first place.
 */
export function EntityCloseBoard() {
  return (
    <div className="ecb rv">
      <div className="ecb__hd">
        <span className="mono">PERIOD · MARCH</span>
        <span className="ecb__lockcount">{GROUP_CONSOLIDATION.locked} entities locked</span>
      </div>

      <ul className="ecb__list">
        {GROUP_ENTITIES.map((e) => (
          <li key={e.name} className="ecb__row">
            <div className="ecb__ent">
              <span className="ecb__n">{e.name}</span>
              <span className="ecb__c">{e.country}</span>
            </div>
            <div className="ecb__meta">
              <span className="ecb__cur">{e.currency}</span>
              <span className="ecb__reg">{e.registration}</span>
            </div>
            <div className="ecb__st">
              <span className={STATUS_CLASS[e.status]}>{e.status}</span>
              <span className="ecb__d">{e.detail}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="ecb__group">
        <div className="ecb__grow">
          <span className="ecb__gk">Group, presented in</span>
          <span className="ecb__gv">{GROUP_CONSOLIDATION.presentation}</span>
        </div>
        <p className="tiny">{GROUP_CONSOLIDATION.note}</p>
      </div>
    </div>
  );
}
