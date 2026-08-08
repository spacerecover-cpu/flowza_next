export interface BudgetLine {
  name: string;
  code: string;
  spentPct: number;
  committedPct: number;
  overPct: number;
  isOver: boolean;
}

export const BUDGET_LINES: BudgetLine[] = [
  { name: 'Housing maintenance', code: 'PRG-01',                      spentPct: 51.7, committedPct: 22.5, overPct: 0,   isOver: false },
  { name: 'Roads and highways',  code: 'PRG-02 · over-committed',     spentPct: 59.2, committedPct: 24.1, overPct: 3.4, isOver: true  },
  { name: 'Waste and recycling', code: 'PRG-03',                      spentPct: 40,   committedPct: 15.8, overPct: 0,   isOver: false },
  { name: 'Parks and open spaces', code: 'PRG-04',                    spentPct: 45.8, committedPct: 10,   overPct: 0,   isOver: false },
  { name: 'IT modernisation',    code: 'PRG-05 · mostly committed',   spentPct: 28.3, committedPct: 42.5, overPct: 0,   isOver: false },
];

export interface CaseAgeBucket {
  label: string;
  count: number;
  isLate: boolean;
  /** Bar height in SVG units (out of 140px available) */
  barHeight: number;
  /** Bar y position (180 - barHeight) */
  barY: number;
  /** x position of bar */
  barX: number;
}

const BAR_MAX = 140; // pixels available between y=40 and y=180
const COUNTS = [412, 288, 176, 94, 51, 38];
const MAX_COUNT = Math.max(...COUNTS);

export const CASE_AGE_BUCKETS: CaseAgeBucket[] = [
  { label: '0–7d',   count: 412, isLate: false, barHeight: Math.round(COUNTS[0] / MAX_COUNT * BAR_MAX), barY: 0, barX: 60  },
  { label: '8–14d',  count: 288, isLate: false, barHeight: Math.round(COUNTS[1] / MAX_COUNT * BAR_MAX), barY: 0, barX: 150 },
  { label: '15–21d', count: 176, isLate: false, barHeight: Math.round(COUNTS[2] / MAX_COUNT * BAR_MAX), barY: 0, barX: 240 },
  { label: '22–28d', count: 94,  isLate: false, barHeight: Math.round(COUNTS[3] / MAX_COUNT * BAR_MAX), barY: 0, barX: 330 },
  { label: '29–35d', count: 51,  isLate: true,  barHeight: Math.round(COUNTS[4] / MAX_COUNT * BAR_MAX), barY: 0, barX: 420 },
  { label: '36d+',   count: 38,  isLate: true,  barHeight: Math.round(COUNTS[5] / MAX_COUNT * BAR_MAX), barY: 0, barX: 510 },
].map(b => ({ ...b, barY: 180 - b.barHeight }));
