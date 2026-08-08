import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';

/**
 * Rewritten to what the nine actually do for a public body.
 *
 * The previous version was built on commitment accounting at the requisition
 * and case ageing against a statutory window. Neither exists in the product.
 * What is real, and genuinely strong here, is FlowZa RentFlow for housing
 * applications — one pipeline, five consistent checks, and the reason for every
 * decision recorded, which is exactly what an appeal or an audit asks for.
 */
export const metadata: Metadata = {
  title: 'Public sector — FlowZa AI',
  description:
    'Housing applications screened consistently with the reason for every decision recorded, plus fleet, the ledger and statutory payroll. What FlowZa AI covers for a public body, and the casework it does not.',
};

export default function PublicSectorPage() {
  return (
    <>
      {/* HERO */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(48px,6vw,var(--s8))' }}>
            <div className="c-6 rv">
              <p className="ibadge">
                <Link href="/industries">Industries</Link>
                <i />
                Public Sector
              </p>
              <h1 className="d-xl">
                Decisions you<br />can defend on<br />appeal.
              </h1>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                A public body is judged on consistency. The same application, arriving twice, should be
                decided the same way — and when it is challenged, the reason has to be retrievable. That is
                the shape FlowZa RentFlow is built for, and it is the strongest fit any of the nine has here.
              </p>
              <div className="row" style={{ marginTop: 'var(--s6)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">&rarr;</span>
                </Link>
                <Link className="btn btn--ghost" href="/products/rentflow">FlowZa RentFlow</Link>
              </div>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* WHAT IT COVERS */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>What it covers</Eyebrow>
            <h2 className="d-l">Housing applications,<br />fleet, books and pay.</h2>
          </div>
          <KeylineList
            twoCol
            className="rv"
            items={[
              {
                heading: 'FlowZa RentFlow — the housing pipeline',
                body: 'Every application in one queue with its stage and its owner visible, screened against credit, background, eviction history, income and references — the same five checks, in the same order, every time.',
              },
              {
                heading: 'FlowZa RentFlow — the recorded reason',
                body: 'The reason for every accept and decline is stored against the application, which is what an appeal, an ombudsman or an internal audit actually asks to see.',
              },
              {
                heading: 'FlowZa Fleetza — the vehicle fleet',
                body: 'Refuse vehicles, inspection vans and pool cars tracked live, with driver behaviour scoring and predictive maintenance, resolved to a true cost per kilometre for the fleet return.',
              },
              {
                heading: 'FlowZa Finance — the ledger and payroll',
                body: 'Purchases, the double-entry books, multi-entity consolidation, and statutory payroll for India and the Gulf, maintained centrally as the rules change.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* THE BOUNDARY */}
      <Chapter variant="instrument" net>
        <Wrap tight>
          <div className="section-head rv">
            <Eyebrow>Scope</Eyebrow>
            <h2 className="d-l">What FlowZa AI<br />does not do here.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Public sector procurement asks for a long list, and a good deal of it is not here. The gaps
              are worth reading before a tender rather than during one.
            </p>
          </div>
          <KeylineList
            className="rv"
            items={[
              {
                heading: 'No general case management',
                body: 'RentFlow handles housing applications specifically. Licensing, planning, benefits, complaints and social care casework are not modelled, and case ageing against a statutory window is not a report the product produces.',
              },
              {
                heading: 'No commitment accounting',
                body: 'A requisition does not create a committed-cost position against a budget line. Cost lands in the ledger when it is invoiced.',
              },
              {
                heading: 'No citizen portal or identity',
                body: 'There is no public-facing account, no single citizen identifier and no integration with a national identity scheme.',
              },
              {
                heading: 'No FOI, records management or statutory reporting packs',
                body: 'Retention schedules, disclosure workflows and prescribed statutory returns are outside every one of the nine.',
              },
            ]}
          />
          <p className="tiny rv" style={{ marginTop: 'var(--s6)' }}>
            Where a body already runs a case management platform, RentFlow is usually adopted for the
            housing pipeline alone, on its own subscription, and hands the decision on over its API.
          </p>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter>
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions public bodies ask</h2>
          <FAQ
            className="rv"
            items={[
              {
                question: 'Can an applicant challenge a decision?',
                answer:
                  'That is the case the product is built for. Every accept and decline carries the reason it was given, stored against the application alongside the screening results it was based on, so a challenge is answered from the record rather than from recollection.',
              },
              {
                question: 'Does RentFlow manage the tenancy afterwards?',
                answer:
                  'No, and it says so on its own page. It collects the application, runs the screening and records the decision. Leases, rent, deposits, renewals and maintenance are outside it — an approved applicant is available over the API and as an export so the system that runs the tenancy can pick it up.',
              },
              {
                question: 'Where is our data held?',
                answer:
                  'Region of residency is chosen at provisioning and does not move. Within each application, data is partitioned per organisation with keys scoped to the tenant, and access is enforced beneath the application code at the point the query runs.',
              },
              {
                question: 'How does it fit our audit requirements?',
                answer:
                  'Every application keeps an immutable log recording who did what, from where, and on whose behalf, in the same shape across the nine. AI actions carry the identity of the person who authorised them. The security overview is written to be handed to a reviewer directly.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* RELATED */}
      <Chapter variant="raised">
        <Wrap>
          <RelatedLinks
            className="rv"
            links={[
              { href: '/products/rentflow', title: 'FlowZa RentFlow', subtitle: 'Tenant applications, screened and decided' },
              { href: '/enterprise', title: 'Security and compliance', subtitle: 'Access, residency, recovery and assurance' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all seven sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
