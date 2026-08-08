/**
 * FlowZa LogisPro — the repeated, tabular and plotted content of
 * /products/logispro. Ported from the `products/logispro` route in
 * `parts/31-products-b.html`.
 *
 * The route optimisation set piece plots the same twelve drop points twice, so
 * the coordinates live here once and both sequences reference them by number.
 * Nothing is added and nothing is dropped between the two plots — only the
 * order changes, and that is the whole argument of the drawing.
 */

export interface DropPoint {
  /** The drop number as it is labelled on the plot. */
  n: number;
  x: number;
  y: number;
}

/** Where the depot sits, in the plot's own coordinates. */
export const DEPOT = { x: 40, y: 210 } as const;

export const DROPS: DropPoint[] = [
  { n: 1, x: 118, y: 78 },
  { n: 2, x: 205, y: 52 },
  { n: 3, x: 295, y: 74 },
  { n: 4, x: 360, y: 130 },
  { n: 5, x: 345, y: 205 },
  { n: 6, x: 372, y: 272 },
  { n: 7, x: 288, y: 296 },
  { n: 8, x: 196, y: 268 },
  { n: 9, x: 116, y: 296 },
  { n: 10, x: 62, y: 246 },
  { n: 11, x: 150, y: 168 },
  { n: 12, x: 255, y: 158 },
];

export interface VanRoute {
  label: string;
  /** Drop numbers in the order the van serves them, depot to depot. */
  sequence: number[];
  /** How the tour is drawn, so the key can be read against the plot. */
  stroke: 'solid' | 'dashed' | 'dotted';
}

/** Three vans loaded as the orders were taken. Every tour crosses the others. */
export const HAND_PLANNED: VanRoute[] = [
  { label: 'Van 1', sequence: [2, 8, 3, 9], stroke: 'solid' },
  { label: 'Van 2', sequence: [10, 4, 11, 6], stroke: 'dashed' },
  { label: 'Van 3', sequence: [1, 7, 12, 5], stroke: 'dotted' },
];

/** The identical work, sequenced against traffic, windows, capacity and hours. */
export const OPTIMISED: VanRoute[] = [
  { label: 'Van 1 · north', sequence: [1, 2, 3, 4, 12, 11], stroke: 'solid' },
  { label: 'Van 2 · south', sequence: [10, 9, 8, 7, 6, 5], stroke: 'dashed' },
];

export interface RouteFigure {
  key: string;
  value: string;
  /** The difference against the hand-planned round, where there is one. */
  delta?: string;
}

export const HAND_PLANNED_FIGURES: RouteFigure[] = [
  { key: 'Distance', value: '486 km' },
  { key: 'Drive time', value: '11 h 20' },
  { key: 'Vehicles', value: '3' },
];

export const OPTIMISED_FIGURES: RouteFigure[] = [
  { key: 'Distance', value: '379 km', delta: '−22%' },
  { key: 'Drive time', value: '8 h 50', delta: '−2 h 30' },
  { key: 'Vehicles', value: '2', delta: '1 released' },
];

export interface ShipmentRow {
  id: string;
  route: string;
  stops: string;
  window: string;
  eta: string;
  /** Predicted overrun against the window, or an em-dash where there is none. */
  predictedDelay: string;
  status: string;
  /** Amber where the estimate has crossed the delivery window. */
  late?: boolean;
}

export const LOAD_BOARD: ShipmentRow[] = [
  {
    id: 'SH-40912',
    route: 'Jebel Ali → Riyadh',
    stops: '1',
    window: '14:00–18:00',
    eta: '20:10',
    predictedDelay: '+2 h 10',
    status: 'Predicted late',
    late: true,
  },
  {
    id: 'SH-40913',
    route: 'Sohar → Dubai',
    stops: '3',
    window: '09:00–13:00',
    eta: '11:25',
    predictedDelay: '—',
    status: 'In transit',
  },
  {
    id: 'SH-40915',
    route: 'Dammam → Kuwait City',
    stops: '2',
    window: '08:00–12:00',
    eta: '12:40',
    predictedDelay: '+40 min',
    status: 'Predicted late',
    late: true,
  },
  {
    id: 'SH-40918',
    route: 'Abu Dhabi → Doha',
    stops: '1',
    window: '06:00–10:00',
    eta: '07:50',
    predictedDelay: '—',
    status: 'In transit',
  },
  {
    id: 'SH-40921',
    route: 'Dubai → Al Ain',
    stops: '9',
    window: '12:00–16:00',
    eta: '15:35',
    predictedDelay: '—',
    status: 'On route',
  },
  {
    id: 'SH-40924',
    route: 'Jeddah → Medina',
    stops: '6',
    window: '07:00–11:00',
    eta: '10:05',
    predictedDelay: '—',
    status: 'Delivered',
  },
];

export interface CorridorNode {
  code: string;
  name: string;
  kind: 'terminal' | 'hub';
  /** Centre of the marker, in the corridor diagram's own coordinates. */
  x: number;
  /** Where the name and dwell labels begin. */
  labelX: number;
  /** Where the three-letter code sits inside a terminal box. */
  codeX?: number;
  dwell?: string;
}

export interface CorridorLeg {
  label: string;
  /** The drawn leg, start and end x. */
  from: number;
  to: number;
  labelX: number;
  /** A prediction rather than a measurement: drawn amber and dashed. */
  predicted?: boolean;
}

/** One shipment on one corridor: Jebel Ali to Riyadh via Dammam and Al Batha. */
export const CORRIDOR_NODES: CorridorNode[] = [
  { code: 'JEA', name: 'Jebel Ali', kind: 'terminal', x: 10, labelX: 10, codeX: 19 },
  { code: 'HUB', name: 'Dammam', kind: 'hub', x: 290, labelX: 248, dwell: 'DWELL 3 H' },
  {
    code: 'BDR',
    name: 'Al Batha',
    kind: 'hub',
    x: 660,
    labelX: 616,
    dwell: 'DWELL 6 H · RUNNING OVER',
  },
  { code: 'RUH', name: 'Riyadh', kind: 'terminal', x: 940, labelX: 908, codeX: 950 },
];

export const CORRIDOR_LEGS: CorridorLeg[] = [
  { label: 'DRAY 4 H', from: 60, to: 250, labelX: 120 },
  { label: 'LINEHAUL 11 H', from: 330, to: 620, labelX: 430 },
  {
    label: 'PREDICTED +2 H 10 · WINDOW MISSED',
    from: 700,
    to: 940,
    labelX: 740,
    predicted: true,
  },
];

export interface WarehouseStep {
  /** Two-digit step number. */
  index: string;
  title: string;
  /** What is scanned, set over two lines as the rail draws it. */
  scan: [string, string];
  /** What the scan makes true. */
  result: string;
}

export const WAREHOUSE_STEPS: WarehouseStep[] = [
  {
    index: '01',
    title: 'PUTAWAY',
    scan: ['Pallet label scanned,', 'then the bin scanned.'],
    result: 'Stock lands in a known location.',
  },
  {
    index: '02',
    title: 'PICKING',
    scan: ['Bin, SKU and quantity', 'scanned off the pick list.'],
    result: 'The wrong item cannot be confirmed.',
  },
  {
    index: '03',
    title: 'PACKING',
    scan: ['Each item scanned', 'into its carton.'],
    result: 'Carton contents are a record.',
  },
  {
    index: '04',
    title: 'DISPATCH',
    scan: ['Carton and vehicle', 'scanned together.'],
    result: 'The shipment enters live tracking.',
  },
];
