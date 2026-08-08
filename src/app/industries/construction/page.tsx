import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';

/**
 * Rewritten to what the nine actually do for a contractor.
 *
 * The previous version was built on commitment accounting at the requisition,
 * an S-curve of certified value against programme, retention tracking and a
 * package-level cost breakdown. None of that exists: there is no project ledger,
 * no valuation or certification process and no commitment stage in any of the
 * nine. What is real is the plant and vehicles, the materials moving to site,
 * the books, and statutory payroll for a workforce spread across countries.
 */
export const metadata: Metadata = {
  title: 'Construction — FlowZa AI',
  description:
    'The yard, the fleet, the books and the payroll — not the project ledger. What FlowZa AI covers for a contractor, and the job-costing it deliberately does not.',
};

export default function ConstructionPage() {
  return (
    <>
      {/* HERO */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(48px,6vw,var(--s8))' }}>
            <div className="c-6 rv">
              <p className="ibadge">
                <Link href="/industries">Industries</Link>
                <i />
                Construction
              </p>
              <h1 className="d-xl">
                The yard and<br />the payroll, not<br />the programme.
              </h1>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                A contractor runs two businesses at once: the projects, and the plant, people and money that
                serve them. FlowZa AI is built for the second. It will not value your works or track a
                retention release — it will tell you what your plant costs, where your materials went, and
                whether the payroll is compliant in four countries.
              </p>
              <div className="row" style={{ marginTop: 'var(--s6)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">&rarr;</span>
                </Link>
                <Link className="btn btn--ghost" href="/products/fleetza">FlowZa Fleetza</Link>
              </div>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* WHAT IT COVERS */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>What it covers</Eyebrow>
            <h2 className="d-l">The half of the business<br />that is not the site.</h2>
          </div>
          <KeylineList
            twoCol
            className="rv"
            items={[
              {
                heading: 'FlowZa Fleetza — plant and vehicles',
                body: 'Live GPS across tippers, vans and plant, driver behaviour scoring, and predictive maintenance driven by actual use rather than a calendar — resolved to a true cost per kilometre and per asset.',
              },
              {
                heading: 'FlowZa LogisPro — materials and the stores',
                body: 'Bins, picking and cycle counts in the yard, with deliveries to site sequenced against time windows and vehicle capacity rather than planned on a whiteboard.',
              },
              {
                heading: 'FlowZa Finance — the books',
                body: 'Purchases, subcontractor invoices, the double-entry ledger and multi-entity consolidation, with GST for India and VAT and corporate tax for the Gulf maintained as the rules change.',
              },
              {
                heading: 'FlowZa Finance — payroll across four countries',
                body: 'EPF, ESI, professional tax and gratuity for India; WPS bank files for the UAE; social insurance for Oman and GOSI for Saudi Arabia — the part of a mobile workforce that gets expensive when it is wrong.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* THE BOUNDARY */}
      <Chapter variant="instrument" net>
        <Wrap tight>
          <div className="section-head rv">
            <Eyebrow>Scope</Eyebrow>
            <h2 className="d-l">What FlowZa AI<br />does not do here.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Construction finance has a vocabulary of its own, and none of it is implemented in the nine.
              If these are the words in your requirements document, this is not the product.
            </p>
          </div>
          <KeylineList
            className="rv"
            items={[
              {
                heading: 'No commitment accounting',
                body: 'A purchase order does not create a committed-cost position against a budget. Cost lands in the ledger when it is invoiced, in the ordinary way.',
              },
              {
                heading: 'No valuations, certificates or retention',
                body: 'Applications for payment, certified value, the unbilled wedge between the two, and retention held and released are not modelled anywhere in the product.',
              },
              {
                heading: 'No project or job ledger',
                body: 'There is no cost code structure, no package-level budget and no cost-value reconciliation. Profitability by job is not a report FlowZa AI produces.',
              },
              {
                heading: 'No programme or progress tracking',
                body: 'Planned against actual progress, S-curves and forecast-to-complete belong to a project system, and that is not what any of the nine is.',
              },
            ]}
          />
          <p className="tiny rv" style={{ marginTop: 'var(--s6)' }}>
            Contractors commonly run a dedicated job-costing or project system and use FlowZa AI for plant,
            stores, the statutory books and payroll. Each application exposes its own API for the handover.
          </p>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter>
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions contractors ask</h2>
          <FAQ
            className="rv"
            items={[
              {
                question: 'Can we cost a job in it?',
                answer:
                  'Not as a contractor means it. FlowZa Finance can carry a dimension on a transaction so purchases and invoices can be analysed by project, but there is no budget to compare against, no committed cost, no valuation and no cost-value reconciliation. If job costing is the requirement, keep the system that does it.',
              },
              {
                question: 'What about plant hire, internal and external?',
                answer:
                  'FlowZa Fleetza gives you the true running cost of plant you own — acquisition, fuel, workshop invoices, insurance and depreciation resolved per asset. Recharging that to a project at an internal hire rate is a ledger convention you would set up in FlowZa Finance, not a plant-hire module.',
              },
              {
                question: 'We employ across India and the Gulf. Is payroll really covered?',
                answer:
                  'Yes, and it is the strongest reason contractors look at FlowZa Finance. India covers EPF, ESI, professional tax, gratuity and POSH; the UAE covers WPS bank files; Oman covers social insurance; Saudi Arabia covers GOSI. Further GCC coverage is on the roadmap rather than in the product.',
              },
              {
                question: 'Do we tag plant and materials?',
                answer:
                  'FlowZa QRForge mints asset tags in bulk and logs every scan with time and place, and lets you re-point a printed code without reprinting it. It is a separate application on its own subscription.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* RELATED */}
      <Chapter variant="raised">
        <Wrap>
          <RelatedLinks
            className="rv"
            links={[
              { href: '/products/fleetza', title: 'FlowZa Fleetza', subtitle: 'Live tracking, driver scores and maintenance' },
              { href: '/products/finance', title: 'FlowZa Finance', subtitle: 'Accounting, ERP and payroll on one ledger' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all seven sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
