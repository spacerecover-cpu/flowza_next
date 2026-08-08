import React from 'react';

/**
 * A terminal fourteen minutes into an outage, reading out its own state. The
 * hero artefact for Flowza POS: the catalogue, prices and tax rules are on the
 * device, so the till is still selling and still counting what it owes the
 * ledger.
 */

interface Row {
  label: string;
  value: string;
  tone?: 'warn' | 'ok';
}

const ROWS: Row[] = [
  { label: 'Link', value: 'DOWN · 14 MIN', tone: 'warn' },
  { label: 'State', value: 'SELLING', tone: 'ok' },
  { label: 'Sales queued', value: '37', tone: 'warn' },
  { label: 'Catalogue', value: 'ON DEVICE' },
  { label: 'Prices & tax', value: 'ON DEVICE' },
  { label: 'Last sync', value: '13:39' },
];

export interface TerminalReadoutProps {
  className?: string;
}

export function TerminalReadout({ className }: TerminalReadoutProps) {
  return (
    <div className={['pterm', className].filter(Boolean).join(' ')}>
      <div className="pterm__h">
        <span>Terminal 04 · Mall of DXB</span>
        <span className="pterm__s">Offline</span>
      </div>
      <div className="pterm__b">
        {ROWS.map((row) => (
          <div className="pterm__r" key={row.label}>
            <span>{row.label}</span>
            <b className={row.tone}>{row.value}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
