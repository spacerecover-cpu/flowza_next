import React from 'react';
import { COMPLIANCE_MATRIX, type ComplianceCell } from '@/lib/data/finance';

/**
 * Four countries against indirect tax, corporate and withholding tax, payroll
 * statutory filings and documents — stated as a grid so the edges of the
 * coverage are as legible as the middle.
 *
 * A cell we do not ship is an em-dash carrying a footnote marker. It is never a
 * tick, never "on request" and never left blank, and the footnote below the
 * table says in words what the dash means.
 */

function Cell({ cell }: { cell: ComplianceCell }) {
  if (!cell.shipped) {
    return (
      <td className="no">
        —<sup>1</sup>
      </td>
    );
  }
  return (
    <td>
      {cell.lead ? <b>{cell.lead}</b> : null}
      {cell.text}
    </td>
  );
}

export interface ComplianceMatrixProps {
  className?: string;
}

export function ComplianceMatrix({ className }: ComplianceMatrixProps) {
  return (
    <>
      <div className={['tw', className].filter(Boolean).join(' ')}>
        <table className="fmx">
          <caption className="sr">
            Compliance coverage by country across indirect tax, corporate and withholding tax,
            payroll statutory filings and document requirements. India and the United Arab Emirates
            are covered on all four; Oman has no corporate tax engine and Saudi Arabia has neither
            an indirect nor a corporate tax engine today, marked with an em-dash and explained in
            the note below the table.
          </caption>
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Indirect tax</th>
              <th scope="col">Corporate &amp; withholding tax</th>
              <th scope="col">Payroll statutory</th>
              <th scope="col">Documents</th>
            </tr>
          </thead>
          <tbody>
            {COMPLIANCE_MATRIX.map((row) => (
              <tr key={row.country}>
                <th scope="row">{row.country}</th>
                <Cell cell={row.indirectTax} />
                <Cell cell={row.corporateTax} />
                <Cell cell={row.payroll} />
                <Cell cell={row.documents} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="tiny" style={{ marginTop: 'var(--s5)', maxWidth: '82ch' }}>
        <sup>1</sup> An em-dash means we do not ship it and do not claim it. Saudi Arabia runs on
        FlowZa Finance today for payroll statutory filings and Arabic documents; the Gulf tax
        engines cover the UAE and Oman, and further GCC coverage is on the roadmap rather than in
        the product. Oman has no corporate tax engine. Where a cell is filled, the rule is in the
        engine — not in a spreadsheet your accountant maintains beside it.
      </p>
    </>
  );
}
