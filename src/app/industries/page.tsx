import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { IndustryConfigurator } from '@/components/IndustryConfigurator';
import { INDUSTRIES } from '@/lib/data/industries';

export const metadata: Metadata = {
  title: 'Solutions by industry — FlowZa AI',
  description:
    'Which of the nine FlowZa AI cloud applications to start with in retail, logistics, manufacturing, services, construction, healthcare, wellness and the public sector — and how each is configured.',
};

const INDUSTRY_NUMBERS = ['01', '02', '03', '04', '05', '06', '07', '08'];

export default function IndustriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Industries served by FlowZa AI',
    itemListElement: INDUSTRIES.map((ind, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: ind.name,
      url: `https://flowza.ai/industries?sector=${ind.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(48px,6vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Solutions · by industry</Eyebrow>
              <h1 className="d-xl">
                Different sector.<br />Different unit<br />of work.
              </h1>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                What separates one sector from another is not which features it needs. It is what the business counts — a transaction, a load, a work order, an appointment — and which resource runs out first. Answer those two questions and you know which of the nine to start with, and which number should be on the wall.
              </p>
            </div>
          </Cols>
          <nav className="idx rv" aria-label="Industries">
            {INDUSTRIES.map((ind, i) => (
              <Link
                key={ind.slug}
                href={`/industries?sector=${ind.slug}#industry-config`}
              >
                <b>{INDUSTRY_NUMBERS[i]}</b>
                <span>{ind.name}</span>
              </Link>
            ))}
          </nav>
        </Wrap>
      </Chapter>

      {/* CONFIGURATOR */}
      <Chapter variant="raised" id="industry-config">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Configuration</Eyebrow>
            <h2 className="d-l">How each sector is<br />set up.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              There is no sector edition of anything. Selecting a sector changes which of the nine applications you buy, what the records are called on screen inside them, and which constraint the scheduler optimises against.
            </p>
          </div>
          <IndustryConfigurator />
        </Wrap>
      </Chapter>

      {/* WHAT DOES NOT CHANGE */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>What does not change</Eyebrow>
              <h2 className="d-l">The parts nobody<br />forks for you.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Industry software usually means a sector edition with its own release train, and a vendor who quietly stops investing in the smaller vertical. There is no sector edition of a FlowZa AI application, so there is nothing to fall behind.
              </p>
            </div>
          </Cols>
          <Cols>
            <div className="c-4 rv">
              <p className="mono" style={{ fontSize: '.6875rem', letterSpacing: '.12em', color: 'var(--sig)', marginBottom: 'var(--s4)' }}>
                01 — NO SECTOR EDITION
              </p>
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Configured, not forked</h3>
              <p className="small">
                A patient, a guest, a consignee and a subcontractor are the same kind of thing wearing different labels, so a sector is a configuration of an application rather than a separate build of it. You get the release everyone else gets.
              </p>
            </div>
            <div className="c-4 rv rv-d2">
              <p className="mono" style={{ fontSize: '.6875rem', letterSpacing: '.12em', color: 'var(--sig)', marginBottom: 'var(--s4)' }}>
                02 — NO VERTICAL FORK
              </p>
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Nine products, not seventy-two</h3>
              <p className="small">
                The nine each have their own release train, which is honest. What they do not have is a healthcare edition, a construction edition and a public-sector edition each running a version behind. There is one Finance, and every sector runs it.
              </p>
            </div>
            <div className="c-4 rv rv-d3">
              <p className="mono" style={{ fontSize: '.6875rem', letterSpacing: '.12em', color: 'var(--sig)', marginBottom: 'var(--s4)' }}>
                03 — ONE SECURITY STANDARD
              </p>
              <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>A familiar review</h3>
              <p className="small">
                Identity, permissions, residency and audit are built to the same standard in every application and enforced inside each one. A conglomerate running four of these sectors on five FlowZa AI applications reviews the same controls five times, not five different security models.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* COMPARISON TABLE */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Side by side</Eyebrow>
            <h2 className="d-l">Eight sectors, and<br />where to start.</h2>
          </div>
          <div className="cmp-scroll rv">
            <table className="cmp">
              <caption className="sr">
                Comparison of eight industries by unit of work, binding constraint, deciding metric, and which of the nine FlowZa AI applications to deploy first
              </caption>
              <thead>
                <tr>
                  <th scope="col">Industry</th>
                  <th scope="col">Unit of work</th>
                  <th scope="col">Binding constraint</th>
                  <th scope="col">Metric that decides</th>
                  <th scope="col">Start with</th>
                </tr>
              </thead>
              <tbody>
                {INDUSTRIES.map((ind) => (
                  <tr key={ind.slug}>
                    <td>
                      {ind.page ? (
                        <Link href={ind.page} style={{ color: 'var(--sig)' }}>{ind.name}</Link>
                      ) : (
                        ind.name
                      )}
                    </td>
                    <td>{ind.unitOfWork}</td>
                    <td>{ind.constraint}</td>
                    <td className="m">{ind.metric}</td>
                    <td>{ind.startWith}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tiny rv" style={{ marginTop: 'var(--s5)', maxWidth: '80ch' }}>
            &ldquo;Start with&rdquo; is a first deployment, not a ceiling — the second column is where most customers go
            within a year. Sectors that run vehicles add{' '}
            <Link href="/products/fleetza" style={{ color: 'var(--sig)' }}>Fleetza</Link>; sectors that print anything a
            customer scans add{' '}
            <Link href="/products/qrforge" style={{ color: 'var(--sig)' }}>QRForge</Link>; sectors with members rather
            than customers add{' '}
            <Link href="/products/club" style={{ color: 'var(--sig)' }}>Club</Link>. Each arrives already holding your
            parties, items and entries.
          </p>
        </Wrap>
      </Chapter>

      {/* CTA */}
      <Chapter variant="raised">
        <Wrap>
          <div className="close rv">
            <Eyebrow plain style={{ justifyContent: 'center' }}>Next</Eyebrow>
            <h2 className="d-l">Bring your own<br />edge cases.</h2>
            <p className="lede" style={{ margin: '0 auto var(--s7)' }}>
              Every sector has the process that no vendor demo covers. Those are the interesting forty-five minutes — send us the awkward one in advance.
            </p>
            <div className="row" style={{ justifyContent: 'center' }}>
              <Link className="btn btn--primary" href="/pricing">
                Book a walkthrough <span className="arw">→</span>
              </Link>
              <Link className="btn btn--ghost" href="/solutions">
                Solutions by function
              </Link>
            </div>
          </div>
        </Wrap>
      </Chapter>
    </>
  );
}
