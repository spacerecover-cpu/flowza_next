import React from 'react';

/**
 * One sale at the counter: modifiers, a loyalty discount, VAT at the line and a
 * card tender. Retained from the earlier build — it is the left half of the
 * "one sale, two systems" pairing, and PostingList is the right half.
 */
export interface TillReceiptProps {
  className?: string;
}

export function TillReceipt({ className }: TillReceiptProps) {
  return (
    <div className={['till', className].filter(Boolean).join(' ')}>
      <div className="till__row">
        <span>KIOSK 04 · MALL OF DXB</span>
      </div>
      <div className="till__rule" />
      <div className="till__row">
        <span>Espresso ×2</span>
        <span>28.00</span>
      </div>
      <div className="till__row">
        <span>Beans 250g</span>
        <span>62.00</span>
      </div>
      <div className="till__row">
        <span>Loyalty −5%</span>
        <span>−4.50</span>
      </div>
      <div className="till__rule" />
      <div className="till__row">
        <span>VAT 5%</span>
        <span>4.28</span>
      </div>
      <div className="till__row till__tot">
        <span>TOTAL AED</span>
        <span>89.78</span>
      </div>
      <div className="till__rule" />
      <div className="till__row" style={{ color: 'var(--ledger-dark)' }}>
        <span>CARD ·· 4417</span>
        <span>APPROVED</span>
      </div>
    </div>
  );
}
