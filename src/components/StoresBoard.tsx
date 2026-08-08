import React from 'react';
import { STOCK_MOVEMENTS, MOVEMENT_LABELS, STORES_SUMMARY } from '@/lib/data/stores';

/**
 * A day in the stores, as FlowZa LogisPro records it.
 *
 * This replaces the bill-of-material explosion that used to sit on the
 * manufacturing page. That diagram described an MRP the product does not have;
 * this one describes stock movement, which it does. The cycle-count row is the
 * point of the piece — a variance is held for a person rather than posted
 * quietly, which is the behaviour a stores manager is actually buying.
 */
export function StoresBoard() {
  return (
    <div className="stb rv">
      <div className="stb__scroll">
        <table className="stb__t">
          <caption className="sr">
            A day of stock movements recorded by FlowZa LogisPro across two sites: nine movements covering
            goods in, putaway, picks, an inter-site transfer and a cycle count, each with the bin or dock it
            ran between and the on-hand quantity after it posted. The cycle count at 13:30 found a variance of
            four units and is held for a supervisor rather than posted automatically.
          </caption>
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Movement</th>
              <th scope="col">Item</th>
              <th scope="col" className="stb__n">Qty</th>
              <th scope="col">Bin or route</th>
              <th scope="col" className="stb__n">On hand</th>
            </tr>
          </thead>
          <tbody>
            {STOCK_MOVEMENTS.map((m) => (
              <tr key={`${m.time}-${m.item}`} className={m.flagged ? 'is-flagged' : undefined}>
                <td className="stb__time">{m.time}</td>
                <td>
                  <span className={`stb__k stb__k--${m.kind.toLowerCase()}`}>{MOVEMENT_LABELS[m.kind]}</span>
                </td>
                <td>{m.item}</td>
                <td className="stb__n">{m.qty}</td>
                <td className="stb__where">{m.where}</td>
                <td className="stb__n">{m.onHand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="stb__foot">
        <span><b>{STORES_SUMMARY.movements}</b> movements</span>
        <span><b>{STORES_SUMMARY.sites}</b> sites</span>
        <span className="stb__var"><b>{STORES_SUMMARY.variance}</b> held for review</span>
        <span className="stb__note">{STORES_SUMMARY.varianceNote}</span>
      </div>
    </div>
  );
}
