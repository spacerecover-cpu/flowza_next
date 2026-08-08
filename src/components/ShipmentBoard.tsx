import React from 'react';
import { LOAD_BOARD } from '@/lib/data/logispro';

/**
 * Active shipments, scored continuously against their own delivery windows.
 * Neither flagged shipment is late yet: the exception is raised when the arrival
 * estimate crosses the window, not when the consignee telephones.
 */
export interface ShipmentBoardProps {
  className?: string;
}

export function ShipmentBoard({ className }: ShipmentBoardProps) {
  return (
    <div className={['lgpbd-scroll', className].filter(Boolean).join(' ')}>
      <table className="lgpbd">
        <caption className="sr">
          Active shipments with stop count, delivery window, live arrival estimate, predicted delay
          and status
        </caption>
        <thead>
          <tr>
            <th scope="col">Shipment</th>
            <th scope="col">Route</th>
            <th scope="col">Stops</th>
            <th scope="col">Window</th>
            <th scope="col">ETA</th>
            <th scope="col">Predicted delay</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {LOAD_BOARD.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td className="rt">{row.route}</td>
              <td>{row.stops}</td>
              <td>{row.window}</td>
              <td>{row.eta}</td>
              <td className={row.late ? 'del' : undefined}>{row.predictedDelay}</td>
              <td>
                <span className={`pill ${row.late ? 'late' : 'ok'}`}>{row.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
