/**
 * One housing application through FlowZa RentFlow, ending in a decision that
 * carries its reason.
 *
 * The five checks are the five the product names: credit, background, eviction
 * history, income and references. The point of the piece for a public body is
 * the last block — the reason is stored against the application, so a challenge
 * is answered from the record rather than from recollection.
 *
 * Illustrative. The reference and the figures are made up; what is real is the
 * shape of the record.
 */
export type CheckOutcome = 'Pass' | 'Refer' | 'Fail';

export interface ScreeningCheck {
  name: string;
  outcome: CheckOutcome;
  /** What the check actually returned. */
  detail: string;
}

export const SCREENING_CHECKS: ScreeningCheck[] = [
  { name: 'Credit', outcome: 'Refer', detail: 'One default, satisfied 2023. Below the threshold on its own.' },
  { name: 'Background', outcome: 'Pass', detail: 'No adverse result returned' },
  { name: 'Eviction history', outcome: 'Pass', detail: 'No prior proceedings on record' },
  { name: 'Income', outcome: 'Pass', detail: 'Verified at 3.1× the assessed rent' },
  { name: 'References', outcome: 'Pass', detail: 'Two of two returned, both positive' },
];

export const APPLICATION_RECORD = {
  reference: 'APP-2026-04187',
  received: '14 February',
  decided: '19 February',
  decidedBy: 'Housing options — allocations team',
  outcome: 'Approved with a guarantor condition',
  /** The recorded reason. This is the field an appeal actually asks for. */
  reason:
    'Four checks returned clear and the credit referral was a single default satisfied three years ago. Verified income at 3.1× the assessed rent covers the affordability test. A guarantor condition is attached to the offer rather than the application being declined on the credit referral alone.',
  policy: 'Allocations policy 4.2 — affordability and adverse credit',
};
