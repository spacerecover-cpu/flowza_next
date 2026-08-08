import React from 'react';

export interface HandoffDiagramProps {
  className?: string;
}

export function HandoffDiagram({ className }: HandoffDiagramProps) {
  return (
    <div className={`hand-scroll${className ? ` ${className}` : ''}`}>
      <svg
        className="dgm hand"
        viewBox="0 0 1000 250"
        role="img"
        aria-label="Diagram comparing quote-to-cash across six stages. Today, the revenue-to-operations and operations-to-finance boundaries each require a scheduled sync. On Flowza the six stages sit on one continuous record."
      >
        <text x="0" y="14" className="fn">TODAY · THREE SYSTEMS</text>
        <g>
          <rect className="bx" x="40" y="28" width="120" height="42" rx="2" />
          <text x="56" y="54" className="st">Quote</text>
          <rect className="bx" x="200" y="28" width="120" height="42" rx="2" />
          <text x="216" y="54" className="st">Order</text>
          <rect className="bx" x="360" y="28" width="120" height="42" rx="2" />
          <text x="376" y="54" className="st">Allocate</text>
          <rect className="bx" x="520" y="28" width="120" height="42" rx="2" />
          <text x="536" y="54" className="st">Fulfil</text>
          <rect className="bx" x="680" y="28" width="120" height="42" rx="2" />
          <text x="696" y="54" className="st">Invoice</text>
          <rect className="bx" x="840" y="28" width="120" height="42" rx="2" />
          <text x="856" y="54" className="st">Cash</text>
        </g>
        <g stroke="var(--edge)" strokeWidth="1" fill="none">
          <path d="M160 49H200" />
          <path d="M480 49H520" />
          <path d="M800 49H840" />
        </g>
        <g stroke="var(--sig-amber)" strokeWidth="1.2" fill="none" strokeDasharray="3 3">
          <path d="M320 49H360" />
          <path d="M640 49H680" />
        </g>
        <text x="300" y="20" className="warn">SYNC</text>
        <text x="620" y="20" className="warn">SYNC</text>
        <g className="fn">
          <text x="40" y="86">REVENUE</text>
          <text x="200" y="86">REVENUE</text>
          <text x="360" y="86">OPERATIONS</text>
          <text x="520" y="86">OPERATIONS</text>
          <text x="680" y="86">FINANCE</text>
          <text x="840" y="86">FINANCE</text>
        </g>

        <path d="M0 118H1000" stroke="var(--edge-2)" strokeWidth="1" />
        <text x="0" y="146" className="fn" fill="var(--sig)">ON FLOWZA · ONE RECORD</text>
        <path d="M40 181H960" stroke="var(--sig)" strokeWidth="1.4" fill="none" />
        <g>
          <rect className="bx-live" x="40" y="160" width="120" height="42" rx="2" />
          <text x="56" y="186" className="st">Quote</text>
          <rect className="bx-live" x="200" y="160" width="120" height="42" rx="2" />
          <text x="216" y="186" className="st">Order</text>
          <rect className="bx-live" x="360" y="160" width="120" height="42" rx="2" />
          <text x="376" y="186" className="st">Allocate</text>
          <rect className="bx-live" x="520" y="160" width="120" height="42" rx="2" />
          <text x="536" y="186" className="st">Fulfil</text>
          <rect className="bx-live" x="680" y="160" width="120" height="42" rx="2" />
          <text x="696" y="186" className="st">Invoice</text>
          <rect className="bx-live" x="840" y="160" width="120" height="42" rx="2" />
          <text x="856" y="186" className="st">Cash</text>
        </g>
        <text x="40" y="222" className="fn">SAME TRANSACTION · SAME PARTY · SAME PERMISSIONS THROUGHOUT</text>
      </svg>
    </div>
  );
}
