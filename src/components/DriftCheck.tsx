import React from 'react';
import { DRIFT_CHECK } from '@/lib/data/finance';

/**
 * The nightly reconciliation of every sub-ledger against its control account in
 * the general ledger. Four agree; one has drifted, and the drifted line names
 * the document behind it the morning after it happened.
 */
export interface DriftCheckProps {
  className?: string;
}

export function DriftCheck({ className }: DriftCheckProps) {
  return (
    <div className={['tw', className].filter(Boolean).join(' ')}>
      <table className="je">
        <caption className="sr">
          Last night&rsquo;s sub-ledger against general ledger reconciliation. Four control accounts
          agree exactly; inventory differs by 1,180 and is flagged for review.
        </caption>
        <thead>
          <tr>
            <th scope="col">Sub-ledger</th>
            <th scope="col">Control</th>
            <th scope="col" className="amt">
              Sub-ledger
            </th>
            <th scope="col" className="amt">
              General ledger
            </th>
            <th scope="col" className="amt">
              Variance
            </th>
          </tr>
        </thead>
        <tbody>
          {DRIFT_CHECK.map((row) => (
            <tr key={row.control} className={row.flagged ? 'flag' : undefined}>
              <td>{row.subLedger}</td>
              <td>{row.control}</td>
              <td className="amt">{row.subLedgerBalance}</td>
              <td className="amt">{row.generalLedgerBalance}</td>
              <td className="amt">
                {row.variance}
                {row.flagged ? (
                  <>
                    {' '}
                    <span className="fmk">DRIFT</span>
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
