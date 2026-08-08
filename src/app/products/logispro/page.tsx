import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { Panel } from '@/components/Panel';
import { KeylineList } from '@/components/KeylineList';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { Reveal } from '@/components/Reveal';
import { AppLink, ProductBadges, Metrics, Quote } from '@/components/ProductChrome';
import { CorridorDiagram } from '@/components/CorridorDiagram';
import { RouteOptimisation } from '@/components/RouteOptimisation';
import { ShipmentBoard } from '@/components/ShipmentBoard';
import { WarehouseRail } from '@/components/WarehouseRail';

export const metadata: Metadata = {
  title: 'FlowZa LogisPro — routes, shipments and warehouses, optimised',
  description:
    'AI route optimisation, live shipment tracking and a full warehouse management system on one operations picture, with delays flagged before they happen.',
};

const METRICS = [
  { value: '30%', label: 'average reduction in delivery costs' },
  { value: '98.2%', label: 'on-time delivery rate' },
  { value: '22%', label: 'fuel saved by optimised routing' },
  { value: '5×', label: 'faster route planning versus manual' },
];

const delayItems = [
  {
    heading: 'The consignee hears it from you',
    body: 'Tracking links and estimated arrival times are issued automatically on dispatch and follow the estimate as it moves. The customer is told the window has slipped before they notice it themselves.',
  },
  {
    heading: 'Rerouting is a re-optimisation',
    body: 'Taking a stop off one vehicle is not a phone call. The remaining stops are re-sequenced from the vehicle’s current position against the windows that are still open, and the driver’s mobile route updates.',
  },
  {
    heading: 'Dispatch by exception',
    body: 'A planner should be looking at the shipments that need a decision rather than refreshing the ones that do not. Only a material change in the estimate raises the shipment to the top of the board.',
  },
  {
    heading: 'One picture, not one per carrier',
    body: 'Own vehicles, courier partners and last-mile subcontractors report onto the same map and the same board, so the network is read in one place rather than in four portals.',
  },
];

const warehouseItems = [
  {
    heading: 'Any camera is a scanner',
    body: 'Barcode and QR both resolve to the same records, on handheld terminals or on a driver’s phone. Nothing on the floor depends on proprietary hardware being in the right hands.',
  },
  {
    heading: 'One stock position',
    body: 'The bin, the pick and the carton move the same stock record the ledger values, so the warehouse and the books do not need reconciling to each other at the end of the month.',
  },
];

const assignmentItems = [
  {
    heading: 'Hours, performance and compliance',
    body: 'Driver hours accrue from the trips actually run. Licence, permit and medical expiry sit on the same record, and an expired document blocks assignment rather than surfacing in an audit.',
  },
  {
    heading: 'Assigned dynamically',
    body: 'A job is offered against proximity to the pickup, shift availability and vehicle type — so the nearest van that is on shift and the right size takes it, without a dispatcher holding the map in their head.',
  },
  {
    heading: 'Multi-carrier, rate-shopped',
    body: 'Couriers, freight brokers and last-mile partners connect to the platform. Rate-shop across them for a given movement and book the winner without leaving the system or opening a portal.',
  },
  {
    heading: 'Customers get a link',
    body: 'Automated tracking links and estimated arrival times go out on dispatch. Support time falls because the question most customers ring to ask has already been answered.',
  },
];

const faqItems = [
  {
    question: 'What is the difference between LogisPro and Fleetza?',
    answer:
      'LogisPro plans and tracks the work — routes, shipments and the warehouse behind them. Fleetza watches the vehicle and the driver — condition, behaviour and cost per kilometre. They share the vehicle and driver records, so a driver’s hours in LogisPro and their safety score in Fleetza belong to the same person. Operators who only need the day planned run LogisPro; operators who also want to know which vehicle is about to fail run both.',
  },
  {
    question: 'Can we keep our existing telematics?',
    answer:
      'Yes. LogisPro consumes position and hours-of-service events from a provider you already have and uses them to drive estimates and compliance. FlowZa Fleetza is one such provider — a separate application on a separate subscription, connected to LogisPro over its API like any other telematics feed.',
  },
  {
    question: 'How many drops can it sequence at once?',
    answer:
      'A depot’s full day, in seconds rather than in a morning. The optimiser weighs traffic, time windows, vehicle capacity and driver hours together, which is why the result is a plan you can dispatch rather than a shortest-path suggestion a planner then has to make legal.',
  },
  {
    question: 'Does the warehouse module need dedicated hardware?',
    answer:
      'No. Barcode and QR scanning work from any device with a camera, including a driver’s phone at the dispatch door. Ruggedised terminals are supported where the environment demands them, but nothing in the workflow depends on them.',
  },
  {
    question: 'Where does the delivery cost actually come from?',
    answer:
      'From posted figures rather than an assumed rate per kilometre. Fuel, driver pay, tolls and subcontractor settlement reach the same ledger that produces the customer invoice, so cost per delivery and margin per lane are read from accounting records instead of being estimated alongside them.',
  },
];

const relatedLinks = [
  { href: '/products/fleetza', title: 'FlowZa Fleetza', subtitle: 'The vehicle and the driver' },
  { href: '/industries/logistics', title: 'Logistics & freight', subtitle: 'Lanes as a portfolio' },
  { href: '/products/finance', title: 'FlowZa Finance', subtitle: 'Settlement and invoicing' },
];

export default function LogisProPage() {
  return (
    <>
      {/* HERO — one shipment on one corridor */}
      <Chapter variant="instrument" style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net netFull>
        <Wrap>
          <Reveal style={{ maxWidth: '62ch' }}>
            <div className="pbadge">
              <span className="pbadge__m">
                <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M1.5 5.5h8v7h-8zM9.5 8h4l2.5 2.5v2h-6.5"
                    stroke="#0C0E0D"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <span className="pbadge__t">FlowZa LogisPro</span>
            </div>
            <h1 className="d-xl" style={{ marginBottom: 'var(--s5)' }}>
              Hundreds of drops,<br />sequenced in<br />seconds.
            </h1>
            <p className="lede" style={{ marginBottom: 'var(--s5)' }}>
              Routes, shipments &amp; warehouses, optimised. LogisPro weighs traffic, delivery
              windows, vehicle capacity and driver hours, then builds the lowest-cost route for every
              vehicle in the fleet. Once they are moving it tracks each shipment live, flags the ones
              that will miss their window before they miss it, and runs the warehouse behind them
              from putaway to dispatch.
            </p>
            <ProductBadges badges={['Route optimisation', 'Live tracking', 'Warehouse WMS']} />
            <div className="row" style={{ marginTop: 'var(--s6)' }}>
              <Link className="btn btn--primary" href="/pricing">
                Book a walkthrough <span className="arw">→</span>
              </Link>
              <Link className="btn btn--ghost" href="/industries/logistics">
                Freight economics
              </Link>
              <AppLink host="logispro.flowza.ai" />
            </div>
          </Reveal>

          <Reveal delay={2} style={{ marginTop: 'clamp(48px,6vw,var(--s8))' }}>
            <CorridorDiagram />
            <Reveal
              as="p"
              className="tiny"
              delay={3}
              style={{ marginTop: 'var(--s4)', maxWidth: '80ch' }}
            >
              One shipment on one corridor. Position, hub dwell and the trailing performance of this
              lane resolve into an arrival estimate that updates as conditions do. The amber leg is
              not a report of a late delivery — it is the estimate crossing the delivery window while
              the vehicle is still short of the border.
            </Reveal>
          </Reveal>
        </Wrap>
      </Chapter>

      {/* ROUTE OPTIMISATION — THE SIGNATURE SET PIECE */}
      <Chapter>
        <Wrap>
          <Reveal className="section-head">
            <Eyebrow>Route optimisation</Eyebrow>
            <h2 className="d-l">
              The same twelve drops,<br />sequenced twice.
            </h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              On the left, the order the work arrived in — three vans loaded as orders were taken,
              which is how a round gets planned by hand under time pressure. On the right, the
              identical twelve drops sequenced against traffic, delivery windows, vehicle capacity
              and driver hours. Nothing has been added and nothing has been dropped. Only the order
              has changed.
            </p>
          </Reveal>

          <Reveal>
            <RouteOptimisation />
          </Reveal>

          <Reveal as="p" className="tiny" style={{ marginTop: 'var(--s4)', maxWidth: '86ch' }}>
            A worked example on one depot&rsquo;s twelve drops, so that the two sequences can be read
            side by side. The 22 per cent distance reduction shown is the published figure for
            optimised routing; a live plan runs to hundreds of drops and produces its own numbers
            against your own windows, capacities and driver hours.
          </Reveal>

          <hr className="rule" style={{ margin: 'clamp(40px,5vw,var(--s8)) 0 var(--s6)' }} />

          <Reveal as="p" className="eyebrow">
            Published figures
          </Reveal>
          <Reveal>
            <Metrics items={METRICS} />
          </Reveal>
        </Wrap>
      </Chapter>

      {/* DELAY DETECTION */}
      <Chapter variant="raised">
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'var(--s7)' }}>
            <Reveal className="c-7">
              <Eyebrow>Delay detection</Eyebrow>
              <h2 className="d-l">
                Late is a prediction,<br />not a report.
              </h2>
            </Reveal>
            <Reveal className="c-5" delay={2}>
              <p className="lede">
                Every active shipment is scored continuously against its own delivery window.
                Position, hub and border dwell and the trailing performance of the lane resolve into
                an arrival estimate, and the exception is raised when the estimate crosses the window
                — not when the consignee telephones.
              </p>
            </Reveal>
          </Cols>

          <Reveal>
            <Panel style={{ padding: 'var(--s5)' }}>
              <ShipmentBoard />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Neither flagged shipment is late yet. SH-40912 is still short of Al Batha and its
                border dwell is running over the trailing average for the crossing, which is enough
                to move the estimate past the window while there is time to act on it.
              </p>
            </Panel>
          </Reveal>

          <Reveal style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <KeylineList twoCol items={delayItems} />
          </Reveal>
        </Wrap>
      </Chapter>

      {/* WAREHOUSE WMS */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <Reveal className="c-7">
              <Eyebrow>Warehouse WMS</Eyebrow>
              <h2 className="d-l">
                Putaway to dispatch,<br />with the keyboard<br />taken out.
              </h2>
            </Reveal>
            <Reveal className="c-5" delay={2}>
              <p className="lede">
                Four hops behind the fleet. At each one the movement is confirmed by scanning a
                barcode or a QR code rather than by typing it, which is what removes the manual entry
                and the picking error that follows from it.
              </p>
            </Reveal>
          </Cols>

          <Reveal>
            <WarehouseRail />
          </Reveal>

          <Reveal style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <KeylineList twoCol items={warehouseItems} />
          </Reveal>
        </Wrap>
      </Chapter>

      {/* DRIVERS, VEHICLES, CARRIERS */}
      <Chapter>
        <Wrap>
          <Cols>
            <Reveal className="c-5">
              <Eyebrow>Drivers, vehicles, carriers</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                Who is on shift,<br />who is nearest,<br />who is legal to go
              </h2>
              <p className="small">
                A route is only as good as the assignment behind it. Driver hours, shift availability,
                vehicle type and document validity are all attributes of the same records the
                optimiser plans against, so an assignment that cannot legally be made is not offered.
              </p>
            </Reveal>
            <Reveal className="c-7" delay={2}>
              <KeylineList twoCol items={assignmentItems} style={{ borderTopColor: 'var(--edge)' }} />
            </Reveal>
          </Cols>
        </Wrap>
      </Chapter>

      {/* HOW IT WORKS */}
      <Chapter variant="raised">
        <Wrap>
          <Reveal className="section-head">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="d-l">
              Three steps to a<br />planned morning.
            </h2>
          </Reveal>
          <Cols style={{ gap: 'var(--s5)' }}>
            <Reveal className="c-4">
              <div className="lgpstep">
                <span className="lgpstep__n">01</span>
                <h3>Import your network</h3>
                <p className="small">
                  Depots, vehicles, drivers and customer addresses. Connect the order system you
                  already run, or push orders in through the open API.
                </p>
              </div>
            </Reveal>
            <Reveal className="c-4" delay={2}>
              <div className="lgpstep">
                <span className="lgpstep__n">02</span>
                <h3>Optimise and dispatch</h3>
                <p className="small">
                  Each morning LogisPro builds optimised routes for the whole fleet. Review them,
                  adjust what you want to adjust, dispatch in one click — drivers get their routes on
                  mobile.
                </p>
              </div>
            </Reveal>
            <Reveal className="c-4" delay={3}>
              <div className="lgpstep">
                <span className="lgpstep__n">03</span>
                <h3>Track, measure, improve</h3>
                <p className="small">
                  Monitor deliveries live and measure on-time rate, fuel and cost per delivery. Weekly
                  AI reports keep taking waste out of the plan.
                </p>
              </div>
            </Reveal>
          </Cols>

          <hr className="rule" style={{ margin: 'clamp(40px,5vw,var(--s8)) 0' }} />

          <div style={{ maxWidth: '74ch' }}>
            <Reveal>
              <Quote name="David Mensah" role="Operations Director, SwiftLink Logistics">
                {'“We were spending enormous time manually planning routes and still missing delivery windows. FlowZa LogisPro automated the entire process, cut our fuel costs by a quarter, and our customer satisfaction scores have never been higher.”'}
              </Quote>
            </Reveal>
          </div>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter>
        <Wrap tight>
          <Reveal as="h2" className="d-m" style={{ marginBottom: 'var(--s7)' }}>
            Questions operators ask
          </Reveal>
          <Reveal>
            <FAQ items={faqItems} />
          </Reveal>
          <Reveal as="h3" className="d-s" style={{ margin: 'var(--s9) 0 var(--s5)' }}>
            Related
          </Reveal>
          <Reveal>
            <RelatedLinks links={relatedLinks} />
          </Reveal>
        </Wrap>
      </Chapter>
    </>
  );
}
