'use client';

import React, { useState } from 'react';
import {
  RENT_AGEING_ALERT,
  RENT_APPLICATIONS,
  RENT_BULK_ACTIONS,
  RENT_COLUMNS,
  type RentApplication,
} from '@/lib/data/rentflow';

/**
 * The pipeline board.
 *
 * Client component: search, selection and the bulk move are all state. Nothing
 * lost in an inbox is a claim about time, so the board states it as time — how
 * many applications sit in each status and how long the oldest one has been
 * waiting there, counted from arrival rather than from when somebody opened it.
 *
 * A bulk move carries one reason for the batch and writes it against each
 * application separately, so a batch action does not become an unexplained one.
 */

interface MoveLog {
  count: number;
  verb: string;
  reason: string;
}

export function RentPipeline() {
  const [apps, setApps] = useState<RentApplication[]>(() =>
    RENT_APPLICATIONS.map((a) => ({ ...a }))
  );
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const [query, setQuery] = useState('');
  const [log, setLog] = useState<MoveLog | null>(null);

  const q = query.toLowerCase().trim();
  const selectedIds = apps.filter((a) => picked[a.id]).map((a) => a.id);
  const n = selectedIds.length;

  function matches(a: RentApplication): boolean {
    if (!q) return true;
    return `${a.name} ${a.email} ${a.id}`.toLowerCase().indexOf(q) > -1;
  }

  const columns = RENT_COLUMNS.map((col, i) => {
    const all = apps.filter((a) => a.status === i);
    const visible = all.filter(matches);
    const oldest = all.reduce((max, a) => (a.days > max ? a.days : max), 0);
    return { col, all, visible, oldest };
  });

  const shown = columns.reduce((sum, c) => sum + c.visible.length, 0);

  function toggle(id: string) {
    setPicked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function move(to: number, reason: string, verb: string) {
    if (!n) return;
    setApps((prev) =>
      prev.map((a) => {
        if (!picked[a.id]) return a;
        const next: RentApplication = { ...a, status: to };
        if (reason) next.reason = reason;
        else delete next.reason;
        return next;
      })
    );
    setPicked({});
    setLog({ count: n, verb, reason });
  }

  return (
    <>
      <div className="rfb rv">
        <div className="rfb__tools">
          <label className="rfb__find" htmlFor="rfSearch">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="6.8" cy="6.8" r="4.6" stroke="var(--fg-3)" strokeWidth="1.5" />
              <path d="M10.4 10.4L14 14" stroke="var(--fg-3)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="sr">Find an applicant by name, email or application ID</span>
            <input
              type="search"
              id="rfSearch"
              placeholder="Find by name, email or application ID"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <span className="rfb__hint" aria-live="polite">
            {shown} of {apps.length} applications{q ? ` match “${q}”` : ''}
          </span>
        </div>

        <div className="rfb__s">
          <div className="rfb__t">
            {columns.map(({ col, all, visible, oldest }) => (
              <div className="rfb__col" key={col.key}>
                <div className="rfb__ch">
                  <p className="rfb__cn">{col.key}</p>
                  <div className="rfb__cc">
                    <span className="rfb__ct">{all.length}</span>
                    <span className={`rfb__ca${oldest >= RENT_AGEING_ALERT ? ' rfb__ca--old' : ''}`}>
                      oldest<br />
                      <b>{all.length ? `${oldest} days` : '—'}</b>
                    </span>
                  </div>
                  {q && (
                    <p className="rfb__cn" style={{ marginTop: '8px' }}>
                      {visible.length} of {all.length} shown
                    </p>
                  )}
                </div>
                <div className="rfb__list">
                  {visible.length === 0 ? (
                    <p className="rfb__empty">{q ? 'No match' : 'Empty'}</p>
                  ) : (
                    visible.map((a) => (
                      <button
                        type="button"
                        className="rfc"
                        key={a.id}
                        aria-pressed={Boolean(picked[a.id])}
                        aria-label={`${a.name}, ${a.id}, ${a.unit}, ${a.days} days in ${col.key.toLowerCase()}. Select to move it with others.`}
                        onClick={() => toggle(a.id)}
                      >
                        <span className="rfc__n">{a.name}</span>
                        <span className="rfc__e">{a.email}</span>
                        <span className="rfc__m">
                          {a.id} <i>· {a.days}d · {a.unit}</i>
                        </span>
                        {a.reason && <span className="rfc__r">{a.reason}</span>}
                      </button>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rfb__bulk">
          <span className="rfb__sel">
            {n
              ? `${n}${n === 1 ? ' application selected' : ' applications selected'} · one reason will be written against each`
              : 'Nothing selected. Select applications to move them together.'}
          </span>
          {RENT_BULK_ACTIONS.map((action) => (
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              key={action.label}
              disabled={n === 0}
              onClick={() => move(action.to, action.reason, action.verb)}
            >
              {action.label}
            </button>
          ))}
          <button
            type="button"
            className="btn btn--text btn--sm"
            disabled={n === 0}
            onClick={() => setPicked({})}
          >
            Clear
          </button>
        </div>
      </div>

      <p className="rflog rv" aria-live="polite">
        {log === null ? (
          'Ageing is counted from the moment the application landed, not from when somebody opened it.'
        ) : (
          <>
            {log.count}
            {log.count === 1 ? ' application ' : ' applications '}
            {log.verb}
            {log.reason ? (
              <>
                . Reason recorded against each file: <b>{log.reason}</b>
              </>
            ) : (
              '. No decision taken, so no reason is due — the status changed, nothing was concluded.'
            )}
            {' Ageing continues to run from the day each one arrived.'}
          </>
        )}
      </p>
    </>
  );
}
