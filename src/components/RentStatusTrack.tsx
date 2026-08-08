import React from 'react';

/**
 * Five statuses, and that is the whole shape.
 *
 * Server component — a static state diagram. Pending review leads to under
 * screening, which leads to approved or rejected; withdrawn is reachable from
 * either of the first two stages. All three terminal states carry a recorded
 * reason, which is what an inbox cannot promise.
 *
 * The counts on the boxes are the live pipeline further down the page in its
 * starting state: 6 / 4 / 5 / 3 / 2.
 */
export function RentStatusTrack() {
  return (
    <div className="dscroll" style={{ ['--dmin' as string]: '880px' }}>
      <svg
        viewBox="0 0 900 250"
        role="img"
        aria-label="The five statuses of a rental application drawn as a state diagram. Pending review leads to under screening, which leads to either approved or rejected; withdrawn is reachable from either of the first two stages when the applicant pulls out. Approved, rejected and withdrawn are terminal and each carries a recorded reason. The conclusion is that an application has exactly five places it can be, so nothing can sit in an unnamed state."
      >
        <rect className="bx" x="14" y="72" width="180" height="56" rx="2" />
        <text className="nm" x="30" y="98">PENDING REVIEW</text>
        <text className="nt" x="30" y="115">ARRIVED, NOT YET OPENED</text>
        <text className="nn" x="176" y="66" textAnchor="end">6 NOW</text>

        <line className="ln" x1="194" y1="100" x2="248" y2="100" />
        <polygon className="ar" points="248,96 258,100 248,104" />

        <rect className="bx" x="258" y="72" width="190" height="56" rx="2" />
        <text className="nm" x="274" y="98">UNDER SCREENING</text>
        <text className="nt" x="274" y="115">FIVE CHECKS OUT</text>
        <text className="nn" x="430" y="66" textAnchor="end">4 NOW</text>

        <path className="ln" d="M448 100H488V48H520" />
        <polygon className="ar" points="520,44 530,48 520,52" />
        <path className="ln" d="M488 100V152H520" />
        <polygon className="ar" points="520,148 530,152 520,156" />

        <rect className="bx bx--end" x="530" y="26" width="154" height="44" rx="2" />
        <text className="nm" x="546" y="53">APPROVED</text>
        <text className="nn" x="668" y="53" textAnchor="end">5</text>

        <rect className="bx bx--end" x="530" y="130" width="154" height="44" rx="2" />
        <text className="nm" x="546" y="157">REJECTED</text>
        <text className="nn" x="668" y="157" textAnchor="end">3</text>

        <path className="ln--w" d="M104 128V208H520" />
        <path className="ln--w" d="M353 128V208" />
        <polygon className="ar" points="520,204 530,208 520,212" />
        <rect className="bx bx--end" x="530" y="186" width="154" height="44" rx="2" />
        <text className="nm" x="546" y="213">WITHDRAWN</text>
        <text className="nn" x="668" y="213" textAnchor="end">2</text>
        <text className="cap" x="140" y="228">PULLED BY THE APPLICANT, FROM EITHER STAGE</text>

        <line className="ln--w" x1="712" y1="26" x2="712" y2="230" />
        <text className="cap" x="726" y="48">TERMINAL.</text>
        <text className="cap" x="726" y="64">A DECISION HERE IS</text>
        <text className="cap" x="726" y="80">WRITTEN WITH ITS</text>
        <text className="cap" x="726" y="96">REASON, ITS AUTHOR</text>
        <text className="cap" x="726" y="112">AND ITS TIMESTAMP.</text>
        <text className="cap" x="726" y="150">NOTHING SITS IN AN</text>
        <text className="cap" x="726" y="166">UNNAMED STATE, WHICH</text>
        <text className="cap" x="726" y="182">IS WHAT AN INBOX</text>
        <text className="cap" x="726" y="198">CANNOT PROMISE.</text>
      </svg>
    </div>
  );
}
