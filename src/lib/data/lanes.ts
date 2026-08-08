export interface Lane {
  c: string;
  n: string;
  vol: number;
  mg: number;
  rate: number;
  cost: number;
  rev: number;
  a: string;
}

export const LANES: Lane[] = [
  {
    c: 'JEA→RUH', n: 'Jebel Ali → Riyadh', vol: 320, mg: 24, rate: 4200, cost: 3192, rev: 1344000,
    a: 'This lane funds the network. Protect capacity on it before adding any new lane — growth here is worth more than a new customer elsewhere.',
  },
  {
    c: 'SOH→DXB', n: 'Sohar → Dubai', vol: 180, mg: 12, rate: 1850, cost: 1628, rev: 333000,
    a: 'Subcontracted at eighty-eight per cent of the sell rate. Either renegotiate the buy rate or move it onto own fleet as a backhaul.',
  },
  {
    c: 'DMM→KWI', n: 'Dammam → Kuwait', vol: 90, mg: 6, rate: 3100, cost: 2914, rev: 279000,
    a: 'Border dwell is eating the margin. Reprice for the delay honestly or stop quoting the lane.',
  },
  {
    c: 'AUH→DOH', n: 'Abu Dhabi → Doha', vol: 140, mg: 31, rate: 2640, cost: 1822, rev: 369600,
    a: 'Strong margin on modest volume with capacity available. This is the most obvious place to point a sales team.',
  },
  {
    c: 'JED→MED', n: 'Jeddah → Medina', vol: 260, mg: 19, rate: 980, cost: 794, rev: 254800,
    a: 'Steady and profitable. Automate the quoting, hold the rate, and spend management attention elsewhere.',
  },
  {
    c: 'DXB→MCT', n: 'Dubai → Muscat', vol: 60, mg: 34, rate: 3350, cost: 2211, rev: 201000,
    a: 'The best margin in the network on the smallest volume. Worth understanding why nobody is selling it before assuming demand is absent.',
  },
  {
    c: 'RUH→DMM', n: 'Riyadh → Dammam', vol: 410, mg: 9, rate: 1420, cost: 1292, rev: 582200,
    a: 'Highest volume, thinnest margin. A two per cent rate rise here is worth more than winning an entire new lane, and is far easier.',
  },
  {
    c: 'SLL→MCT', n: 'Salalah → Muscat', vol: 45, mg: -3, rate: 2100, cost: 2163, rev: 94500,
    a: 'Loss-making at current rates with no strategic reason to hold it. Reprice by roughly eight per cent or exit.',
  },
];

export function laneX(volume: number): number {
  return 70 + volume * (490 / 450);
}

export function laneY(margin: number): number {
  return 380 - (margin + 5) * (330 / 45);
}

export function bubbleRadius(revenue: number): number {
  return 6 + Math.sqrt(revenue) / 145;
}
