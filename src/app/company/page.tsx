import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { KeylineList } from '@/components/KeylineList';
import { CoverageBand } from '@/components/CoverageBand';
import { WORKING_AGREEMENTS, TEAM_SPLIT, PARTNER_TYPES, CONTACT_ROUTES, OFFICES } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Company — FlowZa AI',
  description:
    'FlowZa AI builds and operates its own cloud applications rather than consulting on someone else’s. How the team works, who our partners are, where our support hours actually fall, and how to reach the right person.',
};

const coverageItems = [
  { heading: 'The rota is named, not anonymous', body: 'Enterprise agreements list the escalation contacts by name and the number that reaches them. You are not paging a queue.' },
  { heading: 'Handover is written', body: 'An open incident moves between offices with a written state, so the next engineer does not start by asking you to repeat yourself.' },
  { heading: 'Severity is defined in the contract', body: 'What counts as a P1 is written down and agreed before anything goes wrong, which is the only time that conversation is calm.' },
  { heading: 'We answer for our own infrastructure', body: 'If a dependency fails, it is still our incident. We do not forward a cloud provider’s status page and call it an update.' },
];

export default function CompanyPage() {
  return (
    <>
      {/* HERO */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end' }}>
            <div className="c-7 rv">
              <Eyebrow>Company</Eyebrow>
              {/* nbsp binds "behind it." so a wide screen breaks before "behind"
                  rather than orphaning "it." on a line of its own. A phone still
                  fits the whole line. */}
              <h1 className="d-xl">We build it.<br />We run it.<br />We stand behind&nbsp;it.</h1>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                FlowZa builds and operates its own cloud applications, with the people behind the products staying close to
                the businesses that rely on them. From product design and engineering to infrastructure and support, we take
                ownership of the entire experience&mdash;so we can keep improving what we build and deliver lasting value to
                our customers.
              </p>
            </div>
          </Cols>

          <div className="facts rv">
            <div><div className="facts__n">2023</div><div className="facts__l">Founded, and independent since</div></div>
            <div><div className="facts__n">9</div><div className="facts__l">Independent cloud applications</div></div>
            <div><div className="facts__n">1</div><div className="facts__l">Unified platform</div></div>
            <div><div className="facts__n">24/7</div><div className="facts__l">Cloud operations and customer support</div></div>
          </div>
        </Wrap>
      </Chapter>

      {/* HOW THE TEAM WORKS */}
      <Chapter id="howwework" variant="raised">
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>How the team works</Eyebrow>
              <h2 className="d-l">Six working agreements<br />we actually keep.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                These are not values on a wall. Each one costs us something specific, which is the only reason they survive
                contact with a quarter that is going badly.
              </p>
            </div>
          </Cols>

          <div className="wa rv">
            {WORKING_AGREEMENTS.map((a, i) => (
              <div key={a.heading}>
                <span className="wa__n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{a.heading}</h3>
                  <p className="small">{a.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rv" style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <p className="mono" style={{ fontSize: '.625rem', letterSpacing: '.12em', color: 'var(--fg-3)', marginBottom: 'var(--s4)' }}>
              WHERE THE TEAM SITS
            </p>
            <div
              className="dist"
              role="img"
              aria-label={`Team distribution: ${TEAM_SPLIT.map((t) => `${t.name} ${t.share} percent`).join(', ')}`}
            >
              {TEAM_SPLIT.map((t) => (
                <span key={t.name} style={{ width: `${t.share}%`, background: t.colour }} />
              ))}
            </div>
            <div className="dist__key">
              {TEAM_SPLIT.map((t) => (
                <span key={t.name}><i style={{ background: t.colour }} />{t.name} {t.share}%</span>
              ))}
            </div>
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              Two thirds of the company works on the applications directly. A commercial team that is smaller than the support team
              is a deliberate choice, and it shows up in how we sell.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* COVERAGE */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Coverage</Eyebrow>
              <h2 className="d-l">Eleven hours staffed.<br />Thirteen on call.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Most vendors write 24×7 on the contract and route the small hours to a rota. So do we — the difference is
                that we will show you exactly which hours those are before you sign.
              </p>
            </div>
          </Cols>

          <div className="panel rv" style={{ padding: 'var(--s6)' }}>
            <div className="dscroll" style={{ ['--dmin' as string]: '720px' }}>
              <CoverageBand />
            </div>
          </div>

          <KeylineList items={coverageItems} twoCol className="rv" style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }} />
        </Wrap>
      </Chapter>

      {/* PARTNERS */}
      <Chapter id="partners">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Partners</Eyebrow>
            <h2 className="d-l">A deliberately<br />small network.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              We certify few partners and we publish what each one is certified for. A large partner directory is easy to
              build and tells a buyer nothing about who can actually deliver.
            </p>
          </div>
          <div className="ptn rv">
            {PARTNER_TYPES.map((p, i) => (
              <div className="ptn__r" key={p.name}>
                <div>
                  <span className="ptn__k">Type {String(i + 1).padStart(2, '0')}</span>
                  <span className="ptn__t">{p.name}</span>
                </div>
                <p className="small">{p.body}</p>
                <p className="ptn__m">{p.metricTop}<br />{p.metricBottom}</p>
              </div>
            ))}
          </div>
          <p className="tiny rv" style={{ marginTop: 'var(--s5)' }}>
            We are not looking for volume. If you have delivered operational software in one of the sectors we serve and
            want to be certified, the conversation starts with a deployment you have already done.
          </p>
        </Wrap>
      </Chapter>

      {/* CONTACT */}
      <Chapter id="contact" variant="raised">
        <Wrap>
          <Cols>
            <div className="c-5 rv">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>Reach the right<br />person first time</h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                A single contact form that routes everything to one inbox wastes a day of your time and ours. Pick the row
                that matches what you need.
              </p>
              <div className="dcon">
                <a
                  className="dcon__l"
                  href="https://wa.me/96892107562"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2.2 13.8l.8-2.9A5.8 5.8 0 1 1 5.2 13l-3 .8Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    <path d="M6 5.6c.2-.5.4-.5.6-.5h.4c.2 0 .4 0 .5.4l.5 1.2c0 .2 0 .3-.1.4l-.3.4c-.1.1-.2.2-.1.4.2.4.6.9 1 1.2.4.3.7.4.9.5.2 0 .3 0 .4-.1l.4-.5c.1-.2.3-.1.4 0l1.1.6c.2.1.3.2.3.3 0 .2 0 .6-.2.9-.2.3-.8.6-1.1.6-.6 0-1.2-.1-2.4-.7-1.4-.7-2.3-2.2-2.4-2.3-.1-.2-.6-.9-.6-1.7 0-.8.4-1.2.6-1.4Z" fill="currentColor" />
                  </svg>
                  <span>
                    <b>WhatsApp</b>
                    <span className="dcon__v">+968 9210 7562</span>
                  </span>
                </a>
                <a className="dcon__l" href="mailto:sales@flowza.ai">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M1.9 4.2 8 8.6l6.1-4.4" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  <span>
                    <b>Sales</b>
                    <span className="dcon__v">sales@flowza.ai</span>
                  </span>
                </a>
              </div>

              <p className="tiny">
                Response times are the ones written into standard agreements. Enterprise agreements can tighten them, and P1
                targets are contractual rather than aspirational.
              </p>
            </div>
            <div className="c-7 rv rv-d2">
              <div className="panel" style={{ padding: 'var(--s5)' }}>
                <div className="tw">
                  <table className="tbl">
                    <caption className="sr">Where to direct different kinds of enquiry, and the typical response time</caption>
                    <thead>
                      <tr><th scope="col">If you want to</th><th scope="col">Goes to</th><th scope="col">Typical response</th></tr>
                    </thead>
                    <tbody>
                      {CONTACT_ROUTES.map((r) => (
                        <tr key={r.intent}>
                          <td>{r.intent}</td><td>{r.team}</td><td>{r.response}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                  WhatsApp and the sales address on the left reach us without an account. Once you have a deployment, named
                  contacts and escalation numbers are issued with it, so you always have a person rather than an alias. The
                  offices are below.
                </p>
              </div>
            </div>
          </Cols>

          <div className="rv" style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <p className="mono" style={{ fontSize: '.625rem', letterSpacing: '.12em', color: 'var(--fg-3)', marginBottom: 'var(--s4)' }}>
              OFFICES
            </p>
            <div className="offs">
              {OFFICES.map((o) => (
                <div key={o.city}>
                  <span className={`offs__k offs__k--${o.accent}`}>{o.kind}</span>
                  <span className="offs__c">{o.city}</span>
                  <span className="offs__a">
                    <svg className="offs__pin" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                      <path d="M6 13S1.5 8.6 1.5 5.5A4.5 4.5 0 0 1 10.5 5.5C10.5 8.6 6 13 6 13Z" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="6" cy="5.4" r="1.6" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    <span>{o.address}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </Chapter>

      {/* CLOSE */}
      <Chapter>
        <Wrap>
          <div className="close rv">
            <Eyebrow style={{ justifyContent: 'center' }}>Working here</Eyebrow>
            <h2 className="d-l">We hire slowly and<br />write everything down.</h2>
            <p className="lede" style={{ margin: '0 auto var(--s7)' }}>
              Roles open irregularly because we only post one when the work genuinely exists. If you have operated the kind
              of business these applications run, that experience counts for more here than a framework on your CV.
            </p>
            <div className="row" style={{ justifyContent: 'center' }}>
              <Link className="btn btn--primary" href="/pricing">Book a walkthrough <span className="arw">→</span></Link>
              <Link className="btn btn--ghost" href="/enterprise">Security and compliance</Link>
            </div>
          </div>
        </Wrap>
      </Chapter>
    </>
  );
}
