import React from 'react';
import { SYSTEMS } from '@/lib/data/systems';
import { MARK_TEXT, MatrixMark, FUNCTION_COLUMNS, COVERAGE_MATRIX } from '@/lib/data/recordMatrix';

const CELL_CLASS: Record<MatrixMark, string> = {
  C: 'cell cell--w',
  S: 'cell cell--r',
  N: 'cell cell--n',
};

/**
 * Nine applications down, six business functions across. Every cell says core,
 * supporting, or not covered — and says it in words to a screen reader, because
 * a table of single letters is not a claim anyone can check by ear.
 *
 * Each row is read on its own. The matrix describes what one application covers
 * if you buy only that one; it is not a map of anything passing between them.
 */
export function RecordMatrix() {
  return (
    <>
      <div className="mtx-scroll rv">
        <table className="mtx">
          <caption className="sr">
            Matrix of the nine FlowZa AI applications against six business functions — selling, stock,
            money, people, field and site, and customer — marking each as a core capability, a supporting
            capability, or not covered. Each row describes one application on its own; no row depends on
            any other application being present.
          </caption>
          <thead>
            <tr>
              <th scope="col">Application</th>
              {FUNCTION_COLUMNS.map((col) => (
                <th key={col.key} scope="col">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COVERAGE_MATRIX.map((row) => {
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
                      <td key={FUNCTION_COLUMNS[ci].key}>
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
        <span><span className="cell cell--w" aria-hidden="true">C</span>Core capability</span>
        <span><span className="cell cell--r" aria-hidden="true">S</span>Supporting capability</span>
        <span><span className="cell cell--n" aria-hidden="true">—</span>Not covered</span>
      </div>
    </>
  );
}
