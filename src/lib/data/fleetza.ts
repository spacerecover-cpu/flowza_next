/**
 * Flowza Fleetza — /products/fleetza
 *
 * Telematics, not rental. The tracker in the diagnostic port reports position
 * every ten seconds and reads the engine continuously; everything below is a
 * projection of that one feed.
 *
 * Ported from parts/js/fleetza.js. The figures are the site's illustrative
 * worked examples and are captioned as such on the page. The arithmetic is not
 * illustrative: a composite driver score is a hundred less the four deductions
 * and nothing else, which is why `driverScore` is derived rather than stored.
 */

/** Thousands separators without Intl, so server and client agree byte for byte. */
export function formatKm(n: number): string {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/* ------------------------------------------------------ driver behaviour */

/**
 * The four event types the AI reads on every trip. Order is load-bearing:
 * `FleetzaDriver.rates` and `.deductions` are indexed against it.
 */
export const FLEETZA_EVENT_TYPES: readonly string[] = [
  'Harsh braking',
  'Rapid acceleration',
  'Speeding',
  'Phone use',
];

export interface FleetzaDriver {
  name: string;
  /** Registration and class, as "FZ-2208 · Panel van". */
  vehicle: string;
  /** Events per 100 km, one per FLEETZA_EVENT_TYPES entry. */
  rates: readonly number[];
  /** Points deducted from 100, one per FLEETZA_EVENT_TYPES entry. */
  deductions: readonly number[];
  /** Reads off the decomposition rather than the composite. */
  coaching: string;
}

/** Ranked on the last 30 days, highest composite first. */
export const FLEETZA_DRIVERS: readonly FleetzaDriver[] = [
  {
    name: 'Aisha Rahman',
    vehicle: 'FZ-2208 · Panel van',
    rates: [0.3, 0.2, 0.2, 0.0],
    deductions: [1, 1, 1, 0],
    coaching:
      'Nothing to coach. Aisha is the top of the board on every event type at once, which is rarer than a good composite — and it makes her the natural pairing for a new starter’s first fortnight.',
  },
  {
    name: 'Priya Menon',
    vehicle: 'FZ-3390 · Rigid 7.5t',
    rates: [0.6, 0.4, 0.5, 0.0],
    deductions: [2, 1, 2, 0],
    coaching:
      'Braking and speeding carry four of the five points lost, and both point at following distance on the same two urban legs. A two-minute nudge is the whole intervention.',
  },
  {
    name: 'Samuel Adeyemi',
    vehicle: 'FZ-1902 · Panel van',
    rates: [0.8, 0.7, 0.6, 0.2],
    deductions: [3, 2, 2, 2],
    coaching:
      'The driving is unremarkable. Phone use has appeared twice this month, and that is a policy conversation rather than a coaching one — worth having before it settles into a habit.',
  },
  {
    name: 'Yusuf Kariuki',
    vehicle: 'FZ-4415 · Tractor unit',
    rates: [0.9, 0.6, 2.1, 0.1],
    deductions: [3, 2, 7, 1],
    coaching:
      'Speeding is more than half of everything Yusuf loses and the rest of the profile is ordinary. Coaching the other three events would change almost nothing; the route timings are the place to look.',
  },
  {
    name: 'Daniel Okonkwo',
    vehicle: 'FZ-1147 · Rigid 7.5t',
    rates: [1.4, 1.1, 0.7, 0.3],
    deductions: [5, 4, 2, 3],
    coaching:
      'Harsh braking and rapid acceleration together carry nine of the fourteen points lost, and on a fixed multi-drop round they usually have one cause: leaving too late. Look at the plan before you look at the driver.',
  },
  {
    name: 'Mariam Salah',
    vehicle: 'FZ-2871 · Panel van',
    rates: [2.0, 1.6, 0.8, 0.6],
    deductions: [7, 5, 3, 6],
    coaching:
      'Every event type is elevated at once, which points at workload rather than attitude. Twenty-one points is the largest recoverable amount on this board and FZ-2871 is also the worst vehicle on fuel — the same shift is producing both.',
  },
];

/** A hundred, less the four deductions. Nothing else goes into it. */
export function driverScore(deductions: readonly number[]): number {
  return 100 - deductions.reduce((total, d) => total + d, 0);
}

/** The widest single deduction on the board, so the bars share one scale. */
export const FLEETZA_MAX_DEDUCTION = 7;

/* --------------------------------------------------- predictive maintenance */

export interface FleetzaComponent {
  name: string;
  /** Percentage of life already consumed, observed. */
  worn: number;
  /** Odometer reading at which the component is predicted to fail. */
  predictedKm: number;
  /** Odometer reading of the workshop slot already booked for it. */
  scheduledKm: number;
}

export interface FleetzaVehicle {
  reg: string;
  cls: string;
  /** Today's reading. The chart's "today" line sits here. */
  odometer: number;
  components: readonly FleetzaComponent[];
  /** What the chart says once you have read it. */
  note: string;
}

export const FLEETZA_VEHICLES: readonly FleetzaVehicle[] = [
  {
    reg: 'FZ-1147',
    cls: 'Rigid 7.5t',
    odometer: 96400,
    components: [
      { name: 'Brake pads · front',         worn: 82, predictedKm: 99800,  scheduledKm: 98600  },
      { name: 'Diesel particulate filter',  worn: 64, predictedKm: 104200, scheduledKm: 102000 },
      { name: 'Battery',                    worn: 88, predictedKm: 98900,  scheduledKm: 97800  },
      { name: 'Transmission fluid',         worn: 51, predictedKm: 112000, scheduledKm: 109500 },
      { name: 'Tyres · drive axle',         worn: 38, predictedKm: 121300, scheduledKm: 118000 },
    ],
    note: 'The battery is the binding item: 2,500 km of predicted life against a service already booked 1,400 km from now. Bringing the brake pads forward from 98,600 km into that same slot puts the vehicle in the workshop once instead of twice.',
  },
  {
    reg: 'FZ-4415',
    cls: 'Tractor unit',
    odometer: 214900,
    components: [
      { name: 'Brake pads · front',         worn: 59, predictedKm: 222600, scheduledKm: 220000 },
      { name: 'Diesel particulate filter',  worn: 76, predictedKm: 219300, scheduledKm: 217500 },
      { name: 'Battery',                    worn: 44, predictedKm: 231000, scheduledKm: 228000 },
      { name: 'Transmission fluid',         worn: 31, predictedKm: 240400, scheduledKm: 236000 },
      { name: 'Tyres · drive axle',         worn: 91, predictedKm: 217100, scheduledKm: 216200 },
    ],
    note: 'Drive-axle tyres are the constraint at 2,200 km of predicted life. The particulate filter sits 1,300 km behind them in the schedule, so one visit at 216,200 km covers both — on a tractor unit that is a saved day, not a saved hour.',
  },
  {
    reg: 'FZ-2208',
    cls: 'Panel van',
    odometer: 61200,
    components: [
      { name: 'Brake pads · front',         worn: 46, predictedKm: 74500,  scheduledKm: 72000  },
      { name: 'Diesel particulate filter',  worn: 23, predictedKm: 88000,  scheduledKm: 85000  },
      { name: 'Battery',                    worn: 71, predictedKm: 66400,  scheduledKm: 65000  },
      { name: 'Transmission fluid',         worn: 34, predictedKm: 81900,  scheduledKm: 79000  },
      { name: 'Tyres · drive axle',         worn: 52, predictedKm: 72800,  scheduledKm: 70500  },
    ],
    note: 'Nothing here is urgent. The battery at 5,200 km is the first item due and the van can run its full plan until then, which is the useful answer as often as the alarming one.',
  },
];

/** Chart geometry, shared by the drawing code and the axis labels. */
export const MAINT_CHART = {
  x0: 196,
  x1: 824,
  /** History window drawn behind today, in kilometres. */
  lookBackKm: 12000,
  /** Total kilometres the horizontal axis spans. */
  spanKm: 46000,
  /** Odometer ticks along the axis. */
  ticks: 5,
} as const;

/* ------------------------------------------------------------ fuel analytics */

export interface FleetzaFuelRow {
  vehicle: string;
  cls: string;
  /** Litres per 100 km for this vehicle. */
  consumption: string;
  /** Litres per 100 km for its class. */
  classMedian: string;
  /** Share of engine hours stationary. */
  idling: string;
  /** Share of distance driven off the planned route. */
  offPlan: string;
  /**
   * Set where consumption, idling and off-plan distance are all materially
   * above class. Drives the amber treatment on exactly those three cells.
   */
  flagged?: boolean;
}

export const FLEETZA_FUEL: readonly FleetzaFuelRow[] = [
  { vehicle: 'FZ-2208', cls: 'Panel van',    consumption: '9.8',  classMedian: '9.6',  idling: '6%',  offPlan: '2%'  },
  { vehicle: 'FZ-3390', cls: 'Rigid 7.5t',   consumption: '16.5', classMedian: '16.9', idling: '8%',  offPlan: '3%'  },
  { vehicle: 'FZ-4415', cls: 'Tractor unit', consumption: '31.6', classMedian: '30.2', idling: '12%', offPlan: '4%'  },
  { vehicle: 'FZ-1147', cls: 'Rigid 7.5t',   consumption: '18.4', classMedian: '16.9', idling: '21%', offPlan: '9%'  },
  { vehicle: 'FZ-2871', cls: 'Panel van',    consumption: '12.7', classMedian: '9.6',  idling: '27%', offPlan: '14%', flagged: true },
];

/* --------------------------------------------------- cost per kilometre */

export interface FleetzaCostSegment {
  label: string;
  /** Dirhams per kilometre, as published on the bar. */
  value: string;
  fill: string;
  /** Left edge of the segment in the 640-wide viewBox. */
  x: number;
  width: number;
  /** Centre, where the label and its tick sit. */
  mid: number;
  labelY: number;
  tickTop: number;
}

/** Segments sum to AED 2.41 per kilometre. */
export const FLEETZA_COST_SEGMENTS: readonly FleetzaCostSegment[] = [
  { label: 'DEPRECIATION', value: '0.74', fill: 'var(--fg)',        x: 20,    width: 184.2, mid: 112, labelY: 58, tickTop: 64 },
  { label: 'FUEL',         value: '0.68', fill: 'var(--fg-2)',      x: 204.2, width: 169.3, mid: 289, labelY: 58, tickTop: 64 },
  { label: 'MAINTENANCE',  value: '0.51', fill: 'var(--fg-3)',      x: 373.5, width: 127,   mid: 437, labelY: 58, tickTop: 64 },
  { label: 'INSURANCE',    value: '0.28', fill: 'var(--sig)',       x: 500.5, width: 69.7,  mid: 535, labelY: 58, tickTop: 64 },
  { label: 'FINANCE',      value: '0.20', fill: 'var(--sig-amber)', x: 570.2, width: 49.8,  mid: 597, labelY: 30, tickTop: 36 },
];
