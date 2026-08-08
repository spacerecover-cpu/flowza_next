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
  title: { absolute: 'FlowZa AI — nine cloud applications for business operations' },
  description:
    'FlowZa AI is a platform of nine specialised cloud applications for business management — finance, logistics, wellness, fleet, retail, clubs, rentals, QR codes and performance. Each application is independent, priced on its own, and can be deployed on its own. Choose only the applications your business needs.',
};

/** The nine, in catalogue order, as the hero diagram lists them. */
const HERO_APPS = [
  'FLOWZA FINANCE',
  'FLOWZA LOGISPRO',
  'FLOWZA SPA MASTER',
  'FLOWZA FLEETZA',
  'FLOWZA QRFORGE',
  'FLOWZA POS',
  'FLOWZA CLUB',
  'FLOWZA RENTFLOW',
  'FLOWZA PMS',
];

export default function HomePage() {
  return (
    <>
      {/* 1 · OPENING */}
      <Chapter className="hero" net>
        <Wrap>
          <div className="hero__grid">
            <div className="rv in">
              <Eyebrow>Cloud business applications for MEA and India</Eyebrow>
              <h1 className="d-xl">
                Nine cloud<br />applications.<br />One trusted<br />platform.
              </h1>
              <p className="lede">
                FlowZa AI delivers specialised cloud software for finance, logistics, wellness, fleet,
                clubs, rentals, retail, codes and performance. Each application is purpose-built for the
                job it does and can be deployed on its own, with its own subscription — so you start with
                the one that solves the problem in front of you, and add others only when your business
                needs them.
              </p>
              <div className="hero__cta">
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <Link className="btn btn--ghost" href="/#systems">
                  Browse the applications
                </Link>
              </div>
              <p className="hero__note">
                Nine live products. Compliant in India, the UAE, Oman and Saudi Arabia.
              </p>
            </div>

            <div className="rv in rv-d2">
              <svg
                className="dgm"
                viewBox="0 0 480 420"
                role="img"
                aria-label="Diagram of the FlowZa AI platform. One box at the top is labelled FlowZa AI. Beneath it, nine separate boxes are listed — FlowZa Finance, LogisPro, Spa Master, Fleetza, QRForge, POS, Club, RentFlow and PMS. A single line runs down from FlowZa AI and branches once to each application. The nine applications are not connected to one another, and there is no shared data store between them."
              >
                {/* the umbrella — label centred on the spine that drops from it */}
                <rect className="node-core" x="14" y="10" width="150" height="38" rx="3" />
                <text className="node-core-t" x="89" y="33" textAnchor="middle">FLOWZA AI</text>
                <text className="dgm-note" x="176" y="33" fontSize="8.5">THE PLATFORM</text>

                {/* the spine, and one branch per application */}
                <g className="wire">
                  <path d="M89 48V375" />
                  {HERO_APPS.map((_, i) => (
                    <path key={i} d={`M89 ${71 + i * 38}H180`} />
                  ))}
                </g>
                <g className="wire-live" style={{ '--len': '1200' } as React.CSSProperties}>
                  <path d="M89 48V375" />
                  {HERO_APPS.map((_, i) => (
                    <path key={i} d={`M89 ${71 + i * 38}H180`} />
                  ))}
                </g>

                {/* the nine, each standing alone */}
                <g>
                  {HERO_APPS.map((name, i) => (
                    <g key={name}>
                      <rect className="node" x="180" y={56 + i * 38} width="286" height="30" rx="2" />
                      <text x="194" y={75 + i * 38} fontSize="8">{name}</text>
                    </g>
                  ))}
                </g>

                <text className="dgm-note" x="14" y="410" fontSize="8.5">
                  NINE INDEPENDENT APPLICATIONS · NOT ONE SHARED SYSTEM
                </text>
              </svg>
            </div>
          </div>

          <div className="facts rv">
            <div><div className="facts__n">9</div><div className="facts__l">specialised cloud applications</div></div>
            <div><div className="facts__n">1</div><div className="facts__l">application is enough to start</div></div>
            <div><div className="facts__n">0</div><div className="facts__l">modules you are forced to buy</div></div>
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
              You were offered two bad<br />options. A suite too big, or<br />tools too generic.
            </h2>
          </div>

          <Cols>
            <div className="c-5 rv">
              <p className="body-l" style={{ marginBottom: 'var(--s5)' }}>
                The large suite arrives as one contract covering everything. You pay for the whole surface,
                deploy for a year, and still find the part you care about most — the treatment room, the
                loading bay, the till — treated as a minor module by people who have never run one.
              </p>
              <p className="body-l" style={{ marginBottom: 'var(--s6)' }}>
                The alternative is a shelf of point tools. Each is cheap and quick, and none of them knows
                what GST, WPS or GOSI is. Neither option lets you buy exactly the capability you need and
                nothing else.
              </p>
              <div className="mathline" style={{ borderTop: '1px solid var(--line)', paddingTop: 'var(--s5)' }}>
                <b className="num">1</b><span>suite licence</span>
                <b className="num">14</b><span>modules, four of them used</span>
              </div>
              <p className="tiny" style={{ marginTop: 'var(--s3)' }}>
                A bundled licence is priced on what it contains, not on what you switch on.
              </p>
              <div
                className="mathline"
                style={{ borderTop: '1px solid var(--line)', paddingTop: 'var(--s5)', marginTop: 'var(--s5)' }}
              >
                <b className="num">9</b><span>FlowZa AI applications</span>
                <b className="num">1</b><span>is a complete purchase</span>
              </div>
              <p className="tiny" style={{ marginTop: 'var(--s3)' }}>
                Every application here is a finished product on its own. Buying one is not a first instalment
                towards a suite, and nothing in it waits on a second application to become useful.
              </p>
            </div>

            <div className="c-7 rv rv-d2">
              <FragmentationDiagram />
            </div>
          </Cols>

          <ul className="klist klist--2 rv" style={{ marginTop: 'clamp(48px,6vw,var(--s9))' }}>
            <li>
              <h3>You pay for what you do not run</h3>
              <p className="small">A bundle is priced on its full contents. The modules nobody opens still appear on the invoice, and they still have to be administered, permissioned and upgraded.</p>
            </li>
            <li>
              <h3>Generic software fits nobody exactly</h3>
              <p className="small">A scheduling module written to serve nine industries cannot respect therapist certification, driver hours and tee-time etiquette at once. Something is always bolted on afterwards.</p>
            </li>
            <li>
              <h3>One release train slows everything</h3>
              <p className="small">When every capability ships from one codebase, the fix you need waits behind the parts of the product you never use.</p>
            </li>
          </ul>
        </Wrap>
      </Chapter>

      {/* 3 · THE APPROACH */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end' }}>
            <div className="c-7 rv">
              <Eyebrow>The approach</Eyebrow>
              <h2 className="d-l">Specialised products,<br />under one name.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                FlowZa AI is not one application pretending to be nine, and it is not a suite you buy whole.
                It is nine independent products, each built around the constraint its own industry actually
                has, and each sold on its own terms.
              </p>
            </div>
          </Cols>

          <Cols style={{ marginTop: 'clamp(48px,6vw,var(--s9))' }}>
            <div className="c-4 rv">
              <p className="mono" style={{ fontSize: '.6875rem', letterSpacing: '.12em', color: 'var(--sig)', marginBottom: 'var(--s4)' }}>01 — PURPOSE-BUILT</p>
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Built for one job</h3>
              <p className="small">Spa Master treats the treatment room as the scarce resource. LogisPro treats the vehicle hour as the scarce resource. Neither is a configuration of the other, which is why each one is worth having on its own.</p>
            </div>
            <div className="c-4 rv rv-d2">
              <p className="mono" style={{ fontSize: '.6875rem', letterSpacing: '.12em', color: 'var(--sig)', marginBottom: 'var(--s4)' }}>02 — INDEPENDENT</p>
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Bought on its own terms</h3>
              <p className="small">Each application holds its own data, carries its own subscription and ships on its own release schedule. You can adopt one and never look at the other eight, and nothing about it will feel unfinished.</p>
            </div>
            <div className="c-4 rv rv-d3">
              <p className="mono" style={{ fontSize: '.6875rem', letterSpacing: '.12em', color: 'var(--sig)', marginBottom: 'var(--s4)' }}>03 — ONE STANDARD</p>
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>The same bar in each</h3>
              <p className="small">Tenant isolation, single sign-on, an audit log and regional statutory rules are built to the same standard in every application. A security review of one tells you what to expect of the next.</p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* 4 · THE NINE */}
      <Chapter id="systems">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>The nine</Eyebrow>
            <h2 className="d-l">Pick an application.<br />See exactly what<br />it does on its own.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Each one runs on its own app, with its own screens, its own database and its own release.
              Select an application to see who it is built for, what it does, and what businesses usually
              run before they buy it.
            </p>
          </div>

          <SystemExplorer />

          <p className="tiny rv" style={{ marginTop: 'var(--s5)', maxWidth: '78ch' }}>
            Nothing on this page depends on you owning more than one. Each application is licensed and
            deployed separately, and none of them requires another to be present in order to work.
          </p>
        </Wrap>
      </Chapter>

      {/* 5 · AI */}
      <Chapter variant="instrument" id="ai" net>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Intelligence</Eyebrow>
            <h2 className="d-l">AI built into the work<br />each application does.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              The AI in each application is trained on the job that application does, not bolted on as a
              general assistant. LogisPro sequences a route against real constraints. Fleetza scores driver
              behaviour into something coachable. Finance reads an invoice and proposes the posting. In every
              case it works on the records that application holds, under the same permissions as the person
              who asked, and every action is written to that application&rsquo;s audit log.
            </p>
          </div>

          <OrchestrationCanvas />

          <Cols style={{ marginTop: 'clamp(56px,7vw,var(--s9))' }}>
            <div className="c-5 rv">
              <h3 className="d-m" style={{ marginBottom: 'var(--s4)' }}>A day, with the work removed</h3>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Most automation is invisible until it fails. Drag through an ordinary Tuesday to see where a
                FlowZa AI application acted on its own, and where it stopped to ask.
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
              <h2 className="d-l">Reporting that ships<br />inside the application.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Every application reports on its own operation, out of the box. There is no separate BI
                licence to buy before the numbers appear, and a dashboard is a live query against the records
                that application is writing rather than last night&rsquo;s extract.
              </p>
            </div>
          </Cols>

          <div className="ui rv">
            <div className="ui__chrome">
              <span className="ui__dot" /><span className="ui__dot" /><span className="ui__dot" />
              <span className="ui__path">flowza finance · overview</span>
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
            Interface shown is representative, and shows FlowZa Finance reporting on its own records. Each
            application reports on the operation it runs.
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
              Almost nobody needs nine applications, and we do not ask you to buy them. One problem is
              usually urgent — the close, the routes, the till, the roster. Start there, on its own
              subscription. The others are there when a second problem becomes urgent, and not before.
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
                Every application is built to the same security and operational standard, so the review you
                run on the first one tells you what to expect of the next. Those answers are architectural
                rather than contractual.
              </p>
              <Link className="btn btn--primary" href="/enterprise">
                Security &amp; compliance <span className="arw">→</span>
              </Link>
            </div>
            <div className="c-7 rv rv-d2">
              <ul className="klist klist--2">
                <li><h3>Isolation by tenant</h3><p className="small">Within each application, data is partitioned per organisation with keys scoped to the tenant. Region of residency is chosen at provisioning and does not move.</p></li>
                <li><h3>Identity you already run</h3><p className="small">SAML and OIDC single sign-on, SCIM provisioning, and enforced MFA. Deprovisioning in your directory removes access in the same minute.</p></li>
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
            <h2 className="d-l">Connected to the services<br />you already run.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Each application connects outward to the systems around it — your bank, your tax authority,
              your carriers, your identity provider. These are first-party connections maintained by FlowZa
              AI rather than middleware you operate, and each application exposes its own API for anything
              we do not cover.
            </p>
          </div>
          <div className="ig rv">
            <div><h3>Banking &amp; payment rails</h3><p className="tiny">Statement feeds, direct debit, card acquiring, multi-currency settlement.</p></div>
            <div><h3>Tax &amp; e-invoicing</h3><p className="tiny">Jurisdiction filings and clearance regimes where they are mandatory.</p></div>
            <div><h3>Carriers &amp; 3PL</h3><p className="tiny">Rating, booking, tracking events and proof of delivery.</p></div>
            <div><h3>Identity providers</h3><p className="tiny">Entra ID, Okta, Google Workspace, and any SAML 2.0 or OIDC issuer.</p></div>
            <div><h3>Email, calendar &amp; docs</h3><p className="tiny">Two-way threading against the record, not a separate inbox.</p></div>
            <div><h3>Warehouses &amp; lakes</h3><p className="tiny">Change-data streams out, so your own analytics can hold a copy.</p></div>
          </div>
        </Wrap>
      </Chapter>

      {/* 10 · DEPLOYMENT */}
      <Chapter id="deployment" variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Deployment</Eyebrow>
            <h2 className="d-l">How one application<br />actually goes live.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Nobody switches an operating system in a weekend. A deployment is scoped to a single
              application: model it, migrate into it, run it alongside what you have until the numbers agree,
              then turn the incumbent off. Adopting a second application later is its own project on its own
              timetable, and it does not disturb the first.
            </p>
          </div>
          <div className="phases rv">
            <div className="phase"><span className="phase__w">Weeks 1–2</span><h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Model</h3><p className="small">Your accounts, sites, roles and approval thresholds are mapped into the application you are adopting. Nothing is imported yet.</p></div>
            <div className="phase"><span className="phase__w">Weeks 3–5</span><h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Migrate</h3><p className="small">Master data and open transactions move first, then history. Every import is reversible and produces a reconciliation report.</p></div>
            <div className="phase"><span className="phase__w">Weeks 6–9</span><h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Parallel run</h3><p className="small">Both systems process the same period. Variances are investigated until the two agree to the cent.</p></div>
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
              A walkthrough covers one application and one real process end to end. Forty-five minutes, no slides.
            </p>
            <div className="row" style={{ justifyContent: 'center' }}>
              <Link className="btn btn--primary" href="/pricing">Book a walkthrough <span className="arw">→</span></Link>
              <Link className="btn btn--ghost" href="/platform">About the platform</Link>
            </div>
          </div>
        </Wrap>
      </Chapter>
    </>
  );
}
