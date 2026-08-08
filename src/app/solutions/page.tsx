import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { KeylineList } from '@/components/KeylineList';
import { RoleSwitcher } from '@/components/RoleSwitcher';
import { HandoffDiagram } from '@/components/HandoffDiagram';

export const metadata: Metadata = {
  title: 'Solutions by function — Flowza',
  description:
    'What finance, operations, revenue and IT each cannot answer today, and what changes when all of them read the same records.',
};

export default function SolutionsPage() {
  return (
    <>
      {/* HERO */}
      <Chapter variant="instrument" style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end' }}>
            <div className="c-7 rv">
              <Eyebrow>Solutions · by function</Eyebrow>
              <h1 className="d-xl">
                Four teams.<br />One set of<br />records.
              </h1>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Finance, operations, revenue and IT are not asking for different data. They are asking different questions of the same data — and paying four vendors to keep four copies of it in sync.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* ROLE SWITCHER */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>The Monday question</Eyebrow>
            <h2 className="d-l">Pick a team. Read what<br />they cannot answer today.</h2>
          </div>
          <RoleSwitcher />
        </Wrap>
      </Chapter>

      {/* HANDOFF DIAGRAM */}
      <Chapter variant="raised">
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Between the teams</Eyebrow>
              <h2 className="d-l">The handoffs stop<br />being handoffs.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Quote to cash crosses three functions. In a fragmented stack, each crossing is an integration with a schedule, a failure mode, and someone who owns the reconciliation.
              </p>
            </div>
          </Cols>

          <div className="panel rv" style={{ padding: 'var(--s6)' }}>
            <HandoffDiagram />
          </div>

          <KeylineList
            twoCol
            className="rv"
            style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}
            items={[
              {
                heading: 'A promise you can keep',
                body: 'The quote reads live availability and live credit exposure, so the delivery date a salesperson commits to is one operations can actually meet.',
              },
              {
                heading: 'Revenue recognised as it is earned',
                body: 'Fulfilment writes to the same transaction the invoice derives from. There is no month-end exercise to work out what shipped and what was billed.',
              },
              {
                heading: 'One owner per exception, not per system',
                body: 'When something breaks it appears once, in one queue, attributed to the step that failed — rather than as three unrelated alerts in three tools.',
              },
              {
                heading: 'Nobody re-keys anything',
                body: 'The largest hidden cost of a fragmented stack is people retyping data that already exists elsewhere in the building. Consolidation removes the job, not just the latency.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* MIGRATION PATHS */}
      <Chapter variant="instrument" net>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Moving from</Eyebrow>
            <h2 className="d-l">Three starting points.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Where you are now determines the sequence, not the destination. Each path ends with one system and a parallel run that proved it.
            </p>
          </div>
          <div className="paths rv">
            <div className="path">
              <span className="path__w">From a legacy ERP</span>
              <h3 className="d-s">Replace the core, keep the calendar</h3>
              <p className="small">
                The incumbent holds your ledger, so the sequence is finance-first. Model the chart of accounts, migrate open items and history, then run both systems through one or two full closes until they agree to the cent. The operational systems — the till, the routes, the roster — follow once the ledger is trusted, and they arrive already holding your parties and items.
              </p>
              <p className="tiny">Typical: 10–16 weeks to cutover.</p>
            </div>
            <div className="path">
              <span className="path__w">From a stack of point tools</span>
              <h3 className="d-s">Consolidate in the order that hurts</h3>
              <p className="small">
                There is no single system of record to replace, so start where the reconciliation cost is highest — usually stock against invoicing. Each system you switch on removes integrations rather than adding them, because it joins the layer instead of connecting to what is already there. The work gets easier as it goes.
              </p>
              <p className="tiny">Typical: 6–10 weeks to first retirement.</p>
            </div>
            <div className="path">
              <span className="path__w">From spreadsheets</span>
              <h3 className="d-s">Structure first, then automate</h3>
              <p className="small">
                Spreadsheets encode real logic that nobody has written down. The first phase is reading them and turning that logic into approval thresholds, roles and workflows. Import is the easy part; agreeing on definitions is the work.
              </p>
              <p className="tiny">Typical: 4–8 weeks to live.</p>
            </div>
          </div>
        </Wrap>
      </Chapter>

      {/* CTA */}
      <Chapter>
        <Wrap>
          <div className="close rv">
            <Eyebrow plain style={{ justifyContent: 'center' }}>Next</Eyebrow>
            <h2 className="d-l">Bring the team that<br />disagrees the most.</h2>
            <p className="lede" style={{ margin: '0 auto var(--s7)' }}>
              The most useful walkthroughs have finance and operations in the same room, working one process end to end until both sides accept the same number.
            </p>
            <div className="row" style={{ justifyContent: 'center' }}>
              <Link className="btn btn--primary" href="/pricing">
                Book a walkthrough <span className="arw">→</span>
              </Link>
              <Link className="btn btn--ghost" href="/industries">
                Solutions by industry
              </Link>
            </div>
          </div>
        </Wrap>
      </Chapter>
    </>
  );
}
