'use client';

import React, { useState } from 'react';
import {
  PMS_BAND_LABELS,
  PMS_DISTRIBUTIONS,
  PMS_REFERENCE_POINTS,
  type PmsDistributionView,
} from '@/lib/data/pms';

/**
 * The cohort distribution, raw and calibrated.
 *
 * Client component: one toggle between the same thirty ratings as three managers
 * submitted them and as a recorded calibration session left them. Both are drawn
 * against the same dashed reference distribution.
 *
 * The dashed line is a comparison, not a quota. The calibrated result
 * deliberately does not sit on it, and the read-out says so.
 */

const REF_POINTS = PMS_REFERENCE_POINTS.map((p) => `${p.x},${p.y}`).join(' ');

function Chart({ view, calibrated }: { view: PmsDistributionView; calibrated: boolean }) {
  return (
    <div className="dscroll" style={{ ['--dmin' as string]: '700px' }}>
      <svg viewBox="0 0 760 320" role="img" aria-label={view.ariaLabel}>
        <g className="gl">
          <line x1="100" y1="180" x2="700" y2="180" />
          <line x1="100" y1="110" x2="700" y2="110" />
        </g>
        <line className="ax" x1="100" y1="250" x2="700" y2="250" />
        <g className="bs" textAnchor="end">
          <text x="92" y="184">5</text>
          <text x="92" y="114">10</text>
        </g>
        <g className={calibrated ? 'bar bar--cal' : 'bar'}>
          {view.bars.map((bar) => (
            <rect key={bar.x} x={bar.x} y={bar.y} width="68" height={bar.height} />
          ))}
        </g>
        <g className="cnt" textAnchor="middle">
          {view.bars.map((bar) => (
            <text key={bar.labelX} x={bar.labelX} y={bar.labelY}>
              {bar.count}
            </text>
          ))}
        </g>
        <polyline className="ref" points={REF_POINTS} />
        <g className="refd">
          {PMS_REFERENCE_POINTS.map((p) => (
            <circle key={p.x} cx={p.x} cy={p.y} r="3" />
          ))}
        </g>
        <text className="rl" x="400" y={view.refLabelY} textAnchor="middle">
          REFERENCE DISTRIBUTION · 10 / 20 / 40 / 20 / 10
        </text>
        <g className="bl" textAnchor="middle">
          {PMS_BAND_LABELS.map((b) => (
            <text key={b.value} x={b.x} y="274">
              {b.value}
            </text>
          ))}
        </g>
        <g className="bs" textAnchor="middle">
          {PMS_BAND_LABELS.map((b) => (
            <text key={b.name} x={b.x} y="292">
              {b.name}
            </text>
          ))}
        </g>
        <text className="bs" x="100" y="312">{view.footer}</text>
      </svg>
    </div>
  );
}

export function PmsDistribution() {
  const [calibrated, setCalibrated] = useState(false);
  const view = calibrated ? PMS_DISTRIBUTIONS.calibrated : PMS_DISTRIBUTIONS.raw;

  return (
    <div className="pmsd rv" style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
      <div className="pmsd__t">
        <span className="pmsd__lab">Cohort distribution · n = 30 · 3 managers</span>
        <button
          type="button"
          className="chip"
          aria-pressed={!calibrated}
          onClick={() => setCalibrated(false)}
        >
          {PMS_DISTRIBUTIONS.raw.chip}
        </button>
        <button
          type="button"
          className="chip"
          aria-pressed={calibrated}
          onClick={() => setCalibrated(true)}
        >
          {PMS_DISTRIBUTIONS.calibrated.chip}
        </button>
      </div>

      <div className="pmsd__b">
        <Chart view={view} calibrated={calibrated} />
      </div>

      <div className="pmsd__out" aria-live="polite">
        {view.readout.map((seg, i) => (seg.strong ? <b key={i}>{seg.text}</b> : <React.Fragment key={i}>{seg.text}</React.Fragment>))}
      </div>
    </div>
  );
}
