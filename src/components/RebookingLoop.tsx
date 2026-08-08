'use client';

import React, { useState, KeyboardEvent } from 'react';
import { LOOP } from '@/lib/data/spa';

export interface RebookingLoopProps {
  initialStage?: number;
}

export function RebookingLoop({ initialStage = 3 }: RebookingLoopProps) {
  const [stage, setStage] = useState(initialStage);

  function handleKeyDown(i: number, e: KeyboardEvent<SVGGElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setStage(i);
    }
  }

  const current = LOOP[stage];

  const stations: { i: number; x: number; y: number; label: string; ariaLabel: string }[] = [
    { i: 0, x: 40,  y: 40,  label: 'VISIT',     ariaLabel: 'Stage 1, visit'          },
    { i: 1, x: 350, y: 40,  label: 'NOTES',     ariaLabel: 'Stage 2, notes'          },
    { i: 2, x: 660, y: 40,  label: 'RECOMMEND', ariaLabel: 'Stage 3, recommendation' },
    { i: 3, x: 660, y: 230, label: 'REBOOK',    ariaLabel: 'Stage 4, rebook'         },
    { i: 4, x: 350, y: 230, label: 'REMIND',    ariaLabel: 'Stage 5, remind'         },
    { i: 5, x: 40,  y: 230, label: 'RETURN',    ariaLabel: 'Stage 6, return'         },
  ];

  return (
    <div className="loop rv">
      <div className="dscroll" style={{ ['--dmin' as string]: '700px' }}>
        <svg viewBox="0 0 880 330" role="img" aria-label="A six-stage retention loop: visit, notes, recommendation, rebooking, reminder, and return to the next visit">
          <g className="rail">
            <path d="M220 65H340" />
            <path d="M530 65H650" />
            <path d="M750 92V228" />
            <path d="M660 255H540" />
            <path d="M350 255H230" />
            <path d="M130 228V92" />
          </g>
          <g className="rarw">
            <polygon points="340,61 348,65 340,69" />
            <polygon points="650,61 658,65 650,69" />
            <polygon points="746,228 750,236 754,228" />
            <polygon points="540,251 532,255 540,259" />
            <polygon points="230,251 222,255 230,259" />
            <polygon points="126,92 130,84 134,92" />
          </g>
          {stations.map(({ i, x, y, label, ariaLabel }) => {
            const isOn = stage === i;
            const textY1 = y + 23;
            const textY2 = y + 40;
            return (
              <g
                key={i}
                className={`st${isOn ? ' is-on' : ''}`}
                data-i={i}
                role="button"
                tabIndex={0}
                aria-label={ariaLabel}
                aria-pressed={isOn}
                onClick={() => setStage(i)}
                onKeyDown={(e) => handleKeyDown(i, e)}
              >
                <rect x={x} y={y} width={180} height={52} rx={2} />
                <text x={x + 18} y={textY1} className="st__n">0{i + 1}</text>
                <text x={x + 18} y={textY2}>{label}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="loopnote" id="loopNote" aria-live="polite">
        <p className="mono" style={{ fontSize: '.5938rem', letterSpacing: '.12em', color: 'var(--fg-3)', marginBottom: '9px' }}>
          STAGE 0{stage + 1}
        </p>
        <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>{current.name}</h3>
        <p className="small" style={{ maxWidth: '76ch' }}>{current.description}</p>
      </div>
    </div>
  );
}
