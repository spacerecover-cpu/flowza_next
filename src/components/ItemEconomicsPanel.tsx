import React from 'react';

export interface EconomicsCell {
  label: string;
  value: string;
}

export interface ItemEconomicsPanelProps {
  eyebrow: string;
  title: string;
  cells: EconomicsCell[];
  note: string;
}

export function ItemEconomicsPanel({ eyebrow, title, cells, note }: ItemEconomicsPanelProps) {
  return (
    <div className="spx">
      <div className="spx__hd">
        <p className="mono" style={{ fontSize: '.5938rem', letterSpacing: '.12em', color: 'var(--fg-3)', marginBottom: '7px' }}>
          {eyebrow}
        </p>
        <p className="spx__n">{title}</p>
      </div>
      <div className="spx__g">
        {cells.map((cell, i) => (
          <div key={i} className="spx__c">
            <span className="spx__k">{cell.label}</span>
            <span className="spx__v">{cell.value}</span>
          </div>
        ))}
      </div>
      <div className="spx__ft">
        <p className="small">{note}</p>
      </div>
    </div>
  );
}
