import React from 'react';
import { WAREHOUSE_STEPS } from '@/lib/data/logispro';

/**
 * Putaway to dispatch, with the keyboard taken out. Four hops behind the fleet,
 * each confirmed by scanning a barcode or a QR code rather than by typing it —
 * which is what removes the manual entry and the picking error that follows it.
 */

const BOX_W = 200;
const STEP_PITCH = 245;
const RAIL_Y = 112;
const BOX_Y = 80;

/** Widths of the five bars in the little barcode glyph, and their x offsets. */
const BARCODE: { dx: number; w: number }[] = [
  { dx: 18, w: 2.5 },
  { dx: 23, w: 4 },
  { dx: 29.5, w: 2 },
  { dx: 34, w: 3 },
  { dx: 39.5, w: 2 },
];

const boxX = (i: number) => 20 + STEP_PITCH * i;

export interface WarehouseRailProps {
  className?: string;
}

export function WarehouseRail({ className }: WarehouseRailProps) {
  const joins = WAREHOUSE_STEPS.slice(0, -1).map((_, i) => boxX(i) + BOX_W);

  return (
    <div
      className={['dscroll', className].filter(Boolean).join(' ')}
      style={{ ['--dmin' as string]: '880px' }}
    >
      <svg
        className="lgpwh"
        viewBox="0 0 970 250"
        role="img"
        aria-label="A four-step warehouse rail — putaway, picking, packing then dispatch. Each step is confirmed by a barcode or QR scan: pallet label to bin, bin to SKU and quantity, item into carton, then carton and vehicle together. No step depends on typed entry, and the final scan places the shipment into live tracking."
      >
        <g className="rail">
          {joins.map((x) => (
            <path key={`rail-${x}`} d={`M${x} ${RAIL_Y}H${x + 38}`} />
          ))}
        </g>
        <g className="rarw">
          {joins.map((x) => (
            <polygon
              key={`arw-${x}`}
              points={`${x + 38},${RAIL_Y - 5} ${x + 46},${RAIL_Y} ${x + 38},${RAIL_Y + 5}`}
            />
          ))}
        </g>

        {WAREHOUSE_STEPS.map((step, i) => {
          const x = boxX(i);
          return (
            <g className="sx" key={step.index}>
              <text className="n" x={x} y="56">
                STEP {step.index}
              </text>
              <rect x={x} y={BOX_Y} width={BOX_W} height="64" rx="2" />
              <g className="bc">
                {BARCODE.map((bar) => (
                  <rect
                    key={`${step.index}-${bar.dx}`}
                    x={x + bar.dx}
                    y="98"
                    width={bar.w}
                    height="28"
                  />
                ))}
              </g>
              <text className="t" x={x + 56} y="117">
                {step.title}
              </text>
              <text x={x} y="176">
                {step.scan[0]}
              </text>
              <text x={x} y="192">
                {step.scan[1]}
              </text>
              <text x={x} y="216">
                {step.result}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
