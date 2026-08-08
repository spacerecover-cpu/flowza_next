import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { Panel } from '@/components/Panel';
import { FAQ } from '@/components/FAQ';
import { KeylineList } from '@/components/KeylineList';
import { RelatedLinks } from '@/components/RelatedLinks';
import { AppLink, ProductBadges, Metrics } from '@/components/ProductChrome';
import { PmsCycleRecord } from '@/components/PmsCycleRecord';
import { PmsLoop } from '@/components/PmsLoop';
import { PmsRatingStrips } from '@/components/PmsRatingStrips';
import { PmsDistribution } from '@/components/PmsDistribution';
import { PmsMovements } from '@/components/PmsMovements';
import { PmsSessionMinute } from '@/components/PmsSessionMinute';
import { PmsCompMatrix } from '@/components/PmsCompMatrix';
import { PmsIncrement } from '@/components/PmsIncrement';
import { PmsLetter } from '@/components/PmsLetter';
import {
  PMS_BADGES,
  PMS_CALIBRATION_NOTES,
  PMS_CHECKERS,
  PMS_CONDUCT_WORKFLOWS,
  PMS_CYCLE_CARRIES,
  PMS_DOES_NOT_PROVE,
  PMS_ENGINE_NOTES,
  PMS_FAQ,
  PMS_JURISDICTIONS,
  PMS_METRICS,
  PMS_NO_QUOTE,
  PMS_OWNERSHIP,
  PMS_PROVES,
  PMS_REGION_NOTES,
  PMS_RELATED,
  PMS_STEPS,
  PMS_VERBS,
} from '@/lib/data/pms';

export const metadata: Metadata = {
  title: 'Flowza PMS — rate, calibrate and pay on one system',
  description:
    'KRA and KPI review cycles, bell-curve calibration, a compensation engine that knows India and Gulf statutory rules, and approved letters a third party can verify on a public page.',
};

/**
 * Flowza PMS.
 *
 * There is no testimonial on this page, by decision. What sits in that slot is
 * PMS_NO_QUOTE, which states the absence and why — on a page whose argument is
 * that a decision should be verifiable, an invented endorsement would be an odd
 * place to start.
 *
 * The WPS limitation is stated in five places across this page: the matrix cell,
 * the matrix caption, the matrix footnote, the engine-notes list, and the Pay step
 * of the static spine — plus the FAQ. Gulf wage-protection figures are computed
 * today; the bank-file export is on the roadmap and is not in the product. Do not
 * soften any of them.
 */
export default function PmsPage() {
  return (
    <>
      {/* HERO — the record one cycle leaves behind */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'center' }}>
            <div className="c-6 rv">
              <div className="pbadge">
                <span className="pbadge__m">
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M2.5 13.5c2.2 0 3.1-8 6.5-8s4.3 8 6.5 8" stroke="#F6F6F3" strokeWidth="1.6" />
                    <path d="M2.5 15.5h13" stroke="#F6F6F3" strokeWidth="1.6" />
                  </svg>
                </span>
                <span className="pbadge__t">Flowza PMS</span>
              </div>
              <ProductBadges badges={PMS_BADGES} />
              <h1 className="d-xl" style={{ marginBottom: 'var(--s5)' }}>
                Rate. Calibrate.<br />Pay. Document.
              </h1>
              <div className="pmsverbs">
                {PMS_VERBS.map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>
              <p className="lede" style={{ marginBottom: 'var(--s5)' }}>
                KRA and KPI review cycles and bell-curve calibration feed a compensation engine that
                knows your country&rsquo;s statutory rules — and every letter it issues can be checked
                by anyone. Performance decisions become defensible, pay decisions become
                local-law-aware, and letters stop being disputed.
              </p>
              <p className="small" style={{ marginBottom: 'var(--s7)', maxWidth: '58ch' }}>
                A rating on its own is an opinion. What makes it hold up three months later is the
                distribution it was compared against, the session that argued it, the rule that turned
                it into money, and the document that came out of the other end. PMS keeps all four
                attached to the same person record.
              </p>
              <div className="row" style={{ marginBottom: 'var(--s5)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <a className="btn btn--ghost" href="#pms-calibrate">
                  See a calibration session
                </a>
              </div>
              <AppLink host="pms.flowza.ai" />
            </div>

            <div className="c-6 rv rv-d2">
              <PmsCycleRecord />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                An illustrative cycle record, not a published customer figure. The four stages are the
                product&rsquo;s own loop; the identifiers show how each stage is filed against the same
                person.
              </p>
            </div>
          </Cols>

          <hr className="rule rv" style={{ margin: 'clamp(40px,5vw,var(--s8)) 0 var(--s6)' }} />
          <div className="rv">
            <Metrics items={PMS_METRICS} />
          </div>
        </Wrap>
      </Chapter>

      {/* THE LOOP */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>The loop</Eyebrow>
              <h2 className="d-l">Four stages, and the<br />handoffs between them.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Most organisations already do all four of these. They do them in four places: a review
                form, a spreadsheet of ratings, a payroll instruction, and a letter someone types in a
                word processor. Every join is a re-entry, and every re-entry is where the evidence
                trail breaks. Select a stage to see what enters it, what leaves it, and what it writes
                down.
              </p>
            </div>
          </Cols>
          <PmsLoop />
        </Wrap>
      </Chapter>

      {/* CALIBRATION */}
      <Chapter id="pms-calibrate">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Calibration</Eyebrow>
            <h2 className="d-l">A rating means little<br />on its own.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Managers do not rate alike. Two people doing comparable work under different managers can
              end a cycle a full band apart, and neither manager has done anything unreasonable — one
              holds a higher bar than the other and always has. Until the ratings are put side by side,
              that difference is invisible, and the person on the wrong side of it pays for it in money
              and in promotion.
            </p>
          </div>

          <Cols>
            <div className="c-7 rv">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>The same scale, three hands</h3>
              <PmsRatingStrips />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                An illustrative cohort of thirty in one job family and one grade band. The figures are
                drawn to show the mechanism; they are not a published measurement.
              </p>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="body-l" style={{ marginBottom: 'var(--s5)' }}>
                Read the three rows as one question: is a 4 from Iyer the same thing as a 4 from
                Farooq? On this cohort it plainly is not. Iyer&rsquo;s cohort has nobody below 3 and
                Farooq&rsquo;s has four; Farooq has nobody at 5 at all.
              </p>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Nothing in a review form catches this, because a form only ever shows one person at a
                time. It surfaces the moment the ratings are laid against a distribution — which is
                what calibration is, and why PMS holds the session inside the cycle rather than beside
                it in a spreadsheet.
              </p>
              <ul className="klist" style={{ borderTopColor: 'var(--edge)' }}>
                {PMS_CALIBRATION_NOTES.map((n) => (
                  <li key={n.heading}>
                    <h4>{n.heading}</h4>
                    <p className="small">{n.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Cols>

          <PmsDistribution />

          <p className="tiny rv" style={{ marginTop: 'var(--s4)', maxWidth: '88ch' }}>
            The reference distribution is configured per cycle and is a comparison, not a cap: PMS does
            not require a cohort to match the curve, and the calibrated result above deliberately does
            not. What it requires is that a rating which sits away from the distribution has a reason
            recorded next to it.
          </p>

          <Cols style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>What the session moved, and why</h3>
              <PmsMovements />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Nine movements out of thirty ratings: seven down, two up. The last row is the one people
                forget to build for — a rating that was challenged, examined and not changed. It is
                worth as much as a movement, because it is the case that will be argued about later.
              </p>
            </div>
            <div className="c-5 rv rv-d2">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>The minute is the product</h3>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                A calibration meeting that leaves no record has changed people&rsquo;s pay on the
                strength of a conversation nobody can reconstruct. A recorded session is what lets a
                manager explain a rating to the person who received it, and what lets the organisation
                answer a challenge months later with something other than recollection.
              </p>
              <PmsSessionMinute />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Illustrative minute. What is not illustrative is the shape: a session, an attendance
                list, a reference distribution, the movements, the dissent, and a link from every rating
                back to the session that examined it.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* THE COMPENSATION ENGINE */}
      <Chapter variant="raised">
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-6 rv">
              <Eyebrow>The compensation engine</Eyebrow>
              <h2 className="d-l">One shape.<br />Four rule sets.</h2>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                An agreed rating is not yet money. Turning one into money means resolving a salary
                structure, the statutory rules of the country the employee is employed in, and an
                increment strategy — in that country&rsquo;s currency. Read the table down a column and
                you have one market&rsquo;s rules. Read it across a row and you have the point: the
                engine does the same six things everywhere, and only the rule set changes.
              </p>
            </div>
          </Cols>

          <Panel className="rv" style={{ padding: 'var(--s5)' }}>
            <PmsCompMatrix />
            <p className="tiny" style={{ marginTop: 'var(--s5)', maxWidth: '88ch' }}>
              <sup>1</sup> An em-dash means PMS does not ship it and we do not claim it. The workforce
              nationalisation datasets in the product are Saudization and Omanization; there is no
              equivalent UAE dataset today, so the cell is empty rather than filled with something
              plausible. <sup>2</sup> Wage-protection filing is a Gulf obligation. PMS computes the
              figures for the three Gulf markets; the bank-file export is on the roadmap and is not in
              the product today. India&rsquo;s statutory payroll files are produced in Flowza Finance,
              which is where the money actually leaves.
            </p>
          </Panel>

          <Cols style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>
                An increment that leaves the structure standing
              </h3>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                This is a small mechanism with a long tail. A salary is not one number, it is a set of
                components, and several statutory computations read individual components rather than
                the total. An increment that resolves to a single new figure has quietly moved every one
                of those bases.
              </p>
              <PmsIncrement />
              <p className="pmscp__note">
                The same total, and a different employee. EPF is computed on basic pay; gratuity reads
                basic as well. Collapse four components into one and those computations have nothing
                left to read, so the contribution base moves for a reason nobody decided and nobody
                minuted. PMS applies the increment strategy to the structure and hands back a structure.
              </p>
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Illustrative figures in INR at a single grade. The arithmetic is the mechanism, not a
                customer&rsquo;s payroll.
              </p>
            </div>
            <div className="c-5 rv rv-d2">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>
                What the engine is, and what it is not
              </h3>
              <ul className="klist" style={{ borderTopColor: 'var(--edge)' }}>
                {PMS_ENGINE_NOTES.map((n) => (
                  <li key={n.heading}>
                    <h4>{n.heading}</h4>
                    <p className="small">{n.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* VERIFIABLE LETTERS */}
      <Chapter variant="instrument" net>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Verifiable letters</Eyebrow>
            <h2 className="d-l">A letter a stranger<br />can check.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              An experience letter is a claim on paper. The person receiving it — a future employer, a
              bank, a visa officer — has no way to test it, so they either accept it or ring your HR
              team and wait. PMS signs every letter it issues with your organisation&rsquo;s key and
              publishes a page where anyone holding the document can check it themselves. Almost nobody
              in this category ships this, and it is the least glamorous feature in the range.
            </p>
          </div>

          <PmsLetter />

          <Cols style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-12 rv">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>
                Be precise about what a verification is worth
              </h3>
              <div className="pmspv">
                <div>
                  <h4>What the check proves</h4>
                  <ul>
                    {PMS_PROVES.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="pmspv--no">
                  <h4>What the check does not prove</h4>
                  <ul>
                    {PMS_DOES_NOT_PROVE.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="tiny" style={{ marginTop: 'var(--s4)', maxWidth: '86ch' }}>
                This distinction is the whole reason the feature is worth having. A verification that
                claimed to prove the contents were true would be a lie about cryptography; a
                verification that proves the document is authentic and unaltered removes the argument
                that actually happens — the one about whether the letter is genuine.
              </p>
            </div>
          </Cols>

          <Cols style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-5 rv">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>Who actually checks</h3>
              <p className="small">
                Every one of these is a person who today either accepts an unverifiable document or
                delays a decision while somebody confirms it by telephone.
              </p>
            </div>
            <div className="c-7 rv rv-d2">
              <ul className="klist klist--2" style={{ borderTopColor: 'var(--edge)' }}>
                {PMS_CHECKERS.map((c) => (
                  <li key={c.heading}>
                    <h4>{c.heading}</h4>
                    <p className="small">{c.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* RESPECT AT WORK */}
      <Chapter>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Respect at Work</Eyebrow>
              <h2 className="d-l">Conduct duties, resolved<br />by jurisdiction.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                A conduct obligation is a legal one. Where the statute applies to your organisation, a
                published policy, a constituted committee, delivered training and a complaint procedure
                are requirements — and their absence is normally discovered at the worst possible
                moment, which is when the first complaint arrives. PMS resolves which set of
                obligations applies from the jurisdiction of the legal entity the person is employed by.
              </p>
            </div>
          </Cols>

          <ul className="pmsj rv">
            {PMS_JURISDICTIONS.map((j) => (
              <li key={j.where}>
                <span className="pmsj__k">
                  <b>{j.where}</b>
                  {j.regime}
                </span>
                <div>
                  {j.paragraphs.map((p, i) => (
                    <p
                      className="small"
                      key={i}
                      style={i === 0 && j.paragraphs.length > 1 ? { marginBottom: 'var(--s3)' } : undefined}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <KeylineList
            items={PMS_CONDUCT_WORKFLOWS.map((w) => ({ heading: w.heading, body: w.body }))}
            twoCol
            className="rv"
            style={{ marginTop: 'clamp(40px,5vw,var(--s8))', borderTopColor: 'var(--edge)' }}
          />
        </Wrap>
      </Chapter>

      {/* HOW IT WORKS — the four steps as a static spine */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="d-l">Four steps, not three.</h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Most performance products stop after two of these, and hand the third to payroll as an
              instruction. The fourth — the document at the end, and whether anyone can trust it — is
              usually nobody&rsquo;s feature at all.
            </p>
          </div>

          <ol className="pmsstep rv">
            {PMS_STEPS.map((step) => (
              <li key={step.n}>
                <span className="pmsstep__n">{step.n}</span>
                <div>
                  <h3>{step.heading}</h3>
                  <span className="pmsstep__w">{step.leavesWith}</span>
                </div>
                <div>
                  <p className="small">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Cols style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-6 rv">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>Your data, in your region</h3>
              <ul className="klist" style={{ borderTopColor: 'var(--edge)' }}>
                {PMS_REGION_NOTES.map((n) => (
                  <li key={n.heading}>
                    <h4>{n.heading}</h4>
                    <p className="small">{n.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="c-6 rv rv-d2">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>What a cycle carries with it</h3>
              <ul className="klist" style={{ borderTopColor: 'var(--edge)' }}>
                {PMS_CYCLE_CARRIES.map((n) => (
                  <li key={n.heading}>
                    <h4>{n.heading}</h4>
                    <p className="small">{n.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* WHERE PMS SITS IN THE NINE — and where a quote would be */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Where PMS sits in the nine</Eyebrow>
              <h2 className="d-l">Finance runs payroll.<br />PMS decides what<br />payroll should pay.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Two systems touching salary looks like duplication until you separate the decision from
                the disbursement. PMS owns the review, the calibration and the compensation decision.
                Flowza Finance owns the payroll run, the statutory filings and the postings to the
                ledger. The resolved figure crosses the shared data layer once, and no-one retypes it.
              </p>
            </div>
          </Cols>

          <div className="pmspv rv">
            {PMS_OWNERSHIP.map((col) => (
              <div key={col.heading}>
                <h3>{col.heading}</h3>
                <ul>
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="tiny rv" style={{ marginTop: 'var(--s4)', maxWidth: '86ch' }}>
            If you buy only one of the two, PMS still resolves the figure and still issues the letter;
            you would export the figure into whatever runs your payroll. What you lose is the part where
            nobody types it twice.
          </p>

          <Cols style={{ marginTop: 'clamp(48px,6vw,var(--s9))' }}>
            <div className="c-7 rv">
              <div className="pmsnot">
                <p className="pmsnot__h">{PMS_NO_QUOTE.heading}</p>
                <p className="body-l" style={{ marginBottom: 'var(--s4)' }}>{PMS_NO_QUOTE.lead}</p>
                <p className="small">{PMS_NO_QUOTE.body}</p>
              </div>
            </div>
            <div className="c-5 rv rv-d2">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>The four published numbers</h3>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Four markets computed in local currency. Four loop stages. Public third-party letter
                verification. New countries by configuration, not code. Those are the claims this
                product publishes, and everything shown above them on this page is illustrated mechanism
                rather than a measured result.
              </p>
              <div className="row">
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <AppLink host="pms.flowza.ai" />
              </div>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions HR leaders ask</h2>
          <FAQ items={PMS_FAQ.map((f) => ({ question: f.question, answer: f.answer }))} className="rv" />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks links={PMS_RELATED.map((r) => ({ ...r }))} className="rv" />
        </Wrap>
      </Chapter>
    </>
  );
}
