'use client';

import React, { useState } from 'react';
import {
  FLEETZA_DRIVERS,
  FLEETZA_EVENT_TYPES,
  FLEETZA_MAX_DEDUCTION,
  driverScore,
} from '@/lib/data/fleetza';

export interface DriverScoringProps {
  /** Which driver the board opens on. Defaults to Daniel Okonkwo, whose 100 − 14 = 86 is the worked example. */
  initialDriver?: number;
}

/**
 * A composite driver score taken apart into the four event types the AI reads.
 * Selecting a driver shows events per 100 km and a deduction for each, then the
 * arithmetic that produced the composite — a hundred less the four deductions
 * and nothing else, which is what makes the number arguable.
 *
 * Client component: the selection is the set piece.
 */
export function DriverScoring({ initialDriver = 4 }: DriverScoringProps) {
  const [sel, setSel] = useState(initialDriver);

  const driver = FLEETZA_DRIVERS[sel];
  const score = driverScore(driver.deductions);
  const lost = 100 - score;
  const registration = driver.vehicle.split(' · ')[0];

  return (
    <>
      <div className="c-5">
        <div className="flzdrv">
          <div className="flzdrv__hd">
            <span>Driver · vehicle</span>
            <span style={{ textAlign: 'right' }}>Score</span>
          </div>
          <div role="group" aria-label="Driver safety scores, highest first">
            {FLEETZA_DRIVERS.map((d, i) => {
              const isOn = i === sel;
              return (
                <button
                  key={d.name}
                  type="button"
                  className={`flzdrv__row${isOn ? ' is-on' : ''}`}
                  aria-pressed={isOn}
                  onClick={() => setSel(i)}
                >
                  <span className="flzdrv__rk">{i + 1}</span>
                  <span className="flzdrv__nm">
                    {d.name}
                    <span className="flzdrv__sub">{d.vehicle}</span>
                  </span>
                  <span className="flzdrv__sc">{driverScore(d.deductions)}</span>
                </button>
              );
            })}
          </div>
        </div>
        <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
          Ranked on the last 30 days. Scores are published to the driver as well as to the manager,
          and every event behind one is dated and reviewable.
        </p>
      </div>

      <div className="c-7">
        <div className="flzsc" aria-live="polite">
          <div className="flzsc__hd">
            <div>
              <p
                className="mono"
                style={{
                  fontSize: '.5938rem',
                  letterSpacing: '.12em',
                  color: 'var(--fg-3)',
                  marginBottom: '7px',
                }}
              >
                DRIVER FILE · {registration}
              </p>
              <p className="flzsc__nm">{driver.name}</p>
            </div>
            <p className="flzsc__big">
              {score} <i>/ 100</i>
            </p>
          </div>

          {FLEETZA_EVENT_TYPES.map((event, j) => (
            <div className="flzsc__ev" key={event}>
              <span className="flzsc__k">{event}</span>
              <span className="flzsc__r">{driver.rates[j].toFixed(1)} / 100 km</span>
              <span className="flzsc__bar">
                <i
                  style={{
                    width: `${Math.round((driver.deductions[j] / FLEETZA_MAX_DEDUCTION) * 100)}%`,
                  }}
                />
              </span>
              <span className="flzsc__d">
                {driver.deductions[j] ? `−${driver.deductions[j]}` : '0'}
              </span>
            </div>
          ))}

          <div className="flzsc__tot">
            <span>Composite</span>
            <span>
              100 &minus; {lost} = {score}
            </span>
          </div>

          <div className="flzsc__ft">
            <p className="small">{driver.coaching}</p>
          </div>
        </div>
      </div>
    </>
  );
}
