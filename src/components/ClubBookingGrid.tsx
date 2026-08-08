'use client';

import React, { useState } from 'react';
import {
  CLUB_CANCEL_STEP_MS,
  CLUB_CLOCK_START,
  CLUB_PAIRS,
  CLUB_RACE_STEP_MS,
  CLUB_RESOURCES,
  CLUB_SLOTS,
  CLUB_SLOT_END,
  type ClubCell,
  type ClubLogLine,
} from '@/lib/data/club';

/**
 * The zero-double-book engine.
 *
 * Client component: this one has to be genuinely operable, because the claim is
 * that a conflicting booking cannot be created and a visitor should be able to
 * try. Selecting a free cell fires two requests at the same instant — one
 * commits, the other is refused by the exclusion constraint with SQLSTATE 23P01
 * and offered the waitlist. Selecting the won cell cancels it and the waiting
 * member is promoted through the same constraint, which by then has nothing to
 * conflict with.
 *
 * Nothing here validates in the application layer, because that is the point
 * being made.
 */

function pad(n: number, width: number): string {
  let s = String(n);
  while (s.length < width) s = '0' + s;
  return s;
}

/** HH:MM:SS.mmm from the running clock plus an offset in milliseconds. */
function ts(clock: number, offset: number): string {
  const ms = clock + offset;
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  return `${pad(h % 24, 2)}:${pad(m % 60, 2)}:${pad(s % 60, 2)}.${pad(ms % 1000, 3)}`;
}

function slotEnd(i: number): string {
  return CLUB_SLOTS[i + 1] ?? CLUB_SLOT_END;
}

type Grid = ClubCell[][];

function initialGrid(): Grid {
  return CLUB_RESOURCES.map((r) => r.cells.map((c) => ({ ...c })));
}

export interface ClubBookingGridProps {
  /** The "Declared once, on the resource" panel, rendered on the server. */
  children?: React.ReactNode;
}

export function ClubBookingGrid({ children }: ClubBookingGridProps) {
  const [grid, setGrid] = useState<Grid>(initialGrid);
  const [log, setLog] = useState<ClubLogLine[] | null>(null);
  const [logRef, setLogRef] = useState('Awaiting a request');
  const [note, setNote] = useState('');
  const [races, setRaces] = useState(0);
  const [clock, setClock] = useState(CLUB_CLOCK_START);

  function race(r: number, i: number) {
    const row = CLUB_RESOURCES[r];
    const pair = CLUB_PAIRS[races % CLUB_PAIRS.length];
    const slot = CLUB_SLOTS[i];
    const end = slotEnd(i);
    const where = `${row.name.split(' · ')[0].toLowerCase()}, ${slot}–${end}`;
    const stmt = `INSERT booking (resource ${r + 1}, ${slot}–${end})`;

    setGrid((prev) => {
      const next = prev.map((cells) => cells.slice());
      next[r][i] = { kind: 'won', member: pair[0], waiting: pair[1] };
      return next;
    });

    setLog([
      { time: ts(clock, 0), tag: 'REQ A', text: `BEGIN · ${stmt} · ${pair[0]}`, outcome: 'BEGIN', outcomeKind: 'n' },
      { time: ts(clock, 0), tag: 'REQ B', text: `BEGIN · ${stmt} · ${pair[1]}`, outcome: 'BEGIN', outcomeKind: 'n' },
      { time: ts(clock, 3), tag: 'REQ A', text: 'booking_no_overlap satisfied · row written', outcome: 'COMMIT', outcomeKind: 'ok' },
      {
        time: ts(clock, 3),
        tag: 'REQ B',
        text: 'booking_no_overlap violated · no row written',
        outcome: 'ROLLBACK',
        outcomeKind: 'no',
        error: 'ERROR 23P01: conflicting key value violates exclusion constraint "booking_no_overlap"',
      },
      { time: ts(clock, 4), tag: 'REQ B', text: `INSERT waitlist (position 1) · ${pair[1]}`, outcome: 'COMMIT', outcomeKind: 'ok' },
      {
        time: ts(clock, 6),
        tag: 'SYS',
        text: `WhatsApp → ${pair[1]}: first on the waitlist for ${where}. You will be told the moment it opens.`,
        outcome: 'SENT',
        outcomeKind: 'ok',
      },
    ]);

    setLogRef(`${row.name} · ${slot}`);
    setNote(
      `${pair[0]} holds ${row.name.toLowerCase()} at ${slot}; ${pair[1]} is first on the waitlist. ` +
        'Select that slot again to cancel it and watch the promotion.'
    );
    setRaces((n) => n + 1);
    setClock((c) => c + CLUB_RACE_STEP_MS);
  }

  function cancel(r: number, i: number) {
    const row = CLUB_RESOURCES[r];
    const cell = grid[r][i];
    const winner = cell.member ?? '';
    const waiting = cell.waiting ?? '';
    const slot = CLUB_SLOTS[i];
    const end = slotEnd(i);
    const where = `${row.name.split(' · ')[0].toLowerCase()}, ${slot}–${end}`;

    setGrid((prev) => {
      const next = prev.map((cells) => cells.slice());
      next[r][i] = { kind: 'booked', member: waiting, note: 'Promoted' };
      return next;
    });

    setLog((prev) => [
      ...(prev ?? []),
      { time: ts(clock, 0), tag: 'REQ A', text: `UPDATE booking SET status = cancelled · ${winner}`, outcome: 'COMMIT', outcomeKind: 'ok' },
      {
        time: ts(clock, 2),
        tag: 'SYS',
        text: `waitlist position 1 → booking · ${waiting} · same constraint, now unopposed`,
        outcome: 'COMMIT',
        outcomeKind: 'ok',
      },
      {
        time: ts(clock, 5),
        tag: 'SYS',
        text: `WhatsApp → ${waiting}: ${where} is yours. Charged to your account.`,
        outcome: 'SENT',
        outcomeKind: 'ok',
      },
    ]);

    setNote(
      `Cancelled. ${waiting} was promoted from the waitlist into the slot automatically, through the ` +
        'same constraint — which by then had nothing to conflict with.'
    );
    setClock((c) => c + CLUB_CANCEL_STEP_MS);
  }

  function renderCell(r: number, i: number) {
    const row = CLUB_RESOURCES[r];
    const cell = grid[r][i];
    const slot = CLUB_SLOTS[i];
    const label = `${row.name} at ${slot}`;
    const key = `${r}-${i}`;

    if (cell.kind === 'blocked') {
      return (
        <div className="clbc clbc--blk" key={key}>
          <span className="clbc__s">{cell.note}</span>
          <span className="sr">{label} — withdrawn from service, {cell.note}</span>
        </div>
      );
    }

    if (cell.kind === 'free') {
      return (
        <button
          type="button"
          className="clbc clbc--free"
          key={key}
          onClick={() => race(r, i)}
          aria-label={`${label}, free. Send two simultaneous requests for this slot.`}
        >
          <span className="sr">Free</span>
        </button>
      );
    }

    if (cell.kind === 'won') {
      return (
        <button
          type="button"
          className="clbc clbc--won"
          key={key}
          onClick={() => cancel(r, i)}
          aria-label={`${label}, booked by ${cell.member} with ${cell.waiting} first on the waitlist. Cancel this booking to promote the waitlist.`}
        >
          <span className="clbc__m">{cell.member}</span>
          <span className="clbc__s">Committed</span>
          <span className="clbc__w">Waitlist 1 · {cell.waiting}</span>
        </button>
      );
    }

    return (
      <div className="clbc clbc--bk" key={key}>
        <span className="clbc__m">{cell.member}</span>
        <span className="clbc__s">{cell.note ?? row.pattern}</span>
        <span className="sr">{label} to {slotEnd(i)}, booked</span>
      </div>
    );
  }

  return (
    <>
      <div className="clbg rv">
        <div className="clbg__s">
          <div className="clbg__t">
            <div className="clbg__r clbg__hd">
              <span>Resource · no-overlap constraint</span>
              {CLUB_SLOTS.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div>
              {CLUB_RESOURCES.map((row, r) => (
                <div className="clbg__r" key={row.name}>
                  <div className="clbg__rl">
                    <span className="clbg__rn">{row.name}</span>
                    <span className="clbg__rx">
                      {row.vertical.toUpperCase()} · RES {r + 1} · NO-OVERLAP
                    </span>
                  </div>
                  {CLUB_SLOTS.map((_, i) => renderCell(r, i))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="clbg__ft">
          <span className="clbkey"><i className="k--fr" />Free</span>
          <span className="clbkey"><i className="k--bk" />Booked</span>
          <span className="clbkey"><i className="k--wo" />Won the race</span>
          <span className="clbkey"><i className="k--bl" />Withdrawn from service</span>
        </div>
      </div>

      <p className="tiny rv" style={{ marginTop: 'var(--s4)', maxWidth: '88ch' }}>
        Saturday morning, illustrative. Every row is one bookable resource and carries its own overlap
        constraint; the two blocked columns on Court 3 are a resurfacing job, held by the same mechanism
        that holds a booking. <span aria-live="polite">{note}</span>
      </p>

      <div className="cols" style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
        <div className="c-7 rv">
          <div className="clblog">
            <div className="clblog__h">
              <span>Transaction log</span>
              <span>{logRef}</span>
            </div>
            <div className="clblog__b" aria-live="polite">
              {log === null ? (
                <p className="clblog__idle">No contended slot yet. Select an empty cell above.</p>
              ) : (
                log.map((line, k) => (
                  <div className="clblog__l" key={k}>
                    <span className="clblog__t">{line.time}</span>
                    <span className="clblog__r">{line.tag}</span>
                    <span className="clblog__x">{line.text}</span>
                    <span className={`clblog__o clblog__o--${line.outcomeKind}`}>{line.outcome}</span>
                    {line.error && <span className="clblog__e">{line.error}</span>}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="c-5 rv rv-d2">{children}</div>
      </div>
    </>
  );
}
