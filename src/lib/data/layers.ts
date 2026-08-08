/**
 * The four layers of the Flowza stack, ported from `LAYERS` in
 * `parts/99-scripts.html`.
 *
 * Only the top layer comes in nine. The three below it exist once, and that
 * asymmetry is the point of the stack rather than an implementation detail —
 * if the record layer came in nine there would be nine copies of your customer,
 * and Flowza would be a suite like any other.
 */
export interface ArchLayer {
  number: string;
  name: string;
  subtitle: string;
  bullets: string[];
  footer: string;
}

export const LAYERS: ArchLayer[] = [
  {
    number: '04',
    name: 'The nine systems',
    subtitle: 'Nine apps, nine subdomains, nine release trains',
    bullets: [
      'Finance, LogisPro, Spa Master, Fleetza, QRForge',
      'POS, Club, RentFlow, PMS',
      'Each on its own app and its own subdomain',
      'Each with its own release train',
      'Licensed independently — take one or take nine',
    ],
    footer:
      'This is the only layer where there are nine of anything. A system owns its screens, its workflow and its release; it does not own a copy of your data.',
  },
  {
    number: '03',
    name: 'Intelligence & automation',
    subtitle: 'Copilot, agents, forecasting, rules — shared',
    bullets: [
      'Copilot answering across all nine at once',
      'Agents that execute multi-step work',
      'Forecasting on demand, cash and churn',
      'Deterministic rules, approvals and SLAs',
      'Anomaly detection on posted transactions',
    ],
    footer:
      'This layer has no private datastore. It reads and writes through the same record layer as everything else, under the caller’s own permissions — never above them.',
  },
  {
    number: '02',
    name: 'Shared services',
    subtitle: 'Identity, permissions, tax engines, audit — shared',
    bullets: [
      'Identity, single sign-on and directory lifecycle',
      'Permissions evaluated at query time, not in each app',
      'Tax and statutory engines for India and the Gulf',
      'Documents, templates and notification channels',
      'Search across every object in every system',
    ],
    footer:
      'Written once and used by all nine. A tax rule fixed here is fixed for the till, the club and the ledger at once, without waiting for nine releases.',
  },
  {
    number: '01',
    name: 'The record layer',
    subtitle: 'Six object types, one row each — shared',
    bullets: [
      'Six object types: party, item, entry, location, person, document',
      'One physical row per record — no synchronised copies',
      'Immutable, attributable audit log across all nine',
      'Tenant isolation enforced below every application',
      'Region of residency fixed at provisioning',
    ],
    footer:
      'This is the layer that makes the rest possible, and it is the whole of what the nine systems have in common. Nothing above it holds a second copy.',
  },
];
