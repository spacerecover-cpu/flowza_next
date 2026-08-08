/**
 * FlowZa Club — /products/club
 *
 * Ported from `parts/45-club.html` and `parts/js/club.js`. The shapes are the
 * site's own: the booking grid is a list of resources each carrying its own
 * no-overlap exclusion constraint, and every cell is one of four states.
 *
 * The arithmetic in CLUB_CHIT, CLUB_POSTINGS, CLUB_STATEMENT and
 * CLUB_ACCOUNT ties out and must stay that way: the chit total is the pro
 * shop line on the statement, the statement total is the balance on the
 * membership card, and the refused posting is out by exactly the tax line.
 */

/* ------------------------------------------------------------ the hero card */

export interface ClubCardField {
  key: string;
  value: string;
  /** Render the value in the mono face, as the membership number is. */
  mono?: boolean;
}

export const CLUB_CARD_FIELDS: readonly ClubCardField[] = [
  { key: 'Member',            value: 'Rohit Iyer' },
  { key: 'Membership no.',    value: 'PC-1042-01', mono: true },
  { key: 'Tier',              value: 'Full golfing · household' },
  { key: 'Household',         value: '1042 · four linked members' },
  { key: 'Status',            value: 'Active since 2014' },
  { key: 'Charge to account', value: 'Enabled · all outlets' },
];

export interface ClubAccountFigure {
  key: string;
  value: string;
  /** The statement balance is the figure the whole page ties back to. */
  signal?: boolean;
}

export const CLUB_ACCOUNT: readonly ClubAccountFigure[] = [
  { key: 'Dues · quarterly',   value: '13,125.00' },
  { key: 'Tabs, chits & fees', value: '4,368.00' },
  { key: 'Statement balance',  value: '17,493.00', signal: true },
];

/* ------------------------------------------------------- the booking grid */

export const CLUB_SLOTS: readonly string[] = [
  '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
];

/** The slot after the last one, used to close the final booking's period. */
export const CLUB_SLOT_END = '15:00';

export type ClubCellKind = 'free' | 'booked' | 'blocked' | 'won';

export interface ClubCell {
  kind: ClubCellKind;
  /** The member holding the slot, for `booked` and `won`. */
  member?: string;
  /**
   * For `blocked`, why the resource is withdrawn from service. For `booked`,
   * the sub-label — falling back to the resource's own booking pattern.
   */
  note?: string;
  /** For `won`, the member sitting at waitlist position 1. */
  waiting?: string;
}

export interface ClubResource {
  /** Resource name, e.g. "Tee 1 · Championship". */
  name: string;
  /** Which facility vertical the resource belongs to. */
  vertical: string;
  /** The default booking pattern shown on a booked cell. */
  pattern: string;
  /** One cell per entry in CLUB_SLOTS. */
  cells: readonly ClubCell[];
}

export const CLUB_RESOURCES: readonly ClubResource[] = [
  {
    name: 'Tee 1 · Championship',
    vertical: 'Golf',
    pattern: '4-ball',
    cells: [
      { kind: 'booked', member: 'Nair, S.' },
      { kind: 'booked', member: 'Rao, M.' },
      { kind: 'free' },
      { kind: 'booked', member: 'Sheikh, F.' },
      { kind: 'free' },
      { kind: 'blocked', note: 'Course maintenance' },
      { kind: 'free' },
      { kind: 'booked', member: 'Menon, V.' },
    ],
  },
  {
    name: 'Tee 10 · Championship',
    vertical: 'Golf',
    pattern: '4-ball',
    cells: [
      { kind: 'free' },
      { kind: 'booked', member: "D'Souza, P." },
      { kind: 'booked', member: 'Kulkarni, A.' },
      { kind: 'free' },
      { kind: 'booked', member: 'Iyer, R.' },
      { kind: 'blocked', note: 'Course maintenance' },
      { kind: 'free' },
      { kind: 'free' },
    ],
  },
  {
    name: 'Court 1 · Clay',
    vertical: 'Racquet',
    pattern: 'Singles',
    cells: [
      { kind: 'booked', member: 'Fernandes, D.' },
      { kind: 'free' },
      { kind: 'free' },
      { kind: 'booked', member: 'Nair, S.' },
      { kind: 'free' },
      { kind: 'free' },
      { kind: 'booked', member: 'Rao, M.' },
      { kind: 'free' },
    ],
  },
  {
    name: 'Court 2 · Clay',
    vertical: 'Racquet',
    pattern: 'Doubles',
    cells: [
      { kind: 'free' },
      { kind: 'booked', member: 'Iyer, R.' },
      { kind: 'free' },
      { kind: 'free' },
      { kind: 'booked', member: 'Sheikh, F.' },
      { kind: 'free' },
      { kind: 'free' },
      { kind: 'booked', member: 'Kulkarni, A.' },
    ],
  },
  {
    name: 'Court 3 · Hard',
    vertical: 'Racquet',
    pattern: 'Singles',
    cells: [
      { kind: 'blocked', note: 'Resurfacing' },
      { kind: 'blocked', note: 'Resurfacing' },
      { kind: 'free' },
      { kind: 'free' },
      { kind: 'free' },
      { kind: 'booked', member: 'Menon, V.' },
      { kind: 'free' },
      { kind: 'free' },
    ],
  },
  {
    name: 'Squash 1',
    vertical: 'Racquet',
    pattern: 'Singles',
    cells: [
      { kind: 'free' },
      { kind: 'free' },
      { kind: 'booked', member: "D'Souza, P." },
      { kind: 'free' },
      { kind: 'free' },
      { kind: 'free' },
      { kind: 'booked', member: 'Fernandes, D.' },
      { kind: 'free' },
    ],
  },
];

/** Rotating contenders, so a second race does not read as a repeat of the first. */
export const CLUB_PAIRS: readonly (readonly [string, string])[] = [
  ['Iyer, R.', 'Fernandes, D.'],
  ['Nair, S.', 'Kulkarni, A.'],
  ['Sheikh, F.', 'Menon, V.'],
  ['Rao, M.', "D'Souza, P."],
];

/** 09:41:07.318 — the clock the transaction log starts from. */
export const CLUB_CLOCK_START = 9 * 3600000 + 41 * 60000 + 7318;
/** How far the clock advances after a contended booking. */
export const CLUB_RACE_STEP_MS = 41219;
/** How far the clock advances after a cancellation and promotion. */
export const CLUB_CANCEL_STEP_MS = 27804;

export type ClubLogOutcome = 'ok' | 'n' | 'no';

export interface ClubLogLine {
  /** Timestamp, already formatted to HH:MM:SS.mmm. */
  time: string;
  /** REQ A, REQ B or SYS. */
  tag: string;
  text: string;
  /** BEGIN, COMMIT, ROLLBACK or SENT. */
  outcome: string;
  outcomeKind: ClubLogOutcome;
  /** The database's own error, printed as it arrives. */
  error?: string;
}

/* ------------------------------------------------------------- the posting */

export interface ClubJournalRow {
  side: 'dr' | 'cr';
  account: string;
  debit?: string;
  credit?: string;
}

export interface ClubPosting {
  /** The chip label. */
  chip: string;
  /** The status word in the panel header. */
  tag: string;
  debitTotal: string;
  creditTotal: string;
  rows: readonly ClubJournalRow[];
  accepted: boolean;
  /** The ledger's refusal, verbatim. */
  error?: string;
  note: string;
}

export const CLUB_POSTINGS: readonly ClubPosting[] = [
  {
    chip: 'The balanced posting',
    tag: 'Accepted',
    debitTotal: '378.00',
    creditTotal: '378.00',
    rows: [
      { side: 'dr', account: '1200 · Member A/R — household 1042', debit: '378.00' },
      { side: 'cr', account: '4200 · Pro shop revenue', credit: '360.00' },
      { side: 'cr', account: '2210 · VAT output, 5%', credit: '18.00' },
    ],
    accepted: true,
    note: 'Debits 378.00, credits 378.00. The chit is settled, the member owes 378.00 and the club owes 18.00 of output tax. One transaction, three accounts, nothing left to key in at close.',
  },
  {
    chip: 'The same chit, missing its tax line',
    tag: 'Refused',
    debitTotal: '378.00',
    creditTotal: '360.00',
    rows: [
      { side: 'dr', account: '1200 · Member A/R — household 1042', debit: '378.00' },
      { side: 'cr', account: '4200 · Pro shop revenue', credit: '360.00' },
      { side: 'cr', account: '2210 · VAT output, 5% — line omitted', credit: '—' },
    ],
    accepted: false,
    error: 'ERROR: journal 8841 does not balance — debits 378.00, credits 360.00, difference 18.00. No rows written.',
    note: 'Nothing is written. The chit stays unsettled and appears on the drift report, which is the correct outcome: the alternative is eighteen dirhams of output tax quietly recognised as revenue, and a VAT return that disagrees with the ledger by an amount nobody can find.',
  },
];

/* ----------------------------------------------------------------- the chit */

export interface ClubChitLine {
  label: string;
  amount: string;
  /** The charge-to-account line, ruled off above. */
  total?: boolean;
}

export const CLUB_CHIT_LINES: readonly ClubChitLine[] = [
  { label: 'Tour-grade balls · 2 dozen',   amount: '260.00' },
  { label: 'Glove · cabretta leather',     amount: '100.00' },
  { label: 'Goods, net',                   amount: '360.00' },
  { label: 'VAT 5%',                       amount: '18.00' },
  { label: 'Charge to account',            amount: '378.00', total: true },
];

/* ------------------------------------------------------------ the statement */

export interface ClubStatementRow {
  charge: string;
  outlet: string;
  net: string;
  service: string;
  vat: string;
  charged: string;
}

export const CLUB_STATEMENT: readonly ClubStatementRow[] = [
  { charge: 'Dues · quarterly, full golfing household', outlet: 'Membership',           net: '12,500.00', service: '—',      vat: '625.00', charged: '13,125.00' },
  { charge: 'Green fees · two guests',                   outlet: 'Championship course', net: '1,600.00',  service: '—',      vat: '80.00',  charged: '1,680.00'  },
  { charge: 'Tab · dinner, four covers',                 outlet: 'Terrace Grill',       net: '2,000.00',  service: '200.00', vat: '110.00', charged: '2,310.00'  },
  { charge: 'Chit PS-4471 · balls, glove',               outlet: 'Pro shop',            net: '360.00',    service: '—',      vat: '18.00',  charged: '378.00'    },
];

export const CLUB_STATEMENT_TOTAL: ClubStatementRow = {
  charge: 'Statement total',
  outlet: 'Household 1042',
  net: '16,460.00',
  service: '200.00',
  vat: '833.00',
  charged: '17,493.00',
};

/* ------------------------------------------------------- six facility verticals */

export interface ClubVertical {
  name: string;
  /** What the bookable resource actually is. */
  resource: string;
  /** The unit of time it is booked in. */
  unit: string;
  /** How it is priced. */
  pricing: string;
  /** What is enforced beyond overlap. */
  beyondOverlap: string;
  /** One booking, as it reads on the calendar. */
  example: string;
}

export const CLUB_VERTICALS: readonly ClubVertical[] = [
  {
    name: 'Golf',
    resource: 'A tee time on a course',
    unit: 'An interval, commonly eight minutes, for a party of up to four',
    pricing: 'By day-part, member tier and guest status',
    beyondOverlap: 'Interval spacing and pace of play, so the field does not stack up behind a slow group',
    example: 'Tee 1 · 07:08 · four-ball · two members, two guests',
  },
  {
    name: 'Racquet',
    resource: 'A court for a block of time',
    unit: 'An hour, or a half-hour off-peak',
    pricing: 'Peak and off-peak, with floodlight hours priced separately',
    beyondOverlap: 'Floodlight availability and surface rest periods between bookings',
    example: 'Court 2 · clay · 19:00–20:00 · doubles · lights on',
  },
  {
    name: 'Marina',
    resource: 'A berth for a night or a season',
    unit: 'A night, aggregated into a season',
    pricing: 'By length overall, with liveaboard and power metered separately',
    beyondOverlap: 'Beam and draft against the berth, so a boat cannot be assigned a berth it does not fit',
    example: 'Berth B-14 · 14 m LOA · 9 Aug to 6 Sep · shore power',
  },
  {
    name: 'Fitness',
    resource: 'A place in a class, or a trainer',
    unit: 'A class instance with a capacity, not a single resource',
    pricing: 'Included in tier, or drawn from a class pack',
    beyondOverlap: 'Instructor availability and studio capacity, counted per head rather than per room',
    example: 'Reformer pilates · 06:30 · 11 of 12 places · one on the waitlist',
  },
  {
    name: 'Dining',
    resource: 'A table for a sitting',
    unit: 'A sitting, with covers as the real unit',
    pricing: 'By cover, with a minimum spend on the terrace at weekends',
    beyondOverlap: 'Covers per sitting and kitchen pacing, so a full book is a service the kitchen can actually deliver',
    example: 'Terrace Grill · 20:00 · four covers · high chair · tab open',
  },
  {
    name: 'Events',
    resource: 'A function room for a day-part',
    unit: 'A day-part, plus setup and teardown either side',
    pricing: 'Room hire against a minimum spend, with catering charged per head',
    beyondOverlap: 'Setup and teardown buffers, which are held as firmly as the event itself',
    example: 'Cedar Room · 18:00–23:00 · 90 guests · 15:00 setup held',
  },
];

export interface ClubConstant {
  term: string;
  detail: string;
}

/** What does not change across the six. Shared, not replicated per vertical. */
export const CLUB_CONSTANTS: readonly ClubConstant[] = [
  { term: 'The member',     detail: 'One record, one household, one history. A marina berth and a pilates class are two lines on the same account.' },
  { term: 'The calendar',   detail: 'One unified view across every facility, so a member with a tee time at 07:00 and a table at 12:00 has one day, not two diaries.' },
  { term: 'The constraint', detail: 'The same no-overlap exclusion on every resource, whether it is a fairway, a berth or a function room.' },
  { term: 'The ledger',     detail: 'Every booking, fee and cancellation charge posts to the same double-entry ledger under the same tax treatment as the outlet it came from.' },
  { term: 'The channel',    detail: 'WhatsApp and the member portal read the same availability the front desk does, for all six.' },
  { term: 'The licence',    detail: 'Each module is licensed independently. A racquet-only club pays for racquet and still gets the member record, the calendar and the ledger.' },
];

/* -------------------------------------------------------- the WhatsApp thread */

export interface ClubMessage {
  direction: 'in' | 'out';
  who: string;
  text: string;
}

export const CLUB_WHATSAPP: readonly ClubMessage[] = [
  { direction: 'in',  who: 'Member · 07:41',            text: 'Court for two tomorrow morning?' },
  { direction: 'out', who: 'Palm Creek Club · 07:41',   text: 'Two courts free on Saturday: Court 1 at 07:00 and Court 3 at 09:00. Reply 1 or 3.' },
  { direction: 'in',  who: 'Member · 07:42',            text: '1' },
  { direction: 'out', who: 'Palm Creek Club · 07:42',   text: 'Court 1, 07:00 to 08:00, Saturday 9 August. Confirmed. AED 120 charged to household 1042. Reply CANCEL up to 12 hours before, free of charge.' },
  { direction: 'in',  who: 'Member · 07:43',            text: 'Bringing a guest' },
  { direction: 'out', who: 'Palm Creek Club · 07:43',   text: "Guest fee AED 60 added, same account. Send the guest's name and they will be on the gate list." },
];

/* --------------------------------------------------------------- prose lists */

export const CLUB_MECHANISMS: readonly { heading: string; body: string }[] = [
  {
    heading: 'Members & households',
    body: "A directory of members, priced tiers carrying dues and initiation fees, and household billing that puts a spouse's court fee and a child's swimming lesson on one statement. The lifecycle runs the whole way from active to honorary, and archiving is deliberately archive-safe: a member is withdrawn from the directory without detaching the entries their account already carries.",
  },
  {
    heading: 'Double-entry ledger',
    body: 'A general ledger that rejects unbalanced entries, with A/R reconciled back to the GL, drift alerts when the two diverge, voids that are audit-safe because they reverse rather than delete, and multi-gateway payments landing against the invoice they settle.',
  },
  {
    heading: 'Charge-to-account POS',
    body: 'Multi-outlet registers for F&B and the pro shop, holding tabs and chits, charging to the member, applying service charge and tax by outlet, and settling straight into the ledger with no end-of-day export.',
  },
];

export const CLUB_CHANNEL_POINTS: readonly { heading: string; body: string }[] = [
  {
    heading: 'The agent books against the constraint',
    body: 'It offers what is genuinely free, writes the booking through the same exclusion constraint the front desk writes through, and loses the same races. When it loses one, it offers the waitlist and says so.',
  },
  {
    heading: 'Rescheduling is one message',
    body: 'Moving a booking is a cancellation and a booking in one transaction, which means the released slot is offered to the waitlist immediately rather than after somebody notices.',
  },
  {
    heading: 'Self-verification',
    body: 'Members bind their own WhatsApp number to their membership record. No password to reset, and no front-desk call to establish who is asking.',
  },
  {
    heading: 'Passwordless portal',
    body: "Branded to the club, no password to hold, and carrying the digital membership card, the household statement and the member's own booking history.",
  },
  {
    heading: 'A marketplace listing',
    body: 'Clubs that want new members can list publicly and take request-to-join, which converts to a full member record in one step rather than a form somebody retypes.',
  },
];

export const CLUB_STEPS: readonly { n: string; heading: string; body: string }[] = [
  {
    n: '01',
    heading: 'Launch your club',
    body: 'Start a 14-day trial and finish the six-step setup — branding, currency, tax, staff roles, facilities. Then import your members and go live. Currency, tax regime and which facility modules are licensed are set per club, which is what makes a group of clubs in different countries one tenant rather than one compromise.',
  },
  {
    n: '02',
    heading: 'Run every operation',
    body: 'Bookings across golf, courts, marina and dining; charge-to-account POS in every outlet; dues, statements and payments. Every transaction lands in one balanced ledger, which is why the month-end question is a reconciliation report rather than an archaeology project.',
  },
  {
    n: '03',
    heading: 'Grow the membership',
    body: 'List on the public marketplace, convert request-to-join in one step, collect verified reviews from members who actually attended, and track the KPIs for every branch live rather than in a consolidated export.',
  },
];

/* ------------------------------------------------------------ page furniture */

export const CLUB_BADGES: readonly string[] = [
  'Membership & billing',
  'Zero double-booking',
  'Two-way WhatsApp',
];

export const CLUB_METRICS: readonly { value: string; label: string }[] = [
  { value: '0',     label: 'double-bookings, enforced in the database' },
  { value: '6',     label: 'facility verticals on one engine' },
  { value: '10',    label: 'countries, 8 tax regimes, multi-currency' },
  { value: '2-way', label: 'WhatsApp booking with an AI agent' },
];

export const CLUB_FAQ: readonly { question: string; answer: string }[] = [
  {
    question: 'What actually stops a double-booking when two members tap at the same moment?',
    answer: 'An exclusion constraint on the booking table, indexed by resource and by the period the booking occupies. The second write is refused by the database with SQLSTATE 23P01 before it becomes a row. This matters because the alternative — reading availability and then writing — leaves a gap of a few milliseconds in which both reads are true, and on a Saturday morning tee sheet that gap is hit regularly. The application then catches the refusal and offers the waitlist, which is a better outcome than a booking that has to be apologised for.',
  },
  {
    question: 'How does household billing work?',
    answer: "Members are linked into a household, and one of them carries the account. A spouse's court fee, a child's swimming lesson and the primary member's bar tab arrive on one statement under one payment instruction. Each charge keeps the identity of the member who incurred it, so the statement is itemised by person as well as by outlet, and a household can be split later without rewriting history.",
  },
  {
    question: 'Do we have to license all six facility verticals?',
    answer: 'No. Each module is licensed independently and a racquet-only club licenses racquet. The member record, the household, the ledger, the POS, the unified calendar and the WhatsApp channel are not part of a facility module — they are the platform underneath all six, so a single-facility club is not paying for the other five to get them.',
  },
  {
    question: 'We run three clubs in two countries. Is that one system?',
    answer: "One tenant, with currency, tax regime, price list and feature entitlements held per club. Ten countries and eight tax regimes are supported. A member visiting a sister club arrives with their record and their entitlements; the charge posts in that club's currency to that club's books; group reporting reads across all three without a consolidation export.",
  },
  {
    question: 'What happens to the ledger when a member leaves?',
    answer: 'Nothing. Archiving is deliberately archive-safe: the member is withdrawn from the directory and from availability, but the entries their account already carries stay attached to them. A void reverses rather than deletes, so a correction is visible as a correction. This is the difference between a member record you can tidy up and one an auditor can follow.',
  },
  {
    question: 'Can a member book without installing anything?',
    answer: 'Yes. Two-way WhatsApp with an AI agent covers booking, rescheduling and self-verification, and the branded portal is passwordless. Both read the same availability and write through the same constraint as the front desk, so neither can offer a slot that is already gone.',
  },
];

export const CLUB_RELATED: readonly { href: string; title: string; subtitle: string }[] = [
  { href: '/products/spamaster', title: 'FlowZa Spa Master', subtitle: 'Treatment rooms and clients' },
  { href: '/products/pos',       title: 'FlowZa POS',        subtitle: 'Outlet tills and retail' },
  { href: '/products/finance',   title: 'FlowZa Finance',    subtitle: 'Where the ledger closes' },
];
