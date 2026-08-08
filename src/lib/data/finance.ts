/**
 * Flowza Finance — the repeated and tabular content of /products/finance.
 * Ported from the `products/finance` route in `parts/30-products-a.html`.
 *
 * The eight modules are ordered 01 to 08 exactly as the definition list under
 * the ledger spine orders them. The spine draws the odd-numbered ones above the
 * ledger line and the even-numbered ones below it, so the order here is load
 * bearing: LedgerSpine derives node positions from the array index.
 */

export interface BackOfficeModule {
  /** Two-digit index, matching the numbered node on the ledger spine. */
  index: string;
  name: string;
  bullets: string[];
}

export const BACK_OFFICE_MODULES: BackOfficeModule[] = [
  {
    index: '01',
    name: 'Sales & Receivables',
    bullets: [
      'Quote to cash: quotes, orders, invoices, delivery',
      'Recurring, proforma and B2B/B2C invoicing',
      'Credit notes and payment allocation',
      'E-way bills and branded PDF templates',
    ],
  },
  {
    index: '02',
    name: 'Purchases & Payables',
    bullets: [
      'Purchase orders with partial billing',
      'Three-way matching: PO, GRN and bill',
      'Vendor credits and recurring bills',
      'Bills of entry for imports',
    ],
  },
  {
    index: '03',
    name: 'Inventory & Stock',
    bullets: [
      'Perpetual inventory with automatic COGS',
      'Weighted Average Cost valuation',
      'Serial tracking and multi-location',
      'Bundles, reorder alerts and warranty',
    ],
  },
  {
    index: '04',
    name: 'Accounting & Banking',
    bullets: [
      'Double-entry chart of accounts',
      'Journals, divisions and period locks',
      'Bank management and reconciliation',
      'Nightly sub-ledger versus GL drift checks',
    ],
  },
  {
    index: '05',
    name: 'Payroll',
    bullets: [
      'Salary structures and payslips',
      'Form 16, ESI, PT, TDS and WPS files',
      'Overtime, arrears and loans',
      'Earned Wage Access for on-demand pay',
    ],
  },
  {
    index: '06',
    name: 'HR Suite (HRMS)',
    bullets: [
      'Recruitment, applicant tracking and onboarding',
      'Leave, attendance and shift scheduling',
      'Performance, engagement and timesheets',
      'Employee self-service portal',
    ],
  },
  {
    index: '07',
    name: 'Reporting & Analytics',
    bullets: [
      '40+ financial and operational reports',
      'Export to PDF, Excel, CSV and print',
      'P&L, balance sheet, cash flow and ageing',
      'AI-written dashboard narratives',
    ],
  },
  {
    index: '08',
    name: 'Documents & PDF',
    bullets: [
      'Seven-tab visual template editor',
      'Nine presets, including Tally Classic',
      'Logos, watermarks and QR codes',
      'Configurable email templates',
    ],
  },
];

/**
 * One cell of the compliance matrix.
 *
 * A cell we do not ship is `shipped: false` and renders as an em-dash with a
 * footnote marker — never a tick, and never a hedge. `lead` is set in bold and
 * `text` follows it immediately, so `text` carries its own leading punctuation
 * or space.
 */
export type ComplianceCell =
  | { shipped: true; lead?: string; text?: string }
  | { shipped: false };

export interface ComplianceRow {
  country: string;
  indirectTax: ComplianceCell;
  corporateTax: ComplianceCell;
  payroll: ComplianceCell;
  documents: ComplianceCell;
}

export const COMPLIANCE_MATRIX: ComplianceRow[] = [
  {
    country: 'India',
    indirectTax: {
      shipped: true,
      lead: 'GST',
      text: ' — CGST, SGST, IGST and reverse charge. GST returns on schedule, with the input tax credit ledger tracked as you post.',
    },
    corporateTax: {
      shipped: true,
      lead: 'TDS',
      text: ' deducted, tracked and reported through the ledger.',
    },
    payroll: { shipped: true, text: 'Form 16, ESI, Professional Tax and TDS.' },
    documents: {
      shipped: true,
      text: 'E-way bills. Branded PDF templates, including a Tally Classic preset.',
    },
  },
  {
    country: 'UAE',
    indirectTax: {
      shipped: true,
      lead: 'VAT at 5%',
      text: ', applied at the line and carried through to the return.',
    },
    corporateTax: { shipped: true, lead: 'Corporate Tax at 9%.' },
    payroll: { shipped: true, lead: 'WPS', text: ' payroll bank files.' },
    documents: {
      shipped: true,
      text: 'Branded PDF templates with logo, watermark and QR code.',
    },
  },
  {
    country: 'Oman',
    indirectTax: {
      shipped: true,
      lead: 'VAT at 5%',
      text: ', with the country chart-of-accounts pack.',
    },
    corporateTax: { shipped: false },
    payroll: { shipped: true, text: 'Social insurance payroll.' },
    documents: {
      shipped: true,
      text: 'Branded PDF templates with logo, watermark and QR code.',
    },
  },
  {
    country: 'Saudi Arabia',
    indirectTax: { shipped: false },
    corporateTax: { shipped: false },
    payroll: { shipped: true, lead: 'GOSI', text: ' payroll.' },
    documents: { shipped: true, text: 'Arabic and right-to-left document templates.' },
  },
];

export interface JournalLine {
  account: string;
  description: string;
  /** Formatted as it is published, em-dash where there is no amount. */
  debit: string;
  credit: string;
  /** Proposed by Flowza rather than entered by a person. */
  proposed?: boolean;
}

/** The entry Flowza drafts from invoice NW-88214. */
export const PROPOSED_JOURNAL: JournalLine[] = [
  { account: '1400', description: 'Inventory — raw', debit: '3,768.00', credit: '—' },
  {
    account: '1400',
    description: 'Inbound freight, capitalised',
    debit: '185.00',
    credit: '—',
    proposed: true,
  },
  { account: '2100', description: 'Accounts payable', debit: '—', credit: '3,953.00' },
];

export interface DriftRow {
  subLedger: string;
  /** The control account in the general ledger. */
  control: string;
  subLedgerBalance: string;
  generalLedgerBalance: string;
  variance: string;
  /** Drift: the two sides do not agree and the difference is raised. */
  flagged?: boolean;
}

/** Last night's sub-ledger against general ledger reconciliation. */
export const DRIFT_CHECK: DriftRow[] = [
  {
    subLedger: 'Receivables',
    control: '1200',
    subLedgerBalance: '1,842,310.00',
    generalLedgerBalance: '1,842,310.00',
    variance: '0.00',
  },
  {
    subLedger: 'Payables',
    control: '2100',
    subLedgerBalance: '962,455.00',
    generalLedgerBalance: '962,455.00',
    variance: '0.00',
  },
  {
    subLedger: 'Inventory',
    control: '1400',
    subLedgerBalance: '1,318,204.00',
    generalLedgerBalance: '1,317,024.00',
    variance: '1,180.00',
    flagged: true,
  },
  {
    subLedger: 'Payroll liabilities',
    control: '2300',
    subLedgerBalance: '214,880.00',
    generalLedgerBalance: '214,880.00',
    variance: '0.00',
  },
  {
    subLedger: 'Tax control',
    control: '2400',
    subLedgerBalance: '88,190.00',
    generalLedgerBalance: '88,190.00',
    variance: '0.00',
  },
];

/** The connections the product ships with. */
export const FINANCE_INTEGRATIONS: string[] = [
  'Stripe',
  'PayPal',
  'WhatsApp Business',
  'Slack',
  'Email / SMTP',
  'Biometric devices',
  'Zoho import',
  'Calendar sync',
];

export interface SecurityItem {
  heading: string;
  body: string;
}

export const FINANCE_SECURITY: SecurityItem[] = [
  {
    heading: 'MFA and AAL2 step-up',
    body: 'Multi-factor authentication throughout, with step-up authentication at AAL2 in front of the actions that move money or change entitlements.',
  },
  {
    heading: 'Role-based access',
    body: 'Granular permissions per role, so a store manager, a payroll officer and an external accountant reach different parts of the same ledger.',
  },
  {
    heading: 'Tenant isolation at the database',
    body: 'Row-level isolation is enforced in the database rather than by application code that has to remember to filter.',
  },
  {
    heading: 'Append-only audit trail',
    body: 'Every action is written once and kept. Deletions are soft, and recovery is a supported operation rather than a support ticket.',
  },
  {
    heading: 'Your data leaves when you ask',
    body: 'Full export on request, and erasure on request. Neither is a negotiation, and neither depends on us building something first.',
  },
];
