import React from 'react';
import { buildQrModules } from '@/lib/qr';

/**
 * The printed artefact.
 *
 * Server component, deliberately: `buildQrModules` runs once at render time
 * from a fixed seed, the matrix is serialised into the page, and it is then
 * passed *into* the client switchboard as a prop. Nothing about changing the
 * destination can reach it, which is the argument the hero set piece makes —
 * the symbol carries an identifier and nothing else, so there is nothing in it
 * to redraw.
 */

export interface QrMatrixProps {
  /** Module size in px. Defaults to 12 to match the source 300×300 viewBox on a 25×25 grid. */
  moduleSize?: number;
}

export function QrMatrix({ moduleSize = 12 }: QrMatrixProps) {
  const modules = buildQrModules(moduleSize);
  const dim = 25 * moduleSize;

  return (
    <svg
      className="qfqr"
      id="qfMatrix"
      viewBox={`0 0 ${dim} ${dim}`}
      role="img"
      aria-label="The printed QRForge code for this campaign, drawn as a module matrix. It is rendered once and stays identical while the destination behind it is changed, which is the mechanism this section demonstrates."
    >
      {modules.map((m, i) => (
        <rect
          key={i}
          className={m.accent ? 'a' : 'm'}
          x={m.x}
          y={m.y}
          width={moduleSize}
          height={moduleSize}
        />
      ))}
    </svg>
  );
}
