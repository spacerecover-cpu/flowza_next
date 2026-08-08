export interface CohortRow {
  label: string;
  /** Retention values by month index (0=M0, 1=M1, …). null = not yet available */
  values: (number | null)[];
}

export const COHORT_MONTHS = ['M0', 'M1', 'M2', 'M3', 'M4', 'M5'] as const;

export const COHORT_ROWS: CohortRow[] = [
  { label: 'FEB', values: [100, 58, 44, 38, 34, 31] },
  { label: 'MAR', values: [100, 61, 47, 41, 37, null] },
  { label: 'APR', values: [100, 55, 42, 36, null, null] },
  { label: 'MAY', values: [100, 64, 51, null, null, null] },
  { label: 'JUN', values: [100, 67, null, null, null, null] },
  { label: 'JUL', values: [100, null, null, null, null, null] },
];

export type LtvPoint = { label: string; x: number; y: number; value: number };

/** SVG layout constants for LtvLadder */
export const LTV_POINTS: LtvPoint[] = [
  { label: 'VISIT 1',    x: 60,  y: 187.2, value: 186 },
  { label: 'BY VISIT 3', x: 180, y: 164.8, value: 512 },
  { label: 'BY VISIT 6', x: 300, y: 129.5, value: 1024 },
  { label: 'BY VISIT 12', x: 430, y: 50,   value: 2180 },
];
