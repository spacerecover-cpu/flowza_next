import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';
import { FootfallChart } from '@/components/FootfallChart';
import { SpaceExplorer, SpaceTreemap, SpacePanel } from '@/components/SpaceTreemap';

export const metadata: Metadata = {
  title: 'Retail and hospitality — Flowza AI',
  description:
    'Trading space is inventory you cannot reorder. Measure what each square metre earns, forecast labour against real footfall, and run one stock pool across every channel.',
};

export default function RetailPage() {
  return (
    <>
      <SpaceExplorer initialIndex={6}>

        {/* HERO */}
        <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
          <Wrap>
            <Cols style={{ alignItems: 'center' }}>
              <div className="c-5 rv">
                <p className="ibadge">
                  <Link href="/industries">Industries</Link>
                  <i />
                  Retail &amp; Hospitality
                </p>
                <h1 className="d-xl" style={{ marginBottom: 'var(--s5)' }}>
                  Space is the<br />inventory you<br />cannot reorder.
                </h1>
                <p className="lede" style={{ marginBottom: 'var(--s7)' }}>
                  Every category is competing for the same square metres, and the allocation was usually decided years ago by whoever shouted loudest. Flowza measures what each metre actually earns, then makes the trade-off explicit.
                </p>
                <div className="row">
                  <Link className="btn btn--primary" href="/pricing">
                    Book a walkthrough <span className="arw">→</span>
                  </Link>
                  <Link className="btn btn--ghost" href="/products/pos">Flowza POS</Link>
                </div>
              </div>
              <div className="c-7 rv rv-d2">
                <SpaceTreemap />
              </div>
            </Cols>
          </Wrap>
        </Chapter>

        {/* ECONOMICS PANEL */}
        <Chapter variant="raised">
          <Wrap>
            <Cols>
              <div className="c-7 rv">
                <Eyebrow>The trade-off, priced</Eyebrow>
                <h2 className="d-l" style={{ marginBottom: 'var(--s5)' }}>
                  Select a category.<br />Argue with the number.
                </h2>
                <p className="body-l">
                  Range reviews stall because nobody can put a figure on what moving a fixture costs or gains. When space, stock cover and contribution all come from the same records, the conversation moves from opinion to arithmetic — including the awkward cases where the low-earning category is the reason people walk in.
                </p>
              </div>
              <div className="c-5 rv rv-d2">
                <SpacePanel />
              </div>
            </Cols>
          </Wrap>
        </Chapter>

      </SpaceExplorer>

      {/* LABOUR */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Labour</Eyebrow>
              <h2 className="d-l">The roster was written<br />before the demand<br />was known.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Rotas are usually built a fortnight ahead from last year&rsquo;s pattern. Footfall arrives on its own schedule. The gap between the two is either lost sales or paid idleness, and both are measurable.
              </p>
            </div>
          </Cols>
          <FootfallChart />
          <KeylineList
            twoCol
            className="rv"
            style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}
            items={[
              {
                heading: 'Forecast from your own footfall',
                body: 'Demand is projected per site and per hour from transaction history, local events and weather, then the roster is proposed against it. The manager still approves it — they simply start from something defensible.',
              },
              {
                heading: 'Conversion, not just traffic',
                body: 'A busy hour with poor conversion is a staffing problem, not a demand problem. Because the till and the door counter write to the same records, the distinction is visible on the day rather than in a monthly report.',
              },
              {
                heading: 'Labour posts as a cost of the hour',
                body: 'Shift cost lands against the trading hour it covered, which is what makes contribution per hour a real figure and lets you see which hours do not pay to be open.',
              },
              {
                heading: 'Overtime before it is incurred',
                body: 'Approaching a threshold raises an approval rather than an explanation, because the roster and the payroll rules are the same system.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* ESTATE */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Estate</Eyebrow>
            <h2 className="d-l">Six sites, compared on<br />what they control.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Sales rank flatters big stores. Ranking on productivity and conversion shows which teams are actually performing and which are simply standing in a better location.
            </p>
          </div>
          <div className="panel rv" style={{ padding: 'var(--s5)' }}>
            <div className="tw" style={{ overflowX: 'auto' }}>
              <table className="lg">
                <caption className="sr">Six sites compared on sales index, sales per square metre, conversion and average transaction value</caption>
                <thead>
                  <tr>
                    <th scope="col">Site</th>
                    <th scope="col">Sales per m²</th>
                    <th scope="col" className="n">Conversion</th>
                    <th scope="col" className="n">ATV</th>
                    <th scope="col" className="n">Space m²</th>
                    <th scope="col" className="n">Cover</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mall of DXB</td>
                    <td><span className="barcell"><i style={{ width: '100px' }} /><span>6,410</span></span></td>
                    <td className="n">31.2%</td><td className="n">284</td><td className="n">1,180</td><td className="n">14d</td>
                  </tr>
                  <tr>
                    <td>Marina Walk</td>
                    <td><span className="barcell"><i style={{ width: '74px' }} /><span>4,740</span></span></td>
                    <td className="n">27.8%</td><td className="n">311</td><td className="n">640</td><td className="n">3d</td>
                  </tr>
                  <tr>
                    <td>City Centre</td>
                    <td><span className="barcell"><i style={{ width: '88px' }} /><span>5,620</span></span></td>
                    <td className="n">29.4%</td><td className="n">262</td><td className="n">910</td><td className="n">11d</td>
                  </tr>
                  <tr>
                    <td>Airport T3</td>
                    <td><span className="barcell"><i style={{ width: '118px' }} /><span>7,580</span></span></td>
                    <td className="n">18.6%</td><td className="n">196</td><td className="n">310</td><td className="n">6d</td>
                  </tr>
                  <tr>
                    <td>Abu Dhabi</td>
                    <td><span className="barcell"><i className="low" style={{ width: '46px' }} /><span>2,910</span></span></td>
                    <td className="n">24.1%</td><td className="n">240</td><td className="n">1,450</td><td className="n">19d</td>
                  </tr>
                  <tr>
                    <td>Jeddah</td>
                    <td><span className="barcell"><i style={{ width: '66px' }} /><span>4,220</span></span></td>
                    <td className="n">26.9%</td><td className="n">255</td><td className="n">780</td><td className="n">9d</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              Airport T3 earns the most per metre on the worst conversion — a transit store converting browsers is a different business from a mall store, and comparing them on one ranking hides both. Abu Dhabi carries the most space and the deepest cover, which is where a range review starts.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* CHANNELS */}
      <Chapter variant="raised">
        <Wrap>
          <Cols>
            <div className="c-4 rv">
              <Eyebrow>Across channels</Eyebrow>
              <h2 className="d-m">One stock pool, several ways to buy</h2>
            </div>
            <div className="c-8 rv rv-d2">
              <KeylineList
                twoCol
                style={{ borderTopColor: 'var(--edge)' }}
                items={[
                  {
                    heading: 'Reserve against real availability',
                    body: 'An online reservation holds a specific unit at a specific site, so it cannot be sold twice. The promise the website makes is the promise the shop floor can keep.',
                  },
                  {
                    heading: 'Fulfil from wherever it is',
                    body: 'Ship from store, collect in store, or transfer to the customer\'s preferred site. Each option carries its true cost, so the routing decision optimises contribution rather than convenience.',
                  },
                  {
                    heading: 'Returns land where they are useful',
                    body: 'A return is received into the site that can actually sell it next, and the credit posts against the original transaction rather than as an unlinked refund.',
                  },
                  {
                    heading: 'Hospitality on the same ledger',
                    body: 'If the estate includes a cafe or a restaurant, recipe-level consumption decrements the same stock records, so food margin is measured rather than assumed.',
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
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions retailers ask</h2>
          <FAQ
            className="rv"
            items={[
              {
                question: 'How long before we can trust the space numbers?',
                answer: 'Sales per metre needs an accurate fixture plan, which most estates do not have in a usable form. Capturing it per site is usually two to three days of work per store and is the real gating item — not the software. Once it exists, the figures are live from the first full trading week.',
              },
              {
                question: 'Can we keep our existing ecommerce platform?',
                answer: 'Yes. The storefront stays where it is and reads availability and pricing from Flowza, which is what removes the overselling problem. Replacing the storefront is a separate decision and not part of a deployment.',
              },
              {
                question: 'Do franchise and concession models work?',
                answer: 'Both are supported. A concession\'s stock can be owned by the brand while the space and the transaction belong to you, with settlement calculated from the same records rather than reconciled monthly against a partner\'s report.',
              },
              {
                question: 'What about seasonal peaks?',
                answer: 'Trading through peak is a throughput question at the till and a cover question in stock. Terminals keep selling through an outage, and replenishment is driven by cover per site rather than group stock, which is what stops a warehouse surplus coexisting with empty shelves in December.',
              },
            ]}
          />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks
            className="rv"
            links={[
              { href: '/products/pos', title: 'Flowza POS', subtitle: 'The till and the ledger' },
              { href: '/industries/logistics', title: 'Logistics and Freight', subtitle: 'Getting stock to the site' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all eight sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
