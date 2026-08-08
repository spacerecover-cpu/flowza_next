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
 * Rewritten to what the nine actually do for a manufacturer.
 *
 * The previous version was built on work orders, bill-of-material explosion,
 * work-centre constraint analysis and scrap Pareto charts. None of those exist
 * in any FlowZa AI application — the catalogue has no MRP, no routings and no
 * shop-floor scheduling. The page now covers the parts that are real (stock and
 * warehouse, landed cost, the delivery fleet, the ledger, payroll) and states
 * the boundary plainly rather than implying a production system.
 */
export const metadata: Metadata = {
  title: 'Manufacturing — FlowZa AI',
  description:
    'FlowZa AI runs the business around your shop floor, not the shop floor itself: warehouse and stock, landed cost, the delivery fleet, the ledger and statutory payroll for India and the Gulf.',
};

export default function ManufacturingPage() {
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
                Manufacturing
              </p>
              <h1 className="d-xl">
                Not the shop floor.<br />Everything<br />around it.
              </h1>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                FlowZa AI does not schedule your lines and does not pretend to. What it runs is the business
                that surrounds them — the stores, the inbound and outbound movements, the true landed cost of
                what you buy, the vehicles that deliver it, and the books and payroll underneath all of it.
              </p>
              <div className="row" style={{ marginTop: 'var(--s6)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">&rarr;</span>
                </Link>
                <Link className="btn btn--ghost" href="/products/logispro">FlowZa LogisPro</Link>
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
            <h2 className="d-l">Four applications a<br />manufacturer actually uses.</h2>
          </div>
          <KeylineList
            twoCol
            className="rv"
            items={[
              {
                heading: 'FlowZa LogisPro — the stores and the movements',
                body: 'Bins, picking, putaway and cycle counts across sites, with inbound goods and outbound despatch on one board. Where stock physically is, and what moved it, without a spreadsheet in the middle.',
              },
              {
                heading: 'FlowZa Finance — the ledger and the landed cost',
                body: 'Purchases, sales, inventory valuation and the double-entry books in one application, with GST for India and VAT and corporate tax for the Gulf maintained as the rules change.',
              },
              {
                heading: 'FlowZa Fleetza — the vehicles that deliver',
                body: 'Live GPS, driver behaviour scoring and predictive maintenance across your own delivery fleet, resolved to a true cost per kilometre rather than an assumed rate.',
              },
              {
                heading: 'FlowZa PMS — the appraisal and increment cycle',
                body: 'KRA and KPI cycles calibrated across supervisors, with increments resolved against the statutory rules of the country each person is employed in.',
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
              Being clear about the edge is part of the offer. If any of the following is what you are
              shopping for, none of the nine is the answer and we would rather say so now.
            </p>
          </div>
          <KeylineList
            className="rv"
            items={[
              {
                heading: 'No bill of materials or MRP',
                body: 'There is no BOM, no explosion against demand, and no material requirements planning. What a finished unit is made of is not modelled.',
              },
              {
                heading: 'No work orders or routings',
                body: 'Production orders, operation sequences and shop-floor booking are outside every one of the nine.',
              },
              {
                heading: 'No capacity or constraint scheduling',
                body: 'Work-centre loading, finite scheduling and bottleneck analysis are not in the product. Stock movement is tracked; the line that produced it is not.',
              },
              {
                heading: 'No quality or scrap analysis',
                body: 'Non-conformance, scrap coding and cause analysis are not modelled. Consumption is a stock movement here, not a quality record.',
              },
            ]}
          />
          <p className="tiny rv" style={{ marginTop: 'var(--s6)' }}>
            Manufacturers commonly run a dedicated MRP or MES alongside FlowZa AI and use its applications
            for stores, logistics, the ledger and payroll. Each application exposes its own API, so the
            handover between the two is one you build deliberately.
          </p>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter>
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions manufacturers ask</h2>
          <FAQ
            className="rv"
            items={[
              {
                question: 'Can it replace our ERP?',
                answer:
                  'Only the financial and distribution half of one. FlowZa Finance covers purchases, sales, inventory valuation, the double-entry ledger, payroll and statutory filing, and FlowZa LogisPro covers the warehouse. If your ERP is also running production planning, that part stays where it is.',
              },
              {
                question: 'Does it track stock by batch or serial number?',
                answer:
                  'Stock is tracked by item and location across sites, with movements and cycle counts. Batch and serial traceability through a production process is not modelled, because the production process itself is not modelled.',
              },
              {
                question: 'We print codes on cartons and pallets. Is that covered?',
                answer:
                  'Yes, by FlowZa QRForge, which is a separate application on its own subscription. It mints thousands of unique codes from one CSV, logs every scan with time and place, and lets you change where a printed code points without reprinting anything.',
              },
              {
                question: 'Which application should we start with?',
                answer:
                  'Whichever problem is urgent. If stock accuracy is the pain, start with LogisPro. If it is the close, the tax filing or payroll, start with Finance. Each is a complete product on its own, bought on its own subscription, and neither needs the other to be useful.',
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
              { href: '/products/logispro', title: 'FlowZa LogisPro', subtitle: 'Routes, shipments and warehouses' },
              { href: '/products/finance', title: 'FlowZa Finance', subtitle: 'Accounting, ERP and payroll on one ledger' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all seven sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
