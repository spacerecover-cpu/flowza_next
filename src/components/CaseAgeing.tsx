import React from 'react';
import { CASE_AGE_BUCKETS } from '@/lib/data/publicsector';

export function CaseAgeing() {
  return (
    <svg
      className="dgm age"
      viewBox="0 0 600 240"
      role="img"
      aria-label="Case ageing distribution. 412 cases under seven days, 288 at eight to fourteen, 176 at fifteen to twenty-one, 94 at twenty-two to twenty-eight, then 51 and 38 beyond the twenty-eight day statutory threshold, making eighty-nine cases overdue."
    >
      <path d="M50 180H580" stroke="var(--edge)" strokeWidth="1" />
      <g stroke="var(--edge-2)" strokeWidth="1">
        <path d="M50 145H580" />
        <path d="M50 110H580" />
        <path d="M50 75H580" />
        <path d="M50 40H580" />
      </g>

      {CASE_AGE_BUCKETS.map((b) => (
        <rect
          key={b.label}
          className={`b${b.isLate ? ' late' : ''}`}
          x={b.barX}
          y={b.barY}
          width="70"
          height={b.barHeight}
        />
      ))}

      <path className="thr" d="M410 26V190" />
      <text x="414" y="24" fontSize="9" fill="var(--fg)">STATUTORY 28 DAYS</text>

      <g className="n">
        {CASE_AGE_BUCKETS.map((b) => (
          <text key={b.label} x={b.barX + 16} y={b.barY - 6}>{b.count}</text>
        ))}
      </g>

      <g className="x">
        {CASE_AGE_BUCKETS.map((b) => (
          <text key={b.label} x={b.barX + 6} y="198">{b.label}</text>
        ))}
        <text x="50" y="222">OPEN CASES BY AGE · MEAN 11.4 DAYS</text>
      </g>
    </svg>
  );
}
