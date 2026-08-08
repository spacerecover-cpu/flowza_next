#!/usr/bin/env node
/**
 * Rebuild every served brand asset from the master logo.
 *
 * The master is `Logo/Flowza Logo.png` — 1254 x 1254, RGB with a baked white
 * background. Nothing in `src/` redraws the mark; these four files are the only
 * copies, and all four come from here. Replace the master and re-run:
 *
 *   node scripts/build-brand-assets.mjs
 *
 * Outputs:
 *   public/brand-mark.png   the header and footer mark, 200px tall for high-DPR
 *   src/app/icon.png        the browser icon Next links as rel=icon
 *   src/app/favicon.ico     a real multi-size ICO (16/32/48), not a renamed PNG
 *   src/app/apple-icon.png  180x180 Apple touch icon, on white
 *
 * Needs `sharp`, which Next already depends on.
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const MASTER = join(root, 'Logo/Flowza Logo.png');
const APP = join(root, 'src/app');
const PUB = join(root, 'public');

/**
 * The master is RGB on a baked white background. Key the white out so the mark
 * can sit on the site's paper (#F6F6F3) and on a dark browser tab strip without
 * a white box around it. Alpha ramps from the distance-to-white so anti-aliased
 * edges stay smooth; interior pixels keep their exact colour.
 */
const trimmed = await sharp(MASTER).trim({ background: '#ffffff', threshold: 12 })
  .raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = trimmed.info;
const rgba = Buffer.alloc(width * height * 4);
const T = 60;
for (let i = 0, o = 0; i < trimmed.data.length; i += channels, o += 4) {
  const r = trimmed.data[i], g = trimmed.data[i + 1], b = trimmed.data[i + 2];
  const d = 255 - Math.min(r, g, b);
  rgba[o] = r; rgba[o + 1] = g; rgba[o + 2] = b;
  rgba[o + 3] = Math.max(0, Math.min(255, Math.round((d / T) * 255)));
}
const cut = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();
console.log('master trimmed to', width + 'x' + height, '— white keyed out');

// the mark the header and footer render, at 8x the 25px box for high-DPR screens
await sharp(cut).resize({ height: 200 }).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(`${PUB}/brand-mark.png`);

// browser icon: contained in a square with a little breathing room
const square = (px, pad) => sharp(cut)
  .resize(px - pad * 2, px - pad * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png();

await square(96, 3).toFile(`${APP}/icon.png`);

// favicon.ico — a real ICO holding 16/32/48 PNG entries
const sizes = [16, 32, 48];
const pngs = [];
for (const s of sizes) pngs.push(await square(s, s >= 32 ? 1 : 0).toBuffer());
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const entries = pngs.map((png, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i], 0); e.writeUInt8(sizes[i], 1);
  e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
  e.writeUInt32LE(png.length, 8); e.writeUInt32LE(offset, 12);
  offset += png.length; return e;
});
writeFileSync(`${APP}/favicon.ico`, Buffer.concat([header, ...entries, ...pngs]));

// apple touch icon: iOS masks with a squircle and composites on black if
// transparent, so flatten onto white and inset clear of the corners
const glyph = await sharp(cut).resize(138, 138, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 4, background: '#ffffff' } })
  .composite([{ input: glyph, gravity: 'centre' }]).png().toFile(`${APP}/apple-icon.png`);

console.log('written: public/brand-mark.png, app/icon.png, app/favicon.ico, app/apple-icon.png');
