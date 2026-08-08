import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';
import { LaneExplorer, LaneQuadrant, LanePanel } from '@/components/LaneQuadrant';

export const metadata: Metadata = {
  title: 'Logistics and freight — FlowZa AI',
  description:
    'Lanes are a portfolio. Price each one from posted cost, close the gap between paying for a movement and being paid for it, and stop running empty.',
};

export default function LogisticsPage() {
  return (
    <>
      <LaneExplorer initialIndex={6}>

        {/* HERO */}
        <Chapter variant="instrument" style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
          <Wrap>
            <Cols style={{ alignItems: 'center' }}>
              <div className="c-5 rv">
                <p className="ibadge">
                  <Link href="/industries">Industries</Link>
                  <i />
                  Logistics &amp; Freight
                </p>
                <h1 className="d-xl" style={{ marginBottom: 'var(--s5)' }}>
                  You do not<br />run a fleet.<br />You run a<br />portfolio.
                </h1>
                <p className="lede" style={{ marginBottom: 'var(--s7)' }}>
                  Lanes are positions. Some fund the network, some are held out of habit, and one or two are quietly financed by the others. FlowZa prices each one from real postings, which is the only way to tell them apart.
                </p>
                <div className="row">
                  <Link className="btn btn--primary" href="/pricing">
                    Book a walkthrough <span className="arw">→</span>
                  </Link>
                  <Link className="btn btn--ghost" href="/products/logispro">FlowZa LogisPro</Link>
                </div>
              </div>
              <div className="c-7 rv rv-d2">
                <LaneQuadrant />
              </div>
            </Cols>
          </Wrap>
        </Chapter>

        {/* LANE ECONOMICS PANEL */}
        <Chapter>
          <Wrap>
            <Cols>
              <div className="c-7 rv">
                <Eyebrow>Lane economics</Eyebrow>
                <h2 className="d-l" style={{ marginBottom: 'var(--s5)' }}>
                  Select a lane.<br />Decide what to do<br />about it.
                </h2>
                <p className="body-l" style={{ marginBottom: 'var(--s5)' }}>
                  A network review usually compares lanes on revenue, which rewards whichever one moves the most boxes. Ranking on contribution changes the answer, and ranking on contribution per unit of scarce capacity changes it again.
                </p>
                <p className="small">
                  Cost per load here is built from posted fuel, driver hours, tolls, subcontractor invoices and detention actually incurred — not from a standard cost per kilometre applied after the fact.
                </p>
              </div>
              <div className="c-5 rv rv-d2">
                <LanePanel />
              </div>
            </Cols>
          </Wrap>
        </Chapter>

      </LaneExplorer>

      {/* WORKING CAPITAL */}
      <Chapter variant="raised">
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Working capital</Eyebrow>
              <h2 className="d-l">You pay for the load<br />seven weeks before<br />you are paid for it.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Fuel and drivers are settled within days. Customers settle on terms. The gap between the two is the single largest call on cash in most freight businesses, and part of it is self-inflicted.
              </p>
            </div>
          </Cols>
          <div className="panel rv" style={{ padding: 'var(--s6)' }}>
            <div className="dscroll" style={{ ['--dmin' as string]: '640px' }}>
              <svg
                className="dgm ccc"
                viewBox="0 0 600 250"
                role="img"
                aria-label="Cash conversion timeline. Today, cost is incurred in the first three days, proof of delivery takes a further six days to collect, the invoice is then raised and paid on day fifty-four, giving a fifty-four day funding gap. With proof of delivery captured in the driver app the invoice is raised on day three and paid on day forty-eight, a forty-eight day gap."
              >
                <g className="mk"><path d="M60 220H540" /></g>
                <g className="qax" fill="var(--fg-3)" fontFamily="IBM Plex Mono, monospace" fontSize="8.5">
                  <text x="56" y="236">0</text>
                  <text x="132" y="236">10</text>
                  <text x="212" y="236">20</text>
                  <text x="292" y="236">30</text>
                  <text x="372" y="236">40</text>
                  <text x="452" y="236">50</text>
                  <text x="524" y="236">60</text>
                  <text x="60" y="248">DAYS FROM PICK-UP</text>
                </g>
                <text x="60" y="30" className="lane-lab">TODAY · POD COLLECTED BY PAPERWORK</text>
                <rect className="seg-cost" x="60" y="40" width="24" height="20" rx="1" />
                <rect className="seg-delay" x="84" y="40" width="48" height="20" rx="1" />
                <rect className="seg-wait" x="132" y="40" width="360" height="20" rx="1" />
                <text x="62" y="76" className="seg-lab">COST</text>
                <text x="88" y="76" className="seg-lab" fill="var(--sig-amber)">POD CHASE · 6d</text>
                <text x="200" y="76" className="seg-lab">INVOICE RAISED D9 · TERMS 45</text>
                <g className="gap">
                  <path d="M60 92H492" />
                  <path d="M60 87V97" />
                  <path d="M492 87V97" />
                </g>
                <text x="250" y="110" className="gapn">54 DAYS OF FUNDING</text>
                <text x="60" y="146" className="lane-lab" fill="var(--sig)">ON FLOWZA · POD FROM THE DRIVER APP</text>
                <rect className="seg-cost" x="60" y="156" width="24" height="20" rx="1" />
                <rect className="seg-wait" x="84" y="156" width="360" height="20" rx="1" />
                <text x="62" y="192" className="seg-lab">COST</text>
                <text x="150" y="192" className="seg-lab">INVOICE RAISED D3 · TERMS 45</text>
                <g className="gap">
                  <path d="M60 204H444" />
                  <path d="M60 199V209" />
                  <path d="M444 199V209" />
                </g>
                <text x="228" y="222" className="gapn">48 DAYS</text>
              </svg>
            </div>
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              The six days are the recoverable part. Proof of delivery captured on the driver&rsquo;s phone at the point of handover raises the invoice the same day, and the terms clock starts six days earlier on every load — which on this network is roughly one full week of revenue permanently released from working capital.
            </p>
          </div>
          <KeylineList
            twoCol
            className="rv"
            style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}
            items={[
              {
                heading: 'Detention billed by default',
                body: 'Arrival and departure events start and stop the clock against contracted free time. Detention that would otherwise be waived through embarrassment appears on the invoice automatically.',
              },
              {
                heading: 'Accessorials do not go missing',
                body: 'Waiting time, extra drops, re-delivery and out-of-hours charges attach to the movement as they happen. Most freight businesses lose more here than on rate negotiation.',
              },
              {
                heading: 'Carrier settlement matches customer billing',
                body: 'Both derive from the same movement events, so a subcontractor cannot be paid for a leg that was never billed to the customer.',
              },
              {
                heading: 'Fuel indexed on the movement date',
                body: 'The surcharge recalculates against the published index automatically, which removes both the manual lookup and the argument about which week applied.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* EMPTY RUNNING */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols>
            <div className="c-4 rv">
              <Eyebrow>Empty running</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>The kilometres nobody is paying for</h2>
              <p className="small">
                Empty legs are not a planning failure so much as a visibility failure — the backhaul exists, but not in a place the planner can see it while the decision is still open.
              </p>
            </div>
            <div className="c-8 rv rv-d2">
              <Cols style={{ gap: 'var(--s5)' }}>
                <div className="c-4">
                  <div className="stat">
                    <span className="stat__n">31%</span>
                    <span className="stat__l">Share of network kilometres run empty before consolidation</span>
                  </div>
                </div>
                <div className="c-4">
                  <div className="stat">
                    <span className="stat__n">6</span>
                    <span className="stat__l">Systems a planner previously checked to find a backhaul</span>
                  </div>
                </div>
                <div className="c-4">
                  <div className="stat">
                    <span className="stat__n">1</span>
                    <span className="stat__l">Board where open freight and returning capacity now appear together</span>
                  </div>
                </div>
              </Cols>
              <KeylineList
                twoCol
                style={{ marginTop: 'var(--s7)', borderTopColor: 'var(--edge)' }}
                items={[
                  {
                    heading: 'Backhaul offered, not searched for',
                    body: 'A unit due to return empty is matched against open freight on adjacent lanes and surfaced to the planner with the margin already calculated.',
                  },
                  {
                    heading: 'Own fleet against buy rate, honestly',
                    body: 'Because own-fleet cost is assembled from real driver, fuel and maintenance postings, the make-or-buy decision compares like with like instead of comparing actuals against an assumption.',
                  },
                ]}
              />
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* SUBCONTRACTORS */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Subcontractors</Eyebrow>
            <h2 className="d-l">Half your fleet belongs<br />to someone else.</h2>
          </div>
          <KeylineList
            twoCol
            className="rv"
            items={[
              {
                heading: 'A carrier is a party, not a spreadsheet',
                body: 'Rate agreements, insurance expiry, licence validity, performance history and settlement all hang off the same record the finance module pays. There is no separate vendor list to keep in step.',
              },
              {
                heading: 'Compliance blocks dispatch',
                body: 'An expired certificate prevents assignment rather than surfacing during an audit. The check happens where the risk is taken, not where it is reported.',
              },
              {
                heading: 'Performance priced into the choice',
                body: 'On-time delivery, claims and detention history are attributes of the carrier record, so the cheapest quote is visibly not always the cheapest outcome.',
              },
              {
                heading: 'Self-billing where it helps',
                body: 'Settlement statements can be generated from movement events and sent for carrier confirmation, which removes most invoice-matching work on the buy side entirely.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions freight operators ask</h2>
          <FAQ
            className="rv"
            items={[
              {
                question: 'How is this different from the LogisPro product page?',
                answer: 'LogisPro is the operational product — the load board, dispatch, settlement. This page is about the commercial shape of a freight business: which lanes to hold, what the cash cycle costs, and where the network leaks. Same platform, different question.',
              },
              {
                question: 'We already have a TMS. Why change?',
                answer: 'Most transport management systems plan movements well and then export to finance. That export is where lane profitability goes to die, because cost arrives days later and gets allocated rather than attributed. If your TMS can tell you the true margin on a specific load before it invoices, keep it.',
              },
              {
                question: 'Do you support customs and cross-border documentation?',
                answer: 'Documents attach to the movement and to the party, with the checks that block dispatch configurable per corridor. Filing to a specific customs regime is handled through the relevant integration rather than reimplemented, and border dwell feeds the arrival estimate.',
              },
              {
                question: 'Can we run this alongside our current system during transition?',
                answer: 'Yes, and most operators do for one or two billing cycles. Both systems process the same movements and the settlement figures are compared until they agree, which is also the fastest way to discover what the incumbent has been quietly getting wrong.',
              },
            ]}
          />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks
            className="rv"
            links={[
              { href: '/products/logispro', title: 'FlowZa LogisPro', subtitle: 'The operational product' },
              { href: '/industries/manufacturing', title: 'Manufacturing', subtitle: 'Where the freight originates' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all eight sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
