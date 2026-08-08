import React from 'react';
import { FLEETZA_COST_SEGMENTS } from '@/lib/data/fleetza';

/**
 * One vehicle's cost per kilometre, divided into its five components.
 * Depreciation and fuel together are more than half of it, which is why a
 * replacement decision and a driving-behaviour programme move the same number.
 *
 * Static. Server component.
 */
export function CostPerKilometre() {
  return (
    <svg
      className="flzcost"
      viewBox="0 0 640 200"
      role="img"
      aria-label="A cost-per-kilometre bar for one vehicle, divided into its five components: depreciation 0.74, fuel 0.68, maintenance 0.51, insurance 0.28 and acquisition finance 0.20, summing to 2.41 dirhams per kilometre. Depreciation and fuel together are more than half the running cost, which is why a replacement decision and a driving-behaviour programme move the same number."
    >
      <g>
        {FLEETZA_COST_SEGMENTS.map((s) => (
          <text key={s.label} x={s.mid} y={s.labelY} textAnchor="middle">
            {s.label}
          </text>
        ))}
      </g>
      <g className="tk">
        {FLEETZA_COST_SEGMENTS.map((s) => (
          <path key={s.label} d={`M${s.mid} ${s.tickTop}V80`} />
        ))}
      </g>
      <g stroke="var(--bg)" strokeWidth="1.6">
        {FLEETZA_COST_SEGMENTS.map((s) => (
          <rect key={s.label} x={s.x} y="82" width={s.width} height="56" fill={s.fill} />
        ))}
      </g>
      <g className="v">
        {FLEETZA_COST_SEGMENTS.map((s) => (
          <text key={s.label} x={s.mid} y="162" textAnchor="middle">
            {s.value}
          </text>
        ))}
      </g>
      <text x="20" y="188">AED PER KILOMETRE · SEGMENTS SUM TO 2.41</text>
    </svg>
  );
}
