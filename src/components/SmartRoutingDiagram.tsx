import React from 'react';

/**
 * The ordered rule set behind one printed symbol: four rules, evaluated in
 * order, first match wins, with the unmatched remainder falling through to a
 * weighted split.
 *
 * A decision diagram, so it is a diagram — static SVG, no JavaScript. Nothing
 * here is interactive because nothing here has a state to be in.
 */
export function SmartRoutingDiagram() {
  return (
    <svg
      className="qfrt"
      viewBox="0 0 880 420"
      role="img"
      aria-label="A routing diagram for one printed code. A scan enters and is tested against four rules in order: a time-of-day rule sending morning scans to the breakfast menu, a location rule sending Abu Dhabi scans to the Abu Dhabi menu, a device rule splitting Android and iOS to their respective app store listings, and a default fifty-fifty split test between the winter menu and the loyalty signup page. Because the rules are evaluated in order and the first match wins, four different visitors scanning the same symbol reach four different destinations without a second code being printed."
    >
      <text x="16" y="20">ONE PRINTED SYMBOL · RULES EVALUATED IN ORDER · FIRST MATCH WINS</text>
      <rect className="box box--in" x="16" y="176" width="156" height="64" rx="2" />
      <text className="ent" x="32" y="204">SCAN ARRIVES</text>
      <text className="ent" x="32" y="222">QRF-UE-0042</text>
      <path className="spine" d="M172 208H206M206 64V352" />
      <g className="wire">
        <path d="M206 64H216" />
        <path d="M206 160H216" />
        <path d="M206 256H216" />
        <path d="M206 350H216" />
      </g>
      <g className="arw">
        <polygon points="216,60 224,64 216,68" />
        <polygon points="216,156 224,160 216,164" />
        <polygon points="216,252 224,256 216,260" />
        <polygon points="216,346 224,350 216,354" />
      </g>

      <rect className="box" x="224" y="36" width="316" height="56" rx="2" />
      <text className="ord" x="240" y="56">01 · TIME</text>
      <text className="cond" x="240" y="78">Scan between 06:00 and 11:00 local</text>
      <path className="wire" d="M540 64H598" />
      <polygon className="arw" points="598,60 606,64 598,68" />
      <rect className="box" x="606" y="42" width="258" height="44" rx="2" />
      <text className="dest" x="620" y="70">/menu/breakfast</text>

      <rect className="box" x="224" y="132" width="316" height="56" rx="2" />
      <text className="ord" x="240" y="152">02 · LOCATION</text>
      <text className="cond" x="240" y="174">Scan originates in Abu Dhabi</text>
      <path className="wire" d="M540 160H598" />
      <polygon className="arw" points="598,156 606,160 598,164" />
      <rect className="box" x="606" y="138" width="258" height="44" rx="2" />
      <text className="dest" x="620" y="166">/menu/abu-dhabi</text>

      <rect className="box" x="224" y="228" width="316" height="56" rx="2" />
      <text className="ord" x="240" y="248">03 · DEVICE</text>
      <text className="cond" x="240" y="270">Handset is Android, or handset is iOS</text>
      <path className="wire" d="M540 256H566M566 236V276M566 236H598M566 276H598" />
      <polygon className="arw" points="598,232 606,236 598,240" />
      <polygon className="arw" points="598,272 606,276 598,280" />
      <rect className="box" x="606" y="216" width="258" height="40" rx="2" />
      <text className="dest" x="620" y="241">Android · store listing</text>
      <rect className="box" x="606" y="256" width="258" height="40" rx="2" />
      <text className="dest" x="620" y="281">iOS · store listing</text>

      <rect className="box" x="224" y="322" width="316" height="56" rx="2" />
      <text className="ord" x="240" y="342">04 · DEFAULT · A/B SPLIT</text>
      <text className="cond" x="240" y="364">Everything else, weighted 50 / 50</text>
      <path className="split" d="M540 350H566M566 330V376M566 330H598M566 376H598" />
      <polygon className="splitt" points="598,326 606,330 598,334" />
      <polygon className="splitt" points="598,372 606,376 598,380" />
      <rect className="box" x="606" y="310" width="258" height="40" rx="2" />
      <text className="dest" x="620" y="335">A · 50% /menu/winter</text>
      <rect className="box" x="606" y="350" width="258" height="40" rx="2" />
      <text className="dest" x="620" y="375">B · 50% /loyalty/join</text>

      <text x="606" y="410">EACH ARM REPORTS SEPARATELY · SAME SYMBOL, SAME PLACEMENT</text>
    </svg>
  );
}
