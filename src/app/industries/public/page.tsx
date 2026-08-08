import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';
import { BudgetConsumption } from '@/components/BudgetConsumption';
import { CaseAgeing } from '@/components/CaseAgeing';

export const metadata: Metadata = {
  title: 'Public sector — Flowza AI',
  description:
    'Commitment accounting at the requisition, case ageing against the statutory window, and a platform designed to be audited.',
};

export default function PublicPage() {
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
                You cannot<br />spend an<br />appropriation<br />twice.
              </h1>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                Commercial finance asks what you have spent. Public finance asks what you have committed, because an order placed against an exhausted budget is a governance failure whether or not the invoice has arrived. Most systems record the invoice.
              </p>
              <div className="row" style={{ marginTop: 'var(--s6)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <Link className="btn btn--ghost" href="/enterprise">Audit and access</Link>
              </div>
            </div>
          </Cols>

          <div className="rv">
            <BudgetConsumption />
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              Roads has spent 71% and committed a further 33%. On a spend report it is comfortably inside budget with five months to run. On a commitment basis it is already four points over, and the next requisition should not be approved. IT modernisation shows the opposite shape — barely spent, largely committed — which is a delivery question rather than a financial one.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* CASEWORK */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Casework</Eyebrow>
              <h2 className="d-l">Eighty-nine cases are<br />past the statutory<br />window.</h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                An average response time is a comfortable number. The distribution is the accountable one, because the obligation is per case and the tail is where the complaints, the appeals and the ombudsman referrals come from.
              </p>
            </div>
          </Cols>
          <div className="panel rv" style={{ padding: 'var(--s6)' }}>
            <div className="dscroll" style={{ ['--dmin' as string]: '620px' }}>
              <CaseAgeing />
            </div>
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              The mean of 11.4 days is comfortably inside the obligation and describes none of the eighty-nine cases that are not. Work is queued by age against the threshold rather than by arrival order, so the tail is worked first.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* CONTROL */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Control</Eyebrow>
            <h2 className="d-l">Designed to be<br />audited.</h2>
          </div>
          <KeylineList
            twoCol
            className="rv"
            items={[
              {
                heading: 'Commitment accounting at the requisition',
                body: 'The budget check happens when someone asks to spend, not when the invoice is entered. An appropriation cannot be exceeded by orders nobody has posted yet.',
              },
              {
                heading: 'Procurement thresholds enforced, not advised',
                body: 'Value bands determine the required competition, the approvals and the publication obligations. Crossing a threshold changes the workflow automatically rather than relying on the buyer remembering.',
              },
              {
                heading: 'Every decision attributable',
                body: 'Who approved what, on what authority and under which delegation, held in an immutable log. Reconstructing a decision for an auditor or a committee is a query rather than an investigation.',
              },
              {
                heading: 'Virement is a controlled event',
                body: 'Moving budget between programmes follows the delegation rules, records the justification and leaves both sides of the transfer visible in the year-end position.',
              },
              {
                heading: 'Disclosure without a data project',
                body: 'Spend over the publication threshold, contract registers and payment performance are reports over live records, not an annual extract someone assembles by hand.',
              },
              {
                heading: 'Year-end is a boundary, not an event',
                body: 'Accruals, commitments carried forward and the treatment of underspend follow rules configured once. The closing position is visible in month nine, which is when it can still be influenced.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions public bodies ask</h2>
          <FAQ
            className="rv"
            items={[
              {
                question: 'Can this meet our national accounting framework?',
                answer: 'The ledger is multi-book, so a statutory framework and a management view are maintained over the same transactions rather than reconciled afterwards. The specific framework — IPSAS, a national code, or a sector variant — is configuration, and it is one of the first things modelled during deployment.',
              },
              {
                question: 'What about procurement regulations and publication duties?',
                answer: 'Thresholds, competition rules and publication obligations are configured per jurisdiction and enforced in the workflow. Where a national tendering portal must be used, it is treated as an integration at the perimeter rather than reimplemented inside the platform.',
              },
              {
                question: 'Where would our data be held?',
                answer: 'In the region selected at provisioning, including backups and replicas, and it does not move without an explicit logged migration. Where sovereignty requirements go beyond region selection, that is an enterprise conversation before contract rather than a configuration afterwards.',
              },
              {
                question: 'Our staff have used the same system for fifteen years.',
                answer: 'Then the risk is change, not software, and the parallel run exists for exactly that. Both systems process the same period until the closes agree, and the incumbent stays available read-only afterwards. We would rather extend that period than compress it.',
              },
            ]}
          />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks
            className="rv"
            links={[
              { href: '/enterprise', title: 'Enterprise', subtitle: 'Audit, access and residency' },
              { href: '/products/finance', title: 'Flowza Finance', subtitle: 'Multi-book and controls' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all eight sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
