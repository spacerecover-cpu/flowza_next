import React from 'react';
import { OFFLINE_DAY } from '@/lib/data/pos';

/**
 * The signature set piece for FlowZa POS: one trading day with two and a half
 * hours of no connection in the middle of it, drawn in four lanes.
 *
 * The argument is that an outage changes *when* the books are updated, not
 * whether the shop can trade — so sales continue as outlined bars, the queue on
 * the device climbs as a staircase, the queue clears in a burst of catch-up
 * postings on reconnect, and the one sale that genuinely conflicts is held for a
 * person rather than merged quietly.
 *
 * Every x position derives from the clock: the axis runs one hour to 68 units,
 * so a half-hour slot is 34 and the outage edges land where their timestamps
 * say they should.
 */

const X0 = 160;
const PX_PER_HOUR = 68;
const BAR_BASE = 190;
const QUEUE_BASE = 282;
const AXIS_Y = 352;
const RIGHT = 1112;
const BAND_Y = 56;
const BAND_H = 18;

function xAt(clock: string): number {
  const [h, m] = clock.split(':').map(Number);
  return Math.round(X0 + PX_PER_HOUR * (h + m / 60 - OFFLINE_DAY.openHour));
}

/** Queue depth, one step per half hour held. The first step clears the axis. */
function depthY(level: number): number {
  return level === 0 ? QUEUE_BASE : QUEUE_BASE - 1 - 11 * level;
}

export interface OfflineTimelineProps {
  className?: string;
}

export function OfflineTimeline({ className }: OfflineTimelineProps) {
  const { slots, outage, peakHeld, heldConflicts, burst, openHour, closeHour } = OFFLINE_DAY;
  const gapFrom = xAt(outage.from);
  const gapTo = xAt(outage.to);
  const gapMid = Math.round((gapFrom + gapTo) / 2);

  const queued = slots.filter((s) => s.queued);
  const staircase: string[] = [`${gapFrom},${QUEUE_BASE}`];
  queued.forEach((slot, i) => {
    const x = xAt(slot.time);
    staircase.push(`${x},${depthY(i)}`, `${x},${depthY(i + 1)}`);
  });
  staircase.push(`${gapTo},${depthY(queued.length)}`, `${gapTo},${QUEUE_BASE}`);

  const hours: number[] = [];
  for (let h = openHour; h <= closeHour; h += 1) hours.push(h);

  return (
    <div className={['oline', className].filter(Boolean).join(' ')}>
      <div className="dscroll" style={{ ['--dmin' as string]: '960px' }}>
        <svg
          viewBox="0 0 1160 400"
          role="img"
          aria-label="Timeline of one trading day, in four lanes. Connectivity is up until 13:40 and returns at 16:10. Through those two and a half hours sales keep landing at the till and queue on the device, reaching a peak of 148 held sales, while nothing posts to FlowZa Finance. When the link returns the queue clears in a burst of catch-up postings and the ledger is level again, with one conflicting sale held for a person to decide rather than merged automatically. The conclusion: the outage changes when the books are updated, not whether the shop can trade."
        >
          <defs>
            <pattern
              className="hatch"
              id="posHatch"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <line x1="0" y1="6" x2="6" y2="0" />
            </pattern>
          </defs>

          <g className="lane" textAnchor="end">
            <text x="148" y="69">CONNECTIVITY</text>
            <text x="148" y="188">SALES · HALF HOUR</text>
            <text x="148" y="280">QUEUE ON DEVICE</text>
            <text x="148" y="350">POSTED · FINANCE</text>
          </g>

          {/* connectivity: up, down, up */}
          <rect className="link" x={X0} y={BAND_Y} width={gapFrom - X0} height={BAND_H} />
          <rect
            x={gapFrom}
            y={BAND_Y}
            width={gapTo - gapFrom}
            height={BAND_H}
            fill="url(#posHatch)"
          />
          <rect
            className="gapbox"
            x={gapFrom}
            y={BAND_Y}
            width={gapTo - gapFrom}
            height={BAND_H}
          />
          <rect className="link" x={gapTo} y={BAND_Y} width={RIGHT - gapTo} height={BAND_H} />
          <text className="note note--amb" x={gapMid} y="46" textAnchor="middle">
            LINK DOWN {outage.from} → {outage.to}
          </text>

          <g className="brk">
            <line x1={gapFrom} y1={BAND_Y} x2={gapFrom} y2={AXIS_Y} />
            <line x1={gapTo} y1={BAND_Y} x2={gapTo} y2={AXIS_Y} />
          </g>

          <g className="grid">
            <line x1={X0} y1={BAR_BASE} x2={RIGHT} y2={BAR_BASE} />
            <line x1={X0} y1={QUEUE_BASE} x2={RIGHT} y2={QUEUE_BASE} />
          </g>

          {/* sales that posted as they happened */}
          <g className="bar">
            {slots
              .filter((s) => !s.queued)
              .map((s) => (
                <rect
                  key={`bar-${s.time}`}
                  x={xAt(s.time) - 3.5}
                  y={BAR_BASE - s.sales}
                  width="7"
                  height={s.sales}
                />
              ))}
          </g>

          {/* sales taken while the link was down */}
          <g className="barq">
            {queued.map((s) => (
              <rect
                key={`barq-${s.time}`}
                x={xAt(s.time) - 3.5}
                y={BAR_BASE - s.sales}
                width="7"
                height={s.sales}
              />
            ))}
          </g>

          <text className="note note--amb" x={gapMid} y="122" textAnchor="middle">
            SALES CONTINUE · QUEUED ON DEVICE
          </text>

          <polygon className="qarea" points={staircase.join(' ')} />
          <text className="note note--amb" x={gapTo - 7} y="218" textAnchor="end">
            PEAK {peakHeld} SALES HELD ON DEVICE
          </text>
          <text className="note note--sig" x={gapTo + 11} y="232">
            CLEARS ON RECONNECT
          </text>

          <g className="post">
            {slots
              .filter((s) => s.posts)
              .map((s) => (
                <rect key={`post-${s.time}`} x={xAt(s.time) - 3} y="340" width="6" height="12" />
              ))}
            {burst.map((h, i) => (
              <rect
                key={`burst-${i}`}
                x={gapTo + 2 + 11 * i}
                y={AXIS_Y - h}
                width="6"
                height={h}
              />
            ))}
          </g>

          <polygon className="held" points="764,290 770,296 764,302 758,296" />
          <text className="note note--amb" x="778" y="299">
            {heldConflicts} CONFLICT HELD FOR A PERSON
          </text>
          <text className="note note--sig" x={gapTo + 2} y="313">
            CATCH-UP POSTINGS
          </text>
          <text className="note note--sig" x="168" y="330">
            POSTS AS IT SELLS
          </text>
          <text className="note" x={gapMid} y="336" textAnchor="middle">
            NOTHING POSTS WHILE OFFLINE
          </text>

          <g className="axis">
            <line x1={X0} y1={AXIS_Y} x2={RIGHT} y2={AXIS_Y} />
            {hours.map((h) => (
              <line
                key={`tick-${h}`}
                x1={X0 + PX_PER_HOUR * (h - openHour)}
                y1={AXIS_Y}
                x2={X0 + PX_PER_HOUR * (h - openHour)}
                y2={AXIS_Y + 6}
              />
            ))}
          </g>

          <g className="hr" textAnchor="middle">
            {hours.map((h) => (
              <text key={`hr-${h}`} x={X0 + PX_PER_HOUR * (h - openHour)} y="374">
                {String(h).padStart(2, '0')}
              </text>
            ))}
          </g>
        </svg>
      </div>
      <p className="tiny" style={{ marginTop: 'var(--s5)', maxWidth: '80ch' }}>
        An illustrative day, drawn to show the mechanism rather than to publish a figure. Solid bars
        are sales that posted as they happened; outlined bars are sales taken while the link was
        down. The published claim behind the drawing is the one in the numbers above: 100% offline
        reliability, no lost sales.
      </p>
    </div>
  );
}
