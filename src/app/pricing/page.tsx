import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { TIERS } from '@/lib/data/pricing';
import { SYSTEMS } from '@/lib/data/systems';

export const metadata: Metadata = {
  title: 'Pricing — Flowza AI',
  description:
    'Every Flowza AI application is priced independently, by product, features and scale of deployment. Start with a single cloud application and add others only when your business needs them.',
};

const faqItems = [
  {
    question: 'How is each application priced?',
    answer:
      'On its own. Every Flowza AI application has its own pricing model, set by what the product is, which features you switch on, and the scale you deploy it at. A point-of-sale rollout across forty tills and a QR code programme for one marketing team are not the same shape of purchase, and they are not quoted from the same table. Ask about the application you want and you will get a price for that application.',
  },
  {
    question: 'Do I have to buy more than one?',
    answer:
      'No. Each application is a complete product on its own and most customers run one. Buying a second is a separate decision, on a separate subscription, at whatever point a second problem becomes urgent — and nothing in the first application stops working, or starts working better, because of it.',
  },
  {
    question: 'Is implementation included?',
    answer:
      'Guided setup is included with every application. Migration tooling and a parallel run are included where the application involves moving live financial or operational data. Bespoke engineering — a custom integration to a system we do not already support, or data remediation on your side — is quoted separately and fixed before it starts.',
  },
  {
    question: 'What happens if we want to leave?',
    answer:
      'Your data is exportable at any time in full fidelity, including history and attachments, through that application’s API or a bulk export. There is no exit fee and no proprietary format holding the records. Leaving one application does not affect any other application you hold.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Pricing</Eyebrow>
              <h1 className="d-xl">Flexible pricing.<br />Choose only<br />what you need.</h1>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Every Flowza AI application has its own pricing model, based on the product, the features you
                switch on and the scale of the deployment. Start with a single application and expand
                whenever your business needs additional capabilities.
              </p>
            </div>
          </Cols>

          <div className="tiers rv">
            {TIERS.map((tier) => (
              <div key={tier.name} className={`tier${tier.highlighted ? ' tier--hi' : ''}`}>
                {tier.flagLabel && <span className="tier__flag">{tier.flagLabel}</span>}
                <span className="tier__n">{tier.name}</span>
                <div>
                  <span className="tier__shape">{tier.shape}</span>
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
            These describe the shape of a deployment, not a price list. Pricing varies by application — see
            pricing on each product page, or ask for a quote covering the applications you want.
          </p>
        </Wrap>
      </Chapter>

      {/* PER-APPLICATION PRICING */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>By application</Eyebrow>
            <h2 className="d-l">Each application.<br />Priced independently.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              There is no bundle price, because there is no bundle. Pick the application that solves your
              problem and ask about that one — you are not quoted for the other eight, and you are not
              charged for them.
            </p>
          </div>

          <ul className="klist klist--2 rv">
            {SYSTEMS.map((system) => (
              <li key={system.key}>
                <h3>{system.name}</h3>
                <p className="small" style={{ marginBottom: 'var(--s3)' }}>{system.tagline}</p>
                <Link className="btn btn--text" href={system.href}>
                  See pricing <span className="arw">→</span>
                </Link>
              </li>
            ))}
          </ul>
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
