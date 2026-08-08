import React from 'react';
import { BACK_OFFICE_MODULES } from '@/lib/data/finance';

/**
 * The whole argument for Flowza Finance, drawn as plumbing: eight back-office
 * modules branch onto one horizontal double-entry ledger line, which runs on
 * into the trial balance. Odd-numbered modules sit above the line, even-numbered
 * below it, so every coordinate derives from the array index in
 * `BACK_OFFICE_MODULES` rather than being placed by hand.
 */

const NODE_W = 190;
const NODE_H = 52;
const STEM_OFFSET = NODE_W / 2; // stems leave the middle of each node
const LEDGER_Y = 180;
const TOP_Y = 34;
const BOTTOM_Y = 280;

const above = BACK_OFFICE_MODULES.filter((_, i) => i % 2 === 0);
const below = BACK_OFFICE_MODULES.filter((_, i) => i % 2 === 1);

const aboveX = (i: number) => 15 + 200 * i;
const belowX = (i: number) => 115 + 200 * i;

export interface LedgerSpineProps {
  className?: string;
}

export function LedgerSpine({ className }: LedgerSpineProps) {
  const stems = [
    ...above.map((_, i) => ({ x: aboveX(i) + STEM_OFFSET, from: 'above' as const })),
    ...below.map((_, i) => ({ x: belowX(i) + STEM_OFFSET, from: 'below' as const })),
  ];

  return (
    <div className={['fsp', className].filter(Boolean).join(' ')}>
      <div className="dscroll" style={{ ['--dmin' as string]: '920px' }}>
        <svg
          viewBox="0 0 1110 350"
          role="img"
          aria-label="Diagram: the eight back-office modules — sales and receivables, purchases and payables, inventory and stock, accounting and banking, payroll, the HR suite, reporting and analytics, and documents — each branch down or up onto a single horizontal double-entry ledger line, which runs on into the trial balance, profit and loss and cash flow statements. The point of the drawing is convergence: none of the eight keeps its own separate books."
        >
          <path className="spine" d="M30 180H928" />
          <polygon className="jd" points="928,175 936,180 928,185" />
          <text className="lab" x="34" y="204">
            ONE CONNECTED LEDGER
          </text>

          <g className="stem">
            {stems.map((s) => (
              <path
                key={`stem-${s.from}-${s.x}`}
                d={
                  s.from === 'above'
                    ? `M${s.x} ${TOP_Y + NODE_H}V${LEDGER_Y - 8}`
                    : `M${s.x} ${BOTTOM_Y}V${LEDGER_Y + 8}`
                }
              />
            ))}
          </g>

          <g className="arw">
            {stems.map((s) =>
              s.from === 'above' ? (
                <polygon
                  key={`arw-above-${s.x}`}
                  points={`${s.x - 4},${LEDGER_Y - 8} ${s.x + 4},${LEDGER_Y - 8} ${s.x},${LEDGER_Y}`}
                />
              ) : (
                <polygon
                  key={`arw-below-${s.x}`}
                  points={`${s.x - 4},${LEDGER_Y + 8} ${s.x + 4},${LEDGER_Y + 8} ${s.x},${LEDGER_Y}`}
                />
              )
            )}
          </g>

          <g className="jd">
            {stems.map((s) => (
              <circle key={`jd-${s.from}-${s.x}`} cx={s.x} cy={LEDGER_Y} r="3" />
            ))}
          </g>

          <g className="node">
            {above.map((m, i) => (
              <React.Fragment key={m.index}>
                <rect x={aboveX(i)} y={TOP_Y} width={NODE_W} height={NODE_H} rx="2" />
                <text className="ix" x={aboveX(i) + 14} y={TOP_Y + 22}>
                  {m.index}
                </text>
                <text className="nm" x={aboveX(i) + 14} y={TOP_Y + 40}>
                  {m.name.toUpperCase()}
                </text>
              </React.Fragment>
            ))}
            {below.map((m, i) => (
              <React.Fragment key={m.index}>
                <rect x={belowX(i)} y={BOTTOM_Y} width={NODE_W} height={NODE_H} rx="2" />
                <text className="ix" x={belowX(i) + 14} y={BOTTOM_Y + 22}>
                  {m.index}
                </text>
                <text className="nm" x={belowX(i) + 14} y={BOTTOM_Y + 40}>
                  {m.name.toUpperCase()}
                </text>
              </React.Fragment>
            ))}
          </g>

          <g className="term">
            <rect x="940" y="150" width="160" height="60" rx="2" />
            <text x="1020" y="175" textAnchor="middle">
              TRIAL BALANCE
            </text>
            <text x="1020" y="193" textAnchor="middle">
              P&amp;L · CASH FLOW
            </text>
          </g>
        </svg>
      </div>
      <p className="tiny" style={{ marginTop: 'var(--s5)', maxWidth: '74ch' }}>
        Read it as plumbing rather than an org chart: eight branches, one line, one set of books.
        The numbered nodes match the modules below.
      </p>
    </div>
  );
}
