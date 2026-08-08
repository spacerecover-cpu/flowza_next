import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { KeylineList } from '@/components/KeylineList';
import { RelatedLinks } from '@/components/RelatedLinks';
import { ROLES, roleBySlug } from '@/lib/data/roles';
import { SYSTEMS } from '@/lib/data/systems';

/**
 * One route per function, rather than one page with a `?team=` switch.
 *
 * The switcher on /solutions kept its selection in a query parameter, which a
 * static export cannot differentiate: all four functions shared one URL, one
 * title and one entry in the index. These four routes give each function its
 * own page so it can be indexed, linked and shared on its own.
 *
 * /solutions keeps the switcher for side-by-side browsing and links out to
 * these; `?team=` still selects there, so existing links do not break.
 */
export function generateStaticParams() {
  return ROLES.map((role) => ({ team: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ team: string }>;
}): Promise<Metadata> {
  const { team } = await params;
  const role = roleBySlug(team);
  if (!role) return {};
  return { title: role.title, description: role.description };
}

export default async function FunctionPage({
  params,
}: {
  params: Promise<{ team: string }>;
}) {
  const { team } = await params;
  const role = roleBySlug(team);
  if (!role) notFound();

  const others = ROLES.filter((r) => r.slug !== role.slug);

  return (
    <>
      {/* HERO */}
      <Chapter style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-6 rv">
              <p className="ibadge">
                <Link href="/solutions">Solutions</Link>
                <i />
                {role.team}
              </p>
              <h1 className="d-xl">{role.name}</h1>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                <span aria-hidden="true">&ldquo;</span>{role.question}<span aria-hidden="true">&rdquo;</span>
              </p>
              <div className="row" style={{ marginTop: 'var(--s6)' }}>
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">&rarr;</span>
                </Link>
                <Link className="btn btn--ghost" href="/solutions#by-function">
                  Compare all four
                </Link>
              </div>
            </div>
          </Cols>

          <div className="fnstats rv">
            {role.stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__n">{s.value}</span>
                <span className="stat__l">{s.label}</span>
              </div>
            ))}
          </div>
        </Wrap>
      </Chapter>

      {/* THE PROBLEM AND THE CHANGE */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols>
            <div className="c-6 rv">
              <Eyebrow>Why that is hard today</Eyebrow>
              <p className="body-l" style={{ marginTop: 'var(--s5)' }}>{role.hardToday}</p>
            </div>
            <div className="c-6 rv rv-d2">
              <Eyebrow>What changes on FlowZa AI</Eyebrow>
              <p className="body-l" style={{ marginTop: 'var(--s5)', color: 'var(--fg)' }}>
                {role.whatChanges}
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* WHICH APPLICATIONS */}
      <Chapter>
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Which applications</Eyebrow>
            <h2 className="d-l">
              {role.applications.length > 0
                ? 'The ones that answer this.'
                : 'Every application, to one standard.'}
            </h2>
          </div>

          {role.applications.length > 0 ? (
            <>
              <ul className="klist klist--2 rv">
                {role.applications.map((a) => {
                  const system = SYSTEMS.find((s) => s.key === a.key);
                  if (!system) return null;
                  return (
                    <li key={a.key}>
                      <h3>{system.name}</h3>
                      <p className="small" style={{ marginBottom: 'var(--s3)' }}>{a.why}</p>
                      <Link className="btn btn--text" href={system.href}>
                        {system.name} <span className="arw">&rarr;</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="tiny rv" style={{ marginTop: 'var(--s5)', maxWidth: '78ch' }}>
                Each is bought and deployed on its own. Nothing here requires you to hold more than one
                &mdash; start with whichever solves the problem in front of you.
              </p>
            </>
          ) : (
            <p className="body-l rv" style={{ maxWidth: '78ch' }}>{role.platformAnswer}</p>
          )}
        </Wrap>
      </Chapter>

      {/* THE OTHER FUNCTIONS */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>Other functions</Eyebrow>
            <h2 className="d-m">The same question,<br />asked from another desk.</h2>
          </div>
          <RelatedLinks
            className="rv"
            links={others.map((r) => ({
              href: `/solutions/${r.slug}`,
              title: r.name,
              subtitle: r.question,
            }))}
          />
        </Wrap>
      </Chapter>

      {/* CLOSE */}
      <Chapter variant="instrument" net netFull>
        <Wrap>
          <div className="close rv">
            <Eyebrow plain style={{ justifyContent: 'center' }}>Get started</Eyebrow>
            <h2 className="d-l">See it against your<br />own numbers.</h2>
            <p className="lede" style={{ margin: '0 auto var(--s7)' }}>
              A walkthrough covers one application and one real process end to end. Forty-five minutes, no slides.
            </p>
            <div className="row" style={{ justifyContent: 'center' }}>
              <Link className="btn btn--primary" href="/pricing">Book a walkthrough <span className="arw">&rarr;</span></Link>
              <Link className="btn btn--ghost" href="/enterprise">Security and compliance</Link>
            </div>
          </div>
        </Wrap>
      </Chapter>
    </>
  );
}
