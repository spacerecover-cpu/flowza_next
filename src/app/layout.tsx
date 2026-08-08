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
  // end in "— FlowZa" and the nine product titles are "FlowZa X — tagline". A
  // "%s — FlowZa" template appended a second brand to twenty of twenty-four
  // routes ("Company — FlowZa — FlowZa"). A bare string is the default title for
  // any route that ships without one of its own; the object form is not usable
  // here because Next's type pairs `default` with a required `template`.
  title: 'FlowZa AI — nine cloud applications for business operations',
  description:
    'FlowZa AI is a platform of nine specialised cloud applications for business management and workflow automation — Finance, LogisPro, Spa Master, Fleetza, QRForge, POS, Club, RentFlow and PMS. Each application is independent, priced on its own and deployed on its own. Choose only the applications your business needs.',
  openGraph: {
    type: 'website',
    siteName: 'FlowZa AI',
    title: 'FlowZa AI — Nine cloud applications. One trusted platform.',
    description:
      'Specialised business software for finance, logistics, wellness, fleet, retail, clubs, rentals and operations. Each application is purpose-built for its industry and can be deployed independently as your business grows.',
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
    name: 'FlowZa Finance',
    slug: 'finance',
    app: 'finance.flowza.ai',
    description:
      'Accounting, ERP and payroll on one ledger. Sales, purchases, inventory, double-entry accounting, payroll and HR post to a single connected ledger, with GST for India and VAT and corporate tax for the Gulf built in.',
  },
  {
    name: 'FlowZa LogisPro',
    slug: 'logispro',
    app: 'logispro.flowza.ai',
    description:
      'Routes, shipments and warehouses, optimised. AI route optimisation, live shipment tracking and a full warehouse management system on one operations picture.',
  },
  {
    name: 'FlowZa Spa Master',
    slug: 'spamaster',
    app: 'spamaster.flowza.ai',
    description:
      'Bookings, rosters and loyalty for wellness. Online booking, certification-aware staff scheduling, retail inventory and loyalty for spas and wellness studios.',
  },
  {
    name: 'FlowZa Fleetza',
    slug: 'fleetza',
    app: 'fleetza.flowza.ai',
    description:
      'Live tracking, driver scores and maintenance. Live GPS, AI driver behaviour scoring, predictive maintenance and fuel analytics giving a true cost per kilometre.',
  },
  {
    name: 'FlowZa QRForge',
    slug: 'qrforge',
    app: 'qr.flowza.ai',
    description:
      "Dynamic QR codes with live analytics. Change a printed code's destination at any time, log every scan with location, device and time, and mint thousands of codes from one CSV.",
  },
  {
    name: 'FlowZa POS',
    slug: 'pos',
    app: 'pos.flowza.ai',
    description:
      'Point of sale that survives the internet. Sub-second transactions, true offline mode with no lost sales, multi-location inventory and customer analytics.',
  },
  {
    name: 'FlowZa Club',
    slug: 'club',
    app: 'club.flowza.ai',
    description:
      'Membership, booking and billing for clubs. Household billing, a double-entry ledger that ties out, charge-to-account registers, and a booking engine where double-bookings are impossible by construction.',
  },
  {
    name: 'FlowZa RentFlow',
    slug: 'rentflow',
    app: 'rentflow.flowza.ai',
    description:
      'Tenant applications, screened and decided. Every rental application in one pipeline, screened against credit, background, eviction-history, income and reference checks, with the decision reason recorded.',
  },
  {
    name: 'FlowZa PMS',
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
    question: 'What is FlowZa AI?',
    answer:
      'FlowZa AI is a platform of nine specialised cloud applications for business management in the Middle East, Africa and India: Finance, LogisPro, Spa Master, Fleetza, QRForge, POS, Club, RentFlow and PMS. Each runs as its own application on its own subdomain, holds its own data, and is bought and priced on its own. They belong to one ecosystem and are built to a common security and compliance standard, but they are independent products rather than modules of one system.',
  },
  {
    question: 'Is FlowZa AI one product or nine?',
    answer:
      'Nine. FlowZa AI is not a single application and does not claim to be one. Each of the nine has its own screens, its own database, its own release train, its own app subdomain and its own subscription. Most customers run one. Buying a second is a separate decision on separate terms, and no application requires another to be present in order to work.',
  },
  {
    question: 'How is FlowZa AI different from an all-in-one ERP suite?',
    answer:
      'A suite is sold whole and priced on everything it contains, which is why businesses pay for modules nobody opens and accept a generic version of the one thing they care most about. FlowZa AI sells specialised applications separately. Each is built around the constraint its own industry actually has — the treatment room, the vehicle hour, the trading minute — and each is a finished product on its own. You choose only the applications your business needs.',
  },
  {
    question: 'Which countries is FlowZa AI compliant in?',
    answer:
      'Four. India covers GST including CGST, SGST, IGST and reverse charge, e-way bills and GST returns, TDS and input tax credit tracking, and statutory payroll including EPF, ESI, Professional Tax, gratuity and POSH. The UAE covers VAT at 5 per cent, corporate tax at 9 per cent and WPS payroll bank files. Oman covers VAT at 5 per cent, social insurance payroll and a country chart-of-accounts pack. Saudi Arabia covers GOSI payroll and Arabic right-to-left documents. Further GCC coverage is on the roadmap rather than in the product.',
  },
  {
    question: 'Where does AI fit into FlowZa AI?',
    answer:
      'Inside each application, on the job that application does. LogisPro sequences a route against real constraints, Fleetza scores driver behaviour into something coachable, Finance reads an invoice and proposes the posting, PMS calibrates ratings across managers. In every case the AI works on the records that application holds, executes under the same role-based permissions as the person who asked, never above them, and writes every action to that application audit log attributed to the person who authorised it.',
  },
  {
    question: 'Do I have to buy more than one application?',
    answer:
      'No. Each application is a complete product on its own and most customers run exactly one. A deployment is scoped to a single application: model it, migrate into it, run it alongside the incumbent until the numbers agree, then cut over. Adopting a second application later is its own project, on its own subscription and its own timetable, and it does not disturb the first.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://flowza.ai/#org',
      name: 'FlowZa AI',
      // The brand is written FlowZa; the lower-case variants are how people
      // actually type it into a search box, so they stay as alternates.
      alternateName: ['FlowZa', 'Flowza', 'Flowza AI'],
      description:
        'FlowZa AI builds nine specialised AI cloud applications for business management and workflow automation in the Middle East, Africa and India. Each application runs on its own subdomain, holds its own data and carries its own subscription, so a business can buy only the applications it needs.',
      url: 'https://flowza.ai/',
      slogan: 'Nine cloud applications. One trusted platform.',
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
      name: 'FlowZa AI',
      publisher: { '@id': 'https://flowza.ai/#org' },
    },
    {
      '@type': 'ItemList',
      name: 'The nine FlowZa AI applications',
      description:
        'Nine specialised cloud applications for business operations. Each runs as its own application on its own subdomain, holds its own data, and is priced and licensed independently.',
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
      name: 'FlowZa solutions by industry',
      description:
        'Sectors FlowZa is configured for, each defined by its unit of work and its binding constraint.',
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
