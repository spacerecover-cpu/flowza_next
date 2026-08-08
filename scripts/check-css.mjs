#!/usr/bin/env node
/**
 * Structural sanity check for src/app/globals.css.
 *
 * The registry is blocked in this sandbox, so there is no stylelint. This does
 * the two checks that actually catch damage: comments that terminate early
 * (an early comment terminator inside what was meant to be the comment body) and unbalanced braces.
 *
 * Run: node scripts/check-css.mjs
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const file = join(root, 'src/app/globals.css');
const css = readFileSync(file, 'utf8');

const lineOf = (i) => css.slice(0, i).split('\n').length;

const problems = [];
let depth = 0;
let i = 0;
let inComment = false;
let commentStart = 0;
let openBraces = [];

while (i < css.length) {
  if (inComment) {
    if (css.startsWith('*/', i)) {
      inComment = false;
      i += 2;
      continue;
    }
    i += 1;
    continue;
  }
  if (css.startsWith('/*', i)) {
    inComment = true;
    commentStart = i;
    i += 2;
    continue;
  }
  // A stray comment terminator outside a comment means an earlier comment closed too soon.
  if (css.startsWith('*/', i)) {
    problems.push(`line ${lineOf(i)}: stray "*/" outside a comment — a banner comment closed early`);
    i += 2;
    continue;
  }
  if (css[i] === '{') {
    openBraces.push(lineOf(i));
    depth += 1;
  } else if (css[i] === '}') {
    depth -= 1;
    openBraces.pop();
    if (depth < 0) {
      problems.push(`line ${lineOf(i)}: "}" with no matching "{"`);
      depth = 0;
    }
  }
  i += 1;
}

if (inComment) problems.push(`line ${lineOf(commentStart)}: comment opened and never closed`);
if (depth !== 0) problems.push(`${depth} unclosed "{" — first at line ${openBraces[0]}`);

// Selectors that swallow a following rule show up as a prelude containing prose.
const declBlocks = css.replace(/\/\*[\s\S]*?\*\//g, '');
for (const match of declBlocks.matchAll(/(^|})([^{}]*)\{/g)) {
  const prelude = match[2].trim();
  if (/\s(and|already|the)\s/.test(prelude) || prelude.includes('===')) {
    problems.push(`selector looks like prose, not a selector: ${JSON.stringify(prelude.slice(0, 90))}`);
  }
}

if (problems.length) {
  console.error('globals.css problems:');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}
console.log('globals.css OK — comments balanced, braces balanced, no prose preludes.');
