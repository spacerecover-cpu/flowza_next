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
  title: 'The platform — Flowza AI',
  description:
    'Flowza AI is an ecosystem of nine independent cloud applications. Each holds its own data, carries its own subscription and ships on its own release train, built to a common security and compliance standard.',
};

export default function PlatformPage() {
  return (
    <>
      {/* HERO */}
      <Chapter className="phero" net>
        <Wrap>
          <Cols style={{ alignItems: 'end' }}>
            <div className="c-7 rv">
              <Eyebrow>The platform</Eyebrow>
              <h1 className="d-xl">One ecosystem.<br />Nine independent<br />applications.</h1>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Flowza AI is a platform in the ordinary sense of the word: one company, one standard, and
                nine specialised cloud applications built to it. It is not one database wearing nine faces.
                Each application holds its own data and is bought on its own terms. Select a pillar to see
                what that means in practice.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* THE FOUR PILLARS */}
      <Chapter variant="raised" style={{ paddingBlock: 'clamp(48px,6vw,var(--s9))' }}>
        <Wrap>
          <ArchitectureStack />
        </Wrap>
      </Chapter>

      {/* WHAT IS AND IS NOT SHARED */}
      <Chapter id="schema">
        <Wrap>
          <Cols>
            <div className="c-5 rv">
              <Eyebrow>Independence</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>What is common, and what is not</h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                The nine applications have a vendor, a security standard and a regional compliance practice
                in common. They do not have a database in common. An application does not read another
                application&apos;s customers, stock or ledger, and adopting a second one does not change what
                the first one holds.
              </p>
              <p className="small">
                That is a deliberate trade. It means each application can be deployed, priced, upgraded and
                retired on its own schedule, and that no outage or migration in one is capable of reaching
                another.
              </p>
            </div>
            <div className="c-7 rv rv-d2">
              <Table
                caption="What the nine Flowza AI applications have in common and what each one holds independently"
                headers={['Aspect', 'Common to all nine', 'Held by each application']}
                rows={[
                  ['Data', '—', 'Its own database and its own records'],
                  ['Commercials', 'One vendor and one contact', 'Its own pricing and subscription'],
                  ['Releases', 'Engineering standards', 'Its own release train'],
                  ['Security', 'Tenant isolation, SSO, audit log', 'Enforced inside the application'],
                  ['Compliance', 'India and Gulf expertise', 'The statutory engines it needs'],
                  ['API', 'Consistent conventions', 'Its own endpoints and credentials'],
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
                An API for each application you hold
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Every application exposes its own REST and GraphQL API over the records it holds, with the
                caller&apos;s own permissions applied. The conventions are the same across the nine — the same
                auth scheme, the same pagination, the same error shapes — so a client written against one is
                familiar against the next. The credentials and the endpoints are separate, because the
                applications are separate.
              </p>
              <ul className="klist" style={{ borderTopColor: 'var(--edge)' }}>
                <li><h3>Custom objects</h3><p className="small">Extend an application&apos;s schema with your own entities. They inherit its permissions, audit, search and API access automatically.</p></li>
                <li><h3>Functions</h3><p className="small">Run server-side logic on any record event within the application, with the same execution guarantees as first-party logic.</p></li>
                <li><h3>Webhooks</h3><p className="small">Subscribe to events from an application and drive whatever you like downstream — including another Flowza AI application, if that is what you want.</p></li>
              </ul>
            </div>
            <div className="c-6 rv rv-d2">
              <CodeBlock>
                <span className="c"># Flowza POS. Its own host, its own credentials, its own records.</span>{'\n'}
                <span className="k">GET</span> <b>https://pos.flowza.ai/v1/customers/cus_8f21</b>{'\n\n'}
                {'{'}{'\n'}
                {'  '}<span className="s">&quot;id&quot;</span>: <span className="s">&quot;cus_8f21&quot;</span>,{'\n'}
                {'  '}<span className="s">&quot;name&quot;</span>: <span className="s">&quot;Amara Osei&quot;</span>,{'\n'}
                {'  '}<span className="s">&quot;application&quot;</span>: <span className="s">&quot;pos&quot;</span>,{'   '}<span className="c">{'// this record lives here'}</span>{'\n'}
                {'  '}<span className="s">&quot;basket_count&quot;</span>: <b>34</b>,{'\n'}
                {'  '}<span className="s">&quot;last_seen&quot;</span>: <span className="s">&quot;2026-07-30&quot;</span>{'\n'}
                {'}'}
              </CodeBlock>
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                A customer in Flowza POS is a Flowza POS record. If you also run Flowza Club and want the two
                to know about each other, that is an integration you build against both APIs — deliberately,
                and on your terms.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* COVERAGE */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Coverage</Eyebrow>
            <h2 className="d-l">Nine applications.<br />Six business functions.<br />What each one covers.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Read a row to see what a single application covers if it is the only one you buy. Every row
              stands alone — nothing in this table depends on you holding a second application.
            </p>
          </div>

          <RecordMatrix />

          <Cols className="rv" style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-6">
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Read along the Club row</h3>
              <p className="small">
                Five marks out of six. A club is an unusually complete business in one building — it sells,
                it holds stock, it bills, it rosters and it books facilities — so the application that runs
                one has to cover nearly all of it without help.
              </p>
            </div>
            <div className="c-6">
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Read along the RentFlow row</h3>
              <p className="small">
                Two marks out of six, and that is the honest answer. RentFlow screens and decides tenant
                applications. It is a small, focused product, and the table says so rather than dressing the
                gaps up as something you can fill from elsewhere in the range.
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
