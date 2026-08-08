import React from 'react';
import { CLUB_STATEMENT, CLUB_STATEMENT_TOTAL } from '@/lib/data/club';

/**
 * One statement, four kinds of charge. Server component.
 *
 * Every column adds down and the three components add across: 16,460 plus 200
 * plus 833 is 17,493, which is the balance on the membership card at the top of
 * the page. Do not change one figure without changing the others.
 */
export function ClubStatement() {
  return (
    <div className="tw">
      <table className="clbset">
        <caption className="sr">
          August statement for household 1042, showing net amount, service charge, tax and the amount
          charged to the account for dues, green fees, a dining tab and a pro shop chit
        </caption>
        <thead>
          <tr>
            <th scope="col">Charge</th>
            <th scope="col">Outlet</th>
            <th scope="col" className="n">Net</th>
            <th scope="col" className="n">Service 10%</th>
            <th scope="col" className="n">VAT 5%</th>
            <th scope="col" className="n">Charged</th>
          </tr>
        </thead>
        <tbody>
          {CLUB_STATEMENT.map((row) => (
            <tr key={row.charge}>
              <td>{row.charge}</td>
              <td>{row.outlet}</td>
              <td className="n">{row.net}</td>
              <td className="n">{row.service}</td>
              <td className="n">{row.vat}</td>
              <td className="n">{row.charged}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>{CLUB_STATEMENT_TOTAL.charge}</td>
            <td>{CLUB_STATEMENT_TOTAL.outlet}</td>
            <td className="n">{CLUB_STATEMENT_TOTAL.net}</td>
            <td className="n">{CLUB_STATEMENT_TOTAL.service}</td>
            <td className="n">{CLUB_STATEMENT_TOTAL.vat}</td>
            <td className="n">{CLUB_STATEMENT_TOTAL.charged}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
