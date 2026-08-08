import { RecordType, SystemKey } from '@/lib/data/systems';

/**
 * The nine systems against the six record types: what each system writes, what
 * it only reads, and what it does not touch at all.
 *
 * Ported from the matrix in `parts/20-platform.html`. It is deliberately its
 * own data module rather than derived from `SYSTEMS`, because the two are not
 * the same statement. `SYSTEMS.writes` and `SYSTEMS.reads` list the record uses
 * worth naming on a marketing panel — three or four per system, each with a
 * sentence attached. The matrix is exhaustive: it has to say something about
 * all fifty-four cells, including uses too mundane to caption (Finance reading
 * the location record, LogisPro reading a document). Deriving one from the
 * other would silently turn "not worth mentioning" into "not used", which is a
 * different and false claim.
 */
export type MatrixMark = 'W' | 'R' | 'N';

export const RECORD_COLUMNS: { record: RecordType; label: string }[] = [
  { record: 'PARTY', label: 'Party' },
  { record: 'ITEM', label: 'Item' },
  { record: 'ENTRY', label: 'Ledger entry' },
  { record: 'LOCATION', label: 'Location' },
  { record: 'PERSON', label: 'Person' },
  { record: 'DOCUMENT', label: 'Document' },
];

/** One row per system, in catalogue order, one mark per column above. */
export const RECORD_MATRIX: { system: SystemKey; marks: MatrixMark[] }[] = [
  { system: 'Finance', marks: ['W', 'W', 'W', 'R', 'W', 'W'] },
  { system: 'LogisPro', marks: ['R', 'W', 'N', 'W', 'W', 'R'] },
  { system: 'Spa Master', marks: ['W', 'W', 'W', 'W', 'W', 'N'] },
  { system: 'Fleetza', marks: ['N', 'W', 'N', 'W', 'W', 'R'] },
  { system: 'QRForge', marks: ['R', 'R', 'N', 'W', 'N', 'W'] },
  { system: 'POS', marks: ['W', 'W', 'W', 'R', 'R', 'N'] },
  { system: 'Club', marks: ['W', 'R', 'W', 'W', 'R', 'N'] },
  { system: 'RentFlow', marks: ['W', 'N', 'N', 'N', 'N', 'W'] },
  { system: 'PMS', marks: ['N', 'N', 'N', 'N', 'W', 'W'] },
];

/** The glyph and the words a screen reader hears in its place. */
export const MARK_TEXT: Record<MatrixMark, { glyph: string; head: string; rest: string }> = {
  W: { glyph: 'W', head: 'W', rest: 'rites' },
  R: { glyph: 'R', head: 'R', rest: 'eads' },
  N: { glyph: '—', head: '—', rest: 'Not used' },
};
