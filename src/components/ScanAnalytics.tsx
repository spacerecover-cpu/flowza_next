import React from 'react';
import { QR_HOURS, QR_DEVICES, QR_GEO, QR_SCAN_ROW } from '@/lib/data/qrforge';

/**
 * Four views of one scan log. The teaching point is the relationship between
 * them: the three summaries are assembled from rows like the one in
 * `ScanLogRow`, which is why a question nobody asked at launch is a filter
 * rather than a new tracking plan.
 *
 * All static. Server components.
 */

/** Share of scans by hour of day, local time. Two peaks; the larger is dinner. */
export function ScanHourProfile() {
  const max = Math.max(...QR_HOURS.map((h) => h.share));

  return (
    <figure style={{ margin: 0 }}>
      <div className="qfhrs" aria-hidden="true">
        {QR_HOURS.map((h) => (
          <div className="qfhr" key={h.hour}>
            <i style={{ height: `${Math.round((h.share / max) * 100)}%` }} />
            <span className="qfhr__l">{h.hour}</span>
          </div>
        ))}
      </div>
      <p className="sr">
        Scans by hour of day form two distinct peaks: a lunch peak just after 13:00 and a larger
        dinner peak at 19:00, with the dinner peak roughly ten per cent higher. Fewer than one scan in
        twenty happens before 09:00, so a morning promotion behind this code would reach almost nobody.
      </p>
      <figcaption className="tiny" style={{ marginTop: 'var(--s4)' }}>
        Share of scans by hour, local time. Two peaks, and the larger one is dinner — which is when a
        menu change should take effect.
      </figcaption>
    </figure>
  );
}

/** Device and operating system, recorded per scan rather than sampled. */
export function ScanDeviceSplit() {
  return (
    <div>
      {QR_DEVICES.map((d) => (
        <div className="qfbar" key={d.label}>
          <span className="qfbar__k">{d.label}</span>
          <span className="qfbar__t">
            <i style={{ width: `${d.share}%` }} />
          </span>
          <span className="qfbar__v">{d.share.toFixed(1)}%</span>
        </div>
      ))}
    </div>
  );
}

/** Geography, attributed to the placement the code was deployed on. */
export function ScanGeography() {
  const max = Math.max(...QR_GEO.map((g) => g.share));

  return (
    <div>
      {QR_GEO.map((g) => (
        <div className="qfgeo__r" key={g.place}>
          <span className="qfgeo__n">
            {g.place}
            <span className="qfgeo__s">{g.placement}</span>
          </span>
          <span className="qfgeo__t">
            <i style={{ width: `${Math.round((g.share / max) * 100)}%` }} />
          </span>
          <span className="qfgeo__v">{g.share.toFixed(1)}%</span>
        </div>
      ))}
    </div>
  );
}

/** One scan expanded into the eight fields a single log row actually carries. */
export function ScanLogRow() {
  return (
    <div className="qflog">
      <div className="qflog__hd">
        <span>one scan · expanded</span>
        <span>row 41,882 of 56,310</span>
      </div>
      <div className="qflog__b">
        {QR_SCAN_ROW.map((r) => (
          <div className="qfro" key={r.field}>
            <span className="qfro__k">{r.field}</span>
            <span className="qfro__v">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
