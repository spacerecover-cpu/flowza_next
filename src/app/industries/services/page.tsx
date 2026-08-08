import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';
import { UtilisationHeatGrid } from '@/components/UtilisationHeatGrid';
import { RealisationFunnel } from '@/components/RealisationFunnel';

export const metadata: Metadata = {
  title: 'Professional services — Flowza',
  description:
    'Utilisation by person rather than an average, and the leak between hours worked and cash collected. Time, billing and the ledger on one set of records.',
};

export default function ServicesPage() {
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
                Professional Services
              </p>
              <h1 className="d-xl">
                You sell hours you<br />have already<br />spent.
              </h1>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                Inventory in a services firm is time, and it perishes nightly. An average utilisation figure hides the two failures that actually cost money — the people who are quietly under-loaded, and the people who are over-loaded until they leave.
              </p>
              <div className="row" style={{ marginTop: 'var(--s6)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <Link className="btn btn--ghost" href="/solutions">For the CFO</Link>
              </div>
            </div>
          </Cols>

          <div className="panel rv" style={{ padding: 'var(--s6)' }}>
            <div className="row" style={{ justifyContent: 'space-between', marginBottom: 'var(--s5)' }}>
              <span className="mono" style={{ fontSize: '.625rem', letterSpacing: '.11em', color: 'var(--fg-3)' }}>
                UTILISATION BY PERSON · LAST 12 WEEKS
              </span>
              <span className="tag tag--sig">Team average 74%</span>
            </div>
            <div className="dscroll" style={{ ['--dmin' as string]: '660px' }}>
              <UtilisationHeatGrid />
            </div>
            <div className="heat__key">
              <span><i className="heat__c u1" style={{ aspectRatio: 'auto' }} />Under 50%</span>
              <span><i className="heat__c u2" style={{ aspectRatio: 'auto' }} />50–65%</span>
              <span><i className="heat__c u3" style={{ aspectRatio: 'auto' }} />65–80%</span>
              <span><i className="heat__c u4" style={{ aspectRatio: 'auto' }} />80–95%</span>
              <span><i className="heat__c u5" style={{ aspectRatio: 'auto' }} />Over 95%</span>
            </div>
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              Two people have run above ninety-five per cent for three consecutive weeks and two have sat below sixty-five for most of the quarter. The 74% average describes nobody. Resourcing decisions get made against the grid, not the average.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* REALISATION */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Realisation</Eyebrow>
              <h2 className="d-l">A quarter of the work<br />never reaches<br />the bank.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Every stage between doing the work and being paid for it leaks, and each leak is invisible on its own. Together they are usually the largest number in the business nobody manages.
              </p>
            </div>
          </Cols>
          <div className="panel rv" style={{ padding: 'var(--s6)' }}>
            <div className="dscroll" style={{ ['--dmin' as string]: '640px' }}>
              <RealisationFunnel />
            </div>
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              Each stage is a different team&apos;s problem, which is why nobody owns the total. When time, billing and the ledger are the same records, the leak is one report rather than four reconciliations.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* WHAT CHANGES */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>What changes</Eyebrow>
            <h2 className="d-l">Recognise revenue as<br />you earn it, not<br />as you invoice it.</h2>
          </div>
          <KeylineList
            twoCol
            className="rv"
            items={[
              {
                heading: 'Time posts to the project and the ledger at once',
                body: 'One write, not a nightly export. Work in progress is a real balance you can walk down to a person and an hour, which is what makes revenue recognition an output rather than a monthly estimate.',
              },
              {
                heading: 'Write-offs need a reason and an approver',
                body: 'A non-billable hour is a decision. Recording who made it and why turns thirteen anonymous points of leakage into a list of conversations with named clients.',
              },
              {
                heading: 'Rate cards enforced where the work is booked',
                body: 'The rate is resolved from the engagement, the grade and the agreed discount at the moment time is entered, not corrected by a finance team three weeks later.',
              },
              {
                heading: 'Subcontractors sit on the same margin line',
                body: 'Bought-in delivery is a cost of the engagement, so blended margin is visible per project rather than emerging at year end when the purchase ledger is reconciled.',
              },
              {
                heading: 'Scope changes are contract events',
                body: 'A variation updates the engagement value, the forecast and the invoice schedule together. Unapproved scope shows as unbilled work in progress rather than disappearing into goodwill.',
              },
              {
                heading: 'Pipeline meets capacity',
                body: 'Weighted pipeline is compared against the actual grid above, so a resourcing decision can be made before the deal closes rather than the week the work starts.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions services firms ask</h2>
          <FAQ
            className="rv"
            items={[
              {
                question: 'Do you support fixed price as well as time and materials?',
                answer: 'Yes, and retainers and capped time and materials alongside them. Fixed price recognises revenue on progress rather than invoicing, which means the percentage-complete calculation has to come from real booked time — that is the reason it usually goes wrong, and the reason it works here.',
              },
              {
                question: 'Will consultants actually fill in timesheets?',
                answer: 'More of them, sooner, because entry happens against the work they already have open rather than in a separate system on Friday afternoon. We do not claim to solve this completely. The six points of unrecorded time above is a realistic figure after deployment, not zero.',
              },
              {
                question: 'Can we keep our practice management tool?',
                answer: 'You can, but it reintroduces the export between time and the ledger, which is where realisation goes missing. Most firms move it because the reconciliation was the cost they were trying to remove.',
              },
            ]}
          />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks
            className="rv"
            links={[
              { href: '/products/finance', title: 'Flowza Finance', subtitle: 'Revenue recognition and WIP' },
              { href: '/solutions', title: 'Office of the CFO', subtitle: 'The close, and what it hides' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all eight sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
