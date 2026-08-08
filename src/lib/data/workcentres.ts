export interface WorkCentre {
  c: string;
  n: string;
  cap: number;
  util: string;
  q: string;
  su: string;
  bn?: boolean;
  a: string;
}

export const WC: WorkCentre[] = [
  {
    c: 'CUT', n: 'Cutting', cap: 1200, util: '63%', q: '6 h', su: '22 min',
    a: 'Spare capacity. Running smaller, more frequent batches here shortens the queue in front of welding without costing throughput.',
  },
  {
    c: 'FORM', n: 'Forming', cap: 980, util: '78%', q: '14 h', su: '35 min',
    a: 'Comfortable against demand. Setup time is the second largest loss in the line after welding and is the cheapest thing to attack.',
  },
  {
    c: 'WELD', n: 'Welding', cap: 640, util: '119%', q: '96 h', su: '48 min', bn: true,
    a: 'The constraint. Every hour lost here is an hour lost by the entire line, so protect it: no setups during the shift, feed it first, and inspect after it rather than before.',
  },
  {
    c: 'MACH', n: 'Machining', cap: 1050, util: '72%', q: '9 h', su: '27 min',
    a: 'Spare capacity, but it sits downstream of the constraint — adding a shift here changes nothing at all until welding is relieved.',
  },
  {
    c: 'COAT', n: 'Coating', cap: 820, util: '93%', q: '31 h', su: '40 min',
    a: 'Close to its limit. This becomes the constraint the moment welding is relieved, so plan the second intervention before making the first.',
  },
  {
    c: 'ASSY', n: 'Assembly', cap: 900, util: '84%', q: '18 h', su: '15 min',
    a: 'Adequate. It starves whenever welding stops, which is the symptom people report — the cause is two stations upstream.',
  },
];

export const WEEKLY_DEMAND = 760;
export const BAR_BASE = 200;
export const BAR_SCALE = 170 / 1200;
