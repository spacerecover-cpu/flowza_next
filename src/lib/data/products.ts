/**
 * The nine products as the home page explorer shows them: the app subdomain as
 * the kicker, the catalogue summary as the body. Ported from the `#pxGrid`
 * cards in `parts/11-home-b.html`.
 */
export type ProductTag = 'back' | 'trade' | 'move' | 'market';

export interface ProductCard {
  /** The app subdomain this product runs on. Nine applications, nine subdomains. */
  kind: string;
  name: string;
  description: string;
  href: string;
  tags: ProductTag[];
}

export const PRODUCT_CARDS: ProductCard[] = [
  {
    kind: 'finance.flowza.ai',
    name: 'Flowza Finance',
    description:
      'Sales, purchases, inventory, double-entry accounting, payroll and HR on one connected ledger, with multi-currency and multi-country compliance from day one.',
    href: '/products/finance',
    tags: ['back'],
  },
  {
    kind: 'logispro.flowza.ai',
    name: 'Flowza LogisPro',
    description:
      'AI-optimised routes, live shipment tracking and a full warehouse management system — one map, one operations picture.',
    href: '/products/logispro',
    tags: ['move'],
  },
  {
    kind: 'spamaster.flowza.ai',
    name: 'Flowza Spa Master',
    description:
      'Online booking, staff scheduling, retail inventory and loyalty — every client touchpoint from the first booking to the returning guest.',
    href: '/products/spamaster',
    tags: ['trade'],
  },
  {
    kind: 'fleetza.flowza.ai',
    name: 'Flowza Fleetza',
    description:
      'Live GPS, AI driver scoring, predictive maintenance and fuel analytics — the full picture of every vehicle, every trip and every cost.',
    href: '/products/fleetza',
    tags: ['move'],
  },
  {
    kind: 'qr.flowza.ai',
    name: 'Flowza QRForge',
    description:
      'QR codes that stay useful after the ink dries. Re-point printed codes at any time, watch every scan live, and mint thousands from one CSV.',
    href: '/products/qrforge',
    tags: ['market'],
  },
  {
    kind: 'pos.flowza.ai',
    name: 'Flowza POS',
    description:
      'Sub-second transactions, true offline mode, multi-location inventory and customer analytics — on whatever hardware you already own.',
    href: '/products/pos',
    tags: ['trade'],
  },
  {
    kind: 'club.flowza.ai',
    name: 'Flowza Club',
    description:
      'Membership and household billing, a ledger that ties out, charge-to-account outlets, and a booking engine that cannot double-book.',
    href: '/products/club',
    tags: ['trade'],
  },
  {
    kind: 'rentflow.flowza.ai',
    name: 'Flowza RentFlow',
    description:
      'Every rental application in one pipeline — collected, screened against five checks, and decided with the reason recorded.',
    href: '/products/rentflow',
    tags: ['back'],
  },
  {
    kind: 'pms.flowza.ai',
    name: 'Flowza PMS',
    description:
      "Review cycles and bell-curve calibration feeding a compensation engine that knows your country's statutory rules, closing with a letter anyone can verify.",
    href: '/products/pms',
    tags: ['back'],
  },
];
