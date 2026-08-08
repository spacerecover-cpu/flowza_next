import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { ConsolidationCalculator } from '@/components/ConsolidationCalculator';
import { FAQ } from '@/components/FAQ';
import { TIERS } from '@/lib/data/pricing';

export const metadata: Metadata = {
  title: 'Pricing — Flowza',
  description:
    'Priced per person, not per application. Take one system or take nine — compare a shared data layer against your current licence stack.',
};

const faqItems = [
  {
    question: 'Is implementation included?',
    answer: 'Modelling, migration tooling and the parallel run are included on Growth and above. Bespoke engineering — a custom integration to a system we do not already support, or data remediation on your side — is quoted separately and fixed before it starts.',
  },
  {
    question: 'What counts as a user?',
    answer: 'A named person who signs in. Shop-floor terminals, POS tills and read-only viewers are licensed at a reduced rate, and API service accounts are not charged per seat. Customers and suppliers using portals are never charged.',
  },
  {
    question: 'Does AI usage cost extra?',
    answer: 'Copilot is included in the seat price with fair-use limits that the overwhelming majority of teams never reach. Autonomous agents on Scale consume a monthly run allowance; additional capacity is purchased in blocks and shown against your usage before you commit.',
  },
  {
    question: 'What happens if we want to leave?',
    answer: 'Your data is exportable at any time in full fidelity, including history and attachments, through the API or a bulk export. There is no exit fee and no proprietary format holding the records. We would rather you stay because the alternative is worse, not because leaving is hard.',
  },
];

/*
 * No page-level FAQPage here. The single-file site declares exactly one, in
 * `parts/00-head.html`, and that one is ported to the root layout's @graph — so
 * it is already on this page. The block that used to sit here was a second
 * FAQPage whose four answers described the retired eighteen-module positioning
 * and did not match the visible questions below, which is the one thing
 * FAQPage markup must never do.
 */

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Pricing</Eyebrow>
              <h1 className="d-xl">One licence.<br />Nine systems.</h1>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Priced per person, not per application. Adding a second or a fifth system does not start another contract,
                another security review or another migration — the records it needs are already in the layer, and the
                people are already licensed.
              </p>
            </div>
          </Cols>

          <div className="tiers rv">
            {TIERS.map((tier) => (
              <div key={tier.name} className={`tier${tier.highlighted ? ' tier--hi' : ''}`}>
                {tier.flagLabel && <span className="tier__flag">{tier.flagLabel}</span>}
                <span className="tier__n">{tier.name}</span>
                <div>
                  <span className="tier__p">{tier.price}</span>
                  {tier.unit && <span className="tier__u"> {tier.unit}</span>}
                </div>
                <p className="tier__d">{tier.description}</p>
                <ul>
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  className={`btn btn--sm ${tier.highlighted ? 'btn--primary' : 'btn--ghost'}`}
                  href={tier.cta.href}
                >
                  {tier.cta.label}
                </Link>
              </div>
            ))}
          </div>

          <p className="tiny rv" style={{ marginTop: 'var(--s4)' }}>
            Billed annually. Monthly billing available at a 20% premium. Read-only and shop-floor seats are licensed at a reduced rate.
          </p>
        </Wrap>
      </Chapter>

      {/* CALCULATOR */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Consolidation</Eyebrow>
            <h2 className="d-l">Count what you already pay for.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Tick the categories you currently license. The comparison uses illustrative list prices — replace them with
              your own contract rates for a real figure, and remember that the licences are usually the smaller half of the cost.
            </p>
          </div>
          <ConsolidationCalculator />
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter>
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Pricing questions</h2>
          <FAQ items={faqItems} className="rv" />
        </Wrap>
      </Chapter>
    </>
  );
}
