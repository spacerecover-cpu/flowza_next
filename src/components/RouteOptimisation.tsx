import React from 'react';
import {
  DEPOT,
  DROPS,
  HAND_PLANNED,
  HAND_PLANNED_FIGURES,
  OPTIMISED,
  OPTIMISED_FIGURES,
  type DropPoint,
  type RouteFigure,
  type VanRoute,
} from '@/lib/data/logispro';

/**
 * The signature set piece for Flowza LogisPro: the same twelve drops plotted
 * twice. On the left the order the work arrived in, three vans crossing each
 * other; on the right the identical drops sequenced against traffic, delivery
 * windows, vehicle capacity and driver hours.
 *
 * Nothing is added and nothing is dropped between the two plots — both read the
 * same coordinates out of `DROPS` and differ only in the order.
 */

const STROKE_CLASS: Record<VanRoute['stroke'], string | undefined> = {
  solid: undefined,
  dashed: 'rd--b',
  dotted: 'rd--c',
};

const STROKE_DASH: Record<VanRoute['stroke'], string | undefined> = {
  solid: undefined,
  dashed: '8 5',
  dotted: '2 3.5',
};

const byNumber = new Map<number, DropPoint>(DROPS.map((d) => [d.n, d]));

function tourPath(sequence: number[]): string {
  const legs = sequence
    .map((n) => byNumber.get(n))
    .filter((d): d is DropPoint => Boolean(d))
    .map((d) => `L${d.x} ${d.y}`)
    .join('');
  return `M${DEPOT.x} ${DEPOT.y}${legs}Z`;
}

function RoutePlot({
  routes,
  optimised,
  label,
}: {
  routes: VanRoute[];
  optimised?: boolean;
  label: string;
}) {
  return (
    <svg
      className={['lgpr', optimised ? 'lgpr--opt' : ''].filter(Boolean).join(' ')}
      viewBox="0 0 396 320"
      role="img"
      aria-label={label}
    >
      <g className="rd" aria-hidden="true">
        {routes.map((route) => (
          <path key={route.label} className={STROKE_CLASS[route.stroke]} d={tourPath(route.sequence)} />
        ))}
      </g>
      <g>
        <rect className="dep" x={DEPOT.x - 9} y={DEPOT.y - 9} width="18" height="18" rx="2" />
        <text className="dn" x={DEPOT.x} y={DEPOT.y + 4}>
          D
        </text>
        {DROPS.map((d) => (
          <React.Fragment key={d.n}>
            <circle className="stop" cx={d.x} cy={d.y} r="9" />
            <text className="sn" x={d.x} y={d.y + 3}>
              {d.n}
            </text>
          </React.Fragment>
        ))}
      </g>
    </svg>
  );
}

function RouteKey({ routes, optimised }: { routes: VanRoute[]; optimised?: boolean }) {
  return (
    <div className="lgpkey" aria-hidden="true">
      {routes.map((route) => (
        <span key={route.label}>
          <svg viewBox="0 0 28 6" aria-hidden="true">
            <path
              d="M0 3H28"
              stroke={optimised ? 'var(--sig)' : 'var(--fg-2)'}
              strokeWidth="1.5"
              strokeDasharray={STROKE_DASH[route.stroke]}
            />
          </svg>
          {route.label}
        </span>
      ))}
    </div>
  );
}

function RouteFigures({ figures }: { figures: RouteFigure[] }) {
  return (
    <div className="lgpfig">
      {figures.map((f) => (
        <div key={f.key}>
          <span className="lgpfig__k">{f.key}</span>
          <span className="lgpfig__v">{f.value}</span>
          {f.delta ? <span className="lgpfig__d">{f.delta}</span> : null}
        </div>
      ))}
    </div>
  );
}

export interface RouteOptimisationProps {
  className?: string;
}

export function RouteOptimisation({ className }: RouteOptimisationProps) {
  return (
    <div className={['lgpopt', className].filter(Boolean).join(' ')}>
      <div className="lgpopt__p">
        <div className="lgpopt__h">
          <h3 className="d-s">Planned by hand</h3>
          <span className="tag">As orders arrived</span>
        </div>
        <RoutePlot
          routes={HAND_PLANNED}
          label="Twelve numbered drop points around one depot, served by three vans in the order the orders were taken. Every route crosses the others and each doubles back across the district, so the round covers 486 kilometres in 11 hours 20 minutes of driving and needs three vehicles."
        />
        <RouteKey routes={HAND_PLANNED} />
        <RouteFigures figures={HAND_PLANNED_FIGURES} />
      </div>

      <div className="lgpopt__p">
        <div className="lgpopt__h">
          <h3 className="d-s">Sequenced by LogisPro</h3>
          <span className="tag tag--ai">Optimised</span>
        </div>
        <RoutePlot
          routes={OPTIMISED}
          optimised
          label="The identical twelve drop points and the same depot, sequenced by LogisPro into two vans. Neither route crosses itself or the other and the district splits north and south, so the same work covers 379 kilometres in 8 hours 50 minutes of driving — 22 per cent less distance, with one vehicle released."
        />
        <RouteKey routes={OPTIMISED} optimised />
        <RouteFigures figures={OPTIMISED_FIGURES} />
      </div>
    </div>
  );
}
