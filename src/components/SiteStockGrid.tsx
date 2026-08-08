import React from 'react';
import { SITE_STOCK } from '@/lib/data/pos';

/**
 * One product read across five shops and the warehouse. Unlimited locations run
 * from one dashboard, so head office and the store manager are looking at the
 * same position — and the site under cover is marked on the row rather than
 * discovered at the next stock count.
 */
export interface SiteStockGridProps {
  className?: string;
}

export function SiteStockGrid({ className }: SiteStockGridProps) {
  return (
    <div className={['tw', className].filter(Boolean).join(' ')}>
      <table className="sitegrid">
        <caption className="sr">
          Live stock position for one product across five shops and the warehouse. Marina Walk holds
          61 units with three days of cover and is flagged low; every other location is above
          threshold.
        </caption>
        <thead>
          <tr>
            <th scope="col">Site</th>
            <th scope="col">On hand</th>
            <th scope="col">Reserved</th>
            <th scope="col">In transit</th>
            <th scope="col">Cover</th>
          </tr>
        </thead>
        <tbody>
          {SITE_STOCK.map((row) => (
            <tr key={row.site}>
              <td>{row.site}</td>
              <td className={row.lowOnHand ? 'lo' : undefined}>
                {row.onHand}
                {row.lowOnHand ? (
                  <>
                    {' '}
                    <span className="lomk">LOW</span>
                  </>
                ) : null}
              </td>
              <td>{row.reserved}</td>
              <td>{row.inTransit}</td>
              <td className={row.lowCover ? 'lo' : undefined}>
                {row.cover}
                {row.lowCover ? (
                  <>
                    {' '}
                    <span className="lomk">LOW</span>
                  </>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
