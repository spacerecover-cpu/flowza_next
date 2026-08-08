/**
 * The nine Flowza systems, and what each one puts into — and takes out of — the
 * shared data layer.
 *
 * Ported verbatim from the `SYSTEMS` array in the site source
 * (`parts/99-scripts.html`). This is the data behind the claim the whole site
 * makes: nine separate applications, on nine separate subdomains, connected to
 * one layer rather than to each other.
 *
 * INVARIANT — the exchange graph is symmetric, and was checked by hand.
 * If A lists B in `exchanges`, B lists A, with the same record type. There are
 * sixteen pairs and therefore thirty-two entries. Nothing derives this at
 * runtime, so an edit that adds an exchange on one side only will silently
 * produce a board where selecting A highlights B but selecting B does not
 * highlight A. Add and remove exchanges in pairs.
 */

/** The six object types the record layer holds. Nothing else is shared. */
export type RecordType = 'PARTY' | 'ITEM' | 'ENTRY' | 'LOCATION' | 'PERSON' | 'DOCUMENT';

/** The short name of a system, used as its key throughout the exchange graph. */
export type SystemKey =
  | 'Finance'
  | 'LogisPro'
  | 'Spa Master'
  | 'Fleetza'
  | 'QRForge'
  | 'POS'
  | 'Club'
  | 'RentFlow'
  | 'PMS';

/** One record type a system writes into the layer, or reads back out of it. */
export interface RecordUse {
  type: RecordType;
  detail: string;
}

/** A record type that crosses between two systems, and why it does. */
export interface Exchange {
  system: SystemKey;
  record: RecordType;
  why: string;
}

export interface FlowzaSystem {
  key: SystemKey;
  /** Full product name, as it is written everywhere else. */
  name: string;
  /** The app subdomain this system actually runs on. */
  app: string;
  /** The marketing route for the product. */
  href: string;
  tagline: string;
  description: string;
  writes: RecordUse[];
  reads: RecordUse[];
  exchanges: Exchange[];
}

export const SYSTEMS: FlowzaSystem[] = [
  {
    key: 'Finance',
    name: 'Flowza Finance',
    app: 'finance.flowza.ai',
    href: '/products/finance',
    tagline: 'Accounting, ERP and payroll on one ledger',
    description:
      'Sales, purchases, inventory, double-entry accounting, payroll and HR posting to one connected ledger, with GST and Gulf VAT engines built in.',
    writes: [
      { type: 'ENTRY', detail: 'Every posting, wherever it originated' },
      { type: 'PARTY', detail: 'Customers and suppliers' },
      { type: 'ITEM', detail: 'Cost, valuation and COGS' },
      { type: 'PERSON', detail: 'Employment, payroll and statutory filings' },
    ],
    reads: [
      { type: 'ENTRY', detail: 'Sales and charges raised in other systems' },
      { type: 'PERSON', detail: 'The compensation PMS resolved' },
    ],
    exchanges: [
      { system: 'POS', record: 'ENTRY', why: 'every sale posts here as it happens, with no overnight export' },
      { system: 'Club', record: 'ENTRY', why: 'dues, tabs and signed chits settle into the same ledger' },
      { system: 'Spa Master', record: 'ENTRY', why: 'treatment revenue and reception retail' },
      { system: 'PMS', record: 'PERSON', why: 'the pay PMS resolved is what payroll runs' },
      { system: 'LogisPro', record: 'ITEM', why: 'landed cost lands on the goods received' },
      { system: 'Fleetza', record: 'ITEM', why: 'whole-life vehicle cost and depreciation' },
      { system: 'RentFlow', record: 'PARTY', why: 'an approved applicant is already a billable party' },
    ],
  },

  {
    key: 'LogisPro',
    name: 'Flowza LogisPro',
    app: 'logispro.flowza.ai',
    href: '/products/logispro',
    tagline: 'Routes, shipments and warehouses, optimised',
    description:
      'AI route optimisation, live shipment tracking and a full warehouse management system on one operations picture.',
    writes: [
      { type: 'LOCATION', detail: 'Depots, stops, routes and warehouse bins' },
      { type: 'ITEM', detail: 'Warehouse stock position and movement' },
      { type: 'PERSON', detail: 'Driver hours, assignment and compliance' },
    ],
    reads: [
      { type: 'PARTY', detail: 'Consignees, carriers and last-mile partners' },
      { type: 'ITEM', detail: 'What is being moved, and from where' },
    ],
    exchanges: [
      { system: 'Fleetza', record: 'PERSON', why: 'the same driver and the same vehicle, scored there and scheduled here' },
      { system: 'POS', record: 'ITEM', why: 'replenishment arriving at a trading site' },
      { system: 'Finance', record: 'ITEM', why: 'freight cost and carrier settlement' },
      { system: 'QRForge', record: 'DOCUMENT', why: 'carton and pallet labels scanned at every hop' },
    ],
  },

  {
    key: 'Spa Master',
    name: 'Flowza Spa Master',
    app: 'spamaster.flowza.ai',
    href: '/products/spamaster',
    tagline: 'Bookings, rosters and loyalty for wellness',
    description:
      'A branded booking portal, a roster engine that respects certifications, retail stock and loyalty, around the treatment room as the constrained resource.',
    writes: [
      { type: 'PARTY', detail: 'Client profile, visit and treatment history' },
      { type: 'ITEM', detail: 'Treatment consumables and retail stock' },
      { type: 'PERSON', detail: 'Therapist roster, availability and certification' },
    ],
    reads: [
      { type: 'PARTY', detail: 'A client already known to another system' },
      { type: 'ENTRY', detail: 'Revenue and cost of goods posted' },
    ],
    exchanges: [
      { system: 'Finance', record: 'ENTRY', why: 'treatment revenue, retail margin and COGS' },
      { system: 'Club', record: 'PARTY', why: 'a member of the club booking a treatment is one person' },
      { system: 'POS', record: 'ITEM', why: 'the same retail line sold at reception' },
      { system: 'QRForge', record: 'DOCUMENT', why: 'booking links on printed material' },
    ],
  },

  {
    key: 'Fleetza',
    name: 'Flowza Fleetza',
    app: 'fleetza.flowza.ai',
    href: '/products/fleetza',
    tagline: 'Live tracking, driver scores and maintenance',
    description:
      'Live GPS, AI driver behaviour scoring, predictive maintenance and fuel analytics, giving a true cost per kilometre.',
    writes: [
      { type: 'LOCATION', detail: 'Vehicle position, replay and geofence events' },
      { type: 'PERSON', detail: 'Driver behaviour score and coaching history' },
      { type: 'ITEM', detail: 'Parts consumed in service' },
    ],
    reads: [
      { type: 'PERSON', detail: 'The driver, as the rest of the business knows them' },
      { type: 'LOCATION', detail: 'Sites, zones and customer premises' },
    ],
    exchanges: [
      { system: 'LogisPro', record: 'PERSON', why: 'a vehicle held for service is visible to the planner without re-entry' },
      { system: 'Finance', record: 'ITEM', why: 'acquisition, maintenance, fuel, insurance and depreciation' },
      { system: 'QRForge', record: 'DOCUMENT', why: 'asset tags on vehicles and serviceable parts' },
    ],
  },

  {
    key: 'QRForge',
    name: 'Flowza QRForge',
    app: 'qr.flowza.ai',
    href: '/products/qrforge',
    tagline: 'Dynamic QR codes with live analytics',
    description:
      'Destinations you can change after printing, every scan logged with location, device and time, and thousands of codes minted from one CSV.',
    writes: [{ type: 'DOCUMENT', detail: 'Codes, campaigns, routing rules and every scan' }],
    reads: [
      { type: 'ITEM', detail: 'What the code was printed on' },
      { type: 'LOCATION', detail: 'Where it was scanned' },
      { type: 'PARTY', detail: 'Who owns the campaign' },
    ],
    exchanges: [
      { system: 'POS', record: 'ITEM', why: 'product and promotion codes bound to real stock lines' },
      { system: 'Fleetza', record: 'DOCUMENT', why: 'asset tags that resolve to a vehicle file' },
      { system: 'LogisPro', record: 'DOCUMENT', why: 'carton and pallet labels' },
      { system: 'Spa Master', record: 'DOCUMENT', why: 'booking links printed on cards and menus' },
    ],
  },

  {
    key: 'POS',
    name: 'Flowza POS',
    app: 'pos.flowza.ai',
    href: '/products/pos',
    tagline: 'Point of sale that survives the internet',
    description:
      'Sub-second transactions, true offline mode, multi-location inventory and customer analytics, on hardware you already own.',
    writes: [
      { type: 'ENTRY', detail: 'Sale, tender and tax at the line' },
      { type: 'ITEM', detail: 'Stock movement at the trading site' },
      { type: 'PARTY', detail: 'What this customer actually bought' },
    ],
    reads: [
      { type: 'ITEM', detail: 'Price and live availability, including units reserved elsewhere' },
      { type: 'PARTY', detail: 'The customer, or the member' },
    ],
    exchanges: [
      { system: 'Finance', record: 'ENTRY', why: 'the sale is a ledger entry the moment it clears' },
      { system: 'Club', record: 'PARTY', why: 'charge to a member account at any outlet' },
      { system: 'Spa Master', record: 'ITEM', why: 'one stock position across shop floor and reception' },
      { system: 'LogisPro', record: 'ITEM', why: 'replenishment and inter-site transfer' },
      { system: 'QRForge', record: 'ITEM', why: 'codes printed on the products being sold' },
    ],
  },

  {
    key: 'Club',
    name: 'Flowza Club',
    app: 'club.flowza.ai',
    href: '/products/club',
    tagline: 'Membership, booking and billing for clubs',
    description:
      'Membership and household billing, a double-entry ledger that ties out, charge-to-account POS, and a booking engine that cannot double-book.',
    writes: [
      { type: 'PARTY', detail: 'Member, household and membership tier' },
      { type: 'ENTRY', detail: 'Dues, tabs, chits and payments' },
      { type: 'LOCATION', detail: 'Facilities and every bookable resource' },
    ],
    reads: [
      { type: 'ITEM', detail: 'Pro shop and food and beverage stock' },
      { type: 'PARTY', detail: 'A person already known to another system' },
    ],
    exchanges: [
      { system: 'Finance', record: 'ENTRY', why: 'one balanced ledger, reconciled A/R to GL' },
      { system: 'POS', record: 'PARTY', why: 'the outlet till can charge the member, not just the card' },
      { system: 'Spa Master', record: 'PARTY', why: 'the member and the spa client are the same record' },
    ],
  },

  {
    key: 'RentFlow',
    name: 'Flowza RentFlow',
    app: 'rentflow.flowza.ai',
    href: '/products/rentflow',
    tagline: 'Tenant applications, screened and decided',
    description:
      'Every application in one pipeline — collected, screened against five checks, and decided with the reason recorded.',
    writes: [
      { type: 'PARTY', detail: 'The applicant' },
      { type: 'DOCUMENT', detail: 'Application, screening results, decision and reason' },
    ],
    reads: [{ type: 'PARTY', detail: 'An applicant you already deal with elsewhere' }],
    exchanges: [
      { system: 'Finance', record: 'PARTY', why: 'an approved applicant becomes a known, billable party without re-entry' },
    ],
  },

  {
    key: 'PMS',
    name: 'Flowza PMS',
    app: 'pms.flowza.ai',
    href: '/products/pms',
    tagline: 'Rate, calibrate and pay on one system',
    description:
      'KRA and KPI cycles, bell-curve calibration and a compensation engine that knows your country’s statutory rules, closing with a letter anyone can verify.',
    writes: [
      { type: 'PERSON', detail: 'Rating, calibration outcome and resolved compensation' },
      { type: 'DOCUMENT', detail: 'Approved letters, signed and publicly verifiable' },
    ],
    reads: [{ type: 'PERSON', detail: 'The employee record the HR suite already holds' }],
    exchanges: [
      { system: 'Finance', record: 'PERSON', why: 'PMS decides what the pay should be; Finance pays it, on the same person' },
    ],
  },
];
