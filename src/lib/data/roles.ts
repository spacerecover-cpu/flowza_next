import { SystemKey } from '@/lib/data/systems';

export interface FunctionRole {
  slug: string;
  team: string;
  name: string;
  question: string;
  hardToday: string;
  whatChanges: string;
  stats: { value: string; label: string }[];
  /**
   * Which of the nine answer this function's question, and why. The switcher
   * on /solutions promises to show this, so it has to exist as data rather
   * than as a claim in a hint line.
   */
  applications: { key: SystemKey; why: string }[];
  /**
   * Used where the answer is a standard every application is built to rather
   * than a subset of them — IT and Security is the case that needs it.
   */
  platformAnswer?: string;
  /** Metadata for this function's own route under /solutions. */
  title: string;
  description: string;
}

export const ROLES: FunctionRole[] = [
  {
    slug: 'finance',
    team: 'Finance',
    name: 'Office of the CFO',
    question: 'Can I trust this number — and how fast can I close?',
    hardToday:
      'The consolidated figure is assembled from five systems that each disagree slightly. Most of the close is spent reconciling those differences and re-deriving accruals nobody can trace back to a document.',
    whatChanges:
      'Coding, matching and accrual run continuously against the same transactions the operators create. Exposure and margin are computed at read time, and any balance walks down to its source document without leaving the ledger.',
    stats: [
      { value: '3.2 days', label: 'Review-only close, once matching runs continuously' },
      { value: 'To source', label: 'Every balance walks down to the document behind it' },
    ],
    applications: [
      { key: 'Finance', why: 'The ledger itself — sales, purchases, inventory, banking and payroll posting to one set of books, with GST and Gulf VAT engines built in.' },
      { key: 'PMS', why: 'Resolves what each increment should be against statutory rules, and issues it as a structured payroll instruction rather than an email.' },
    ],
    title: 'Solutions for the office of the CFO — FlowZa AI',
    description:
      'Close faster and trust the number. How FlowZa Finance handles continuous coding, matching and accrual, with every balance traceable to its source document.',
  },
  {
    slug: 'operations',
    team: 'Operations',
    name: 'Operations',
    question: 'Where is the constraint today, and what will it cost me?',
    hardToday:
      'Stock sits in one system, orders in another and capacity in a spreadsheet. By the time the three agree the decision window has closed, and the exception has already become a customer complaint.',
    whatChanges:
      'One live position per location, including units reserved by orders raised at another site. Work arrives by exception — the twelve movements that need a decision, not the four hundred that do not.',
    stats: [
      { value: '1', label: 'Live stock position per location, across every site' },
      { value: 'Predicted', label: 'Late arrivals flagged before they are late' },
    ],
    applications: [
      { key: 'LogisPro', why: 'Routes sequenced against time windows, vehicle capacity and driver hours, with the warehouse position on the same board.' },
      { key: 'Fleetza', why: 'Vehicle availability, driver scores and predictive maintenance, resolved to a true cost per kilometre.' },
      { key: 'POS', why: 'Stock position per trading site, with transfers between them and replenishment visible before a shelf empties.' },
    ],
    title: 'Solutions for operations teams — FlowZa AI',
    description:
      'Find the constraint before it costs you. How FlowZa LogisPro, Fleetza and POS give one live position per location and surface work by exception.',
  },
  {
    slug: 'revenue',
    team: 'Revenue',
    name: 'Revenue teams',
    question: 'What can I actually promise this customer?',
    hardToday:
      'The CRM knows the pipeline but not the stock, the credit exposure or the true landed cost. People commit to dates operations never agreed to, and discounts clear without anyone seeing the effect on contribution.',
    whatChanges:
      'A quote reads live availability, live credit and real landed cost at the moment it is built. Approval thresholds are enforced where the discount is entered rather than discovered at month end.',
    stats: [
      { value: 'At quote', label: 'Availability and credit resolved before you commit' },
      { value: 'Per line', label: 'Contribution visible as the deal is built' },
    ],
    applications: [
      { key: 'POS', why: 'The sale itself, with basket composition, repeat rate and per-outlet performance behind it.' },
      { key: 'Club', why: 'Membership and household billing, charge-to-account across outlets, and a ledger that ties out.' },
      { key: 'Spa Master', why: 'Booking against real availability, with visit history and lapse alerts for clients who have stopped rebooking.' },
    ],
    title: 'Solutions for revenue teams — FlowZa AI',
    description:
      'Promise only what you can deliver. How FlowZa POS, Club and Spa Master resolve availability, credit and contribution at the moment a deal is built.',
  },
  {
    slug: 'it-security',
    team: 'IT & Security',
    name: 'IT & Security',
    question: 'How many vendors am I patching, and who can see what?',
    hardToday:
      'Eleven contracts, eleven permission models and eleven renewal dates. Offboarding means touching every one of them, and proving who saw a record means collecting logs in five different formats.',
    whatChanges:
      'Every FlowZa AI application connects to your directory the same way and keeps an audit log in the same shape, so single sign-on is configured once per application rather than reinvented, and an access review asks the same question of each one.',
    stats: [
      { value: 'One', label: 'Vendor, one questionnaire, one renewal conversation' },
      { value: 'Same', label: 'Security model to review in every application' },
    ],
    applications: [],
    platformAnswer:
      'This one is not answered by a subset of the nine. Tenant isolation, SAML and OIDC single sign-on, SCIM provisioning and an immutable audit log are built to the same standard in every application and enforced inside each one. That is deliberately useful in procurement: the review you run on the first application tells you what to expect of the next, and a finding in one cannot reach another.',
    title: 'Solutions for IT and security teams — FlowZa AI',
    description:
      'One vendor, one questionnaire, and the same security model to review in every application. Tenant isolation, SSO, SCIM and audit logging across FlowZa AI.',
  },
];

/** Look one up by slug — used by the per-function routes. */
export function roleBySlug(slug: string): FunctionRole | undefined {
  return ROLES.find((r) => r.slug === slug);
}
