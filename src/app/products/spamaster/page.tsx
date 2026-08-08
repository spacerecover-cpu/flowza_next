import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { Panel } from '@/components/Panel';
import { Table } from '@/components/Table';
import { KeylineList } from '@/components/KeylineList';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { AppLink, ProductBadges, Metrics, Quote } from '@/components/ProductChrome';
import { SpaBoard } from '@/components/SpaBoard';
import { RebookingLoop } from '@/components/RebookingLoop';
import { CertificationMatrix } from '@/components/CertificationMatrix';
import { SPA_COMBINATIONS, SPA_PACKAGES, SPA_MEASURES } from '@/lib/data/spa';

export const metadata: Metadata = {
  title: 'Flowza Spa Master — bookings, rosters and loyalty for wellness',
  description:
    'Online booking, certification-aware staff scheduling, retail inventory and loyalty for spas and wellness studios, built around the treatment room as the resource that actually runs out.',
};

const METRICS = [
  { value: '42%', label: 'average increase in online bookings' },
  { value: '28%', label: 'fewer no-shows with automated reminders' },
  { value: '3×', label: 'faster front-desk check-in and checkout' },
  { value: '94%', label: 'average client satisfaction score' },
];

const loyaltyItems = [
  {
    heading: 'Redemption tracked per session',
    body: 'Each session consumed is recorded against the package on the same transaction that occupies the room, so the remaining balance is current rather than reconstructed.',
  },
  {
    heading: 'Dormant clients get a campaign',
    body: 'An unredeemed balance going quiet is the clearest reactivation list a spa has. Automated campaigns act on it while the balance is still worth using — a lapsed package is a client who has stopped coming, not just an accounting entry.',
  },
  {
    heading: 'Tiers, packages and vouchers together',
    body: 'One client can hold a tier, a membership and a voucher at once. They resolve at the desk in one step, which is part of why check-out is faster.',
  },
];

const faqItems = [
  {
    question: 'Can clients book themselves online?',
    answer:
      'Yes, around the clock and against real availability — the branded portal reads the same rooms, therapists and service durations the front desk sees, so it cannot create a booking the rota cannot deliver. Booking rules are set per service during setup.',
  },
  {
    question: 'How does the roster handle certifications?',
    answer:
      'As a hard constraint. Schedules are built from availability, certifications and client preferences, and a therapist is not offered against a treatment they are not certified for — in the roster or in the client-facing portal. That is what makes an automatically built schedule safe to publish without checking it by hand.',
  },
  {
    question: 'Do you track product used in treatment separately from retail?',
    answer:
      'Yes. Professional stock consumed in a treatment and the same item sold at reception are different events against one stock position, with cost of goods following what was actually used. Auto-reorder alerts sit on the same position, so a stockout does not arrive as a cancelled appointment.',
  },
  {
    question: 'What actually reduces no-shows?',
    answer:
      'Automated reminders, sized to the appointment and sent without anyone remembering — the published figure is 28 per cent fewer no-shows. The sequence stops the moment a booking arrives by another route, including a walk-in.',
  },
  {
    question: 'We run several locations. Is that one system?',
    answer:
      'One tenant, one client profile. A guest treated at another site arrives with their history, their preferences and their package balance intact, and group reporting does not require consolidating an export from each location.',
  },
];

const relatedLinks = [
  { href: '/products/club', title: 'Flowza Club', subtitle: 'Membership, booking and billing' },
  { href: '/industries/wellness', title: 'Wellness & beauty', subtitle: 'Why the second visit decides' },
  { href: '/products/finance', title: 'Flowza Finance', subtitle: 'Where the revenue posts' },
];

export default function SpaMasterPage() {
  return (
    <>
      {/* HERO */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'center' }}>
            <div className="c-6 rv">
              <div className="pbadge">
                <span className="pbadge__m">
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M9 15.5s5.5-3.4 5.5-7A3.2 3.2 0 009 6.6 3.2 3.2 0 003.5 8.5c0 3.6 5.5 7 5.5 7z"
                      stroke="#F6F6F3"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <span className="pbadge__t">Flowza Spa Master</span>
              </div>
              <h1 className="d-xl" style={{ marginBottom: 'var(--s5)' }}>
                The room is<br />the constraint.
              </h1>
              <p className="lede" style={{ marginBottom: 'var(--s5)' }}>
                Bookings, rosters and loyalty for wellness. Therapists can be rostered and products can
                be reordered. Treatment rooms are fixed. Spa Master schedules against the resource that
                actually runs out — clients booking themselves in around the clock, rosters that build
                themselves from availability and certifications, and stock, memberships and analytics in
                the same place.
              </p>
              <ProductBadges badges={['Online booking', 'Staff scheduling', 'Loyalty programs']} />
              <div className="row">
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <AppLink host="spamaster.flowza.ai" />
              </div>
            </div>

            <div className="c-6 rv rv-d2">
              <div className="occ">
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <span
                    className="mono"
                    style={{ fontSize: '.625rem', letterSpacing: '.11em', color: 'var(--fg-3)' }}
                  >
                    ROOM OCCUPANCY · TODAY
                  </span>
                  <span className="tag tag--sig">5 rooms</span>
                </div>
                <div className="occ__bars" aria-hidden="true">
                  <div style={{ height: '42%' }} /><div style={{ height: '68%' }} /><div style={{ height: '88%' }} />
                  <div style={{ height: '84%' }} /><div style={{ height: '58%' }} /><div style={{ height: '52%' }} />
                  <div style={{ height: '78%' }} /><div style={{ height: '96%' }} /><div style={{ height: '90%' }} />
                  <div style={{ height: '46%' }} />
                </div>
                <div className="occ__hrs" aria-hidden="true">
                  <span>09</span><span>10</span><span>11</span><span>12</span><span>13</span>
                  <span>14</span><span>15</span><span>16</span><span>17</span><span>18</span>
                </div>
                <p className="sr">
                  Room occupancy today peaks at 96 percent between 16:00 and 17:00 and falls to 42
                  percent at opening.
                </p>
                <div className="occ__row">
                  <div className="stat">
                    <span className="stat__n">71%</span>
                    <span className="stat__l">Occupancy on available room-hours</span>
                  </div>
                  <div className="stat">
                    <span className="stat__n">64%</span>
                    <span className="stat__l">Left having rebooked</span>
                  </div>
                </div>
              </div>
              <p className="tiny rv" style={{ marginTop: 'var(--s4)' }}>
                An illustrative day at a five-room site. The two figures are measures Spa Master reports
                daily rather than published averages.
              </p>
            </div>
          </Cols>

          <hr className="rule rv" style={{ margin: 'clamp(40px,5vw,var(--s8)) 0 var(--s6)' }} />

          <div className="rv">
            <Metrics items={METRICS} />
          </div>
        </Wrap>
      </Chapter>

      {/* DAY BOARD */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>The day board</Eyebrow>
            <h2 className="d-l">
              Gaps are the number<br />that matters.
            </h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              A full-looking diary can still be an unprofitable day. Select an appointment to see what
              it contributes once the therapist, the room hour and the products consumed in the
              treatment are counted against it.
            </p>
          </div>
          <SpaBoard />
          <p className="tiny rv" style={{ marginTop: 'var(--s4)' }}>
            Illustrative day. Room 4 carries a two-hour gap from opening and Room 3 empties after 16:30
            — both visible while there is still time to fill them.
          </p>

          <Cols style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-6 rv">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>
                The same calendar, open to the client
              </h3>
              <ul className="klist" style={{ borderTopColor: 'var(--edge)' }}>
                <li>
                  <h4>A branded portal, open 24/7</h4>
                  <p className="small">
                    Your own booking portal on any device, at the hours when people actually decide to
                    book a treatment. Share the link or embed it on your site.
                  </p>
                </li>
                <li>
                  <h4>Live availability, real durations</h4>
                  <p className="small">
                    The portal reads the same rooms, therapists and service durations the front desk
                    sees, so it cannot offer a slot the rota cannot deliver.
                  </p>
                </li>
                <li>
                  <h4>Therapist preferences honoured</h4>
                  <p className="small">
                    A client who asks for the same practitioner every time gets the availability of
                    that practitioner, which is usually the reason they book with you rather than
                    nearby.
                  </p>
                </li>
              </ul>
            </div>
            <div className="c-6 rv rv-d2">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>
                Two kinds of product, one stock position
              </h3>
              <ul className="klist" style={{ borderTopColor: 'var(--edge)' }}>
                <li>
                  <h4>Used in treatment, and sold at reception</h4>
                  <p className="small">
                    Professional stock consumed in a treatment and retail stock sold at the desk are
                    tracked separately in purpose but draw on one position, which is what makes the
                    contribution figure on the board real rather than estimated.
                  </p>
                </li>
                <li>
                  <h4>Auto-reorder alerts</h4>
                  <p className="small">
                    Cover is watched per item so a treatment on next week&rsquo;s diary is not booked
                    against a product nobody ordered.
                  </p>
                </li>
                <li>
                  <h4>COGS tracked, margins protected</h4>
                  <p className="small">
                    Cost of goods follows what was actually consumed, so a treatment&rsquo;s margin
                    holds when supplier prices move.
                  </p>
                </li>
              </ul>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* RETENTION LOOP */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Retention</Eyebrow>
              <h2 className="d-l">
                The loop that decides<br />whether they<br />come back.
              </h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Rebooking is one of the four numbers this system reports, and the decisive moment for it
                is the ninety seconds at the till. Every stage of the loop runs off one client profile —
                every visit, preference, treatment note and purchase — so a therapist walks into the
                room already prepared. Select a stage to see what the platform does there.
              </p>
            </div>
          </Cols>
          <RebookingLoop />
          <p className="tiny rv" style={{ marginTop: 'var(--s5)', maxWidth: '84ch' }}>
            The reminder stage is where the published 28 per cent reduction in no-shows comes from: a
            message sized to the recommended interval, sent without anyone remembering to send it.
          </p>
        </Wrap>
      </Chapter>

      {/* THE ROSTER ENGINE — THE CERTIFICATION MATRIX */}
      <Chapter>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-6 rv">
              <Eyebrow>The roster engine</Eyebrow>
              <h2 className="d-l">
                A roster is only fast<br />if it is also<br />allowed.
              </h2>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                Schedules are built automatically from availability, certifications and client
                preferences. The certification is the part that matters: a therapist can only be
                scheduled against a treatment they are certified for, which is what makes an automatic
                roster trustworthy rather than merely quick. Take the constraint away and you have a
                system that fills a diary with appointments nobody on shift can deliver.
              </p>
            </div>
          </Cols>
          <Cols>
            <div className="c-7 rv">
              <Panel style={{ padding: 'var(--s5)' }}>
                <div className="tw">
                  <CertificationMatrix />
                </div>
                <div className="smkey">
                  <span><i className="smcert__y">●</i>Certified, bookable</span>
                  <span><i className="smcert__n">·</i>Not certified, not offered</span>
                </div>
              </Panel>
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                The five therapists on the day board above. A certification that lapses removes the
                combination from the roster and from the portal at the same moment, rather than being
                noticed when a client is already in the room.
              </p>
            </div>
            <div className="c-5 rv rv-d2">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>What falls out of the matrix</h3>
              <ul className="smcomb">
                {SPA_COMBINATIONS.map((c) => (
                  <li key={c.treatment}>
                    <span className="smcomb__t">
                      {c.treatment}
                      <span className="smcomb__w">{c.constraint}</span>
                    </span>
                    <span className="smcomb__d">{c.description}</span>
                  </li>
                ))}
              </ul>
              <p className="small" style={{ marginTop: 'var(--s5)' }}>
                Read the other way, the matrix is a training plan. A second hot-stone certification is
                the cheapest capacity this site can buy, and it is visible here rather than in a
                conversation about why the treatment never gets sold.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* LOYALTY AND MEMBERSHIPS */}
      <Chapter variant="raised">
        <Wrap>
          <Cols>
            <div className="c-5 rv">
              <Eyebrow>Loyalty and memberships</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                Sold is not<br />the same as<br />redeemed
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Tiered loyalty, membership packages and gift vouchers all create the same obligation:
                sessions someone has paid for and not yet taken. Spa Master tracks what has been sold
                against what has actually been delivered, per package, so the balance outstanding is a
                number you can act on rather than a surprise at renewal.
              </p>
              <KeylineList items={loyaltyItems} style={{ borderTopColor: 'var(--edge)' }} />
            </div>
            <div className="c-7 rv rv-d2">
              <Panel style={{ padding: 'var(--s5)' }}>
                <div className="tw">
                  <Table
                    caption="Package and voucher balances by product, showing value sold, value redeemed, the balance outstanding, and the share of that balance held by clients who have not visited in ninety days"
                    headers={['Package', 'Sold', 'Redeemed', 'Outstanding', 'Dormant 90d']}
                    rows={SPA_PACKAGES.map((p) => [
                      p.product,
                      p.sold,
                      p.redeemed,
                      p.outstanding,
                      p.dormant,
                    ])}
                  />
                </div>
                <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                  Illustrative figures in AED. The final column is the reactivation list: value sitting
                  with clients who have not been in for ninety days. On this site it is the annual
                  facial membership and the gift vouchers that need a campaign, and neither is obvious
                  from the sales column alone. Spa Master tracks each unredeemed balance and its age, so
                  the deferred revenue figure your accountant asks for at period end is a report rather
                  than a reconstruction.
                </p>
              </Panel>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* REVENUE ANALYTICS AND HOW IT WORKS */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Revenue analytics</Eyebrow>
              <h2 className="d-l">
                Four measures, live,<br />and each one has<br />an action attached.
              </h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                The point of measuring a spa is not a monthly report. It is knowing by Tuesday afternoon
                which window to protect, which therapist to keep and which service is quietly carrying
                the site.
              </p>
            </div>
          </Cols>
          <Cols>
            <div className="c-7 rv">
              <div className="smnum">
                {SPA_MEASURES.map((m) => (
                  <div className="smnum__r" key={m.name}>
                    <div>
                      <p className="smnum__k">{m.name}</p>
                      <span className="smnum__u">{m.unit}</span>
                    </div>
                    <p className="small">{m.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="c-5 rv rv-d2">
              <Eyebrow>How it works</Eyebrow>
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>Open in an afternoon</h3>
              <ul className="smstep">
                <li>
                  <span className="smstep__n">01</span>
                  <div>
                    <h4>Set up your space</h4>
                    <p className="small">
                      Add services, staff, treatment rooms and hours. Import existing client records and
                      set booking rules in under an hour.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="smstep__n">02</span>
                  <div>
                    <h4>Open the calendar</h4>
                    <p className="small">
                      Share your branded booking link or embed it on your site. Clients self-book,
                      rosters update on their own, and reminders send themselves.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="smstep__n">03</span>
                  <div>
                    <h4>Grow on the numbers</h4>
                    <p className="small">
                      Daily analytics surface your highest-value clients, best services and peak windows
                      — then targeted promotions act on them.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Cols>

          <Cols style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Quote name="Priya Nair" role="Owner, Serenity Wellness Studios">
                {'“FlowZa Spa Master transformed how we run our three locations. The staff scheduling alone saves us 10+ hours a week, and our clients love the seamless booking experience. Rebooking rates went up 35% in the first quarter.”'}
              </Quote>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="small">
                Spa Master runs on its own app subdomain, on its own subscription, and holds its own
                records. Across your sites that means one client profile: a guest who buys a product at
                reception, a package balance carried from another location, and the revenue those
                produce sit together rather than in three separate site systems.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions operators ask</h2>
          <FAQ items={faqItems} className="rv" />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks links={relatedLinks} className="rv" />
        </Wrap>
      </Chapter>
    </>
  );
}
