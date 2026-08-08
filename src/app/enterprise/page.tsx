import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { Stat } from '@/components/Stat';

export const metadata: Metadata = {
  title: 'Enterprise security and compliance — Flowza',
  description:
    'Access control, encryption, residency, recovery objectives and assurance status across all nine Flowza systems and the layer beneath them.',
};

export default function EnterprisePage() {
  return (
    <>
      {/* HERO */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end' }}>
            <div className="c-7 rv">
              <Eyebrow>Enterprise</Eyebrow>
              <h1 className="d-xl">Consolidation<br />raises the bar<br />on trust.</h1>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Consolidating onto one data layer makes that layer both more valuable and more consequential — nine systems
                reading it is nine ways in, and one place where a mistake would matter everywhere. These are the controls
                that make that defensible, stated plainly enough to hand to a security reviewer.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* ACCESS */}
      <Chapter id="access" variant="raised">
        <Wrap>
          <Cols>
            <div className="c-4 rv">
              <Eyebrow>Access</Eyebrow>
              <h2 className="d-m">Who can see what</h2>
            </div>
            <div className="c-8 rv rv-d2">
              <ul className="klist klist--2" style={{ borderTopColor: 'var(--edge)' }}>
                <li><h3>Single sign-on</h3><p className="small">SAML 2.0 and OIDC against any compliant issuer, including Entra ID, Okta and Google Workspace. Local passwords can be disabled entirely at the tenant level.</p></li>
                <li><h3>Directory-driven lifecycle</h3><p className="small">SCIM provisioning creates, updates and deactivates accounts from your directory. A departure in HR removes platform access in the same operation.</p></li>
                <li><h3>Role-based, attribute-aware</h3><p className="small">Permissions combine role with attributes such as entity, region and cost centre, evaluated at query time. A user cannot retrieve a record they are not entitled to, through the UI or the API.</p></li>
                <li><h3>Agents inherit, never exceed</h3><p className="small">An AI agent runs with the delegated identity of the person or service that invoked it. It cannot read or write anything that principal could not.</p></li>
                <li><h3>Session control</h3><p className="small">Configurable idle and absolute timeouts, device and IP conditions, and administrative session revocation that takes effect immediately.</p></li>
                <li><h3>Break-glass, recorded</h3><p className="small">Elevated access requires a documented reason, notifies a second administrator, and expires automatically.</p></li>
              </ul>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* DATA */}
      <Chapter id="data" variant="instrument" net>
        <Wrap>
          <Cols>
            <div className="c-4 rv">
              <Eyebrow>Data</Eyebrow>
              <h2 className="d-m">Where it lives and how it is protected</h2>
            </div>
            <div className="c-8 rv rv-d2">
              <ul className="klist klist--2" style={{ borderTopColor: 'var(--edge)' }}>
                <li><h3>Encryption</h3><p className="small">TLS 1.3 in transit. AES-256 at rest with per-tenant key separation and scheduled rotation. Customer-managed keys are available on enterprise agreements.</p></li>
                <li><h3>Residency</h3><p className="small">The storage region is selected at provisioning and does not change without an explicit, logged migration. Backups and replicas stay within the selected jurisdiction.</p></li>
                <li><h3>Isolation</h3><p className="small">Tenant identity is enforced in the data layer rather than in application code, so a query cannot cross a tenant boundary even if application logic is wrong.</p></li>
                <li><h3>Retention and deletion</h3><p className="small">Configurable retention per object class, legal hold, and verified deletion on termination with a certificate issued on completion.</p></li>
                <li><h3>Backups</h3><p className="small">Continuous point-in-time recovery with cross-region copies. Restores are exercised on a schedule rather than assumed to work.</p></li>
                <li><h3>Sub-processors</h3><p className="small">A current list is published with the purpose and region of each, and material changes are notified in advance of taking effect.</p></li>
              </ul>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* ASSURANCE */}
      <Chapter id="assurance">
        <Wrap>
          <Cols>
            <div className="c-6 rv">
              <Eyebrow>Assurance</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>Certification status</h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Stated as of the date below and updated as each programme completes. Reports and questionnaires are available
                under NDA through your account team.
              </p>
              <table className="tbl">
                <caption className="sr">Certification and assurance programme status</caption>
                <thead><tr><th scope="col">Programme</th><th scope="col">Status</th></tr></thead>
                <tbody>
                  <tr><td>SOC 2 Type II</td><td>Audit window in progress</td></tr>
                  <tr><td>ISO/IEC 27001</td><td>Implementation underway</td></tr>
                  <tr><td>GDPR — controller and processor</td><td>DPA available</td></tr>
                  <tr><td>Penetration testing</td><td>Annual, third party; summary on request</td></tr>
                  <tr><td>Vulnerability disclosure</td><td>Published policy, monitored channel</td></tr>
                </tbody>
              </table>
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Status shown for illustration in this build and should be confirmed against the current assurance register before publication.
              </p>
            </div>

            <div className="c-6 rv rv-d2">
              <Eyebrow>Operations</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>Running it</h2>
              <Cols style={{ gap: 'var(--s5)' }}>
                <div className="c-6"><Stat number="99.9%" label="Monthly availability target, measured at the API edge" /></div>
                <div className="c-6"><Stat number="<15m" label="Recovery point objective for the primary datastore" /></div>
                <div className="c-6"><Stat number="<4h" label="Recovery time objective for a full regional failover" /></div>
                <div className="c-6"><Stat number="24×7" label="Named escalation path on enterprise agreements" /></div>
              </Cols>
              <ul className="klist" style={{ marginTop: 'var(--s6)', borderTopColor: 'var(--edge)' }}>
                <li><h3>Change management</h3><p className="small">Releases ship behind flags with staged rollout and automatic rollback on error-budget burn. Tenants on enterprise agreements can pin a release window.</p></li>
                <li><h3>Status and incidents</h3><p className="small">Live status page with component-level history, and post-incident reviews published for anything customer-affecting.</p></li>
              </ul>
            </div>
          </Cols>

          <div className="row rv" style={{ marginTop: 'var(--s9)' }}>
            <Link className="btn btn--primary" href="/pricing">Talk to us <span className="arw">→</span></Link>
            <Link className="btn btn--ghost" href="/platform">Platform architecture</Link>
          </div>
        </Wrap>
      </Chapter>
    </>
  );
}
