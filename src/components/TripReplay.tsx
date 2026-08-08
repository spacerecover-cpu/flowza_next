import React from 'react';

/**
 * One recorded trip, drawn as individual position reports rather than as a
 * line — so the ten-second sampling rate is visible in the spacing of the
 * dots. The dashed rectangle is a geofenced site; entry and exit produce the
 * 38 minutes on site without anyone filling in a timesheet.
 *
 * Static. Server component.
 */
export function TripReplay() {
  return (
    <svg
      className="flztrail"
      viewBox="0 0 600 400"
      role="img"
      aria-label="One vehicle's recorded trip drawn as individual position reports ten seconds apart, so the sampling rate is visible in the spacing of the dots. A dashed rectangle marks a geofenced site: the trail crosses into it at 07:14 and leaves at 07:52, which is how Fleetza records 38 minutes on site without anyone filling in a timesheet."
    >
      <text x="28" y="34">REPLAY · 07:02 → 07:58</text>
      <rect className="zn" x="236" y="146" width="196" height="112" rx="2" />
      <text className="zt" x="236" y="138">SITE ZONE · JEBEL ALI YARD</text>
      <text className="zt" x="236" y="278">TIME ON SITE · 38 MIN</text>
      <path className="base" d="M28 344L118 322L196 266L252 202L330 182L402 202L452 160L534 78" />
      <path className="ping" d="M28 344L118 322L196 266L252 202L330 182L402 202L452 160L534 78" />
      <g className="mk">
        <polygon points="236,220 228,210 228,230" />
        <polygon points="432,177 440,167 440,187" />
      </g>
      <g className="mkt">
        <text x="222" y="212" textAnchor="end">ENTERED 07:14</text>
        <text x="446" y="142">EXITED 07:52</text>
      </g>
      <circle cx="534" cy="78" r="6" fill="var(--sig)" />
      <circle cx="534" cy="78" r="12" fill="none" stroke="var(--sig)" strokeWidth="1" />
      <text className="hd" x="522" y="54" textAnchor="end">FZ-1147 · 07:58 · 62 KM/H</text>
      <text x="28" y="368">ONE DOT = ONE POSITION REPORT = 10 S</text>
    </svg>
  );
}
