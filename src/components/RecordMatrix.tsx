import React from 'react';
import { SYSTEMS } from '@/lib/data/systems';
import { MARK_TEXT, MatrixMark, RECORD_COLUMNS, RECORD_MATRIX } from '@/lib/data/recordMatrix';

const CELL_CLASS: Record<MatrixMark, string> = {
  W: 'cell cell--w',
  R: 'cell cell--r',
  N: 'cell cell--n',
};

/**
 * The whole architecture on one page: nine systems down, six record types
 * across. Every cell says writes, reads, or not used — and says it in words to
 * a screen reader, because a table of single letters is not a claim anyone can
 * check by ear.
 */
export function RecordMatrix() {
  return (
    <>
      <div className="mtx-scroll rv">
        <table className="mtx">
          <caption className="sr">
            Matrix of the nine Flowza systems against the six shared record types, marking whether each
            system writes to, reads from, or does not use each record type. Five of the nine write to the
            party record and five write to the person record, which is why a customer, a member, a guest
            and an employee are single rows across the whole estate.
          </caption>
          <thead>
            <tr>
              <th scope="col">System</th>
              {RECORD_COLUMNS.map((col) => (
                <th key={col.record} scope="col">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RECORD_MATRIX.map((row) => {
              const system = SYSTEMS.find((s) => s.key === row.system);
              if (!system) return null;
              return (
                <tr key={row.system}>
                  <th scope="row">
                    {system.name}
                    <span>{system.app}</span>
                  </th>
                  {row.marks.map((mark, ci) => {
                    const text = MARK_TEXT[mark];
                    return (
                      <td key={RECORD_COLUMNS[ci].record}>
                        <span className={CELL_CLASS[mark]}>
                          {text.head}
                          <span className="sr">{text.rest}</span>
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mtx__key rv">
        <span><span className="cell cell--w" aria-hidden="true">W</span>Writes the record</span>
        <span><span className="cell cell--r" aria-hidden="true">R</span>Reads it, does not own it</span>
        <span><span className="cell cell--n" aria-hidden="true">—</span>Does not use it</span>
      </div>
    </>
  );
}
