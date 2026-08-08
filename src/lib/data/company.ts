export interface WorkingAgreement {
  heading: string;
  body: string;
}

export const WORKING_AGREEMENTS: WorkingAgreement[] = [
  {
    heading: 'One product, no forks',
    body: 'We do not build a bespoke version for a large customer. If something is worth building it goes into the platform for everyone, and if it is not, we say no. This loses deals. It is also the reason an upgrade has never split the customer base.',
  },
  {
    heading: 'Engineers do implementation',
    body: 'The person mapping your chart of accounts also writes platform code. It makes implementation more expensive per hour and much cheaper overall, because the awkward parts get fixed in the product instead of worked around in a configuration.',
  },
  {
    heading: 'Support can ship a fix',
    body: 'Everyone on support has commit access and a path to production. A ticket that turns out to be a bug does not become a backlog item in another team’s queue.',
  },
  {
    heading: 'We publish what breaks',
    body: 'Every customer-affecting incident gets a written review, published, with the timeline and the contributing causes. Not a status badge — the actual account of what we got wrong.',
  },
  {
    heading: 'No change without a migration path',
    body: 'A schema change ships with the migration that carries existing data across, and both are reviewed together. Anything that would require customers to do the work themselves does not ship.',
  },
  {
    heading: 'The roadmap follows the constraint',
    body: 'We build what unblocks the most operators, not what wins the most feature comparisons. Sometimes that means spending a quarter on the close process while a competitor ships another dashboard.',
  },
];

export interface TeamSegment {
  name: string;
  share: number;
  colour: string;
}

export const TEAM_SPLIT: TeamSegment[] = [
  { name: 'Engineering', share: 46, colour: 'var(--sig)' },
  { name: 'Implementation', share: 22, colour: 'rgba(10,95,66,.55)' },
  { name: 'Support', share: 18, colour: 'rgba(10,95,66,.32)' },
  { name: 'Commercial', share: 14, colour: 'var(--edge-2)' },
];

export interface PartnerType {
  name: string;
  body: string;
  metricTop: string;
  metricBottom: string;
}

export const PARTNER_TYPES: PartnerType[] = [
  {
    name: 'Implementation',
    body: 'Firms certified to run a full deployment — modelling, migration, parallel run and cutover — on their own. Certification is per module family and expires annually. Every certified consultant has completed a real migration under supervision before they lead one, and we publish who is certified for what.',
    metricTop: '9 firms',
    metricBottom: '4 regions',
  },
  {
    name: 'Technology',
    body: 'Products we maintain a first-party connection to — banks and payment rails, tax and e-invoicing regimes, carriers, identity providers and telematics. These are engineering relationships with a shared test environment, not logo swaps. If a connector breaks, the ticket comes to us.',
    metricTop: '31 connections',
    metricBottom: 'maintained in-house',
  },
  {
    name: 'Referral',
    body: 'Accountants, industry advisers and operators who send us work without implementing it themselves. Paid on a flat fee at go-live rather than a share of the subscription, so the incentive ends when the customer is live and the advice stays honest.',
    metricTop: 'Open',
    metricBottom: 'apply below',
  },
];

export interface ContactRoute {
  intent: string;
  team: string;
  response: string;
}

export const CONTACT_ROUTES: ContactRoute[] = [
  { intent: 'Evaluate the platform', team: 'Solutions engineering', response: 'Same working day' },
  { intent: 'Report something broken', team: 'Support, in-product or email', response: '1 hour P1 · 1 day P3' },
  { intent: 'Complete a security review', team: 'Trust team, via your account manager', response: '3 working days' },
  { intent: 'Discuss a migration', team: 'Implementation engineering', response: '2 working days' },
  { intent: 'Become a partner', team: 'Partnerships', response: '5 working days' },
  { intent: 'Ask about anything else', team: 'General enquiries', response: 'Best effort' },
];

export interface Office {
  city: string;
  zone: string;
  note: string;
}

export const OFFICES: Office[] = [
  { city: 'Dubai', zone: 'UTC+4 · HQ', note: 'Engineering, implementation and the Middle East desk. Where the platform is built.' },
  { city: 'London', zone: 'UTC+0/+1', note: 'European implementation, the trust team and the accounting specialists behind the ledger.' },
  { city: 'Austin', zone: 'UTC−6/−5', note: 'The Americas desk and the second half of the support day.' },
];
