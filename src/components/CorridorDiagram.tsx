import React from 'react';
import { CORRIDOR_LEGS, CORRIDOR_NODES } from '@/lib/data/logispro';

/**
 * One shipment on one corridor: drayage, hub dwell and linehaul inside plan, and
 * a final leg drawn as a prediction because border dwell is running over the
 * trailing average for the crossing.
 *
 * The amber leg is not a report of a late delivery. It is the estimate crossing
 * the delivery window while the vehicle is still short of the border.
 */
export interface CorridorDiagramProps {
  className?: string;
}

export function CorridorDiagram({ className }: CorridorDiagramProps) {
  return (
    <div
      className={['dscroll', className].filter(Boolean).join(' ')}
      style={{ ['--dmin' as string]: '780px' }}
    >
      <svg
        className="lgpcorr"
        viewBox="0 0 1000 150"
        role="img"
        aria-label="Corridor diagram for a shipment running Jebel Ali to Riyadh through a Dammam hub and the Al Batha border crossing. Drayage takes four hours, hub dwell three hours and linehaul eleven hours, all inside plan. Border dwell is running over its trailing average, so the final leg is drawn as a predicted two hour ten minute overrun — the delay is visible before the shipment is actually late."
      >
        {CORRIDOR_LEGS.map((leg) => (
          <path
            key={leg.label}
            d={`M${leg.from} 75 H${leg.to}`}
            stroke={leg.predicted ? 'var(--sig-amber)' : 'var(--sig)'}
            strokeWidth="1.6"
            strokeDasharray={leg.predicted ? '5 4' : undefined}
            fill="none"
          />
        ))}

        <g>
          {CORRIDOR_NODES.map((node) =>
            node.kind === 'terminal' ? (
              <React.Fragment key={node.code}>
                <rect
                  x={node.x}
                  y="58"
                  width="50"
                  height="34"
                  rx="2"
                  fill="none"
                  stroke="var(--edge)"
                />
                <text x={node.codeX ?? node.x + 9} y="79" className="pl">
                  {node.code}
                </text>
              </React.Fragment>
            ) : (
              <React.Fragment key={node.code}>
                <circle
                  cx={node.x}
                  cy="75"
                  r="13"
                  fill="var(--instrument-2)"
                  stroke="var(--sig)"
                  strokeWidth="1.4"
                />
                <text x={node.x} y="79" textAnchor="middle" fontSize="8">
                  {node.code}
                </text>
              </React.Fragment>
            )
          )}
        </g>

        <g>
          {CORRIDOR_LEGS.map((leg) => (
            <text
              key={`lab-${leg.label}`}
              x={leg.labelX}
              y="52"
              className={leg.predicted ? 'am' : undefined}
            >
              {leg.label}
            </text>
          ))}
          {CORRIDOR_NODES.map((node) => (
            <text key={`nm-${node.code}`} x={node.labelX} y="118" className="pl">
              {node.name}
            </text>
          ))}
          {CORRIDOR_NODES.filter((n) => n.dwell).map((node) => (
            <text key={`dw-${node.code}`} x={node.labelX} y="134">
              {node.dwell}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}
