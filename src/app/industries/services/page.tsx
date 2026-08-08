import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';
import { EntityCloseBoard } from '@/components/EntityCloseBoard';

/**
 * Rewritten to what the nine actually do for a services firm.
 *
 * The previous version was built on per-person utilisation grids and a
 * realisation funnel from work in progress to cash. Neither exists: no
 * application in the catalogue captures time, and none carries work in
 * progress. What is real is the billing, the ledger, multi-currency and
 * multi-entity, payroll, and the appraisal and increment cycle.
 */
export const metadata: Metadata = {
  title: 'Professional services — FlowZa AI',
  description:
    'The books and the people, not the timesheets. FlowZa Finance for billing, the ledger and statutory payroll; FlowZa PMS for appraisal and increment cycles across India and the Gulf.',
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
                The books and<br />the people, not<br />the timesheets.
              </h1>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                A services firm sells its people, so the two things that decide the year are what you bill
                and how you pay. FlowZa AI covers both — invoicing and the ledger on one side, appraisal and
                increments on the other. It does not capture time, and it is honest about that.
              </p>
              <div className="row" style={{ marginTop: 'var(--s6)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">&rarr;</span>
                </Link>
                <Link className="btn btn--ghost" href="/solutions/finance">For the CFO</Link>
              </div>
            </div>
          </Cols>

          <div className="rv">
            <p className="mono" style={{ fontSize: '.625rem', letterSpacing: '.12em', color: 'var(--fg-3)', marginBottom: 'var(--s4)' }}>
              THREE ENTITIES AT CLOSE · FLOWZA FINANCE
            </p>
            <EntityCloseBoard />
            <p className="tiny" style={{ marginTop: 'var(--s4)', maxWidth: '78ch' }}>
              Illustrative. Each entity keeps its own functional currency, tax registration and
              chart-of-accounts pack, and the period lock is per entity — so one company can close while
              another is still in review.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* WHAT IT COVERS */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>What it covers</Eyebrow>
            <h2 className="d-l">Two applications,<br />bought separately.</h2>
          </div>
          <KeylineList
            twoCol
            className="rv"
            items={[
              {
                heading: 'FlowZa Finance — billing and the ledger',
                body: 'Client invoicing, purchases, the double-entry books, multi-entity consolidation and multi-currency translation at close, with GST for India and VAT and corporate tax for the Gulf built in.',
              },
              {
                heading: 'FlowZa Finance — payroll and HR',
                body: 'EPF, ESI, professional tax and gratuity for India; WPS bank files for the UAE; social insurance for Oman and GOSI for Saudi Arabia. The statutory half of paying people, maintained as the rules change.',
              },
              {
                heading: 'FlowZa PMS — the appraisal cycle',
                body: 'KRA and KPI cycles with self, manager and reviewer stages, calibrated across partners before anything is communicated, so a rating is defensible rather than a matter of who argued hardest.',
              },
              {
                heading: 'FlowZa PMS — increments and letters',
                body: 'Compensation resolved against the statutory rules of each person’s country, preserving the component structure of their salary, closing with a letter a bank or a landlord can verify on a public page.',
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
              Services firms usually shop for a practice management system first. That is not what this is,
              and the gap is worth stating before a demo rather than after one.
            </p>
          </div>
          <KeylineList
            className="rv"
            items={[
              {
                heading: 'No time capture',
                body: 'There is no timesheet, no timer and no time entry in any of the nine. Hours worked are not recorded, so nothing downstream of them can be computed.',
              },
              {
                heading: 'No utilisation or resourcing',
                body: 'Chargeable percentage per person, bench time and forward resourcing against pipeline are outside the product.',
              },
              {
                heading: 'No work in progress or realisation',
                body: 'Unbilled work in progress, write-off analysis and the leak between hours delivered and cash collected are not modelled, because the hours are not modelled.',
              },
              {
                heading: 'No engagement or project ledger',
                body: 'Revenue is recognised against invoices in the ledger, not accrued against engagement completion. Project profitability is not a report FlowZa AI produces.',
              },
            ]}
          />
          <p className="tiny rv" style={{ marginTop: 'var(--s6)' }}>
            Firms commonly keep a practice management or time-recording tool and use FlowZa Finance for the
            books and statutory filing, and FlowZa PMS for the review cycle. Each application exposes its own
            API for the handover.
          </p>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter>
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions services firms ask</h2>
          <FAQ
            className="rv"
            items={[
              {
                question: 'Can we invoice from it?',
                answer:
                  'Yes. FlowZa Finance raises client invoices, applies the right tax treatment for the jurisdiction, and posts them to the ledger. What it cannot do is build the invoice from recorded hours, because hours are not recorded — the value has to come in from wherever you capture time.',
              },
              {
                question: 'We operate in three countries. Does that work?',
                answer:
                  'That is the case FlowZa Finance is built for. Each entity keeps its own functional currency, tax registration and chart-of-accounts pack, period locks are per entity, and group reporting reads the entities rather than consolidating exports from them.',
              },
              {
                question: 'Does PMS replace our HR system?',
                answer:
                  'It replaces the appraisal and increment half of one. Review cycles, calibration and compensation decisions live in FlowZa PMS. Recruitment, onboarding, leave and the employee record itself do not.',
              },
              {
                question: 'Which should we start with?',
                answer:
                  'Most firms start with Finance, because the close and the statutory filing are the urgent problem and the incumbent is usually an accounting package that has been outgrown. PMS is a separate decision, on a separate subscription, usually taken at the start of a review cycle.',
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
              { href: '/products/finance', title: 'FlowZa Finance', subtitle: 'Accounting, ERP and payroll on one ledger' },
              { href: '/products/pms', title: 'FlowZa PMS', subtitle: 'Rate, calibrate and pay on one system' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all seven sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
