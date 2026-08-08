import React from 'react';
import { COHORT_ROWS, COHORT_MONTHS } from '@/lib/data/cohorts';

function retentionClass(value: number | null): string {
  if (value === null) return 'coh__c na';
  if (value >= 90) return 'coh__c r5';
  if (value >= 60) return 'coh__c r4';
  if (value >= 45) return 'coh__c r3';
  if (value >= 35) return 'coh__c r2';
  return 'coh__c r1';
}

export function CohortGrid() {
  return (
    <div
      className="coh"
      role="img"
      aria-label="Cohort retention grid. February to April cohorts retain 55 to 61 per cent at month one. May and June cohorts, after rebooking at the till was introduced, retain 64 and 67 per cent."
    >
      {/* header row */}
      <span />
      {COHORT_MONTHS.map((m) => (
        <span key={m} className="coh__h">{m}</span>
      ))}

      {/* data rows */}
      {COHORT_ROWS.map((row) => (
        <React.Fragment key={row.label}>
          <span className="coh__l">{row.label}</span>
          {row.values.map((v, mi) => (
            <span key={mi} className={retentionClass(v)}>
              {v !== null ? v : ''}
            </span>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
