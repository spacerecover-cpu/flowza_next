/**
 * Flowza POS — the repeated and tabular content of /products/pos.
 * Ported from the `products/pos` route in `parts/30-products-a.html`.
 */

export interface SiteStockRow {
  site: string;
  onHand: string;
  reserved: string;
  inTransit: string;
  /** Days of cover, or an em-dash where cover is not meaningful. */
  cover: string;
  /** On hand is under the threshold set for this site. */
  lowOnHand?: boolean;
  /** Cover is under the threshold set for this site. */
  lowCover?: boolean;
}

/** One product, read across five shops and the warehouse. */
export const SITE_STOCK: SiteStockRow[] = [
  { site: 'Mall of DXB', onHand: '412', reserved: '38', inTransit: '120', cover: '14d' },
  {
    site: 'Marina Walk',
    onHand: '61',
    reserved: '22',
    inTransit: '0',
    cover: '3d',
    lowOnHand: true,
    lowCover: true,
  },
  { site: 'City Centre', onHand: '288', reserved: '15', inTransit: '60', cover: '11d' },
  { site: 'Airport T3', onHand: '174', reserved: '44', inTransit: '90', cover: '6d' },
  { site: 'Abu Dhabi', onHand: '355', reserved: '9', inTransit: '0', cover: '19d' },
  { site: 'Warehouse', onHand: '2,140', reserved: '310', inTransit: '480', cover: '—' },
];

export interface PostingLine {
  /** The record the sale moves: stock, revenue, tax, cash or the customer. */
  kind: string;
  label: string;
  value: string;
}

/**
 * What one till sale writes into Flowza Finance. Two systems on one data layer,
 * so these are consequences of the sale rather than a copy of it.
 */
export const POSTING_LINES: PostingLine[] = [
  { kind: 'STOCK', label: 'Beans 250g −1', value: 'SITE 04' },
  { kind: 'REVENUE', label: 'Retail — beverages', value: '85.50' },
  { kind: 'TAX', label: 'VAT output', value: '4.28' },
  { kind: 'CASH', label: 'Card settlement', value: '89.78' },
  { kind: 'CUSTOMER', label: 'Purchase history updated', value: 'SITE 04' },
];

export interface OfflineSlot {
  /** Start of the half hour, 24-hour clock. */
  time: string;
  /**
   * Sales taken in the half hour, on the drawing's own scale. An illustrative
   * day: the published claim is the 100% offline reliability figure, not this.
   */
  sales: number;
  /** Taken while the link was down — drawn outlined rather than solid. */
  queued?: boolean;
  /** The posting lane carries a mark under this slot. */
  posts?: boolean;
}

export interface OfflineDay {
  /** First and last hour on the axis. */
  openHour: number;
  closeHour: number;
  /** The connectivity outage, clock times. */
  outage: { from: string; to: string };
  /** Sales held on the device at the deepest point of the outage. */
  peakHeld: number;
  /** Conflicts that could not be resolved by a rule and were held for a person. */
  heldConflicts: number;
  slots: OfflineSlot[];
  /** The catch-up postings that clear the queue on reconnect. */
  burst: number[];
}

/**
 * One trading day with two and a half hours of no connection in the middle.
 * The slots are half-hourly and consecutive, so the timeline derives every x
 * position from the clock rather than from hand-placed coordinates.
 */
export const OFFLINE_DAY: OfflineDay = {
  openHour: 8,
  closeHour: 22,
  outage: { from: '13:40', to: '16:10' },
  peakHeld: 148,
  heldConflicts: 1,
  burst: [30, 34, 30, 32, 28],
  slots: [
    { time: '08:00', sales: 14, posts: true },
    { time: '08:30', sales: 18, posts: true },
    { time: '09:00', sales: 26, posts: true },
    { time: '09:30', sales: 30, posts: true },
    { time: '10:00', sales: 24, posts: true },
    { time: '10:30', sales: 22, posts: true },
    { time: '11:00', sales: 28, posts: true },
    { time: '11:30', sales: 34, posts: true },
    { time: '12:00', sales: 44, posts: true },
    { time: '12:30', sales: 52, posts: true },
    { time: '13:00', sales: 48, posts: true },
    { time: '13:30', sales: 40, posts: true },
    { time: '14:00', sales: 32, queued: true },
    { time: '14:30', sales: 28, queued: true },
    { time: '15:00', sales: 30, queued: true },
    { time: '15:30', sales: 26, queued: true },
    { time: '16:00', sales: 24, queued: true },
    // 16:30 sells and posts normally; its mark sits inside the catch-up burst.
    { time: '16:30', sales: 30 },
    { time: '17:00', sales: 34, posts: true },
    { time: '17:30', sales: 30, posts: true },
    { time: '18:00', sales: 36, posts: true },
    { time: '18:30', sales: 44, posts: true },
    { time: '19:00', sales: 52, posts: true },
    { time: '19:30', sales: 58, posts: true },
    { time: '20:00', sales: 54, posts: true },
    { time: '20:30', sales: 44, posts: true },
    { time: '21:00', sales: 30, posts: true },
    { time: '21:30', sales: 20, posts: true },
  ],
};
