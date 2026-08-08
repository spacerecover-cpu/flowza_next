'use client';

import React, { useCallback, useState } from 'react';
import { DAY, DayEvent } from '@/lib/data/timeline';

function fmt(h: number): string {
  const hh = Math.floor(h);
  const mm = Math.round((h - hh) * 60);
  return `${hh < 10 ? '0' : ''}${hh}:${mm < 10 ? '0' : ''}${mm}`;
}

export function DayTimeline() {
  const [selected, setSelected] = useState(0);

  const handleSelect = useCallback((i: number) => {
    setSelected(i);
  }, []);

  const event: DayEvent = DAY[selected];

  return (
    <div className="tl">
      <div className="tl__track" id="tlTrack">
        <div className="tl__hours" aria-hidden="true">
          <span>07</span>
          <span>09</span>
          <span>11</span>
          <span>13</span>
          <span>15</span>
          <span>17</span>
          <span>19</span>
        </div>
        {DAY.map((ev, i) => (
          <button
            key={i}
            type="button"
            className={[
              'tl__ev',
              ev.isAI ? 'is-ai' : '',
              i === selected ? 'is-on' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ left: `${((ev.hour - 7) / 14) * 100}%` }}
            aria-label={`${fmt(ev.hour)} — ${ev.isAI ? 'AI acted' : 'Person acted'}`}
            onClick={() => handleSelect(i)}
          />
        ))}
      </div>

      <label className="sr" htmlFor="tlScrub">
        Scrub through the working day
      </label>
      <input
        className="tl__scrub"
        id="tlScrub"
        type="range"
        min={0}
        max={DAY.length - 1}
        value={selected}
        step={1}
        onChange={(e) => handleSelect(parseInt(e.target.value, 10))}
      />

      <div className="tl__read" id="tlRead" aria-live="polite">
        <div>
          <div className="tl__time">{fmt(event.hour)}</div>
          <span className={`tag${event.isAI ? ' tag--ai' : ''}`} style={{ marginTop: '8px' }}>
            {event.isAI ? 'AI' : 'PERSON'}
          </span>
        </div>
        <p className="small" style={{ color: 'var(--fg)' }}>
          {event.text}
        </p>
      </div>
    </div>
  );
}
