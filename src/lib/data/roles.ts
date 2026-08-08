export interface FunctionRole {
  slug: string;
  team: string;
  name: string;
  question: string;
  hardToday: string;
  whatChanges: string;
  stats: { value: string; label: string }[];
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
  },
];
