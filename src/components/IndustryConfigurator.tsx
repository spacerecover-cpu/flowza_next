'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { INDUSTRIES, SYSTEM_NAMES } from '@/lib/data/industries';

function IndustryConfiguratorInner() {
  const router = useRouter();
  const params = useSearchParams();
  const sectorParam = params.get('sector');
  const selectedIndex = Math.max(
    0,
    INDUSTRIES.findIndex((ind) => ind.slug === sectorParam)
  );
  const ind = INDUSTRIES[selectedIndex];
  const enabledSet = new Set(ind.systemIndexes);

  function select(slug: string) {
    router.replace(`?sector=${slug}`, { scroll: false });
  }

  return (
    <div className="rv">
      <div className="cfg__pick" role="group" aria-label="Choose an industry">
        {INDUSTRIES.map((industry, i) => (
          <button
            key={industry.slug}
            type="button"
            className={`chip${selectedIndex === i ? ' is-on' : ''}`}
            aria-pressed={selectedIndex === i}
            onClick={() => select(industry.slug)}
          >
            {industry.name}
          </button>
        ))}
      </div>
      <div className="cfg__sheet" aria-live="polite">
        <div className="cfg__head">
          <div>
            <p className="mono" style={{ fontSize: '.5938rem', letterSpacing: '.13em', color: 'var(--fg-3)', marginBottom: '9px' }}>
              0{selectedIndex + 1} — START WITH {ind.startWith.toUpperCase()}
            </p>
            <h3 className="cfg__name">{ind.name}</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 'var(--s3)' }}>
            <span className="tag tag--sig">Planning cycle · {ind.cycle}</span>
            {ind.page && (
              <Link className="btn btn--text" href={ind.page}>
                Full sector page <span className="arw">→</span>
              </Link>
            )}
          </div>
        </div>
        <div className="cfg__spec">
          <div className="spec">
            <span className="spec__k">Unit of work</span>
            <span className="spec__v">{ind.unitOfWork}</span>
            <span className="spec__n">What the business counts, and what every report rolls up to.</span>
          </div>
          <div className="spec">
            <span className="spec__k">Binding constraint</span>
            <span className="spec__v">{ind.constraint}</span>
            <span className="spec__n">The resource that runs out first, and therefore what scheduling protects.</span>
          </div>
          <div className="spec">
            <span className="spec__k">Metric that decides</span>
            <span className="spec__v">{ind.metric}</span>
            <span className="spec__n">The number an operator acts on daily, computed from live records.</span>
          </div>
        </div>
        <div className="cfg__mods">
          <span className="brief__k">Systems in a typical estate · {ind.systemIndexes.length} of 9</span>
          <div className="segbar" aria-hidden="true">
            {SYSTEM_NAMES.map((_, j) => (
              <i key={j} className={enabledSet.has(j) ? 'on' : ''} />
            ))}
          </div>
          <p className="modlist">
            {SYSTEM_NAMES.map((m, j) => (
              <React.Fragment key={j}>
                {j > 0 && ' · '}
                {enabledSet.has(j) ? <b>{m}</b> : <s>{m}</s>}
              </React.Fragment>
            ))}
          </p>
          <p className="small" style={{ marginTop: 'var(--s5)', maxWidth: '78ch' }}>{ind.note}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * `useSearchParams` forces a Suspense boundary in the App Router, so the
 * selection state lives in the URL (`?sector=…`) and the sheet is the fallback's
 * only child.
 */
export function IndustryConfigurator() {
  return (
    <Suspense fallback={null}>
      <IndustryConfiguratorInner />
    </Suspense>
  );
}
