import React from 'react';

export function BomExplosion() {
  return (
    <div className="rv">
      <div className="bom">
        <div className="bom__hd">
          <span>Part</span>
          <span>Qty</span>
          <span>On hand</span>
          <span>Status</span>
        </div>
        <div className="bom__r is-root" data-d="0">
          <span className="bom__p">Lift arm assembly<span>HLA-2500 · order 240</span></span>
          <span className="bom__n">1</span>
          <span className="bom__n">—</span>
          <span className="bom__s build">BUILD</span>
        </div>
        <div className="bom__r" data-d="1">
          <span className="bom__p">Main casting<span>MC-114</span></span>
          <span className="bom__n">1</span>
          <span className="bom__n">412</span>
          <span className="bom__s ok">OK</span>
        </div>
        <div className="bom__r is-short" data-d="1">
          <span className="bom__p">Hydraulic ram<span>HR-88 · sub-assembly</span></span>
          <span className="bom__n">1</span>
          <span className="bom__n">38</span>
          <span className="bom__s short">SHORT 202</span>
        </div>
        <div className="bom__r" data-d="2">
          <span className="bom__p">Seal kit<span>SK-12</span></span>
          <span className="bom__n">2</span>
          <span className="bom__n">900</span>
          <span className="bom__s ok">OK</span>
        </div>
        <div className="bom__r is-short" data-d="2">
          <span className="bom__p">Piston rod<span>PR-40 · lead time 21d</span></span>
          <span className="bom__n">1</span>
          <span className="bom__n">61</span>
          <span className="bom__s short">SHORT 141</span>
        </div>
        <div className="bom__r" data-d="1">
          <span className="bom__p">Pivot pin<span>PP-08</span></span>
          <span className="bom__n">4</span>
          <span className="bom__n">2,140</span>
          <span className="bom__s ok">OK</span>
        </div>
        <div className="bom__r" data-d="1">
          <span className="bom__p">Fastener kit<span>FK-01</span></span>
          <span className="bom__n">1</span>
          <span className="bom__n">780</span>
          <span className="bom__s ok">OK</span>
        </div>
      </div>
      <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
        The order is for 240 units. Thirty-eight rams are on hand and building more needs a piston rod that is also short on a twenty-one day lead time, so 202 units are blocked by one component two levels down. The promise date follows the piston rod, not the casting — and the buyer is told today rather than at the next shortage meeting.
      </p>
    </div>
  );
}
