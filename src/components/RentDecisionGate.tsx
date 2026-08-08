'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  RENT_CHECK_LABEL,
  RENT_DECIDED_BY,
  RENT_FILES,
  RENT_RECORD_DATE,
  RENT_RECORD_MINUTE_START,
  type RentCheckState,
} from '@/lib/data/rentflow';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

/**
 * The five checks as a gate.
 *
 * Client component: the whole set piece is the disabled state changing. Approve
 * and Reject are real `disabled` buttons — not divs carrying aria-disabled —
 * and they stay closed until all five checks have returned. A decision cannot
 * be taken on a file that is still half open, and whichever decision is taken,
 * a reason is written with it.
 *
 * Two files: one clean, one where eviction history returns adverse.
 */

/** A fresh array each time, so no caller can mutate a shared one. */
function waiting(): RentCheckState[] {
  return ['w', 'w', 'w', 'w', 'w'];
}

interface DecisionRecord {
  kind: 'approved' | 'rejected';
  fileId: string;
  fileName: string;
  reason: string;
  adverse: number;
  minute: number;
}

export function RentDecisionGate() {
  const [cur, setCur] = useState(0);
  const [states, setStates] = useState<RentCheckState[]>(waiting);
  const [record, setRecord] = useState<DecisionRecord | null>(null);
  const [minute, setMinute] = useState(RENT_RECORD_MINUTE_START);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reduced = useReducedMotion();

  const file = RENT_FILES[cur];
  const returned = states.filter((s) => s === 'c' || s === 'a').length;
  const open = returned === 5;

  function stop() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  useEffect(() => stop, []);

  function resolveAll() {
    setStates(file.checks.map((c) => c.result));
  }

  function run() {
    stop();
    setRecord(null);
    setStates(['r', 'r', 'r', 'r', 'r']);

    if (reduced) {
      resolveAll();
      return;
    }

    file.checks.forEach((check, i) => {
      timers.current.push(
        setTimeout(() => {
          setStates((prev) => {
            const next = prev.slice();
            next[i] = check.result;
            return next;
          });
        }, 380 + i * 420)
      );
    });
  }

  function decide(kind: 'approved' | 'rejected') {
    const adverse = file.checks.filter((c) => c.result === 'a').length;
    const next = (minute + 1) % 60;
    setMinute(next);
    setRecord({
      kind,
      fileId: file.id,
      fileName: file.name,
      reason: kind === 'approved' ? file.approveReason : file.rejectReason,
      adverse,
      minute: next,
    });
  }

  function pick(i: number) {
    stop();
    setCur(i);
    setStates(waiting());
    setRecord(null);
  }

  return (
    <>
      <div className="rfapps rv" role="group" aria-label="Choose an application file">
        {RENT_FILES.map((f, i) => (
          <button
            type="button"
            className="chip"
            key={f.id}
            aria-pressed={cur === i}
            onClick={() => pick(i)}
          >
            {f.id} · {f.name}
          </button>
        ))}
      </div>

      <div className="rfgate rv">
        <div className="rfgate__h">
          <div>
            <p className="rfgate__id">Application {file.id}</p>
            <p className="rfgate__nm">{file.name}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="rfgate__id">{file.unit}</p>
            <p className="rfgate__id" style={{ marginTop: '6px' }}>{file.submitted}</p>
          </div>
        </div>

        <ul className="rfck">
          {file.checks.map((check, i) => {
            const state = states[i];
            const done = state === 'c' || state === 'a';
            return (
              <li key={check.name}>
                <span className="rfck__n">{i + 1}</span>
                <span>
                  <span className="rfck__t">{check.name}</span>
                  <span className="rfck__d">{done ? check.finding : check.description}</span>
                </span>
                <span className={`rfck__s rfck__s--${state}`}>{RENT_CHECK_LABEL[state]}</span>
              </li>
            );
          })}
        </ul>

        <div className="rfgate__d">
          <div className="rfgate__dr">
            <button type="button" className="btn btn--ghost btn--sm" onClick={run}>
              Run the five checks
            </button>
            <button
              type="button"
              className="btn btn--primary btn--sm"
              disabled={!open}
              onClick={() => decide('approved')}
            >
              Approve
            </button>
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              disabled={!open}
              onClick={() => decide('rejected')}
            >
              Reject
            </button>
            <span className="rfgate__note" aria-live="polite">
              {returned} of 5 returned · decision {open ? 'open' : 'closed'}
            </span>
          </div>

          <div aria-live="polite">
            {record && (
              <div className="rfrec">
                <p className="eyebrow eyebrow--plain" style={{ marginBottom: 0 }}>
                  Decision record · written, not typed
                </p>
                <dl>
                  <dt>Application</dt>
                  <dd>{record.fileId} · {record.fileName}</dd>
                  <dt>Decision</dt>
                  <dd>{record.kind === 'approved' ? 'Approved' : 'Rejected'}</dd>
                  <dt>Reason recorded</dt>
                  <dd>{record.reason}</dd>
                  <dt>Screening</dt>
                  <dd>
                    5 of 5 checks returned before the decision
                    {record.adverse ? ' · 1 adverse finding on file' : ' · no adverse findings'}
                  </dd>
                  <dt>Decided by</dt>
                  <dd>{RENT_DECIDED_BY}</dd>
                  <dt>Recorded at</dt>
                  <dd className="mono">
                    {RENT_RECORD_DATE}
                    {record.minute < 10 ? `0${record.minute}` : record.minute} · appended, not editable
                  </dd>
                </dl>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
