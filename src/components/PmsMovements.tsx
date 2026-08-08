import React from 'react';
import { PMS_MOVEMENTS } from '@/lib/data/pms';

/**
 * What the session moved, and why. Server component.
 *
 * Nine movements out of thirty ratings: seven down, two up. The tenth row is the
 * one people forget to build for — a rating challenged, examined and not changed.
 *
 * The nine movements net exactly onto the calibrated histogram in
 * PmsDistribution. Changing a row here without changing that changes the
 * argument into an error.
 */
export function PmsMovements() {
  return (
    <div className="tw">
      <table className="pmsmv">
        <caption className="sr">
          Rating movements agreed in calibration session PMS-CAL-26-Q2-07, with the manager who
          submitted each rating, the movement, and the reason recorded. Seven ratings moved down and
          two moved up; one rating was challenged and held at its original band with the disagreement
          minuted.
        </caption>
        <thead>
          <tr>
            <th scope="col">Employee</th>
            <th scope="col">Rated by</th>
            <th scope="col">Movement</th>
            <th scope="col">Reason recorded in the session</th>
          </tr>
        </thead>
        <tbody>
          {PMS_MOVEMENTS.map((m) => (
            <tr key={m.employee}>
              <th scope="row">{m.employee}</th>
              <td>{m.ratedBy}</td>
              <td className={`mv mv--${m.direction}`}>{m.movement}</td>
              <td>{m.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
