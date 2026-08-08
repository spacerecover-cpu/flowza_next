'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ROLES } from '@/lib/data/roles';
import { SYSTEMS } from '@/lib/data/systems';

function RoleSwitcherInner() {
  const router = useRouter();
  const params = useSearchParams();
  const teamParam = params.get('team');
  const selectedIndex = Math.max(
    0,
    ROLES.findIndex((r) => r.slug === teamParam)
  );
  const role = ROLES[selectedIndex];

  function select(slug: string) {
    router.replace(`?team=${slug}`, { scroll: false });
  }

  return (
    <div className="roles rv">
      <div className="roles__list" role="group" aria-label="Choose a function">
        {ROLES.map((r, i) => (
          <button
            key={r.slug}
            type="button"
            className={`role${selectedIndex === i ? ' is-on' : ''}`}
            aria-pressed={selectedIndex === i}
            onClick={() => select(r.slug)}
          >
            <span className="role__r">0{i + 1} · {r.team}</span>
            <span className="role__n">{r.name}</span>
          </button>
        ))}
        <p className="role__hint tiny">
          Four teams, four questions. Pick a role to see which FlowZa AI applications answer it.
        </p>
      </div>
      <div className="brief" aria-live="polite">
        <p className="brief__q"><span>&ldquo;</span>{role.question}<span>&rdquo;</span></p>
        <div className="brief__blocks">
          <div>
            <span className="brief__k">Why that is hard today</span>
            <p className="small">{role.hardToday}</p>
          </div>
          <div>
            <span className="brief__k">What changes on FlowZa</span>
            <p className="small" style={{ color: 'var(--fg)' }}>{role.whatChanges}</p>
          </div>
        </div>
        <div className="brief__blocks" style={{ marginTop: 'var(--s5)' }}>
          <div>
            <span className="brief__k">
              {role.applications.length > 0 ? 'Which applications answer it' : 'How it is answered'}
            </span>
            <p className="small">
              {role.applications.length > 0
                ? role.applications
                    .map((a) => SYSTEMS.find((s) => s.key === a.key)?.name)
                    .filter(Boolean)
                    .join(', ')
                : 'The same security standard, built into every application.'}
            </p>
          </div>
        </div>
        <div className="brief__stats">
          {role.stats.map((s, i) => (
            <div key={i} className="stat">
              <span className="stat__n">{s.value}</span>
              <span className="stat__l">{s.label}</span>
            </div>
          ))}
        </div>
        <Link className="btn btn--text" href={`/solutions/${role.slug}`} style={{ marginTop: 'var(--s5)' }}>
          {role.name} in full <span className="arw">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export interface RoleSwitcherProps {
  className?: string;
}

export function RoleSwitcher({ className }: RoleSwitcherProps) {
  return (
    <Suspense fallback={null}>
      <RoleSwitcherInner />
    </Suspense>
  );
}
