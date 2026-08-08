export interface PathwayStage {
  name: string;
  waitDays: number;
  touchDays: number;
}

export const PATHWAY_STAGES: PathwayStage[] = [
  { name: 'REFERRAL',    waitDays: 11, touchDays: 0.2 },
  { name: 'TRIAGE',      waitDays: 4,  touchDays: 0.3 },
  { name: 'DIAGNOSTICS', waitDays: 18, touchDays: 0.5 },
  { name: 'REVIEW',      waitDays: 9,  touchDays: 0.4 },
  { name: 'PROCEDURE',   waitDays: 21, touchDays: 0.9 },
  { name: 'FOLLOW-UP',   waitDays: 14, touchDays: 0.3 },
];

/** Total days in pathway */
export function totalDays(stages: PathwayStage[]): number {
  return stages.reduce((s, st) => s + st.waitDays + st.touchDays, 0);
}

/** Total clinical contact days */
export function totalTouch(stages: PathwayStage[]): number {
  return stages.reduce((s, st) => s + st.touchDays, 0);
}
