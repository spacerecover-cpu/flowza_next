import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { Panel } from '@/components/Panel';
import { Tag } from '@/components/Tag';
import { KeylineList } from '@/components/KeylineList';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { Reveal } from '@/components/Reveal';
import { AppLink, ProductBadges, Metrics, Quote } from '@/components/ProductChrome';
import { TerminalReadout } from '@/components/TerminalReadout';
import { OfflineTimeline } from '@/components/OfflineTimeline';
import { TillReceipt } from '@/components/TillReceipt';
import { PostingList } from '@/components/PostingList';
import { SiteStockGrid } from '@/components/SiteStockGrid';

export const metadata: Metadata = {
  title: 'FlowZa POS — point of sale that survives the internet',
  description:
    'Sub-second transactions, true offline mode with no lost sales, multi-location inventory and customer analytics, posting into FlowZa Finance without an export.',
};

const METRICS = [
  { value: '0.8s', label: 'average transaction completion' },
  { value: '100%', label: 'offline reliability, no lost sales' },
  { value: '35%', label: 'bigger baskets with AI upsells' },
  { value: '150+', label: 'payment methods supported' },
];

const continuityItems = [
  {
    heading: 'What the device already holds',
    body: 'The product catalogue, prices, modifiers, combos, discount rules and tax rates are on the terminal, not fetched per sale. That is also why a transaction clears in 0.8 seconds when the network is healthy: the till is not waiting on a round trip to decide what something costs.',
  },
  {
    heading: 'What happens while it is down',
    body: 'Payments are taken, discounts apply, stock decrements locally. Each transaction is stamped with the time it actually happened rather than the time it was uploaded, so the day’s hourly sales still read correctly afterwards.',
  },
  {
    heading: 'What happens on reconnect',
    body: 'The queue drains in one burst and every site comes back into line. Nothing is retyped and nothing needs a manager to press anything — the sales were complete when they were taken.',
  },
  {
    heading: 'What is never merged silently',
    body: 'Some conflicts cannot be resolved by a rule: the same serialised unit sold at two sites during the same outage, for instance. Those are held and put in front of a person with both transactions shown, because guessing would put a number in the ledger nobody can defend.',
  },
];

const counterItems = [
  {
    heading: 'Native integrations',
    body: 'FlowZa Finance for the books, plus delivery platforms, eCommerce channels and your CRM. An order that arrives from a delivery app is a sale in the same place as a walk-in, and the customer record is the same record.',
  },
  {
    heading: 'Customer analytics as a by-product',
    body: 'Best customers, purchase history, average spend and preferred products accumulate from the transactions themselves — which is what makes an upsell prompt at the till specific enough to lift a basket rather than annoy someone.',
  },
];

const stockItems = [
  {
    heading: 'Transfers, not paperwork',
    body: 'Moving stock between locations is a transfer raised in the dashboard. Both sides of the movement are the same record, so nothing is in two places or in neither.',
  },
  {
    heading: 'Low-stock alerts and purchase orders',
    body: 'Thresholds are per location, because a kiosk and a flagship do not carry the same cover. When one trips, the alert and the purchase order are in the same screen.',
  },
];

const tenderItems = [
  {
    heading: 'One tender screen',
    body: 'Cards, mobile wallets, QR payments, cash and split payments in one tap, across more than 150 supported payment methods. Splitting a bill four ways is not a manager function.',
  },
  {
    heading: 'Integrated processing',
    body: 'Take the payment through integrated processing and settlement lands next day, with the reconciliation already done against the sales that produced it.',
  },
  {
    heading: 'Speed is the feature',
    body: '0.8 seconds average completion. At a lunch rush that is the difference between a queue that moves and a queue that leaves, which is why the catalogue and the tax rules live on the device.',
  },
];

const faqItems = [
  {
    question: 'What exactly stops working during an outage?',
    answer:
      'Nothing at the counter. You take payments, apply discounts and manage stock with no internet, and everything syncs when connectivity returns. What pauses is the sync to head office — those transactions catch up in a burst on reconnect, with each sale carrying the time it actually happened. Anything that genuinely conflicts, such as the same serialised unit sold at two sites during the same outage, is held for a person rather than merged quietly.',
  },
  {
    question: 'Do we have to buy your hardware?',
    answer:
      'No. iPad, Android tablet, Windows terminal or a browser — your FlowZa POS subscription covers every device, and there is no proprietary hardware in the product. If you already have terminals on the counter, start with those.',
  },
  {
    question: 'How does a sale reach our accounts?',
    answer:
      'FlowZa POS records the full accounting detail of every sale — revenue by line, tax, tender and cost of goods — and makes it available as a scheduled export or over its API. That feeds whichever accounting system you keep, including FlowZa Finance, which is a separate application on a separate subscription. Delivery platforms, eCommerce channels and your CRM connect through the same API.',
  },
  {
    question: 'We run several sites. Is that one dashboard or several?',
    answer:
      'One. Stock across unlimited locations reads from a single dashboard, with transfers, low-stock alerts and purchase orders built in. Thresholds are set per location, and the position each shop sees is the position head office sees.',
  },
  {
    question: 'Which payment methods are supported?',
    answer:
      'More than 150, including cards, mobile wallets, QR payments, cash and split payments on one tender screen. With integrated processing you get next-day settlement and reconciliation against the sales that produced it.',
  },
];

const relatedLinks = [
  { href: '/products/finance', title: 'FlowZa Finance', subtitle: 'The ledger the till posts into' },
  { href: '/products/club', title: 'FlowZa Club', subtitle: 'Charge-to-account registers for clubs' },
  { href: '/industries/retail', title: 'Retail', subtitle: 'How the sector is configured' },
];

export default function POSPage() {
  return (
    <>
      {/* HERO — a terminal in the middle of an outage */}
      <Chapter variant="instrument" style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'center' }}>
            <Reveal className="c-7">
              <div className="pbadge">
                <span className="pbadge__m">
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <rect x="2.5" y="3" width="13" height="9" stroke="#0C0E0D" strokeWidth="1.6" />
                    <path d="M6 15h6" stroke="#0C0E0D" strokeWidth="1.6" />
                  </svg>
                </span>
                <span className="pbadge__t">FlowZa POS</span>
              </div>
              <ProductBadges badges={['Offline mode', 'Multi-location', 'Customer analytics']} />
              <h1 className="d-xl" style={{ marginBottom: 'var(--s5)' }}>
                Keeps selling<br />when the line<br />goes down.
              </h1>
              <p className="lede" style={{ marginBottom: 'var(--s5)' }}>
                Point of sale that survives the internet. The catalogue, the prices and the tax rules
                sit on the device, so a sale clears in under a second whether the connection is up or
                not — and nothing is lost while it is down.
              </p>
              <p className="small" style={{ marginBottom: 'var(--s7)', maxWidth: '58ch' }}>
                FlowZa POS is its own application, not a screen bolted onto an accounting package. It
                is bought on its own subscription and it is complete on its own — every sale is
                recorded with the stock movement, the revenue split, the tax and the tender behind
                it, so the accounting detail is ready for whichever books you keep.
              </p>
              <div className="row" style={{ marginBottom: 'var(--s5)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <a className="btn btn--ghost" href="#pos-post">
                  See what a sale does next
                </a>
              </div>
              <AppLink host="pos.flowza.ai" />
            </Reveal>

            <Reveal className="c-5" delay={2}>
              <TerminalReadout />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                A terminal fourteen minutes into an outage. It is still taking cards, still applying
                discounts, still decrementing stock — and it is counting what it owes the ledger.
              </p>
            </Reveal>
          </Cols>

          <Reveal delay={3} style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <Metrics items={METRICS} />
          </Reveal>
        </Wrap>
      </Chapter>

      {/* OFFLINE CONTINUITY — THE SIGNATURE SET PIECE */}
      <Chapter>
        <Wrap>
          <Reveal className="section-head">
            <Eyebrow>Offline continuity</Eyebrow>
            <h2 className="d-l">
              An outage should cost<br />you nothing.
            </h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Every point of sale claims offline support. What usually happens is that card payments
              stop, discounts stop, stock goes stale, and somebody writes the afternoon down on
              paper. Here is a trading day with two and a half hours of no connection in the middle
              of it.
            </p>
          </Reveal>

          <Reveal>
            <OfflineTimeline />
          </Reveal>

          <Reveal style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <KeylineList twoCol items={continuityItems} style={{ borderTopColor: 'var(--edge)' }} />
          </Reveal>
        </Wrap>
      </Chapter>

      {/* AT THE COUNTER — ONE SALE, TWO SYSTEMS */}
      <Chapter variant="raised" id="pos-post">
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s7))' }}>
            <Reveal className="c-7">
              <Eyebrow>At the counter</Eyebrow>
              <h2 className="d-l">
                One sale. Every<br />consequence recorded.
              </h2>
            </Reveal>
            <Reveal className="c-5" delay={2}>
              <p className="lede">
                A sale is never just a total. FlowZa POS records the stock that moved, the revenue
                line it belongs to, the tax due on it, the tender that settled it and the customer who
                bought it — at the moment the sale clears, not in a nightly job that rebuilds it from
                a total afterwards.
              </p>
            </Reveal>
          </Cols>

          <Cols>
            <Reveal className="c-6">
              <TillReceipt />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Modifiers, combos and discounts land in one tap. Cards, wallets, QR, cash and split
                payments are all one tender screen, and integrated processing settles next day.
              </p>
            </Reveal>

            <Reveal className="c-6" delay={2}>
              <p
                className="mono"
                style={{
                  fontSize: '.625rem',
                  letterSpacing: '.11em',
                  color: 'var(--fg-3)',
                  marginBottom: 'var(--s4)',
                }}
              >
                WRITTEN INTO FLOWZA FINANCE
              </p>
              <PostingList />
              <p className="tiny" style={{ marginTop: 'var(--s5)' }}>
                Stock, revenue, output tax and the tender are in the ledger while the customer is
                still at the counter, and the cost of goods follows the item&rsquo;s Weighted Average
                Cost in Finance. There is no POS-to-accounts reconciliation at month end because
                there was no second copy of the sale to reconcile.
              </p>
            </Reveal>
          </Cols>

          <Reveal style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <KeylineList twoCol items={counterItems} style={{ borderTopColor: 'var(--edge)' }} />
          </Reveal>
        </Wrap>
      </Chapter>

      {/* MULTI-LOCATION */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols>
            <Reveal className="c-5">
              <Eyebrow>Multi-location</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                Every location, one stock position
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Unlimited locations run from one dashboard rather than one installation per shop. Head
                office and the store manager read the same position, which is the difference between
                knowing you are short and finding out at the next stock count.
              </p>
              <KeylineList items={stockItems} style={{ borderTopColor: 'var(--edge)' }} />
            </Reveal>

            <Reveal className="c-7" delay={2}>
              <Panel style={{ padding: 'var(--s5)' }}>
                <SiteStockGrid />
                <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                  Marina Walk falls under cover in three days while Abu Dhabi is carrying nineteen
                  days of it. The alert names both, and the transfer that fixes it is raised from this
                  screen.
                </p>
              </Panel>
              <Reveal style={{ marginTop: 'clamp(32px,4vw,var(--s7))' }}>
                <Quote name="Kwame Boateng" role="Managing Director, Harvest Kitchen Group">
                  {'"We have 12 locations across three cities and FlowZa POS gives me a real-time view of every one of them from my phone. The offline mode saved us during a major outage last year. Not a single sale was lost."'}
                </Quote>
              </Reveal>
            </Reveal>
          </Cols>
        </Wrap>
      </Chapter>

      {/* HARDWARE AND TENDER */}
      <Chapter>
        <Wrap>
          <Cols>
            <Reveal className="c-5">
              <Eyebrow>Hardware</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                Whatever you already own
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Your FlowZa POS subscription covers every device, and none of them have to be bought
                from us. A tablet at a market stall and a Windows terminal in a flagship run the same
                software and the same price list.
              </p>
              <div className="row" style={{ gap: 'var(--s2)' }}>
                <Tag>iPad</Tag>
                <Tag>Android tablet</Tag>
                <Tag>Windows terminal</Tag>
                <Tag>Browser</Tag>
              </div>
              <p className="tiny" style={{ marginTop: 'var(--s5)' }}>
                No proprietary hardware, and no per-terminal licence to count at the end of the year.
              </p>
            </Reveal>

            <Reveal className="c-7" delay={2}>
              <Eyebrow>Tender</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                Every way they want to pay
              </h2>
              <KeylineList twoCol items={tenderItems} style={{ borderTopColor: 'var(--edge)' }} />
            </Reveal>
          </Cols>
        </Wrap>
      </Chapter>

      {/* HOW IT WORKS */}
      <Chapter variant="raised">
        <Wrap>
          <Reveal className="section-head">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="d-l">Selling this afternoon.</h2>
          </Reveal>
          <Reveal className="poshow">
            <div>
              <span className="poshow__n">01</span>
              <h3>Set up in minutes</h3>
              <p className="small">
                Import your product catalogue, set prices, configure payment methods. A first
                transaction is possible within thirty minutes, on a device that is already on the
                counter.
              </p>
            </div>
            <div>
              <span className="poshow__n">02</span>
              <h3>Sell at speed</h3>
              <p className="small">
                An interface tuned for velocity: modifiers, combos and discounts in one tap,
                transactions clearing in under a second, and the same behaviour whether the
                connection is up or not.
              </p>
            </div>
            <div>
              <span className="poshow__n">03</span>
              <h3>Read the numbers</h3>
              <p className="small">
                Hourly sales, peak periods, top products and staff productivity, with AI
                recommendations for menu, pricing and staffing — read from the transactions rather
                than from a monthly summary.
              </p>
            </div>
          </Reveal>
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
