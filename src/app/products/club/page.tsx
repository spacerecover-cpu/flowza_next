import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { Card } from '@/components/Card';
import { Panel } from '@/components/Panel';
import { FAQ } from '@/components/FAQ';
import { KeylineList } from '@/components/KeylineList';
import { RelatedLinks } from '@/components/RelatedLinks';
import { AppLink, ProductBadges, Metrics, Quote } from '@/components/ProductChrome';
import { ClubMembershipCard } from '@/components/ClubMembershipCard';
import { ClubBookingGrid } from '@/components/ClubBookingGrid';
import { ClubRaceDiagram } from '@/components/ClubRaceDiagram';
import { ClubChit } from '@/components/ClubChit';
import { ClubPosting } from '@/components/ClubPosting';
import { ClubStatement } from '@/components/ClubStatement';
import { ClubVerticals } from '@/components/ClubVerticals';
import {
  CLUB_BADGES,
  CLUB_CHANNEL_POINTS,
  CLUB_CONSTANTS,
  CLUB_FAQ,
  CLUB_MECHANISMS,
  CLUB_METRICS,
  CLUB_RELATED,
  CLUB_STEPS,
  CLUB_WHATSAPP,
} from '@/lib/data/club';

export const metadata: Metadata = {
  title: 'FlowZa Club — membership, booking and billing for clubs',
  description:
    'Membership and household billing, a double-entry ledger that ties out, charge-to-account registers across every outlet, and a booking engine where double-bookings are impossible by construction.',
};

export default function ClubPage() {
  return (
    <>
      {/* HERO — the membership card and the account it charges against */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'center' }}>
            <div className="c-6 rv">
              <div className="pbadge">
                <span className="pbadge__m">
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M5.4 16V2.6l7.4 2.6-7.4 2.6" stroke="#F6F6F3" strokeWidth="1.6" strokeLinejoin="round" />
                    <circle cx="13.2" cy="14.4" r="1.5" stroke="#F6F6F3" strokeWidth="1.4" />
                  </svg>
                </span>
                <span className="pbadge__t">FlowZa Club</span>
              </div>
              <h1 className="d-xl" style={{ marginBottom: 'var(--s5)' }}>
                The slot cannot<br />be sold twice.
              </h1>
              <p className="lede" style={{ marginBottom: 'var(--s5)' }}>
                Membership, booking and billing for clubs. Dues, tabs and chits settle into a
                double-entry ledger that ties out; bookings are structurally protected against
                conflicts; members book over two-way WhatsApp or a branded, passwordless portal —
                across golf, racquet, marina, fitness, dining and events, in one club or a group.
              </p>
              <ProductBadges badges={CLUB_BADGES} />
              <div className="row">
                <Link className="btn btn--primary" href="/pricing">
                  Start a 14-day trial <span className="arw">→</span>
                </Link>
                <AppLink host="club.flowza.ai" />
              </div>
            </div>

            <div className="c-6 rv rv-d2">
              <ClubMembershipCard />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Illustrative household, AED. The card is the member record: one identity across every
                facility, and one account that every outlet can charge against.
              </p>
            </div>
          </Cols>

          <hr className="rule rv" style={{ margin: 'clamp(40px,5vw,var(--s8)) 0 var(--s6)' }} />
          <div className="rv">
            <Metrics items={CLUB_METRICS} />
          </div>
        </Wrap>
      </Chapter>

      {/* THE ZERO-DOUBLE-BOOK ENGINE */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Zero-double-book engine</Eyebrow>
              <h2 className="d-l">Two members,<br />one tee time,<br />the same instant.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Most booking systems check whether a slot is free and then write the booking. Those
                are two statements, and between them sits a gap wide enough for a second member to
                walk through. Club does not check. The write itself is the check, declared once on the
                resource and enforced by the database, so a conflicting booking is not caught late —
                it cannot be created.
              </p>
            </div>
          </Cols>

          <p className="body-l rv" style={{ maxWidth: '78ch', marginBottom: 'var(--s6)' }}>
            Select any empty slot below. Two members will request it at the same instant, as they do
            at 07:00 on a Saturday.
          </p>

          <ClubBookingGrid>
            <h3 className="d-s" style={{ marginBottom: 'var(--s4)' }}>Declared once, on the resource</h3>
            <p className="small" style={{ marginBottom: 'var(--s5)' }}>
              This is the whole of it. One constraint on the booking table, indexed by resource and by
              the period the booking occupies. Two overlapping rows for the same resource cannot both
              exist, whatever the application layer believes.
            </p>
            <pre className="clbsql">
              <b>ALTER TABLE</b>
              {' booking\n  '}
              <b>ADD CONSTRAINT</b>
              {' booking_no_overlap\n  '}
              <b>EXCLUDE USING gist</b>
              {' (\n    resource_id '}
              <b>WITH</b>
              {' =,\n    during      '}
              <b>WITH</b>
              {' &&\n  ) '}
              <b>WHERE</b>
              {" (status <> 'cancelled');"}
            </pre>
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              Availability is evaluated in the club&rsquo;s own timezone, including the hour a
              daylight-saving change removes. Cancellation cutoffs, dynamic pricing by day-part and
              tier, and waitlist position are all attributes of the same booking row.
            </p>
          </ClubBookingGrid>

          <h3 className="d-m rv" style={{ margin: 'clamp(48px,6vw,var(--s9)) 0 var(--s5)' }}>
            An application check races.<br />A constraint cannot.
          </h3>
          <p className="lede rv" style={{ marginBottom: 'var(--s6)' }}>
            The difference is one gap. On the left, the read and the write are separate, so both
            requests read a free slot and both write. On the right there is no read to be stale — the
            second write meets the constraint and is refused, with a SQLSTATE you can catch and turn
            into a waitlist offer.
          </p>
          <ClubRaceDiagram />
        </Wrap>
      </Chapter>

      {/* CHARGE-TO-ACCOUNT — the chit becomes a journal entry */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Charge-to-account</Eyebrow>
            <h2 className="d-l">A signature at the pro shop<br />is a journal entry.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              This is what separates a club from a restaurant. A member does not pay at the till; they
              sign. The chit becomes a line on a household account, and dues, tabs, chits and green
              fees settle into one double-entry ledger — which is only worth anything if it refuses to
              accept an entry that does not balance.
            </p>
          </div>

          <Cols style={{ alignItems: 'start' }}>
            <div className="c-5 rv">
              <ClubChit />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                AED. No card, no cash, no settlement at the outlet. The member&rsquo;s obligation is
                created at the moment of signature and the outlet&rsquo;s revenue is recognised on the
                same transaction.
              </p>
            </div>

            <div className="c-7 rv rv-d2">
              <ClubPosting />
              <p className="tiny" style={{ marginTop: 'var(--s4)', maxWidth: '70ch' }}>
                A ledger that accepts a lopsided entry is a spreadsheet with an audit trail. Club
                rejects the write, so the chit stays unsettled and appears on the drift report rather
                than quietly shifting eighteen dirhams of tax into revenue.
              </p>
            </div>
          </Cols>

          <Cols style={{ marginTop: 'clamp(48px,6vw,var(--s9))', alignItems: 'start' }}>
            <div className="c-7 rv">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>One statement, four kinds of charge</h3>
              <Panel style={{ padding: 'var(--s5)' }}>
                <ClubStatement />
                <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                  AED, illustrative. Service charge applies where the club has set it — dining here,
                  not retail. Every column adds down and the three components add across: 16,460 plus
                  200 plus 833 is 17,493, which is the balance on the card at the top of this page.
                </p>
              </Panel>
            </div>
            <div className="c-5 rv rv-d2">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>The three mechanisms behind it</h3>
              <ul className="klist" style={{ borderTopColor: 'var(--edge)' }}>
                {CLUB_MECHANISMS.map((m) => (
                  <li key={m.heading}>
                    <h4>{m.heading}</h4>
                    <p className="small">{m.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* SIX FACILITY VERTICALS */}
      <Chapter net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-6 rv">
              <Eyebrow>Six facility verticals</Eyebrow>
              <h2 className="d-l">Six things to book.<br />One thing doing<br />the booking.</h2>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                Golf, racquet, marina, fitness, dining and events are not six products. They are six
                answers to one question — what is the bookable resource — put through the same engine.
                Select a vertical to see what changes, and what stays exactly where it was.
              </p>
            </div>
          </Cols>

          <ClubVerticals>
            <div className="clbfix">
              <Eyebrow plain style={{ marginBottom: 'var(--s2)' }}>Constant across all six</Eyebrow>
              <p className="small">
                Everything below is shared, not replicated per vertical. That is the whole reason the
                six sit on one engine rather than in six systems that have to agree with each other
                afterwards.
              </p>
              <ul>
                {CLUB_CONSTANTS.map((c) => (
                  <li key={c.term}>
                    <b>{c.term}</b>
                    <span>{c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ClubVerticals>
        </Wrap>
      </Chapter>

      {/* WHATSAPP AND THE MEMBER PORTAL */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>WhatsApp and the member portal</Eyebrow>
              <h2 className="d-l">Members do not want<br />an app. They want<br />a reply.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Two-way WhatsApp with an AI agent that books, reschedules and lets a member verify
                themselves — plus a branded, passwordless portal and the digital membership card for
                anyone who prefers a screen at the gate. Both read the live availability the
                constraint protects, so neither can promise a slot the club cannot deliver.
              </p>
            </div>
          </Cols>

          <Cols style={{ alignItems: 'start' }}>
            <div className="c-6 rv">
              <div className="clbwa">
                {CLUB_WHATSAPP.map((m, i) => (
                  <div className={`clbwa__m clbwa__m--${m.direction}`} key={i}>
                    <span className="clbwa__w">{m.who}</span>
                    <p>{m.text}</p>
                  </div>
                ))}
              </div>
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Illustrative thread. A member&rsquo;s first message from an unrecognised number is
                answered with a verification step rather than a booking: they reply with their
                membership number, the number is bound to the member record, and every later message
                is already authenticated.
              </p>
            </div>
            <div className="c-6 rv rv-d2">
              <KeylineList
                items={CLUB_CHANNEL_POINTS.map((p) => ({ heading: p.heading, body: p.body }))}
                style={{ borderTopColor: 'var(--edge)' }}
              />
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* HOW IT WORKS, AND THE QUOTE */}
      <Chapter variant="raised">
        <Wrap>
          <Cols style={{ alignItems: 'start' }}>
            <div className="c-7 rv">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s7)' }}>
                Six steps to open, then the club runs
              </h2>
              <ul className="clbstep">
                {CLUB_STEPS.map((s) => (
                  <li key={s.n}>
                    <span className="clbstep__n">{s.n}</span>
                    <div>
                      <h3>{s.heading}</h3>
                      <p className="small">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="c-5 rv rv-d2">
              <Quote name="Rohan Mehta" role="General Manager, Whitefield Golf & Country Club">
                {'“We replaced four disconnected systems with FlowZa Club. Members book courts and dining over WhatsApp, every charge flows to one ledger that actually ties out, and monthly reconciliation finally takes an afternoon instead of a week.”'}
              </Quote>
              <Card small style={{ marginTop: 'var(--s7)' }}>
                <Eyebrow plain style={{ marginBottom: 'var(--s3)' }}>Multi-club</Eyebrow>
                <p className="small">
                  Ten countries and eight tax regimes are supported, with currency, tax and feature
                  entitlements held per club. A group sees consolidated KPIs; each club keeps its own
                  books, its own outlets and its own price list.
                </p>
              </Card>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* CLUB, SPA MASTER AND POS — who is on the other side */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Club, Spa Master and POS</Eyebrow>
            <h2 className="d-l">Who is on the other side<br />of the transaction.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Three systems that all take a booking or a payment, and people reasonably ask which one
              they need. The answer is not the facility. It is the relationship with the person paying.
            </p>
          </div>

          <Cols>
            <div className="c-4 rv">
              <Card style={{ height: '100%' }}>
                <Eyebrow plain style={{ marginBottom: 'var(--s4)' }}>Spa Master</Eyebrow>
                <h3 className="d-s" style={{ marginBottom: 'var(--s4)' }}>Books a room for a client</h3>
                <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                  A treatment room is the scarce resource and a client is someone you want back. The
                  relationship is a history of visits, a package balance and a rebooking rate. It ends
                  and restarts with each appointment.
                </p>
                <p>
                  <Link className="btn btn--text" href="/products/spamaster">
                    FlowZa Spa Master <span className="arw">→</span>
                  </Link>
                </p>
              </Card>
            </div>

            <div className="c-4 rv rv-d2">
              <Card style={{ height: '100%' }}>
                <Eyebrow plain style={{ marginBottom: 'var(--s4)' }}>POS</Eyebrow>
                <h3 className="d-s" style={{ marginBottom: 'var(--s4)' }}>Sells to a customer</h3>
                <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                  The transaction is complete at the till. A customer may be identified for loyalty,
                  but nothing is owed in either direction once the receipt prints. There is no account
                  to charge against because there is no continuing obligation.
                </p>
                <p>
                  <Link className="btn btn--text" href="/products/pos">
                    FlowZa POS <span className="arw">→</span>
                  </Link>
                </p>
              </Card>
            </div>

            <div className="c-4 rv rv-d3">
              <Card style={{ height: '100%' }}>
                <Eyebrow plain style={{ marginBottom: 'var(--s4)' }}>Club</Eyebrow>
                <h3 className="d-s" style={{ marginBottom: 'var(--s4)' }}>Bills a member</h3>
                <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                  A continuing relationship with dues, a household and an account that every outlet can
                  charge against. The member owes the club money before they buy anything, and the club
                  owes the member access. That is why the ledger, not the till, is the centre of this
                  system.
                </p>
                <p><span className="tag tag--sig">You are here</span></p>
              </Card>
            </div>
          </Cols>

          <p className="body-l rv" style={{ marginTop: 'clamp(40px,5vw,var(--s8))', maxWidth: '82ch' }}>
            They are separate systems on separate app subdomains, and they share the underlying
            records. A club that runs a spa inside it can operate Spa Master for the treatment rooms
            and have those charges reach the same member account, without either system holding its own
            copy of the person.
          </p>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions club managers ask</h2>
          <FAQ items={CLUB_FAQ.map((f) => ({ question: f.question, answer: f.answer }))} className="rv" />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks links={CLUB_RELATED.map((r) => ({ ...r }))} className="rv" />
        </Wrap>
      </Chapter>
    </>
  );
}
