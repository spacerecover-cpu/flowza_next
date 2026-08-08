/**
 * A services group closing three entities in FlowZa Finance.
 *
 * Everything here is a capability the product lists: its own functional
 * currency, its own tax registration, its own chart-of-accounts pack, and a
 * period lock per entity. Group reporting reads the entities rather than
 * consolidating an export from each.
 *
 * Deliberately nothing about engagements, work in progress or utilisation —
 * none of that is captured anywhere in the range.
 */
export interface GroupEntity {
  name: string;
  country: string;
  /** The currency the entity keeps its books in. */
  currency: string;
  /** The registration the tax engine files against. */
  registration: string;
  /** Where the entity has got to in the period. */
  status: 'Locked' | 'In review' | 'Open';
  /** What that status means in one line. */
  detail: string;
}

export const GROUP_ENTITIES: GroupEntity[] = [
  {
    name: 'Bengaluru operating company',
    country: 'India',
    currency: 'INR',
    registration: 'GSTIN · 29AABCU',
    status: 'Locked',
    detail: 'GST return filed, period closed, no further postings accepted',
  },
  {
    name: 'Dubai advisory branch',
    country: 'United Arab Emirates',
    currency: 'AED',
    registration: 'TRN · 100xxxxxxxxxxx3',
    status: 'Locked',
    detail: 'VAT at 5 per cent and corporate tax at 9 per cent both computed',
  },
  {
    name: 'Muscat delivery centre',
    country: 'Oman',
    currency: 'OMR',
    registration: 'VATIN · OM1xxxxxx',
    status: 'In review',
    detail: 'Two intercompany recharges awaiting sign-off before the lock',
  },
];

/** The group line beneath the three. */
export const GROUP_CONSOLIDATION = {
  presentation: 'AED',
  note:
    'Group reporting reads the three entities directly. Balances in a foreign functional currency are translated on your configured rate source at close — there is no export from each company to be reconciled into a fourth set of books.',
  locked: '2 of 3',
};
