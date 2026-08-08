/**
 * A day of stock movement in a manufacturer's stores, as FlowZa LogisPro
 * records it.
 *
 * Every row here is a movement type LogisPro genuinely handles — goods in,
 * putaway, pick, inter-site transfer, cycle count. Deliberately nothing about
 * what was produced from the material: there is no work order in the product,
 * so a consumption row says which bin it left, not which line consumed it.
 */
export type MovementKind = 'IN' | 'PUT' | 'PICK' | 'XFER' | 'COUNT';

export interface StockMovement {
  /** Local clock, 24 hour. */
  time: string;
  kind: MovementKind;
  item: string;
  /** Signed against the site holding it, as written on the movement. */
  qty: string;
  /** Bin, dock or site the movement runs between. */
  where: string;
  /** On-hand for that item at that site once the movement posted. */
  onHand: string;
  /** Set where the movement needed a person rather than a rule. */
  flagged?: boolean;
}

export const MOVEMENT_LABELS: Record<MovementKind, string> = {
  IN: 'Goods in',
  PUT: 'Putaway',
  PICK: 'Pick',
  XFER: 'Transfer',
  COUNT: 'Cycle count',
};

export const STOCK_MOVEMENTS: StockMovement[] = [
  { time: '06:12', kind: 'IN', item: 'Steel sheet 2mm', qty: '+480', where: 'Dock 1', onHand: '1,240' },
  { time: '06:41', kind: 'PUT', item: 'Steel sheet 2mm', qty: '480', where: 'Dock 1 → A-14', onHand: '1,240' },
  { time: '08:05', kind: 'PICK', item: 'Bearing 6204', qty: '−96', where: 'C-02', onHand: '312' },
  { time: '09:20', kind: 'IN', item: 'Motor housing', qty: '+120', where: 'Dock 2', onHand: '344' },
  { time: '10:47', kind: 'XFER', item: 'Bearing 6204', qty: '−80', where: 'Pune → Chennai', onHand: '232' },
  { time: '11:15', kind: 'PICK', item: 'Steel sheet 2mm', qty: '−220', where: 'A-14', onHand: '1,020' },
  { time: '13:30', kind: 'COUNT', item: 'Bearing 6204', qty: '−4', where: 'C-02', onHand: '228', flagged: true },
  { time: '15:02', kind: 'PUT', item: 'Motor housing', qty: '120', where: 'Dock 2 → B-07', onHand: '344' },
  { time: '16:44', kind: 'PICK', item: 'Motor housing', qty: '−60', where: 'B-07', onHand: '284' },
];

/** The line under the board — what the day added up to. */
export const STORES_SUMMARY = {
  movements: '9',
  sites: '2',
  variance: '1',
  varianceNote: 'Cycle count variance held for a supervisor rather than posted quietly',
};
