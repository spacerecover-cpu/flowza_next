import React from 'react';
import { UTIL_ROSTER, UtilBand } from '@/lib/data/utilisation';

const WEEK_COUNT = 12;

function bandClass(b: UtilBand): string {
  return `heat__c u${b}`;
}

export function UtilisationHeatGrid() {
  return (
    <div
      className="heat"
      role="img"
      aria-label="Utilisation heat grid for eight people over twelve weeks. Ben and Dana run above ninety-five per cent for several consecutive weeks. Gus and Eli sit below sixty-five per cent for most of the period. The team average of seventy-four per cent conceals both."
    >
      {/* header row */}
      <span />
      {Array.from({ length: WEEK_COUNT }, (_, i) => (
        <span key={i} className="heat__wk">{i + 1}</span>
      ))}

      {/* data rows */}
      {UTIL_ROSTER.map((person) => (
        <React.Fragment key={person.name}>
          <span className="heat__n">
            {person.name}
            <span>{person.grade}</span>
          </span>
          {person.weeks.map((band, wi) => (
            <i key={wi} className={bandClass(band)} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
