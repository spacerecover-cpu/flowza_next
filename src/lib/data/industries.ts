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
    startWith: 'LogisPro, then Finance',
    unitOfWork: 'The stock movement',
    constraint: 'Store and yard space',
    cycle: 'Per despatch',
    metric: 'Landed cost',
    systemIndexes: [0, 1, 3, 4, 8],
    note: 'FlowZa AI runs the business around the shop floor rather than the shop floor itself: stores, inbound and outbound movement, the delivery fleet, the ledger and statutory payroll. There is no bill of materials, no work order and no capacity scheduling in any of the nine.',
    page: '/industries/manufacturing',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    startWith: 'Finance, then PMS',
    unitOfWork: 'The invoice',
    constraint: 'People and pay',
    cycle: 'Monthly',
    metric: 'Margin at close',
    systemIndexes: [0, 8],
    note: 'The smallest configuration in the range, and deliberately so. Finance carries the billing, the books and statutory payroll; PMS carries the appraisal and increment cycle. No application in the range captures time, so utilisation and realisation are not available.',
    page: '/industries/services',
  },
  {
    slug: 'construction',
    name: 'Construction',
    startWith: 'Fleetza, then Finance',
    unitOfWork: 'The asset and the pay run',
    constraint: 'Plant availability',
    cycle: 'Monthly',
    metric: 'Cost per asset',
    systemIndexes: [0, 1, 3, 4, 8],
    note: 'Plant is tracked, scored and serviced like a fleet rather than depreciated like furniture, and payroll is compliant across India and the Gulf. There is no project ledger: commitment accounting, valuations, certified progress and retention are outside the range.',
    page: '/industries/construction',
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
    startWith: 'RentFlow, then Finance',
    unitOfWork: 'The housing application',
    constraint: 'Consistency of decision',
    cycle: 'Per application',
    metric: 'Decisions with a recorded reason',
    systemIndexes: [0, 3, 7, 8],
    note: 'Social housing applications run the same screened pipeline as any other tenancy application, with the reason for every decision recorded — which is what an appeal asks for. General casework and commitment accounting are outside the range.',
    page: '/industries/public',
  },
];
