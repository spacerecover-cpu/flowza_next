import React from 'react';

/**
 * The FlowZa mark: an indigo F whose crossbar is a cyan leaf, with the band
 * where the crossbar meets the stem picked out in a mid blue.
 *
 * The glyph is drawn in an 88 × 100 space and then scaled to 0.88 and centred
 * inside a square 100 × 100 viewBox. That is deliberate: the mark is taller
 * than it is wide, and a square box lets `.brand__mark` stay a plain 25 × 25
 * square in CSS without squashing the artwork, while the 12% inset keeps the
 * stem and the leaf tip off the edge at favicon sizes.
 *
 * Rebuilt as vector from the supplied logo. If the original artwork lands as
 * an SVG, replacing the three paths below is the whole job — every surface
 * that shows the mark renders this component or the copies of these paths in
 * `src/app/icon.svg` and the apple icon.
 */
export const BRAND_INDIGO = '#2C31DB';
export const BRAND_MID = '#2E86E8';
export const BRAND_CYAN = '#3BC1F0';

export function BrandMark({ className = 'brand__mark' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <g transform="translate(11.28 6) scale(0.88)">
        {/* the F: stem, and the arm with a pill end */}
        <path
          fill={BRAND_INDIGO}
          d="M15 0 H75.6 A12.2 12.2 0 0 1 75.6 24.4 H34 A10 10 0 0 0 24 34.4 V96.5 A3.5 3.5 0 0 1 20.5 100 H3.5 A3.5 3.5 0 0 1 0 96.5 V15 A15 15 0 0 1 15 0 Z"
        />
        {/* the crossbar where it crosses the stem */}
        <path fill={BRAND_MID} d="M0 66 A25 25 0 0 1 24 41 V66 A25 25 0 0 0 0 79 Z" />
        {/* the leaf */}
        <path
          fill={BRAND_CYAN}
          d="M53 41 H71.7 V50 A25 25 0 0 1 46.6 66 H27.8 V57 A25 25 0 0 1 53 41 Z"
        />
      </g>
    </svg>
  );
}
