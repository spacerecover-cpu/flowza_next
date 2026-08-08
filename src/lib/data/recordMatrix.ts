import { SystemKey } from '@/lib/data/systems';

/**
 * The nine applications against the business functions they cover.
 *
 * This file previously held a matrix of nine systems against six shared record
 * types, marking which system wrote which record. That matrix described a
 * shared database the platform does not have. What replaces it answers a
 * question a buyer actually has: if I buy this one application, which parts of
 * my business does it cover on its own?
 *
 * A mark is about coverage within a single application. It says nothing about
 * data moving between applications, because none is claimed.
 */
export type MatrixMark = 'C' | 'S' | 'N';

export const FUNCTION_COLUMNS: { key: string; label: string }[] = [
  { key: 'sell', label: 'Selling' },
  { key: 'stock', label: 'Stock' },
  { key: 'money', label: 'Money' },
  { key: 'people', label: 'People' },
  { key: 'field', label: 'Field & site' },
  { key: 'customer', label: 'Customer' },
];

/** One row per application, in catalogue order, one mark per column above. */
export const COVERAGE_MATRIX: { system: SystemKey; marks: MatrixMark[] }[] = [
  { system: 'Finance', marks: ['S', 'C', 'C', 'C', 'N', 'S'] },
  { system: 'LogisPro', marks: ['N', 'C', 'S', 'S', 'C', 'S'] },
  { system: 'Spa Master', marks: ['C', 'S', 'S', 'C', 'N', 'C'] },
  { system: 'Fleetza', marks: ['N', 'S', 'S', 'S', 'C', 'N'] },
  { system: 'QRForge', marks: ['N', 'N', 'N', 'N', 'S', 'C'] },
  { system: 'POS', marks: ['C', 'C', 'S', 'N', 'S', 'C'] },
  { system: 'Club', marks: ['C', 'S', 'C', 'S', 'S', 'C'] },
  { system: 'RentFlow', marks: ['S', 'N', 'N', 'N', 'N', 'C'] },
  { system: 'PMS', marks: ['N', 'N', 'S', 'C', 'N', 'N'] },
];

/** The glyph and the words a screen reader hears in its place. */
export const MARK_TEXT: Record<MatrixMark, { glyph: string; head: string; rest: string }> = {
  C: { glyph: 'C', head: 'C', rest: 'ore capability' },
  S: { glyph: 'S', head: 'S', rest: 'upporting capability' },
  N: { glyph: '—', head: '—', rest: 'Not covered' },
};
