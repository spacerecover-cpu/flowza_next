/**
 * Flowza Spa Master — /products/spamaster
 *
 * The day board and the retention loop, plus the certification matrix the
 * roster engine is built on. The therapists in CERT_THERAPISTS are the same
 * five who appear on the day board, and their certifications agree with the
 * treatments they are actually shown delivering there.
 */

export interface SpaAppointment {
  /** Minutes offset from 09:00 */
  start: number;
  /** Duration in minutes */
  duration: number;
  treatment: string;
  therapist: string;
  ticket: number;
  client: string;
  contribution: number;
}

export interface LoopStage {
  name: string;
  description: string;
}

export const ROOM_NAMES: string[] = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Suite'];

/** Five rooms of appointments; index matches ROOM_NAMES */
export const SPA: SpaAppointment[][] = [
  [
    { start: 0,   duration: 60,  treatment: 'Swedish 60',      therapist: 'Lena',          ticket: 320,  client: 'A. Haddad',        contribution: 186 },
    { start: 90,  duration: 90,  treatment: 'Deep tissue 90',  therapist: 'Lena',          ticket: 480,  client: 'S. Nair',          contribution: 291 },
    { start: 240, duration: 60,  treatment: 'Swedish 60',      therapist: 'Mia',           ticket: 320,  client: 'J. Okafor',        contribution: 186 },
    { start: 360, duration: 120, treatment: 'Signature ritual', therapist: 'Lena',         ticket: 690,  client: 'M. Farouk',        contribution: 402 },
  ],
  [
    { start: 30,  duration: 90,  treatment: 'Hot stone 90',    therapist: 'Nadia',         ticket: 520,  client: 'R. Iyer',          contribution: 298 },
    { start: 180, duration: 60,  treatment: 'Facial · hydrate', therapist: 'Sara',         ticket: 300,  client: 'L. Chen',          contribution: 161 },
    { start: 300, duration: 60,  treatment: 'Swedish 60',      therapist: 'Nadia',         ticket: 320,  client: 'T. Blake',         contribution: 186 },
    { start: 450, duration: 90,  treatment: 'Deep tissue 90',  therapist: 'Nadia',         ticket: 480,  client: 'P. Aziz',          contribution: 291 },
  ],
  [
    { start: 0,   duration: 45,  treatment: 'Express facial',  therapist: 'Sara',          ticket: 210,  client: 'H. Kaur',          contribution: 104 },
    { start: 60,  duration: 45,  treatment: 'Express facial',  therapist: 'Sara',          ticket: 210,  client: 'D. Moreau',        contribution: 104 },
    { start: 150, duration: 60,  treatment: 'Manicure + gel',  therapist: 'Reem',          ticket: 180,  client: 'N. Saleh',         contribution: 78  },
    { start: 270, duration: 45,  treatment: 'Express facial',  therapist: 'Sara',          ticket: 210,  client: 'E. Duarte',        contribution: 104 },
    { start: 390, duration: 60,  treatment: 'Facial · brighten', therapist: 'Sara',        ticket: 340,  client: 'Y. Tanaka',        contribution: 181 },
  ],
  [
    { start: 120, duration: 120, treatment: 'Couples massage', therapist: 'Mia + Lena',   ticket: 980,  client: 'B. and C. Rahim',  contribution: 512 },
    { start: 330, duration: 90,  treatment: 'Aromatherapy 90', therapist: 'Mia',           ticket: 460,  client: 'F. Bashir',        contribution: 268 },
  ],
  [
    { start: 60,  duration: 180, treatment: 'Half-day package', therapist: 'Nadia',        ticket: 1650, client: 'G. Almeida',       contribution: 914 },
    { start: 330, duration: 150, treatment: 'Bridal prep',      therapist: 'Reem',         ticket: 1400, client: 'Z. Haddad party',  contribution: 742 },
  ],
];

export const LOOP: LoopStage[] = [
  {
    name: 'Visit',
    description: 'The treatment happens. The therapist records what was done, what was used and how the client responded, on the client record rather than on paper that stays in the room.',
  },
  {
    name: 'Notes',
    description: 'Notes attach to the person, not to the therapist who wrote them. The next practitioner opens the same history, which is what allows a different therapist to deliver a consistent experience.',
  },
  {
    name: 'Recommend',
    description: 'The next treatment and a sensible interval are proposed from the notes, the products used and what this client has actually rebooked before — not from a generic campaign calendar.',
  },
  {
    name: 'Rebook',
    description: 'The offer is made at the till while the client is still in the building, against real room and therapist availability. This is the highest-converting moment in the cycle and the one most often wasted.',
  },
  {
    name: 'Remind',
    description: 'If they did not rebook, a reminder sequence sized to the recommended interval follows. It stops the moment a booking arrives by any other route, including a walk-in.',
  },
  {
    name: 'Return',
    description: 'Arrival closes the loop. Because the history, the membership balance and the preferences are already on the record, the next visit starts where the last one ended.',
  },
];

/* ------------------------------------------------- the certification matrix */

export interface SpaTreatmentColumn {
  name: string;
  /** Sub-label under the column head, where the catalogue names variants. */
  detail?: string;
}

/**
 * The seven treatment certifications, in column order.
 * `SpaCertTherapist.certified` is indexed against this list.
 */
export const CERT_TREATMENTS: readonly SpaTreatmentColumn[] = [
  { name: 'Massage', detail: 'Swedish, deep tissue' },
  { name: 'Hot stone' },
  // ­ is a soft hyphen: the column is narrow enough that this one needs a break point.
  { name: 'Aroma­therapy' },
  { name: 'Facials' },
  { name: 'Nails' },
  { name: 'Signature ritual' },
  { name: 'Bridal prep' },
];

export interface SpaCertTherapist {
  name: string;
  /** One flag per CERT_TREATMENTS entry. A therapist is only rostered where true. */
  certified: readonly boolean[];
}

/** The five therapists on the day board above. */
export const CERT_THERAPISTS: readonly SpaCertTherapist[] = [
  { name: 'Lena',  certified: [true,  false, true,  false, false, true,  false] },
  { name: 'Mia',   certified: [true,  false, true,  false, false, false, false] },
  { name: 'Nadia', certified: [true,  true,  true,  false, false, false, false] },
  { name: 'Sara',  certified: [false, false, false, true,  false, false, false] },
  { name: 'Reem',  certified: [false, false, false, false, true,  false, true ] },
];

export interface SpaCombination {
  /** The bookable treatment. */
  treatment: string;
  /** What limits it — a count of therapists, or a named one. */
  constraint: string;
  description: string;
}

/** What falls out of the matrix once you read across it. */
export const SPA_COMBINATIONS: readonly SpaCombination[] = [
  {
    treatment: 'Deep tissue 90',
    constraint: '3 of 5 therapists',
    description: 'Bookable in any room across most of the day. This is the treatment to move when a gap needs filling.',
  },
  {
    treatment: 'Hot stone 90',
    constraint: 'Nadia only',
    description: 'Limited by a person rather than by a room. When Nadia is off, the treatment is genuinely unavailable — and the portal knows before a client tries to book it.',
  },
  {
    treatment: 'Couples massage',
    constraint: '2 certified therapists, 1 room',
    description: 'Two massage certifications occupied at once in the suite. It earns more per room hour than anything else and costs twice the labour to deliver.',
  },
  {
    treatment: 'Bridal preparation',
    constraint: 'Reem only, 150 minutes',
    description: 'One certification and a long block. Worth protecting a window for, and worth knowing that a second booking on the same afternoon cannot be accepted.',
  },
];

/* ------------------------------------------- packages, vouchers, redemption */

export interface SpaPackageBalance {
  /** Package, membership or voucher product. */
  product: string;
  /** Value sold, AED. */
  sold: string;
  /** Value of sessions actually delivered, AED. */
  redeemed: string;
  /** Balance not yet taken, AED. */
  outstanding: string;
  /** Share of that balance held by clients not seen in ninety days, AED. */
  dormant: string;
}

export const SPA_PACKAGES: readonly SpaPackageBalance[] = [
  { product: 'Massage · 10 sessions',        sold: '184,000', redeemed: '121,400', outstanding: '62,600', dormant: '8,900'  },
  { product: 'Facial membership · annual',   sold: '96,000',  redeemed: '71,000',  outstanding: '25,000', dormant: '14,200' },
  { product: 'Bridal preparation',           sold: '44,500',  redeemed: '30,100',  outstanding: '14,400', dormant: '2,600'  },
  { product: 'Gift vouchers',                sold: '61,200',  redeemed: '38,700',  outstanding: '22,500', dormant: '11,800' },
  { product: 'Couples bundle',               sold: '28,400',  redeemed: '19,900',  outstanding: '8,500',  dormant: '1,300'  },
];

/* --------------------------------------------------------- revenue analytics */

export interface SpaMeasure {
  name: string;
  /** What the measure is expressed in. */
  unit: string;
  /** The action attached to it. */
  body: string;
}

/** The four measures the system reports live. */
export const SPA_MEASURES: readonly SpaMeasure[] = [
  {
    name: 'Revenue per room',
    unit: 'Per room, per hour',
    body: 'The constrained resource, priced. It ranks services by what they earn from an hour of the thing you cannot buy more of, which is a different ranking from ticket price.',
  },
  {
    name: 'Therapist utilisation',
    unit: 'Booked against rostered',
    body: 'Hours booked against hours rostered, per practitioner. Read alongside the certification matrix it explains itself: a therapist with one certification cannot be filled from anywhere else.',
  },
  {
    name: 'Rebooking rate',
    unit: 'Left having rebooked',
    body: 'The share of guests who leave with the next appointment already made. It is a measure of the ninety seconds at the till, and it moves faster than any campaign.',
  },
  {
    name: 'Retail attach rate',
    unit: 'Treatments with product sold',
    body: 'How often a treatment ends with the product used in it going home. Product margin is higher than room margin, so this is the cheapest revenue in the building.',
  },
];
