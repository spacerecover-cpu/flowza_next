export interface Industry {
  slug: string;
  name: string;
  /** Which of the nine to deploy first, and what most customers add next. */
  startWith: string;
  unitOfWork: string;
  constraint: string;
  cycle: string;
  metric: string;
  /** Indices into SYSTEM_NAMES — the systems in a typical estate for this sector. */
  systemIndexes: number[];
  note: string;
  page?: string;
}

/**
 * The nine, in catalogue order. The configurator lights these up per sector;
 * the indices in `systemIndexes` are positions in this array.
 */
export const SYSTEM_NAMES: string[] = [
  'Finance',
  'LogisPro',
  'Spa Master',
  'Fleetza',
  'QRForge',
  'POS',
  'Club',
  'RentFlow',
  'PMS',
];

export const INDUSTRIES: Industry[] = [
  {
    slug: 'retail-hospitality',
    name: 'Retail & Hospitality',
    startWith: 'POS, then Finance',
    unitOfWork: 'The transaction',
    constraint: 'Shelf space and footfall',
    cycle: 'Same day',
    metric: 'Sales per m²',
    systemIndexes: [0, 1, 2, 4, 5],
    note: 'Replenishment is optimised against cover per site rather than total group stock, because a surplus in one location does not help the store that is out. POS writes the movement; LogisPro moves the goods; Finance never has to be told either happened.',
    page: '/industries/retail',
  },
  {
    slug: 'logistics-freight',
    name: 'Logistics & Freight',
    startWith: 'LogisPro, then Fleetza',
    unitOfWork: 'The load',
    constraint: 'Vehicle and driver hours',
    cycle: 'Per movement',
    metric: 'Margin per load',
    systemIndexes: [0, 1, 3, 4],
    note: 'The planner and the telematics see the same driver and the same vehicle, so a truck held for service in Fleetza is not offered a route in LogisPro. Cost accrues to the movement as it is incurred rather than at settlement.',
    page: '/industries/logistics',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    startWith: 'Finance, then LogisPro',
    unitOfWork: 'The work order',
    constraint: 'Machine capacity',
    cycle: 'Per production run',
    metric: 'Cost per unit',
    systemIndexes: [0, 1, 3, 4, 8],
    note: 'Perpetual inventory with automatic cost of goods gives you a real work-in-progress balance rather than a monthly estimate. Finished goods carry a QRForge code from the line to the customer.',
    page: '/industries/manufacturing',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    startWith: 'Finance, then PMS',
    unitOfWork: 'The engagement',
    constraint: 'Billable capacity',
    cycle: 'Monthly',
    metric: 'Utilisation',
    systemIndexes: [0, 8],
    note: 'The smallest configuration in the range, and deliberately so. A services firm sells time and bills it — the person record and the ledger are almost the whole system. PMS decides what that person is paid; Finance pays them.',
    page: '/industries/services',
  },
  {
    slug: 'construction',
    name: 'Construction',
    startWith: 'Finance, then Fleetza',
    unitOfWork: 'The job',
    constraint: 'Plant and crew',
    cycle: 'Per milestone',
    metric: 'Cost to complete',
    systemIndexes: [0, 1, 3, 4, 8],
    note: 'Plant is the asset that decides the programme, so it is tracked, scored and serviced like a fleet rather than depreciated like furniture. Retention and certified progress are ledger conditions, not adjustments someone remembers at valuation.',
    page: '/industries/construction',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    startWith: 'Finance, then Spa Master',
    unitOfWork: 'The episode of care',
    constraint: 'Clinician time and rooms',
    cycle: 'Per encounter',
    metric: 'Cost per episode',
    systemIndexes: [0, 2, 4, 8],
    note: 'The room-and-practitioner scheduling problem is the same shape in a clinic as in a treatment suite, including the certification constraint on who may perform what. Consumables decrement real stock and attach to the episode, which is what makes cost per episode measured rather than allocated.',
    page: '/industries/healthcare',
  },
  {
    slug: 'wellness-beauty',
    name: 'Wellness & Beauty',
    startWith: 'Spa Master, then POS',
    unitOfWork: 'The appointment',
    constraint: 'Treatment room and therapist',
    cycle: 'Daily',
    metric: 'Room utilisation',
    systemIndexes: [0, 2, 4, 5, 6],
    note: 'The room is modelled as the constrained resource, so booking rules protect the highest-contribution treatments during peak windows. Where memberships rather than visits are the relationship, Club takes over the billing.',
    page: '/industries/wellness',
  },
  {
    slug: 'public-sector',
    name: 'Public Sector',
    startWith: 'Finance, then PMS',
    unitOfWork: 'The case',
    constraint: 'Budget appropriation',
    cycle: 'Fiscal year',
    metric: 'Cost per case',
    systemIndexes: [0, 3, 7, 8],
    note: 'Commitment accounting is enforced at the requisition, so an appropriation cannot be overspent by a purchase order nobody has posted yet. Social housing applications run the same pipeline as any other tenancy application.',
    page: '/industries/public',
  },
];
