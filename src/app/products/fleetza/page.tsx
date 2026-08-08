import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { Panel } from '@/components/Panel';
import { Card } from '@/components/Card';
import { KeylineList } from '@/components/KeylineList';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { AppLink, ProductBadges, Metrics, Quote } from '@/components/ProductChrome';
import { TripReplay } from '@/components/TripReplay';
import { DriverScoring } from '@/components/DriverScoring';
import { ComponentLifeChart } from '@/components/ComponentLifeChart';
import { FuelAnalytics } from '@/components/FuelAnalytics';
import { CostPerKilometre } from '@/components/CostPerKilometre';

export const metadata: Metadata = {
  title: 'Flowza Fleetza — live tracking, driver scores and maintenance',
  description:
    'Live GPS tracking, AI driver behaviour scoring, predictive maintenance and fuel analytics, giving a true cost per kilometre for every vehicle in the fleet.',
};

const METRICS = [
  { value: '23%', label: 'average cut in fleet operating costs' },
  { value: '41%', label: 'fewer accident-related incidents' },
  { value: '18%', label: 'fuel saved through behaviour coaching' },
  { value: '4×', label: 'faster maintenance response' },
];

const trackingItems = [
  {
    heading: 'Ten-second refresh',
    body: 'Every vehicle on a live map, updating every ten seconds. Close enough to answer where a vehicle is now rather than where it was when someone last asked.',
  },
  {
    heading: 'Replay any route',
    body: 'Any trip can be replayed from its own reports, which is what settles a disputed delivery time or an accident account without relying on recollection.',
  },
  {
    heading: 'Zones, entry and exit',
    body: 'Define operational zones and get an alert the moment a vehicle crosses in or out. Depots, customer sites, restricted areas and the boundary of your operating region are all the same mechanism.',
  },
  {
    heading: 'Time on site, counted',
    body: 'Entry and exit produce a duration on their own, so customer-visit and job-site compliance stops depending on anyone writing a time down.',
  },
  {
    heading: 'Live estimates, shared out',
    body: 'Dispatchers and clients can be given a live arrival estimate for a specific vehicle rather than a phone number to call.',
  },
];

const fuelItems = [
  {
    heading: 'Consumption per vehicle',
    body: 'Measured against other vehicles of the same class doing comparable work, because an absolute litres-per-hundred figure tells you nothing on a mixed fleet.',
  },
  {
    heading: 'Idling',
    body: 'Engine hours with the vehicle stationary, attributed to the trip and the driver. This is usually the largest single recoverable line and the cheapest to change.',
  },
  {
    heading: 'Inefficient routes and fuel fraud',
    body: 'Distance driven off the planned route, and fuel transactions that do not reconcile against the vehicle’s position and tank capacity at that moment.',
  },
];

const costItems = [
  {
    heading: 'Every cost lands on the vehicle',
    body: 'A workshop invoice, an insurance premium and a fuel transaction all attach to the registration they belong to, so whole-life cost accumulates as it is incurred rather than being allocated at year end.',
  },
  {
    heading: 'Replace on the curve',
    body: 'Cost per kilometre rises as maintenance climbs and residual value falls. The crossing point is a date you can see coming, which is a different decision from replacing on a fixed age.',
  },
];

const faqItems = [
  {
    question: 'What hardware is involved, and who fits it?',
    answer:
      'A compact tracker that plugs into the vehicle’s OBD-II diagnostic port. No wiring, no workshop visit and no vehicle out of service; anyone can fit one in seconds, and the vehicle starts reporting within minutes. Vehicles without a usable diagnostic port are the exception and are handled case by case.',
  },
  {
    question: 'Is driver scoring going to be used against our drivers?',
    answer:
      'That is a policy choice, and the product is built for the coaching version of it. The score decomposes into four named event types, every event behind it is dated and reviewable, and the driver sees the same board the manager does. A number a driver cannot take apart is a number they will dispute; a number they can is the basis of a two-minute conversation.',
  },
  {
    question: 'Does predictive maintenance replace the manufacturer’s service schedule?',
    answer:
      'No. Treat the schedule as a floor. Prediction moves work earlier when diagnostics and usage say a component will not reach the next interval, and it groups items so that one workshop visit covers several. It does not extend a manufacturer interval on its own.',
  },
  {
    question: 'Do we need LogisPro as well?',
    answer:
      'Only if you need the work planned. Fleetza is complete on its own for an operator who wants to know what their vehicles and drivers are doing and what they cost. If you are also sequencing drops, tracking shipments against delivery windows or running a warehouse, that is LogisPro — a separate application, bought separately, which you may or may not need.',
  },
  {
    question: 'Where does the cost per kilometre come from?',
    answer:
      'From recorded costs rather than an assumed rate. Acquisition finance, workshop invoices, fuel transactions, insurance premiums and depreciation attach to the registration they belong to and are divided by the distance that vehicle actually ran. Every component of the figure is traceable to the entry it came from, so an operational number and the one your accountant produces can be reconciled line by line.',
  },
];

const relatedLinks = [
  { href: '/products/logispro', title: 'Flowza LogisPro', subtitle: 'Routes, shipments, warehouses' },
  { href: '/industries/logistics', title: 'Logistics & freight', subtitle: 'Lanes as a portfolio' },
  { href: '/platform', title: 'Platform', subtitle: 'How the records are shared' },
];

export default function FleetZaPage() {
  return (
    <>
      {/* HERO */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end' }}>
            <div className="c-7 rv">
              <div className="pbadge">
                <span className="pbadge__m">
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M2 12l2-5h10l2 5v3H2z" stroke="#F6F6F3" strokeWidth="1.6" />
                    <circle cx="5.5" cy="15" r="1.2" stroke="#F6F6F3" strokeWidth="1.4" />
                    <circle cx="12.5" cy="15" r="1.2" stroke="#F6F6F3" strokeWidth="1.4" />
                  </svg>
                </span>
                <span className="pbadge__t">Flowza Fleetza</span>
              </div>
              <h1 className="d-xl">
                Every trip is<br />a measurement.
              </h1>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede" style={{ marginBottom: 'var(--s5)' }}>
                Live tracking, driver scores &amp; maintenance. A compact tracker in the diagnostic
                port reports position every ten seconds and reads the engine continuously. Fleetza
                turns that into three things you can act on: a driver score built from the events that
                cause accidents, a predicted failure point for every wearing component, and a true
                cost per kilometre for each vehicle.
              </p>
              <ProductBadges badges={['GPS tracking', 'Driver scoring', 'Predictive maintenance']} />
              <div className="row">
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <AppLink host="fleetza.flowza.ai" />
              </div>
            </div>
          </Cols>

          <hr className="rule rv" style={{ margin: 'clamp(40px,5vw,var(--s8)) 0 var(--s6)' }} />

          <div className="rv">
            <Metrics items={METRICS} />
          </div>
        </Wrap>
      </Chapter>

      {/* LIVE GPS TRACKING */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Live GPS tracking</Eyebrow>
              <h2 className="d-l">
                Ten seconds between<br />one position and<br />the next.
              </h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                A trip is not a line on a map. It is a sequence of position reports, and how far apart
                they are decides what you can prove afterwards — which zone the vehicle was in, for
                how long, and at what speed it left.
              </p>
            </div>
          </Cols>
          <Cols>
            <div className="c-7 rv">
              <Panel style={{ padding: 'var(--s5)' }}>
                <TripReplay />
              </Panel>
            </div>
            <div className="c-5 rv rv-d2">
              <KeylineList items={trackingItems} style={{ borderTopColor: 'var(--edge)' }} />
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* DRIVER BEHAVIOUR SCORING */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Driver behaviour scoring</Eyebrow>
            <h2 className="d-l">
              A score is only useful if<br />you can see what<br />it is made of.
            </h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              The AI reads every trip for four events: harsh braking, rapid acceleration, speeding and
              phone use. Each is counted against distance driven and each carries a deduction from a
              hundred, so a composite score takes apart into the behaviour that produced it — and
              points at the one coaching conversation worth having. Select a driver to see the
              decomposition.
            </p>
          </div>
          <Cols className="rv">
            <DriverScoring />
          </Cols>
          <p className="tiny rv" style={{ marginTop: 'var(--s5)', maxWidth: '86ch' }}>
            Worked example, with illustrative drivers and event rates. What is not illustrative is the
            arithmetic: the composite is the four deductions subtracted from a hundred and nothing
            else, which is what makes it possible to argue with. Coaching against these four events is
            where the published 41 per cent reduction in accident-related incidents comes from.
          </p>
        </Wrap>
      </Chapter>

      {/* PREDICTIVE MAINTENANCE */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-6 rv">
              <Eyebrow>Predictive maintenance</Eyebrow>
              <h2 className="d-l">
                The part gets replaced<br />on a Tuesday, not<br />on a hard shoulder.
              </h2>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                Engine diagnostics, mileage and the way the vehicle is actually driven put a predicted
                failure point in front of every wearing component. The work is then booked ahead of
                that point, in a slot you choose. The bar below shows wear already observed as a solid
                block and the predicted remainder as a dashed one — the gap between the marker and the
                end of the dashes is the whole product.
              </p>
            </div>
          </Cols>
          <div className="rv">
            <ComponentLifeChart />
            <p className="tiny" style={{ marginTop: 'var(--s4)', maxWidth: '86ch' }}>
              Worked example on three vehicles; the window is clipped to the last 12,000 kilometres of
              history so that the prediction ahead of today is readable. Predicted points move as the
              vehicle is driven — a van worked hard on short urban runs eats brake pads faster than
              the odometer alone suggests, and that is precisely the difference between a predicted
              interval and a fixed one.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* FUEL ANALYTICS */}
      <Chapter>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'var(--s7)' }}>
            <div className="c-7 rv">
              <Eyebrow>Fuel analytics</Eyebrow>
              <h2 className="d-l">
                Fuel leaks in three places<br />and only one of them<br />is the engine.
              </h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Consumption per vehicle against its own class, the share of engine hours spent
                stationary, and the distance driven off the planned route. Each points at a different
                fix: a workshop booking, a policy, or a plan.
              </p>
            </div>
          </Cols>
          <Cols>
            <div className="c-7 rv">
              <Panel style={{ padding: 'var(--s5)' }}>
                <div className="tw">
                  <FuelAnalytics />
                </div>
                <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                  Illustrative figures. FZ-2871 burns roughly a third more than the median for its
                  class, and most of the gap sits in idling and off-plan distance rather than in the
                  vehicle — which makes it a driver and dispatch conversation before it is a workshop
                  booking.
                </p>
              </Panel>
            </div>
            <div className="c-5 rv rv-d2">
              <KeylineList items={fuelItems} style={{ borderTopColor: 'var(--edge)' }} />
              <Card raised small style={{ marginTop: 'var(--s5)' }}>
                <p className="small" style={{ margin: 0 }}>
                  Across Fleetza deployments, customers typically cut fuel spend by 18–25%. That is a
                  reported range rather than a guarantee, and how much of it you see depends on how
                  much of your consumption is behaviour and dispatch rather than payload.
                </p>
              </Card>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* COST INTELLIGENCE */}
      <Chapter variant="raised">
        <Wrap>
          <Cols>
            <div className="c-5 rv">
              <Eyebrow>Cost intelligence</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                Cost per kilometre,<br />with all five<br />components in it
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Acquisition finance, maintenance, fuel, insurance and depreciation for each vehicle,
                divided by the kilometres it actually ran. That number decides when to replace a
                vehicle. A purchase price does not.
              </p>
              <KeylineList items={costItems} style={{ borderTopColor: 'var(--edge)' }} />
            </div>
            <div className="c-7 rv rv-d2">
              <Panel style={{ padding: 'var(--s6)' }}>
                <div className="row" style={{ justifyContent: 'space-between', marginBottom: 'var(--s5)' }}>
                  <span
                    className="mono"
                    style={{ fontSize: '.625rem', letterSpacing: '.11em', color: 'var(--fg-3)' }}
                  >
                    FZ-1147 · RIGID 7.5T · TRAILING 12 MONTHS
                  </span>
                  <span className="tag tag--sig">AED 2.41 / km</span>
                </div>
                <CostPerKilometre />
                <p className="tiny" style={{ marginTop: 'var(--s5)' }}>
                  Illustrative. The shape is yours: Fleetza builds it from your own finance charges,
                  workshop invoices, fuel transactions, premiums and depreciation policy rather than
                  from an industry assumption, and the weekly report ranks vehicles by it.
                </p>
              </Panel>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* HOW IT WORKS */}
      <Chapter>
        <Wrap>
          <Cols>
            <div className="c-7 rv">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s7)' }}>Plugged in before lunch</h2>
              <ul className="flzstep">
                <li>
                  <span className="flzstep__n">01</span>
                  <div>
                    <h3>Install and connect</h3>
                    <p className="small">
                      The compact tracker goes into the vehicle&rsquo;s diagnostic port in seconds — no
                      wiring, no downtime, nothing removed from service. Live data reaches the
                      dashboard within minutes.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="flzstep__n">02</span>
                  <div>
                    <h3>Monitor and alert</h3>
                    <p className="small">
                      Watch the fleet live while the AI reads for safety events, maintenance needs and
                      policy violations. Alerts arrive while the issue is still small enough to be a
                      conversation.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="flzstep__n">03</span>
                  <div>
                    <h3>Cut cost, lift safety</h3>
                    <p className="small">
                      Weekly AI reports rank your highest-cost vehicles, your riskiest drivers and
                      your maintenance priorities, each with a recommended action attached rather than
                      a chart to interpret.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="c-5 rv rv-d2">
              <Quote name="Nia Adjei" role="Fleet Manager, TransAfrica Freight">
                {'“FlowZa Fleetza gave us visibility we never had before. Within two months, our accident rate dropped significantly, our fuel costs fell by nearly 20%, and our maintenance spend is now completely predictable. It pays for itself every month.”'}
              </Quote>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* FLEETZA AND LOGISPRO */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Fleetza and LogisPro</Eyebrow>
              <h2 className="d-l">
                Two systems, because<br />they answer two<br />questions.
              </h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                They sit next to each other and people reasonably ask why there are two. The division
                is simple enough to state in a sentence each.
              </p>
            </div>
          </Cols>
          <Cols>
            <div className="c-6 rv">
              <Card style={{ height: '100%' }}>
                <Eyebrow plain style={{ marginBottom: 'var(--s4)' }}>LogisPro</Eyebrow>
                <h3 className="d-s" style={{ marginBottom: 'var(--s4)' }}>Plans and tracks the work</h3>
                <p className="small">
                  Routes, shipments and warehouses. Which drops go on which vehicle in which order,
                  where the shipment is against its window, and whether the goods behind it were
                  picked and packed correctly. The unit of work is a delivery.
                </p>
                <p style={{ marginTop: 'var(--s5)' }}>
                  <Link className="btn btn--text" href="/products/logispro">
                    Flowza LogisPro <span className="arw">→</span>
                  </Link>
                </p>
              </Card>
            </div>
            <div className="c-6 rv rv-d2">
              <Card style={{ height: '100%' }}>
                <Eyebrow plain style={{ marginBottom: 'var(--s4)' }}>Fleetza</Eyebrow>
                <h3 className="d-s" style={{ marginBottom: 'var(--s4)' }}>
                  Watches the vehicle and the driver
                </h3>
                <p className="small">
                  Condition, behaviour and cost. How the vehicle is being driven, what is about to
                  wear out, what it costs per kilometre to keep running. The unit of work is a vehicle
                  and the person in it.
                </p>
                <p style={{ marginTop: 'var(--s5)' }}>
                  <span className="tag tag--sig">You are here</span>
                </p>
              </Card>
            </div>
          </Cols>
          <p className="body-l rv" style={{ marginTop: 'clamp(40px,5vw,var(--s8))', maxWidth: '80ch' }}>
            They are separate systems on separate app subdomains, and they share the vehicle and driver
            records. A driver&rsquo;s hours in LogisPro and their safety score in Fleetza belong to the
            same person, and a service hold recorded in Fleetza is visible to the planner in LogisPro
            without anyone entering it twice. Run either on its own; run both and neither needs an
            integration project to see what the other knows.
          </p>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions fleet managers ask</h2>
          <FAQ items={faqItems} className="rv" />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks links={relatedLinks} className="rv" />
        </Wrap>
      </Chapter>
    </>
  );
}
