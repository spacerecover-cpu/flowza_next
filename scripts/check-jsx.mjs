#!/usr/bin/env node
/**
 * Heuristic JSX lint for the checks the sandbox cannot run (no ESLint, no tsc).
 *
 * 1. kebab-case SVG / HTML attributes that must be camelCase in JSX
 * 2. class= / for= instead of className= / htmlFor=
 * 3. string-valued style="..." instead of style={{ ... }}
 * 4. straight apostrophes sitting in JSX text nodes (react/no-unescaped-entities)
 * 5. h1 count and heading-level skips per route
 * 6. tables without a <caption className="sr">
 * 7. svg without role="img" + aria-label
 *
 * Run: node scripts/check-jsx.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'src');

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.tsx?$/.test(p)) out.push(p);
  }
  return out;
}

const files = walk(srcDir);
const problems = [];
const add = (f, line, msg) => problems.push(`${relative(root, f)}:${line} ${msg}`);

const KEBAB = [
  'stroke-width', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin',
  'stroke-opacity', 'stroke-miterlimit', 'text-anchor', 'font-size', 'font-family', 'font-weight',
  'fill-opacity', 'fill-rule', 'clip-path', 'clip-rule', 'dominant-baseline', 'baseline-shift',
  'paint-order', 'vector-effect', 'marker-end', 'marker-start', 'letter-spacing', 'shape-rendering',
  'view-box', 'preserve-aspect-ratio', 'gradient-units', 'stop-color', 'stop-opacity',
  'aria-labeledby', 'tab-index', 'auto-focus', 'cross-origin', 'row-span', 'col-span',
];

for (const file of files) {
  const text = readFileSync(file, 'utf8');
  const lines = text.split('\n');

  lines.forEach((line, idx) => {
    const n = idx + 1;
    for (const attr of KEBAB) {
      if (new RegExp(`(^|[\\s{])${attr}=`).test(line)) add(file, n, `kebab-case JSX attribute "${attr}="`);
    }
    if (/(^|[\s{<])class=/.test(line)) add(file, n, 'class= should be className=');
    if (/(^|[\s{<])for=/.test(line)) add(file, n, 'for= should be htmlFor=');
    if (/\sstyle="/.test(line)) add(file, n, 'string-valued style="…" should be style={{ … }}');
  });

  // Straight apostrophes in JSX text nodes: strip strings, imports and expressions first,
  // then look at what is left between > and <.
  const stripped = text
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/^\s*\/\/.*$/gm, ' ')
    .replace(/'(?:[^'\\\n]|\\.)*'/g, "''")      // single-quoted strings
    .replace(/"(?:[^"\\\n]|\\.)*"/g, '""')      // double-quoted strings
    .replace(/`(?:[^`\\]|\\.)*`/g, '``');       // template literals
  for (const m of stripped.matchAll(/>([^<>{}]*'[^<>{}]*)</g)) {
    const line = stripped.slice(0, m.index).split('\n').length;
    add(file, line, `straight apostrophe in JSX text: ${JSON.stringify(m[1].trim().slice(0, 60))}`);
  }

  // Tables need a screen-reader caption.
  const tableCount = (text.match(/<table[\s>]/g) || []).length;
  const captionCount = (text.match(/<caption className="sr"/g) || []).length;
  if (tableCount > captionCount) {
    add(file, 1, `${tableCount} <table> but ${captionCount} <caption className="sr">`);
  }

  // Meaningful SVGs need role="img" and a full-sentence aria-label.
  for (const m of text.matchAll(/<svg\b[^>]*>/g)) {
    const tag = m[0];
    const line = text.slice(0, m.index).split('\n').length;
    if (/aria-hidden/.test(tag)) continue;
    if (!/role="img"/.test(tag)) add(file, line, '<svg> without role="img" or aria-hidden');
    if (!/aria-label/.test(tag) && !/aria-labelledby/.test(tag)) {
      add(file, line, '<svg role="img"> without aria-label');
    }
  }
}

// Heading structure, per route file only.
for (const file of files.filter((f) => f.endsWith('page.tsx'))) {
  const text = readFileSync(file, 'utf8');
  const h1s = (text.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) add(file, 1, `expected exactly one <h1>, found ${h1s}`);
  const levels = [...text.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  let prev = 0;
  levels.forEach((lvl) => {
    if (prev && lvl > prev + 1) add(file, 1, `heading level skips h${prev} -> h${lvl}`);
    prev = lvl;
  });
  // A dynamic route builds its title per param, so it exports the
  // `generateMetadata` function rather than a static `metadata` const. Both
  // satisfy the rule; only a page with neither is missing its metadata.
  if (!/export const metadata|export async function generateMetadata|export function generateMetadata/.test(text)) {
    add(file, 1, 'no exported metadata');
  }
}

if (problems.length) {
  console.error(`${problems.length} problem(s):`);
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}
console.log(`JSX checks OK across ${files.length} files.`);
