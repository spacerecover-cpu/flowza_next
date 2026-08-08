/**
 * The nine Flowza AI applications.
 *
 * Each entry describes one application on its own terms: who it is built for,
 * what it does, and what it replaces. There is deliberately no exchange graph
 * and no record-sharing model here — the nine are independent cloud
 * applications, each with its own database, its own subscription and its own
 * release train. An earlier version of this file encoded a shared record layer
 * with a symmetric exchange graph between the nine; that described an
 * architecture Flowza AI does not have, and it has been removed rather than
 * softened.
 */

/** The short name of an application, used as its key throughout the site. */
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

/** One headline capability of an application, with a sentence of detail. */
export interface Capability {
  title: string;
  detail: string;
}

export interface FlowzaSystem {
  key: SystemKey;
  /** Full product name, as it is written everywhere else. */
  name: string;
  /** The app subdomain this application actually runs on. */
  app: string;
  /** The marketing route for the product. */
  href: string;
  tagline: string;
  description: string;
  /** The kind of business this application is built for. */
  builtFor: string;
  /** What a business typically runs before it buys this one. */
  replaces: string;
  capabilities: Capability[];
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
    builtFor: 'Finance teams running a business that has outgrown its accounting package',
    replaces: 'An entry-level accounting package plus a separate payroll bureau',
    capabilities: [
      { title: 'Double-entry ledger', detail: 'Sales, purchases and inventory movements post to a ledger that balances by construction.' },
      { title: 'Statutory tax engines', detail: 'GST for India, VAT and corporate tax for the Gulf, maintained as the rules change.' },
      { title: 'Payroll and HR', detail: 'EPF, ESI, professional tax, gratuity, WPS bank files and GOSI, by country.' },
      { title: 'Multi-entity and multi-currency', detail: 'Consolidation across entities and currencies, with translation handled at close.' },
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
    builtFor: 'Freight, distribution and third-party logistics operators',
    replaces: 'A routing tool, a tracking portal and a warehouse spreadsheet',
    capabilities: [
      { title: 'Route optimisation', detail: 'Sequences drops against time windows, vehicle capacity and driver hours.' },
      { title: 'Live shipment tracking', detail: 'Status, exceptions and proof of delivery on one board, visible to the customer.' },
      { title: 'Warehouse management', detail: 'Bins, picking, putaway and cycle counts across sites.' },
      { title: 'Lane economics', detail: 'Cost and margin per lane, so the unprofitable ones are visible before renewal.' },
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
    builtFor: 'Spas, salons and wellness studios',
    replaces: 'A booking widget, a paper rota and a loyalty card',
    capabilities: [
      { title: 'Branded online booking', detail: 'Clients book real availability, not a request form somebody answers later.' },
      { title: 'Certification-aware rosters', detail: 'A therapist is only offered for treatments they are currently certified to deliver.' },
      { title: 'Retail and consumables', detail: 'Reception retail and treatment consumables tracked against each visit.' },
      { title: 'Loyalty and retention', detail: 'Visit history, packages and lapse alerts for clients who have stopped rebooking.' },
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
    builtFor: 'Any business running a fleet of vehicles it owns or leases',
    replaces: 'A tracker subscription and a maintenance diary',
    capabilities: [
      { title: 'Live GPS and trip replay', detail: 'Position, route history and geofence events for every vehicle.' },
      { title: 'Driver behaviour scoring', detail: 'Harsh braking, speed and cornering scored into a coachable number.' },
      { title: 'Predictive maintenance', detail: 'Service intervals driven by actual use rather than a calendar.' },
      { title: 'True cost per kilometre', detail: 'Fuel, parts, servicing and downtime resolved to a per-kilometre figure.' },
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
    builtFor: 'Marketing, packaging and operations teams that print codes',
    replaces: 'A free QR generator and no analytics at all',
    capabilities: [
      { title: 'Re-pointable codes', detail: 'Change where a printed code goes without reprinting a single label.' },
      { title: 'Scan analytics', detail: 'Every scan logged with time, device and approximate location.' },
      { title: 'Bulk minting', detail: 'Thousands of unique codes generated from one CSV, print-ready.' },
      { title: 'Routing rules', detail: 'Send a scan to a different destination by time, country or device.' },
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
    builtFor: 'Retail and hospitality operators, single site or many',
    replaces: 'A till that stops working when the line drops',
    capabilities: [
      { title: 'True offline mode', detail: 'Sales continue through an outage and reconcile when the connection returns.' },
      { title: 'Sub-second transactions', detail: 'The queue moves at the speed of the card reader, not the network.' },
      { title: 'Multi-location inventory', detail: 'Stock position per site, with transfers between them.' },
      { title: 'Customer analytics', detail: 'Basket composition, repeat rate and per-outlet performance.' },
    ],
  },

  {
    key: 'Club',
    name: 'Flowza Club',
    app: 'club.flowza.ai',
    href: '/products/club',
    tagline: 'Membership, booking and billing for clubs',
    description:
      'Membership and household billing, a double-entry ledger that ties out, charge-to-account outlets, and a booking engine that cannot double-book.',
    builtFor: 'Golf, sports, leisure and social clubs',
    replaces: 'A membership database, a booking sheet and a billing spreadsheet',
    capabilities: [
      { title: 'Household billing', detail: 'Dues, joining fees and levies billed to the household, not to nine separate people.' },
      { title: 'A ledger that ties out', detail: 'Member accounts receivable reconciles to the general ledger without a monthly hunt.' },
      { title: 'Charge to account', detail: 'Outlets across the club post to the member account at the point of sale.' },
      { title: 'Booking without collisions', detail: 'Tee times, courts and rooms allocated so a double-booking cannot be recorded.' },
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
    builtFor: 'Letting agents and residential landlords',
    replaces: 'An inbox full of applications and a screening service used ad hoc',
    capabilities: [
      { title: 'One application pipeline', detail: 'Every enquiry in one queue with its stage and its owner visible.' },
      { title: 'Five screening checks', detail: 'Credit, background, eviction history, income and references, run consistently.' },
      { title: 'Recorded decisions', detail: 'The reason for every accept and decline is stored against the application.' },
      { title: 'Applicant communication', detail: 'Requests for documents and outcome notices sent from the record itself.' },
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
    builtFor: 'HR teams running formal appraisal and increment cycles',
    replaces: 'An appraisal spreadsheet and a separate increment workbook',
    capabilities: [
      { title: 'KRA and KPI cycles', detail: 'Goals set, reviewed and rated on a cycle the whole organisation runs together.' },
      { title: 'Bell-curve calibration', detail: 'Ratings calibrated across managers before anything is communicated.' },
      { title: 'Statutory compensation', detail: 'Increments resolved against India and Gulf statutory rules.' },
      { title: 'Verifiable letters', detail: 'Approved letters carry a reference a third party can check on a public page.' },
    ],
  },
];
