import React from 'react';
import { PMS_MARKETS, PMS_MATRIX, type PmsMatrixCell } from '@/lib/data/pms';

/**
 * The compensation engine's locality. Server component.
 *
 * Read the table down a column and you have one market's rules. Read it across a
 * row and you have the point: every row is the same resolution step and only the
 * rule set changes. The last row reads "Configuration" four times, which is the
 * claim about how a market is added.
 *
 * Two limits are stated in the cells themselves and must not be softened. An
 * em-dash means PMS does not ship it: there is no UAE workforce nationalisation
 * dataset. And the Gulf wage-protection figures are computed today while the
 * bank-file (WPS) export is on the roadmap and is not in the product.
 */
function Cell({ cell }: { cell: PmsMatrixCell }) {
  switch (cell.kind) {
    case 'strong':
      return <b>{cell.text}</b>;
    case 'same':
      return (
        <>
          <span className="same">{cell.text}</span>
          {cell.detail && (
            <>
              <br />
              {cell.detail}
            </>
          )}
        </>
      );
    case 'none':
      return (
        <>
          —{cell.footnote && <sup>{cell.footnote}</sup>}
        </>
      );
    case 'roadmap':
      return (
        <>
          {cell.text}
          <span className="rd">{cell.badge}</span>
        </>
      );
    case 'rich':
      return (
        <>
          {cell.parts.map((p, i) =>
            p.strong ? <b key={i}>{p.text}</b> : <React.Fragment key={i}>{p.text}</React.Fragment>
          )}
        </>
      );
  }
}

export function PmsCompMatrix() {
  return (
    <div className="tw">
      <table className="pmsmx">
        <caption className="sr">
          How the compensation engine resolves pay in each of the four markets. Every row is the same
          resolution step; only the rule set differs. India carries EPF, ESI, Professional Tax and
          gratuity; the United Arab Emirates, Saudi Arabia and Oman carry end-of-service per legal
          entity, with Saudization and Omanization workforce data in the two markets that publish it.
          Wage-protection figures are computed for the three Gulf markets but the bank-file export is
          on the roadmap rather than in the product.
        </caption>
        <thead>
          <tr>
            <th scope="col">Resolution step</th>
            {PMS_MARKETS.map((m) => (
              <th scope="col" key={m}>{m}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PMS_MATRIX.map((row) => (
            <tr key={row.step}>
              <th scope="row">
                {row.step}
                <i>{row.ordinal}</i>
              </th>
              {row.cells.map((cell, i) => (
                <td key={PMS_MARKETS[i]} className={cell.kind === 'none' ? 'no' : undefined}>
                  <Cell cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
