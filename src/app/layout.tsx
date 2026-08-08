import type { Metadata, Viewport } from 'next';
import { Schibsted_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { RevealObserver } from '@/components/RevealObserver';

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-schibsted',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flowza.ai'),
  // No `template`. Every route copies its title verbatim from the META table in
  // `parts/99-scripts.html`, and those titles already carry the brand — eleven
  // end in "— Flowza" and the nine product titles are "Flowza X — tagline". A
  // "%s — Flowza" template appended a second brand to twenty of twenty-four
  // routes ("Company — Flowza — Flowza"). A bare string is the default title for
  // any route that ships without one of its own; the object form is not usable
  // here because Next's type pairs `default` with a required `template`.
  title: 'Flowza — nine business systems, one operating fabric',
  description:
    'Flowza runs nine purpose-built business systems for MEA and India — Finance, LogisPro, Spa Master, Fleetza, QRForge, POS, Club, RentFlow and PMS — on one shared data layer. Customers, inventory and ledger entries move between them without re-entry.',
  openGraph: {
    type: 'website',
    siteName: 'Flowza',
    title: 'Flowza — Nine business systems. One operating fabric.',
    description:
      'Nine systems, each good at its own job, sharing one data layer. A customer created at the till is already the member at the club and the guest at the spa — no export, no matching key, no re-entry.',
  },
};

// Next 15 rejects `themeColor` inside the metadata export; it belongs here.
export const viewport: Viewport = {
  themeColor: '#F6F6F3',
};

/**
 * The entity-SEO surface, ported from the JSON-LD graph in `parts/00-head.html`.
 *
 * The nine appear as nine SoftwareApplication entries rather than one, because
 * that is what they are: each carries its own marketing URL and its own app
 * subdomain as `sameAs`. One adjustment from the site: product URLs are the real
 * Next.js routes (`/products/finance`) rather than the single-file site's hash
 * form (`/#/products/finance`).
 */
const NINE: { name: string; slug: string; app: string; description: string }[] = [
  {
    name: 'Flowza Finance',
    slug: 'finance',
    app: 'finance.flowza.ai',
    description:
      'Accounting, ERP and payroll on one ledger. Sales, purchases, inventory, double-entry accounting, payroll and HR post to a single connected ledger, with GST for India and VAT and corporate tax for the Gulf built in.',
  },
  {
    name: 'Flowza LogisPro',
    slug: 'logispro',
    app: 'logispro.flowza.ai',
    description:
      'Routes, shipments and warehouses, optimised. AI route optimisation, live shipment tracking and a full warehouse management system on one operations picture.',
  },
  {
    name: 'Flowza Spa Master',
    slug: 'spamaster',
    app: 'spamaster.flowza.ai',
    description:
      'Bookings, rosters and loyalty for wellness. Online booking, certification-aware staff scheduling, retail inventory and loyalty for spas and wellness studios.',
  },
  {
    name: 'Flowza Fleetza',
    slug: 'fleetza',
    app: 'fleetza.flowza.ai',
    description:
      'Live tracking, driver scores and maintenance. Live GPS, AI driver behaviour scoring, predictive maintenance and fuel analytics giving a true cost per kilometre.',
  },
  {
    name: 'Flowza QRForge',
    slug: 'qrforge',
    app: 'qr.flowza.ai',
    description:
      "Dynamic QR codes with live analytics. Change a printed code's destination at any time, log every scan with location, device and time, and mint thousands of codes from one CSV.",
  },
  {
    name: 'Flowza POS',
    slug: 'pos',
    app: 'pos.flowza.ai',
    description:
      'Point of sale that survives the internet. Sub-second transactions, true offline mode with no lost sales, multi-location inventory and customer analytics.',
  },
  {
    name: 'Flowza Club',
    slug: 'club',
    app: 'club.flowza.ai',
    description:
      'Membership, booking and billing for clubs. Household billing, a double-entry ledger that ties out, charge-to-account registers, and a booking engine where double-bookings are impossible by construction.',
  },
  {
    name: 'Flowza RentFlow',
    slug: 'rentflow',
    app: 'rentflow.flowza.ai',
    description:
      'Tenant applications, screened and decided. Every rental application in one pipeline, screened against credit, background, eviction-history, income and reference checks, with the decision reason recorded.',
  },
  {
    name: 'Flowza PMS',
    slug: 'pms',
    app: 'pms.flowza.ai',
    description:
      'Rate, calibrate and pay on one system. KRA and KPI review cycles, bell-curve calibration, a compensation engine aware of India and Gulf statutory rules, and letters a third party can verify on a public page.',
  },
];

const INDUSTRIES = [
  'Retail and Hospitality',
  'Logistics and Freight',
  'Manufacturing',
  'Professional Services',
  'Construction',
  'Healthcare',
  'Wellness and Beauty',
  'Public Sector',
];

const FAQ_ENTRIES: { question: string; answer: string }[] = [
  {
    question: 'What is Flowza?',
    answer:
      'Flowza is a set of nine business operating systems for the Middle East, Africa and India: Finance, LogisPro, Spa Master, Fleetza, QRForge, POS, Club, RentFlow and PMS. Each runs as its own application on its own subdomain, and each is licensed independently. What they share is a single data layer holding six record types — party, item, ledger entry, location, person and document — so a record created in one system is already present in the others.',
  },
  {
    question: 'Is Flowza one product or nine?',
    answer:
      'Nine. Flowza does not claim to be a single application. Each of the nine has its own screens, its own release train and its own app subdomain, and most customers start with one. The claim Flowza does make is narrower and checkable: the nine write to and read from the same records, so nothing is exported, re-keyed or reconciled between them. Nine systems connect to one shared layer rather than to each other.',
  },
  {
    question: 'How is Flowza different from a suite of integrated products?',
    answer:
      'A suite integrates products that each hold their own version of the truth, which is why an all-in-one platform still asks you to import your customer list. Flowza removes the copies instead of syncing them. Five of the nine systems write to the same party record, so a customer at the till, a member at the club, a guest at the spa and an applicant in RentFlow are one row with one history. There is no matching key and no nightly de-duplication job, because nothing was ever separate enough to need one.',
  },
  {
    question: 'Which countries is Flowza compliant in?',
    answer:
      'Four. India covers GST including CGST, SGST, IGST and reverse charge, e-way bills and GST returns, TDS and input tax credit tracking, and statutory payroll including EPF, ESI, Professional Tax, gratuity and POSH. The UAE covers VAT at 5 per cent, corporate tax at 9 per cent and WPS payroll bank files. Oman covers VAT at 5 per cent, social insurance payroll and a country chart-of-accounts pack. Saudi Arabia covers GOSI payroll and Arabic right-to-left documents. Further GCC coverage is on the roadmap rather than in the product.',
  },
  {
    question: 'Where does AI fit into Flowza?',
    answer:
      'Copilot queries the shared data layer rather than any single application, so a question that spans the till, the warehouse and the ledger is one question rather than three reports. It resolves requests against live records, builds the steps and executes them under the same role-based permissions as the person who asked, never above them. Every AI action is written to the same audit log as every human action, attributed to the person who authorised it.',
  },
  {
    question: 'Do I have to buy all nine?',
    answer:
      'No. Almost nobody adopts nine systems at once. Most deployments start with the one system that solves the urgent problem, run it alongside the incumbent until the numbers agree, then cut over. Adding a second system later skips the data migration, because the customers, items and ledger entries it needs are already in the shared layer.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://flowza.ai/#org',
      name: 'Flowza',
      alternateName: ['Flowza AI', 'FlowZa'],
      description:
        'Flowza builds nine purpose-built AI business operating systems for the Middle East, Africa and India. The nine run as separate applications on separate subdomains but share one data layer, so customers, inventory and ledger entries pass between them without re-entry.',
      url: 'https://flowza.ai/',
      slogan: 'Nine systems. One operating fabric.',
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Oman' },
        { '@type': 'Country', name: 'Saudi Arabia' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://flowza.ai/#site',
      url: 'https://flowza.ai/',
      name: 'Flowza',
      publisher: { '@id': 'https://flowza.ai/#org' },
    },
    {
      '@type': 'ItemList',
      name: 'The nine Flowza systems',
      description:
        'Nine business operating systems sharing one data layer. Each runs as its own application on its own subdomain and is licensed independently.',
      numberOfItems: 9,
      itemListElement: NINE.map((system, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: system.name,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: `https://flowza.ai/products/${system.slug}`,
          sameAs: `https://${system.app}`,
          description: system.description,
          publisher: { '@id': 'https://flowza.ai/#org' },
        },
      })),
    },
    {
      '@type': 'ItemList',
      name: 'Flowza solutions by industry',
      description:
        'Sectors Flowza is configured for, each defined by its unit of work and its binding constraint.',
      itemListElement: INDUSTRIES.map((name, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ENTRIES.map((entry) => ({
        '@type': 'Question',
        name: entry.question,
        acceptedAnswer: { '@type': 'Answer', text: entry.answer },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
