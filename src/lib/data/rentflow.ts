/**
 * Flowza RentFlow — /products/rentflow
 *
 * Ported from `parts/46-rentflow.html` and `parts/js/rentflow.js`. Two things
 * carry the page: the five-status pipeline with a count and an ageing figure
 * per status, and the gate where approve and reject stay closed until all five
 * screening checks have returned.
 *
 * There is deliberately no testimonial data here. The slot a quote would
 * occupy is RENTFLOW_SCOPE, whose last item explains the absence.
 */

/* ------------------------------------------------------------- the pipeline */

export interface RentColumn {
  /** Status name, as it appears on the column head. */
  key: string;
  /** What the status means. */
  tag: string;
}

export const RENT_COLUMNS: readonly RentColumn[] = [
  { key: 'Pending review',  tag: 'Arrived, not yet opened' },
  { key: 'Under screening', tag: 'Five checks out' },
  { key: 'Approved',        tag: 'Terminal' },
  { key: 'Rejected',        tag: 'Terminal' },
  { key: 'Withdrawn',       tag: 'Terminal' },
];

/** Indices into RENT_COLUMNS, so a move reads as a status rather than a number. */
export const RENT_STATUS = {
  pending: 0,
  screening: 1,
  approved: 2,
  rejected: 3,
  withdrawn: 4,
} as const;

export interface RentApplication {
  id: string;
  name: string;
  email: string;
  unit: string;
  /** Days since the application landed. Ageing runs from arrival, not from being opened. */
  days: number;
  /** Index into RENT_COLUMNS. */
  status: number;
  /** The recorded reason, present on every decided file. */
  reason?: string;
}

export const RENT_APPLICATIONS: readonly RentApplication[] = [
  { id: 'RF-2026-0431', name: 'Aarav Shetty',    email: 'aarav.shetty@example.com',    unit: 'Unit 4A, Whitefield',     days: 1,  status: 0 },
  { id: 'RF-2026-0429', name: 'Nadia Haddad',    email: 'n.haddad@example.com',        unit: 'Unit 12B, Marathahalli',  days: 2,  status: 0 },
  { id: 'RF-2026-0427', name: 'Tomás Oliveira',  email: 't.oliveira@example.com',      unit: 'Unit 7C, Indiranagar',    days: 2,  status: 0 },
  { id: 'RF-2026-0424', name: 'Grace Wanjiru',   email: 'grace.wanjiru@example.com',   unit: 'Unit 4A, Whitefield',     days: 3,  status: 0 },
  { id: 'RF-2026-0422', name: 'Bilal Qureshi',   email: 'b.qureshi@example.com',       unit: 'Unit 19F, Hebbal',        days: 3,  status: 0 },
  { id: 'RF-2026-0419', name: 'Leila Mansour',   email: 'leila.mansour@example.com',   unit: 'Unit 7C, Indiranagar',    days: 3,  status: 0 },
  { id: 'RF-2026-0418', name: 'Priya Deshpande', email: 'p.deshpande@example.com',     unit: 'Unit 12B, Marathahalli',  days: 4,  status: 1 },
  { id: 'RF-2026-0415', name: 'Kwame Boateng',   email: 'k.boateng@example.com',       unit: 'Unit 19F, Hebbal',        days: 4,  status: 1 },
  { id: 'RF-2026-0412', name: 'Sofia Marchetti', email: 's.marchetti@example.com',     unit: 'Unit 4A, Whitefield',     days: 5,  status: 1 },
  { id: 'RF-2026-0409', name: 'Hassan Al-Amin',  email: 'h.alamin@example.com',        unit: 'Unit 7C, Indiranagar',    days: 5,  status: 1 },
  { id: 'RF-2026-0404', name: 'Meera Krishnan',  email: 'm.krishnan@example.com',      unit: 'Unit 2B, Koramangala',    days: 8,  status: 2, reason: 'All five checks clear. Income 3.6× rent.' },
  { id: 'RF-2026-0401', name: 'Daniel Osei',     email: 'd.osei@example.com',          unit: 'Unit 9D, Jayanagar',      days: 9,  status: 2, reason: 'All five checks clear. Guarantor not required.' },
  { id: 'RF-2026-0398', name: 'Ana Ferreira',    email: 'a.ferreira@example.com',      unit: 'Unit 15A, HSR',           days: 10, status: 2, reason: 'Checks clear. Income verified at 3.1× rent.' },
  { id: 'RF-2026-0395', name: 'Yusuf Demir',     email: 'y.demir@example.com',         unit: 'Unit 3C, Whitefield',     days: 11, status: 2, reason: 'Checks clear. Two references positive.' },
  { id: 'RF-2026-0392', name: 'Ritu Bhandari',   email: 'r.bhandari@example.com',      unit: 'Unit 8E, Hebbal',         days: 11, status: 2, reason: 'Checks clear. Additional deposit agreed.' },
  { id: 'RF-2026-0400', name: 'Marcus Adeyemi',  email: 'm.adeyemi@example.com',       unit: 'Unit 15A, HSR',           days: 9,  status: 3, reason: 'Income verification: 1.9× rent, below the 2.5× threshold set for this unit.' },
  { id: 'RF-2026-0396', name: 'Ingrid Sørensen', email: 'i.sorensen@example.com',      unit: 'Unit 9D, Jayanagar',      days: 9,  status: 3, reason: 'Unit let to an earlier applicant. No adverse finding on this file.' },
  { id: 'RF-2026-0389', name: 'Fatima Zahra',    email: 'f.zahra@example.com',         unit: 'Unit 2B, Koramangala',    days: 12, status: 3, reason: 'Eviction history: one filing, judgment for landlord, 2023.' },
  { id: 'RF-2026-0386', name: 'Oliver Grant',    email: 'o.grant@example.com',         unit: 'Unit 3C, Whitefield',     days: 13, status: 4, reason: 'Withdrawn by applicant. Took a tenancy elsewhere.' },
  { id: 'RF-2026-0381', name: 'Anjali Rao',      email: 'anjali.rao@example.com',      unit: 'Unit 8E, Hebbal',         days: 14, status: 4, reason: 'Withdrawn by applicant. No reason given.' },
];

/** Past this many days the ageing figure turns amber. */
export const RENT_AGEING_ALERT = 9;

export interface RentBulkAction {
  /** Button label. */
  label: string;
  /** Which status the batch moves to. */
  to: number;
  /**
   * The one reason written against each file individually. Empty where no
   * decision is taken — a status change is not a conclusion.
   */
  reason: string;
  /** How the log line reads. */
  verb: string;
}

export const RENT_BULK_ACTIONS: readonly RentBulkAction[] = [
  { label: 'Move to under screening',            to: 1, reason: '',                                                          verb: 'moved to under screening' },
  { label: 'Reject · incomplete documentation',  to: 3, reason: 'Incomplete documentation. Requested twice, not supplied.',  verb: 'rejected' },
  { label: 'Mark withdrawn',                     to: 4, reason: 'Withdrawn by applicant.',                                  verb: 'marked withdrawn' },
];

/* ------------------------------------------------------------------ the gate */

export type RentCheckState = 'w' | 'r' | 'c' | 'a';

/** Not run, out, clear, adverse. */
export const RENT_CHECK_LABEL: Record<RentCheckState, string> = {
  w: 'Not run',
  r: 'Out',
  c: 'Clear',
  a: 'Adverse',
};

export interface RentCheck {
  name: string;
  /** What the check looks at, shown before it returns. */
  description: string;
  /** What it returns: clear or adverse. */
  result: Extract<RentCheckState, 'c' | 'a'>;
  /** The finding, shown once it is back. */
  finding: string;
}

export interface RentFile {
  id: string;
  name: string;
  unit: string;
  submitted: string;
  checks: readonly RentCheck[];
  /** The reason recorded if this file is approved. */
  approveReason: string;
  /** The reason recorded if this file is rejected. */
  rejectReason: string;
}

export const RENT_FILES: readonly RentFile[] = [
  {
    id: 'RF-2026-0412',
    name: 'Sofia Marchetti',
    unit: 'Unit 4A, Whitefield',
    submitted: 'Submitted 5 days ago',
    checks: [
      { name: 'Credit check',        description: 'Score, open accounts and payment history.',                 result: 'c', finding: 'Clear · score 748 · no adverse accounts' },
      { name: 'Background check',    description: 'Identity and public records.',                               result: 'c', finding: 'Clear · identity confirmed · no records' },
      { name: 'Eviction history',    description: 'Filings and judgments against the applicant.',               result: 'c', finding: 'Clear · no filings found' },
      { name: 'Income verification', description: 'Stated income against evidence, as a multiple of rent.',     result: 'c', finding: 'Verified · 3.4× rent' },
      { name: 'References',          description: 'Prior landlord and employer.',                              result: 'c', finding: 'Returned · 2 of 2, both positive' },
    ],
    approveReason: 'All five checks returned clear. Credit 748, income verified at 3.4× rent, two positive references.',
    rejectReason: 'Unit let to an earlier applicant. No adverse finding on this file.',
  },
  {
    id: 'RF-2026-0418',
    name: 'Priya Deshpande',
    unit: 'Unit 12B, Marathahalli',
    submitted: 'Submitted 4 days ago',
    checks: [
      { name: 'Credit check',        description: 'Score, open accounts and payment history.',                 result: 'c', finding: 'Clear · score 691 · no adverse accounts' },
      { name: 'Background check',    description: 'Identity and public records.',                               result: 'c', finding: 'Clear · identity confirmed · no records' },
      { name: 'Eviction history',    description: 'Filings and judgments against the applicant.',               result: 'a', finding: 'Adverse · one filing, judgment for landlord, 2024' },
      { name: 'Income verification', description: 'Stated income against evidence, as a multiple of rent.',     result: 'c', finding: 'Verified · 2.8× rent' },
      { name: 'References',          description: 'Prior landlord and employer.',                              result: 'c', finding: 'Returned · 2 of 2, one qualified' },
    ],
    approveReason: 'Approved with the adverse eviction finding noted and accepted. Additional deposit agreed.',
    rejectReason: 'Eviction history: one filing, judgment for landlord, 2024.',
  },
];

/** Who the decision record is written against, and the minute it starts from. */
export const RENT_DECIDED_BY = 'S. Kulkarni · letting manager';
export const RENT_RECORD_DATE = '2026-08-08 12:';
export const RENT_RECORD_MINUTE_START = 42;

/* ------------------------------------------------------- how it works, scope */

export const RENT_STEPS: readonly { n: string; heading: string; body: string }[] = [
  {
    n: '01',
    heading: 'Collect',
    body: 'Applications arrive in one dashboard instead of an inbox, tracked from the moment they land, with nothing copied into a spreadsheet. The arrival time is the start of the clock, which is why the board can tell you the age of the oldest item in each status rather than only how many there are.',
  },
  {
    n: '02',
    heading: 'Screen',
    body: 'Credit, background, eviction-history, income and reference checks run in-app as each application moves from pending to under screening. The results attach to the application rather than arriving as five separate emails that somebody has to reunite with the file.',
  },
  {
    n: '03',
    heading: 'Decide',
    body: 'Approve or reject in a click, with the reason recorded. Clear backlogs with bulk actions when applications surge — a listing going live on a Friday produces a Monday that is a volume problem, not a judgement problem.',
  },
];

export const RENT_FEATURES: readonly { heading: string; body: string }[] = [
  {
    heading: 'One pipeline for everything',
    body: 'Every application at a glance, filtered by status: pending review, under screening, approved, rejected, withdrawn. Five states, so there is no drawer for the ones nobody has classified.',
  },
  {
    heading: 'Screening built in',
    body: 'Credit checks, background checks, eviction history, income verification and references, run without leaving the app.',
  },
  {
    heading: 'One-click decisions',
    body: 'Approve or reject in a click, with the reason recorded automatically for your records.',
  },
  {
    heading: 'Bulk actions',
    body: 'Move many applications through the pipeline at once when volume spikes.',
  },
  {
    heading: 'Searchable records',
    body: 'Find any applicant instantly by name, email or application ID.',
  },
];

/**
 * Out of scope, deliberately. The final item is the page's testimonial slot:
 * it is the absence of a customer quote, stated as a scope boundary. It must
 * not be replaced with a quote, a placeholder or a substitute pull-quote.
 */
export const RENTFLOW_SCOPE: readonly { heading: string; body: string }[] = [
  {
    heading: 'Lease generation',
    body: 'RentFlow records a decision. It does not draft, template or execute the agreement that follows one.',
  },
  {
    heading: 'Rent collection',
    body: 'No rent runs, no arrears ledger, no payment schedule. Money owed under a signed tenancy is a finance problem and belongs in Flowza Finance.',
  },
  {
    heading: 'Maintenance and works orders',
    body: 'No tickets, no contractors, no inspections. Nothing here follows the applicant past the point of approval.',
  },
  {
    heading: 'Tenancy management',
    body: 'Renewals, notices, deposits and end-of-tenancy are not modelled. The application is the unit of work and it ends when it is decided.',
  },
  {
    heading: 'A published customer quote',
    body: 'There is no testimonial on this page. RentFlow is live and in use, and we will publish a quote when a real, named customer gives us one to attribute. An invented endorsement would tell you less than this sentence does.',
  },
];

/* ------------------------------------------------------------ page furniture */

export const RENT_BADGES: readonly string[] = [
  'Tenant screening',
  'Bulk actions',
  'One pipeline',
];

export const RENT_METRICS: readonly { value: string; label: string }[] = [
  { value: '5',       label: 'screening checks built in' },
  { value: '5',       label: 'pipeline statuses, pending through withdrawn' },
  { value: '1-click', label: 'decisions with the reason recorded' },
  { value: 'Bulk',    label: 'move many applications at once' },
];

export const RENT_FAQ: readonly { question: string; answer: string }[] = [
  {
    question: 'Does RentFlow manage the tenancy after approval?',
    answer: 'No. It collects the application, runs the screening and records the decision. Leases, rent, deposits, renewals and maintenance are outside it. The approved applicant is available to the rest of Flowza as a party record, so nothing is retyped, but RentFlow itself stops at the decision.',
  },
  {
    question: 'Where do the five checks come from?',
    answer: 'They are run from inside the application rather than from five separate portals, and which provider serves each check is configured per market, because credit and eviction data are national. What is constant is where the result lands: attached to the application, dated, and visible to whoever takes the decision.',
  },
  {
    question: 'Can a decision be taken before the checks are back?',
    answer: 'The approve and reject actions stay closed until all five have returned. This is a small rule with a large effect: it means an approval on file is always an approval taken on complete information, and a rejection always has a screening record sitting behind whatever reason was given.',
  },
  {
    question: 'What exactly is recorded with a decision?',
    answer: 'The decision, who took it, when, and the reason. Where an adverse check drove it, the finding is the reason. Where no check drove it — the unit was let to someone else — that is recorded as the reason instead. A decision without a reason is not a state the product can be left in, which is the point of recording it automatically rather than asking someone to remember.',
  },
  {
    question: 'Does a bulk action skip the reason?',
    answer: 'No. A bulk move carries one reason for the batch and writes it against each application separately, so a file moved in a group of forty reads the same afterwards as one moved on its own.',
  },
  {
    question: 'How do we find an application from six weeks ago?',
    answer: 'By name, email or application ID. Decided applications stay in the pipeline under approved, rejected or withdrawn rather than being cleared away, so the record of what was decided and why survives the decision.',
  },
];

export const RENT_RELATED: readonly { href: string; title: string; subtitle: string }[] = [
  { href: '/products/finance', title: 'Flowza Finance', subtitle: 'Where money owed is handled' },
  { href: '/platform',         title: 'Platform',       subtitle: 'The shared party record' },
  { href: '/products/pms',     title: 'Flowza PMS',     subtitle: 'Rate, calibrate and pay' },
];
