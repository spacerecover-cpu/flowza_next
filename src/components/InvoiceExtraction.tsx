import React from 'react';

/**
 * The hero artefact: a supplier invoice on the left, and what FlowZa read off
 * it on the right. The highlighted marks on the document are the lines the
 * extraction cites, which is the point — the proposal carries its evidence.
 */
export interface InvoiceExtractionProps {
  className?: string;
}

export function InvoiceExtraction({ className }: InvoiceExtractionProps) {
  return (
    <div className={['cols', className].filter(Boolean).join(' ')} style={{ gap: 'var(--s5)' }}>
      <div className="c-7">
        <div className="doc">
          <div className="doc__h">
            <div>
              <div className="doc__co">Northwind Supplies</div>
              <div className="mono tiny" style={{ marginTop: '2px' }}>
                VAT 100 4471 22
              </div>
            </div>
            <div className="doc__meta">
              INVOICE <span className="mark">NW-88214</span>
              <br />
              DATE <span className="mark">14 JUL 2026</span>
              <br />
              TERMS NET 30
            </div>
          </div>
          <div className="doc__line">
            <span>Steel bracket, 40mm</span>
            <span>240</span>
            <span>3,120.00</span>
          </div>
          <div className="doc__line">
            <span>Powder coating</span>
            <span>240</span>
            <span>648.00</span>
          </div>
          <div className="doc__line">
            <span>Freight — inbound</span>
            <span>1</span>
            <span className="mark">185.00</span>
          </div>
          <div className="doc__tot">
            <span>TOTAL AED</span>
            <span className="mark">3,953.00</span>
          </div>
        </div>
      </div>

      <div className="c-5">
        <p
          className="mono"
          style={{
            fontSize: '.625rem',
            letterSpacing: '.11em',
            color: 'var(--slate-2)',
            marginBottom: 'var(--s4)',
          }}
        >
          EXTRACTED &amp; MATCHED
        </p>
        <div className="pull">
          <span className="pull__i">↳</span>
          <span>
            <span className="pull__f">Supplier</span>
            <span className="pull__v">par_3c91 · Northwind</span>
          </span>
        </div>
        <div className="pull">
          <span className="pull__i">↳</span>
          <span>
            <span className="pull__f">Matched</span>
            <span className="pull__v">PO-2211 · 3-way ✓</span>
          </span>
        </div>
        <div className="pull">
          <span className="pull__i">↳</span>
          <span>
            <span className="pull__f">Freight treatment</span>
            <span className="pull__v">Capitalised to item cost</span>
          </span>
        </div>
        <div className="pull" style={{ borderBottom: 0 }}>
          <span className="pull__i">↳</span>
          <span>
            <span className="pull__f">Due</span>
            <span className="pull__v">13 Aug · early-pay 2%</span>
          </span>
        </div>
        <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
          Three-way matched against the purchase order and the goods received note before anything
          posts. Freight was capitalised because your policy puts inbound freight on stock items
          into cost — a rule that came from a correction you made in March.
        </p>
      </div>
    </div>
  );
}
