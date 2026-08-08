'use client';

import React, { useState } from 'react';
import { FLEETZA_VEHICLES, MAINT_CHART, formatKm } from '@/lib/data/fleetza';

export interface ComponentLifeChartProps {
  /** Which vehicle the chart opens on. */
  initialVehicle?: number;
}

/**
 * Component life against a today line, per vehicle.
 *
 * Each component is one bar: a solid block for wear already observed up to
 * today, then a dashed block running forward to the predicted failure tick,
 * with the service already booked marked in front of it. Observed and predicted
 * are told apart by dash pattern and by the legend below the chart — never by
 * colour alone.
 *
 * Client component: choosing a vehicle redraws the bars.
 */
export function ComponentLifeChart({ initialVehicle = 0 }: ComponentLifeChartProps) {
  const [sel, setSel] = useState(initialVehicle);

  const vehicle = FLEETZA_VEHICLES[sel];
  const { x0, x1, lookBackKm, spanKm, ticks } = MAINT_CHART;
  const windowStart = vehicle.odometer - lookBackKm;

  /** Odometer reading to horizontal position in the 900-wide viewBox. */
  const x = (km: number) => x0 + ((km - windowStart) / spanKm) * (x1 - x0);
  const todayX = x(vehicle.odometer);

  const axisTicks = Array.from({ length: ticks }, (_, i) => {
    const km = windowStart + i * 11500;
    return { km, tx: x(km) };
  });

  return (
    <>
      <div className="flzchips" role="group" aria-label="Choose a vehicle">
        {FLEETZA_VEHICLES.map((v, i) => (
          <button
            key={v.reg}
            type="button"
            className="chip"
            aria-pressed={i === sel}
            onClick={() => setSel(i)}
          >
            {v.reg} · {v.cls}
          </button>
        ))}
      </div>

      <div className="panel" style={{ padding: 'var(--s5)' }}>
        <div className="dscroll" style={{ ['--dmin' as string]: '860px' }}>
          <svg
            className="flzmt"
            viewBox="0 0 900 310"
            role="img"
            aria-label="Component life chart for one vehicle. Each of five components is drawn as a bar: a solid block for wear already observed up to today, then a dashed block running forward to the predicted failure point, with a marker showing the service already scheduled in front of it. Every marker sits before the end of its dashes, which is the point — the component is replaced on plan rather than after it has stranded the vehicle."
          >
            <line className="ax" x1={x0} y1="272" x2={x1} y2="272" />
            {axisTicks.map(({ km, tx }) => (
              <g key={km}>
                <line className="ax" x1={tx.toFixed(1)} y1="272" x2={tx.toFixed(1)} y2="278" />
                <text x={tx.toFixed(1)} y="292" textAnchor="middle">{formatKm(km)}</text>
              </g>
            ))}
            <text x={x0} y="308">ODOMETER · KM</text>

            {vehicle.components.map((c, i) => {
              const y = 62 + i * 44;
              const failX = x(c.predictedKm);
              const schedX = x(c.scheduledKm);
              return (
                <g key={c.name}>
                  <rect className="lane" x={x0} y={y - 7} width={x1 - x0} height="14" rx="1" />
                  <line className="obs" x1={x0} y1={y} x2={todayX.toFixed(1)} y2={y} />
                  <line className="prd" x1={todayX.toFixed(1)} y1={y} x2={failX.toFixed(1)} y2={y} />
                  <line className="fail" x1={failX.toFixed(1)} y1={y - 12} x2={failX.toFixed(1)} y2={y + 12} />
                  <polygon
                    className="sch"
                    points={`${schedX.toFixed(1)},${y - 9} ${(schedX + 6).toFixed(1)},${y - 19} ${(schedX - 6).toFixed(1)},${y - 19}`}
                  />
                  <text className="cmp" x="0" y={y - 2}>{c.name}</text>
                  <text x="0" y={y + 11}>{c.worn}% WORN</text>
                  <text x="832" y={y + 3}>+{formatKm(c.predictedKm - vehicle.odometer)} KM</text>
                </g>
              );
            })}

            <line className="tdy" x1={todayX.toFixed(1)} y1="34" x2={todayX.toFixed(1)} y2="272" />
            <text className="tdyt" x={(todayX + 7).toFixed(1)} y="26">
              TODAY · {formatKm(vehicle.odometer)} KM
            </text>
            <text x={x1} y="26" textAnchor="end">
              {vehicle.reg} · {vehicle.cls.toUpperCase()}
            </text>
          </svg>
        </div>

        <div className="flzkey">
          <span>
            <svg viewBox="0 0 30 10" aria-hidden="true">
              <path d="M0 5H30" stroke="var(--fg)" strokeWidth="9" />
            </svg>
            Observed wear
          </span>
          <span>
            <svg viewBox="0 0 30 10" aria-hidden="true">
              <path d="M0 5H30" stroke="var(--sig-amber)" strokeWidth="9" strokeDasharray="5 4" />
            </svg>
            Predicted remaining
          </span>
          <span>
            <svg viewBox="0 0 30 10" aria-hidden="true">
              <polygon points="15,0 21,9 9,9" fill="var(--fg)" />
            </svg>
            Service scheduled
          </span>
          <span>
            <svg viewBox="0 0 30 10" aria-hidden="true">
              <path d="M15 0V10" stroke="var(--sig)" strokeWidth="1.4" strokeDasharray="3 3" />
            </svg>
            Today
          </span>
        </div>

        <p className="tiny" aria-live="polite" style={{ marginTop: 'var(--s5)', maxWidth: '82ch' }}>
          {vehicle.note}
        </p>
      </div>
    </>
  );
}
