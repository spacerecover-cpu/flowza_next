/**
 * What the Flowza AI platform is, stated as four pillars.
 *
 * This file previously described a four-layer stack in which nine applications
 * sat on top of one shared record layer. That is not the architecture: the nine
 * are independent cloud applications, each with its own database. What they
 * genuinely have in common is a vendor, a set of engineering and security
 * standards, and regional compliance expertise — so that is what this describes.
 * Nothing here should imply a shared database or a single licence.
 */
export interface PlatformPillar {
  number: string;
  name: string;
  subtitle: string;
  bullets: string[];
  footer: string;
}

export const PILLARS: PlatformPillar[] = [
  {
    number: '01',
    name: 'Nine specialised applications',
    subtitle: 'Each built for one job, not one suite stretched over nine',
    bullets: [
      'Finance, LogisPro, Spa Master, Fleetza, QRForge',
      'POS, Club, RentFlow, PMS',
      'Each on its own app and its own subdomain',
      'Each designed around the constraint its industry actually has',
      'Take one, take three, take all nine',
    ],
    footer:
      'A general-purpose suite has to be adequate at everything. A specialised application only has to be right about one thing, which is why these are separate products rather than modules of one.',
  },
  {
    number: '02',
    name: 'Independent by design',
    subtitle: 'Own database, own subscription, own release train',
    bullets: [
      'Each application holds its own data, in its own database',
      'Each is bought and priced on its own terms',
      'Each ships on its own release schedule',
      'An application can be adopted, or dropped, without touching the others',
      'No application depends on another being present',
    ],
    footer:
      'Independence is the trade. Your fleet system does not go down because the booking system is deploying, and you are never asked to buy a ninth product to make the first one work.',
  },
  {
    number: '03',
    name: 'Common engineering standards',
    subtitle: 'The same security and operational bar in every application',
    bullets: [
      'Tenant isolation enforced inside every application',
      'SAML and OIDC single sign-on, SCIM provisioning',
      'An immutable, attributable audit log per application',
      'Encryption in transit and at rest, keys scoped per tenant',
      'Published recovery point and recovery time objectives',
    ],
    footer:
      'These are standards each application is built to, not a shared service the nine plug into. The benefit is that a security review of one tells you what to expect of the next.',
  },
  {
    number: '04',
    name: 'Built for India and the Gulf',
    subtitle: 'Regional compliance where the application needs it',
    bullets: [
      'India: GST, e-way bills, TDS and statutory payroll',
      'UAE: VAT at 5 per cent, corporate tax at 9 per cent, WPS files',
      'Oman: VAT, social insurance payroll and a country chart of accounts',
      'Saudi Arabia: GOSI payroll and Arabic right-to-left documents',
      'Data residency chosen at provisioning',
    ],
    footer:
      'Compliance sits in the applications it applies to — Finance and PMS carry the statutory engines. A QR code product does not need a VAT engine and does not pretend to have one.',
  },
];
