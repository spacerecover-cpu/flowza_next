'use client';

import React, { useState } from 'react';
import { PMS_STAGES } from '@/lib/data/pms';

/**
 * The four-stage loop, drawn as a loop.
 *
 * Client component: one selection drives the chips, the boxes on the drawing and
 * the detail panel. Rate hands a score to calibrate, calibrate hands an agreed
 * rating to pay, pay hands a resolved figure to document, and document hands the
 * same person record back to rate. The handoffs are labelled on the rails
 * because the handoff is the argument.
 *
 * The SVG carries `role="img"` and a full sentence description, so its contents
 * are not in the accessibility tree. The chip row is therefore the accessible
 * control — it carries `aria-pressed` — and the boxes are pointer affordances
 * that stay in step with it. The same four steps also exist as a static spine
 * further down the page, so the content survives without JavaScript.
 */

const BOXES: { i: number; x: number; y: number; label: string }[] = [
  { i: 0, x: 40,  y: 40,  label: 'RATE'      },
  { i: 1, x: 640, y: 40,  label: 'CALIBRATE' },
  { i: 2, x: 640, y: 250, label: 'PAY'       },
  { i: 3, x: 40,  y: 250, label: 'DOCUMENT'  },
];

export function PmsLoop() {
  const [sel, setSel] = useState(0);
  const s = PMS_STAGES[sel];

  return (
    <div className="pmsl rv">
      <div className="pmsl__chips">
        {PMS_STAGES.map((stage, i) => (
          <button
            type="button"
            className="chip"
            key={stage.title}
            aria-pressed={sel === i}
            onClick={() => setSel(i)}
          >
            {stage.title}
          </button>
        ))}
      </div>

      <div className="dscroll" style={{ ['--dmin' as string]: '760px' }}>
        <svg
          viewBox="0 0 880 372"
          role="img"
          aria-label="The four stages drawn as a closed cycle: rate hands a score to calibrate, calibrate hands an agreed rating to pay, pay hands a resolved figure to document, and document hands the same person record back to rate for the next cycle. The point of the drawing is that no stage begins with a blank form."
        >
          <g className="pmsl__rail">
            <path d="M240 68H636" />
            <path d="M740 100V246" />
            <path d="M640 278H244" />
            <path d="M140 246V100" />
          </g>
          <g className="pmsl__ar">
            <polygon points="636,64 644,68 636,72" />
            <polygon points="736,246 740,254 744,246" />
            <polygon points="244,274 236,278 244,282" />
            <polygon points="136,100 140,92 144,100" />
          </g>
          <g className="pmsl__hand">
            <text x="440" y="56" textAnchor="middle">THE SCORE, PER KPI OR CONSOLIDATED</text>
            <text x="752" y="176">THE AGREED</text>
            <text x="752" y="190">RATING</text>
            <text x="440" y="300" textAnchor="middle">THE RESOLVED FIGURE, IN LOCAL CURRENCY</text>
            <text x="128" y="176" textAnchor="end">THE SAME</text>
            <text x="128" y="190" textAnchor="end">PERSON RECORD</text>
          </g>
          <text className="pmsl__mid" x="440" y="168" textAnchor="middle">ONE LOOP</text>
          <text className="pmsl__mid" x="440" y="188" textAnchor="middle">ONE CONTINUOUS RECORD</text>

          {BOXES.map((box) => (
            <g
              className={`pmsl__st${sel === box.i ? ' is-on' : ''}`}
              key={box.i}
              onClick={() => setSel(box.i)}
            >
              <rect x={box.x} y={box.y} width="200" height="56" rx="2" />
              <text className="pmsl__ix" x={box.x + 18} y={box.y + 23}>
                {`0${box.i + 1}`}
              </text>
              <text x={box.x + 18} y={box.y + 42}>{box.label}</text>
            </g>
          ))}

          <text className="pmsl__mid" x="40" y="348">
            SUCCESSION PLANNING RUNS ON THIS SAME CYCLE
          </text>
        </svg>
      </div>

      <div className="pmsl__d" aria-live="polite">
        <p className="pmsl__dh">{s.title} · {s.heading}</p>
        <div className="pmsl__dg">
          <span>
            <span className="pmsl__dk">What enters</span>
            <span className="pmsl__dv">{s.enters}</span>
          </span>
          <span>
            <span className="pmsl__dk">What leaves</span>
            <span className="pmsl__dv">{s.leaves}</span>
          </span>
          <span>
            <span className="pmsl__dk">What is written down</span>
            <span className="pmsl__dv">{s.written}</span>
          </span>
        </div>
        <p
          className="small"
          style={{
            marginTop: 'var(--s5)',
            borderTop: '1px solid var(--edge-2)',
            paddingTop: 'var(--s4)',
          }}
        >
          {s.because}
        </p>
      </div>
    </div>
  );
}
