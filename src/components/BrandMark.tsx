import React from 'react';

/**
 * The FlowZa mark.
 *
 * This renders the real brand asset rather than a redrawing of it. The master
 * lives at `Logo/Flowza Logo.png` (1254 x 1254, RGB on a baked white
 * background); everything the site serves is derived from it by
 * `scripts/build-brand-assets.mjs` — this file, the browser icons and the Apple
 * touch icon. Re-run that script if the master is ever replaced.
 *
 * The white background is keyed out in the derived asset, so the mark sits
 * correctly on the paper background here and on a dark browser tab strip as a
 * favicon. The glyph is taller than it is wide (896 x 1027 once trimmed), so it
 * is contained inside the 25 x 25 box `.brand__mark` gives it rather than
 * stretched to fill it.
 */
export function BrandMark({ className = 'brand__mark' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- a fixed 25px mark
    // needs no responsive srcset, and next/image would only add a wrapper.
    <img
      className={className}
      src="/brand-mark.png"
      alt=""
      width={25}
      height={25}
      decoding="async"
    />
  );
}
