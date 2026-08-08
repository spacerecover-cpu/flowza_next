import type { Metadata } from 'next';
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
import { InvoiceExtraction } from '@/components/InvoiceExtraction';
import { ProposedJournal } from '@/components/ProposedJournal';
import { DriftCheck } from '@/components/DriftCheck';
import { LedgerSpine } from '@/components/LedgerSpine';
import { BackOfficeModules } from '@/components/BackOfficeModules';
import { ComplianceMatrix } from '@/components/ComplianceMatrix';
import { FINANCE_INTEGRATIONS, FINANCE_SECURITY } from '@/lib/data/finance';

export const metadata: Metadata = {
  title: 'Flowza Finance — accounting, ERP and payroll on one ledger',
  description:
    'Sales, purchases, inventory, double-entry accounting, payroll and HR posting to one connected ledger, with GST for India and VAT and corporate tax for the Gulf built in rather than bolted on.',
};

const METRICS = [
  { value: '40+', label: 'functional modules on one platform' },
  { value: '85%', label: 'less manual back-office work' },
  { value: '4', label: 'countries compliant, India and the Gulf' },
  { value: '99.8%', label: 'transaction categorisation accuracy' },
];

const countryItems = [
  {
    heading: 'Country packs, not country projects',
    body: 'Each of the four ships with its own chart-of-accounts pack and its own statutory payroll filings. Adding an entity in another of them is configuration and a period of parallel running, not a second implementation.',
  },
  {
    heading: 'Multi-currency, revalued',
    body: 'Transactions post in the currency they happened in. Balances in foreign currency are revalued on the rate source you configure, and the revaluation posts as a journal you can open and read like any other.',
  },
  {
    heading: 'One entity or a whole group',
    body: 'A group runs on one platform with audit-ready books per entity and role-scoped views on top, so a country controller, the group accountant and an investor each see the same numbers at the depth they are entitled to.',
  },
];

const controlItems = [
  {
    heading: 'Perpetual inventory, automatic COGS',
    body: 'Stock is valued on Weighted Average Cost as movements happen, and cost of goods posts itself on the same transaction that ships the item. Stock and books agree because they are the same event, not two records of it.',
  },
  {
    heading: 'Period locks',
    body: 'A closed period stops accepting entries. Anything that arrives late is a dated adjustment in an open period with a reason attached, which is what an auditor expects to find.',
  },
  {
    heading: 'An append-only audit trail',
    body: 'Every action is recorded, including the ones the AI proposed and the person who accepted them. Records are soft-deleted and recoverable rather than erased.',
  },
];

const faqItems = [
  {
    question: 'Can we bring our books over from Zoho or a spreadsheet?',
    answer:
      'That is what the migration wizard is for. Contacts, items and history come across, and your chart of accounts is imported as it stands. Most teams take the opportunity to retire accounts nobody has posted to in three years, but that is a choice rather than a requirement of the move.',
  },
  {
    question: 'What happens when the AI codes something incorrectly?',
    answer:
      'You correct it, and the correction becomes a rule that shows up on the next document from that supplier. Categorisation accuracy across posted transactions is 99.8%, but the number that matters more is that nothing has to post unreviewed: a proposal carries the source line it came from, and whoever accepts it is named in the audit trail beside it.',
  },
  {
    question: 'Do payroll and HR genuinely run in the same place as the ledger?',
    answer:
      'Yes, and that is the point of buying it. Salary structures, payslips, overtime, arrears, loans and Earned Wage Access sit alongside recruitment, onboarding, leave, attendance, shift scheduling, performance and timesheets, with an employee self-service portal on top. A salary run posts to the ledger as it completes, and statutory files — Form 16, ESI, PT, TDS, WPS — come out of the same run.',
  },
  {
    question: 'We run several entities in several currencies. Is that one platform?',
    answer:
      'One platform, one entity or a whole group. Each entity keeps its own functional currency, tax registration and chart-of-accounts pack; balances in foreign currency are revalued on your configured rate source; period locks are per entity. Group reporting reads the entities rather than consolidating exports from them.',
  },
  {
    question: 'Which reports do we get, and can the auditors have them?',
    answer:
      'Over 40 financial and operational reports, including trial balance, P&L, balance sheet, cash flow and ageing, exportable to PDF, Excel, CSV or print. Dashboards carry an AI-written narrative of what changed. Auditors and accountants get role-scoped access to the live books, which is faster for them than a folder of PDFs and harder to get wrong.',
  },
];

const relatedLinks = [
  { href: '/products/pos', title: 'Flowza POS', subtitle: 'Retail and F&B transactions at source' },
  { href: '/products/pms', title: 'Flowza PMS', subtitle: 'Rate, calibrate and pay on one system' },
  { href: '/platform', title: 'Platform', subtitle: 'The shared data layer, and what it does not claim' },
];

export default function FinancePage() {
  return (
    <>
      {/* HERO — the document, and what Flowza read off it */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'center' }}>
            <Reveal className="c-6">
              <div className="pbadge">
                <span className="pbadge__m">
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M9 2v14M5.5 5.5h5a2.5 2.5 0 010 5h-3a2.5 2.5 0 000 5h5"
                      stroke="#F6F6F3"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <span className="pbadge__t">Flowza Finance</span>
              </div>
              <ProductBadges badges={['Accounting + inventory', 'Payroll & HR', 'India + Gulf tax']} />
              <h1 className="d-xl" style={{ marginBottom: 'var(--s5)' }}>
                A ledger that<br />shows its<br />working.
              </h1>
              <p className="lede" style={{ marginBottom: 'var(--s5)' }}>
                Accounting, ERP and payroll on one ledger. Sales, purchases, inventory, banking,
                payroll and HR all post to the same double-entry books, so there is no export, no
                re-keying and no five-tool patchwork to reconcile at the end of the month.
              </p>
              <p className="small" style={{ marginBottom: 'var(--s7)', maxWidth: '56ch' }}>
                Flowza reads the document, proposes the entry and cites the line it came from. You
                approve or correct it, and the correction becomes a rule — so the same invoice never
                asks the same question twice.
              </p>
              <div className="row" style={{ marginBottom: 'var(--s5)' }}>
                <a
                  className="btn btn--primary"
                  href="https://finance.flowza.ai/trial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a trial <span className="arw">→</span>
                </a>
                <a className="btn btn--ghost" href="#fin-entry">
                  See how an entry is built
                </a>
              </div>
              <AppLink host="finance.flowza.ai" />
            </Reveal>

            <Reveal className="c-6" delay={2}>
              <InvoiceExtraction />
            </Reveal>
          </Cols>

          <Reveal delay={3} style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <Metrics items={METRICS} />
          </Reveal>
        </Wrap>
      </Chapter>

      {/* THE PROPOSAL AND THE CLOSE */}
      <Chapter variant="raised" id="fin-entry">
        <Wrap>
          <Cols>
            <Reveal className="c-7">
              <Eyebrow>The proposal</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                Entries arrive drafted, not blank
              </h2>
              <ProposedJournal />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                <Tag variant="ai" style={{ marginRight: '8px' }}>
                  AI
                </Tag>
                Highlighted rows were proposed by Flowza, with the source line on the document
                attached to each one. Categorisation runs at 99.8% accuracy across posted
                transactions; rejecting a row teaches the rule rather than just fixing the entry.
                Once it posts, the bracket cost moves the item&rsquo;s Weighted Average Cost, so the
                stock valuation and the books change in the same breath.
              </p>
            </Reveal>

            <Reveal className="c-5" delay={2}>
              <Eyebrow>The close</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                Shorter, because it started earlier
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Most of a month-end is catching up on coding and matching that could have happened
                when the document arrived. When that work is continuous — and when payroll, stock and
                sales are already on the same ledger — the close is mostly review.
              </p>
              <div className="cal" aria-hidden="true">
                <span className="was">1</span>
                <span className="was">2</span>
                <span className="was">3</span>
                <span className="was">4</span>
                <span className="was">5</span>
                <span className="was">6</span>
                <span className="was">7</span>
                <span className="now">8</span>
                <span className="now">9</span>
                <span className="now">10</span>
                <span className="was">11</span>
                <span />
                <span />
                <span />
              </div>
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Grey: a typical close spent chasing coding, matching and accruals. Green: the review
                days that remain once that work runs continuously.
              </p>
            </Reveal>
          </Cols>

          <Reveal style={{ marginTop: 'clamp(40px,5vw,var(--s8))', maxWidth: '80ch' }}>
            <Quote name="Amara Osei" role="CFO, Brightline Retail Group">
              {'"FlowZa Finance cut our monthly close from 5 days to 6 hours. The AI categorization is eerily accurate and the real-time dashboards have completely changed how our board reviews performance."'}
            </Quote>
          </Reveal>
        </Wrap>
      </Chapter>

      {/* EIGHT MODULES, ONE LEDGER LINE */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Reveal className="section-head">
            <Eyebrow>Every function, one ledger</Eyebrow>
            <h2 className="d-l">
              Eight parts of the back office.<br />One line they all post to.
            </h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              This is the whole argument for the product. Sales does not keep its own numbers and
              hand them over; payroll does not arrive as a journal someone types up. Each of the
              eight modules writes onto the same double-entry ledger as it works, which is why the
              trial balance is a live document rather than a monthly reconstruction.
            </p>
          </Reveal>

          <Reveal>
            <LedgerSpine />
          </Reveal>

          <Reveal style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <BackOfficeModules />
          </Reveal>
        </Wrap>
      </Chapter>

      {/* COMPLIANCE — FOUR COUNTRIES, STATED AS A GRID */}
      <Chapter>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <Reveal className="c-7">
              <Eyebrow>Compliance</Eyebrow>
              <h2 className="d-l">
                Four countries, and what<br />each one actually asks for.
              </h2>
            </Reveal>
            <Reveal className="c-5" delay={2}>
              <p className="lede">
                Tax engines, statutory payroll filings and country chart-of-accounts packs ship with
                the product rather than as an implementation project. Here is the coverage, stated as
                a grid so you can see the edges of it as well as the middle.
              </p>
            </Reveal>
          </Cols>

          <Reveal>
            <Panel style={{ padding: 'var(--s5)' }}>
              <ComplianceMatrix />
            </Panel>
          </Reveal>

          <Reveal style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <KeylineList twoCol items={countryItems} style={{ borderTopColor: 'var(--edge)' }} />
          </Reveal>
        </Wrap>
      </Chapter>

      {/* CONTROLS — THE NIGHTLY DRIFT CHECK */}
      <Chapter variant="raised">
        <Wrap>
          <Cols>
            <Reveal className="c-5">
              <Eyebrow>Controls</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                Books that check themselves
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Drift between a sub-ledger and the general ledger is the ordinary way books go wrong:
                a stock adjustment, a voided receipt, a payroll correction posted one side only.
                Flowza reconciles every sub-ledger against its control account nightly and tells you
                which document caused the difference, in the days when it is still cheap to fix.
              </p>
              <KeylineList items={controlItems} style={{ borderTopColor: 'var(--edge)' }} />
            </Reveal>

            <Reveal className="c-7" delay={2}>
              <Panel style={{ padding: 'var(--s5)' }}>
                <div
                  className="row"
                  style={{ justifyContent: 'space-between', marginBottom: 'var(--s5)' }}
                >
                  <span
                    className="mono"
                    style={{ fontSize: '.625rem', letterSpacing: '.11em', color: 'var(--fg-3)' }}
                  >
                    NIGHTLY DRIFT CHECK · 02:00
                  </span>
                  <Tag variant="sig">1 exception</Tag>
                </div>
                <DriftCheck />
                <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                  The flagged line names the document behind it — a stock write-down entered against
                  a period that had already been locked. It surfaces the morning after it happened
                  rather than in the week before a filing, which is the entire point of running the
                  check every night.
                </p>
              </Panel>
            </Reveal>
          </Cols>
        </Wrap>
      </Chapter>

      {/* HOW IT WORKS */}
      <Chapter>
        <Wrap>
          <Reveal className="section-head">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="d-l">Set up, run, file.</h2>
          </Reveal>
          <Reveal as="ol" className="fsteps">
            <li>
              <span className="fsteps__n">01</span>
              <h3>Set up your organisation</h3>
              <div>
                <p className="small">
                  Add your company, your chart of accounts and your team. Then bring contacts, items
                  and history across from Zoho or from spreadsheets with the built-in migration
                  wizard — your existing chart comes over as it is, so opening balances and last
                  year&rsquo;s comparatives still tie.
                </p>
              </div>
            </li>
            <li>
              <span className="fsteps__n">02</span>
              <h3>Run the whole back office</h3>
              <div>
                <p className="small">
                  Invoice customers, raise purchase orders, track stock, run payroll and manage your
                  people. Every one of those transactions posts to the ledger on its own — no journal
                  to write up afterwards, no month-end upload from a payroll bureau, no stock
                  valuation typed in from a spreadsheet.
                </p>
              </div>
            </li>
            <li>
              <span className="fsteps__n">03</span>
              <h3>Report and stay compliant</h3>
              <div>
                <p className="small">
                  Dashboards update as you work. GST and VAT returns file on schedule from the same
                  postings. Over 40 reports — trial balance, P&amp;L, balance sheet, cash flow and
                  ageing — export to PDF, Excel or CSV, each with a plain-English AI summary of what
                  moved and why, and accountants and investors get role-scoped views instead of a
                  folder of attachments.
                </p>
              </div>
            </li>
          </Reveal>
        </Wrap>
      </Chapter>

      {/* CONNECTIONS AND SECURITY */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols>
            <Reveal className="c-5">
              <Eyebrow>Connections</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                What it plugs into
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Money in, messages out, attendance in. These are the connections the product ships
                with — and the reason a payment or a fingerprint does not need a person to carry it
                into the ledger.
              </p>
              <div className="row" style={{ gap: 'var(--s2)' }}>
                {FINANCE_INTEGRATIONS.map((name) => (
                  <Tag key={name}>{name}</Tag>
                ))}
              </div>
              <p className="tiny" style={{ marginTop: 'var(--s5)' }}>
                Biometric devices feed attendance straight into payroll. Zoho import is how most
                teams arrive.
              </p>
            </Reveal>

            <Reveal className="c-7" delay={2}>
              <Eyebrow>Security</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                Who can see what, and what it remembers
              </h2>
              <KeylineList
                twoCol
                items={FINANCE_SECURITY}
                style={{ borderTopColor: 'var(--edge)' }}
              />
            </Reveal>
          </Cols>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <Reveal as="h2" className="d-m" style={{ marginBottom: 'var(--s7)' }}>
            Questions finance teams ask
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
