import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';
import { BomExplosion } from '@/components/BomExplosion';
import { ScrapPareto } from '@/components/ScrapPareto';
import { CapacityExplorer, CapacityProfile, CapacityPanel } from '@/components/CapacityProfile';

export const metadata: Metadata = {
  title: 'Manufacturing — FlowZa AI',
  description:
    'One station sets the pace of the line. Find the constraint from real work order data, explode bills of material against live stock, and attribute scrap to a cause.',
};

export default function ManufacturingPage() {
  return (
    <>
      <CapacityExplorer initialIndex={2}>

        {/* HERO */}
        <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
          <Wrap>
            <Cols style={{ alignItems: 'center' }}>
              <div className="c-5 rv">
                <p className="ibadge">
                  <Link href="/industries">Industries</Link>
                  <i />
                  Manufacturing
                </p>
                <h1 className="d-xl" style={{ marginBottom: 'var(--s5)' }}>
                  One station<br />sets the pace<br />of the whole<br />line.
                </h1>
                <p className="lede" style={{ marginBottom: 'var(--s7)' }}>
                  Adding capacity anywhere except the constraint adds cost and nothing else. FlowZa measures capacity, queue and setup at every work centre from real work order data, so the constraint is a fact rather than an opinion — and so you notice when it moves.
                </p>
                <div className="row">
                  <Link className="btn btn--primary" href="/pricing">
                    Book a walkthrough <span className="arw">→</span>
                  </Link>
                  <Link className="btn btn--ghost" href="/platform">The platform</Link>
                </div>
              </div>
              <div className="c-7 rv rv-d2">
                <CapacityProfile />
              </div>
            </Cols>
          </Wrap>
        </Chapter>

        {/* CONSTRAINT PANEL */}
        <Chapter variant="raised">
          <Wrap>
            <Cols>
              <div className="c-7 rv">
                <Eyebrow>The constraint</Eyebrow>
                <h2 className="d-l" style={{ marginBottom: 'var(--s5)' }}>
                  Select a station.<br />See what it is<br />really costing.
                </h2>
                <p className="body-l" style={{ marginBottom: 'var(--s5)' }}>
                  Utilisation figures above one hundred per cent are the tell — the station is being asked for more than it can deliver, and the difference is accumulating as queue somewhere upstream.
                </p>
                <p className="small">
                  The uncomfortable part is that relieving the constraint does not remove it. It moves it, usually to the station that was second in line, which is why capacity decisions need to be made against the whole profile rather than one number.
                </p>
              </div>
              <div className="c-5 rv rv-d2">
                <CapacityPanel />
              </div>
            </Cols>
          </Wrap>
        </Chapter>

      </CapacityExplorer>

      {/* AVAILABILITY / BOM */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Availability</Eyebrow>
              <h2 className="d-l">A shortage two levels<br />down still stops<br />the build.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Bills of material are only useful exploded against real stock. FlowZa checks every level against the same item records the warehouse counts, so a promise date reflects what is actually available rather than what the top level suggests.
              </p>
            </div>
          </Cols>
          <BomExplosion />
          <KeylineList
            twoCol
            className="rv"
            style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}
            items={[
              {
                heading: 'Requisitions raised from the explosion',
                body: 'A confirmed shortage proposes a purchase requisition against the preferred supplier at the agreed price, with the lead time already reflected in the revised promise date.',
              },
              {
                heading: 'Engineering changes are versioned',
                body: 'A revised bill of material creates a new version with an effective date rather than editing history, so a unit built last year still explodes to the parts it was actually built from.',
              },
              {
                heading: 'Substitutes are declared, not improvised',
                body: 'Approved alternates sit on the bill with their own cost, so a substitution is a priced decision and the margin effect is visible immediately.',
              },
              {
                heading: 'Scrap consumes real stock',
                body: 'A rejected unit returns its usable components and writes off the rest against the work order, which is what makes the cost of quality a measured number.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* SCRAP PARETO */}
      <Chapter>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Cost of quality</Eyebrow>
              <h2 className="d-l">Three causes explain<br />three quarters of<br />the scrap.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Scrap is usually reported as a single percentage, which is exactly the format that prevents anyone acting on it. Attributed to a cause, a station and a shift, it becomes a queue of fixable problems.
              </p>
            </div>
          </Cols>
          <ScrapPareto />
        </Wrap>
      </Chapter>

      {/* WORK IN PROGRESS */}
      <Chapter variant="raised">
        <Wrap>
          <Cols>
            <div className="c-4 rv">
              <Eyebrow>Work in progress</Eyebrow>
              <h2 className="d-m">A balance, not an estimate</h2>
            </div>
            <div className="c-8 rv rv-d2">
              <KeylineList
                twoCol
                style={{ borderTopColor: 'var(--edge)' }}
                items={[
                  {
                    heading: 'Material, labour and overhead as incurred',
                    body: 'Issues to the work order and time booked against it accumulate on the same transaction, so work in progress is a ledger balance you can walk down to individual postings.',
                  },
                  {
                    heading: 'Variance where it happened',
                    body: 'Usage and rate variances attach to the station and the shift that produced them rather than appearing as a single monthly figure with no owner.',
                  },
                  {
                    heading: 'Standard costs that get revisited',
                    body: 'Actuals are compared to standards continuously, and FlowZa flags when a standard has drifted far enough to be misleading rather than waiting for an annual review.',
                  },
                  {
                    heading: 'Serialised to the unit',
                    body: 'Where finished units carry a unique QRForge code, each scan is logged with its time and place, so a quality escape can be traced to the batch and the station that produced it — and the code can be re-pointed at a recall notice without reprinting anything.',
                  },
                ]}
              />
            </div>
          </Cols>
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
                question: 'Discrete or process manufacturing?',
                answer: 'Both, though they use different parts of the model. Discrete work uses bills of material, routings and serial or lot tracking. Process work uses formulations, yields and co-products. A business running both — assembling units from materials it also blends — runs them on one set of records rather than two systems.',
              },
              {
                question: 'Do you connect to machines and PLCs?',
                answer: 'Machine data is consumed as events, typically through an existing historian or MES rather than by talking to controllers directly. Counts, downtime reasons and cycle times drive the capacity profile. Replacing shop-floor control systems is not part of a deployment.',
              },
              {
                question: 'Can we plan finite capacity, not just infinite?',
                answer: 'Yes. Scheduling respects work centre capacity, calendars, setup times and sequence-dependent changeovers, and will tell you the earliest honest completion date rather than the one that fits the order book. Where a date cannot be met, it shows what would have to move.',
              },
              {
                question: 'How do you handle subcontract operations?',
                answer: "An outside operation is a step in the routing that happens at a supplier's location. Material issued to them stays on your balance sheet, the purchase order for the service links to the work order, and the return is a receipt against that step — so nothing disappears while it is off site.",
              },
            ]}
          />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks
            className="rv"
            links={[
              { href: '/products/qrforge', title: 'FlowZa QRForge', subtitle: 'Serialisation and recall' },
              { href: '/industries/logistics', title: 'Logistics and Freight', subtitle: 'Moving what you build' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all eight sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
