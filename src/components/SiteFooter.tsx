import React from 'react';
import Link from 'next/link';

function BrandMark() {
  return (
    <svg className="brand__mark" viewBox="0 0 25 25" fill="none" aria-hidden="true">
      <rect width="25" height="25" rx="5.5" fill="#121412" />
      <path d="M6.5 18.5V12.5H12.5V6.5" stroke="#F6F6F3" strokeWidth="2" strokeLinecap="square" />
      <path d="M12.5 6.5H18.5" stroke="#34B37D" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div>
            <Link className="brand" href="/" style={{ marginBottom: 'var(--s4)' }}>
              <BrandMark />
              <span className="brand__word">Flowza</span>
            </Link>
            <p className="tiny" style={{ maxWidth: '34ch' }}>
              Nine systems. One operating fabric. Purpose-built business operating systems for MEA and India,
              sharing one data layer.
            </p>
            <span className="status" style={{ marginTop: 'var(--s5)' }}>
              <i></i> All systems operational
            </span>
          </div>

          <div>
            <h4>The nine systems</h4>
            <ul>
              <li><Link href="/products/finance">Flowza Finance</Link></li>
              <li><Link href="/products/logispro">Flowza LogisPro</Link></li>
              <li><Link href="/products/spamaster">Flowza Spa Master</Link></li>
              <li><Link href="/products/fleetza">Flowza Fleetza</Link></li>
              <li><Link href="/products/qrforge">Flowza QRForge</Link></li>
              <li><Link href="/products/pos">Flowza POS</Link></li>
              <li><Link href="/products/club">Flowza Club</Link></li>
              <li><Link href="/products/rentflow">Flowza RentFlow</Link></li>
              <li><Link href="/products/pms">Flowza PMS</Link></li>
            </ul>
          </div>

          <div>
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/industries">By industry</Link></li>
              <li><Link href="/solutions">By function</Link></li>
              <li><Link href="/industries?sector=retail-hospitality">Retail &amp; hospitality</Link></li>
              <li><Link href="/industries?sector=logistics-freight">Logistics &amp; freight</Link></li>
              <li><Link href="/solutions?team=finance">Office of the CFO</Link></li>
              <li><Link href="/solutions">Migration paths</Link></li>
            </ul>
          </div>

          <div>
            <h4>Platform</h4>
            <ul>
              <li><Link href="/platform">How the nine connect</Link></li>
              <li><Link href="/platform#schema">The shared records</Link></li>
              <li><Link href="/platform#api">Developer API</Link></li>
              <li><Link href="/#ai">AI and agents</Link></li>
              <li><Link href="/#integrations">Integrations</Link></li>
              <li><Link href="/#deployment">Migration</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/company">About Flowza</Link></li>
              <li><Link href="/company#howwework">How the team works</Link></li>
              <li><Link href="/company#partners">Partners</Link></li>
              <li><Link href="/company#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Trust</h4>
            <ul>
              <li><Link href="/enterprise">Security overview</Link></li>
              <li><Link href="/enterprise#access">Access and identity</Link></li>
              <li><Link href="/enterprise#data">Data and residency</Link></li>
              <li><Link href="/enterprise#assurance">Availability and assurance</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot__bar">
          <span className="foot__legal">© 2026 Flowza. All rights reserved.</span>
          <span className="foot__legal" style={{ marginLeft: 'auto' }}>
            Concept build — scenario figures and status indicators are illustrative. Published product
            statistics are as supplied.
          </span>
        </div>
      </div>
    </footer>
  );
}
