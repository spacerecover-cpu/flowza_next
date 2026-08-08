import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { KeylineList } from '@/components/KeylineList';
import { PathwayRibbon } from '@/components/PathwayRibbon';

export const metadata: Metadata = {
  title: 'Healthcare — FlowZa AI',
  description:
    'Three per cent of an elective pathway is clinical contact. Measure cost per episode from what actually happened rather than allocating a budget.',
};

export default function HealthcarePage() {
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
                Healthcare
              </p>
              <h1 className="d-xl">
                Three per cent<br />of the pathway<br />is treatment.
              </h1>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                Clinical quality improvement focuses on the minutes a clinician is with the patient. Almost all of the elapsed time — and most of the cost, the risk and the complaints — sits in the gaps between stages, where no single department is accountable.
              </p>
              <div className="row" style={{ marginTop: 'var(--s6)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <Link className="btn btn--ghost" href="/enterprise">Data and residency</Link>
              </div>
            </div>
          </Cols>

          <div className="panel rv" style={{ padding: 'var(--s6)' }}>
            <div className="row" style={{ justifyContent: 'space-between', marginBottom: 'var(--s5)' }}>
              <span className="mono" style={{ fontSize: '.625rem', letterSpacing: '.11em', color: 'var(--fg-3)' }}>
                ELECTIVE PATHWAY · MEDIAN ELAPSED DAYS
              </span>
              <span className="tag tag--ai">79.6 days end to end</span>
            </div>
            <div className="dscroll" style={{ ['--dmin' as string]: '640px' }}>
              <PathwayRibbon />
            </div>
            <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
              The green slivers are the entire clinical contribution. Everything else is a handover waiting for a decision, a slot or a result. Shortening a consultation by five minutes changes nothing on this chart; removing four days from diagnostics changes it visibly.
            </p>
          </div>
        </Wrap>
      </Chapter>

      {/* COST PER EPISODE */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols>
            <div className="c-5 rv">
              <Eyebrow>Cost per episode</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>Measured, not allocated</h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Most costing in healthcare divides a departmental budget by a caseload and calls the result a cost per episode. That number cannot tell you which pathway to change, because it was never built from what actually happened to a patient.
              </p>
              <p className="small">
                When consumables decrement real stock against the episode, theatre minutes post from the scheduling record, and clinician time comes from the roster, the figure is assembled rather than apportioned.
              </p>
            </div>
            <div className="c-7 rv rv-d2">
              <div className="panel" style={{ padding: 'var(--s5)' }}>
                <div className="tw">
                  <table className="tbl">
                    <caption className="sr">Cost build-up for one elective episode, showing how each component is derived</caption>
                    <thead>
                      <tr>
                        <th scope="col">Component</th>
                        <th scope="col">Derived from</th>
                        <th scope="col">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Theatre time</td><td>Scheduling record · 94 min</td><td>1,410</td></tr>
                      <tr><td>Clinical staff</td><td>Roster and grade mix</td><td>880</td></tr>
                      <tr><td>Consumables</td><td>Stock issued to the episode</td><td>612</td></tr>
                      <tr><td>Implant</td><td>Serialised, traced to the patient</td><td>2,340</td></tr>
                      <tr><td>Diagnostics</td><td>Orders raised on the pathway</td><td>385</td></tr>
                      <tr><td>Bed days</td><td>Admission and discharge events</td><td>1,120</td></tr>
                      <tr><td>Follow-up</td><td>Appointments attended</td><td>190</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                  Every line traces to a record somebody created while doing their job. Nothing here is a percentage of an overhead pool, which is why a variance between two surgeons performing the same procedure is a question worth asking rather than an artefact of the model.
                </p>
              </div>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* RUNNING THE SERVICE */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Running the service</Eyebrow>
            <h2 className="d-l">The constraint is a room<br />with a clinician in it.</h2>
          </div>
          <KeylineList
            twoCol
            className="rv"
            items={[
              {
                heading: 'Schedule against the scarce resource',
                body: 'A theatre or a clinic room with the right staffing is the limit, not the appointment book. Lists are built against room, staff mix, equipment and turnaround, so an over-booked list is refused rather than discovered on the day.',
              },
              {
                heading: 'Cancellations have a named cause',
                body: 'Every cancelled slot records why and who. A month of lost capacity becomes a ranked list of fixable causes instead of a percentage in a board report.',
              },
              {
                heading: 'Implants and consumables are traceable',
                body: 'Serialised items are bound to the patient and the episode through QRForge, so a recall resolves to named individuals in one query rather than a manual search of theatre logs.',
              },
              {
                heading: 'Waiting lists are one list',
                body: 'A patient waiting for diagnostics, a decision and a procedure appears once with a total wait, not three times in three departmental queues that each look reasonable.',
              },
              {
                heading: 'Access follows the clinical relationship',
                body: 'Record access is granted by care relationship and role, evaluated at query time and logged. Break-glass access requires a reason and notifies a second person.',
              },
              {
                heading: 'Residency is fixed at provisioning',
                body: 'Patient data stays in the jurisdiction chosen at the start, including backups and replicas, and moving it is an explicit logged migration rather than a configuration change.',
              },
            ]}
          />
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions providers ask</h2>
          <FAQ
            className="rv"
            items={[
              {
                question: 'Is this a clinical system?',
                answer: 'No, and that distinction matters. FlowZa runs the operational and financial side — scheduling, resources, consumables, procurement, costing, billing and the ledger. The clinical record stays in your EPR, and the two exchange the events each needs. We are not asking you to migrate clinical documentation.',
              },
              {
                question: 'How do you handle payer and insurer billing?',
                answer: 'Episodes are coded and priced against the payer\'s schedule, with rejections returning to a worklist that carries the original episode and the reason. Because the claim is built from the same records as the cost, the margin on a payer contract is visible per procedure rather than at year end.',
              },
              {
                question: 'What about interoperability standards?',
                answer: 'HL7 and FHIR interfaces are how the platform exchanges data with clinical systems, and the integration is maintained by us rather than run as middleware by you. Where a national or regional exchange is mandatory, it is treated the same way as a tax clearance regime elsewhere on this platform.',
              },
            ]}
          />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks
            className="rv"
            links={[
              { href: '/products/qrforge', title: 'FlowZa QRForge', subtitle: 'Codes on printed patient material' },
              { href: '/enterprise', title: 'Enterprise', subtitle: 'Access, residency and audit' },
              { href: '/industries', title: 'All industries', subtitle: 'Compare all eight sectors' },
            ]}
          />
        </Wrap>
      </Chapter>
    </>
  );
}
