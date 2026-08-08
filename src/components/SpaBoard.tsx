'use client';

import React, { useState } from 'react';
import { SPA, ROOM_NAMES } from '@/lib/data/spa';

/** Converts minutes offset from 09:00 into HH:MM string */
function fmt(minutes: number): string {
  const total = 540 + minutes;
  const hh = Math.floor(total / 60);
  const mm = total % 60;
  return `${hh < 10 ? '0' : ''}${hh}:${mm < 10 ? '0' : ''}${mm}`;
}

const PX_PER_MIN = 0.9;

export interface SpaBoardProps {
  /** Default selected room index (0-based) */
  initialRoom?: number;
  /** Default selected appointment index within that room */
  initialAppt?: number;
}

export function SpaBoard({ initialRoom = 4, initialAppt = 0 }: SpaBoardProps) {
  const [sel, setSel] = useState<{ room: number; appt: number }>({ room: initialRoom, appt: initialAppt });

  const appt = SPA[sel.room][sel.appt];

  const hours = Array.from({ length: 10 }, (_, i) => i + 9);

  return (
    <div className="bwrap rv">
      <div className="bscroll">
        <div className="bgrid">
          <div className="bhead">
            <div />
            {ROOM_NAMES.map((name) => (
              <div key={name}>{name}</div>
            ))}
          </div>
          <div className="bbody" id="spaBoard">
            <div className="btimes">
              {hours.map((h) => (
                <div key={h}>{h < 10 ? '0' : ''}{h}:00</div>
              ))}
            </div>
            {SPA.map((room, ri) => (
              <div key={ri} className="bcol">
                {room.map((a, ai) => {
                  const isOn = sel.room === ri && sel.appt === ai;
                  return (
                    <button
                      key={ai}
                      type="button"
                      className={`appt${isOn ? ' is-on' : ''}`}
                      style={{
                        top: `${a.start * PX_PER_MIN}px`,
                        height: `${a.duration * PX_PER_MIN - 2}px`,
                      }}
                      onClick={() => setSel({ room: ri, appt: ai })}
                      aria-pressed={isOn}
                    >
                      <span className="appt__t">{a.treatment}</span>
                      <span className="appt__m">{a.therapist} · {a.ticket}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bdetail" aria-live="polite">
        <div>
          <span className="bd__k">Treatment</span>
          <span className="bd__v">{appt.treatment}</span>
        </div>
        <div>
          <span className="bd__k">Therapist</span>
          <span className="bd__v">{appt.therapist}</span>
        </div>
        <div>
          <span className="bd__k">Window</span>
          <span className="bd__v mono">{fmt(appt.start)}–{fmt(appt.start + appt.duration)}</span>
        </div>
        <div>
          <span className="bd__k">Client</span>
          <span className="bd__v">{appt.client}</span>
        </div>
        <div>
          <span className="bd__k">Ticket</span>
          <span className="bd__v mono">AED {appt.ticket}</span>
        </div>
        <div>
          <span className="bd__k">Contribution</span>
          <span className="bd__v mono" style={{ color: 'var(--sig)' }}>AED {appt.contribution}</span>
        </div>
      </div>
    </div>
  );
}
