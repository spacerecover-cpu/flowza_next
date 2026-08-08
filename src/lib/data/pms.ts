/**
 * Flowza PMS — /products/pms
 *
 * Ported from `parts/47-pms.html` and `parts/js/pms.js`.
 *
 * Two arithmetic invariants must survive any edit here:
 *
 *  1. The three manager strips sum to the raw histogram.
 *     Iyer 2×3, 5×4, 3×5 · Haddad 1×2, 4×3, 4×4, 1×5 · Farooq 1×1, 3×2, 4×3, 2×4
 *     → raw 1 / 4 / 10 / 11 / 4, n = 30.
 *  2. The nine movements net exactly to the calibrated histogram.
 *     Seven down and two up → 1 / 5 / 12 / 9 / 3, n = 30. The tenth row is a
 *     rating challenged and held, which moves nothing.
 *
 * The reference distribution (10/20/40/20/10 → 3/6/12/6/3) is a comparison,
 * not a quota. The page says so twice and the data must not imply otherwise.
 *
 * There is deliberately no testimonial data here. PMS_NO_QUOTE is the block
 * that sits where a quote would.
 */

/** A run of prose with some words emphasised, as the site's innerHTML does. */
export interface RichSegment {
  text: string;
  strong?: boolean;
}

/* ------------------------------------------------------- the hero cycle record */

export interface PmsCycleLine {
  n: string;
  stage: string;
  what: string;
  /** The identifiers filed against the same person. */
  detail: string;
}

export const PMS_CYCLE_RECORD: readonly PmsCycleLine[] = [
  { n: '01', stage: 'Rate',      what: 'Self, manager and reviewer stages closed', detail: '5 KPIs scored · consolidated stage score 4' },
  { n: '02', stage: 'Calibrate', what: 'Compared against the cohort distribution', detail: 'Session PMS-CAL-26-Q2-07 · held at 4 · challenge recorded' },
  { n: '03', stage: 'Pay',       what: 'Increment resolved against the India rule set', detail: 'Components preserved · EPF, ESI and PT recomputed · INR' },
  { n: '04', stage: 'Document',  what: 'Increment letter approved and signed', detail: 'LTR-26-0392 · verifiable on a public page' },
];

/* ----------------------------------------------------------------- the loop */

export interface PmsStage {
  /** "01 · Rate" — the ordinal is part of the label. */
  title: string;
  /** The one-line description of the stage. */
  heading: string;
  /** What enters. */
  enters: string;
  /** What leaves. */
  leaves: string;
  /** What is written down. */
  written: string;
  /** The handoff argument that closes the panel. */
  because: string;
}

export const PMS_STAGES: readonly PmsStage[] = [
  {
    title: '01 · Rate',
    heading: 'Self, manager and reviewer stages across a KRA/KPI cycle',
    enters: 'The cycle itself: the KRAs agreed for the period and the KPIs under them, plus last cycle’s record on the same person.',
    leaves: 'A score — either per KPI or one consolidated score for the stage. Both shapes arrive at calibration comparably.',
    written: 'Who scored what, at which stage, and when each stage closed. Succession readiness is assessed here too, against the same evidence.',
    because: 'Elsewhere this leaves the building as a PDF of a form. Here it is the input to the next stage.',
  },
  {
    title: '02 · Calibrate',
    heading: 'The cohort compared against a distribution, in a recorded session',
    enters: 'Every rating in the cohort at once, and the reference distribution configured for the cycle.',
    leaves: 'An agreed rating. Some ratings move, some are challenged and held — both outcomes leave the session with a reason attached.',
    written: 'The session: date, attendees, every movement, the reason for it, and dissent that did not carry. Each rating links back to the minute.',
    because: 'This is the stage most often run in a spreadsheet that nobody keeps. When it is missing, a rating cannot survive being questioned.',
  },
  {
    title: '03 · Pay',
    heading: 'The compensation engine resolves the figure for the employee’s country',
    enters: 'The agreed rating, the employee’s salary structure, the statutory rule set for their country, and the increment strategy.',
    leaves: 'A resolved figure in local currency, with the component structure preserved rather than collapsed into one new total.',
    written: 'Which rule set was applied, which strategy, and what each component became. Gulf wage-protection figures are computed here; the bank-file (WPS) export is on the roadmap.',
    because: 'Elsewhere this arrives at payroll as an instruction in an email, retyped by whoever opens it. Here it is a structured payroll instruction your payroll system reads directly.',
  },
  {
    title: '04 · Document',
    heading: 'An approved letter, signed, and checkable by a stranger',
    enters: 'The resolved pay, the person record, and an approval from whoever is entitled to give it.',
    leaves: 'A letter — offer, increment or experience — signed with your organisation’s key and published to a verification page anyone holding it can check.',
    written: 'The approval, the signature, and the letter’s status: current, superseded or revoked. Verification reads that record, not the PDF.',
    because: 'And then the loop closes: the next cycle opens on this same record, with the rating, the minute, the pay and the letters already attached.',
  },
];

/* ------------------------------------------------------------- calibration */

export interface PmsRatingStrip {
  manager: string;
  reports: string;
  /** One rating per direct report, in ascending order as the site draws them. */
  ratings: readonly number[];
  /** The mono summary under the cells. */
  summary: string;
  /** The screen-reader sentence that replaces the aria-hidden cells. */
  spoken: string;
}

/** Cells at 4 or 5 read high; cells at 2 or below read low. */
export function stripTone(rating: number): 'hi' | 'lo' | undefined {
  if (rating >= 4) return 'hi';
  if (rating <= 2) return 'lo';
  return undefined;
}

export const PMS_RATING_STRIPS: readonly PmsRatingStrip[] = [
  {
    manager: 'R. Iyer',
    reports: '10 direct reports',
    ratings: [3, 3, 4, 4, 4, 4, 4, 5, 5, 5],
    summary: '8 of 10 at 4 or 5 · none below 3',
    spoken: 'R. Iyer rated two people at 3, five at 4 and three at 5. Nobody in this cohort was rated below 3.',
  },
  {
    manager: 'L. Haddad',
    reports: '10 direct reports',
    ratings: [2, 3, 3, 3, 3, 4, 4, 4, 4, 5],
    summary: '5 of 10 at 4 or 5 · one at 2',
    spoken: 'L. Haddad rated one person at 2, four at 3, four at 4 and one at 5.',
  },
  {
    manager: 'M. Farooq',
    reports: '10 direct reports',
    ratings: [1, 2, 2, 2, 3, 3, 3, 3, 4, 4],
    summary: '4 of 10 at 2 or below · none at 5',
    spoken: 'M. Farooq rated one person at 1, three at 2, four at 3 and two at 4. Nobody in this cohort was rated 5.',
  },
];

export const PMS_CALIBRATION_NOTES: readonly { heading: string; body: string }[] = [
  {
    heading: 'Score per KPI, or as one stage score',
    body: 'A cycle can carry a score against every KPI, or one consolidated score for the stage. Both arrive at calibration in the same shape, so a cohort scored either way can still be compared.',
  },
  {
    heading: 'Three stages before anyone argues',
    body: 'Self, manager and reviewer stages close first. Calibration examines a rating that has already been through all three, so the session is about comparability rather than about whether the manager filled the form in.',
  },
];

/* ------------------------------------------------------- the distribution */

export interface PmsBar {
  /** The count in the band. */
  count: number;
  /** Bar x, in the 760-wide viewBox. */
  x: number;
  /** Bar top. Baseline is y = 250 and one rating is 14 units tall. */
  y: number;
  height: number;
  /** Where the count sits above the bar. */
  labelX: number;
  labelY: number;
}

export interface PmsDistributionView {
  /** Chip label. */
  chip: string;
  ariaLabel: string;
  bars: readonly PmsBar[];
  /** Where the reference-distribution caption sits — the taller bars push it up. */
  refLabelY: number;
  /** The strip under the chart. */
  footer: string;
  /** The read-out below the chart. */
  readout: readonly RichSegment[];
}

export const PMS_BAND_LABELS: readonly { value: string; name: string; x: number }[] = [
  { value: '1', name: 'NOT MET',     x: 160 },
  { value: '2', name: 'PARTIAL',     x: 280 },
  { value: '3', name: 'MET',         x: 400 },
  { value: '4', name: 'EXCEEDED',    x: 520 },
  { value: '5', name: 'OUTSTANDING', x: 640 },
];

/** The reference distribution: 10 / 20 / 40 / 20 / 10 of thirty, as points. */
export const PMS_REFERENCE_POINTS: readonly { x: number; y: number }[] = [
  { x: 160, y: 208 },
  { x: 280, y: 166 },
  { x: 400, y: 82 },
  { x: 520, y: 166 },
  { x: 640, y: 208 },
];

export const PMS_DISTRIBUTIONS: { raw: PmsDistributionView; calibrated: PmsDistributionView } = {
  raw: {
    chip: 'Raw ratings',
    ariaLabel:
      'Bar chart of the cohort’s raw ratings before calibration: one person not met, four partially met, ten met, eleven exceeded and four outstanding, drawn against a dashed reference distribution of three, six, twelve, six and three. The bars lean to the right of the reference — more of the cohort sits above the middle band than the distribution would suggest, which is largely what a single manager who rates nobody below 3 does to a cohort of thirty.',
    bars: [
      { count: 1,  x: 126, y: 236, height: 14,  labelX: 160, labelY: 228 },
      { count: 4,  x: 246, y: 194, height: 56,  labelX: 280, labelY: 186 },
      { count: 10, x: 366, y: 110, height: 140, labelX: 400, labelY: 102 },
      { count: 11, x: 486, y: 96,  height: 154, labelX: 520, labelY: 88  },
      { count: 4,  x: 606, y: 194, height: 56,  labelX: 640, labelY: 186 },
    ],
    refLabelY: 64,
    footer: 'RAW · AS SUBMITTED BY THREE MANAGERS',
    readout: [
      { text: 'Raw ratings, as the three managers submitted them. ' },
      { text: 'Eleven of thirty', strong: true },
      { text: ' sit at 4 and ' },
      { text: 'four', strong: true },
      { text: ' at 5, against a reference distribution that would put six and three there. The dashed line is the comparison, not a quota.' },
    ],
  },
  calibrated: {
    chip: 'After calibration',
    ariaLabel:
      'Bar chart of the same cohort after the recorded calibration session: one person not met, five partially met, twelve met, nine exceeded and three outstanding, against the same dashed reference distribution. Nine ratings moved, seven down and two up, and the result now sits close to the reference without matching it exactly — the session argued individual cases rather than filling a quota.',
    bars: [
      { count: 1,  x: 126, y: 236, height: 14,  labelX: 160, labelY: 228 },
      { count: 5,  x: 246, y: 180, height: 70,  labelX: 280, labelY: 172 },
      { count: 12, x: 366, y: 82,  height: 168, labelX: 400, labelY: 74  },
      { count: 9,  x: 486, y: 124, height: 126, labelX: 520, labelY: 116 },
      { count: 3,  x: 606, y: 208, height: 42,  labelX: 640, labelY: 200 },
    ],
    refLabelY: 52,
    footer: 'CALIBRATED · SESSION PMS-CAL-26-Q2-07',
    readout: [
      { text: 'After the recorded session. ' },
      { text: 'Nine ratings moved', strong: true },
      { text: ' — seven down, four of them from the cohort of the manager who rated most generously, and two up from the cohort of the manager who rated hardest. One rating was challenged and held at 4. The result sits near the reference distribution and deliberately not on it.' },
    ],
  },
};

/* --------------------------------------------------------- the movements */

export interface PmsMovement {
  employee: string;
  ratedBy: string;
  /** "5 → 4", or "4, held". */
  movement: string;
  /** down, up, or held. */
  direction: 'd' | 'u' | 'h';
  reason: string;
}

export const PMS_MOVEMENTS: readonly PmsMovement[] = [
  { employee: 'A. Nair',     ratedBy: 'Iyer',   movement: '5 → 4',   direction: 'd', reason: "Two of five KPIs were met rather than exceeded. The cross-team outcome claimed belonged to another team's cycle." },
  { employee: 'S. Bhatt',    ratedBy: 'Iyer',   movement: '4 → 3',   direction: 'd', reason: "On plan, not above it. Iyer's cohort had five at 4; the evidence separated three of them from the other two." },
  { employee: 'D. Okafor',   ratedBy: 'Iyer',   movement: '4 → 3',   direction: 'd', reason: 'The delivery date moved twice. The KPI was met by rescoping it, which the session recorded rather than passed over.' },
  { employee: 'P. Menon',    ratedBy: 'Haddad', movement: '4 → 3',   direction: 'd', reason: 'The consolidated stage score carried a KPI that was not in scope for this cycle.' },
  { employee: 'J. Mwangi',   ratedBy: 'Iyer',   movement: '3 → 2',   direction: 'd', reason: 'Two KPIs unmet with no mitigating record attached to either.' },
  { employee: 'K. Rao',      ratedBy: 'Haddad', movement: '3 → 2',   direction: 'd', reason: 'One KPI was restated mid-cycle without approval. Measured against the target as agreed, it was not met.' },
  { employee: 'T. Aziz',     ratedBy: 'Haddad', movement: '3 → 2',   direction: 'd', reason: 'The quality KPI was missed in both halves. The improvement plan began after the cycle closed and was noted for the next one.' },
  { employee: 'H. Suleiman', ratedBy: 'Farooq', movement: '2 → 3',   direction: 'u', reason: "Met four of five KPIs. Farooq's cohort sat a band below the other two on comparable evidence, and this rating was one of them." },
  { employee: 'N. Verma',    ratedBy: 'Farooq', movement: '2 → 3',   direction: 'u', reason: 'Exceeded the volume KPI and met the rest. Rated against a standard the other two reviewers did not apply.' },
  { employee: 'F. Darwish',  ratedBy: 'Farooq', movement: '4, held', direction: 'h', reason: 'Iyer argued for 5. The session held the rating at 4 and minuted the disagreement rather than settling it quietly.' },
];

export const PMS_MINUTE: readonly { term: string; value: string; mono?: boolean }[] = [
  { term: 'Session',   value: 'PMS-CAL-26-Q2-07', mono: true },
  { term: 'Cohort',    value: '30 employees · one job family · one grade band' },
  { term: 'Present',   value: 'R. Iyer, L. Haddad, M. Farooq (managers) · S. Krishnan (reviewer stage) · one HR partner' },
  { term: 'Reference', value: '10 / 20 / 40 / 20 / 10 across five bands, configured for this cycle' },
  { term: 'Moved',     value: '9 ratings — 7 down, 2 up' },
  { term: 'Held',      value: '1 rating challenged and held, with the disagreement minuted' },
  { term: 'Dissent',   value: 'R. Iyer dissented on two movements. Recorded against those two ratings, not averaged away.' },
  { term: 'Outcome',   value: 'Each moved rating links to this minute. The minute is appended, not editable — a later change supersedes it and is minuted in turn.' },
];

/* ------------------------------------------------- the compensation engine */

export type PmsMatrixCell =
  /** A single emphasised value, e.g. the currency of computation. */
  | { kind: 'strong'; text: string }
  /** The "same mechanism" / "Configuration" cells, optionally with a detail line. */
  | { kind: 'same'; text: string; detail?: string }
  /** An em-dash: PMS does not ship it and we do not claim it. */
  | { kind: 'none'; footnote?: string }
  /** Computed today, with the export flagged as roadmap. */
  | { kind: 'roadmap'; text: string; badge: string }
  /** Mixed prose with some terms emphasised. */
  | { kind: 'rich'; parts: readonly RichSegment[] };

export interface PmsMatrixRow {
  step: string;
  /** "Step 1" — or, on the last row, "Not a step — a claim". */
  ordinal: string;
  /** India, UAE, Saudi Arabia, Oman, in that order. */
  cells: readonly PmsMatrixCell[];
}

export const PMS_MARKETS: readonly string[] = ['India', 'UAE', 'Saudi Arabia', 'Oman'];

const SAME_STRUCTURE: PmsMatrixCell = {
  kind: 'same',
  text: 'Same mechanism',
  detail: 'Country component set, held as data',
};

const EOS: PmsMatrixCell = {
  kind: 'rich',
  parts: [{ text: 'End-of-service', strong: true }, { text: ', per legal entity' }],
};

const GULF_CONDUCT: PmsMatrixCell = {
  kind: 'rich',
  parts: [{ text: 'Labour-law conduct duties — the same four workflows' }],
};

const WPS_COMPUTED: PmsMatrixCell = {
  kind: 'roadmap',
  text: 'Figures computed',
  badge: 'WPS export on roadmap',
};

const CONFIGURATION: PmsMatrixCell = { kind: 'same', text: 'Configuration' };

export const PMS_MATRIX: readonly PmsMatrixRow[] = [
  {
    step: 'Currency of computation',
    ordinal: 'Step 1',
    cells: [
      { kind: 'strong', text: 'INR' },
      { kind: 'strong', text: 'AED' },
      { kind: 'strong', text: 'SAR' },
      { kind: 'strong', text: 'OMR' },
    ],
  },
  {
    step: 'Salary structure',
    ordinal: 'Step 2',
    cells: [SAME_STRUCTURE, SAME_STRUCTURE, SAME_STRUCTURE, SAME_STRUCTURE],
  },
  {
    step: 'Statutory rules in the engine',
    ordinal: 'Step 3',
    cells: [
      {
        kind: 'rich',
        parts: [
          { text: 'EPF', strong: true },
          { text: ', ' },
          { text: 'ESI', strong: true },
          { text: ', ' },
          { text: 'Professional Tax', strong: true },
          { text: ' and ' },
          { text: 'gratuity', strong: true },
        ],
      },
      EOS,
      EOS,
      EOS,
    ],
  },
  {
    step: 'Workforce nationalisation data',
    ordinal: 'Step 4',
    cells: [
      { kind: 'none' },
      { kind: 'none', footnote: '1' },
      { kind: 'rich', parts: [{ text: 'Saudization', strong: true }, { text: ' workforce data' }] },
      { kind: 'rich', parts: [{ text: 'Omanization', strong: true }, { text: ' workforce data' }] },
    ],
  },
  {
    step: 'Wage protection',
    ordinal: 'Step 5',
    cells: [{ kind: 'none', footnote: '2' }, WPS_COMPUTED, WPS_COMPUTED, WPS_COMPUTED],
  },
  {
    step: 'Conduct obligation resolved',
    ordinal: 'Step 6',
    cells: [
      {
        kind: 'rich',
        parts: [
          { text: 'POSH', strong: true },
          { text: ' — policy, training, committee and complaint workflows' },
        ],
      },
      GULF_CONDUCT,
      GULF_CONDUCT,
      GULF_CONDUCT,
    ],
  },
  {
    step: 'How the market was added',
    ordinal: 'Not a step — a claim',
    cells: [CONFIGURATION, CONFIGURATION, CONFIGURATION, CONFIGURATION],
  },
];

/* --------------------------------- an increment that keeps the components */

export interface PmsPayLine {
  component: string;
  amount: string;
  /** The monthly total, ruled off above. */
  total?: boolean;
  /** The collapsed structure, where the components have nothing left to read. */
  lost?: boolean;
}

export interface PmsPayColumn {
  /** "Before · " — the lead-in before the emphasised part of the heading. */
  headingLead: string;
  headingStrong: string;
  lines: readonly PmsPayLine[];
  /** The collapsed column reads on a raised ground. */
  bad?: boolean;
}

export const PMS_INCREMENT: readonly PmsPayColumn[] = [
  {
    headingLead: 'Before · ',
    headingStrong: 'the structure on file',
    lines: [
      { component: 'Basic',                 amount: '45,000' },
      { component: 'House rent allowance',  amount: '18,000' },
      { component: 'Conveyance',            amount: '3,200' },
      { component: 'Special allowance',     amount: '12,800' },
      { component: 'Monthly, INR',          amount: '79,000', total: true },
    ],
  },
  {
    headingLead: 'After 8% · ',
    headingStrong: 'components preserved',
    lines: [
      { component: 'Basic',                 amount: '48,600' },
      { component: 'House rent allowance',  amount: '19,440' },
      { component: 'Conveyance',            amount: '3,456' },
      { component: 'Special allowance',     amount: '13,824' },
      { component: 'Monthly, INR',          amount: '85,320', total: true },
    ],
  },
  {
    headingLead: 'The other way · ',
    headingStrong: 'structure reset',
    bad: true,
    lines: [
      { component: 'Consolidated pay',      amount: '85,320', lost: true },
      { component: 'Basic',                 amount: '—',      lost: true },
      { component: 'House rent allowance',  amount: '—',      lost: true },
      { component: 'Conveyance',            amount: '—',      lost: true },
      { component: 'Monthly, INR',          amount: '85,320', total: true },
    ],
  },
];

export const PMS_ENGINE_NOTES: readonly { heading: string; body: string }[] = [
  {
    heading: 'Rules are data, not branches in code',
    body: 'Salary structures, statutory rules and increment strategies are configuration. A fifth market is a rule set someone enters and tests, which is why the claim is configuration rather than a release.',
  },
  {
    heading: 'Currency is not a display setting',
    body: 'Each of the four markets is computed in its own currency against its own rules. A figure is not converted for presentation after being worked out somewhere else.',
  },
  {
    heading: 'End-of-service is per legal entity',
    body: 'In the Gulf the obligation attaches to the entity that employs the person, so it is resolved per legal entity rather than per group.',
  },
  {
    heading: 'It resolves pay; it does not pay',
    body: 'PMS decides what the figure should be and issues it as a structured payroll instruction. Your payroll system runs the payroll, produces the statutory files and posts to the ledger — Flowza Finance if you hold it, or whatever you already use.',
  },
  {
    heading: 'Wage protection, stated plainly',
    body: 'The Gulf wage-protection figures are computed in PMS today. The bank file that a wage-protection system ingests — the WPS export — is on the roadmap. If that file is what you need this quarter, it is produced in Flowza Finance, a separate application on a separate subscription, and we would rather say so here than let you find out in an implementation.',
  },
];

/* ------------------------------------------------------ the verifiable letter */

export interface PmsLetterVariant {
  /** Chip label. */
  chip: string;
  /** The employee's role on leaving. */
  role: string;
  /** The last day of employment. */
  date: string;
  /** True where the two lines have been edited and should read as amended. */
  edited: boolean;
}

export const PMS_LETTER_VARIANTS: readonly [PmsLetterVariant, PmsLetterVariant] = [
  { chip: 'The letter as issued',              role: 'Production Planner, Grade M3', date: '30 June 2026',     edited: false },
  { chip: 'The same letter, two lines edited', role: 'Production Planner, Grade M5', date: '31 December 2026', edited: true  },
];

export interface PmsVerifyRow {
  /** Whether this line of the check passed. */
  pass: boolean;
  label: string;
  value: string;
}

export interface PmsVerifyState {
  /** ok or no — which badge treatment the verdict carries. */
  kind: 'ok' | 'no';
  badge: string;
  heading: string;
  rows: readonly PmsVerifyRow[];
  foot: string;
}

export const PMS_VERIFY: { ok: PmsVerifyState; bad: PmsVerifyState } = {
  ok: {
    kind: 'ok',
    badge: 'Verified · issued by this organisation',
    heading: 'Northwind Metal Works FZ-LLC issued this document.',
    rows: [
      { pass: true, label: 'Issuer',    value: 'Northwind Metal Works FZ-LLC · key 4C9E 21A7' },
      { pass: true, label: 'Issued',    value: '14 July 2026 · letter LTR-26-0418' },
      { pass: true, label: 'Type',      value: 'Experience letter, approved before issue' },
      { pass: true, label: 'Integrity', value: 'Content matches the signed record' },
      { pass: true, label: 'Status',    value: 'Not revoked, not superseded' },
    ],
    foot: 'The checker reaches this page and nothing else. No account, no login, no call to your HR team — and no access to any other fact about the employee.',
  },
  bad: {
    kind: 'no',
    badge: 'Check failed · content does not match',
    heading: 'This document has been altered since it was issued.',
    rows: [
      { pass: true,  label: 'Issuer',    value: 'Northwind Metal Works FZ-LLC · key 4C9E 21A7' },
      { pass: true,  label: 'Issued',    value: '14 July 2026 · letter LTR-26-0418' },
      { pass: true,  label: 'Type',      value: 'Experience letter, approved before issue' },
      { pass: false, label: 'Integrity', value: 'Content does not match the signed record · 2 lines differ' },
      { pass: true,  label: 'Status',    value: 'Not revoked, not superseded' },
    ],
    foot: 'The letter still looks correct, and the issuer is still recognised — that is the point. What fails is the comparison between the document in the checker’s hand and the record this organisation signed. A single changed character is enough.',
  },
};

export const PMS_PROVES: readonly string[] = [
  'That this document was issued by this organisation, out of its own system, signed with its own key.',
  'That it has not been altered since it was issued. One changed character fails the check.',
  'That it has not been revoked, or superseded by a later letter for the same person.',
  'Who approved it, and when they approved it.',
];

export const PMS_DOES_NOT_PROVE: readonly string[] = [
  'That the contents are true. The facts in the letter are the organisation’s own assertion, as they always were — verification is about origin and integrity, not about truth.',
  'That the person handing you the letter is the person named in it. Identity remains the checker’s job.',
  'Anything else about the employee. The page answers one question about one document and volunteers nothing further.',
];

export const PMS_CHECKERS: readonly { heading: string; body: string }[] = [
  { heading: 'A future employer',              body: 'Background screening that currently ends in an email to an HR inbox and a wait of several days.' },
  { heading: 'A bank or a landlord',           body: 'A salary or employment letter used in a credit or tenancy decision, where a forged copy is a known risk and everybody knows it.' },
  { heading: 'A visa or immigration officer',  body: 'Documents assessed by someone with no relationship to your organisation and no way to telephone it during the appointment.' },
  { heading: 'The employee',                   body: 'Someone who wants to know that the letter they were given will stand up before they submit it somewhere that matters.' },
];

/* -------------------------------------------------------- Respect at Work */

export interface PmsJurisdiction {
  /** "India" or "UAE · Saudi Arabia · Oman". */
  where: string;
  /** The regime's name. */
  regime: string;
  paragraphs: readonly string[];
}

export const PMS_JURISDICTIONS: readonly PmsJurisdiction[] = [
  {
    where: 'India',
    regime: 'POSH',
    paragraphs: [
      "India's statutory regime for the prevention, prohibition and redressal of sexual harassment at work. Where it applies to your headcount, an internal committee is not a matter of policy preference: it must exist, it must be constituted correctly, and its handling of a complaint must be recorded. PMS carries the policy, the training record, the committee composition and the complaint workflow as part of the same person record the review cycle runs on.",
      'The reason it belongs in this product rather than in a separate compliance tool is that the evidence lives in the same place as everything else about that employee — and a conduct matter under enquiry is precisely the sort of thing a rating and an increment should not be resolved in ignorance of.',
    ],
  },
  {
    where: 'UAE · Saudi Arabia · Oman',
    regime: 'Labour-law conduct duties',
    paragraphs: [
      "The Gulf markets impose conduct duties through labour law rather than through a single named statute. The obligations are not identical to India's and PMS does not pretend they are: what is identical is the shape of the response — a policy that has been published, training that has been delivered and recorded, a body that hears a complaint, and a procedure whose steps are dated.",
      'That is why the module is described as self-configuring. The four workflows are the same four workflows; which of them the statute requires, of whom, and to what standard is resolved from the jurisdiction rather than from a configuration document your HR team maintains by hand.',
    ],
  },
];

export const PMS_CONDUCT_WORKFLOWS: readonly { heading: string; body: string }[] = [
  { heading: 'Policy',            body: 'The published document, with a version and a date, and a record of who it was issued to. An unpublished policy is not a policy, and a policy nobody was shown is very hard to rely on afterwards.' },
  { heading: 'Training',          body: 'Completion tracked per person, so the answer to who has been trained is a list rather than an assumption. It sits on the person record, which means it survives a change of manager.' },
  { heading: 'Committee',         body: 'Membership recorded and maintained, including the changes to it. A committee whose composition lapsed is a committee that cannot properly hear a complaint, and that is the sort of failure nobody notices until it is examined.' },
  { heading: 'Complaint handling', body: 'A restricted record, visible only to those entitled to see it, with each step and its date written down and the outcome recorded. The workflow exists so that an enquiry can be shown to have been conducted, not merely asserted to have been.' },
];

/* ----------------------------------------------------------- how it works */

export interface PmsStep {
  n: string;
  heading: string;
  /** "Leaves with: a score". */
  leavesWith: string;
  body: string;
}

/**
 * The same four stages as PMS_STAGES, held as a static spine so the loop's
 * content survives with JavaScript switched off.
 */
export const PMS_STEPS: readonly PmsStep[] = [
  {
    n: '01',
    heading: 'Rate',
    leavesWith: 'Leaves with: a score',
    body: 'Self, manager and reviewer stages across KRA and KPI cycles. Score against every KPI, or record one consolidated score for the stage. Succession planning runs on the same cycle rather than as a separate annual exercise, because the evidence a succession conversation needs is the evidence the cycle has just collected.',
  },
  {
    n: '02',
    heading: 'Calibrate',
    leavesWith: 'Leaves with: an agreed rating',
    body: 'Ratings are compared against a distribution with a bell curve, in calibration sessions that are recorded. A rating that moves carries the reason it moved; a rating that is challenged and held carries that too. This is the step that turns an opinion into a defensible decision, and it is the step organisations most often run in a spreadsheet nobody keeps.',
  },
  {
    n: '03',
    heading: 'Pay',
    leavesWith: 'Leaves with: a resolved figure',
    body: 'The compensation engine resolves the salary structure and the statutory deductions for the country the employee is employed in, in that country’s currency, and applies the increment strategy without flattening the component structure. Gulf wage-protection figures are computed today; the bank-file (WPS) export is on the roadmap and is not in the product. The resolved figure goes to Flowza Finance to be paid.',
  },
  {
    n: '04',
    heading: 'Document',
    leavesWith: 'Leaves with: a checkable letter',
    body: 'An approved letter, signed with your organisation’s key, that anyone holding it can verify as authentic from a public page. Then the loop closes: the next cycle opens against the same person record, with the last cycle’s rating, calibration minute, resolved pay and issued letters already attached to it.',
  },
];

export const PMS_REGION_NOTES: readonly { heading: string; body: string }[] = [
  { heading: 'Per-tenant isolation at the database', body: 'Isolation is enforced in the database rather than by application code that has to remember to filter. Performance ratings and pay decisions are among the most sensitive records an organisation holds, and this is the level at which that should be handled.' },
  { heading: 'Region-configurable hosting',          body: 'Where the data sits is a configuration choice, which matters when the answer has to satisfy a regulator or a group policy rather than a preference.' },
  { heading: 'Full export at any time',              body: 'Cycles, ratings, calibration minutes, resolved pay and issued letters export on request. No lock-in, and nothing to build first.' },
];

export const PMS_CYCLE_CARRIES: readonly { heading: string; body: string }[] = [
  { heading: 'KRAs and KPIs, per cycle',              body: 'Key result areas and the indicators under them are defined per cycle, so a change of objectives mid-year is a new cycle rather than an edit to the record of the old one.' },
  { heading: 'Succession planning on the same cycle', body: 'Successor readiness is assessed against the same evidence as the rating, in the same cycle, by the same reviewers. It is not a separate form filled in from memory in a different quarter.' },
  { heading: 'A payroll instruction, not an email',   body: 'The resolved increment leaves PMS as a structured instruction carrying the employee reference your payroll system already uses, so it can be read straight in rather than typed into a payroll screen from a PDF.' },
];

/* ------------------------------------------- where PMS sits in the nine */

export interface PmsOwnershipColumn {
  heading: string;
  items: readonly string[];
}

export const PMS_OWNERSHIP: readonly PmsOwnershipColumn[] = [
  {
    heading: 'PMS owns',
    items: [
      'The KRA and KPI cycle, and the self, manager and reviewer stages within it.',
      'The calibration session, its reference distribution and its minute.',
      "The compensation decision: structure, statutory rules and increment strategy resolved for the employee's country.",
      'The letter, its approval and its signature.',
    ],
  },
  {
    heading: 'How the handover works',
    items: [
      'PMS issues a structured payroll instruction: the resolved figure with its component structure intact, not a single new total.',
      'Your payroll system reads it — over the PMS API, or as a scheduled file if that suits your process better.',
      'They are two separate applications with two separate databases. The handover is one you configure deliberately, not something that happens underneath you.',
    ],
  },
  {
    heading: 'A payroll system owns',
    items: [
      'The payroll run that pays the figure PMS resolved.',
      'The statutory files — including the WPS bank files for the Gulf, which is where that export lives today.',
      'The postings to the double-entry ledger, so the increment appears in the books as it is paid.',
    ],
  },
];

/**
 * What sits where a customer quote would. Not a quote, not a placeholder for
 * one — the absence, stated. Ported verbatim.
 */
export const PMS_NO_QUOTE = {
  heading: 'Where a customer quote would sit',
  lead: 'There is no testimonial on this page. PMS is live and in use, and we will publish a quote when a real, named customer gives us one we can attribute.',
  body: 'On a page whose argument is that a decision should be verifiable, an invented endorsement would be an odd place to start. This sentence tells you more than a plausible one from nobody in particular would.',
} as const;

/* ------------------------------------------------------------ page furniture */

export const PMS_BADGES: readonly string[] = [
  'KRA/KPI + bell curve',
  'Compensation engine',
  'Verifiable letters',
];

export const PMS_VERBS: readonly string[] = ['One loop', 'Four stages', 'One record'];

export const PMS_METRICS: readonly { value: string; label: string }[] = [
  { value: '4',      label: 'markets computed in local currency' },
  { value: '4',      label: 'loop stages: rate, calibrate, pay, document' },
  { value: 'Public', label: 'third-party letter verification' },
  { value: 'Config', label: 'new countries by configuration, not code' },
];

export const PMS_FAQ: readonly { question: string; answer: string }[] = [
  {
    question: 'Does PMS run our payroll?',
    answer: 'No, and that is deliberate — deciding pay and paying it are different jobs with different evidence behind them. PMS resolves what someone should be paid from a rating that has been calibrated, against the statutory rules of their country, preserving the component structure of their salary. It then issues that as a structured payroll instruction your payroll system reads. That can be Flowza Finance, which is a separate application on a separate subscription, or the payroll system you already run.',
  },
  {
    question: 'Is bell-curve calibration a forced ranking?',
    answer: 'No. The distribution is a reference the cohort is compared against, not a quota the cohort has to fill. In the session shown above, nine of thirty ratings moved and the calibrated result deliberately does not match the reference curve. What the mechanism requires is not conformity but explanation: a rating that sits away from the distribution has a recorded reason next to it, and so does a rating that was challenged and left where it was.',
  },
  {
    question: 'What does the public verification page actually prove?',
    answer: 'That the document was issued by your organisation, that it has not been altered since it was issued, that it has not been revoked or superseded, and who approved it. It does not prove that the contents are true — the facts in a letter are your organisation’s assertion, as they always were — and it does not prove that the person holding the letter is the person named in it. Those limits are worth stating, because a verification that claimed more would be worth less.',
  },
  {
    question: 'Can PMS produce our WPS bank file?',
    answer: 'Not today. PMS computes the Gulf wage-protection figures; the bank-file export is on the roadmap. If that file is what you need this quarter, it is produced in Flowza Finance, which is where the payroll actually runs. We would rather answer this here than in your second week of implementation.',
  },
  {
    question: 'How do we add a fifth country?',
    answer: 'As configuration. Salary structures, statutory rules and increment strategies are data, so a new market is a rule set that is entered, tested and run in parallel for a period — not a change to the product and not a release you wait for. The four markets published today are India, the UAE, Saudi Arabia and Oman, each computed in its own currency.',
  },
  {
    question: 'Who can see a rating, and what is recorded when one changes?',
    answer: 'Access follows the role: the employee, the manager, the reviewer and the calibration participants see different things, and a conduct complaint record is restricted further. When a rating changes, what is recorded is the movement, the session it was agreed in, the people present, the reason, and any dissent — including dissent that did not carry. The minute is appended rather than edited; a later decision supersedes it and is minuted in turn.',
  },
  {
    question: 'Is Respect at Work a separate module we configure per country?',
    answer: 'It is one module that resolves your obligations from the jurisdiction of the legal entity the person is employed by — POSH in India, labour-law conduct duties in the GCC. The four workflows are the same everywhere: policy, training, committee and complaint handling. What differs is which of them the statute requires of you and to what standard, and that is resolved rather than maintained by hand.',
  },
];

export const PMS_RELATED: readonly { href: string; title: string; subtitle: string }[] = [
  { href: '/products/finance', title: 'Flowza Finance', subtitle: 'Where the resolved figure is paid' },
  { href: '/enterprise',       title: 'Enterprise',     subtitle: 'Isolation, residency and access control' },
  { href: '/platform',         title: 'Platform',       subtitle: 'The shared person record' },
];
