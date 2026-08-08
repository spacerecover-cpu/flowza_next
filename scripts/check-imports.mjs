/**
 * Static import checker for flowza-next.
 * Walks every .ts/.tsx file under src/, extracts relative import specifiers,
 * and asserts the resolved file exists on disk.
 * Also resolves @/* path aliases as src/*.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname, resolve, extname } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC  = join(ROOT, 'src');

// Collect all .ts/.tsx files
function walk(dir) {
  const entries = readdirSync(dir);
  const results = [];
  for (const e of entries) {
    const full = join(dir, e);
    const st = statSync(full);
    if (st.isDirectory()) results.push(...walk(full));
    else if (/\.(ts|tsx)$/.test(e)) results.push(full);
  }
  return results;
}

// Try extensions in order
function resolveFile(base) {
  const exts = ['', '.ts', '.tsx', '/index.ts', '/index.tsx'];
  for (const ext of exts) {
    const candidate = base + ext;
    if (existsSync(candidate)) return candidate;
  }
  return null;
}

const files = walk(SRC);
const errors = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  // Match both import ... from '...' and require('...')
  const importRe = /(?:from|import)\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRe.exec(content)) !== null) {
    const spec = match[1];
    let target = null;

    if (spec.startsWith('@/')) {
      // Path alias: @/* -> src/*
      target = join(SRC, spec.slice(2));
    } else if (spec.startsWith('.')) {
      target = resolve(dirname(file), spec);
    } else {
      // External package — skip
      continue;
    }

    const resolved = resolveFile(target);
    if (!resolved) {
      errors.push(`  MISSING: ${spec}\n    in: ${file.replace(ROOT, '')}`);
    }
  }
}

if (errors.length === 0) {
  console.log(`\n✓ All imports resolved. Checked ${files.length} files.\n`);
} else {
  console.error(`\n✗ ${errors.length} broken import(s) found:\n`);
  errors.forEach(e => console.error(e));
  process.exit(1);
}
