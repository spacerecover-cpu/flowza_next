import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';
import { CohortGrid } from '@/components/CohortGrid';
import { LtvLadder } from '@/components/LtvLadder';

export const metadata: Metadata = {
  title: 'Wellness and beauty — Flowza AI',
  description:
    'The second visit decides the lifetime. Cohort retention, contribution per guest and one guest record across every site.',
};

export default function WellnessPage() {
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
                Wellness &amp; Beauty
              </p>
              <h1 className="d-xl">
                The second visit<br />decides the<br />lifetime.
              </h1>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                Acquisition is the number most operators watch, and it is the least controllable one. What separates a good month from a good year is whether the first-time guest comes back once — after that, behaviour is remarkably stable.
              </p>
              <div className="row" style={{ marginTop: 'var(--s6)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <Link className="btn btn--ghost" href="/products/spamaster">Flowza Spa Master</Link>
              </div>
            </div>
          </Cols>

          <div className="panel rv" style={{ padding: 'var(--s6)' }}>
            <div className="row" style={{ justifyContent: 'space-between', marginBottom: 'var(--s5)' }}>
              <span className="mono" style={{ fontSize: '.625rem', letterSpacing: '.11em', color: 'var(--fg-3)' }}>
                RETENTION BY JOINING COHORT · % STILL ACTIVE
              </span>
              <span className="tag tag--sig">Rebooking at the till from May</span>
            </div>
            <div className="dscroll" style={{ ['--dmin' as string]: '580px' }}>
              <CohortGrid />
            </div>
            <div className="coh__note">
              <p className="small">
                Read down the M1 column, not across the rows. February to April sit between 55 and 61. May and June sit at 64 and 67 — the two cohorts that were offered a rebooking at the till before they left the building. Three points of month-one retention is worth more than a month of paid acquisition, and it cost nothing.
              </p>
            </div>
          </div>
        </Wrap>
      </Chapter>

      {/* WHAT A GUEST IS WORTH */}
      <Chapter variant="raised">
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>What a guest is worth</Eyebrow>
              <h2 className="d-l">Contribution compounds<br />faster than<br />you think.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                The first visit barely covers the cost of winning it. Everything after it is margin, and the curve steepens because returning guests book higher-value treatments and attach retail at roughly twice the rate.
              </p>
            </div>
          </Cols>
          <div className="panel rv" style={{ padding: 'var(--s6)' }}>
            <div className="dscroll" style={{ ['--dmin' as string]: '600px' }}>
              <LtvLadder />
            </div>
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              Contribution here is after therapist cost, room hour and product consumed — the same figures the day board shows per appointment. A guest who reaches their sixth visit is worth five and a half times one who stops at the first.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* ACROSS SITES */}
      <Chapter variant="instrument" net>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Across sites</Eyebrow>
            <h2 className="d-l">One guest record,<br />however many<br />locations.</h2>
          </div>
          <KeylineList
            twoCol
            className="rv"
            items={[
              {
                heading: 'Memberships travel',
                body: 'A guest treated at another site arrives with their balance, their history and their preferences intact. Nothing is transferred and nothing needs reconciling between locations at month end.',
              },
              {
                heading: 'Therapist retention is a business metric',
                body: 'Rebooking rate, retail attach and repeat requests are attributes of the practitioner as well as the site. Losing a strong therapist is a measurable revenue event, which is a better argument for retaining them than a feeling.',
              },
              {
                heading: 'Prepaid balances are a liability',
                body: 'Unredeemed packages sit on the balance sheet and release as treatments are performed, so cash from a good January is not mistaken for revenue.',
              },
              {
                heading: 'Retail and professional stock are separated',
                body: 'Product consumed in a treatment is a cost of that treatment; the same item sold at reception is retail revenue. Both draw on one stock position, which is what makes treatment margin real.',
              },
              {
                heading: 'Peak hours protected deliberately',
                body: 'Booking rules can reserve the highest-contribution windows for the treatments that earn most per room hour, rather than filling them first-come and discovering the cost afterwards.',
              },
              {
                heading: 'Campaigns aimed at a cohort',
                body: 'A reactivation campaign targets the guests whose interval has actually lapsed, drawn from booking history rather than a list that was exported three weeks ago.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter>
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions operators ask</h2>
          <FAQ
            className="rv"
            items={[
              {
                question: 'We already have a booking system that our guests like. Why change?',
                answer: 'If it reads real room and therapist constraints and posts revenue to your ledger without an export, keep it. Most do neither, which is why the retention analysis above is impossible to produce in the systems that generated the bookings.',
              },
              {
                question: 'Can we run franchise and owned sites together?',
                answer: 'Yes. A franchised site is a separate entity with its own ledger, sharing the guest record and the brand\'s treatment catalogue. Royalty and marketing levies calculate from the same transactions rather than from a monthly return the franchisee prepares.',
              },
              {
                question: 'How long before the cohort view is meaningful?',
                answer: 'You need one full interval cycle, which for most treatments is six to eight weeks, before the month-one column says anything. Historical bookings can be imported to backfill earlier cohorts if the data is clean enough to trust, and we will tell you if it is not.',
              },
            ]}
          />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks
            className="rv"
            links={[
              { href: '/products/spamaster', title: 'Flowza Spa Master', subtitle: 'The day board and the loop' },
              { href: '/industries/retail', title: 'Retail & Hospitality', subtitle: 'Retail attach and space' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all eight sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
