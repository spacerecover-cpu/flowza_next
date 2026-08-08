import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FragmentationDiagram } from '@/components/FragmentationDiagram';
import { SystemExplorer } from '@/components/SystemExplorer';
import { OrchestrationCanvas } from '@/components/OrchestrationCanvas';
import { DayTimeline } from '@/components/DayTimeline';
import { ProductExplorer } from '@/components/ProductExplorer';
import { CountUp } from '@/components/CountUp';

export const metadata: Metadata = {
  // Absolute: the site's own home title already carries the brand, so the
  // layout's "%s — Flowza" template must not be applied on top of it.
  title: { absolute: 'Flowza — nine business systems, one operating fabric' },
  description:
    'Flowza runs nine purpose-built business systems for MEA and India — Finance, LogisPro, Spa Master, Fleetza, QRForge, POS, Club, RentFlow and PMS — on one shared data layer, so customers, inventory and ledger entries move between them without re-entry.',
};

export default function HomePage() {
  return (
    <>
      {/* 1 · OPENING */}
      <Chapter className="hero" net>
        <Wrap>
          <div className="hero__grid">
            <div className="rv in">
              <Eyebrow>Business operating systems for MEA and India</Eyebrow>
              <h1 className="d-xl">
                Nine systems.<br />One operating<br />fabric.
              </h1>
              <p className="lede">
                Finance, logistics, wellness, fleet, codes, retail, clubs, rentals and performance each
                run as their own system, on their own app. What they share is the layer underneath — so a
                customer, a stock item or a ledger entry created in one is already present in the rest.
                Nothing is re-entered, because there is only ever one copy.
              </p>
              <div className="hero__cta">
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <Link className="btn btn--ghost" href="/#systems">
                  See what they share
                </Link>
              </div>
              <p className="hero__note">
                Nine live products. Compliant in India, the UAE, Oman and Saudi Arabia.
              </p>
            </div>

            <div className="rv in rv-d2">
              <svg
                className="dgm"
                viewBox="0 0 480 400"
                role="img"
                aria-label="Diagram of the Flowza architecture. Nine named systems — Finance, LogisPro, Spa Master, Fleetza, QRForge above, and POS, Club, RentFlow, PMS below — each connect by a single line to one shared data layer running across the middle. The layer carries three named channels: party, item and ledger entry. The systems connect to the layer rather than to one another."
              >
                {/* the shared layer */}
                <rect className="node-core" x="18" y="178" width="444" height="68" rx="3" />
                <text x="20" y="166" fontSize="8.5" fill="var(--slate-2)">THE SHARED DATA LAYER</text>
                <g fontSize="8" fill="var(--on-dark-2)">
                  <text x="32" y="199">PARTY</text><text x="32" y="216">ITEM</text><text x="32" y="233">ENTRY</text>
                </g>
                <g stroke="var(--ledger-dark)" strokeWidth="1" opacity=".75">
                  <path d="M78 195.5H446" /><path d="M78 212.5H446" /><path d="M78 229.5H446" />
                </g>

                {/* five systems above */}
                <g>
                  <rect className="node" x="12" y="52" width="82" height="30" rx="2" /><text x="21" y="71" fontSize="8">FINANCE</text>
                  <rect className="node" x="106" y="52" width="82" height="30" rx="2" /><text x="115" y="71" fontSize="8">LOGISPRO</text>
                  <rect className="node" x="200" y="52" width="82" height="30" rx="2" /><text x="209" y="71" fontSize="8">SPA MASTER</text>
                  <rect className="node" x="294" y="52" width="82" height="30" rx="2" /><text x="303" y="71" fontSize="8">FLEETZA</text>
                  <rect className="node" x="388" y="52" width="82" height="30" rx="2" /><text x="397" y="71" fontSize="8">QRFORGE</text>
                </g>
                {/* four systems below */}
                <g>
                  <rect className="node" x="59" y="342" width="82" height="30" rx="2" /><text x="68" y="361" fontSize="8">POS</text>
                  <rect className="node" x="153" y="342" width="82" height="30" rx="2" /><text x="162" y="361" fontSize="8">CLUB</text>
                  <rect className="node" x="247" y="342" width="82" height="30" rx="2" /><text x="256" y="361" fontSize="8">RENTFLOW</text>
                  <rect className="node" x="341" y="342" width="82" height="30" rx="2" /><text x="350" y="361" fontSize="8">PMS</text>
                </g>

                <g className="wire">
                  <path d="M53 82V178" /><path d="M147 82V178" /><path d="M241 82V178" /><path d="M335 82V178" /><path d="M429 82V178" />
                  <path d="M100 342V246" /><path d="M194 342V246" /><path d="M288 342V246" /><path d="M382 342V246" />
                </g>
                <g className="wire-live" style={{ '--len': '880' } as React.CSSProperties}>
                  <path d="M53 82V178" /><path d="M147 82V178" /><path d="M241 82V178" /><path d="M335 82V178" /><path d="M429 82V178" />
                  <path d="M100 342V246" /><path d="M194 342V246" /><path d="M288 342V246" /><path d="M382 342V246" />
                </g>

                <text x="18" y="392" fontSize="8.5" fill="var(--slate-2)">
                  NINE CONNECTIONS TO ONE LAYER · NOT THIRTY-SIX TO EACH OTHER
                </text>
              </svg>
            </div>
          </div>

          <div className="facts rv">
            <div><div className="facts__n">9</div><div className="facts__l">live systems on one shared data layer</div></div>
            <div><div className="facts__n">1</div><div className="facts__l">definition of a customer, an item, an entry</div></div>
            <div><div className="facts__n">0</div><div className="facts__l">exports or re-keying between them</div></div>
            <div><div className="facts__n">4</div><div className="facts__l">countries compliant — India and the Gulf</div></div>
          </div>
        </Wrap>
      </Chapter>

      {/* 2 · THE PROBLEM */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="d-l">
              Your company doesn&apos;t have a<br />data problem. It has eleven<br />databases.
            </h2>
          </div>

          <Cols>
            <div className="c-5 rv">
              <p className="body-l" style={{ marginBottom: 'var(--s5)' }}>
                Every department bought the best tool for its own job. Each one arrived with its own customer
                record, its own permission model, and its own definition of revenue. None of that was a
                mistake — it was the only option available.
              </p>
              <p className="body-l" style={{ marginBottom: 'var(--s6)' }}>
                The cost shows up later, in the space between the tools. Integration middleware copies rows
                from one system to another on a schedule. Someone reconciles what doesn&apos;t match. And the
                numbers in the board pack are always a few days old.
              </p>
              <div className="mathline" style={{ borderTop: '1px solid var(--line)', paddingTop: 'var(--s5)' }}>
                <b className="num">11</b><span>systems</span>
                <b className="num">55</b><span>possible integration paths</span>
              </div>
              <p className="tiny" style={{ marginTop: 'var(--s3)' }}>
                Connections grow at n(n−1)/2. Every tool you add costs more than the last one.
              </p>
              <div
                className="mathline"
                style={{ borderTop: '1px solid var(--line)', paddingTop: 'var(--s5)', marginTop: 'var(--s5)' }}
              >
                <b className="num">9</b><span>Flowza systems</span>
                <b className="num">0</b><span>integration paths</span>
              </div>
              <p className="tiny" style={{ marginTop: 'var(--s3)' }}>
                Flowza is nine systems too. The difference is what they connect to — nine lines down to one
                shared layer, rather than thirty-six lines across to each other. That is the entire
                architectural argument, and everything below is a consequence of it.
              </p>
            </div>

            <div className="c-7 rv rv-d2">
              <FragmentationDiagram />
            </div>
          </Cols>

          <ul className="klist klist--2 rv" style={{ marginTop: 'clamp(48px,6vw,var(--s9))' }}>
            <li>
              <h3>Reconciliation becomes a job</h3>
              <p className="small">When two systems disagree about what a customer ordered, a person decides who is right. That work has a salary attached to it, and it repeats every month.</p>
            </li>
            <li>
              <h3>Every number is a lagging number</h3>
              <p className="small">Sync windows are measured in hours. By the time inventory reaches the finance system, the decision that needed it has already been made.</p>
            </li>
            <li>
              <h3>AI can only see one silo at a time</h3>
              <p className="small">An assistant bolted onto the CRM can answer questions about the CRM. It cannot tell you that the deal you are about to sign depends on stock you have already committed elsewhere.</p>
            </li>
          </ul>
        </Wrap>
      </Chapter>

      {/* 3 · THE SHIFT */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end' }}>
            <div className="c-7 rv">
              <Eyebrow>The shift</Eyebrow>
              <h2 className="d-l">One layer<br />underneath all nine.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Flowza is not one application pretending to be nine, and it is not nine applications
                pretending to be one. It is nine systems, each good at its own job, writing to and reading
                from the same records.
              </p>
            </div>
          </Cols>

          <Cols style={{ marginTop: 'clamp(48px,6vw,var(--s9))' }}>
            <div className="c-4 rv">
              <p className="mono" style={{ fontSize: '.6875rem', letterSpacing: '.12em', color: 'var(--sig)', marginBottom: 'var(--s4)' }}>01 — SHARED RECORDS</p>
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>A customer is one row</h3>
              <p className="small">The person who buys at the till, holds the membership and books the treatment is one party record. Correct the phone number in any of the three and it is correct in all of them, immediately, because there was never a second copy to update.</p>
            </div>
            <div className="c-4 rv rv-d2">
              <p className="mono" style={{ fontSize: '.6875rem', letterSpacing: '.12em', color: 'var(--sig)', marginBottom: 'var(--s4)' }}>02 — SHARED PERMISSIONS</p>
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Access defined once</h3>
              <p className="small">Roles are declared against the layer, not inside each system. A regional controller sees their region&apos;s ledgers, their region&apos;s stock and their region&apos;s headcount under one rule, across every system they open — including when the AI answers on their behalf.</p>
            </div>
            <div className="c-4 rv rv-d3">
              <p className="mono" style={{ fontSize: '.6875rem', letterSpacing: '.12em', color: 'var(--sig)', marginBottom: 'var(--s4)' }}>03 — SHARED HISTORY</p>
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>One audit trail</h3>
              <p className="small">Every write is versioned and attributable, whether it came from a person, an API call or an agent, and whichever of the nine it came through. Reconstructing what happened is a query, not an investigation across nine log formats.</p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* 4 · THE NINE */}
      <Chapter id="systems">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>The nine</Eyebrow>
            <h2 className="d-l">Pick a system. See what<br />it shares, and with<br />which of the others.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Each one runs on its own app, with its own screens and its own release. None of them keeps a
              private copy of your customer, your stock or your ledger. Select a system to see what it
              writes into the shared layer, what it reads back out, and which of the other eight that
              connects it to.
            </p>
          </div>

          <SystemExplorer />

          <p className="tiny rv" style={{ marginTop: 'var(--s5)', maxWidth: '78ch' }}>
            Not every system touches every other, and the diagram does not pretend otherwise. RentFlow
            exchanges one record type with one system; Finance exchanges four with seven. A shared layer
            means a record is available where it is relevant, not that everything is wired to everything.
          </p>
        </Wrap>
      </Chapter>

      {/* 5 · AI */}
      <Chapter variant="instrument" id="ai" net>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Intelligence</Eyebrow>
            <h2 className="d-l">AI that can act, because it<br />reads all nine at once.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              An assistant bolted onto one product can only answer for that product. Copilot queries the
              shared layer, so a question that spans the till, the warehouse and the ledger is one question.
              It resolves the request against live records, builds the steps, and executes them under the
              same permissions the requester has. Nothing runs that a person could not have run themselves.
            </p>
          </div>

          <OrchestrationCanvas />

          <Cols style={{ marginTop: 'clamp(56px,7vw,var(--s9))' }}>
            <div className="c-5 rv">
              <h3 className="d-m" style={{ marginBottom: 'var(--s4)' }}>A day, with the work removed</h3>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Most automation is invisible until it fails. Drag through an ordinary Tuesday to see where Flowza acted
                on its own, and where it stopped to ask.
              </p>
              <div className="row" style={{ gap: 'var(--s5)' }}>
                <span className="row" style={{ gap: '7px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--amber-dark)', display: 'inline-block' }} />
                  <span className="tiny">AI acted</span>
                </span>
                <span className="row" style={{ gap: '7px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', border: '1.5px solid var(--on-dark-3)', display: 'inline-block' }} />
                  <span className="tiny">Person acted</span>
                </span>
              </div>
            </div>
            <div className="c-7 rv rv-d2">
              <DayTimeline />
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* 6 · WHAT YOU SEE */}
      <Chapter>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Analytics</Eyebrow>
              <h2 className="d-l">Reporting that reads the<br />records, not a copy of them.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                There is no warehouse to load and no nightly job to wait for. A dashboard is a query against the same
                rows the operators are editing, which is why the number on screen matches the number in the system it
                came from.
              </p>
            </div>
          </Cols>

          <div className="ui rv">
            <div className="ui__chrome">
              <span className="ui__dot" /><span className="ui__dot" /><span className="ui__dot" />
              <span className="ui__path">flowza · operations / overview</span>
              <span className="tag tag--sig" style={{ marginLeft: 'auto' }}>Live</span>
            </div>
            <div className="ui__body">
              <div className="ui__rail" aria-hidden="true">
                <i className="on" /><i /><i /><i /><i /><i />
              </div>
              <div className="ui__main">
                <div className="ui__kpis">
                  <div className="kpi">
                    <div className="kpi__l">Cash position</div>
                    <div className="kpi__v"><CountUp target={6.0} decimalPlaces={1} prefix="$" />M</div>
                    <div className="kpi__d">+11.4% vs Q1</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi__l">Open orders</div>
                    <div className="kpi__v"><CountUp target={1284} /></div>
                    <div className="kpi__d">142 awaiting stock</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi__l">Gross margin</div>
                    <div className="kpi__v"><CountUp target={38.6} decimalPlaces={1} />%</div>
                    <div className="kpi__d">+0.8pt</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi__l">Days to close</div>
                    <div className="kpi__v"><CountUp target={3.2} decimalPlaces={1} /></div>
                    <div className="kpi__d">from 9.5</div>
                  </div>
                </div>

                <div className="ui__charts">
                  <div className="chartbox">
                    <div className="row" style={{ justifyContent: 'space-between', marginBottom: 'var(--s4)' }}>
                      <h3>Cash position · 12 months</h3>
                      <span className="tag tag--ai">Forecast</span>
                    </div>
                    <svg viewBox="0 0 560 180" className="dgm" role="img" aria-label="Line chart showing cash position rising from 3.2 to 6.0 million over twelve months, with the final two months shown as an AI forecast">
                      <g stroke="var(--edge-2)" strokeWidth="1">
                        <path d="M20 20H540" /><path d="M20 62H540" /><path d="M20 104H540" /><path d="M20 146H540" />
                      </g>
                      <path d="M20 143.5L67 151.8L114 135.3L161 114.7L208 122.9L255 102.4L302 86.1L349 94.1L396 65.3L443 48.8L443 160L20 160Z" fill="var(--ledger-wash)" stroke="none" />
                      <path className="spark" style={{ '--len': '520' } as React.CSSProperties} d="M20 143.5L67 151.8L114 135.3L161 114.7L208 122.9L255 102.4L302 86.1L349 94.1L396 65.3L443 48.8" fill="none" stroke="var(--sig)" strokeWidth="1.8" />
                      <path d="M443 48.8L490 57.1L537 28.2" fill="none" stroke="var(--sig-amber)" strokeWidth="1.6" strokeDasharray="4 3" />
                      <circle cx="443" cy="48.8" r="3" fill="var(--sig)" />
                      <circle cx="537" cy="28.2" r="3" fill="var(--sig-amber)" />
                      <text x="20" y="176" fontSize="8.5">AUG</text><text x="255" y="176" fontSize="8.5">FEB</text><text x="500" y="176" fontSize="8.5">JUL</text>
                    </svg>
                  </div>

                  <div className="chartbox">
                    <h3 style={{ marginBottom: 'var(--s4)' }}>Margin by region</h3>
                    <svg viewBox="0 0 240 180" className="dgm" role="img" aria-label="Bar chart comparing gross margin across six regions, ranging from 29 to 44 percent">
                      <g fill="var(--sig)">
                        <rect className="bar" x="14" y="70" width="24" height="86" />
                        <rect className="bar" x="52" y="46" width="24" height="110" />
                        <rect className="bar" x="90" y="94" width="24" height="62" />
                        <rect className="bar" x="128" y="34" width="24" height="122" />
                        <rect className="bar" x="166" y="82" width="24" height="74" />
                        <rect className="bar" x="204" y="58" width="24" height="98" />
                      </g>
                      <path d="M8 156H236" stroke="var(--edge)" strokeWidth="1" />
                      <g fontSize="8">
                        <text x="18" y="172">UK</text><text x="56" y="172">DE</text><text x="94" y="172">FR</text>
                        <text x="130" y="172">AE</text><text x="170" y="172">SG</text><text x="206" y="172">US</text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="tiny rv" style={{ marginTop: 'var(--s4)', textAlign: 'center' }}>
            Interface shown is representative. Every figure on it is a query against records the nine
            systems are writing as you read this, not a nightly extract.
          </p>
        </Wrap>
      </Chapter>

      {/* 7 · PRODUCTS */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>The range</Eyebrow>
            <h2 className="d-l">Nine products.<br />Start with one.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Almost nobody buys nine systems at once, and we do not ask you to. One problem is usually
              urgent — the close, the routes, the till, the roster. Start there. The rest are available when
              you want them, and they arrive already knowing your customers, your stock and your ledger,
              because those never lived inside the first one.
            </p>
          </div>
          <ProductExplorer />
        </Wrap>
      </Chapter>

      {/* 8 · ENTERPRISE */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols>
            <div className="c-5 rv">
              <Eyebrow>Enterprise</Eyebrow>
              <h2 className="d-l" style={{ marginBottom: 'var(--s5)' }}>Built to survive<br />procurement.</h2>
              <p className="lede" style={{ marginBottom: 'var(--s6)' }}>
                Nine systems on one data layer means one security review rather than nine — and it means the
                layer itself has to be worth trusting. Both of those answers are architectural rather than
                contractual.
              </p>
              <Link className="btn btn--primary" href="/enterprise">
                Security &amp; compliance <span className="arw">→</span>
              </Link>
            </div>
            <div className="c-7 rv rv-d2">
              <ul className="klist klist--2">
                <li><h3>Isolation by tenant</h3><p className="small">Data is partitioned per organisation with keys scoped to the tenant. Region of residency is chosen at provisioning and does not move.</p></li>
                <li><h3>Identity you already run</h3><p className="small">SAML and OIDC single sign-on, SCIM provisioning, and enforced MFA. Deprovisioning in your directory removes access here in the same minute.</p></li>
                <li><h3>Recovery targets, written down</h3><p className="small">Point-in-time restore, cross-region replicas, and published objectives for recovery point and recovery time — tested, not assumed.</p></li>
                <li><h3>Every action attributable</h3><p className="small">An immutable log records who did what, from where, and on whose behalf. Agent actions carry the identity of the person who authorised them.</p></li>
              </ul>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* 9 · INTEGRATIONS */}
      <Chapter id="integrations">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Integrations</Eyebrow>
            <h2 className="d-l">Fewer connections, because<br />fewer are needed.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              There is no integration to build between the nine; that is what the shared layer is for. What
              remains is the perimeter — the systems you genuinely do not own — and those are first-party
              connections maintained by Flowza rather than middleware you operate.
            </p>
          </div>
          <div className="ig rv">
            <div><h3>Banking &amp; payment rails</h3><p className="tiny">Statement feeds, direct debit, card acquiring, multi-currency settlement.</p></div>
            <div><h3>Tax &amp; e-invoicing</h3><p className="tiny">Jurisdiction filings and clearance regimes where they are mandatory.</p></div>
            <div><h3>Carriers &amp; 3PL</h3><p className="tiny">Rating, booking, tracking events and proof of delivery.</p></div>
            <div><h3>Identity providers</h3><p className="tiny">Entra ID, Okta, Google Workspace, and any SAML 2.0 or OIDC issuer.</p></div>
            <div><h3>Email, calendar &amp; docs</h3><p className="tiny">Two-way threading against the record, not a separate inbox.</p></div>
            <div><h3>Warehouses &amp; lakes</h3><p className="tiny">Change-data streams out for teams who want a copy elsewhere.</p></div>
          </div>
        </Wrap>
      </Chapter>

      {/* 10 · DEPLOYMENT */}
      <Chapter id="deployment" variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Deployment</Eyebrow>
            <h2 className="d-l">How a replacement<br />actually happens.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Nobody switches an operating system in a weekend. A deployment starts with the one system that
              solves the urgent problem, runs it alongside what you have until the numbers agree, and only
              then turns the incumbent off. Adding a second system later repeats the last two steps and
              skips the first, because the records are already there.
            </p>
          </div>
          <div className="phases rv">
            <div className="phase"><span className="phase__w">Weeks 1–2</span><h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Model</h3><p className="small">Your chart of accounts, cost centres, roles and approval thresholds are mapped onto the platform. Nothing is imported yet.</p></div>
            <div className="phase"><span className="phase__w">Weeks 3–5</span><h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Migrate</h3><p className="small">Master data and open transactions move first, then history. Every import is reversible and produces a reconciliation report.</p></div>
            <div className="phase"><span className="phase__w">Weeks 6–9</span><h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Parallel run</h3><p className="small">Both systems process the same period. Variances are investigated until the two closes agree to the cent.</p></div>
            <div className="phase"><span className="phase__w">Week 10</span><h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Cut over</h3><p className="small">The incumbent becomes read-only for reference. Reporting continuity is preserved across the boundary.</p></div>
          </div>
        </Wrap>
      </Chapter>

      {/* 11 · CLOSE */}
      <Chapter variant="instrument" net netFull>
        <Wrap>
          <div className="close rv">
            <Eyebrow plain style={{ justifyContent: 'center' }}>Get started</Eyebrow>
            <h2 className="d-l">See it against your<br />own numbers.</h2>
            <p className="lede" style={{ margin: '0 auto var(--s7)' }}>
              A walkthrough uses a sample of your chart of accounts and one real process end to end. Forty-five minutes, no slides.
            </p>
            <div className="row" style={{ justifyContent: 'center' }}>
              <Link className="btn btn--primary" href="/pricing">Book a walkthrough <span className="arw">→</span></Link>
              <Link className="btn btn--ghost" href="/platform">Read the architecture</Link>
            </div>
          </div>
        </Wrap>
      </Chapter>
    </>
  );
}
