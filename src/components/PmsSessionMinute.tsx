import React from 'react';
import { PMS_MINUTE } from '@/lib/data/pms';

/**
 * The session minute. Server component.
 *
 * A calibration meeting that leaves no record has changed people's pay on the
 * strength of a conversation nobody can reconstruct. What is not illustrative
 * here is the shape: a session, an attendance list, a reference distribution,
 * the movements, the dissent, and a link from every rating back to the session
 * that examined it.
 */
export function PmsSessionMinute() {
  return (
    <div className="pmsmin">
      <div className="pmsmin__h">Session minute · appended to the cycle</div>
      <dl>
        {PMS_MINUTE.map((row) => (
          <React.Fragment key={row.term}>
            <dt>{row.term}</dt>
            <dd className={row.mono ? 'mono' : undefined}>{row.value}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
}
