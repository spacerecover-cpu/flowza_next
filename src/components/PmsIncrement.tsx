import React from 'react';
import { PMS_INCREMENT } from '@/lib/data/pms';

/**
 * An increment that leaves the structure standing. Server component.
 *
 * The same total, three ways: the structure on file, the structure incremented
 * with its components preserved, and the same total with the structure collapsed
 * into one figure. EPF is computed on basic pay and gratuity reads basic as well,
 * so the third column has moved the contribution base for a reason nobody decided
 * and nobody minuted.
 *
 * 45,000 + 18,000 + 3,200 + 12,800 is 79,000; each component up 8 per cent is
 * 85,320. The arithmetic is the mechanism.
 */
export function PmsIncrement() {
  return (
    <div className="pmscp">
      {PMS_INCREMENT.map((col) => (
        <div className={col.bad ? 'pmscp--bad' : undefined} key={col.headingStrong}>
          <span className="pmscp__h">
            {col.headingLead}
            <b>{col.headingStrong}</b>
          </span>
          {col.lines.map((line) => {
            const classes = ['pmscp__r'];
            if (line.total) classes.push('pmscp__r--t');
            else if (line.lost) classes.push('pmscp__r--x');
            return (
              <div className={classes.join(' ')} key={line.component}>
                <span>{line.component}</span>
                <b>{line.amount}</b>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
