import React from 'react';
import { FLEETZA_FUEL } from '@/lib/data/fleetza';

/**
 * Consumption per vehicle against the median for its class, with idling share
 * and distance driven off the planned route. Three columns, three different
 * fixes: a workshop booking, a policy, or a plan.
 *
 * Static. Server component.
 */
export function FuelAnalytics() {
  return (
    <table className="flzfuel">
      <caption className="sr">
        Fuel consumption per vehicle against the median for its class, with idling share and distance
        driven off the planned route
      </caption>
      <thead>
        <tr>
          <th scope="col">Vehicle</th>
          <th scope="col">Class</th>
          <th scope="col">L / 100 km</th>
          <th scope="col">Class median</th>
          <th scope="col">Idling</th>
          <th scope="col">Off plan</th>
        </tr>
      </thead>
      <tbody>
        {FLEETZA_FUEL.map((r) => {
          const hi = r.flagged ? 'hi' : undefined;
          return (
            <tr key={r.vehicle}>
              <td>{r.vehicle}</td>
              <td>{r.cls}</td>
              <td className={hi}>{r.consumption}</td>
              <td>{r.classMedian}</td>
              <td className={hi}>{r.idling}</td>
              <td className={hi}>{r.offPlan}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
