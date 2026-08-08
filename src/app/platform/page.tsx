import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { Table } from '@/components/Table';
import { CodeBlock } from '@/components/CodeBlock';
import { ArchitectureStack } from '@/components/ArchitectureStack';
import { RecordMatrix } from '@/components/RecordMatrix';

export const metadata: Metadata = {
  title: 'Platform architecture — Flowza',
  description:
    'Nine systems on one shared data layer. The six record types all nine agree on, the shared identity, permission and tax services above them, and exactly which system writes which record.',
};

export default function PlatformPage() {
  return (
    <>
      {/* HERO */}
      <Chapter className="phero" net>
        <Wrap>
          <Cols style={{ alignItems: 'end' }}>
            <div className="c-7 rv">
              <Eyebrow>Platform architecture</Eyebrow>
              <h1 className="d-xl">The layer<br />underneath<br />all nine.</h1>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Most suites are separate products sharing a login page, which is why they still ask you to
                import your customer list. Flowza&apos;s nine are separate products sharing a data layer. Only
                the top of this stack comes in nine — everything below it exists once. Select a layer to see
                what it holds.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* ARCHITECTURE STACK */}
      <Chapter variant="raised" style={{ paddingBlock: 'clamp(48px,6vw,var(--s9))' }}>
        <Wrap>
          <ArchitectureStack />
        </Wrap>
      </Chapter>

      {/* SCHEMA */}
      <Chapter id="schema">
        <Wrap>
          <Cols>
            <div className="c-5 rv">
              <Eyebrow>The schema</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>Six objects all nine agree on</h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                These are not synchronised copies with a mapping table between them. There is one physical
                record, and each system holds a reference to it. That single constraint is what &quot;one
                operating fabric&quot; means in practice — remove it and Flowza would be a suite like any
                other.
              </p>
              <p className="small">
                A party is the clearest case. The same row is a customer at the till, a member at the club, a
                guest at the spa and an applicant in RentFlow. Nobody built a matching key, because nothing
                was ever separate enough to need matching.
              </p>
            </div>
            <div className="c-7 rv rv-d2">
              <Table
                caption="The six shared record types, their identifier prefixes, and the Flowza systems that read or write each one"
                headers={['Object', 'Identifier', 'Read and written by']}
                rows={[
                  ['Party', <code key="par">par_</code>, 'Finance, POS, Club, Spa Master, RentFlow, LogisPro, QRForge'],
                  ['Item', <code key="itm">itm_</code>, 'Finance, POS, LogisPro, Spa Master, Fleetza, Club, QRForge'],
                  ['Ledger entry', <code key="ent">ent_</code>, 'Finance, POS, Club, Spa Master'],
                  ['Location', <code key="loc">loc_</code>, 'LogisPro, Fleetza, Club, Spa Master, POS, QRForge, Finance'],
                  ['Person', <code key="psn">psn_</code>, 'Finance, PMS, LogisPro, Fleetza, Spa Master, Club, POS'],
                  ['Document', <code key="doc">doc_</code>, 'Finance, QRForge, RentFlow, PMS, LogisPro, Fleetza'],
                ]}
              />
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* DEVELOPERS */}
      <Chapter id="api" variant="instrument" net>
        <Wrap>
          <Cols>
            <div className="c-6 rv">
              <Eyebrow>Developers</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                One API surface, whichever of the nine you bought
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Every object is reachable over REST and GraphQL with identical semantics and the caller&apos;s
                own permissions applied. There is no per-system authentication, no separate sandbox
                credentials for each subdomain, and no endpoint that exists only in one product. You
                authenticate against Flowza, not against Club or POS.
              </p>
              <ul className="klist" style={{ borderTopColor: 'var(--edge)' }}>
                <li><h3>Custom objects</h3><p className="small">Extend the schema with your own entities. They inherit permissions, audit, search and API access automatically.</p></li>
                <li><h3>Functions</h3><p className="small">Run server-side logic on any record event, with the same execution guarantees as first-party logic.</p></li>
                <li><h3>Tenant branching</h3><p className="small">Fork production into a sandbox with masked data, test a change, then promote it.</p></li>
              </ul>
            </div>
            <div className="c-6 rv rv-d2">
              <CodeBlock>
                <span className="c"># One person. Four systems met her. There is still one row.</span>{'\n'}
                <span className="k">GET</span> <b>/v1/parties/par_8f21</b>?expand=entries,bookings,visits{'\n\n'}
                {'{'}{'\n'}
                {'  '}<span className="s">&quot;id&quot;</span>: <span className="s">&quot;par_8f21&quot;</span>,{'\n'}
                {'  '}<span className="s">&quot;name&quot;</span>: <span className="s">&quot;Amara Osei&quot;</span>,{'\n'}
                {'  '}<span className="s">&quot;known_to&quot;</span>: [ <span className="s">&quot;pos&quot;</span>, <span className="s">&quot;club&quot;</span>, <span className="s">&quot;spamaster&quot;</span> ],{'\n'}
                {'  '}<span className="s">&quot;account_balance&quot;</span>: <b>4310.00</b>,{'   '}<span className="c">{'// Club dues + chits'}</span>{'\n'}
                {'  '}<span className="s">&quot;entries&quot;</span>:{'  '}[ <span className="s">&quot;ent_a41&quot;</span>, <span className="s">&quot;ent_a55&quot;</span> ],{'\n'}
                {'  '}<span className="s">&quot;bookings&quot;</span>: [ <span className="s">&quot;bkg_7c2&quot;</span> ],{'\n'}
                {'  '}<span className="s">&quot;visits&quot;</span>:{'   '}[ <span className="s">&quot;vst_301&quot;</span>, <span className="s">&quot;vst_318&quot;</span> ]{'\n'}
                {'}'}
              </CodeBlock>
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                The balance is computed from posted entries at read time — there is no field to keep in sync,
                and no job that copies her from the till into the club.{' '}
                <code style={{ fontFamily: 'var(--mono)', color: 'var(--sig)' }}>known_to</code> is derived
                from which systems have written against the row, not stored on it.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* COVERAGE — the record matrix */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Coverage</Eyebrow>
            <h2 className="d-l">Nine systems.<br />Six record types.<br />Exactly where they meet.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              The whole architecture, on one page. Read a row to see what a system contributes; read a column
              to see how many of the nine depend on the same rows. This is the map — there is no second one.
            </p>
          </div>

          <RecordMatrix />

          <Cols className="rv" style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-6">
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Read down the party column</h3>
              <p className="small">
                Five of the nine write to it. That is why the person who buys at your till, holds your
                membership, books your treatment room and applies for your tenancy is one row with one
                history — and why nobody had to build a matching key, a customer master or a nightly
                de-duplication job.
              </p>
            </div>
            <div className="c-6">
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Read along the RentFlow row</h3>
              <p className="small">
                Two marks out of six. A shared layer does not mean everything touches everything — it means a
                record is present wherever it is relevant. RentFlow is a small, focused system, and the
                architecture is honest about that rather than dressing it up as an integration.
              </p>
            </div>
          </Cols>

          <div className="row rv" style={{ marginTop: 'var(--s8)' }}>
            <Link className="btn btn--primary" href="/pricing">Book a walkthrough <span className="arw">→</span></Link>
            <Link className="btn btn--ghost" href="/enterprise">Security and compliance</Link>
          </div>
        </Wrap>
      </Chapter>
    </>
  );
}
