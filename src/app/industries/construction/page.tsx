import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';
import { SCurve } from '@/components/SCurve';
import { CostBreakdown } from '@/components/CostBreakdown';

export const metadata: Metadata = {
  title: 'Construction — Flowza',
  description:
    'Cost lands as incurred, revenue when certified. See the unbilled wedge weekly, and report commitment rather than spend.',
};

export default function ConstructionPage() {
  return (
    <>
      {/* HERO */}
      <Chapter variant="instrument" style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(48px,6vw,var(--s8))' }}>
            <div className="c-6 rv">
              <p className="ibadge">
                <Link href="/industries">Industries</Link>
                <i />
                Construction
              </p>
              <h1 className="d-xl">
                The job is<br />profitable until<br />someone<br />certifies it.
              </h1>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                Cost lands as it is incurred. Revenue lands when a surveyor agrees it. The distance between those two curves is the money you have already spent and not yet been permitted to invoice — and on most jobs nobody plots it until the month-end pack.
              </p>
              <div className="row" style={{ marginTop: 'var(--s6)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <Link className="btn btn--ghost" href="/products/finance">Flowza Finance</Link>
              </div>
            </div>
          </Cols>

          <div className="panel rv" style={{ padding: 'var(--s6)' }}>
            <div className="row" style={{ justifyContent: 'space-between', marginBottom: 'var(--s5)' }}>
              <span className="mono" style={{ fontSize: '.625rem', letterSpacing: '.11em', color: 'var(--fg-3)' }}>
                JOB 4412 · CUMULATIVE % OF CONTRACT VALUE
              </span>
              <span className="tag tag--ai">Unbilled 14 points</span>
            </div>
            <div className="dscroll" style={{ ['--dmin' as string]: '620px' }}>
              <SCurve />
            </div>
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              The shaded wedge is work performed and paid for but not yet certified. It peaks at fourteen points around month seven, which on a ten million contract is one and a half million of your own cash inside someone else&apos;s programme. Plotting it weekly rather than monthly is the entire intervention.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* COMMITMENT */}
      <Chapter>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Commitment</Eyebrow>
              <h2 className="d-l">Spent is not the<br />number that<br />matters.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                A package is exposed the moment the order is placed, not when the invoice arrives. Reporting spend without commitment is how a job looks fine in October and is overspent in November.
              </p>
            </div>
          </Cols>
          <div className="rv">
            <CostBreakdown />
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              Cladding is only 58% spent and already 103% exposed, because the orders are placed and a variation is unsigned. Mechanical and electrical looks comfortable on spend and has 49% sitting in commitments. Neither shows on a spend report.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* THE CONTRACT RUNS THE LEDGER */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>The contract runs the ledger</Eyebrow>
            <h2 className="d-l">Retention and variations<br />are accounting, not<br />admin.</h2>
          </div>
          <KeylineList
            twoCol
            className="rv"
            items={[
              {
                heading: 'Retention held and released automatically',
                body: 'The percentage, the defects period and the release date are contract terms the ledger enforces. Retention receivable ages visibly instead of being remembered by whoever ran that job.',
              },
              {
                heading: 'Variations priced before they are built',
                body: 'An instruction creates a variation with a value, a status and an effect on the forecast. Unsigned variations show as at-risk work in progress rather than optimism in the cost report.',
              },
              {
                heading: 'Applications reconcile to certificates',
                body: 'What you applied for, what was certified and what was paid sit on the same record, so under-certification is a number with a history rather than an argument.',
              },
              {
                heading: 'Plant charged where it worked',
                body: 'Owned plant is an asset with a day rate that posts to the job it stood on. Hire is a commitment the moment it is ordered. Both hit the same cost line.',
              },
              {
                heading: 'Subcontractor compliance blocks payment',
                body: 'Expired insurance, an out-of-date certificate or a missing tax status stops the payment run rather than surfacing in an audit six months later.',
              },
              {
                heading: 'Cost to complete, not cost incurred',
                body: 'Forecast final cost is rebuilt from commitments, remaining scope and current productivity, so the margin you report is the margin you will end with.',
              },
            ]}
          />
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
                question: 'Do you handle joint ventures and multiple funders?',
                answer: 'A joint venture is an entity in the model with its own ledger and its own share rules. Cost and revenue post once and allocate by the agreed percentages, and each partner\'s statement comes from the same records rather than a separate spreadsheet per venture.',
              },
              {
                question: 'Can it replace our estimating software?',
                answer: 'It is not an estimating tool and we would not pretend otherwise. The estimate imports as the budget structure, and from that point on Flowza owns commitment, actual and forecast. Keeping a specialist estimating package is the normal arrangement.',
              },
              {
                question: 'How does this work with site teams who are not at a desk?',
                answer: 'Site instructions, day-works, plant hours and delivery receipts are captured on a phone against the job and the package. That is the whole point — the commitment is recorded when the order is given, not when the paperwork reaches the office.',
              },
            ]}
          />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks
            className="rv"
            links={[
              { href: '/products/finance', title: 'Flowza Finance', subtitle: 'Retention, WIP and certificates' },
              { href: '/industries/manufacturing', title: 'Manufacturing', subtitle: 'If you fabricate as well as build' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all eight sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
