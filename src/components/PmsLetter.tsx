'use client';

import React, { useState } from 'react';
import { PMS_LETTER_VARIANTS, PMS_VERIFY } from '@/lib/data/pms';

/**
 * The verifiable letter, beside its public verification page.
 *
 * Client component: one toggle edits two lines of the letter — the leaving date
 * and the grade — and the verification flips to "check failed: content does not
 * match the signed record". Issuer, issue date, type and status still pass. The
 * letter still looks right; the comparison is what fails.
 *
 * That is the whole argument of the set piece, so the two states have to be
 * operable rather than described.
 */
export function PmsLetter() {
  const [bad, setBad] = useState(false);
  const variant = PMS_LETTER_VARIANTS[bad ? 1 : 0];
  const v = bad ? PMS_VERIFY.bad : PMS_VERIFY.ok;
  const edited = variant.edited ? 'pmslt__ed' : undefined;

  return (
    <>
      <div className="pmsvr__tools rv">
        {PMS_LETTER_VARIANTS.map((option, i) => (
          <button
            type="button"
            className="chip"
            key={option.chip}
            aria-pressed={bad === (i === 1)}
            onClick={() => setBad(i === 1)}
          >
            {option.chip}
          </button>
        ))}
      </div>

      <div className="cols">
        <div className="c-6 rv">
          <div className="pmslt">
            <div className="pmslt__h">
              <div className="pmslt__co">
                Northwind Metal Works FZ-LLC
                <span>Operations · Dubai</span>
              </div>
              <div className="pmslt__m">
                LETTER LTR-26-0418<br />
                ISSUED 14 JUL 2026<br />
                TYPE EXPERIENCE
              </div>
            </div>
            <p className="pmslt__t">Certificate of employment</p>
            <p>
              This is to certify that <b>Ayesha Rahman</b>, employee ID EMP-4118, was employed by
              Northwind Metal Works FZ-LLC from 3 March 2022 until{' '}
              <span className={edited}>{variant.date}</span>.
            </p>
            <p>
              Her position on leaving was <span className={edited}>{variant.role}</span>, in the
              Operations function. She left of her own accord and her final dues were settled in full.
            </p>
            <p>
              This letter is issued at the employee&rsquo;s request. It is signed with the
              organisation&rsquo;s key, and anyone holding it can check that it was issued by us and
              has not been altered, at the address below.
            </p>
            <div className="pmslt__sig">
              <div className="pmslt__sg">
                APPROVED BY S. KRISHNAN · HEAD OF PEOPLE<br />
                14 JUL 2026 · 11:42 GST<br />
                KEY FINGERPRINT 4C9E · 21A7 · 88B2 · 0F3D
              </div>
              <div className="pmslt__qr" aria-hidden="true">
                SCAN TO<br />VERIFY
              </div>
            </div>
          </div>
          <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
            An illustrative experience letter. Offer letters and increment letters carry the same
            approval, the same signature and the same public check.
          </p>
        </div>

        <div className="c-6 rv rv-d2">
          <div className="pmsvr">
            <div className="pmsvr__url">
              <i />
              pms.flowza.ai/verify/LTR-26-0418
            </div>
            <div className="pmsvr__b" aria-live="polite">
              <span className={`pmsvr__v pmsvr__v--${v.kind}`}>{v.badge}</span>
              <p className="pmsvr__hd">{v.heading}</p>
              <ul className="pmsvr__l">
                {v.rows.map((row) => (
                  <li key={row.label}>
                    <i className={row.pass ? undefined : 'x'}>{row.pass ? '✓' : '✕'}</i>
                    <span>{row.label}</span>
                    <b>{row.value}</b>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pmsvr__f">{v.foot}</div>
          </div>
          <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
            Select the second option above to edit two lines of the letter and check the altered copy.
            The document still looks correct; the comparison against the signed record is what fails.
          </p>
        </div>
      </div>
    </>
  );
}
