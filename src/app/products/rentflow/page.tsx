import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { AppLink, ProductBadges, Metrics } from '@/components/ProductChrome';
import { RentStatusTrack } from '@/components/RentStatusTrack';
import { RentPipeline } from '@/components/RentPipeline';
import { RentDecisionGate } from '@/components/RentDecisionGate';
import { RentScope } from '@/components/RentScope';
import {
  RENT_BADGES,
  RENT_FAQ,
  RENT_FEATURES,
  RENT_METRICS,
  RENT_RELATED,
  RENT_STEPS,
} from '@/lib/data/rentflow';

export const metadata: Metadata = {
  title: 'FlowZa RentFlow — tenant applications, screened and decided',
  description:
    'Every rental application in one pipeline: collected, screened against credit, background, eviction-history, income and reference checks, and decided with the reason recorded.',
};

/**
 * FlowZa RentFlow.
 *
 * A deliberately small product, and the page is built to read as focused rather
 * than thin: two set pieces done properly and an explicit scope boundary. There
 * is no testimonial, by decision — the RentScope block says so in its own words
 * and nothing may be substituted for it.
 */
export default function RentFlowPage() {
  return (
    <>
      {/* HERO — and the five statuses as a state diagram */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap tight>
          <div className="rv">
            <div className="pbadge">
              <span className="pbadge__m">
                <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 15V7l6-4 6 4v8" stroke="#F6F6F3" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M6.6 11.4l1.8 1.8 3.4-3.6" stroke="#F6F6F3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="pbadge__t">FlowZa RentFlow</span>
            </div>
            <h1 className="d-xl" style={{ marginBottom: 'var(--s5)' }}>
              The inbox is not<br />a pipeline.
            </h1>
            <p className="lede" style={{ marginBottom: 'var(--s5)' }}>
              Tenant applications, screened and decided. Rental applications without the email
              archaeology: every application lives in one pipeline — collected, screened and decided —
              with screening built in, decisions recorded automatically and nothing lost in an inbox.
            </p>
            <ProductBadges badges={RENT_BADGES} />
            <div className="row">
              <Link className="btn btn--primary" href="/pricing">
                Book a walkthrough <span className="arw">→</span>
              </Link>
              <AppLink host="rentflow.flowza.ai" />
            </div>
          </div>
        </Wrap>

        <Wrap>
          <div className="rftrack rv rv-d2" style={{ marginTop: 'clamp(48px,6vw,var(--s9))' }}>
            <Eyebrow>Five statuses, and that is the whole shape</Eyebrow>
            <RentStatusTrack />
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              Counts are the live pipeline shown further down this page.
            </p>
          </div>

          <hr className="rule rv" style={{ margin: 'clamp(40px,5vw,var(--s8)) 0 var(--s6)' }} />
          <div className="rv">
            <Metrics items={RENT_METRICS} />
          </div>
        </Wrap>
      </Chapter>

      {/* THE PIPELINE BOARD */}
      <Chapter variant="instrument" net>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>One pipeline for everything</Eyebrow>
            <h2 className="d-l">
              Twenty applications,<br />and you can say where<br />every one of them is.
            </h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Nothing lost in an inbox is a claim about time, so the board states it as time: how many
              applications sit in each status, and how long the oldest one has been waiting there.
              Search by name, email or application ID. Select several and move them together — that is
              what a Monday morning after a listing goes live actually needs.
            </p>
          </div>

          <RentPipeline />

          <p className="tiny rv" style={{ marginTop: 'var(--s5)', maxWidth: '88ch' }}>
            Illustrative applications across five units. The bulk reject here carries one reason for
            the whole batch, recorded against each application individually — a batch action does not
            become an unexplained one. Approving and rejecting a single file is the next section,
            because that is where the reason comes from.
          </p>
        </Wrap>
      </Chapter>

      {/* THE FIVE CHECKS AS A GATE */}
      <Chapter>
        <Wrap tight>
          <div className="section-head rv">
            <Eyebrow>Screening built in · one-click decisions</Eyebrow>
            <h2 className="d-l">
              Five checks, then<br />a decision — and<br />never the other<br />way round.
            </h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Credit, background, eviction history, income verification and references, run without
              leaving the application. The approve and reject buttons stay closed until all five are
              back, so a decision cannot be taken on a file that is still half open. When it is taken,
              the reason is written with it — and that recorded reason is the most defensible thing in
              the product.
            </p>
          </div>

          <RentDecisionGate />

          <p className="tiny rv" style={{ marginTop: 'var(--s4)' }}>
            Two illustrative files, one clean and one with an adverse finding. Which screening provider
            runs each check is configured per market; what does not vary is that the result attaches to
            the application and the decision cannot be recorded without one.
          </p>
        </Wrap>
      </Chapter>

      {/* HOW IT WORKS */}
      <Chapter variant="raised">
        <Wrap tight>
          <div className="section-head rv">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="d-l">Collect. Screen. Decide.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Three stages, in order, once. The product is deliberately this short.
            </p>
          </div>

          <ul className="rfstep rv">
            {RENT_STEPS.map((step) => (
              <li key={step.n}>
                <div className="rfstep__k">
                  <span className="rfstep__n">{step.n}</span>
                  <h3>{step.heading}</h3>
                </div>
                <div>
                  <p className="small">{step.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="d-s rv" style={{ margin: 'clamp(48px,6vw,var(--s9)) 0 var(--s5)' }}>
            Five features, and no sixth
          </h3>
          <ul className="klist klist--2 rv">
            {RENT_FEATURES.map((f) => (
              <li key={f.heading}>
                <h4>{f.heading}</h4>
                <p className="small">{f.body}</p>
              </li>
            ))}
          </ul>
        </Wrap>
      </Chapter>

      {/* SCOPE — where a testimonial would be, and is deliberately not */}
      <Chapter variant="instrument" net>
        <Wrap tight>
          <div className="section-head rv">
            <Eyebrow>Scope</Eyebrow>
            <h2 className="d-l">What RentFlow<br />does not do.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              An application pipeline is a small problem currently solved with an inbox, a spreadsheet
              and a folder of PDFs, and that is precisely why it deserves its own system rather than a
              tab inside a larger one. Being clear about the edge is part of the offer.
            </p>
          </div>

          <RentScope />

          <Cols style={{ marginTop: 'clamp(48px,6vw,var(--s9))' }}>
            <div className="c-12 rv">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>Where it hands over</h3>
              <p className="body-l" style={{ maxWidth: '78ch', marginBottom: 'var(--s5)' }}>
                RentFlow ends at the decision. An approved applicant, with their screening results and
                the recorded reason, is available over the RentFlow API and as an export, so whatever
                you use to run the tenancy afterwards can pick the file up without anybody retyping it.
                What RentFlow does not do is become that system: it is a screening and decision
                application, and it is priced as one.
              </p>
              <div className="row">
                <Link className="btn btn--ghost" href="/platform#api">
                  The RentFlow API <span className="arw">→</span>
                </Link>
                <Link className="btn btn--text" href="/pricing">
                  Pricing <span className="arw">→</span>
                </Link>
              </div>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions letting teams ask</h2>
          <FAQ items={RENT_FAQ.map((f) => ({ question: f.question, answer: f.answer }))} className="rv" />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks links={RENT_RELATED.map((r) => ({ ...r }))} className="rv" />
        </Wrap>
      </Chapter>
    </>
  );
}
