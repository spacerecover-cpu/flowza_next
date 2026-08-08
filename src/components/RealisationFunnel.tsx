import React from 'react';

export function RealisationFunnel() {
  return (
    <svg
      className="dgm fnl"
      viewBox="0 0 600 330"
      role="img"
      aria-label="Funnel from hours worked to cash collected. One hundred hours worked, ninety-four recorded, eighty-one billable, seventy-six invoiced, seventy-four collected. Losses are six hours never recorded, thirteen written off as non-billable, five never invoiced and two credited."
    >
      <rect className="st" x="60" y="24" width="480" height="28" rx="2" />
      <text x="66" y="43" className="lab" fill="var(--instrument)">HOURS WORKED</text>
      <text x="530" y="43" className="num" fill="var(--instrument)" textAnchor="end">100</text>
      <text x="540" y="66" className="drop" textAnchor="end">−6 NEVER RECORDED · TIMESHEETS LATE</text>

      <rect className="st" x="60" y="76" width="451" height="28" rx="2" />
      <text x="66" y="95" className="lab" fill="var(--instrument)">RECORDED</text>
      <text x="501" y="95" className="num" fill="var(--instrument)" textAnchor="end">94</text>
      <text x="511" y="118" className="drop" textAnchor="end">−13 WRITTEN OFF AS NON-BILLABLE</text>

      <rect className="st" x="60" y="128" width="389" height="28" rx="2" />
      <text x="66" y="147" className="lab" fill="var(--instrument)">BILLABLE</text>
      <text x="439" y="147" className="num" fill="var(--instrument)" textAnchor="end">81</text>
      <text x="449" y="170" className="drop" textAnchor="end">−5 NEVER INVOICED · SCOPE DISPUTE</text>

      <rect className="st" x="60" y="180" width="365" height="28" rx="2" />
      <text x="66" y="199" className="lab" fill="var(--instrument)">INVOICED</text>
      <text x="415" y="199" className="num" fill="var(--instrument)" textAnchor="end">76</text>
      <text x="425" y="222" className="drop" textAnchor="end">−2 CREDITED</text>

      <rect x="60" y="232" width="355" height="28" rx="2" fill="var(--ledger-dark)" />
      <text x="66" y="251" className="lab" fill="var(--instrument)">COLLECTED</text>
      <text x="405" y="251" className="num" fill="var(--instrument)" textAnchor="end">74</text>

      <path d="M60 284H540" stroke="var(--line-d2)" strokeWidth="1" />
      <text x="60" y="308" className="lab" fill="var(--sig)">REALISATION 74% · 26 HOURS IN EVERY 100 NEVER BILLED</text>
    </svg>
  );
}
